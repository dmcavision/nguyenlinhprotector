import assert from 'node:assert/strict';
import { Webhook } from 'standardwebhooks';
import webhookFunction from '../api/resend-webhook.ts';

const secret = `whsec_${Buffer.alloc(32, 7).toString('base64')}`;
const timestamp = new Date();

function signedRequest(type, id) {
  const payload = JSON.stringify({
    type,
    created_at: timestamp.toISOString(),
    data: {
      created_at: timestamp.toISOString(),
      email_id: `email-${id}`,
      message_id: `message-${id}`,
      from: 'Nguyen Linh Protector <notifications@example.com>',
      to: ['visitor@example.com'],
      subject: 'Test event',
      tags: {
        source: 'website-contact',
        message_type: 'acknowledgment',
        inquiry_id: '00000000-0000-4000-8000-000000000000',
      },
    },
  });
  return new Request('https://nguyenlinhprotector.net/api/resend-webhook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'svix-id': id,
      'svix-timestamp': String(Math.floor(timestamp.getTime() / 1000)),
      'svix-signature': new Webhook(secret).sign(id, timestamp, payload),
    },
    body: payload,
  });
}

const methodResponse = await webhookFunction.fetch(
  new Request('https://nguyenlinhprotector.net/api/resend-webhook'),
);
assert.equal(methodResponse.status, 405);

delete process.env.RESEND_WEBHOOK_SECRET;
const unavailableResponse = await webhookFunction.fetch(
  signedRequest('email.delivered', 'missing-secret'),
);
assert.equal(unavailableResponse.status, 503);

process.env.RESEND_WEBHOOK_SECRET = secret;
const missingSignatureResponse = await webhookFunction.fetch(
  new Request('https://nguyenlinhprotector.net/api/resend-webhook', {
    method: 'POST',
    body: '{}',
  }),
);
assert.equal(missingSignatureResponse.status, 400);

const invalidSignatureRequest = signedRequest('email.delivered', 'invalid');
invalidSignatureRequest.headers.set('svix-signature', 'v1,invalid');
const invalidSignatureResponse = await webhookFunction.fetch(
  invalidSignatureRequest,
);
assert.equal(invalidSignatureResponse.status, 400);

const originalInfo = console.info;
const receivedTypes = [];
console.info = (_message, details) => receivedTypes.push(details.type);
try {
  for (const [index, type] of [
    'email.delivered',
    'email.bounced',
    'email.failed',
    'email.complained',
  ].entries()) {
    const result = await webhookFunction.fetch(
      signedRequest(type, `tracked-${index}`),
    );
    const body = await result.json();
    assert.equal(result.status, 200, JSON.stringify(body));
    assert.equal(body.ok, true);
  }
} finally {
  console.info = originalInfo;
  delete process.env.RESEND_WEBHOOK_SECRET;
}

assert.deepEqual(receivedTypes, [
  'email.delivered',
  'email.bounced',
  'email.failed',
  'email.complained',
]);

console.log(
  'Resend webhook signature rejection and delivered, bounced, failed, and complained event handling passed.',
);
