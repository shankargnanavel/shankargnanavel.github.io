import type { ImageMetadata } from 'astro';

/**
 * Every image under src/assets/ is picked up automatically.
 * Reference one by its path inside that folder, e.g. 'work/welns/cover.png'.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>('../assets/**/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
});

export function findImage(path: string | undefined): ImageMetadata | undefined {
  if (!path) return undefined;
  return modules[`../assets/${path.replace(/^\/+/, '')}`]?.default;
}

/** The first image that exists from a list of candidates. */
export function firstImage(...paths: string[]): ImageMetadata | undefined {
  for (const p of paths) {
    const found = findImage(p);
    if (found) return found;
  }
  return undefined;
}
