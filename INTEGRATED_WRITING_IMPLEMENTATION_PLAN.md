# Implementation plan: integrated writing library (on-site MDX)

This plan is **our working checklist** for upgrading [nanawang.dev](https://nanawang.dev) from “curated link cards” to a **repo-native content library**, while keeping **Next.js static export + GitHub Pages**.

It complements (and does not replace) the high-level architecture in **`Achitectural_proposal_integratedwritingsite.md`**. When you paste ChatGPT’s phased plan, we’ll **merge** the two: align phases, resolve conflicts, and track one backlog.

---

## Non-negotiables

| Constraint | Implication |
|------------|-------------|
| `output: 'export'` | No SSR, no API routes, no ISR. All pages must be build-time or client-only. |
| GitHub Pages | `out/` is the truth; `images.unoptimized` stays unless we change hosting. |
| Same repo | Content lives in `content/` (or similar); deploy pipeline unchanged (`npm run build` in Actions). |

---

## Phase 0 — Discovery & spike (before large refactors)

**Goal:** Prove MDX + metadata + static routes work in *this* repo with Turbopack/Next 16.

1. **Pick one MDX integration** (evaluate in order of fit for static App Router):
   - **Option A:** `@next/mdx` + frontmatter (e.g. `gray-matter` or `zod` parsing in loaders).
   - **Option B:** Build-time compile with **`next-mdx-remote`** (explicit, good for static generation).
   - **Option C:** **`velite`** or **content-collections** if we want typed collections with less boilerplate.
2. **Spike:** One collection (e.g. `content/notes/hello-world.mdx`), one dynamic route `app/notes/[slug]/page.tsx`, `generateStaticParams`, render prose styling.
3. **Confirm:** `npm run build` produces correct HTML under `out/notes/...` and assets resolve on GitHub Pages (watch `basePath` / asset URLs if ever enabled).
4. **Decide** frontmatter schema (minimal v1: `title`, `summary`, `publishedAt`, `tags`, `status`, `crossPostUrl`).

**Exit criteria:** CI build green; one real MDX page live on the feature branch preview (local `serve out` or deploy from branch if you add a preview workflow later).

---

## Phase 1 — Content foundation (parallel to proposal “Phase 1”)

**Goal:** Filesystem is the source of truth; homepage can still be mostly unchanged.

1. Create **`content/`** tree (start with **one** type, e.g. `notes/` or `essays/`; add `case-studies/` when ready).
2. Implement **`lib/content/`** helpers:
   - List all posts, filter `status === 'published'`, sort by `publishedAt`.
   - Parse frontmatter with **Zod** (or similar) for safe builds.
3. Add routes (minimal first):
   - `/writing` **or** `/notes` as the first archive index (pick one naming convention and stick to it — the proposal uses both “essays” and “writing” URLs; we should map `content/essays` → `/writing` explicitly in code).
   - `/writing/[slug]` (or `/notes/[slug]`) for detail pages.
4. Add shared **`components/prose/`** wrapper (typography plugin / `prose` classes) for MDX body.
5. **Migrate 2–5 pieces**: start with shortest posts or posts that already exist as external links — either full MDX body on-site or stub MDX with summary + `crossPostUrl` (“read also on LinkedIn”) until full text is ready.

**Exit criteria:** Archive page lists real items; detail pages render MDX; no regression to existing homepage sections (or intentional small copy updates only).

---

## Phase 2 — Library features (proposal “Phase 2”, split for safety)

Do in **small PR-sized slices**:

1. **Archive** — `/archive` or paginated `/writing` with sort/filter UI (client-side filter OK at first).
2. **Tags** — `generateStaticParams` for `/tags/[tag]` from union of all tags.
3. **Topics** (optional) — same pattern as tags if `topics` array is in frontmatter.
4. **Related posts** — heuristic: same tag + same series; build-time links only.
5. **Reading time** — derive from word count at build time.
6. **TOC** — optional MDX heading extraction or `remark` plugin; only if long essays land early.
7. **SEO** — `generateMetadata` per slug from frontmatter.
8. **RSS** — static `rss.xml` or `feed.xml` generated at build (write to `public/` or route handler that becomes static — *static export prefers a build script writing `public/feed.xml`*).

**Exit criteria:** Discoverability works without JS for core navigation (static links); enhancements can layer on.

---

## Phase 3 — Homepage integration

**Goal:** Align with proposal § “Design adjustment to your current homepage”.

1. Replace or narrow **`components/writing.tsx`** / **`components/lab-notes.tsx`** to **query the same `lib/content` sources**:
   - Featured essays (frontmatter `featured`)
   - Recent notes (by date)
   - One featured case study (when collection exists)
2. Clear CTAs: “Browse all writing” / “Archive” / “Tags”.
3. Keep **LinkedIn** as `crossPostUrl` where cross-posting continues; on-site is canonical when you want it to be.

---

## Phase 4 — Workflow & polish (proposal Phases 3–4)

1. **Drafts:** `status: draft` excluded from production build; optional `drafts` branch or env flag for local preview only.
2. **PR previews:** optional (GitHub Actions artifact or separate workflow); not required for v1.
3. **Search:** build-time JSON index + client UI on `/archive` or `/writing` (fuse.js or similar).
4. **Series pages** — e.g. `/series/beyond-notebooks` grouping by `series` field.
5. **i18n** — only after English pipeline is stable; `language` in frontmatter + duplicated or parallel files.

---

## Migration map (current code → target)

| Today | Target |
|-------|--------|
| `components/writing.tsx` data arrays | Featured + links from `content/` + archive routes |
| `components/lab-notes.tsx` LinkedIn cards | `content/notes/*.mdx` with `crossPostUrl` and/or full body |
| Single-page anchors | Keep; add **top-level routes** for library sections |

---

## Risks & mitigations

| Risk | Mitigation |
|------|------------|
| MDX + static export plugin drift | Lock versions; spike in Phase 0; CI is the gate |
| Large `out/` or slow builds | Paginate archives; defer search index to Phase 4 |
| Authoring friction | v1 stays “edit in repo”; CMS only if needed |
| Broken asset paths on Pages | Test `serve out`; document `basePath` in deployment guide |

---

## Next step from you

Paste **ChatGPT’s plan** (or diff) into a reply or a new doc; we’ll:

1. Diff against this file and **`Achitectural_proposal_integratedwritingsite.md`**
2. Produce a **single ordered backlog** (issues or checklist)
3. Execute on **`feature/integrated-writing-library`** with small commits

---

**Branch:** `feature/integrated-writing-library`  
**Baseline commit on `main`:** docs + proposal committed; branch created from that point.
