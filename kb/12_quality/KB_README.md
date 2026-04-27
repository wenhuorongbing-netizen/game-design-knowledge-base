
# Game Design Masterclass KB README

## What This KB Is

This is a source-governed game design knowledge operating system for GDKB. It is not a pile of book summaries. It organizes sources, works, dossiers, concept cards, frameworks, design lenses, lessons, workflows, exercises, AI prompts, graph relationships, and search exports.

## How To Navigate It

- Start with `/kb/02_ontology/MASTER_TAXONOMY.md` to understand phases and domains.
- Use `/kb/03_works/WORK_REGISTRY.md` to see registered works.
- Use `/kb/05_cards/CONCEPT_INVENTORY.md` for vocabulary.
- Use `/kb/06_lenses/DESIGN_LENS_BANK.md` for diagnostic questions.
- Use `/kb/07_lessons/MASTERCLASS_CURRICULUM.md` for learning paths.
- Use `/kb/08_workflows/WORKFLOW_PACK_INDEX.md` for production tasks.
- Use `/kb/11_import_export/export/search_index.json` for GDKB retrieval.

## How To Add Legal Notes

1. Copy `/kb/01_sources/source_sidecar_template.yaml`.
2. Fill legal access, purchase/library reference, allowed processing, and notes paths.
3. Store user reading notes separately from high-risk source files.
4. Attach note IDs to dossiers, cards, claims, or lenses.
5. Promote confidence only after evidence review.

## How To Create A New Card

1. Pick the card type under `/kb/05_cards`.
2. Use `card_template.md`.
3. Add `source_basis`, `confidence`, `phase_groups`, `domains`, `related_works`, and `evidence_refs`.
4. If there is no evidence, set `source_basis: unsupported_draft` and `confidence: unsupported_draft` or `weak`.
5. Run `node tools/kb_importer/import_kb.js`.
6. Check `/kb/11_import_export/import_report.md`.

## How To Run A Workflow Pack

1. Open `/kb/08_workflows/WORKFLOW_PACK_INDEX.md`.
2. Choose the workflow matching your production phase.
3. Prepare required inputs.
4. Run the step-by-step process.
5. Use linked cards and lenses as prompts, not as verified facts.
6. Save output into a ProjectOverlay or design decision log.

## How To Use Lenses

1. Open `/kb/06_lenses/DESIGN_LENS_BANK.md`.
2. Choose a lens by phase or domain.
3. Apply its diagnostic questions to a concrete artifact.
4. Record strengths, risks, missing evidence, experiments, and next actions.
5. Do not claim a lens comes from a book unless evidence_refs support it.

## How To Connect A Project Overlay

ProjectOverlay should store project-specific application separately from general KB knowledge.

Use:

- `/kb/09_project_overlays/project_overlay_template.md`
- `/kb/09_project_overlays/playtest_log_template.md`
- `/kb/09_project_overlays/overlays/sample_design_audit_overlay.md`
- `workflow_*` outputs
- design decisions
- playtest logs
- evidence refs

The current ProjectOverlay and PlaytestLog examples are `unsupported_draft` scaffolds. Replace them with real project records before treating them as evidence.

## How To Avoid Unsupported Claims

- Always show `source_basis` and `confidence`.
- Do not use `metadata_only` as a summary basis.
- Do not write "according to [book]" unless a legal source or user note supports it.
- Treat related works as routing metadata, not evidence.
- Keep AI hypotheses separate from source claims.

## How To Continue Building

1. Add legal sidecars or user notes.
2. Replace sample project overlays and playtest logs with real project evidence.
3. Promote selected cards with evidence.
4. Add design decisions.
5. Re-run the importer.
6. Re-run quality audits before release.
