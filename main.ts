import { mkdirSync, writeFileSync } from "node:fs";

// The intern shows up on its day off, exactly like the alarm on a Saturday:
// the parallel is the joke, and the punchline lands in the last words.
const LINE =
  "My alarm clock rings at 6 AM on a Saturday like an unpaid intern who shows up on its day off and still expects a promotion.";

// Write to /output/entry.txt (OUTPUT_PATH overrides for local testing).
// Never remove the output root: only create it and write the file inside.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
