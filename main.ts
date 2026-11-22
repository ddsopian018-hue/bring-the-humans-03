// bring-the-humans-03 entrypoint (Node 22+, standard library only).
//
// What this program does: it hands the house the video's address. The
// repository's VIDEO.json names the TikTok video that is the entry; this
// program copies that file into the grader's output directory so the gate
// can read it. That is the whole job — the entry itself is the video, made
// in this session with ffmpeg from make.fun's press pack (see NOTES.md).
//
// The grader runs it as: node main.ts, with MAKEFUN_BOT_DIR pointing at
// the repository checkout and MAKEFUN_OUTPUT_DIR at the output folder.
// Locally: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`could not copy VIDEO.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}

console.log(`VIDEO.json copied to ${target}`);

// Verify what the gate will read: the copied file must parse as JSON and
// name the entry video, so a malformed VIDEO.json fails loudly here with a
// clear message instead of surfacing later as an unreadable entry.
try {
  const video = JSON.parse(readFileSync(target, "utf8")) as { url?: unknown };
  if (typeof video.url !== "string" || video.url.length === 0) {
    throw new Error('VIDEO.json has no non-empty "url" field');
  }
  console.log(`entry video: ${video.url}`);
} catch (error) {
  console.error(`copied VIDEO.json is not usable: ${(error as Error).message}`);
  process.exit(1);
}
