# chirag.writes

Personal blog built with [Astro](https://astro.build), deployed on GitHub Pages.

## Stack

- **Framework:** Astro 5 with MDX
- **Typography:** Exo 2 (headings) + Outfit (body) + Caveat (accents) + JetBrains Mono (code)
- **Features:** Dark mode, category filtering, reading time, table of contents, RSS feed, sitemap
- **Hosting:** GitHub Pages via GitHub Actions

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Writing Posts

Create `.mdx` files in `src/content/blog/`. Frontmatter schema:

```yaml
---
title: "Your Post Title"
description: "A short description for the post list and meta tags."
pubDate: 2026-03-12
category: ai          # engineering | ai | business | finance | personal
tags: [tag-one, tag-two]
draft: false           # set true to hide from production
series: "Series Name"  # optional — groups posts into a series
seriesOrder: 1         # optional — ordering within series
---
```

Posts support full MDX — you can import and use Astro/React components inline.

## Project Structure

```
src/
├── components/
│   ├── Nav.astro           # Sticky nav with theme toggle
│   ├── Footer.astro        # Site footer
│   ├── PostCard.astro      # Post list item
│   ├── FilterBar.astro     # Category filter pills
│   └── TableOfContents.astro # Sticky TOC sidebar
├── content/
│   └── blog/               # MDX posts go here
├── layouts/
│   ├── Base.astro          # HTML shell, head, meta
│   └── Post.astro          # Post reading view layout
├── pages/
│   ├── index.astro         # Homepage with post list
│   ├── about.astro         # About page
│   ├── 404.astro           # Not found
│   ├── rss.xml.ts          # RSS feed
│   └── blog/
│       └── [...slug].astro # Dynamic post pages
├── styles/
│   └── global.css          # Design tokens + article body styles
└── utils/
    └── reading-time.ts     # Word count → minutes
```

## Deployment

Push to `main` and GitHub Actions builds + deploys automatically.

**Setup:**
1. Create a GitHub repo
2. Go to Settings → Pages → Source: GitHub Actions
3. Update `site` in `astro.config.mjs` to your URL
4. Push — the workflow in `.github/workflows/deploy.yml` handles the rest

**Custom domain:** Add a `CNAME` file in `public/` with your domain, update `site` in config, and configure DNS.

## Customization

- **Colors:** Edit CSS variables in `src/styles/global.css` (both `:root` and `.dark`)
- **Bio/links:** Edit `src/pages/about.astro` and the author card in `src/layouts/Post.astro`
- **Categories:** Add new values to the `category` enum in `src/content/config.ts`
