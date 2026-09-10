import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { pairs } from './src/i18n/routes.ts';
const site = 'https://nguyenlinhprotector.net';
export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (url) => !url.endsWith('/404/'),
      serialize(item) {
        const pair = Object.values(pairs).find((p) =>
          Object.values(p).some((path) => site + path === item.url),
        );
        if (pair)
          item.links = [
            { lang: 'en', url: site + pair.en },
            { lang: 'vi', url: site + pair.vi },
            { lang: 'x-default', url: site + pair.en },
          ];
        return item;
      },
    }),
  ],
});
