// Shared bits for all variants — real lab data, placeholder helpers.

// ─── Real content pulled from the existing site ──────────────────────
export const LAB = {
  name: "Dumeaux Lab",
  pi: "Vanessa Dumeaux",
  institution: "Western University",
  department: "Department of Anatomy & Cell Biology",
  school: "Schulich School of Medicine & Dentistry",
  location: "London, Ontario, Canada",
  email: "vdumeaux@uwo.ca",
  tagline:
    "Molecular aspects of human physiology and disease, in the context of the individual — exposures, immune response, and the microbiome.",
  mission:
    "We build computational and genomic methods to read biology at the scale of the patient: their tumor, their blood, their gut microbes. Our goal is to turn these readings into better ways to prevent, diagnose, and treat disease.",
};

export const PILLARS = [
  {
    id: "tumor-host",
    num: "01",
    title: "Immunity × Tumor",
    subtitle: "Crosstalk between peripheral immunity and the tumor microenvironment",
    blurb:
      "We profile blood and tumor at single-cell resolution to map the immune–tumor crosstalk, and build molecular predictors of recurrence and treatment response across invasive breast cancer and DCIS.",
    keywords: ["breast cancer", "DCIS", "systemic immunity", "blood transcriptomics"],
    methods: ["bulk + scRNA-seq", "WES", "spatial transcriptomics"],
  },
  {
    id: "microbiome",
    num: "02",
    title: "Microbial Communities",
    subtitle: "Phenotypic heterogeneity from single fungal cells to community-scale function",
    blurb:
      "Single-cell and computational approaches to read microbial life across scales — from individual fungal cells, to multi-species interactions, to the functional configurations that organize the human gut microbiome.",
    keywords: ["gut microbiome", "C. albicans", "functional archetypes", "scRNA-seq"],
    methods: ["microbial scRNA-seq", "deep learning", "archetypal analysis"],
  },
  {
    id: "methods",
    num: "03",
    title: "Computational Methods",
    subtitle: "Systems epidemiology for the genomics era",
    blurb:
      "Integrating -omics with epidemiology so complex real-life data can inform causation, not just correlation. We build the tools — MIxT, PREFFECT, Candescence — that let the rest of the lab do its work.",
    keywords: ["systems epidemiology", "FFPE RNA-seq", "multi-tissue integration"],
    methods: ["probabilistic models", "graph neural nets", "R / Python packages"],
  },
];

// PAPERS moved to content collection — see src/content/papers/*.md
// SOFTWARE moved to content collection — see src/content/software/*.md
// TEAM moved to content collection — see src/content/team/*.md
// NEWS (lab-news strip) moved to content collection — see src/content/news/*.md

export const FUNDERS = [
  { name: "NSERC", logo: "/assets/images/funders/nserc.png", url: "https://www.nserc-crsng.gc.ca/" },
  { name: "CIHR", logo: "/assets/images/funders/cihr.jpg", url: "https://www.cihr-irsc.gc.ca/" },
  { name: "Cancer Research Society", logo: "/assets/images/funders/cancer-research-society.png", url: "https://www.crs-src.ca/" },
  { name: "Vector Institute", logo: "/assets/images/funders/vector.png", url: "https://vectorinstitute.ai/" },
  { name: "CCSRI", logo: "/assets/images/funders/ccsri.png", url: "https://cancer.ca/en/research" },
  { name: "Schulich Medicine & Dentistry", logo: "/assets/images/funders/schulich.png", url: "https://www.schulich.uwo.ca/" },
  { name: "ERC", logo: "/assets/images/funders/erc.jpg", url: "https://erc.europa.eu/" },
];

export const COLLABS = [
  { name: "Michael Hallett",   affiliation: "Western",                  url: "https://mikehallett.science" },
  { name: "Katarzyna Jerzak",  affiliation: "Sunnybrook",               url: "https://research.sunnybrook.ca/researchers/katarzyna-jerzak/" },
  { name: "Sarah Kimmins",     affiliation: "UdeM",                     url: "https://www.chumontreal.qc.ca/en/crchum/chercheurs/sarah-kimmins" },
  { name: "Jeremy Burton",     affiliation: "Western",                  url: "https://www.schulich.uwo.ca/microbiologyandimmunology/people/faculty_profiles/Jeremy%20Burton.html" },
  { name: "Muriel Brackstone", affiliation: "Lawson RI",                url: "https://www.schulich.uwo.ca/generalsurgery/people/faculty/muriel_brackstone.html" },
  { name: "Lucy Xie",          affiliation: "Stanford",                 url: "https://chemsysbio.stanford.edu/students/alumni/jing-lin-lucy-xie/" },
  { name: "Ana Lohmann",       affiliation: "London Health Sciences",   url: "https://www.schulich.uwo.ca/epibio/people/faculty/cross_appointed_appointees/dr_ana_lohmann.html" },
  { name: "Steven Kerfoot",    affiliation: "Western",                  url: "https://www.schulich.uwo.ca/microbiologyandimmunology/people/faculty_profiles/Steven%20Kerfoot.html" },
  { name: "Anthony Nichols",   affiliation: "London Health Sciences",   url: "https://www.nicholslab.com/" },
];

