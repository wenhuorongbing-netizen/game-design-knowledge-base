# Phase 1 Content Release

Date: 2026-04-27

## Release Status

Status: complete for the first source-governed Game Design Knowledgebase content release.

This release verifies and publishes the existing canonical `/kb` content as Phase 1. It does not ingest high-risk source bodies, create detailed book summaries, quote restricted sources, generate embeddings from quarantined files, or add app/forum/reading-note features.

## Minimum Target Check

| Requirement | Target | Current | Status |
|---|---:|---:|---|
| GameDesignWork entries | 12 | 19 | pass |
| source-safe dossier shells | 12 | 19 | pass |
| concept cards | 30 | 109 | pass |
| original design lens cards | 20 | 104 | pass |
| workflow packs | 10 | 20 | pass |
| exercise cards | 20 | 85 | pass |
| claim graph file | 1 | 1 | pass |
| relationship graph export | 1 | 1 | pass |
| search index export | 1 | 1 | pass |
| coverage matrix | 1 | 1 | pass |

## Required Works

All required works are registered in `/kb/03_works/works.json` and listed in `/kb/03_works/WORK_REGISTRY.md`.

| Work | Status | Source Governance |
|---|---|---|
| Game Feel | registered | metadata-only / high-risk source quarantined |
| Play Matters | registered | metadata-only / high-risk source quarantined |
| The Aesthetic of Play | registered | metadata-only / high-risk source quarantined |
| The Art of Game Design | registered | metadata-only / high-risk source quarantined |
| The Game Design Reader | registered | metadata-only / high-risk source quarantined |
| A Theory of Fun for Game Design | registered | metadata-only / high-risk source quarantined |
| Advanced Game Design | registered | metadata-only / high-risk source quarantined |
| Challenges for Game Designers | registered | metadata-only / high-risk source quarantined |
| Game Design Workshop | registered | metadata-only / high-risk source quarantined |
| Game Mechanics | registered | metadata-only / high-risk source quarantined |
| Level Up | registered | metadata-only / high-risk source quarantined |
| Better Game Characters by Design | registered | prompt-referenced metadata only |

## Domain Coverage

The Phase 1 release covers the required domains at structural level:

- play_theory
- player_experience
- rules_mechanics
- meaningful_decisions
- systems_design
- economy_balance
- game_feel
- ui_ux_feedback
- narrative_world_character
- prototyping
- playtesting
- production

Some domain labels still have vocabulary aliases inherited from earlier builds, such as `rules_and_mechanics` versus `rules_mechanics` and `production_process` versus `production`. This is a P1 normalization issue, not a P0 or Phase 1 content blocker.

## Structured Exports

Regenerated with:

```powershell
node .\knowledge\tools\kb_importer\import_kb.js .
```

Export summary:

| Export | Count |
|---|---:|
| `/kb/11_import_export/export/all_entities.json` | 856 |
| `/kb/11_import_export/export/all_relationships.json` | 8383 |
| `/kb/11_import_export/export/search_index.json` | 734 |
| `/kb/11_import_export/export/graph_nodes.json` | 856 |
| `/kb/11_import_export/export/graph_edges.json` | 8383 |

## Validation

Validation command:

```powershell
node .\tools\validate_kb\validate_kb.js
```

Result:

- P0 issues: 0
- warnings: 488
- status: PASS

Importer warnings:

- 41 `card_without_related_work` warnings remain in `/kb/11_import_export/export/validation_issues.json`.

## Source Governance

Phase 1 is a draft/source-governed content release. Most cards, lenses, workflows, lessons, and exercises are intentionally marked as `weak` or `unsupported_draft`.

Do not present this release as a verified source-backed masterclass corpus until legal sidecars, user notes, official metadata, or open fulltext evidence are attached.

## Remaining Content Gaps

- No legal sidecars are approved.
- No verified book-body summaries are allowed.
- Most claims remain evidence gaps.
- Domain vocabulary should be normalized in the next hardening pass.
- Some cards need explicit related works or documented exemptions.
- Real project overlays and playtest logs are not yet attached.

