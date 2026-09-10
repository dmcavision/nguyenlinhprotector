import assert from 'node:assert/strict';
import contactFunction, { validateInquiry } from '../api/contact.ts';

function validData(overrides = {}) {
  const values = {
    locale: 'en',
    name: 'Test Rights Holder',
    email: 'rights@example.com',
    organization: 'Example Studio',
    relationship: 'owner',
    issueType: 'copyright',
    platform: 'Example platform',
    urls: 'https://example.com/reported-item',
    message: 'This is a test description with enough detail for validation.',
    consent: 'yes',
    ...overrides,
  };
  const data = new FormData();
  for (const [key, value] of Object.entries(values)) data.set(key, value);
  return data;
}

function request(data, ip, origin = 'https://nguyenlinhprotector.net') {
  return new Request('https://nguyenlinhprotector.net/api/contact', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Origin: origin,
      'X-Forwarded-For': ip,
    },
    body: data,
  });
}

function htmlRequest(data, ip) {
  return new Request('https://nguyenlinhprotector.net/api/contact', {
    method: 'POST',
    headers: {
      Origin: 'https://nguyenlinhprotector.net',
      'X-Forwarded-For': ip,
    },
    body: data,
  });
}

assert.ok(validateInquiry(validData()).inquiry);
assert.equal(
  validateInquiry(
    validData({
      relationship: 'content-uploader',
      issueType: 'counter',
    }),
  ).inquiry?.issueType,
  'counter',
);
assert.equal(
  validateInquiry(validData({ urls: 'javascript:alert(1)' })).error,
  'urls',
);
assert.equal(validateInquiry(validData({ consent: '' })).error, 'consent');
assert.equal(
  validateInquiry(validData({ name: 'Header\r\nInjection' })).error,
  'name',
);
assert.equal(
  validateInquiry(validData({ company_website: 'spam.example' })).spam,
  true,
);

const methodResponse = await contactFunction.fetch(
  new Request('https://nguyenlinhprotector.net/api/contact'),
);
assert.equal(methodResponse.status, 405);

const foreignPreviewResponse = await contactFunction.fetch(
  request(validData(), '192.0.2.10', 'https://attacker.vercel.app'),
);
assert.equal(foreignPreviewResponse.status, 403);

process.env.VERCEL_URL = 'nguyen-linh-protector-preview.vercel.app';
const matchingPreviewResponse = await contactFunction.fetch(
  request(
    validData(),
    '192.0.2.11',
    'https://nguyen-linh-protector-preview.vercel.app',
  ),
);
assert.equal(matchingPreviewResponse.status, 503);
delete process.env.VERCEL_URL;

const invalidResponse = await contactFunction.fetch(
  request(validData({ email: 'invalid' }), '192.0.2.1'),
);
assert.equal(invalidResponse.status, 400);

delete process.env.RESEND_API_KEY;
const unavailableResponse = await contactFunction.fetch(
  request(validData(), '192.0.2.2'),
);
assert.equal(unavailableResponse.status, 503);

for (let attempt = 1; attempt <= 5; attempt += 1) {
  const response = await contactFunction.fetch(
    request(validData(), '192.0.2.12'),
  );
  assert.equal(response.status, 503);
}
const rateLimitedResponse = await contactFunction.fetch(
  request(validData(), '192.0.2.12'),
);
assert.equal(rateLimitedResponse.status, 429);
assert.equal(rateLimitedResponse.headers.get('retry-after'), '900');

process.env.RESEND_API_KEY = 're_test_key';
const originalFetch = globalThis.fetch;
let deliveryCalls = 0;
const deliveryPayloads = [];
globalThis.fetch = async (_input, init) => {
  deliveryCalls += 1;
  deliveryPayloads.push(JSON.parse(init.body));
  return Response.json({ id: `email-${deliveryCalls}` });
};
try {
  const successResponse = await contactFunction.fetch(
    request(validData({ locale: 'vi' }), '192.0.2.3'),
  );
  const result = await successResponse.json();
  assert.equal(successResponse.status, 200);
  assert.equal(result.ok, true);
  assert.equal(deliveryCalls, 2);
  assert.equal(deliveryPayloads[0].tags[2].name, 'inquiry_id');
  assert.equal(deliveryPayloads[1].tags[1].value, 'acknowledgment');

  const htmlResponse = await contactFunction.fetch(
    htmlRequest(validData(), '192.0.2.4'),
  );
  const html = await htmlResponse.text();
  assert.equal(htmlResponse.status, 200);
  assert.match(html, /Inquiry reference:<\/strong> [0-9a-f-]{36}/);
  assert.equal(deliveryCalls, 4);
} finally {
  globalThis.fetch = originalFetch;
  delete process.env.RESEND_API_KEY;
}

console.log(
  'Contact validation, abuse controls, unavailable-service handling, inquiry delivery, and acknowledgment delivery passed.',
);
