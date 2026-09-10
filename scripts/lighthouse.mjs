import lighthouse from 'lighthouse';
import { chromium } from '@playwright/test';
import { createServer } from 'node:net';
import { mkdir, writeFile } from 'node:fs/promises';
await mkdir('reports', { recursive: true });
const portProbe = createServer();
await new Promise((resolve) => portProbe.listen(0, '127.0.0.1', resolve));
const port = portProbe.address().port;
await new Promise((resolve) => portProbe.close(resolve));
const browser = await chromium.launch({
  channel: 'chrome',
  headless: true,
  args: [`--remote-debugging-port=${port}`],
  ...(process.env.CHROME_PATH
    ? { executablePath: process.env.CHROME_PATH }
    : {}),
});
const scores = [];
try {
  for (const [name, route] of [
    ['home-en', '/'],
    ['home-vi', '/vi/'],
    ['article-en', '/insights/dmca-notice-information/'],
    ['contact-vi', '/vi/lien-he/'],
  ]) {
    const result = await lighthouse('http://127.0.0.1:4321' + route, {
      port,
      output: 'html',
      logLevel: 'error',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    });
    await writeFile(`reports/lighthouse-${name}.html`, result.report);
    await writeFile(
      `reports/lighthouse-${name}.json`,
      JSON.stringify(result.lhr, null, 2),
    );
    const row = {
      route,
      categories: Object.fromEntries(
        Object.entries(result.lhr.categories).map(([k, v]) => [
          k,
          Math.round(v.score * 100),
        ]),
      ),
      LCP: result.lhr.audits['largest-contentful-paint'].displayValue,
      CLS: result.lhr.audits['cumulative-layout-shift'].displayValue,
      TBT: result.lhr.audits['total-blocking-time'].displayValue,
      failures: Object.values(result.lhr.audits)
        .filter(
          (a) =>
            a.score !== null && a.score < 1 && a.scoreDisplayMode === 'binary',
        )
        .map((a) => ({ id: a.id, title: a.title })),
    };
    scores.push(row);
    console.log(JSON.stringify(row));
  }
} finally {
  await browser.close();
}
await writeFile(
  'reports/lighthouse-summary.json',
  JSON.stringify(scores, null, 2),
);
