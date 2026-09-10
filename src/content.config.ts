import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(['en', 'vi']),
    translationKey: z.enum(['document', 'notice', 'evidence']),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    author: z.literal('Nguyen Linh Protector LLC'),
    related: z.array(z.enum(['copyright', 'dmca', 'counter', 'brand'])).min(1),
  }),
});
export const collections = { insights };
