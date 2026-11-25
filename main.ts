// One-Line Laugh-Off — a single joke, written to /output/entry.txt.
//
// Deterministic, no network, no randomness: the same line every run.
// The line is 119 characters, inside the 1-200 gate.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My landlord raised the rent and called it a growth opportunity, so I watered his welcome mat and called it landscaping.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();
