/**
 * All projects live here, in the order they appear on the home page.
 *
 * To add a project:
 *   1. Copy one of the blocks below and change the text.
 *   2. Put its images in src/assets/work/<slug>/ (cover.png is the card image).
 *   3. Write the case study in src/content/work/<slug>.mdx.
 *
 * Project results follow the old portfolio. Search "NEEDS INPUT" for open items.
 */

export interface Project {
  slug: string;
  /** Short name on the home page card. */
  name: string;
  /** Small line above the card title. */
  label: string;
  /** Card description: three or four lines. */
  card: string;
  /** Case-study page headline and one-line summary. */
  headline: string;
  summary: string;
  /** Image path inside src/assets/. Leave empty for a type-only cover. */
  cover: string;
  coverAlt: string;
  meta: { label: string; value: string }[];
  /** The "In 30 seconds" block at the top of the case study. */
  tldr: { problem: string; role: string; outcome: string };
  links?: { label: string; href: string }[];
  /** 'in-progress' shows the card without a case-study page. */
  status?: 'in-progress';
  /** Background tint for the case-study page in design 2. */
  tint?: string;
  /** Design 3: the big number on the card, and the small tags above it. */
  stat?: { value: string; label: string };
  tags?: string[];
}

export const projects: Project[] = [
  {
    slug: 'welns',
    name: 'WELNS',
    label: 'Booking marketplace',
    card: 'People couldn’t compare nearby salons or predict the wait. I led the design and front-end build of a mobile-first marketplace with live wait times and pay-later booking.',
    headline: 'WELNS: booking a salon without the wait',
    summary:
      'An online marketplace that changes how people discover and book salon and spa services, and how salons fill their calendars.',
    cover: 'work/welns/cover.png',
    coverAlt:
      'Two phone screens from WELNS: a salon profile with selectable hair services and prices, and a booking confirmation with payment summary.',
    meta: [
      { label: 'Client', value: 'WELNS / Waffor' },
      { label: 'Industry', value: 'Wellness' },
      { label: 'Role', value: 'Lead UX/UI Designer & Developer' },
      { label: 'Platform', value: 'Responsive web application' },
    ],
    tldr: {
      problem:
        'Customers struggled to find and compare salons, faced unpredictable waits and clumsy booking. Salons lost time to no-shows and manual appointment books.',
      role: 'I led UX and UI design and front-end development: research, flows, wireframes, high-fidelity design, testing and build.',
      // [NEEDS INPUT] Confirm how and over what period these were measured.
      outcome: '40% more online bookings, 80% fewer no-shows and a 60% improvement in user satisfaction.',
    },
    links: [{ label: 'Visit welns.io', href: 'https://www.welns.io/' }],
    tint: '#1fb5ac',
    stat: { value: '40%', label: 'more online bookings after launch, with 80% fewer no-shows' },
    tags: ['Marketplace', 'Mobile-first', 'Lead designer'],
  },
  {
    slug: 'miosalon-landing-page',
    name: 'MioSalon landing page',
    label: 'SaaS website redesign',
    card: '65% of visits came from mobile, on a page with serious mobile usability problems. I redesigned and coded it mobile-first in 30 days and tested it with 50 salon and spa owners.',
    headline: 'MioSalon landing page, rebuilt mobile-first in 30 days',
    summary:
      'A redesign that helps salon and spa owners understand MioSalon’s cloud software quickly, aimed at more demo sign-ups and better lead capture.',
    cover: 'work/miosalon-landing-page/cover.png',
    coverAlt:
      'The redesigned MioSalon landing page on a phone: headline, Request Demo button and review ratings, beside the line “Salon & Spa business operations made easy”.',
    meta: [
      { label: 'Client', value: 'MioSalon / Waffor' },
      { label: 'Industry', value: 'SaaS, wellness' },
      { label: 'Role', value: 'Lead UX/UI Designer & Developer' },
      { label: 'Platform', value: 'Responsive website' },
      { label: 'Timeline', value: '30 days' },
    ],
    tldr: {
      problem:
        'The old page had low engagement, poor mobile usability and a generic structure that didn’t explain MioSalon’s value to salon owners.',
      role: 'I led design, user testing and development end to end, working with the product manager and CEO throughout.',
      // [NEEDS INPUT] Add before/after numbers (conversion, bounce rate) if you have them.
      outcome:
        'In first-click tests with 50 owners, 92% found feature details, 88% found the free trial and 85% found demo booking. Testing led to five improvements in the final design.',
    },
    links: [{ label: 'Visit miosalon.com', href: 'https://www.miosalon.com/' }],
    tint: '#2f6bff',
    stat: { value: '30 days', label: 'to redesign the page, test it with 50 salon and spa owners and build it' },
    tags: ['SaaS website', 'User testing', 'Front-end build'],
  },
  {
    // [NEEDS INPUT] Confirm you are comfortable naming SBI and YONO Business publicly.
    // To publish a case study: remove `status`, add a cover and write src/content/work/yono-business.mdx.
    slug: 'yono-business',
    name: 'YONO Business payments',
    label: 'Corporate internet banking',
    card: 'I am redesigning the end-to-end Payments journey of SBI’s corporate internet banking platform for web and mobile: 600+ screens and 30+ scenarios, for users from sole proprietors to large corporates.',
    headline: 'YONO Business: one payments journey for every kind of business',
    summary: 'The Payments journey of SBI’s corporate internet banking platform, redesigned for web and mobile.',
    cover: '',
    coverAlt: '',
    meta: [
      { label: 'Client', value: 'State Bank of India, via Tech Mahindra' },
      { label: 'Role', value: 'Senior UX Designer' },
      { label: 'Timeline', value: 'May 2025 to present' },
    ],
    tldr: { problem: '', role: '', outcome: '' },
    status: 'in-progress',
    tint: '#8a6bff',
    stat: { value: '600+', label: 'screens across 30+ payment scenarios, on web and mobile' },
    tags: ['Banking', 'Payments', 'In progress'],
  },
  {
    slug: 'pantry-ledger',
    name: 'Pantry Ledger',
    label: 'Side project',
    card: 'Our kitchen had no visibility: things ran out silently and duplicates piled up. I designed and built a grocery inventory and analytics app in Flutter, with Claude Code as my pair programmer.',
    headline: 'Pantry Ledger: the kitchen inventory app I built with AI',
    summary:
      'A home grocery inventory and analytics app, and my first full-stack build. Designed by me and built in Flutter with Claude Code as my pair programmer.',
    // [NEEDS INPUT] Add a screenshot at src/assets/work/pantry-ledger/cover.png and set cover to 'work/pantry-ledger/cover.png'.
    cover: '',
    coverAlt: '',
    meta: [
      { label: 'Type', value: 'Side project' },
      { label: 'Role', value: 'Design and build' },
      { label: 'Platform', value: 'Flutter app' },
      { label: 'Timeline', value: 'Shipped within a week' },
    ],
    tldr: {
      problem:
        'Groceries ran out without warning, duplicates piled up and every shopping trip relied on memory. The problem wasn’t shopping. It was visibility.',
      role: 'Everything: the idea, the design and the build, with Claude Code as my pair programmer.',
      outcome: 'A live app that tracks stock, logs weekly consumption and writes the shopping list for me.',
    },
    links: [{ label: 'Open Pantry Ledger', href: 'https://pantryledgerapp.vercel.app/' }],
    tint: '#3ddc97',
    stat: { value: '1 week', label: 'from a Saturday meetup to a shipped app' },
    tags: ['Side project', 'Flutter', 'AI-assisted'],
  },
];

/** Projects that have a full case-study page. */
export const caseStudies = projects.filter((project) => project.status !== 'in-progress');

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
