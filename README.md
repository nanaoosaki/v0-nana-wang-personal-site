# Nana Wang — Personal Site

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222?style=flat-square&logo=github)](https://pages.github.com/)

**Live site:** [nanawang.dev](https://nanawang.dev)

Static single-page portfolio for **Nana Wang** — AI builder & strategist. The app is a **Next.js (App Router)** project that is **exported to static HTML/CSS/JS** and hosted on **GitHub Pages**, with a custom domain.

---

## What’s in this repo

| Area | What it does |
|------|----------------|
| **Hero** | Name, tagline, social links, CTAs to experiments / contact / writing |
| **What people say** | Testimonials / quotes |
| **Experiments & systems** | Cards for shipped work (enterprise AI, health demo, etc.) |
| **Writing** | Links to articles (e.g. LinkedIn, Superlinear) |
| **Lab notes** | Short cards linking to LinkedIn posts (“Beyond Notebooks” series) |
| **Contact** | Ways to reach you |

Content is mostly driven by arrays/objects in `components/` (e.g. `experiments.tsx`, `writing.tsx`, `lab-notes.tsx`). There are **no API routes** — the site is fully client-side / static after build.

---

## Tech stack

- **Framework:** Next.js 16 (App Router), React 19  
- **Styling:** Tailwind CSS 4  
- **UI:** Radix UI primitives, Lucide icons  
- **Build output:** `next build` with `output: 'export'` → static files in `out/`  
- **Language:** TypeScript  

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# Production static build (same as CI)
npm run build
```

Static assets are written to `out/`. To preview the exported site locally, serve that folder (e.g. `npx serve out`).

---

## Deployment (how it actually ships)

This project is **not** deployed on Vercel for production. It uses:

1. **Static export** — configured in `next.config.mjs` (`output: 'export'`, `images.unoptimized: true` for static hosting).
2. **GitHub Actions** — workflow in [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml):
   - Triggers on push to `main` (and manual `workflow_dispatch`).
   - Runs `npm ci` and `npm run build`.
   - Uploads the `out/` directory as the Pages artifact and deploys with `actions/deploy-pages`.
3. **GitHub Pages** — repository Pages settings use **GitHub Actions** as the source.
4. **Custom domain** — `nanawang.dev` (CNAME / DNS as documented in-repo).

For a full checklist, troubleshooting, and optional `basePath` if you ever host under a subpath, see **[GITHUB_PAGES_DEPLOYMENT_GUIDE.md](./GITHUB_PAGES_DEPLOYMENT_GUIDE.md)**.

---

## Repository

- **GitHub:** [github.com/nanaoosaki/v0-nana-wang-personal-site](https://github.com/nanaoosaki/v0-nana-wang-personal-site)

---

## Contact

- **Email:** [nwangwk@gmail.com](mailto:nwangwk@gmail.com)  
- **LinkedIn:** [linkedin.com/in/nana-wang-00593465](https://www.linkedin.com/in/nana-wang-00593465/)  
- **GitHub:** [github.com/nanaoosaki](https://github.com/nanaoosaki)

---

## License

© Nana Wang. All rights reserved.
