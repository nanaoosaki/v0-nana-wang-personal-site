Core principle

Treat your writing as content files in the repository, not as arrays embedded in components.

Right now, your Writing and Lab Notes sections are essentially curated link blocks. The next stage is to make those sections render from actual content files so the site becomes your canonical library instead of a launcher to LinkedIn.

Keep this stack

Next.js 16 App Router

React 19

Tailwind

TypeScript

Static export

GitHub Actions

GitHub Pages

Add this layer

MDX for authored content

content parsing/build-time indexing

filesystem-based content collections

search/archive/tag pages generated statically

This keeps your deployment unchanged while upgrading your authoring model.

Recommended content architecture

I’d suggest this repo shape:

content/
  essays/
    how-i-think-about-rag-evaluation.mdx
    building-ai-products-with-judgment.mdx
  notes/
    debugging-weaviate-local-stack.mdx
    on-writing-in-public.mdx
  case-studies/
    queryboost-enterprise-rag.mdx
    linda-health-companion.mdx
  data/
    topics.ts
    tags.ts

app/
  writing/
    page.tsx
    [slug]/
      page.tsx
  notes/
    page.tsx
    [slug]/
      page.tsx
  case-studies/
    page.tsx
    [slug]/
      page.tsx
  archive/
    page.tsx
  tags/
    [tag]/
      page.tsx
  topics/
    [topic]/
      page.tsx

components/
  prose/
    prose.tsx
    table-of-contents.tsx
    callout.tsx
    figure.tsx
    video-embed.tsx
    audio-embed.tsx
    related-posts.tsx
    tag-list.tsx
lib/
  content/
    get-posts.ts
    get-notes.ts
    get-case-studies.ts
    search-index.ts
    mdx.ts

This fits your existing Next.js structure much better than a full framework swap. [Inference]

Content types

I’d still keep the same conceptual model, just implemented in Next instead of Astro.

Essays

For polished writing.

Examples:

long-form technical essays

AI strategy essays

reflective career writing

product/system thinking

Notes

For lower-pressure publishing.

Examples:

debugging stories

build logs

ideas in motion

short reflections

early research thoughts

Case studies

For structured portfolio writing.

Examples:

Queryboost

Linda

future AI systems work

This gives you the “library” feeling because not everything has to be a blog post. It becomes a body of work.

URL structure

I’d recommend:

/writing

/writing/[slug]

/notes

/notes/[slug]

/case-studies

/case-studies/[slug]

/archive

/tags/[tag]

/topics/[topic]

That will feel much more like a living library than the current section-based home page.

Frontmatter / metadata schema

For each MDX file, define metadata like:

title: "How I Think About RAG Evaluation"
summary: "A practical way to think about retrieval quality, chunking, and failure modes."
publishedAt: "2026-03-22"
updatedAt: "2026-03-22"
status: "published"
type: "essay"
language: "en"
tags:
  - RAG
  - evaluation
topics:
  - AI Engineering
  - Retrieval
series: "Beyond Notebooks"
featured: true
heroImage: "/images/rag-eval-cover.png"
canonicalPath: "/writing/how-i-think-about-rag-evaluation"
crossPostUrl: "https://www.linkedin.com/..."

That metadata is what will let you build:

archive pages

filters

reading time

related posts

series pages

SEO

cross-post references

Authoring workflow

This is the biggest design question underneath your question.

Simplest workflow

Write directly in .mdx files in the repo.

This is the best v1 if:

you are comfortable editing files

you want maximum control

you do not yet publish at very high frequency

Better workflow later

Add a lightweight editor/CMS layer only if needed.

Because you are on GitHub Pages static export, I would avoid a heavy hosted CMS first. A CMS is useful only if the friction of file editing becomes real. [Inference]

My updated recommendation on services

I would not start with Sanity or Payload.
I would also not introduce Vercel just to get an editor.

Instead:

start repo-native

build the content architecture

see whether you actually need a CMS

If later you want a friendlier editor, then we can evaluate whether a Git-backed editor fits your workflow without forcing a deployment rewrite. [Inference]

Search and archive

Since the site is statically exported, search should also be static-friendly.

Best approach:

at build time, generate a JSON search index from all published MDX content

use a client-side search UI on /writing or /archive

That way:

no backend needed

GitHub Pages still works

fast enough for a personal library

Multimedia support

Yes, your site can still support rich formatting and multimedia without Vercel.

With MDX in Next, you can support:

code blocks

images

diagrams

YouTube/Vimeo embeds

tweets/social embeds [Unverified]

callout boxes

comparison tables

downloadable PDFs

custom React components inside articles

The important constraint is not hosting, it is whether the content system supports those components. In your case, it can, because the site is already React-based. [Inference]

Design adjustment to your current homepage

I would also change the homepage behavior a bit.

Right now, the homepage Writing/Lab Notes sections sound like curated cards pointing outward. The next version should show:

2–3 featured essays

2–3 recent notes

one featured case study

links to full archives

That preserves the portfolio feel while making the writing system visible.

Revised build phases
Phase 1 — content foundation

create content/essays, content/notes, content/case-studies

add MDX support

create loader utilities

render new /writing, /notes, /case-studies

migrate 2–5 pieces into on-site posts

Phase 2 — library features

archive page

tags/topics

related posts

reading time

table of contents

SEO metadata

RSS feed [Inference]

Phase 3 — better publishing workflow

draft mode conventions

preview flow through pull requests

optional Git-backed editor if needed

Phase 4 — polish

bilingual support

search

series pages

optional newsletter/subscribe

Answer to your deployment question, directly

You asked whether Vercel is needed here.

My answer now is:

No. Keep GitHub Pages unless you hit a specific limitation.

Your current site is already designed around static export and GitHub Pages deployment, and that model is fully compatible with building a proper writing library on your own domain. Vercel would be optional, not necessary. It might improve preview ergonomics later, but it is not required for the architecture you want.

Final updated recommendation

For nanawang.dev as it exists today, I recommend:

Next.js static site + MDX content in repo + static-generated writing library + GitHub Pages deployment

Not:

separate writing platform

immediate CMS adoption

framework migration

Vercel dependency

That gets you the library feel you want while respecting your current site, deployment, and ownership model.