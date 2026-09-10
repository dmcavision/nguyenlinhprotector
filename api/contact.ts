import { Resend } from 'resend';

const MAX_BODY_BYTES = 25_000;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT = 5;
const attempts = new Map<string, number[]>();

const relationships = new Set([
  'owner',
  'employee',
  'authorized-representative',
  'content-uploader',
  'agency',
  'other',
]);
const issueTypes = new Set(['copyright', 'dmca', 'counter', 'brand', 'other']);

type Inquiry = {
  locale: 'en' | 'vi';
  name: string;
  email: string;
  organization: string;
  relationship: string;
  issueType: string;
  platform: string;
  urls: string[];
  message: string;
};

function textValue(data: FormData, key: string): string {
  const value = data.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

function validEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

function hasControlCharacters(value: string): boolean {
  return /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(value);
}

export function validateInquiry(data: FormData): {
  inquiry?: Inquiry;
  error?: string;
  spam?: boolean;
} {
  if (textValue(data, 'company_website')) return { spam: true };

  const locale = textValue(data, 'locale') === 'vi' ? 'vi' : 'en';
  const name = textValue(data, 'name');
  const email = textValue(data, 'email').toLowerCase();
  const organization = textValue(data, 'organization');
  const relationship = textValue(data, 'relationship');
  const issueType = textValue(data, 'issueType');
  const platform = textValue(data, 'platform');
  const message = textValue(data, 'message');
  const consent = textValue(data, 'consent');
  const urlLines = textValue(data, 'urls')
    .split(/\r?\n/)
    .map((value) => value.trim())
    .filter(Boolean);

  if (
    name.length < 2 ||
    name.length > 100 ||
    /[\r\n]/.test(name) ||
    hasControlCharacters(name)
  )
    return { error: 'name' };
  if (!validEmail(email)) return { error: 'email' };
  if (organization.length > 120 || hasControlCharacters(organization))
    return { error: 'organization' };
  if (!relationships.has(relationship)) return { error: 'relationship' };
  if (!issueTypes.has(issueType)) return { error: 'issueType' };
  if (
    !platform ||
    platform.length > 120 ||
    /[\r\n]/.test(platform) ||
    hasControlCharacters(platform)
  )
    return { error: 'platform' };
  if (!urlLines.length || urlLines.length > 20) return { error: 'urls' };
  for (const value of urlLines) {
    try {
      const parsed = new URL(value);
      if (!['http:', 'https:'].includes(parsed.protocol))
        return { error: 'urls' };
    } catch {
      return { error: 'urls' };
    }
  }
  if (
    message.length < 20 ||
    message.length > 4000 ||
    hasControlCharacters(message)
  )
    return { error: 'message' };
  if (consent !== 'yes') return { error: 'consent' };

  return {
    inquiry: {
      locale,
      name,
      email,
      organization,
      relationship,
      issueType,
      platform,
      urls: urlLines,
      message,
    },
  };
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      })[character] ?? character,
  );
}

function json(body: Record<string, unknown>, status = 200): Response {
  return Response.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

function htmlResult(locale: 'en' | 'vi', ok: boolean): Response {
  const back = locale === 'vi' ? '/vi/lien-he/' : '/contact/';
  const title = ok
    ? locale === 'vi'
      ? 'Yêu cầu đã được gửi'
      : 'Inquiry sent'
    : locale === 'vi'
      ? 'Không thể gửi yêu cầu'
      : 'Unable to send inquiry';
  const message = ok
    ? locale === 'vi'
      ? 'Chúng tôi sẽ xem xét thông tin và phản hồi qua email bạn cung cấp.'
      : 'We will review the information and respond using the email provided.'
    : locale === 'vi'
      ? 'Vui lòng quay lại biểu mẫu hoặc liên hệ trực tiếp qua email.'
      : 'Please return to the form or contact us directly by email.';
  return new Response(
    `<!doctype html><html lang="${locale}"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="robots" content="noindex"><title>${title}</title><style>body{margin:0;background:#071a2b;color:#fff;font:16px/1.7 system-ui,sans-serif}.box{width:min(620px,calc(100% - 40px));margin:12vh auto;padding:36px;border:1px solid #36536a;border-radius:6px}p{color:#b8c9d6}a{display:inline-block;margin-top:14px;padding:12px 18px;border-radius:3px;background:#2864ff;color:#fff;text-decoration:none}</style><main class="box"><h1>${title}</h1><p>${message}</p><a href="${back}">${locale === 'vi' ? 'Quay lại trang liên hệ' : 'Return to contact page'}</a></main></html>`,
    {
      status: ok ? 200 : 500,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff',
      },
    },
  );
}

function allowedOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return true;
  try {
    const hostname = new URL(origin).hostname;
    const previewHostname = process.env.VERCEL_URL;
    return (
      hostname === 'nguyenlinhprotector.net' ||
      hostname === 'www.nguyenlinhprotector.net' ||
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      (previewHostname !== undefined && hostname === previewHostname)
    );
  } catch {
    return false;
  }
}

