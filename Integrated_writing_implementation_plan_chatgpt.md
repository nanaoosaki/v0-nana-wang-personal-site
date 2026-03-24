Here’s the implementation plan I’d use for **nanawang.dev**, updated for your actual setup.

Your repo is already a **Next.js App Router** site, exported as static files into `out/` and deployed to **GitHub Pages** through **GitHub Actions**. The content today is mostly driven by arrays/objects inside components like `writing.tsx` and `lab-notes.tsx`, and there are no API routes. That means the right move is not to replace the stack, but to add a **content layer** that works at build time.  

Next.js supports both **static export** and **local MDX content**. With static export, `next build` writes static assets into `out/`, and dynamic routes can still be pre-rendered at build time using `generateStaticParams`. MDX is supported in the App Router and lets you embed React components directly in markdown content. ([Next.js][1])

## The target state

You keep:

* Next.js
* GitHub Pages
* GitHub Actions
* your custom domain
* static export

You add:

* repo-based MDX content
* build-time content loaders
* real routes for essays, notes, and case studies
* archive, tags, topics, and optional search

So the site becomes a **library on your domain**, not a portfolio page with external article links. [Inference]

## Phase 1: add the content foundation

The first step is to stop treating writing as hard-coded cards and start treating it as content files.

Create a top-level content directory:

```text
content/
  essays/
  notes/
  case-studies/
```

Then create matching routes in the App Router:

```text
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
```

This fits naturally with App Router file-system routing, and the `[slug]` pages can be statically generated with `generateStaticParams`, which is the Next.js-supported way to prerender dynamic routes at build time. ([Next.js][2])

I would also add:

```text
lib/
  content/
    get-all-content.ts
    get-essays.ts
    get-notes.ts
    get-case-studies.ts
    parse-frontmatter.ts
    mdx-components.tsx
```

That gives you a clean separation between:

* authored content
* parsing/loading
* rendering/layouts

## Phase 2: add MDX support

Because you want richer formatting and multimedia, plain markdown is a little too limiting. MDX is the better fit here because it lets you write markdown and also embed React components directly inside the post body. Next.js officially supports MDX in the App Router through its MDX guide and plugin setup. ([Next.js][3])

The practical setup is:

1. install the MDX packages
2. configure Next to understand `.mdx`
3. create reusable MDX components

At a high level, your config ends up with:

* `@next/mdx`
* page extensions including `.mdx`
* a shared MDX components map

Then in posts you can write things like:

```mdx
# Why RAG Evaluation Fails Quietly

<Callout type="info">
This is the pattern I see most often in enterprise retrieval systems.
</Callout>

<Figure
  src="/images/rag-failure-map.png"
  alt="Diagram of retrieval failure modes"
/>
```

That is the key enabler for your “library” idea: not just text, but diagrams, architecture blocks, embedded media, and richer narrative structure. ([Next.js][3])

## Phase 3: define the content schema

Each MDX file should have frontmatter. I’d start with a minimal but durable schema:

```yaml
title: "How I Think About RAG Evaluation"
summary: "A practical way to think about retrieval quality, chunking, and failure modes."
publishedAt: "2026-03-22"
updatedAt: "2026-03-22"
status: "published"
language: "en"
tags:
  - RAG
  - evaluation
topics:
  - AI Engineering
  - Retrieval
series: "Beyond Notebooks"
featured: true
```

For case studies, add fields like:

* `problem`
* `role`
* `stack`
* `outcomes`

For notes, add a lighter field such as:

* `noteType`

This lets you statically build:

* filtered library pages
* archive pages
* topic pages
* tag pages
* featured sections
* series navigation

[Inference] I would validate this frontmatter at build time so broken metadata fails fast instead of silently rendering bad pages.

## Phase 4: build the loader layer

Because you are statically exporting, all content loading should happen from local files at build time.

Your loader utilities should do four things:

1. read all MDX files from `content/`
2. parse frontmatter
3. compute derived metadata like reading time and slug
4. return typed content objects to your pages

Then each route becomes simple.

For example:

* `/writing/page.tsx` loads all essays
* `/writing/[slug]/page.tsx` loads one essay by slug
* `generateStaticParams()` returns all essay slugs

That is exactly aligned with the App Router model for static generation. ([Next.js][4])

## Phase 5: create the layouts

You do not just need routes. You need a clear visual grammar.

I’d create three layouts:

```text
components/prose/
  Prose.tsx
  TOC.tsx
  TagList.tsx
  Callout.tsx
  Figure.tsx
  VideoEmbed.tsx
  AudioEmbed.tsx
  RelatedPosts.tsx
```

Then apply them by content type:

* **Essay layout**: title, summary, date, reading time, TOC, tags, related posts
* **Note layout**: lighter treatment, no heavy chrome
* **Case study layout**: problem, approach, stack, outcomes, visuals

