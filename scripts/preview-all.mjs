/**
 * Builds all three designs and serves them side by side, so you can compare:
 *
 *   npm run preview:all
 *
 *   Design 3: Spec sheet        http://localhost:4321
 *   Design 1: Dark              http://localhost:4322
 *   Design 2: Pixel and Paper   http://localhost:4323
 *
 * These are finished builds, not live previews: after editing content,
 * stop this (Ctrl+C) and run it again. For live editing of one design,
 * use `npm run dev`, `npm run dev:paper` or `npm run dev:dark` (one at a time).
 */
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const designs = [
  { id: '3', name: 'Design 3: Spec sheet     ', port: 4321 },
  { id: '1', name: 'Design 1: Dark           ', port: 4322 },
  { id: '2', name: 'Design 2: Pixel and Paper', port: 4323 },
];

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
};

/** Builds one design into .previews/design-N and returns that folder. */
function build(design) {
  const out = path.join('.previews', `design-${design.id}`);
  return new Promise((resolve, reject) => {
    const child = spawn('npx', ['astro', 'build', '--outDir', out], {
      cwd: root,
      env: { ...process.env, DESIGN: design.id },
      stdio: ['ignore', 'ignore', 'inherit'],
    });
    child.on('exit', (code) =>
      code === 0 ? resolve(path.join(root, out)) : reject(new Error(`${design.name.trim()} failed to build`)),
    );
  });
}

/** Maps a request path to a file inside the build folder, or null. */
async function fileFor(dir, requestUrl) {
  const pathname = decodeURIComponent(new URL(requestUrl, 'http://localhost').pathname);
  let file = path.join(dir, path.normalize(pathname));
  if (file !== dir && !file.startsWith(dir + path.sep)) return null;
  try {
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    await stat(file);
    return file;
  } catch {
    return null;
  }
}

function serve(dir, design) {
  const server = createServer(async (request, response) => {
    const file = await fileFor(dir, request.url ?? '/');
    const target = file ?? path.join(dir, '404.html');
    try {
      const body = await readFile(target);
      response.writeHead(file ? 200 : 404, {
        'content-type': types[path.extname(target)] ?? 'application/octet-stream',
        'cache-control': 'no-store',
      });
      response.end(body);
    } catch {
      response.writeHead(404, { 'content-type': 'text/plain' });
      response.end('Not found');
    }
  });
  server.on('error', (error) => {
    console.error(`${design.name.trim()}: could not use port ${design.port} (${error.code}). Is something else running there?`);
    process.exitCode = 1;
  });
  server.listen(design.port, '127.0.0.1', () => console.log(`  ${design.name}  http://localhost:${design.port}`));
}

console.log('Building all three designs. This takes about 15 seconds.\n');
for (const design of designs) {
  serve(await build(design), design);
}
console.log('\nAll three are running. Press Ctrl+C to stop.');
