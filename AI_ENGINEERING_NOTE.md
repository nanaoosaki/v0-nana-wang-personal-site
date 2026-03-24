# AI Engineering Note

## 2026-02-16 — Public Tools section + LinkedIn Connections Exporter page

### Branch and process
- Created branch `feature/public-tools-linkedin-exporter` before implementation work, per request.

### Structural changes made
- Added new component: `components/public-tools.tsx`
  - Introduces a new homepage section with anchor id `public-tools`.
  - Adds one public tool card for LinkedIn Connections Exporter.
  - Includes links to:
    - Internal detail page: `/tools/linkedin-connections-exporter`
    - GitHub releases page
    - GitHub repository

- Updated homepage composition: `app/page.tsx`
  - Imported and rendered `<PublicTools />` between Experiments and Writing.

- Updated site navigation: `components/header.tsx`
  - Added nav item `{ label: "Public Tools", href: "#public-tools" }`.

- Added new route page: `app/tools/linkedin-connections-exporter/page.tsx`
  - Dedicated detail page for the tool with:
    - Tool summary and architecture explanation
    - Highlight bullets
    - CTA links to repository and releases
    - Back link to `/#public-tools`
    - Placeholder note for pending Chrome Web Store URL

- Updated `components/public-tools.tsx` (follow-up UI improvement)
  - Added the tool logo directly inside the Public Tools card header for faster visual recognition.
  - Kept external logo source aligned with the repository logo URL used on the detail page.

### Issues / constraints encountered
- Chrome Web Store URL is not available yet, so the detail page currently uses:
  - Repository URL
  - Releases URL
  - Explicit placeholder text for future store link insertion

- Provided promotional images were shared outside repo paths; to avoid binary file copying risk in this pass, the detail page currently references the logo from:
  - `https://raw.githubusercontent.com/nanaoosaki/linkedin_connections/main/logo.png`

### Follow-up TODOs
- Add Chrome Web Store CTA once listing URL is ready.
- Move tool promo images into `public/tools/linkedin-connections-exporter/` for stable first-party hosting.

## 2026-03-24 — Content updates (writing + lab notes)

### Structural/content changes made
- Updated `components/writing.tsx`
  - Replaced the placeholder item in `Chinese – Life` with a published article:
    - Title: `不是你在找工作，而是工作在找你 (you don't find the job, the job finds you)`
    - Link: Superlinear Academy post

- Updated `components/lab-notes.tsx`
  - Added two new Beyond Notebooks LinkedIn notes at the top of the notes array:
    - Post #3: experimentation to engineering (observability/testing/deployment)
    - Post #4: human-AI collaboration through the known/unknown quadrants

### Issues / constraints encountered
- No implementation blockers. Links were added using canonical post URLs (without tracking query parameters) for cleaner long-term references.

## 2026-03-24 — Additional Chinese life writing updates

### Structural/content changes made
- Updated `components/writing.tsx` in the `Chinese – Life` category.
  - Added four new published Superlinear Academy posts:
    - Adult Learning 里最难的3点：Learn to Unlearn, RFR cycle, and Take it Slow
    - 带还在咿呀学中文的老公重温97版《天龙八部》
    - Keep Your Social Muscle Lean - 让我们用健身的心态来轻盈社交
    - YC改简历-心得体会分享

### Issues / constraints encountered
- No implementation blockers. Added links exactly as provided by user for direct consistency with source URLs.

## 2026-03-24 — Writing section UX refactor (tabs -> 3 columns)

### Structural/content changes made
- Refactored `components/writing.tsx` to remove tab switching behavior.
  - Previous UX: 3 tabs (`English – Professional`, `Chinese – Tech & Vibe`, `Chinese – Life`) with one active pane.
  - New UX: 3-column layout showing all categories simultaneously for improved discoverability.
- Added section subtitle clarifying that all published writing is shown.
- Kept per-article card structure and external-link behavior unchanged.
- Reordered `Chinese – Life` entries to prioritize newest-first based on user-provided sequence guidance (smallest index = latest).

### Issues / constraints encountered
- Requested “actual published date” ordering was not auto-derived because source pages did not provide structured publish dates in a machine-usable format during this update pass.
- Applied manual latest-first ordering according to user-provided reference order.

## 2026-03-24 — Header anchor fix for About navigation

### Structural/content changes made
- Updated `components/header.tsx`:
  - Changed nav item target from `#about` to `#hero` for the `About` label.

### Issues / constraints encountered
- Root cause: the homepage currently does not render a section with `id="about"` in `app/page.tsx`, so `#about` had no in-page anchor target.
- The dedicated `components/about.tsx` file exists in repo but is not currently mounted in the page composition.
