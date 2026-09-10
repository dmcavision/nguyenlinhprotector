import { readFile } from 'node:fs/promises';
import sharp from 'sharp';

const background = 'src/assets/og-background-generated.png';
const mark = 'public/brand/nguyen-linh-protector-mark-dark.svg';
const variants = {
  en: {
    line1: 'Online IP Enforcement',
    line2: '&amp; Brand Protection',
    subtitle: 'Evidence-led support for digital rights.',
    principles: 'EVIDENCE  ·  PROCESS  ·  ACCOUNTABILITY',
  },
  vi: {
    line1: 'Thực thi quyền SHTT',
    line2: '&amp; Bảo vệ thương hiệu',
    subtitle: 'Hỗ trợ dựa trên bằng chứng cho quyền số.',
    principles: 'BẰNG CHỨNG  ·  QUY TRÌNH  ·  TRÁCH NHIỆM',
  },
};

function overlay(copy) {
  return Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <style>
      .sans { font-family: Arial, Helvetica, sans-serif; }
    </style>
    <text x="170" y="92" class="sans" fill="#ffffff" font-size="24" font-weight="700" letter-spacing="1.8">NGUYEN LINH</text>
    <text x="170" y="124" class="sans" fill="#5d8cff" font-size="18" font-weight="700" letter-spacing="4">PROTECTOR</text>
    <rect x="72" y="184" width="48" height="4" rx="2" fill="#2864ff" />
    <text x="72" y="270" class="sans" fill="#ffffff" font-size="52" font-weight="700" letter-spacing="-1.5">${copy.line1}</text>
    <text x="72" y="335" class="sans" fill="#ffffff" font-size="52" font-weight="700" letter-spacing="-1.5">${copy.line2}</text>
    <text x="72" y="402" class="sans" fill="#b8c9d6" font-size="23">${copy.subtitle}</text>
    <line x1="72" y1="494" x2="610" y2="494" stroke="#ffffff" stroke-opacity="0.18" />
    <text x="72" y="540" class="sans" fill="#d8e5ef" font-size="18" letter-spacing="0.8">${copy.principles}</text>
    <text x="72" y="581" class="sans" fill="#7fa0b8" font-size="16">nguyenlinhprotector.net</text>
  </svg>
`);
}

const resizedMark = await sharp(await readFile(mark))
  .resize(76, 76)
  .png()
  .toBuffer();

for (const [locale, copy] of Object.entries(variants)) {
  const output = `public/brand/open-graph-${locale}.png`;
  await sharp(background)
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .composite([
      { input: resizedMark, left: 72, top: 62 },
      { input: overlay(copy), left: 0, top: 0 },
    ])
    .png({ compressionLevel: 9, palette: true })
    .toFile(output);
  console.log(`Generated ${output}`);
}
