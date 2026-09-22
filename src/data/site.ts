/**
 * Single source of truth for everything personal on this site.
 * Edit this file to update the site — no component changes needed.
 */

export const site = {
  name: "Serhat Akkuş",
  shortName: "Serhat Akkuş",
  url: "https://serhatakkus.com",
  role: "Java developer, software architect & tutor",
  location: "Türkiye",
  tagline: "I build software, and I teach people how to build it.",
  description:
    "Serhat Akkuş — Java developer and software architect with 20+ years building enterprise systems for the financial sector, now tutoring Java, algorithms and Python one-to-one.",
  locale: "en",
} as const;

/**
 * Optional sections. Nothing is deleted when one is switched off — the pages and
 * content stay in the repo, they just stop being built and linked.
 *
 * To bring the blog back:
 *   1. set `blog: true` below
 *   2. rename `src/pages/_blog/`     -> `src/pages/blog/`
 *   3. rename `src/pages/_rss.xml.ts` -> `src/pages/rss.xml.ts`
 *
 * Astro ignores any file or folder whose name starts with an underscore, which is
 * what keeps the blog out of the build without touching the code or the posts.
 */
export const features = {
  blog: false,
};

export const nav = [
  { label: "About", href: "/about/" },
  { label: "Tutoring", href: "/tutoring/" },
  { label: "Projects", href: "/projects/" },
  ...(features.blog ? [{ label: "Writing", href: "/blog/" }] : []),
  { label: "Contact", href: "/contact/" },
];

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/serhat-akkus/",
    handle: "serhat-akkus",
  },
  {
    label: "GitHub",
    href: "https://github.com/serhatakkus",
    handle: "serhatakkus",
  },
  {
    label: "ParionTech",
    href: "https://pariontech.com",
    handle: "pariontech.com",
  },
] as const;

/** Headline numbers on the home page. */
export const stats = [
  { value: "20+", label: "years writing software" },
  { value: "8+", label: "years leading teams" },
] as const;

/** What I do — the three pillars, shown on the home page. */
export const pillars = [
  {
    title: "Tutoring",
    href: "/tutoring/",
    summary:
      "One-to-one tutoring in Java, algorithms and Python. Most of the people I work with are university students in Europe and the US working through demanding computer science courses.",
    points: ["Java & OOP", "Algorithms & data structures", "Python"],
  },
  {
    title: "Building",
    href: "/projects/",
    summary:
      "Two decades of enterprise systems, most of them in financial services — the kind where correctness matters more than fashion and the code outlives the team that wrote it.",
    points: ["Java & Spring Boot", "Design patterns & architecture", "PL/SQL & relational data"],
  },
  {
    title: "Leading",
    href: "/about/",
    summary:
      "Eight years as a lead developer and team leader taught me that the hard part is rarely the code. I help teams make decisions they can live with.",
    points: ["Technical leadership", "Mentoring", "System design"],
  },
] as const;

export const projects = [
  {
    name: "Çanakkale Tenis Platformu",
    href: "https://tenisplatformu.org",
    year: "2025 — now",
    role: "Developer · community admin team",
    status: "Live",
    featured: true,
    summary:
      "The web app behind Çanakkale's tennis community. I did not start the community — I joined it in 2023, joined the admin team, and in 2025 built the platform that now runs its leagues, tournaments and match results for around 120 players.",
    detail:
      "Before it, all of this lived in a group chat and a spreadsheet: who plays whom, when, and what happened. The app now handles player profiles, fixture generation, result tracking and season standings for a non-profit community that welcomes players regardless of age, gender or background.",
    stack: ["Django", "Python", "PostgreSQL", "HTML/CSS"],
  },
  {
    name: "ParionTech",
    href: "https://pariontech.com",
    year: "2019 — now",
    role: "Founder",
    status: "Active",
    featured: true,
    summary:
      "My software brand. ParionTech is where I take on product work, consulting and the ideas I want to build properly rather than quickly.",
    detail:
      "The principle behind it is simple: integrate improvement with development. Software that is not getting better is getting worse, so the work of improving it belongs inside the build, not after it.",
    stack: ["Product", "Architecture", "Consulting"],
  },
  {
    name: "serhatakkus.com",
    href: "https://github.com/serhatakkus/serhatakkuscom",
    year: "2026",
    role: "The site you are reading",
    status: "Open source",
    featured: false,
    summary:
      "Built with Astro, deployed on Netlify. No trackers, no cookie banner, no JavaScript framework — a few kilobytes of HTML and CSS that load instantly.",
    detail: "",
    stack: ["Astro", "TypeScript", "Netlify"],
  },
] as const;

/** Career timeline — shown on the About page. */
export const timeline = [
  {
    period: "Recent years",
    title: "Freelance tutor — Java, algorithms, Python",
    org: "Independent",
    body: "Teaching one-to-one, mostly to computer science students at universities in Europe and the US, alongside working developers and teams.",
  },
  {
    period: "2019 — now",
    title: "Founder",
    org: "ParionTech",
    body: "Product work, consulting and my own ideas, built the way I think software should be built.",
  },
  {
    period: "~2013 — 2021",
    title: "Lead developer, team leader & software architect",
    org: "Financial sector, Türkiye",
    body: "Eight-plus years leading development teams on large enterprise applications: architecture, delivery, hiring and the day-to-day work of keeping a team pointed in the same direction.",
  },
  {
    period: "2004 — 2013",
    title: "Software developer",
    org: "Financial sector, Türkiye",
    body: "I started working as a developer before I finished my degree. Enterprise Java and large financial applications — the years of actually learning the craft, and of making the mistakes worth making.",
  },
  {
    period: "2000 — 2005",
    title: "Computer Engineering",
    org: "Yıldız Technical University",
    body: "Istanbul. Graduated January 2005, by which point I was already working.",
  },
] as const;

/**
 * What I actually work with, grouped for the About page. Ordered by how much of
 * my career each one accounts for, not by what is currently fashionable.
 */
export const expertise = [
  {
    group: "Languages",
    items: ["Java", "Python", "SQL & PL/SQL", "JavaScript"],
  },
  {
    group: "Design",
    items: ["Object-oriented design", "Design patterns", "Software architecture", "Domain modelling"],
  },
  {
    group: "Frameworks & platforms",
    items: ["Spring", "Spring Boot", "Jakarta / Java EE", "Django"],
  },
  {
    group: "Data",
    items: ["Oracle", "PostgreSQL", "Relational modelling", "Query tuning"],
  },
  {
    group: "Domain",
    items: ["Financial applications", "Enterprise systems", "Large-scale delivery", "Legacy modernisation"],
  },
] as const;

export const languages = [
  { name: "Turkish", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
] as const;
