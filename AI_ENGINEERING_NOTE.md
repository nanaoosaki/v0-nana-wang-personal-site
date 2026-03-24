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
