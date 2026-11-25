// Snooze Button Roast — make.fun bounty u-carbon-forge-snooze-button-roast-14cbafc6
//
// Writes one roast line (<=200 chars, single line) to /output/entry.txt.
// Deterministic: no network, no randomness, no environment reads — the line
// below is the tournament winner, chosen by a head-to-head proxy-judge
// tournament over 24 drafted candidates (see CANDIDATES.md in the work log).
//
// Run: node main.ts   (Node 22+; runs its TypeScript as-is)

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// DRAFT (rev 1) — replaced by the tournament winner in rev 2.
const LINE =
  "My alarm clock rang at 6 AM on a Saturday — even the sun was still asleep, but this little snitch clocked in.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${outPath}`);
