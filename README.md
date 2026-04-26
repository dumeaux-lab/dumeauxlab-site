# Dumeaux Lab — Astro site

Production site for dumeauxlab.com. Static site built with [Astro](https://astro.build) + React components.

---

## Run it locally

```bash
# one-time (if Node isn't on PATH)
eval "$(/opt/homebrew/bin/brew shellenv)"

npm install          # first time only
npm run dev          # http://localhost:4321
npm run build        # outputs to ./dist
npm run preview      # serves the build
```

Requires Node ≥ 22.12.

---

## Project layout

```
astro-site/
├── src/
│   ├── pages/                ← one .astro file per route → URL
│   │   ├── index.astro        → /
│   │   ├── research.astro     → /research
│   │   ├── team.astro         → /team
│   │   ├── pi.astro           → /pi
│   │   ├── papers/
│   │   │   ├── index.astro     → /papers            (list)
│   │   │   └── [slug].astro    → /papers/{slug}     (detail, one per .md file)
│   │   ├── software.astro     → /software
│   │   ├── news.astro         → /news
│   │   └── contact.astro      → /contact
│   │
│   ├── content/              ← FILE-PER-ENTRY content (Astro collections)
│   │   ├── papers/            ← one .md file per paper; full abstract in body (63)
│   │   ├── team/              ← one .md file per person (28)
│   │   ├── software/          ← one .md file per tool (6)
│   │   ├── news/              ← one .md file per post (15)
│   │   └── research/          ← one .md file per theme; full programme body (3)
│   │
│   ├── content.config.ts     ← Zod schema for each collection (validates at build)
│   │
│   ├── components/
│   │   └── Editorial.jsx     ← ALL React page components live here
│   │                           (HomePage, ResearchPage, PIPage, PeoplePage,
│   │                            PapersPage, SoftwarePage, NewsPage, ContactPage,
│   │                            + Nav, Footer, and helpers)
│   │
│   ├── data/                 ← in-memory content (helpers + small lists)
│   │   ├── shared.jsx         ← LAB, PILLARS, FUNDERS, COLLABS + SVG helpers
│   │   │                        (PAPERS / SOFTWARE / TEAM / NEWS all live in
│   │   │                         src/content/* now)
│   │   ├── team-photos.js     ← base64 photos, keyed by slug (e.g. "vanessa")
│   │   └── news-images.js     ← base64 news images, keyed by post slug
│   │
│   └── layouts/
│       └── Base.astro         ← <html> shell, fonts, global CSS
│
├── astro.config.mjs           ← @astrojs/react enabled
└── package.json
```

---

## "I want to change X" — cheat sheet

Papers, team members, software tools, and news posts are each **one Markdown
file per entry** under `src/content/`. Everything else (lab identity, research
pillars, funders, collaborators) lives in `src/data/shared.jsx`. Edit + save;
the dev server hot-reloads.

| To change…                                | Edit                                                                |
|-------------------------------------------|---------------------------------------------------------------------|
| Lab name / tagline / mission / email      | `LAB` in `src/data/shared.jsx`                                      |
| Research pillars (cards on `/research`)   | `PILLARS` in `src/data/shared.jsx`                                  |
| **Papers**                                | **One `.md` file per paper in `src/content/papers/`** (see below)   |
| **Software tools**                        | **One `.md` file per tool in `src/content/software/`**              |
| **Team roster**                           | **One `.md` file per person in `src/content/team/`**                |
| **News posts**                            | **One `.md` file per post in `src/content/news/`**                  |
| **Research theme detail pages**           | **One `.md` file per theme in `src/content/research/`** (see below) |
| Funders list (logo grid on `/research`)   | `FUNDERS` in `src/data/shared.jsx` (objects: name/logo/url)         |
| Collaborators                             | `COLLABS` in `src/data/shared.jsx`                                  |
| Vanessa's long bio / PI page              | `PIPage()` function in `src/components/Editorial.jsx`               |
| Nav labels / order                        | `Nav()` in `src/components/Editorial.jsx`                           |
| Footer (contact block — funders moved)    | `Footer()` in `src/components/Editorial.jsx`                        |
| Global fonts / page background            | `src/layouts/Base.astro`                                            |
| Paper-detail page layout                  | `src/pages/papers/[slug].astro`                                     |
| Software-detail page layout               | `src/pages/software/[slug].astro` + `SoftwareDetailPage()` in `Editorial.jsx` |
| Research-theme detail page layout         | `src/pages/research/[slug].astro`                                   |
| News page layout (all posts inline)       | `NewsPage()` in `src/components/Editorial.jsx`                      |
| Papers list page                          | `PapersPage()` in `src/components/Editorial.jsx`                    |
| Team photo                                | Drop full-res photo in `public/assets/team/{slug}.jpg`, then run `node scripts/regen-team-photos.mjs` (see below) |
| News image                                | Drop full-res image in `../assets/{filename}`, list it in `scripts/regen-news-images.mjs`, then run the script (see below) |

### Adding a paper

1. Create a new file in `src/content/papers/` named with a URL-friendly slug,
   e.g. `src/content/papers/my-new-paper-2026.md`. That filename becomes the URL:
   `/papers/my-new-paper-2026`.

2. Fill in the frontmatter + abstract:

   ```markdown
   ---
   title: "Full title of the paper"
   year: 2026
   authors: "Smith, Jones, Dumeaux"
   venue: "Nature Methods"
   ref: "Smith et al. 2026. Nat. Methods."        # optional, citation-style
   abbrev: "Nat. Methods (2026)"                  # optional, short form
   doi: "10.xxxx/yyyy"                            # optional
   pdf: "/assets/pdfs/papers/my-new-paper.pdf"    # optional
   image: "/assets/images/papers/header.png"      # optional
   tag: "Tumor × Host"      # one of: Tumor × Host · Microbiome · Methods · Epigenetics · Epidemiology
   summary: "One-sentence teaser shown in the papers list and on the home page feature grid."
   ---

   Full abstract goes here as Markdown. Paragraph breaks, **bold**, *italic*,
   [links](https://…) all work. Can be as long as you need — this is the body
   text shown on the paper's dedicated page at /papers/{slug}.
   ```

3. Save. The site auto-reloads. The paper appears:
   - In the list at `/papers` (sorted by year)
   - On its own page at `/papers/{filename-without-.md}`
   - In the home page "Recent publications" grid if it's one of the 4 most recent

**Schema is enforced.** If you typo a field name, forget a required field,
or use an unknown `tag` value, the build fails loudly at that file — no silent
corruption.

### Adding a team member

Create `src/content/team/{slug}.md` (slug should match the key in
`team-photos.js` if there's a photo). Frontmatter only — no body needed.

```markdown
---
name: "Jane Doe"
role: "PhD Student"
initials: "JD"
joined: 2026
alum: false               # set true (and optionally `left: 2026`) for alumni
photoKey: "jane"          # optional — must match a key in team-photos.js
email: "jane@uwo.ca"      # optional
scholar: "https://…"      # optional
github: "https://…"       # optional
bio: "Short bio…"
research: "Research interest…"     # optional
education:                          # optional
  - "MSc, University of X (2024–2026)"
awards:                             # optional
  - "Some scholarship 2026"
---
```

### Adding a software tool

Create `src/content/software/{slug}.md`. The filename slug becomes the URL at
`/software/{slug}`.

```markdown
---
name: "MyTool"
fullname: "My Full Tool Name"      # optional
year: 2026
tag: "method"                       # one of: method · imaging · system · pipeline
blurb: "One-liner shown on cards."
description: "Full paragraph for the detail page."   # optional
github: "https://github.com/…"     # optional
www: "https://…"                    # optional
paper: "10.xxxx/yyyy"               # optional DOI (no https://doi.org/ prefix)
install: |                          # optional multi-line install snippet
  pip install mytool
repos:                              # optional list of related repos
  - name: "mytool-paper"
    url: "https://github.com/…"
    desc: "Code for the paper."
details:                            # optional bullet list of features
  - "Does X really fast"
  - "Handles Y at scale"
---
```

### Adding a news post

Create `src/content/news/{slug}.md`. All posts render inline on `/news` in
reverse-chronological order; the filename slug becomes the deep-link anchor
(`/news#{slug}`). The body renders `blocks` in order — each block has a
`type` field that controls how it renders.

```markdown
---
date: "2026-04-21"                 # YYYY-MM-DD or YYYY-MM
title: "Post title"
excerpt: "1–2 sentence preview shown on the news list and home strip."
tag: "Lab news"                    # free-form: Lab news · Conference · Research · Community · Outreach
blocks:
  - type: "p"
    text: "Plain paragraph."
  - type: "h2"
    text: "Section heading"
  - type: "ul"
    items: ["First bullet", "Second bullet"]
  - type: "img"
    src: "my-image.jpg"            # filename in src/data/news-images.js
    caption: "Caption text"
  - type: "grid"
    images:
      - { src: "a.jpg", caption: "" }
      - { src: "b.jpg", caption: "" }
  - type: "iframe"
    src: "https://docs.google.com/…/pubhtml"
    caption: "Embedded sheet"
  - type: "youtube"
    id: "dQw4w9WgXcQ"
    caption: "Talk recording"
  - type: "bsky"
    text: "Bluesky thread blurb"
    url: "https://bsky.app/profile/…/post/…"
---
```

For images referenced by `type: "img"` or `"grid"`, add the base64 data URL
under the same key in `src/data/news-images.js`.

### Editing a research theme

The `/research` index renders the 3 pillar cards from `PILLARS` in
`src/data/shared.jsx`; each card links to a per-theme detail page rendered
from `src/content/research/{slug}.md`. The slug **must** match a `PILLARS.id`
(`tumor-host`, `microbiome`, `methods`) — the detail page pulls the keyword
pills and methods strip from the matching pillar record.

```markdown
---
title: "Immunity × Tumor"
pillarId: "tumor-host"            # must match a PILLARS.id
kicker: "01 / 03"                  # optional, shown in the §-line
subtitle: "One-line tagline shown under the title"
intro: "1–2 sentence lede shown above the body in italic display type."
---

## Section heading

Body markdown — paragraphs, **bold**, *italic*, [links](https://…),
and inline `![caption](/assets/images/research/foo.jpg)` images all work.
Inline images automatically get a white plate frame against the cream page.
```

Drop figure files into `public/assets/images/research/` (or reference any
existing path under `/assets/...`).

To **add** a fourth theme, also extend the `pillarId` enum in
`src/content.config.ts` and add the matching entry to `PILLARS`.

---

## Regenerating inlined images

Team photos and news images are **base64-inlined** into JS modules
(`src/data/team-photos.js`, `src/data/news-images.js`) so they ship in the
HTML payload — no extra HTTP requests, crisp on first paint. Two scripts
build those JS files from full-resolution source images.

### Team photos

```bash
# 1. Drop the new full-res photo into public/assets/team/<slug>.jpg|png
#    (slug must match the team member's photoKey in their .md)
cp ~/Downloads/new-photo.jpg public/assets/team/jane.jpg

# 2. Add the slug to the KEYS array in scripts/regen-team-photos.mjs
#    (open the script and append "jane" to the list)

# 3. Run the script
node scripts/regen-team-photos.mjs

# 4. Commit BOTH the new source and the regenerated team-photos.js
git add public/assets/team/jane.jpg src/data/team-photos.js
git commit -m "Add Jane to team"
git push
```

The script center-crops to 440×440 (top-anchored — heads stay in frame),
re-encodes as JPEG q82, and writes a fresh `src/data/team-photos.js`.
Vanessa's photo is special-cased to use `fit: contain` (letterboxed
instead of cropped) — see the `CONTAIN_KEYS` set in the script.

### News images

```bash
# 1. Drop the new full-res image into the SIBLING assets dir
#    (the script reads from ~/Downloads/dumeauxlab/assets/, not public/)
cp ~/Downloads/conf-poster.jpg ../assets/conf-poster-2026.jpg

# 2. Add the filename to the NAMES array in scripts/regen-news-images.mjs

# 3. Run the script
node scripts/regen-news-images.mjs

# 4. Commit the regenerated news-images.js
git add src/data/news-images.js
git commit -m "Add conference poster to news"
git push
```

The script downsizes each image to a max long-edge of 1400 px, JPEG q82
(or PNG if the filename is in `KEEP_PNG` — for logos with transparency).
Once added, reference the image from any news post via the filename:

```yaml
blocks:
  - type: "img"
    src: "conf-poster-2026.jpg"
    caption: "Conference poster"
```

---

## Navigation

The nav uses real `<a href>` anchors in `Nav()`
(`src/components/Editorial.jsx` ~line 71). If you add or rename a page, update
two places:

1. Add/rename the `src/pages/xxx.astro` file — the filename is the URL.
2. Update the nav array in `Nav()`:
   ```js
   [["Home", "home", "/"], ["Research", "research", "/research"], …]
   //  ↑ label   ↑ active key   ↑ URL
   ```

---

## React hydration — when to use `client:load`

Each `.astro` page imports a React component and renders it:

```astro
<Base title="…">
  <HomePage client:load />   {/* runs JS in the browser */}
  <PapersPage />             {/* pure static HTML, no JS shipped */}
</Base>
```

Rule of thumb:

- **No directive** → page renders to static HTML, ships zero JS. Use whenever
  possible (fast, accessible, no hydration cost).
- `client:load` → hydrates immediately. Use when the component has
  interactivity (modals, live API fetches, stateful widgets).
- `client:visible` → hydrates when it scrolls into view. Good for heavy
  interactive widgets below the fold.

Currently:
- `index.astro` uses `client:load` (Bluesky feed carousel)
- `team/index.astro` uses `client:load` (team-member modal)
- `news/index.astro` uses `client:load` (tag-filter pills + dynamic news-image lookup)
- All other pages are pure static (papers list/detail, software list/detail,
  research, pi, contact)

Nav works on **every** page (static or hydrated) because it uses real anchors
instead of onClick handlers.

---

## Deployment (Netlify)

The site is hosted on Netlify, auto-deploys on every push to `main` from
[github.com/dumeaux-lab/dumeauxlab-site](https://github.com/dumeaux-lab/dumeauxlab-site).
Production URL: <https://lab-dumeaux.science>.

Build settings live in `netlify.toml` (Node 22, build command `npm run build`,
publish dir `dist`). `.nvmrc` pins the same Node version locally.

`public/_redirects` preserves inbound links from the previous Jekyll site
(old `/blog/...`, `/team/...`, `/about`, `/software/AIPS` etc. all 301 to
their new equivalents). When adding new redirects, list specific rules
**before** any catch-alls — first match wins.

`@astrojs/sitemap` auto-generates `sitemap-index.xml` + `sitemap-0.xml` at
build time using the `site` URL in `astro.config.mjs`. `public/robots.txt`
points crawlers at the sitemap index.

### Rolling back a bad deploy

In Netlify dashboard → **Deploys** → pick a previous successful deploy →
**Publish deploy**. Instant rollback, no git revert needed.

---

## Design tokens

Colors and fonts live at the top of `Editorial.jsx`:

```js
const BG = "#f7f4ef";       // page background (warm cream)
const WP = "#4F2683";       // Western Purple (accent)
const WO = "#8F55E0";       // lighter orchid accent
const WD = "#201436";       // deep purple (footer)
const INK = "#1a1814";      // body text
const MUTED = "#6b6459";    // secondary text
const RULE = "#ddd8ce";     // dividers / card borders
const DISPLAY = "'Playfair Display', Georgia, serif";
const SANS = "'Inter Tight', system-ui, sans-serif";
const MONO = "'JetBrains Mono', Menlo, monospace";
```

Change these in one place and they propagate everywhere.

---

## Origin / design provenance

The design came out of Claude Design ("Editorial v2"). The React components
were extracted verbatim from that prototype, then:

- `Object.assign(window, …)` globals replaced with ES module `export`s
- `<span onClick={…}>` nav replaced with real `<a href>` anchors
- `showPage(…)` SPA routing replaced with plain URL navigation

Original prototype: `../Dumeaux Lab - Editorial v2.html`.
Old Jekyll site: `../../Desktop/researchweb/`.
