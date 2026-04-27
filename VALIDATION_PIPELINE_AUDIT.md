# Validation Pipeline Audit

## Current Pipeline

Primary current importer:

- `knowledge/tools/kb_importer/import_kb.js`

Generated outputs:

- `knowledge/kb/11_import_export/export/all_entities.json`
- `knowledge/kb/11_import_export/export/all_relationships.json`
- `knowledge/kb/11_import_export/export/search_index.json`
- `knowledge/kb/11_import_export/export/graph_nodes.json`
- `knowledge/kb/11_import_export/export/graph_edges.json`
- `knowledge/kb/11_import_export/export/validation_issues.json`
- `knowledge/kb/11_import_export/import_report.md`

Current import report:

| Metric | Count |
|---|---:|
| entities_exported | 856 |
| relationships_exported | 8383 |
| search_documents_exported | 734 |
| graph_nodes_exported | 856 |
| graph_edges_exported | 8383 |
| validation warnings | 41 |

## Rules Currently Documented

- missing source_basis
- missing confidence
- unsupported verified claim
- high-risk source used as summary basis
- broken relationship link
- duplicate ID
- missing phase group
- missing domain
- card without related work
- lens without diagnostic questions
- workflow without output artifact
- lesson without exercise
- prompt without guardrails

## P0 Repair Status

Status: PASS for P0.

The repository now includes `tools/validate_kb/validate_kb.js`. Current run:

```powershell
node .\tools\validate_kb\validate_kb.js
```

Result: PASS, 0 P0 issues, 488 warnings.

## Major Gaps

| ID | Severity | Gap | Impact | Required Fix |
|---|---|---|---|---|
| VAL-001 | P0 | Does not scan legacy `50-game-design-masters-kb` extraction artifacts | completed | Repo-wide high-risk artifact scanner added |
| VAL-002 | P0 | Does not fail on `preview_text` or `sample_sections.text` from high-risk sources | completed | Hard-fail rule added for generated artifact surfaces |
| VAL-003 | P0 | Does not validate `kb-portal/data.js` source safety | completed | Portal data regenerated and validator checks portal data |
| VAL-004 | P1 | 41 warnings remain | Quality gate is not clean | Fix related_works or define exemptions |
| VAL-005 | P1 | JSON schemas are permissive | Bad data can pass | Tighten schema validation |
| VAL-006 | P1 | Multiple toolchains overlap | Maintainers can run unsafe pipeline | Document one safe command |

## Required New Validation Rules

1. Fail if any file outside approved source vault contains `preview_text` sourced from high-risk files.
2. Fail if any JSON/JS/MD contains `sample_sections` with long `text` from high-risk files.
3. Fail if portal data links to high-risk source files or private extracted artifacts.
4. Fail if any entity has `confidence: verified` without evidence_refs and strong/legal source_basis.
5. Fail if any generated search text includes body excerpts from `metadata_only_quarantined` source documents.
6. Warn if local high-risk binaries are inside the repo tree even when gitignored.

## Recommended Safe Command

After P0 fixes, define one release command, for example:

```powershell
node .\tools\validate_kb\validate_kb.js
```
