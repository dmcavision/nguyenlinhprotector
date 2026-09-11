import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { pairs } from '../src/i18n/routes.ts';
await mkdir('reports', { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const results = [];
const errors = [];
const context = await browser.newContext();
await context.addInitScript(() => localStorage.setItem('nlp_intro_seen', '1'));
let page = await context.newPage();
for (const width of [1440, 390, 320]) {
  await page.setViewportSize({ width, height: 1000 });
  for (const route of Object.values(pairs).flatMap((p) => [p.en, p.vi])) {
    const response = await page.goto('http://127.0.0.1:4321' + route);
    if (!response?.ok()) errors.push(`HTTP ${response?.status()} at ${route}`);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    );
    if (overflow) errors.push(`Horizontal overflow at ${width}: ${route}`);
    if (width === 390) {
      const a11y = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      if (a11y.violations.length)
        errors.push({
          route,
          violations: a11y.violations.map((v) => ({
            id: v.id,
            impact: v.impact,
            nodes: v.nodes.map((n) => n.target),
          })),
        });
    }
    await page.evaluate(() => {
      document.documentElement.style.scrollBehavior = 'auto';
    });
    await page.locator('footer').scrollIntoViewIfNeeded();
    await page.waitForTimeout(80);
    await page.evaluate(() => scrollTo(0, 0));
    if (
      ['/', '/vi/', '/contact/', '/insights/dmca-notice-information/'].includes(
        route,
      ) &&
      width !== 320
    )
      await page.screenshot({
        path: `reports/${route === '/' ? 'home' : route.replaceAll('/', '-')}-${width}.png`,
        fullPage: true,
      });
  }
  results.push({
    width,
    routes: Object.values(pairs).flatMap((p) => [p.en, p.vi]).length,
  });
}
await page.close();
page = await context.newPage();
await page.setViewportSize({ width: 390, height: 844 });
await page.goto('http://127.0.0.1:4321/');
await page.keyboard.press('Tab');
if ((await page.locator(':focus').textContent())?.trim() !== 'Skip to content')
  errors.push('Skip link not first keyboard target');
await page.locator('.mobile-nav summary').focus();
await page.keyboard.press('Enter');
if (
  !(await page
    .locator('.mobile-nav')
    .getAttribute('open')
    .then((v) => v !== null))
)
  errors.push('Mobile menu keyboard activation');
await page.locator('.mobile-nav a').last().click();
if (!page.url().endsWith('/contact/')) errors.push('Mobile contact navigation');
for (const route of [
  '/',
  '/vi/',
  '/contact/',
  '/vi/kien-thuc/thong-tin-thong-bao-dmca/',
]) {
  await page.goto('http://127.0.0.1:4321' + route);
  await page.addStyleTag({ content: 'html{font-size:200%}' });
  if (
    await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)
  )
    errors.push(`200% text zoom overflow ${route}`);
}
await page.emulateMedia({ reducedMotion: 'reduce' });
if (
  (await page.evaluate(
    () => getComputedStyle(document.documentElement).scrollBehavior,
  )) !== 'auto'
)
  errors.push('Reduced motion');
const introContext = await browser.newContext({
  reducedMotion: 'no-preference',
});
const introPage = await introContext.newPage();
await introPage.goto('http://127.0.0.1:4321/');
if (!(await introPage.locator('.site-intro').isVisible()))
  errors.push('First-visit intro is not visible');
await introPage.waitForTimeout(1700);
if (await introPage.locator('.site-intro').isVisible())
  errors.push('First-visit intro does not finish');
await introPage.reload();
if (await introPage.locator('.site-intro').isVisible())
  errors.push('Intro repeats after the first visit');
await introContext.close();
await browser.close();
const report = { results, keyboard: true, textZoom: '200%', errors };
await writeFile('reports/browser.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
if (errors.length) process.exitCode = 1;
