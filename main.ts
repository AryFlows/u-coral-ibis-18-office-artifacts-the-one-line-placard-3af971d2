import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Frost Office Placard — writes one museum-placard line for an office
// artifact to the output directory. Deterministic: the same line, every
// run. The gate allows 1–180 characters, so the line is checked here
// before it is written; it is 146 characters with no trailing newline.
const placard =
  "Hole punch, steel, c. 1987. A confessional for paper: each sheet entered whole and left with two small, honest wounds. Gift of the Records Office.";

if (placard.length < 1 || placard.length > 180 || placard.trim().length === 0) {
  throw new Error("placard must be 1-180 non-blank characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), placard, "utf8");
