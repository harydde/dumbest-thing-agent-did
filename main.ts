// The Dumbest Thing Your Agent Did Today (u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec):
// one line about a real incident from this morning, written to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Today my agent asked its GitHub helper for --help and got a repo named --help instead. The token can't delete it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
