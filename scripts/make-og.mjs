/**
 * Regenerates the images shown when the site is shared on LinkedIn, WhatsApp,
 * Slack and so on: public/og.png (Design 1) and public/og-2.png (Design 2).
 * Run it after changing your name or role:
 *
 *   node scripts/make-og.mjs
 */
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// The image is drawn with a system font (the web fonts are not available to this script).
const FONT = 'Helvetica Neue, Helvetica, Arial, sans-serif';

const NAME = 'Gowrishankar G';
const ROLE = 'Senior UX Designer';
const LINE = 'Enterprise banking and B2B SaaS · Chennai';

const W = 1200;
const H = 630;

const background = ({ accent, bg }) => Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="100%" r="75%">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.34"/>
      <stop offset="0.55" stop-color="${accent}" stop-opacity="0.06"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fff" stop-opacity="0"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0.07"/>
    </linearGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M60 0H0V60" fill="none" stroke="url(#fade)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="${bg}"/>
  <rect y="${H * 0.45}" width="${W}" height="${H * 0.55}" fill="url(#grid)" opacity="0.9"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <circle cx="${W / 2}" cy="${H + 1340}" r="1500" fill="${bg}" stroke="${accent}" stroke-opacity="0.75" stroke-width="2"/>
  <g transform="translate(80 72)">
    <rect width="64" height="64" rx="16" fill="#1c1f20"/>
    <path d="M42.7 23A14 14 0 1 0 46 32H34" fill="none" stroke="#f7f7f7" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>`);

/** Renders one line of text to a transparent PNG. */
async function text(content, { weight, size, colour }) {
  const markup = `<span foreground="${colour}" font_weight="${weight}" font_size="${size}pt">${content}</span>`;
  return sharp({ text: { text: markup, font: FONT, rgba: true, dpi: 72 } })
    .png()
    .toBuffer();
}

async function make(file, { accent, bg, ink = '#f7f7f7', soft = '#b9bdc0' }) {
  const layers = [
    { input: await text(NAME, { weight: 700, size: 86, colour: ink }), left: 80, top: 232 },
    { input: await text(ROLE, { weight: 700, size: 50, colour: accent }), left: 80, top: 352 },
    { input: await text(LINE, { weight: 400, size: 25, colour: soft }), left: 82, top: 446 },
  ];
  const out = path.join(root, 'public', file);
  await sharp(background({ accent, bg })).composite(layers).png({ compressionLevel: 9 }).toFile(out);
  console.log('wrote', path.relative(root, out));
}

await make('og.png', { accent: '#3ddc97', bg: '#000000' });
await make('og-2.png', { accent: '#9398ff', bg: '#121216' });
await make('og-3.png', { accent: '#0b57d0', bg: '#f8f9fa', ink: '#1f1f1f', soft: '#444746' });
