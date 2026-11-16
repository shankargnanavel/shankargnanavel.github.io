/**
 * Behaviour for Design 3. The shared script handles fade-ins, the nav
 * highlight, the case-study index and the image lightbox; this file adds
 * the header island, the grid and motion switches, the flip cards, the
 * copy-email button and the cursor read-out.
 */
import '../../src/scripts/main.ts';

const root = document.documentElement;
const $ = <T extends HTMLElement>(selector: string, scope: ParentNode = document) => scope.querySelector<T>(selector);
const $$ = <T extends HTMLElement>(selector: string, scope: ParentNode = document) =>
  Array.from(scope.querySelectorAll<T>(selector));

const remember = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* Private browsing: the choice simply is not remembered. */
  }
};

/* Motion switch: turns every animation off, and remembers it. */
$$<HTMLButtonElement>('[data-motion-toggle]').forEach((button) => {
  const label = $('[data-motion-label]', button);
  const render = () => {
    const off = root.dataset.motion === 'off';
    button.setAttribute('aria-pressed', String(!off));
    if (label) label.textContent = off ? 'Motion off' : 'Motion on';
  };
  button.addEventListener('click', () => {
    root.dataset.motion = root.dataset.motion === 'off' ? 'on' : 'off';
    remember('motion', root.dataset.motion);
    render();
  });
  render();
});

/* Grid switch: shows the 12-column layout grid the page is built on. */
$$<HTMLButtonElement>('[data-grid-toggle]').forEach((button) => {
  button.addEventListener('click', () => {
    const on = root.dataset.grid !== 'on';
    root.dataset.grid = on ? 'on' : 'off';
    button.setAttribute('aria-pressed', String(on));
  });
});

/* Header island: names the section in view and shows how far down the page you are. */
const island = $('[data-island]');
if (island) {
  const label = $('[data-island-label]', island)!;
  const sub = $('[data-island-sub]', island)!;
  const ring = $<SVGCircleElement & HTMLElement>('[data-island-ring]', island);
  const copy: Record<string, { label: string; sub: string }> = JSON.parse(island.dataset.island || '{}');

  const show = (id: string) => {
    const entry = copy[id];
    if (!entry || island.dataset.current === id) return;
    island.dataset.current = id;
    label.textContent = entry.label;
    sub.textContent = entry.sub;
  };

  const spy = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) show((entry.target as HTMLElement).dataset.section!);
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  $$('[data-section]').forEach((section) => spy.observe(section));

  const circumference = 2 * Math.PI * 9;
  let ticking = false;
  const paint = () => {
    ticking = false;
    const scrollable = root.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
    ring?.setAttribute('stroke-dashoffset', String(circumference * (1 - progress)));
    root.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(paint);
    },
    { passive: true },
  );
  paint();
}

/* Flip cards: the front shows a headline number, the back the 30-second story. */
$$('[data-case]').forEach((card) => {
  const front = $('[data-face="front"]', card);
  const back = $('[data-face="back"]', card);
  const set = (flipped: boolean) => {
    card.classList.toggle('is-flipped', flipped);
    front?.toggleAttribute('inert', flipped);
    back?.toggleAttribute('inert', !flipped);
  };
  $$<HTMLButtonElement>('[data-flip]', card).forEach((button) =>
    button.addEventListener('click', () => {
      const flipped = !card.classList.contains('is-flipped');
      set(flipped);
      // Keep keyboard focus on the visible side.
      const target = $<HTMLButtonElement>('[data-flip]', (flipped ? back : front) ?? card);
      target?.focus({ preventScroll: true });
    }),
  );
  set(false);
});

/* Copy email: copies the address and confirms in the button itself. */
$$<HTMLButtonElement>('[data-copy]').forEach((button) => {
  const label = $('[data-copy-label]', button);
  const original = label?.textContent ?? '';
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy!);
      if (label) label.textContent = 'Copied';
    } catch {
      if (label) label.textContent = button.dataset.copy!;
    }
    window.setTimeout(() => {
      if (label) label.textContent = original;
    }, 2200);
  });
});

/* Size labels: a "selected" element reports its real width and height. */
const measured = $$('[data-measure]');
const measure = () =>
  measured.forEach((element) => {
    const label = $('[data-measure-label]', element);
    const box = element.getBoundingClientRect();
    if (label) label.textContent = `${Math.round(box.width)} × ${Math.round(box.height)}`;
  });
if (measured.length) {
  measure();
  window.addEventListener('resize', measure, { passive: true });
  document.fonts?.ready.then(measure);
}

/* Cursor read-out in the hero, like the coordinates in a design tool. */
const coords = $('[data-coords]');
if (coords && window.matchMedia('(pointer: fine)').matches) {
  let frame = 0;
  window.addEventListener(
    'pointermove',
    (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        coords.textContent = `x ${Math.round(event.clientX)}   y ${Math.round(event.clientY)}`;
      });
    },
    { passive: true },
  );
}

export {};
