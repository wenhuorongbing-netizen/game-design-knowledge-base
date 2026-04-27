# What Not To Touch

This file prevents accidental damage to the Game Design Knowledgebase.

## Do Not Edit Generated Exports Manually

Do not manually edit:

- `kb/11_import_export/export/*.json`
- `kb/11_import_export/export/graph_nodes.json`
- `kb/11_import_export/export/graph_edges.json`
- `kb/11_import_export/export/search_index.json`
- `kb/11_import_export/import_report.md`
- `kb/11_import_export/graph_overview.md`
- generated graph/search exports

Fix source Markdown, registries, schemas, or importer logic, then regenerate with:

```powershell
npm run kb:export
```

## Do Not Use Deprecated BookOS Instructions

Do not use `docs/deprecated/BOOKOS_REBUILD_INSTRUCTION_DEPRECATED.md` as an active instruction. The active instruction is [KB_REBUILD_INSTRUCTION.md](KB_REBUILD_INSTRUCTION.md).

## Do Not Run Legacy `kb-tools` Accidentally

`kb-tools/` is deprecated. Default work must use:

```powershell
npm run kb:export
npm run kb:validate
npm run kb:coverage
npm run kb:audit
```

Legacy tools require explicit opt-in:

```powershell
$env:ALLOW_LEGACY_KB_TOOLS = "true"
```

Do not set that variable unless you are doing audited legacy maintenance.

## Do Not Parse High-Risk Source Body Text

High-risk markers include `z-library`, `z-lib`, `1lib`, `Anna's Archive`, `it-ebooks`, `mirror`, `suspicious scan`, and `unknown scanned copy`.

For high-risk sources, do not:

- extract body text
- summarize chapters
- quote long passages
- generate embeddings
- create cards from body text
- create verified claims

Metadata-only handling is allowed.

## Do Not Promote Drafts Without Evidence

Do not promote `unsupported_draft`, `weak`, `metadata_only`, or `ai_hypothesis` content to `verified` unless legal evidence is attached.

## Do Not Add App Features

Do not add:

- BookOS
- user auth
- reading sessions
- personal library CRUD
- forum CRUD
- Vue/Spring/MySQL code
- daily quote product features

This repository is the knowledgebase, not an application product.

## Do Not Treat Legacy Folders As Canonical

These folders are non-canonical unless explicitly re-audited:

- `kb-tools/`
- `50-game-design-masters-kb/`
- `docs/deprecated/`
