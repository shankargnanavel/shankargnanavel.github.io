/**
 * All of the site's text lives here and is shared by both designs.
 * Edit it once and both update. Search for "NEEDS INPUT" to find the places
 * that are still waiting for your content.
 *
 * Career facts and figures follow your 2026 resume.
 */

export const site = {
  name: 'Gowrishankar G',
  shortName: 'Gowrishankar',
  role: 'Senior UX Designer',
  location: 'Chennai, India',
  title: 'Gowrishankar G | Senior UX Designer',
  description:
    'Senior UX Designer in Chennai with 10+ years designing enterprise banking platforms and B2B SaaS products. Research, design systems and front-end build.',

  // The live address, used for link previews. Change it here and in astro.config.mjs if you move to your own domain.
  url: 'https://shankargnanavel.github.io',

  email: 'shankargnanavel@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gowrishankar-g/',

  // The PDF behind every "Resume" button. It is switched off for now because the PDF
  // shows your phone number; the file is kept in /private, which is never published.
  // To switch it on: put a PDF in /public and set this to its name, e.g. '/Gowrishankar-G-Resume.pdf'.
  resumePdf: '',
};

/* ------------------------------------------------------------------ */
/* Design 1 (dark, fanned cards)                                       */
/* ------------------------------------------------------------------ */

export const nav = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'work', label: 'Work', icon: 'folder' },
  { id: 'journey', label: 'Journey', icon: 'briefcase' },
  { id: 'beyond', label: 'Beyond', icon: 'sparkles' },
  { id: 'recognition', label: 'Recognition', icon: 'award' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
] as const;

export const hero = {
  greeting: "Hi, I'm",
  // The accent line cycles through these.
  roles: ['Senior UX Designer at Tech Mahindra', 'Enterprise banking and B2B SaaS', 'Research to shipped front end'],
  intro: '10+ years designing enterprise banking platforms and B2B SaaS products.',
};

/** The statement under the hero. `strong: true` marks the phrase that stays bold. */
export const statement = [
  {
    text: "For 10+ years I've designed enterprise banking platforms and B2B SaaS products. At Waffor I led a team of four designers and shipped MioSalon and Welns to 3,000+ salons and spas in 50+ countries, on a design system of 150+ components. Today I'm redesigning the Payments journey of SBI's YONO Business at Tech Mahindra. The aim hasn't changed:",
  },
  { text: 'make complex products feel simple.', strong: true },
];

export const work = {
  heading: 'Selected work',
  subtitle: 'From first problem statement to shipped product: research, design and front-end build.',
  // [NEEDS INPUT] Confirm you are comfortable naming SBI and YONO Business on a public site.
  note: 'I am currently redesigning the Payments journey of SBI’s YONO Business at Tech Mahindra. That work is not public yet, and I am happy to talk through it on a call.',
};

export const journey = {
  heading: 'My journey',
  intro: [
    {
      text: 'I started out building the screens I designed. Ten years on I lead research, run stakeholder walkthroughs and build design systems,',
    },
    { text: 'and I still design things that can ship.', strong: true },
  ],
  // The fanned cards. Keep to five or six so they fit one row on desktop.
  cards: [
    {
      company: 'Tech Mahindra',
      dates: 'May 2025 – Present',
      role: 'Senior UX Designer',
      story:
        'I am redesigning the end-to-end Payments journey of YONO Business, SBI’s corporate internet banking platform: 600+ screens and 30+ scenarios across web and mobile.',
    },
    {
      company: 'Waffor',
      dates: 'May 2021 – May 2025',
      role: 'Lead UX/UI Designer',
      story:
        'I led a team of four designers on MioSalon and Welns, built a design system of 150+ components and led the launch of the Welns marketplace.',
    },
    {
      company: 'Waffor',
      dates: 'Apr 2020 – Apr 2021',
      role: 'Senior UX/UI Designer',
      story:
        'I ran user-centred design for MioSalon: research, personas and journey maps first, then features such as appointment management, campaigns and WhatsApp integration.',
    },
    {
      company: 'Waffor',
      dates: 'May 2018 – Mar 2020',
      role: 'Senior UI Developer',
      story:
        'I owned the design of Waffor.com and Miosalon.com, plus marketing and brand assets for 5+ global channels. I won the Shining Star award in 2019 for my work on MioSalon.',
    },
    {
      company: 'Vivid Infotech',
      dates: 'Sep 2015 – Apr 2018',
      role: 'Web Designer, intern to senior',
      story:
        'I grew from intern to senior web designer within 18 months, designing websites, landing pages and app mock-ups for clients in real estate, travel, restaurants, e-commerce and fintech.',
    },
  ],
};

