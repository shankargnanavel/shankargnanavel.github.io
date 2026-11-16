// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

/**
 * Three designs share one set of content (src/data, src/content, src/assets).
 *
 *   Design 3, "Spec sheet"       ->  design-3/   (default)
 *   Design 2, "Pixel and Paper"  ->  design-2/   (run with DESIGN=2)
 *   Design 1, "Dark"             ->  src/        (run with DESIGN=1)
 *
 * To publish a different design, change the default below to '1' or '2'.
 */
const design = process.env.DESIGN ?? '3';
const folders = { 1: './src', 2: './design-2', 3: './design-3' };

// https://astro.build/config
export default defineConfig({
  // The live address. Change it here and in src/data/site.ts if you move to your own domain.
  site: 'https://shankargnanavel.github.io',
  srcDir: folders[design] ?? folders[3],
  cacheDir: `./node_modules/.astro-design-${design}`,
  integrations: [mdx()],
});
