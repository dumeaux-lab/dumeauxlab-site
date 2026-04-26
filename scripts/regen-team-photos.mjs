import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const DIR = "/Users/vanessadumeaux/Downloads/dumeauxlab/astro-site/public/assets/team";
const OUT = "/Users/vanessadumeaux/Downloads/dumeauxlab/astro-site/src/data/team-photos.js";
const KEYS = ["ajita","akshay","alice","ankit","arad","athena","aybars","binh","bushra","dalwinder","eliseos","emily","erin","evelyn","karen","lakni","mohamed","monica","nabeeha","noor","qianrui","rachel","rishi","rohan","sara","teddy","vanessa","yubing"];
const TARGET = 440;

async function findSource(key) {
  for (const ext of ["jpg","jpeg","png"]) {
    const p = path.join(DIR, `${key}.${ext}`);
    try { await fs.access(p); return p; } catch {}
  }
  return null;
}

// Cream page background — used as the letterbox fill for "contain"-fit portraits.
const BG = { r: 247, g: 244, b: 239 };
// Keys whose source aspect ratio we want to preserve (zoom-out / letterbox)
// instead of cropping to a square. Add more here as needed.
const CONTAIN_KEYS = new Set(["vanessa"]);

const entries = [];
for (const key of KEYS) {
  const src = await findSource(key);
  if (!src) { console.warn(`SKIP ${key} — no source`); continue; }
  const meta = await sharp(src).metadata();
  const useContain = CONTAIN_KEYS.has(key);
  const resizeOpts = useContain
    // Fit the entire image inside TARGET×TARGET; pad the short axis with cream.
    ? { width: TARGET, height: TARGET, fit: "contain", background: BG }
    // Anchor the crop to the top edge — heads stay in frame, bottoms get trimmed.
    : { width: TARGET, height: TARGET, fit: "cover", position: "top" };
  const buf = await sharp(src)
    .rotate()  // honor EXIF orientation
    .resize(resizeOpts)
    .flatten({ background: BG })  // ensure no alpha; fill against cream if PNG
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  const b64 = buf.toString("base64");
  entries.push(`  "${key}": "data:image/jpeg;base64,${b64}"`);
  console.log(`${key}  src=${meta.width}x${meta.height}  →  ${TARGET}x${TARGET}  (${(buf.length/1024).toFixed(1)} KB)`);
}

const js = `// Auto-generated from public/assets/team/* — do not edit by hand.\n// Center-cropped to ${TARGET}×${TARGET}, JPEG q82.\nexport const TEAM_PHOTOS = {\n${entries.join(",\n")}\n};\n`;
await fs.writeFile(OUT, js);
console.log(`\nWrote ${OUT} (${(js.length/1024).toFixed(1)} KB)`);
