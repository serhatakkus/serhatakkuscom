# serhatakkus.com

Personal site of Serhat Akkuş — software developer, architect and tutor.

Built with [Astro](https://astro.build), deployed on [Netlify](https://netlify.com).
Static HTML and CSS, no client-side framework, no analytics, no cookie banner.

## Requirements

Node **22.12 or newer** (Astro 7 requires it). Netlify is pinned to Node 22 in
`netlify.toml`.

```bash
node -v   # must be >= 22.12
```

## Commands

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Dev server at http://localhost:4321           |
| `npm run build`   | Build the static site to `dist/`              |
| `npm run preview` | Serve the built `dist/` locally               |
| `npm run check`   | Type-check `.astro` files                     |

## Editing the site

### Your details — `src/data/site.ts`

Almost everything personal lives in one file: name, role, tagline, navigation,
social links, the home-page stats, the "what I do" pillars, the projects list,
the career timeline and languages. Change it there and every page updates.

### Page copy — `src/pages/*.astro`

Longer prose that only appears on one page (the About essay, the tutoring
formats, the tennis/chess writing) lives in the page itself.

### Blog posts — `src/content/blog/*.md`

Add a Markdown file. The filename becomes the URL, so
`why-django.md` → `/blog/why-django/`.

```markdown
---
title: "Your title"
description: "One or two sentences. Used on the blog index, in search results and in the RSS feed."
date: 2026-06-01
tags: ["django", "teaching"]
draft: false
---

Your post here.
```

Set `draft: true` to keep a post out of the build, the blog index and the RSS
feed. Reading time is calculated automatically.

### Design — `src/styles/global.css`

Colours, spacing and type scale are CSS custom properties at the top of the
file. The dark theme redefines the same tokens under `:root[data-theme="dark"]`,
so changing a colour in both places is all a re-theme takes.

## Contact form

The contact form uses [Netlify Forms](https://docs.netlify.com/forms/setup/).
It works automatically once deployed — Netlify detects the `data-netlify="true"`
attribute at deploy time and handles submissions itself. There is no backend and
no email address exposed on the page.

Submissions appear in the Netlify dashboard under **Forms**. To get them by
email, set up a notification there:
**Site settings → Forms → Form notifications → Add notification → Email notification**.

The form posts to `/thanks/` on success and includes a honeypot field for spam.

> The form does nothing locally — Netlify Forms only works on a deployed site.

## Deploying

Netlify reads `netlify.toml`, so a connected repository needs no dashboard
configuration:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 22

Pushing to the default branch triggers a deploy. Pull requests get deploy
previews.

## A note on images

Blog posts can include images. Put them next to the post and reference them
relatively, or drop them in `public/` and reference them from the site root.
`sharp` is installed, so Astro's `<Image />` component is available if you want
automatic optimisation.

## Structure

```
public/            static files served as-is (favicon, OG image, robots.txt)
src/
  components/      Header, Footer, ThemeToggle, ProjectCard, PageHeader
  content/blog/    blog posts as Markdown
  data/site.ts     all personal data — start here
  layouts/Base     <head>, meta tags, structured data, theme script
  pages/           one file per route
  styles/          global.css — design tokens and base styles
  content.config.ts  blog frontmatter schema
astro.config.mjs   site URL, sitemap, syntax highlighting
netlify.toml       build settings and security headers
```

## Licence

Code is MIT (see `LICENSE`). The written content and personal details are not.