This gives your library internal consistency while still letting each content type feel different. [Inference]

## Phase 6: migrate the current Writing and Lab Notes sections

Right now, the README says your Writing and Lab Notes are cards linking out to LinkedIn and similar external destinations, and they are driven from component arrays. 

I would migrate in this order:

**First migration batch**

* 2 strongest long-form writing pieces → `/writing/...`
* 3–5 Beyond Notebooks style posts → `/notes/...`
* 1 flagship project writeup → `/case-studies/...`

Then update the homepage so those sections no longer act as external link lists. Instead:

* Writing section shows featured internal essays
* Lab Notes shows latest internal notes
* optional external links become a small “also published on” line

This is the moment the site stops being a pointer and starts being the source of truth. [Inference]

## Phase 7: add archive, tags, and topics

Once you have content files, add:

```text
app/
  archive/
    page.tsx
  tags/
    [tag]/
      page.tsx
  topics/
    [topic]/
      page.tsx
```

These pages can all be statically generated from the same content loaders.

I would keep the taxonomy modest at first.

Good starting buckets:

* tags: RAG, agents, retrieval, product, career, debugging
* topics: AI Engineering, Systems Thinking, Health AI, Writing, Career

That is enough structure to feel like a library without becoming overorganized. [Inference]

## Phase 8: add search, but keep it static

Because GitHub Pages is static hosting, the best search pattern is a build-generated JSON index plus client-side filtering.

At build time:

* gather title
* summary
* tags
* topics
* slug
* type
* maybe excerpt

Write those into something like:
`public/search-index.json`

Then on `/writing` or `/archive`, load that small index and filter it in the browser.

This avoids needing:

* server search
* API routes
* external indexing services

That matches your current “no backend” setup. The README explicitly says the site has no API routes and is fully static after build. 

## Phase 9: enrich the publishing experience

Your first version does not need a CMS.

Given your current deployment model, the simplest and strongest workflow is:

* write in MDX locally
* preview with `npm run dev`
* build with `npm run build`
* push to GitHub
* let GitHub Actions deploy to Pages

That fits your existing local and production workflow exactly. 

Later, if raw file editing starts to feel annoying, then evaluate a Git-backed editor. But I would not introduce that on day one. [Inference]

## Phase 10: improve metadata and discoverability

After the core system works, add:

* RSS feed
* per-post metadata
* Open Graph images
* canonical URLs
* related content links
* series pages

Because this is a writing library, discovery matters almost as much as publishing. [Inference]

## Concrete implementation sequence

If I were doing this in your repo, I would do it in this order:

### Step 1

Install MDX support and prove one internal post can render in App Router. This de-risks the whole plan early. Next.js supports MDX in App Router, so this is the right first technical checkpoint. ([Next.js][3])

### Step 2

Create `content/essays`, `content/notes`, `content/case-studies` and move one sample entry into each.

### Step 3

Build `lib/content/*` utilities to read files, parse metadata, and sort published entries.

### Step 4

Implement:

* `/writing`
* `/writing/[slug]`
* `/notes`
* `/notes/[slug]`
* `/case-studies`
* `/case-studies/[slug]`

Use `generateStaticParams()` for all slug routes so they are included in static export. ([Next.js][4])

### Step 5

Create shared prose components for callouts, figures, embeds, and related posts.

### Step 6

Replace current homepage arrays for Writing and Lab Notes with data coming from the content loaders.

### Step 7

Add `/archive`, `/tags/[tag]`, and `/topics/[topic]`.

### Step 8

Generate a JSON search index and add search UI.

### Step 9

Add RSS, richer SEO, and series support.

## What I would not change right now

I would not:

* move to Vercel
* switch frameworks
* add a server/backend
* add a heavyweight CMS
* build remote content loading

Your current stack already supports the architecture you want. Static export plus build-time-generated routes is enough for this library model.  ([Next.js][1])

## The shape of the finished site

The finished information architecture should feel like this:

* `/` = brand home + featured writing
* `/writing` = polished essays
* `/notes` = lighter, faster publishing
* `/case-studies` = applied work
* `/archive` = accumulated body of thought

That gives you something much closer to the yage.ai “personal library” feeling, but without leaving your own domain or rebuilding the deployment system. [Inference]

The next best step is to turn this plan into a **repo-specific build checklist and file map**, down to which files to add and which current components to refactor first.

[1]: https://nextjs.org/docs/app/guides/static-exports?utm_source=chatgpt.com "Guides: Static Exports"
[2]: https://nextjs.org/docs/app/getting-started/layouts-and-pages?utm_source=chatgpt.com "Getting Started: Layouts and Pages"
[3]: https://nextjs.org/docs/app/guides/mdx?utm_source=chatgpt.com "Guides: MDX"
[4]: https://nextjs.org/docs/app/api-reference/functions/generate-static-params?utm_source=chatgpt.com "Functions: generateStaticParams"