export const skills = [
  'User interviews',
  'Usability testing',
  'Heuristic evaluation',
  'Journey mapping',
  'Information architecture',
  'AS-IS / TO-BE user flows',
  'Prototyping',
  'Design systems',
  'WCAG accessibility',
  'HTML, CSS & JavaScript',
];

export const tools = [
  'Figma',
  'FigJam',
  'Miro',
  'Jira',
  'Microsoft Clarity',
  'Google Analytics',
  'Photoshop',
  'Illustrator',
  'Figma Make',
  'Claude Code',
  'Cursor',
];

export const education = {
  degree: 'BE, Computer Science and Engineering',
  school: 'Mahendra Engineering College',
  dates: '2011 – 2015',
};

export const beyond = {
  eyebrow: 'Off the clock',
  heading: 'Beyond the work',
  subtitle: 'I learn by building things and showing up.',
  cta: { label: 'Follow on LinkedIn', href: site.linkedin },
  // [NEEDS INPUT] Add `image: 'beyond/your-photo.jpg'` (file in src/assets/beyond/) to turn a tile into a photo tile.
  tiles: [
    {
      kind: 'project',
      label: 'Side project',
      title: 'Pantry Ledger',
      text: 'My first full-stack app: a home grocery inventory tracker, built in Flutter with Claude Code as my pair programmer.',
      href: '/work/pantry-ledger/',
    },
    {
      kind: 'event',
      label: 'Meetup · Chennai',
      title: 'Design x AI Meetup',
      text: 'Working designers showing real AI workflows: what they tried, what broke, what stuck.',
    },
    {
      kind: 'quote',
      label: 'My takeaway',
      text: 'The bottleneck has shifted from production to judgment.',
    },
    {
      kind: 'note',
      label: 'Saturday to shipped',
      text: 'I went to the meetup on a Saturday. By the next week I had shipped my first app.',
    },
  ],
};

export const recognition = {
  heading: 'Recognition and learning',
  subtitle: 'Two awards for the work, and the courses I take to keep the craft sharp.',
  // `url` is optional. [NEEDS INPUT] Paste each "See credential" link from LinkedIn to show a button.
  items: [
    {
      type: 'Award',
      title: 'Bravo Award',
      issuer: 'Tech Mahindra',
      date: '2026',
      note: 'For delivering excellence with energy, ownership and impact.',
      url: '',
    },
    {
      type: 'Award',
      title: 'Shining Star',
      issuer: 'Waffor Retail Solutions',
      date: '2019',
      note: 'For critical contributions to MioSalon’s product design.',
      url: '',
    },
    {
      type: 'Certificate',
      title: 'Customer Experience: Creating Customer Personas',
      issuer: 'LinkedIn Learning',
      date: 'Mar 2025',
      note: '',
      url: '',
    },
    {
      type: 'Certificate',
      title: 'UX Research: Journey Mapping',
      issuer: 'LinkedIn Learning',
      date: 'Mar 2025',
      note: '',
      url: '',
    },
    {
      type: 'Certificate',
      title: 'How Thought Leadership Can Differentiate Your Brand',
      issuer: 'Thought Leadership Leverage',
      date: 'Dec 2024',
      note: '',
      url: '',
    },
    {
      type: 'Membership',
      title: 'Interaction Design Foundation member',
      issuer: 'The Interaction Design Foundation',
      date: 'Jul 2024',
      note: '',
      url: '',
    },
    {
      type: 'Certificate',
      title: 'User Interface & Experience Design',
      issuer: 'Kaarwan',
      date: 'May 2021',
      note: '',
      url: '',
    },
  ],
};

