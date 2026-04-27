# Game Design Knowledgebase

This repository is a structured Game Design Knowledgebase. It is not BookOS, a reading notes app, a forum platform, or a user-auth CRUD application.

## Repository Root

This `knowledge/` folder is now the repository root for the knowledgebase. The sibling folder `../founder-of-the-north/` is game-project content and is outside this KB repository boundary.

## Canonical KB Content

- `kb/` is the canonical source-governed knowledgebase.
- `tools/validate_kb/` contains the repository validator.
- `tools/kb_importer/` generates structured exports from Markdown.
- `kb-portal/` is an optional static browser generated only from safe exports.
- `50-game-design-masters-kb/` is a legacy snapshot and must remain quarantined unless re-audited.
- Root-level PDF/EPUB/book files are private local source materials and are ignored by `.gitignore`.

## Source Governance

High-risk sources are metadata-only. Do not summarize, quote, embed, or transform high-risk source bodies unless a legal sidecar explicitly permits processing.

Run validation from this folder:

```powershell
node .\tools\validate_kb\validate_kb.js
```

Regenerate structured exports from this folder:

```powershell
node .\tools\kb_importer\import_kb.js .
```
