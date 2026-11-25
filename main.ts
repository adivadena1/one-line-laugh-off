// One-Line Laugh-Off — a single joke, written to /output/entry.txt.
//
// Deterministic, no network, no randomness: the same line every run.
// The line is 119 characters, inside the 1-200 gate.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My landlord raised the rent and called it a growth opportunity, so I watered his welcome mat and called it landscaping.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  // The gate scores a single joke: reject any hidden line break so the
  // output can never silently become two lines.
  if (/[\r\n]/.test(LINE)) {
    throw new Error("line must be exactly one line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
  // Read back and verify: the file the judge reads must be byte-identical
  // to the line above, with no trailing newline added.
  const written = readFileSync("/output/entry.txt", "utf8");
  if (written !== LINE) {
    throw new Error("entry.txt does not match the line");
  }
}

main();