export const contact = {
  heading: "Let's talk",
  subtitle: 'Hiring for a senior UX role, or stuck on a product problem? Email is the quickest way to reach me.',
  // Questions with an empty answer are hidden on the live site and flagged in `npm run dev`.
  faq: [
    {
      q: 'What kinds of products have you designed?',
      a: 'Enterprise banking and B2B SaaS. I am currently redesigning the Payments journey of SBI’s YONO Business at Tech Mahindra. Before that I owned UX for MioSalon, a salon and spa management platform, and Welns, a booking marketplace. Earlier I designed websites and apps for clients in real estate, travel, restaurants, e-commerce and fintech.',
    },
    {
      q: 'Do you really code?',
      a: 'Yes. I spent nearly two years as a UI developer and still build in HTML, CSS and JavaScript. I designed and coded the MioSalon landing page myself, and I recently built a Flutter app end to end with Claude Code.',
    },
    {
      q: 'Have you led a team?',
      a: 'Yes. At Waffor I led a team of four designers: I set the design process, ran design reviews, took part in hiring and tracked the work with the CEO and product manager. At Tech Mahindra I mentor junior designers and give peer reviews.',
    },
    {
      q: 'How do you work with product and engineering?',
      a: 'From requirements through to the build. I take AS-IS walkthroughs from product managers and business analysts, present the TO-BE solution back to them, then stay with developers through handoff so the build matches the design.',
    },
    // [NEEDS INPUT] Fill in the answers below and they appear on the site.
    { q: 'What roles are you looking for?', a: '' },
    { q: 'Where are you based, and are you open to remote work or relocation?', a: '' },
    { q: 'What is your notice period?', a: '' },
    { q: 'Can you share your banking work?', a: '' },
  ],
};

export const footer = {
  credit: 'Designed in Chennai. Built with Astro and Claude Code.',
};

/* ------------------------------------------------------------------ */
/* Design 2 (Pixel and Paper)                                          */
/* ------------------------------------------------------------------ */

/** Hero paragraphs. `mark: true` gives a phrase the highlighter stroke. */
export const intro = [
  [
    { text: 'Hi, I am Gowrishankar.' },
    { br: true },
    { text: 'I work end to end: ' },
    { text: 'user interviews, journey mapping, prototyping and usability testing', mark: true },
    { text: ', then I stay with developers until the build matches the design.' },
  ],
  [
    { text: 'I have ' },
    { text: '10+ years of experience', mark: true },
    { text: ' designing ' },
    { text: 'enterprise banking platforms', mark: true },
    { text: ' and ' },
    { text: 'B2B SaaS products', mark: true },
    { text: '. Right now I am redesigning the Payments journey of ' },
    { text: 'SBI’s YONO Business', mark: true },
    { text: ' at Tech Mahindra. Before that I led a team of four designers at Waffor.' },
  ],
] as { text?: string; mark?: boolean; br?: boolean }[][];

export const process = {
  label: 'How I work',
  intro: 'The details change with every project. This sequence rarely does.',
  steps: [
    {
      title: 'Map what exists',
      text: 'I map the AS-IS flows for every user type, run a heuristic evaluation and benchmark the journey against the best in the category.',
    },
    {
      title: 'Listen, then propose',
      text: 'I interview users about their expectations and challenges, then turn the findings into TO-BE flows with a solution for each pain point.',
    },
    {
      title: 'Test before detailing',
      text: 'I test alternative approaches with users, take the preferred one into detailed design and support developers through handoff.',
    },
  ],
  cta: { label: 'See the process in a real project', href: '/work/miosalon-landing-page/' },
};

export const outside = {
  label: 'Outside work',
  text: 'When I am away from client work I build small things of my own and show up at design meetups in Chennai.',
};