function rateLimited(request: Request): boolean {
  const forwarded =
    request.headers.get('x-vercel-forwarded-for') ??
    request.headers.get('x-forwarded-for') ??
    'unknown';
  const ip = forwarded.split(',')[0]?.trim() || 'unknown';
  const now = Date.now();
  if (attempts.size > 1000) {
    for (const [key, values] of attempts) {
      if (!values.some((timestamp) => now - timestamp < RATE_WINDOW_MS))
        attempts.delete(key);
    }
  }
  const recent = (attempts.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_WINDOW_MS,
  );
  recent.push(now);
  attempts.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

async function handleContact(request: Request): Promise<Response> {
  const wantsJson = request.headers.get('accept')?.includes('application/json');
  if (request.method !== 'POST')
    return json({ ok: false, error: 'method_not_allowed' }, 405);
  if (!allowedOrigin(request))
    return json({ ok: false, error: 'invalid_origin' }, 403);
  if (rateLimited(request))
    return new Response(JSON.stringify({ ok: false, error: 'rate_limited' }), {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
        'Retry-After': '900',
      },
    });

  const length = Number(request.headers.get('content-length') ?? 0);
  if (length > MAX_BODY_BYTES)
    return json({ ok: false, error: 'payload_too_large' }, 413);

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return json({ ok: false, error: 'invalid_form' }, 400);
  }
  const result = validateInquiry(data);
  if (result.spam)
    return wantsJson ? json({ ok: true }) : htmlResult('en', true);
  if (!result.inquiry)
    return wantsJson
      ? json({ ok: false, error: result.error ?? 'invalid_form' }, 400)
      : htmlResult(textValue(data, 'locale') === 'vi' ? 'vi' : 'en', false);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey)
    return wantsJson
      ? json({ ok: false, error: 'service_unavailable' }, 503)
      : htmlResult(result.inquiry.locale, false);

  const inquiry = result.inquiry;
  const destination =
    process.env.CONTACT_TO_EMAIL ?? 'inquiry@nguyenlinhprotector.net';
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    'Nguyen Linh Protector <notifications@nguyenlinhprotector.net>';
  const id = crypto.randomUUID();
  const safe = Object.fromEntries(
    Object.entries(inquiry).map(([key, value]) => [
      key,
      Array.isArray(value)
        ? value.map((item) => escapeHtml(item)).join('<br>')
        : escapeHtml(value),
    ]),
  );
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: destination,
    replyTo: inquiry.email,
    subject: `[Website inquiry] ${inquiry.issueType} — ${inquiry.name}`,
    text: [
      `Inquiry ID: ${id}`,
      `Name: ${inquiry.name}`,
      `Email: ${inquiry.email}`,
      `Organization: ${inquiry.organization || 'Not provided'}`,
      `Relationship: ${inquiry.relationship}`,
      `Issue type: ${inquiry.issueType}`,
      `Platform: ${inquiry.platform}`,
      `URLs:\n${inquiry.urls.join('\n')}`,
      `Message:\n${inquiry.message}`,
    ].join('\n\n'),
    html: `<h1>New website inquiry</h1><p><strong>Inquiry ID:</strong> ${id}</p><table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse"><tr><th align="left">Name</th><td>${safe.name}</td></tr><tr><th align="left">Email</th><td>${safe.email}</td></tr><tr><th align="left">Organization</th><td>${safe.organization || 'Not provided'}</td></tr><tr><th align="left">Relationship</th><td>${safe.relationship}</td></tr><tr><th align="left">Issue type</th><td>${safe.issueType}</td></tr><tr><th align="left">Platform</th><td>${safe.platform}</td></tr><tr><th align="left">URLs</th><td>${safe.urls}</td></tr></table><h2>Explanation</h2><p style="white-space:pre-wrap">${safe.message}</p>`,
    headers: { 'X-Inquiry-ID': id },
  });

  if (error) {
    console.error('Resend inquiry error', { id, name: error.name });
    return wantsJson
      ? json({ ok: false, error: 'delivery_failed' }, 502)
      : htmlResult(inquiry.locale, false);
  }

  const confirmation =
    inquiry.locale === 'vi'
      ? {
          subject: 'Nguyen Linh Protector đã nhận yêu cầu của bạn',
          text: `Xin chào ${inquiry.name},\n\nChúng tôi đã nhận yêu cầu ${id} và sẽ xem xét thông tin bạn cung cấp. Email xác nhận này không có nghĩa vụ việc đã được chấp nhận hoặc báo cáo đã được gửi đến nền tảng.\n\nNguyen Linh Protector`,
        }
      : {
          subject: 'Nguyen Linh Protector received your inquiry',
          text: `Hello ${inquiry.name},\n\nWe received inquiry ${id} and will review the information you provided. This acknowledgment does not mean the matter has been accepted or that a platform report has been submitted.\n\nNguyen Linh Protector`,
        };
  const acknowledgment = await resend.emails.send({
    from,
    to: inquiry.email,
    replyTo: destination,
    subject: confirmation.subject,
    text: confirmation.text,
  });
  if (acknowledgment.error)
    console.error('Resend acknowledgment error', {
      id,
      name: acknowledgment.error.name,
    });

  return wantsJson ? json({ ok: true, id }) : htmlResult(inquiry.locale, true);
}

export default { fetch: handleContact };
