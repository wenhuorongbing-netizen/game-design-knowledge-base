# TODO

## Prompt 11 - Next Required Step: Project Overlay System And Project Application Records

Prompt 11 should make the KB usable in real game development by separating general knowledge from project-specific application.

Required outcomes:

1. create or finalize `/kb/09_project_overlays/project_overlay_template.md`
2. create `/kb/09_project_overlays/project_overlay_schema.json`
3. create `/kb/09_project_overlays/PROJECT_OVERLAY_INDEX.md`
4. create `/kb/09_project_overlays/design_decision_log_template.md`
5. create `/kb/09_project_overlays/playtest_log_template.md`
6. create `/kb/09_project_overlays/project_application_record_template.md`
7. create one sample project overlay that uses at least 3 Prompt 8 workflow outputs
8. connect project overlays to cards, lenses, lessons, workflows, prompts, claims, decisions, and playtest logs
9. update Prompt 9 importer or define importer extension so ProjectOverlay entities export cleanly
10. update `KB_STATE.md` and `IMPLEMENTATION_LOG.md`

## Prompt 10 Completion Snapshot

- legal audit exists
- coverage matrix exists
- hallucination audit exists
- usability audit exists
- knowledge gap backlog exists
- release checklist exists
- release notes exist
- KB README exists
- next 30 days plan exists
- next 90 days plan exists
- release report exists
- legal audit found 0 unresolved violations
- hallucination audit found 0 critical issues
- final release checklist passes for BookOS draft integration
- KB is a BookOS-ready draft release candidate
- KB is not yet a verified source-backed corpus

## Current Release Status

- `all_entities.json`: 856 normalized entities
- `all_relationships.json`: 8,383 relationship edges
- `search_index.json`: 734 safe search documents
- `validation_issues.json`: 41 warnings, 0 errors
- remaining warning class: `card_without_related_work`
- coverage cells: 62 strong, 25 adequate, 17 weak, 32 missing

## Prompt 11 Design Questions

- what sample project should be used for the first ProjectOverlay
- should project overlays live only under `/kb/09_project_overlays`, or should active game projects keep overlays in their own workspace
- what design decision fields are required before a decision can influence the general KB
- should playtest logs validate claims directly or only through DesignDecision records
- how should BookOS display project-applied versus general knowledge

## Backlog After Prompt 11

- Prompt 12: Forum templates, discussion quality rules, and collaborative review workflow
- Prompt 13: BookOS UI integration or database seed implementation
- Prompt 14: Legal sidecar intake workflow and official metadata enrichment
- Prompt 15: Evidence-backed card promotion for priority concepts

## Hard Stops

- do not use `HIGH_RISK_SOURCE` body text
- do not collapse `metadata_only` into verified knowledge
- do not skip source sidecars for commercial files
- do not create chapter summaries unless the source basis permits it
- do not create quote cards from suspicious mirror files
- do not generate concept cards from dossier pending slots as if they were source-backed
- do not turn application notes into production recommendations unless evidence exists
- do not turn Prompt 5 card drafts into verified lenses
- do not claim a lens comes from a specific book unless legal evidence supports it
- do not turn Prompt 6 lens drafts into verified lessons
- do not create lesson claims from high-risk book bodies
- do not present lesson paths as source-backed unless evidence supports them
- do not turn Prompt 7 lessons into verified workflows
- do not treat Prompt 8 workflows or exercises as verified production doctrine
- do not allow Prompt 8 AI prompts to bypass source governance
- do not build import automation that reads quarantined source body text
- do not hand-edit generated Prompt 9 exports
- do not treat graph routing edges as evidence
- do not release to BookOS without checking `validation_issues.json`
- do not treat Prompt 10 release-ready draft status as source-backed verification
- do not merge project-specific findings into general KB doctrine without review

## User Action Queue

- decide which uploaded works have legal access
- fill one sidecar per source if body-level processing is desired
- provide user reading notes for any work that should become cards before legal file activation
- provide official metadata links if bibliographic enrichment is desired without body ingestion
- choose the first 3 to 5 works whose dossiers should receive user notes first
- choose which concept cards should receive user notes first
- choose a sample game project for Prompt 11 ProjectOverlay
- provide project examples if application cards, lenses, workflows, and lessons should become project-tested knowledge
- choose which Prompt 8 workflow packs should be tested on a real project first
