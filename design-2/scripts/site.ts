/**
 * Behaviour for Design 2. The shared script handles fade-ins, the case-study
 * index and the image lightbox; this file adds the theme switch, the
 * copy-email button and the contact form.
 */
import '../../src/scripts/main.ts';

const $$ = <T extends HTMLElement>(selector: string) => Array.from(document.querySelectorAll<T>(selector));

/* Theme switch: Pixel (dark) or Paper (light), remembered for next time. */
const modeButtons = $$<HTMLButtonElement>('[data-mode-set]');

function applyMode(mode: string) {
  document.documentElement.dataset.mode = mode;
  modeButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.modeSet === mode)));
  try {
    localStorage.setItem('mode', mode);
  } catch {
    /* Private browsing: the choice simply is not remembered. */
  }
}

modeButtons.forEach((button) => button.addEventListener('click', () => applyMode(button.dataset.modeSet!)));
applyMode(document.documentElement.dataset.mode === 'paper' ? 'paper' : 'pixel');

/* Copy Email: copies the address and confirms in the button itself. */
$$<HTMLButtonElement>('[data-copy]').forEach((button) => {
  const label = button.querySelector<HTMLElement>('[data-copy-label]');
  const original = label?.textContent ?? '';
  button.addEventListener('click', async () => {
    const value = button.dataset.copy!;
    try {
      await navigator.clipboard.writeText(value);
      if (label) label.textContent = 'Copied';
    } catch {
      if (label) label.textContent = value;
    }
    window.setTimeout(() => {
      if (label) label.textContent = original;
    }, 2200);
  });
});

/* Contact form: opens the visitor's email app with the message filled in. */
$$<HTMLFormElement>('[data-mail-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const field = (name: string) => String(data.get(name) ?? '').trim();
    const lines = [field('message'), '', `Name: ${field('name')}`, `Email: ${field('email')}`];
    if (field('phone')) lines.push(`Phone: ${field('phone')}`);
    if (field('company')) lines.push(`Company: ${field('company')}`);
    const subject = `Portfolio enquiry from ${field('name')}`;
    window.location.href = `mailto:${form.dataset.mailForm}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  });
});

export {};
