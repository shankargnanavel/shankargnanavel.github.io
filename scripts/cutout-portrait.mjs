/**
 * Removes the plain white background from src/assets/profile/avatar.jpg and
 * saves a cut-out as src/assets/profile/portrait-cutout.png (used by Design 2).
 * Run it again after replacing the photo:
 *
 *   node scripts/cutout-portrait.mjs
 *
 * It only works for a photo on a plain, near-white background.
 */
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const input = path.join(root, 'src/assets/profile/avatar.jpg');
const output = path.join(root, 'src/assets/profile/portrait-cutout.png');

const WHITE = 228; // every channel at or above this counts as background

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;
const isWhite = (i) => data[i * 4] >= WHITE && data[i * 4 + 1] >= WHITE && data[i * 4 + 2] >= WHITE;

// Flood-fill the background from the top and side edges. The bottom edge is
// skipped so that light clothing is not mistaken for background.
const background = new Uint8Array(width * height);
const queue = [];
const seed = (x, y) => {
  const i = y * width + x;
  if (!background[i] && isWhite(i)) {
    background[i] = 1;
    queue.push(i);
  }
};
for (let x = 0; x < width; x++) seed(x, 0);
for (let y = 0; y < height; y++) {
  seed(0, y);
  seed(width - 1, y);
}
while (queue.length) {
  const i = queue.pop();
  const x = i % width;
  const y = (i - x) / width;
  if (x > 0) seed(x - 1, y);
  if (x < width - 1) seed(x + 1, y);
  if (y > 0) seed(x, y - 1);
  if (y < height - 1) seed(x, y + 1);
}

// Build the alpha mask, pull it in by a pixel and feather it so no white fringe remains.
const mask = Buffer.alloc(width * height);
for (let i = 0; i < mask.length; i++) mask[i] = background[i] ? 0 : 255;
const feathered = await sharp(mask, { raw: { width, height, channels: 1 } })
  .blur(1.4)
  .linear(1.8, -110)
  .toColourspace('b-w')
  .extractChannel(0)
  .raw()
  .toBuffer();

for (let i = 0; i < mask.length; i++) data[i * 4 + 3] = Math.min(mask[i], feathered[i]);

await sharp(data, { raw: { width, height, channels: 4 } }).png({ compressionLevel: 9 }).toFile(output);
console.log('wrote', path.relative(root, output));
