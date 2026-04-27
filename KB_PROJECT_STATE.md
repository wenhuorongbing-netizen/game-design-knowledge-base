# KB Project State

Date: 2026-04-27

## Current Milestone

P1 structural exceptions cleanup complete for the Game Design Knowledgebase repository.

## Verdict

- P0 safety status: PASS
- Draft KB release gate: PASS
- Verified source-backed masterclass release gate: BLOCKED
- Migration-exception structural status: PASS, 0 accepted migration exceptions
- Directional risk: ON_TRACK
- Repository root: `D:\Game\FOTN\knowledge`
- Canonical KB root: `kb/`
- Authoritative pipeline: root `package.json` scripts under `/tools`

## Completed This Repair

- Moved placeholder notes for quote, comparison, exercise, anti-pattern, and case-study card folders into `kb/05_cards/PLACEHOLDER_CARD_FOLDERS.md`.
- Removed README placeholders from entity scan folders to eliminate `placeholder_readme_in_entity_folder` accepted exceptions.
- Updated `ENTITY_TYPE_MIGRATION_PLAN.md` with the README-placeholder follow-up cleanup.
- Added reversible structure simplification documentation without moving canonical KB content.
- Added folder-level README markers for canonical, generated, optional, legacy, deprecated, and tool folders.
- Added generated-export marker at `kb/11_import_export/export/README.md`.
- Replaced the legacy snapshot README with a clear non-canonical quarantine notice.
- Added `STRUCTURE_MAP.md` and `STRUCTURE_SIMPLIFICATION_PLAN.md`.
- Added first-time user entry documentation: `REPO_MAP.md`, `HOW_TO_USE_THIS_KB.md`, `HOW_TO_ADD_KNOWLEDGE.md`, `WHAT_NOT_TO_TOUCH.md`, and `MAINTAINER_CHECKLIST.md`.
- Expanded root `START_HERE.md` into a question-driven onboarding page.
- Added KB-local entry files: `kb/START_HERE.md`, `kb/INDEX.md`, `kb/LEARNING_PATHS.md`, and `kb/DESIGNER_WORKFLOWS.md`.
- Updated `README.md` to start with `Start here: START_HERE.md`.
- Rechecked the P0 contradiction list and confirmed no active root `rebuild_instruction.md` remains.
- Replaced the deprecated BookOS instruction body with a stub-only warning under `docs/deprecated/`.
- Strengthened legacy user-file ingest high-risk marker detection for curly apostrophes and private manifest metadata fields.
- Corrected stale acceptance-review text so accepted migration exceptions are reported as 5, not 477.
- Completed follow-up cleanup reducing accepted migration exceptions from 5 to 0.
- Added explicit `entity_type` frontmatter to 472 legacy generated Markdown entity files.
- Reduced accepted migration exceptions from 477 to 5.
- Reduced missing `entity_type` exceptions from 472 to 0.
- Created `ENTITY_TYPE_MIGRATION_PLAN.md`.
- Regenerated `MIGRATION_EXCEPTIONS_REPORT.md`.
- Regenerated import/export artifacts and validation reports.
- Confirmed root `rebuild_instruction.md` is absent.
- Kept legacy BookOS instruction under `docs/deprecated/BOOKOS_REBUILD_INSTRUCTION_DEPRECATED.md`.
- Hardened `kb-tools/ingest-user-files.mjs` so user files default to `pending_review` / `allowed_metadata_only`, not accepted.
- Added `unknown scanned copy` to high-risk markers.
- Added `risk_level` to user-file ingest records.
- Guarded legacy `kb-tools` entry scripts behind `ALLOW_LEGACY_KB_TOOLS=true`.
- Added `kb-tools/README.md` describing deprecation and opt-in rules.
- Updated validator output so PASS means P0 safety pass, not structural perfection.
- Added `MIGRATION_EXCEPTIONS_REPORT.md` generation to expose accepted migration exceptions.

## Legal Status Summary

- High-risk sources remain metadata-only.
- Approved legal sidecars: 0.
- Verified source-backed claims: 0.
- High-risk body extraction: disabled.
- Embeddings from high-risk sources: not generated.
- `user_provided_file` does not imply legal AI-processing permission.

## Validation Summary

- Import errors: 0.
- Import warnings: 0.
- Validator P0 issues: 0.
- Validator warnings: 0.
- Accepted migration exceptions: 0.
- Source governance audit: PASS.

## Next Action

Next recommended work:

```text
review-structure-usability-final
```

## Do-Not-Redo List

- Do not rebuild BookOS.
- Do not add login, user auth, reading sessions, personal library, forum CRUD, quote book, or daily sentence product features.
- Do not parse high-risk PDF/EPUB body text.
- Do not summarize copyrighted book chapters.
- Do not generate embeddings from quarantined files.
- Do not promote draft cards, lenses, lessons, workflows, exercises, or claims to verified without evidence.
