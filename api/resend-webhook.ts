import { Resend, type WebhookEventPayload } from 'resend';

const MAX_WEBHOOK_BYTES = 64_000;
const trackedEvents = new Set([
  'email.delivered',
  'email.bounced',
  'email.failed',
  'email.complained',
]);

function response(body: Record<string, unknown>, status = 200): Response {
  return Response.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

async function handleWebhook(request: Request): Promise<Response> {
  if (request.method !== 'POST')
    return response({ ok: false, error: 'method_not_allowed' }, 405);

  const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;
  if (!webhookSecret)
    return response({ ok: false, error: 'service_unavailable' }, 503);

  const length = Number(request.headers.get('content-length') ?? 0);
  if (length > MAX_WEBHOOK_BYTES)
    return response({ ok: false, error: 'payload_too_large' }, 413);

  const id = request.headers.get('svix-id');
  const timestamp = request.headers.get('svix-timestamp');
  const signature = request.headers.get('svix-signature');
  if (!id || !timestamp || !signature)
    return response({ ok: false, error: 'missing_signature' }, 400);

  const payload = await request.text();
  let event: WebhookEventPayload;
  try {
    event = new Resend(
      process.env.RESEND_API_KEY ?? 're_test',
    ).webhooks.verify({
      payload,
      headers: { id, timestamp, signature },
      webhookSecret,
    });
  } catch {
    return response({ ok: false, error: 'invalid_signature' }, 400);
  }

  if (!trackedEvents.has(event.type))
    return response({ ok: true, ignored: true });

  const data = event.data as {
    email_id?: string;
    tags?: Record<string, string>;
  };
  console.info('Resend email event', {
    eventId: id,
    type: event.type,
    emailId: data.email_id,
    inquiryId: data.tags?.inquiry_id,
    messageType: data.tags?.message_type,
    createdAt: event.created_at,
  });

  return response({ ok: true });
}

export default { fetch: handleWebhook };
