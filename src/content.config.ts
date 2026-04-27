import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ─── Papers ────────────────────────────────────────────────────────────
// One .md file per paper in src/content/papers/. The filename stem becomes
// the id (and the URL slug), so
//   src/content/papers/preffect-2025.md → /papers/preffect-2025
const papers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/papers" }),
  schema: z.object({
    title: z.string(),
    year: z.number().int(),
    authors: z.string(),
    venue: z.string(),
    ref: z.string().optional(),          // e.g. "Dumeaux et al. 2003. Int. J. Cancer."
    abbrev: z.string().optional(),       // short citation
    doi: z.string().optional(),
    pdf: z.string().optional(),          // optional path to PDF asset
    image: z.string().optional(),        // optional header image
    tag: z.enum([
      "Tumor × Host",
      "Microbiome",
      "Methods",
      "Epigenetics",
      "Epidemiology",
    ]),
    summary: z.string(),                  // short hover / card preview
  }),
});

// ─── Team ──────────────────────────────────────────────────────────────
// One .md file per person in src/content/team/. The filename stem matches
// the photoKey (and is used as a stable id), so
//   src/content/team/vanessa.md  ↔  team-photos.js["vanessa"]
const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    initials: z.string(),
    joined: z.number().int(),
    alum: z.boolean().default(false),
    left: z.number().int().optional(),
    photoKey: z.string().optional(),       // key into team-photos.js
    email: z.string().optional(),
    scholar: z.string().optional(),
    github: z.string().optional(),
    bio: z.string().default(""),
    research: z.string().optional(),
    education: z.array(z.string()).default([]),
    awards: z.array(z.string()).default([]),
  }),
});

// ─── Software ──────────────────────────────────────────────────────────
// One .md file per tool in src/content/software/. The filename stem
// becomes the URL slug at /software/{slug}.
const software = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/software" }),
  schema: z.object({
    name: z.string(),                      // e.g. "PREFFECT"
    fullname: z.string().optional(),       // e.g. "deep-fMC"
    year: z.number().int(),
    tag: z.enum(["method", "imaging", "system", "pipeline"]),
    blurb: z.string(),                     // one-liner for cards
    description: z.string().optional(),    // full paragraph for detail page
    github: z.string().optional(),
    www: z.string().optional(),
    paper: z.string().optional(),          // DOI string (without https://doi.org/)
    install: z.string().optional(),        // multi-line install snippet
    repos: z.array(z.object({
      name: z.string(),
      url: z.string(),
      desc: z.string(),
    })).default([]),
    details: z.array(z.string()).default([]),
  }),
});

// ─── News ──────────────────────────────────────────────────────────────
// One .md file per post in src/content/news/. Filename = URL slug.
// `blocks` is a discriminated array of typed content blocks, mirroring
// the original NEWS_POSTS shape so the renderer can stay unchanged.
const newsBlock = z.discriminatedUnion("type", [
  z.object({ type: z.literal("h2"), text: z.string() }),
  z.object({ type: z.literal("p"), text: z.string() }),
  z.object({ type: z.literal("ul"), items: z.array(z.string()) }),
  z.object({
    type: z.literal("img"),
    src: z.string(),
    caption: z.string().optional(),
  }),
  z.object({
    type: z.literal("grid"),
    images: z.array(z.object({
      src: z.string(),
      caption: z.string().optional(),
    })),
  }),
  z.object({
    type: z.literal("iframe"),
    src: z.string(),
    caption: z.string().optional(),
  }),
  z.object({
    type: z.literal("bsky"),
    text: z.string(),
    url: z.string(),
  }),
  z.object({
    type: z.literal("youtube"),
    id: z.string(),
    caption: z.string().optional(),
  }),
]);

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    date: z.string(),                      // "YYYY-MM-DD" or "YYYY-MM"
    title: z.string(),
    excerpt: z.string(),
    tag: z.string(),                       // e.g. "Lab news", "Conference"
    blocks: z.array(newsBlock).default([]),
  }),
});

// ─── Research themes ───────────────────────────────────────────────────
// One .md file per theme in src/content/research/. Filename stem MUST
// match a PILLARS id in src/data/shared.jsx (e.g. "tumor-host"), so the
// detail page can pull title / kicker / keywords from the pillar record.
const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),                 // overrides PILLARS.title if set
    kicker: z.string().optional(),     // e.g. "01 / 03 · Immunity × Tumor"
    subtitle: z.string().optional(),   // tagline shown under title
    intro: z.string().optional(),      // 1-2 sentence lede
    pillarId: z.enum(["tumor-host", "microbiome", "methods"]),
  }),
});

export const collections = { papers, team, software, news, research };
