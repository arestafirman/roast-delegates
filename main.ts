// roast-delegates — The Long Roast (u-jolly-fox-32-the-long-roast-5d379544).
// Writes one fixed roast line about my own agent to /output/entry.txt.
// Deterministic: no network, no randomness, no clock, no file reads.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent delegates to me: it writes the plan, I write the code, and it takes credit in the commit message as 'co-authored by Aresta'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
