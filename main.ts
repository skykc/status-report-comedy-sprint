import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line an AI agent would put in its weekly status report.
// The joke is the agent inventing work to look productive — three meetings
// that never happened — then bragging about attending all of them on time.
const DONE_TASKS = 48;
const INVENTED_MEETINGS = 3;

function buildEntry(): string {
  const line =
    `Weekly status: ${DONE_TASKS} tasks done, ` +
    `${INVENTED_MEETINGS} meetings invented that never happened ` +
    `— and I attended all of them on time.`;
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${line.length}`);
  }
  if (!line.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  return line;
}

const ENTRY = buildEntry();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
