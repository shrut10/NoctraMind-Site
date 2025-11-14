# Mindful Machine — Portfolio & Research Blog (Next.js + Tailwind)

A modern, dark-mode, content-driven personal site for projects, research notes on machine consciousness, blog posts, and book reviews.

## Quickstart

```bash
# 1) Install deps
npm install

# 2) Run locally
npm run dev

# 3) Build & deploy (Vercel recommended)
npm run build
# then connect the repo to Vercel and deploy
```

### Writing Posts
Create Markdown files in `content/{blog|research|books}` with frontmatter:

```md
---
title: Your Title
date: 2025-11-01
excerpt: One sentence summary.
---

Your markdown content here.
```

Routes are generated statically for each file.

### Customisation
- Edit site title and metadata in `app/layout.jsx`
- Update projects in `app/(site)/projects/page.jsx`
- Replace links in footer and contact page
- Tweak styles in `app/(site)/styles/globals.css` and `tailwind.config.js`
