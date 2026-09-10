import { readFile, readdir, access, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import { load } from 'cheerio';
import { pairs, site } from '../src/i18n/routes.ts';
const root = path.resolve('dist');
const errors = [];
const check = (condition, message) => {
  if (!condition) errors.push(message);
};
const documents = new Map();
async function walk(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) await walk(file);
    else if (file.endsWith('.html'))
      documents.set(file, load(await readFile(file, 'utf8')));
  }
}
await walk(root);
const titles = new Set(),
  descriptions = new Set();
for (const pair of Object.values(pairs))
  for (const locale of ['en', 'vi']) {
    const route = pair[locale];
    const file = path.join(root, route, 'index.html');
    const $ = documents.get(file);
    check(!!$, `Missing ${route}`);
    if (!$) continue;
    check($('html').attr('lang') === locale, `Language ${route}`);
    check($('h1').length === 1, `H1 ${route}`);
    const title = $('title').text(),
      description = $('meta[name="description"]').attr('content');
    check(!!title && !titles.has(title), `Title ${route}`);
    check(
      !!description && !descriptions.has(description),
      `Description ${route}`,
    );
    titles.add(title);
    descriptions.add(description);
    check(
      $('link[rel="canonical"]').attr('href') === site + route,
      `Canonical ${route}`,
    );
    for (const lang of ['en', 'vi', 'x-default'])
      check(
        $(`link[hreflang="${lang}"]`).attr('href') ===
          site + pair[lang === 'x-default' ? 'en' : lang],
        `Alternate ${lang} ${route}`,
      );
    check(
      $('.language a').attr('href') === pair[locale === 'en' ? 'vi' : 'en'],
      `Language switch ${route}`,
    );
    check(
      !$('meta[name="robots"]').attr('content')?.includes('noindex'),
      `Unexpected noindex ${route}`,
    );
    const isContact = route === pairs.contact[locale];
    const clientScripts = $('script:not([type="application/ld+json"])');
    check(
      isContact ? clientScripts.length === 1 : clientScripts.length === 0,
      `Client script ${route}`,
    );
    check(!$('meta[name="keywords"]').length, `Meta keywords ${route}`);
    check(
      isContact
        ? $('form.contact-form[action="/api/contact"][method="post"]')
            .length === 1
        : $('form').length === 0,
      `Form ${route}`,
    );
    for (const script of $('script[type="application/ld+json"]').toArray()) {
      try {
        const data = JSON.parse($(script).html());
        check(Array.isArray(data['@graph']), `Schema graph ${route}`);
      } catch {
        errors.push(`Invalid JSON-LD ${route}`);
      }
    }
  }
for (const [file, $] of documents) {
  const route =
    '/' +
    path
      .relative(root, file)
      .replaceAll('\\', '/')
      .replace(/index\.html$/, '');
  for (const el of $('a[href],img[src],link[href]').toArray()) {
    const href = $(el).attr('href') || $(el).attr('src');
    if (!href || /^(mailto:|tel:|data:)/.test(href)) continue;
    const url = new URL(href, site + route);
    if (url.origin !== site) continue;
    const target = path.join(
      root,
      decodeURIComponent(url.pathname),
      url.pathname.endsWith('/') ? 'index.html' : '',
    );
    try {
      await access(target);
    } catch {
      errors.push(`Broken ${href} in ${route}`);
      continue;
    }
    if (url.hash && documents.has(target)) {
      const id = decodeURIComponent(url.hash.slice(1));
      check(
        documents
          .get(target)('[id]')
          .toArray()
          .some((e) => documents.get(target)(e).attr('id') === id),
        `Missing fragment ${href} in ${route}`,
      );
    }
  }
  for (const img of $('img').toArray())
    check(
      !!$(img).attr('width') &&
        !!$(img).attr('height') &&
        $(img).attr('alt') !== undefined,
      `Image dimensions/alt ${route}`,
    );
  check(
    !/TODO|FIXME|lorem ipsum|YOUR_API_KEY|sk-[A-Za-z0-9]{20,}/i.test($.html()),
    `Placeholder or credential ${route}`,
  );
}
const xml = load(await readFile(path.join(root, 'sitemap-0.xml'), 'utf8'), {
  xmlMode: true,
});
const expected = Object.values(pairs).flatMap((p) =>
  Object.values(p).map((route) => site + route),
);
const urls = xml('url').toArray();
check(urls.length === expected.length, 'Sitemap URL count');
for (const el of urls) {
  const loc = xml(el).find('loc').text();
  check(expected.includes(loc), `Unexpected sitemap ${loc}`);
  const pair = Object.values(pairs).find((p) =>
    Object.values(p).some((v) => site + v === loc),
  );
  for (const lang of ['en', 'vi', 'x-default']) {
    const link = xml(el)
      .children()
      .toArray()
      .find((e) => xml(e).attr('hreflang') === lang);
    check(
      !!link &&
        xml(link).attr('href') ===
          site + pair?.[lang === 'x-default' ? 'en' : lang],
      `Sitemap hreflang ${loc} ${lang}`,
    );
  }
}
const robots = await readFile(path.join(root, 'robots.txt'), 'utf8');
check(
  robots.includes(`Sitemap: ${site}/sitemap-index.xml`) &&
    !robots.includes('Disallow: /'),
  'Robots',
);
check(
  documents
    .get(path.join(root, '404.html'))?.('meta[name="robots"]')
    .attr('content') === 'noindex,follow',
  '404 noindex',
);
const result = {
  pages: documents.size,
  indexableRoutes: expected.length,
  checks:
    'Internal links and fragments, route pairs, unique metadata, canonicals, hreflang, JSON-LD parsing, H1s, image attributes, controlled contact form/client script, placeholders, sitemap, robots',
  errors,
};
await mkdir('reports', { recursive: true });
await writeFile('reports/validation.json', JSON.stringify(result, null, 2));
console.log(JSON.stringify(result, null, 2));
assert.equal(errors.length, 0, 'Generated site validation failed');
