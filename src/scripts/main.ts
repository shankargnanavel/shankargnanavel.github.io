/**
 * All of the site's behaviour in one small file. Every feature is optional:
 * the pages read and work without it.
 */

declare global {
  interface Window {
    __siteReady?: boolean;
  }
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (n: number, min = 0, max = 1) => Math.min(max, Math.max(min, n));
const $$ = <T extends HTMLElement>(selector: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(selector));

window.__siteReady = true;

/* ---------------------------------------------------------------- */
/* Fade sections in as they enter the viewport                       */
/* ---------------------------------------------------------------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  },
  { rootMargin: '0px 0px -6% 0px', threshold: 0.05 },
);
$$('[data-reveal]').forEach((el) => revealObserver.observe(el));

/* ---------------------------------------------------------------- */
/* Scroll progress bar and word-by-word text                         */
/* ---------------------------------------------------------------- */
const progressBar = document.querySelector<HTMLElement>('.progress span');
const wordBlocks = $$('.words');
let frameRequested = false;

function onScrollFrame() {
  frameRequested = false;
  const viewport = window.innerHeight;
  const scrollable = document.documentElement.scrollHeight - viewport;
  progressBar?.style.setProperty('--scroll', scrollable > 0 ? clamp(window.scrollY / scrollable).toFixed(4) : '0');

  for (const block of wordBlocks) {
    const rect = block.getBoundingClientRect();
    if (rect.top > viewport) continue;
    const start = viewport * 0.9;
    const distance = viewport * 0.5 + rect.height * 0.6;
    block.style.setProperty('--p', clamp((start - rect.top) / distance).toFixed(3));
  }
}

function requestScrollFrame() {
  if (frameRequested) return;
  frameRequested = true;
  requestAnimationFrame(onScrollFrame);
}

window.addEventListener('scroll', requestScrollFrame, { passive: true });
window.addEventListener('resize', requestScrollFrame, { passive: true });
onScrollFrame();

/* ---------------------------------------------------------------- */
/* Rotating role line in the hero                                    */
/* ---------------------------------------------------------------- */
const roles = $$('[data-role]');
if (roles.length > 1 && !reduceMotion) {
  let current = 0;
  window.setInterval(() => {
    if (document.hidden) return;
    const leaving = roles[current];
    current = (current + 1) % roles.length;
    const entering = roles[current];
    leaving.classList.remove('is-active');
    leaving.classList.add('is-leaving');
    entering.classList.remove('is-leaving');
    entering.classList.add('is-active');
    window.setTimeout(() => leaving.classList.remove('is-leaving'), 800);
  }, 2800);
}

/* ---------------------------------------------------------------- */
/* Highlight the nav icon for the section in view (home page)        */
/* ---------------------------------------------------------------- */
const navLinks = new Map($$('[data-nav]').map((link) => [link.dataset.nav!, link]));
const sections = $$('[data-section]');
if (sections.length) {
  const spy = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = (entry.target as HTMLElement).dataset.section!;
        navLinks.forEach((link, key) => {
          if (key === id) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  sections.forEach((section) => spy.observe(section));
}

/* ---------------------------------------------------------------- */
/* Case-study side index: mark the section being read                */
/* ---------------------------------------------------------------- */
const tocLinks = new Map($$<HTMLAnchorElement>('[data-toc] a').map((a) => [a.hash.slice(1), a]));
const tocHeadings = tocLinks.size ? $$('.prose h2[id]') : [];

function updateToc() {
  if (!tocHeadings.length) return;
  const line = window.innerHeight * 0.3;
  let currentId = tocHeadings[0].id;
  for (const heading of tocHeadings) {
    if (heading.getBoundingClientRect().top <= line) currentId = heading.id;
    else break;
  }
  tocLinks.forEach((link, id) => link.classList.toggle('is-current', id === currentId));
}

window.addEventListener('scroll', () => requestAnimationFrame(updateToc), { passive: true });
updateToc();

/* ---------------------------------------------------------------- */
/* Card deck (Recognition)                                           */
/* ---------------------------------------------------------------- */
$$('[data-deck]').forEach((deck) => {
  const cards = $$('[data-card]', deck);
  const scope = deck.closest('[data-deck-scope]') ?? deck.parentElement!;
  const counter = scope.querySelector<HTMLElement>('[data-count]');
  const total = cards.length;
  if (total < 2) return;
  let top = 0;

  const layout = () => {
    cards.forEach((card, index) => {
      const pos = (index - top + total) % total;
      card.style.setProperty('--pos', String(pos));
      card.classList.toggle('is-top', pos === 0);
      card.classList.toggle('is-buried', pos > 3);
    });
    if (counter) counter.textContent = `${top + 1} / ${total}`;
  };

  const step = (direction: number) => {
    top = (top + direction + total) % total;
    layout();
  };

  scope.querySelector('[data-next]')?.addEventListener('click', () => step(1));
  scope.querySelector('[data-prev]')?.addEventListener('click', () => step(-1));
  deck.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a, button')) return;
    step(1);
  });
  // Tabbing to a link inside a card brings that card to the front.
  cards.forEach((card, index) =>
    card.addEventListener('focusin', () => {
      if (top === index) return;
      top = index;
      layout();
    }),
  );

  deck.classList.add('is-deck');
  layout();
});

/* ---------------------------------------------------------------- */
/* Image lightbox (case studies)                                     */
/* ---------------------------------------------------------------- */
const lightbox = document.querySelector<HTMLDialogElement>('#lightbox');
if (lightbox && typeof lightbox.showModal === 'function') {
  const image = lightbox.querySelector('img')!;
  const caption = lightbox.querySelector<HTMLElement>('[data-caption]')!;

  $$('[data-zoom]').forEach((button) =>
    button.addEventListener('click', () => {
      image.src = button.dataset.zoom!;
      image.alt = button.dataset.alt ?? '';
      caption.textContent = button.dataset.caption ?? '';
      lightbox.showModal();
    }),
  );

  lightbox.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target === lightbox || target.closest('[data-close]')) lightbox.close();
  });
  lightbox.addEventListener('close', () => image.removeAttribute('src'));
}

/* ---------------------------------------------------------------- */
/* Print button (resume)                                             */
/* ---------------------------------------------------------------- */
$$('[data-print]').forEach((button) => button.addEventListener('click', () => window.print()));

export {};
