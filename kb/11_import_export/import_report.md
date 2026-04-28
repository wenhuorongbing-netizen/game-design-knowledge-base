
# KB Import Report

## Run Summary

| Field | Value |
|---|---:|
| generated_at | 2026-04-28 |
| entities_exported | 859 |
| relationships_exported | 8405 |
| search_documents_exported | 737 |
| graph_nodes_exported | 859 |
| graph_edges_exported | 8405 |
| issues_total | 0 |

## Issue Counts By Severity

```json
{}
```

## Issue Counts By Rule

```json
{}
```

## Validation Rules Active

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
- evidence_ref missing required field
- evidence_ref broken reference
- metadata_only or unsupported_draft evidence supporting verified claim
- pending sidecar supporting verified claim
- manual quote not explicitly user-provided
- manual quote missing work/source/length
- manual quote too long
- manual quote automated extraction
- manual note not marked user_interpretation
- high-risk source evidence used beyond allowed operations
- claim status/confidence conflict
- promotion request missing reviewer or rationale
- promotion request beyond evidence scope
- promotion review missing reviewer or rationale
- project/playtest observation treated as universal doctrine

## Legal Safety Result

The importer read generated KB Markdown and curated JSON registries only. It did not unpack archives, read commercial source bodies, summarize high-risk files, extract quotes, or generate embeddings from quarantined material.

Search excerpts are suppressed for `metadata_only` or quarantined entities.

## Top Issues

| Severity | Rule | Entity | Message |
|---|---|---|---|
| info | none |  | No issues detected. |

## Output Files

- `/kb/11_import_export/export/all_entities.json`
- `/kb/11_import_export/export/all_relationships.json`
- `/kb/11_import_export/export/search_index.json`
- `/kb/11_import_export/export/graph_nodes.json`
- `/kb/11_import_export/export/graph_edges.json`
- `/kb/11_import_export/graph_overview.md`
