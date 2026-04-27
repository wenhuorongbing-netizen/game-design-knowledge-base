# Legacy Quarantine

This folder is not canonical Game Design Knowledgebase content.

- Status: legacy snapshot
- Canonical replacement: `../kb/`
- Authoritative tools: root `npm run kb:*` scripts under `../tools/`
- Default action: ignore

## Hard Boundary

Do not use this folder to create new KB claims, cards, lenses, workflows, summaries, embeddings, or verified knowledge.

Use it only for explicit audited migration work after a maintainer decides what should be preserved. Until then, it is historical context and structural debt, not active source material.

## Allowed Maintenance

- Read folder-level metadata and filenames.
- Compare old structure against the canonical `kb/` structure.
- Move intentionally preserved, source-safe metadata through the canonical source-governance process.

## Prohibited Maintenance

- Do not parse high-risk source body text.
- Do not summarize private or suspicious source files.
- Do not run legacy scripts without explicit audited opt-in.
- Do not treat old generated cards as verified knowledge.
