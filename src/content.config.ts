import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

/** Case-study bodies: one .mdx file per project in src/content/work/. */
const work = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/work' }),
});

export const collections = { work };
