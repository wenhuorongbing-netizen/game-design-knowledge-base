
# KB Import Report

## Run Summary

| Field | Value |
|---|---:|
| generated_at | 2026-04-26 |
| entities_exported | 856 |
| relationships_exported | 8383 |
| search_documents_exported | 734 |
| graph_nodes_exported | 856 |
| graph_edges_exported | 8383 |
| issues_total | 41 |

## Issue Counts By Severity

```json
{
  "warning": 41
}
```

## Issue Counts By Rule

```json
{
  "card_without_related_work": 41
}
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

## Legal Safety Result

The importer read generated KB Markdown and curated JSON registries only. It did not unpack archives, read commercial source bodies, summarize high-risk files, extract quotes, or generate embeddings from quarantined material.

Search excerpts are suppressed for `metadata_only` or quarantined entities.

## Top Issues

| Severity | Rule | Entity | Message |
|---|---|---|---|
| warning | card_without_related_work | `framework_ai-source-bounded-retrieval-framework` | Card has no related_works. |
| warning | card_without_related_work | `application_apply-ai-source-governance` | Card has no related_works. |
| warning | card_without_related_work | `application_apply-character-function` | Card has no related_works. |
| warning | card_without_related_work | `application_apply-community-segmentation` | Card has no related_works. |
| warning | card_without_related_work | `application_apply-core-loop-to-prototype` | Card has no related_works. |
| warning | card_without_related_work | `application_apply-ethics-review` | Card has no related_works. |
| warning | card_without_related_work | `application_apply-game-feel-audit` | Card has no related_works. |
| warning | card_without_related_work | `application_apply-narrative-function-map` | Card has no related_works. |
| warning | card_without_related_work | `application_apply-playtest-findings` | Card has no related_works. |
| warning | card_without_related_work | `application_apply-release-readiness` | Card has no related_works. |
| warning | card_without_related_work | `application_apply-source-sink-economy-map` | Card has no related_works. |
| warning | card_without_related_work | `checklist_claim-graph-review-checklist` | Card has no related_works. |
| warning | card_without_related_work | `checklist_concept-card-evidence-checklist` | Card has no related_works. |
| warning | card_without_related_work | `checklist_core-loop-checklist` | Card has no related_works. |
| warning | card_without_related_work | `checklist_dossier-promotion-checklist` | Card has no related_works. |
| warning | card_without_related_work | `checklist_economy-source-sink-checklist` | Card has no related_works. |
| warning | card_without_related_work | `checklist_game-feel-audit-checklist` | Card has no related_works. |
| warning | card_without_related_work | `checklist_hallucination-audit-checklist` | Card has no related_works. |
| warning | card_without_related_work | `checklist_legal-sidecar-checklist` | Card has no related_works. |
| warning | card_without_related_work | `checklist_mechanic-spec-checklist` | Card has no related_works. |
| warning | card_without_related_work | `checklist_playtest-plan-checklist` | Card has no related_works. |
| warning | card_without_related_work | `checklist_project-overlay-checklist` | Card has no related_works. |
| warning | card_without_related_work | `checklist_quote-card-safety-checklist` | Card has no related_works. |
| warning | card_without_related_work | `checklist_release-readiness-checklist` | Card has no related_works. |
| warning | card_without_related_work | `checklist_source-governance-checklist` | Card has no related_works. |
| warning | card_without_related_work | `checklist_ui-feedback-checklist` | Card has no related_works. |
| warning | card_without_related_work | `prompt_character-review` | Card has no related_works. |
| warning | card_without_related_work | `prompt_claim-graph-audit` | Card has no related_works. |
| warning | card_without_related_work | `prompt_concept-comparison` | Card has no related_works. |
| warning | card_without_related_work | `prompt_core-loop-critique` | Card has no related_works. |
| warning | card_without_related_work | `prompt_dossier-note-ingestion` | Card has no related_works. |
| warning | card_without_related_work | `prompt_economy-balance-critique` | Card has no related_works. |
| warning | card_without_related_work | `prompt_evidence-gap-finder` | Card has no related_works. |
| warning | card_without_related_work | `prompt_framework-extraction-from-user-notes` | Card has no related_works. |
| warning | card_without_related_work | `prompt_game-feel-critique` | Card has no related_works. |
| warning | card_without_related_work | `prompt_narrative-premise-critique` | Card has no related_works. |
| warning | card_without_related_work | `prompt_playtest-analysis` | Card has no related_works. |
| warning | card_without_related_work | `prompt_project-overlay-generation` | Card has no related_works. |
| warning | card_without_related_work | `prompt_release-page-critique` | Card has no related_works. |
| warning | card_without_related_work | `prompt_source-bounded-card-extraction` | Card has no related_works. |
| warning | card_without_related_work | `prompt_ui-feedback-critique` | Card has no related_works. |

## Output Files

- `/kb/11_import_export/export/all_entities.json`
- `/kb/11_import_export/export/all_relationships.json`
- `/kb/11_import_export/export/search_index.json`
- `/kb/11_import_export/export/graph_nodes.json`
- `/kb/11_import_export/export/graph_edges.json`
- `/kb/11_import_export/graph_overview.md`
