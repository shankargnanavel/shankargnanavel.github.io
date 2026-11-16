# Gowrishankar G: portfolio

A static site built with [Astro](https://astro.build). It holds **three designs that share one set of content**, so you can compare them and publish any one.

| | Design 3: Spec sheet (current) | Design 2: Pixel and Paper | Design 1: Dark |
| --- | --- | --- | --- |
| Look | Light surface, Inter with serif-italic emphasis and mono labels, coloured flip cards, a layout-grid overlay | One narrow column, Manrope, periwinkle accent, dark "Pixel" and light "Paper" themes | Black page, fanned cards, mint accent |
| Code | `design-3/` | `design-2/` | `src/components`, `src/layouts`, `src/pages`, `src/styles` |
| Pages | Home, three case studies, 404 | Home, three case studies, 404 | Home, three case studies, web resume, 404 |
| Live preview | `npm run dev` | `npm run dev:paper` | `npm run dev:dark` |

## Run it on your computer

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:4321 for Design 3. This is the live preview: it updates as you edit.

### See all three designs side by side

```bash
npm run preview:all
```

It builds all three (about 15 seconds) and serves them together until you press Ctrl+C:

| Design | Address |
| --- | --- |
| Design 3: Spec sheet | http://localhost:4321 |
| Design 1: Dark | http://localhost:4322 |
| Design 2: Pixel and Paper | http://localhost:4323 |

These are finished builds, so after editing content, stop it and run it again. Stop `npm run dev` first, because both use port 4321.

### Edit one design live

Astro runs one live preview per project, so run these one at a time (stop the other with Ctrl+C first):

```bash
npm run dev:paper
```

```bash
npm run dev:dark
```

Amber boxes marked **[NEEDS INPUT]** show where content is still missing. They appear only in these previews and are never published.

## Choose which design is published

Open `astro.config.mjs` and change the default in this line to `'1'`, `'2'` or `'3'`:

```js
const design = process.env.DESIGN ?? '3';
```

## Where the content lives

All three designs read the same files, so you edit once.

| To change | Edit |
| --- | --- |
| Name, email, LinkedIn, hero text, experience, skills, awards, FAQ | `src/data/site.ts` |
| Project cards, headline numbers, tags and "In 30 seconds" summaries | `src/data/projects.ts` |
| The body of a case study | `src/content/work/<project>.mdx` |
| Images | `src/assets/` (resized and compressed automatically) |
| The resume PDF | Replace `public/Gowrishankar-G-Resume-2026.pdf` (or change `resumePdf` in `site.ts`) |
| Colours and spacing | The first block of `design-3/styles/global.css`, `design-2/styles/global.css` or `src/styles/global.css` |

`site.ts` is grouped by design: shared facts at the top, then a block for each design's own wording (`spec` is Design 3).

### Add a project

1. Copy a block in `src/data/projects.ts` and change the text. The `slug` becomes the page address (`/work/<slug>/`).
2. Put its images in `src/assets/work/<slug>/`. Name the card image `cover.png` and set `cover: 'work/<slug>/cover.png'`.
3. Create `src/content/work/<slug>.mdx`. Each `## Heading` becomes a numbered section.

A project with `status: 'in-progress'` shows as a card with no case-study page (the YONO Business card works this way). Remove that line once its `.mdx` file exists.

Inside a case study you can use:

```mdx
<Figure src="work/<slug>/screen.png" alt="What the image shows" caption="Optional caption" />
<Stats items={[{ value: '40%', label: 'Increase in bookings' }]} />
<Columns>
<div>

### Left

</div>
<div>

### Right

</div>
</Columns>
```

### Change your portrait

Designs 2 and 3 use a cut-out of your photo. Replace `src/assets/profile/avatar.jpg` with a photo on a plain white background, then run:

```bash
node scripts/cutout-portrait.mjs
```

## Still needs your input

Search the project for `NEEDS INPUT` to find each one.

- **Naming SBI:** the site names SBI and YONO Business, as your resume does. Reword the hero text, the YONO card and the impact tile if that should be more general.
- **Domain:** set `url` in `src/data/site.ts` and `site` in `astro.config.mjs` once you have one, so link previews use full addresses.
- **YONO Business:** it is an "in progress" card with no case study or visuals.
- **WELNS visuals:** the case study has only a cover image.
- **MioSalon landing page:** add before/after numbers for the results if you have them.
- **Pantry Ledger:** add a screenshot.
- **FAQ (Design 1):** four answers are empty and hidden.
- **Credential links:** paste each certificate's link into `recognition.items` in `src/data/site.ts`.

## Deploy to Vercel

1. Create a free account at https://github.com and a new empty repository (no README).
2. In this folder, run these one at a time, replacing the address with your repository's:

   ```bash
   git init
   ```

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "Portfolio site"
   ```

   ```bash
   git branch -M main
   ```

   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   ```

   ```bash
   git push -u origin main
   ```

3. Go to https://vercel.com/new, sign in with GitHub and import the repository. Vercel detects Astro; leave every setting as it is and press **Deploy**.
4. After about a minute you get a live address ending in `.vercel.app`.
5. To use your own domain, open the project in Vercel, go to **Settings → Domains**, add the domain and follow the DNS steps shown. Then fill in the domain in the two places listed above.

From then on, every `git push` publishes the change.

## Useful commands

| Command | What it does |
| --- | --- |
| `npm run preview:all` | Build and serve all three designs side by side |
| `npm run dev` | Live preview of the published design (Design 3) |
| `npm run dev:paper` | Live preview of Design 2 on port 4323 (one live preview at a time) |
| `npm run dev:dark` | Live preview of Design 1 on port 4322 (one live preview at a time) |
| `npm run build` | Build the published design into `dist/` |
| `npm run build:paper`, `npm run build:dark` | Build Design 2 or Design 1 into `dist/` |
| `node scripts/make-og.mjs` | Regenerate the link-preview images |
| `node scripts/cutout-portrait.mjs` | Regenerate the portrait cut-out |