// ─── Placeholder helpers ─────────────────────────────────────────────
export function Placeholder({ w = "100%", h = 120, label, bg = "#e9e4db", color = "#8a7f6f", style = {} }) {
  return (
    <div style={{
      width: w, height: h, background: bg, color,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 11, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
      letterSpacing: 0.4, textTransform: "uppercase",
      border: "1px dashed rgba(0,0,0,0.08)",
      ...style,
    }}>
      {label || `${typeof w === "number" ? w : ""}×${h}`}
    </div>
  );
}

// Portrait placeholder — neutral silhouette on a warm tone
export function PortraitPH({ size = 64, seed = 0, style = {} }) {
  const hues = [28, 200, 140, 350, 50, 270, 180];
  const hue = hues[seed % hues.length];
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: `oklch(0.85 0.04 ${hue})`,
      position: "relative", overflow: "hidden", flexShrink: 0,
      ...style,
    }}>
      <div style={{
        position: "absolute", top: "22%", left: "50%",
        transform: "translateX(-50%)",
        width: "38%", height: "38%", borderRadius: "50%",
        background: `oklch(0.7 0.05 ${hue})`,
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: "50%",
        transform: "translateX(-50%)",
        width: "78%", height: "55%", borderRadius: "50% 50% 0 0",
        background: `oklch(0.7 0.05 ${hue})`,
      }} />
    </div>
  );
}

// A generic scientific-looking SVG glyph — for research thumbnails / plots
export function SciGlyph({ kind = "cells", w = 280, h = 180, stroke = "#1a1a1a", fill = "none", accent = "#c44" }) {
  const strokeStyle = { stroke, fill: "none", strokeWidth: 1.2 };
  if (kind === "cells") {
    // UMAP-like scatter
    const pts = [];
    const rng = (s) => { let x = s; return () => (x = (x * 9301 + 49297) % 233280) / 233280; };
    const r = rng(7);
    for (let i = 0; i < 90; i++) {
      const cluster = i % 3;
      const cx = [0.3, 0.65, 0.5][cluster] * w + (r() - 0.5) * 50;
      const cy = [0.35, 0.4, 0.7][cluster] * h + (r() - 0.5) * 44;
      pts.push(<circle key={i} cx={cx} cy={cy} r={2.2} fill={[stroke, accent, "#888"][cluster]} opacity={0.75} />);
    }
    return <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>{pts}</svg>;
  }
  if (kind === "heatmap") {
    const cells = [];
    const cols = 18, rows = 10;
    const cw = w / cols, ch = h / rows;
    const rng = (s) => { let x = s; return () => (x = (x * 9301 + 49297) % 233280) / 233280; };
    const r = rng(3);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const v = r();
        const color = v > 0.66 ? accent : v > 0.33 ? "#d9d3c7" : "#2a2a2a";
        cells.push(<rect key={`${i}-${j}`} x={j * cw} y={i * ch} width={cw - 0.5} height={ch - 0.5} fill={color} opacity={0.3 + v * 0.7} />);
      }
    }
    return <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>{cells}</svg>;
  }
  if (kind === "network") {
    const nodes = [
      [0.5, 0.5], [0.25, 0.3], [0.75, 0.3], [0.2, 0.7], [0.8, 0.7], [0.5, 0.15], [0.5, 0.85],
      [0.1, 0.5], [0.9, 0.5], [0.35, 0.5], [0.65, 0.5],
    ].map(([x, y]) => [x * w, y * h]);
    const edges = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 9], [0, 10], [1, 5], [2, 5], [3, 6], [4, 6], [7, 3], [7, 1], [8, 2], [8, 4], [1, 9], [2, 10]];
    return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        {edges.map(([a, b], i) => <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={stroke} strokeWidth={0.6} opacity={0.5} />)}
        {nodes.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i === 0 ? 6 : 4} fill={i === 0 ? accent : stroke} />)}
      </svg>
    );
  }
  if (kind === "curves") {
    // Layered survival-like curves
    const paths = [];
    for (let k = 0; k < 3; k++) {
      let d = `M 10 ${h - 20}`;
      const drop = [0.55, 0.35, 0.2][k];
      for (let x = 10; x < w - 10; x += 12) {
        const prog = (x - 10) / (w - 20);
        const y = (h - 20) - (h - 40) * (1 - Math.exp(-prog * drop * 4));
        d += ` L ${x} ${y}`;
        if (Math.random() > 0.7) d += ` L ${x + 2} ${y + 3}`;
      }
      paths.push(<path key={k} d={d} stroke={k === 0 ? accent : stroke} strokeWidth={k === 0 ? 1.6 : 1} fill="none" opacity={k === 0 ? 1 : 0.45} />);
    }
    return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <line x1={10} y1={h - 20} x2={w - 10} y2={h - 20} {...strokeStyle} opacity={0.3} />
        <line x1={10} y1={h - 20} x2={10} y2={20} {...strokeStyle} opacity={0.3} />
        {paths}
      </svg>
    );
  }
  if (kind === "dna") {
    const paths = [];
    const steps = 24;
    for (let i = 0; i < steps; i++) {
      const t = i / steps;
      const y = 20 + t * (h - 40);
      const x1 = w / 2 + Math.sin(t * Math.PI * 4) * (w * 0.3);
      const x2 = w / 2 - Math.sin(t * Math.PI * 4) * (w * 0.3);
      paths.push(<line key={i} x1={x1} y1={y} x2={x2} y2={y} stroke={i % 2 ? accent : stroke} strokeWidth={1} opacity={0.6} />);
    }
    return <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>{paths}</svg>;
  }
  return null;
}

// Globals attach removed — ES module exports are used instead.
