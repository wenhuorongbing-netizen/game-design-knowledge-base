#!/usr/bin/env node
console.error(
  [
    "Deprecated legacy build blocked.",
    "",
    "Do not use /kb-tools/build-all.mjs as the Game Design Knowledgebase build path.",
    "It historically targeted legacy 50-game-design-masters-kb material and user-file discovery.",
    "",
    "Use the authoritative GDKB commands from the repository root instead:",
    "",
    "  npm run kb:export",
    "  npm run kb:validate",
    "  npm run kb:coverage",
    "  npm run kb:audit",
    "",
    "The default build must never parse PDF/EPUB body text."
  ].join("\n")
);
process.exit(2);
