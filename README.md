# Game Design Knowledgebase

This repository is a structured Game Design Knowledgebase. It is not BookOS, a reading notes app, a personal book tracker, a forum platform, or a Vue/Spring/MySQL application.

## Repository Root

This `knowledge/` folder is now the repository root for the knowledgebase. The sibling folder `../founder-of-the-north/` is game-project content and is outside this KB repository boundary.

## Canonical KB Content

- `kb/` is the canonical source-governed knowledgebase.
- `tools/validate_kb/` contains the repository validator.
- `tools/kb_importer/` is the authoritative export/import pipeline.
- `tools/kb_quality/` contains release audit and coverage helpers.
- `kb-portal/` is an optional static browser generated only from safe exports.
- `kb-tools/` is deprecated legacy tooling and is not the authoritative build path.
- `50-game-design-masters-kb/` is a legacy snapshot and must remain quarantined unless re-audited.
- Root-level PDF/EPUB/book files are private local source materials and are ignored by `.gitignore`.

## Source Governance

High-risk sources are metadata-only. Do not summarize, quote, embed, or transform high-risk source bodies unless a legal sidecar explicitly permits processing.

## Authoritative Commands

Run from this folder:

```powershell
npm run kb:export
npm run kb:validate
npm run kb:coverage
npm run kb:audit
```

Equivalent direct commands:

```powershell
node .\tools\kb_importer\import_kb.js .
node .\tools\validate_kb\validate_kb.js
```

## Release Gates

Draft KB release can pass when validation/export are clean and all draft scaffolds remain labeled with `source_basis`, `confidence`, and `status`.

Verified source-backed masterclass release remains blocked until legal sidecars, user notes, official/open sources, or project/playtest evidence support claims.
