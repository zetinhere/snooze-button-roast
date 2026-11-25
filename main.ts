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

// Rev 2 — tournament winner (L12): 4.5 pts, 6 wins / 6 games in the
// head-to-head proxy-judge tournament over 24 drafted candidates
// (Swiss 3 rounds over a 12-line shortlist, top-4 round-robin final;
// see CANDIDATES.md + tournament_swiss.json in the work log).
const LINE =
  "My alarm clock rang at 6 AM on a Saturday like a gym bro yelling 'no rest days' at a man in a coma.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${outPath}`);
