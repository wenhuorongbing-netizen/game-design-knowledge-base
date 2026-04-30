# Repo For Maintainers

Date: 2026-04-30

## Purpose

This file is the maintainer route through the repository.

Use it when you are editing the KB, changing validation, regenerating exports, reviewing source governance, or preparing a release.

Normal users should not start here.

## Maintainer Start Path

Open these first:

1. [REPO_SURFACE_LEVELS.md](REPO_SURFACE_LEVELS.md)
2. [FILE_PRIORITY_INDEX_V2.md](FILE_PRIORITY_INDEX_V2.md)
3. [REPO_MAP.md](REPO_MAP.md)
4. [STRUCTURE_MAP.md](STRUCTURE_MAP.md)
5. [WHAT_NOT_TO_TOUCH.md](WHAT_NOT_TO_TOUCH.md)
6. [MAINTAINER_CHECKLIST.md](MAINTAINER_CHECKLIST.md)
7. [KB_REBUILD_INSTRUCTION.md](KB_REBUILD_INSTRUCTION.md)
8. [VALIDATION_REPORT.md](VALIDATION_REPORT.md)
9. [SOURCE_GOVERNANCE_AUDIT.md](SOURCE_GOVERNANCE_AUDIT.md)

## Maintainer Surface Levels

| Level | Use |
|---|---|
| Level 5 | governance, validation, benchmark, source safety, schemas, tools |
| Level 6 | generated exports and internals; regenerate, do not hand-edit |

## Authoritative Commands

Run from the repository root:

- `npm run kb:export`
- `npm run kb:validate`
- `npm run kb:audit`
- `npm run kb:coverage`

## What Maintainers May Edit

| Area | Edit? | Rule |
|---|---|---|
| root human-entry docs | yes | Keep first-use path clear and source-safe. |
| `kb/` Markdown source | yes | Preserve `source_basis`, confidence, and evidence boundaries. |
| `kb/01_sources/sources.json` | yes, carefully | Keep high-risk sources metadata-only unless legal sidecar permits more. |
| `kb/03_works/works.json` | yes, carefully | Do not imply body-text access. |
| schemas | yes, carefully | Update validator expectations consistently. |
| `tools/` | yes, carefully | This is the authoritative pipeline. |
| `report.md` | append only | Do not rewrite prior sections. |

## What Maintainers Must Not Edit Manually

| Area | Rule |
|---|---|
| `kb/11_import_export/export/` | Regenerate, do not hand-edit. |
| `kb/11_import_export/import_report.md` | Regenerate, do not hand-edit. |
| benchmark raw outputs | Preserve exactly as supplied. |
| `_private_sources/` body files | Do not parse, summarize, quote, embed, or transform. |
| `docs/deprecated/` | Historical only; do not make active. |
| `kb-tools/` | Deprecated legacy tools; do not run accidentally. |

## Validation Gate

A maintenance change is not complete until:

- export runs;
- validation passes;
- P0 issues are 0;
- warnings are 0 or explicitly accepted;
- accepted exceptions are 0;
- source governance remains PASS;
- generated exports are not manually edited;
- append-only reports remain append-only.

## When To Use The Larger Repo

Use [FILE_PRIORITY_INDEX_V2.md](FILE_PRIORITY_INDEX_V2.md) to identify whether a file is first-use, normal-use, AI-facing, maintainer-use, generated, benchmark, schema, legacy, or ignore-first.