export const connect = {
  heading: 'Let’s connect',
  text: 'Hiring for a senior UX role, or stuck on a product problem? Tell me a little about it.',
  // The form opens the visitor's email app with their message ready to send to you.
  note: 'This opens your email app with the message ready to send.',
};

/* ------------------------------------------------------------------ */
/* Design 3 (Spec sheet)                                               */
/* ------------------------------------------------------------------ */

export const spec = {
  // The big name in the footer, in two halves: bold, then italic.
  wordmark: ['Gowri', 'shankar'],

  // Hero headline: "<name> / designs [focus] / that feel <emphasis>"
  headline: { verb: 'designs', focus: 'banking and SaaS', tail: 'that feel', emphasis: 'simple.' },
  sub: 'Screens come last. First I map the flows, talk to the people who use them and test the options.',

  work: {
    eyebrow: 'Selected work',
    title: 'Four case',
    emphasis: 'files.',
    intro: 'Each card has a headline number on the front and the 30-second story on the back. Flip one.',
  },

  // Work that has no case study on this site. Every item is from your resume.
  archive: {
    title: 'More work, best told in person.',
    text: 'Ten years of work that did not fit on one page.',
    items: [
      'MioSalon design system, 150+ components',
      'Appointment Management',
      'Campaign Management',
      'WhatsApp Integration',
      '6 white-labelled products',
      'Support portal rebrand',
      'WCAG accessibility guidelines',
    ],
    cta: 'Ask me for the rest',
  },

  path: {
    eyebrow: 'Ten years',
    title: 'The',
    emphasis: 'path.',
    intro: 'Client websites, a SaaS start-up, an enterprise banking programme. The titles changed. I kept building what I designed.',
  },

  process: { eyebrow: 'How I work', title: 'Three', emphasis: 'steps.' },

  impact: {
    eyebrow: 'Impact',
    title: 'At',
    emphasis: 'scale.',
    intro: 'The scale of the products I have designed for. Every figure is from my resume.',
    lead: {
      source: 'Tech Mahindra · SBI YONO Business',
      value: '600+',
      label: 'screens and 30+ scenarios in the Payments journey I am redesigning, for users from sole proprietors to large corporates.',
    },
    tiles: [
      { source: 'Waffor · MioSalon and Welns', value: '3,000+', label: 'salons and spas in 50+ countries use the products I designed' },
      { source: 'Waffor · design system', value: '150+', label: 'components, cutting design and handoff time by 50%' },
      { source: 'Tech Mahindra · accessibility', value: '85+', label: 'designers follow the WCAG guidelines I co-created' },
      { source: 'Welns · launch', value: '80%', label: 'fewer no-shows, with 40% more online bookings' },
      { source: 'Leadership', value: '4', label: 'designers led at Waffor: process, reviews and hiring' },
      { source: 'Experience', value: '10+', label: 'years across banking, fintech, SaaS and health and wellness' },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Say',
    emphasis: 'hello.',
    text: 'My banking work is shared in person rather than published. Ask for a walkthrough, or just say hello.',
    now: 'Senior UX Designer, Tech Mahindra',
    before: 'Waffor (MioSalon, Welns) · Vivid Infotech',
  },

  // The black pill in the header names the section you are in.
  island: {
    top: 'Hello',
    work: 'Four projects. Flip a card.',
    path: 'Ten years, three companies',
    process: 'Three steps I repeat',
    impact: 'Numbers from my resume',
    contact: 'Email is quickest',
  },
};

/* ------------------------------------------------------------------ */
/* Resume (web resume page in design 1, experience list in design 2)   */
/* ------------------------------------------------------------------ */

export const resume = {
  summary:
    'Senior UX designer with 10+ years of experience designing enterprise banking platforms and B2B SaaS products across banking and BFSI, fintech, fleet management, e-commerce, healthcare, and health and wellness. I work end to end, from user interviews and heuristic evaluation to prototyping and usability testing, and I present design decisions to business, product and engineering stakeholders. A design-to-code background (HTML, CSS, JavaScript, Flutter) and AI-assisted workflows help me move from idea to tested prototype faster.',
  experience: [
    {
      company: 'Tech Mahindra',
      short: 'Tech Mahindra',
      note: 'Client: State Bank of India (SBI)',
      location: 'Chennai',
      roles: [
        {
          title: 'Senior UX Designer',
          dates: 'May 2025 – Present',
          bullets: [
            'Redesigning the end-to-end Payments journey of YONO Business, SBI’s corporate internet banking platform, for web and mobile: 600+ screens and 30+ scenarios, for users from sole proprietors to large corporates.',
            'Simplified the payment journey across every account setup: single-user (Saral), two-user and multi-user (Vyapaar, Vistaar).',
            'Mapped AS-IS flows for all user types, ran heuristic evaluations and benchmarked the journey against leading banks.',
            'Interviewed users on expectations, behaviours and challenges, and turned the findings into TO-BE flows, scenarios and a recommended solution for each pain point.',
            'Tested three design approaches with users and took the preferred direction into wireframes and detailed design.',
            'Partnered with product managers and business analysts from requirements through solutioning, and supported developers through handoff and implementation.',
            'Co-created WCAG-based accessibility guidelines now followed by 85+ designers.',
            'Mentor junior designers and give peer reviews across the design team.',
          ],
        },
      ],
    },
    {
      company: 'Waffor Retail Solutions',
      short: 'Waffor',
      note: 'MioSalon and Welns',
      location: 'Chennai',
      roles: [
        {
          title: 'Lead UX/UI Designer',
          dates: 'May 2021 – May 2025',
          bullets: [
            'Led a team of 4 designers: set the design process, ran design reviews and took part in hiring; scoped and tracked design work with the CEO, stakeholders and product manager.',
            'Owned UX for MioSalon (B2B salon and spa management SaaS) and Welns (consumer booking marketplace), together serving 3,000+ salons and spas in 50+ countries.',
            'Built a design system of 150+ components with design tokens and Figma variables, cutting design and handoff time by 50%.',
            'Led the design and launch of Welns: 30% higher engagement within 2 months, 40% more online bookings, 80% fewer no-shows and 60% higher user satisfaction.',
            'Redesigned MioSalon’s landing page mobile-first in 30 days, tested it with 50 salon and spa owners (92% task success finding features) and built it in HTML, CSS and JavaScript.',
            'Optimised the MioSalon and Welns websites for SEO, increasing organic traffic by 45%.',
            'Rebranded MioSalon’s support portal and helped launch 6 white-labelled versions of MioSalon for clients.',
          ],
        },
        {
          title: 'Senior UX/UI Designer',
          dates: 'Apr 2020 – Apr 2021',
          bullets: [
            'Drove user-centred design for MioSalon, raising user satisfaction by 70%.',
            'Ran competitor analysis, journey mapping, personas and empathy mapping, cutting time to market for new features by 30%.',
            'Designed and launched Appointment Management, Campaign Management and WhatsApp Integration.',
          ],
        },
        {
          title: 'Senior UI Developer',
          dates: 'May 2018 – Mar 2020',
          bullets: [
            'Owned the design of Waffor.com and Miosalon.com with executive leadership, improving online engagement by 40%.',
            'Created marketing and brand assets supporting 5+ global marketing channels.',
          ],
        },
      ],
    },
    {
      company: 'Vivid Infotech Software Solutions',
      short: 'Vivid Infotech',
      note: '',
      location: 'Chennai',
      roles: [
        {
          title: 'Web Designer, intern to senior',
          dates: 'Sep 2015 – Apr 2018',
          bullets: [
            'Grew from intern to Senior Web Designer within 18 months, designing websites, landing pages and Android and iOS app mock-ups for clients in real estate, travel, restaurants, e-commerce and fintech.',
            'Redesigned the Vivid Infotech website, increasing lead conversion by 30%.',
          ],
        },
      ],
    },
  ],
};
