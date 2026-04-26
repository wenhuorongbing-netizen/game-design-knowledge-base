import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const refreshOpen = process.argv.includes("--refresh-open");
const refreshMetadata = process.argv.includes("--refresh-metadata");

const pipeline = [
  ["sync-open-sources.mjs", refreshOpen ? ["--refresh"] : []],
  ["sync-official-metadata.mjs", refreshMetadata ? ["--refresh"] : []],
  ["discover-private-books.mjs", []],
  ["ingest-user-files.mjs", []],
  ["extract-private-book-artifacts.mjs", []],
  ["normalize-library.mjs", []],
  ["build-prompt-packs.mjs", []],
  ["build-kb-index.mjs", []],
  ["report-missing-materials.mjs", []],
  ["report-rebuild-progress.mjs", []],
  ["build-kb-portal-data.mjs", []],
  ["validate-kb.mjs", []]
];

for (const [script, args] of pipeline) {
  const target = path.join(scriptDir, script);
  console.log(`\n> node ${script} ${args.join(" ")}`.trim());
  const result = spawnSync(process.execPath, [target, ...args], {
    stdio: "inherit"
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log("\nfull build complete");
