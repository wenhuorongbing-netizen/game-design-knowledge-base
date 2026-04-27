# TODO

## P0 Contradiction Repair

- [x] Keep active root free of BookOS rebuild instructions.
- [x] Keep deprecated BookOS material only under `docs/deprecated/`.
- [x] Harden user-file ingest defaults to `pending_review` / `allowed_metadata_only`.
- [x] Quarantine high-risk user files as `metadata_only_quarantined`.
- [x] Ensure `user_provided_file` does not imply legal AI-processing permission.
- [x] Guard legacy `kb-tools` entry scripts behind `ALLOW_LEGACY_KB_TOOLS=true`.
- [x] Document `/tools` as authoritative and `/kb-tools` as legacy.
- [x] Generate `MIGRATION_EXCEPTIONS_REPORT.md`.
- [x] Separate P0 safety pass from structural perfection.
- [x] Replace deprecated BookOS instruction body with a stub-only warning.
- [x] Recheck P0 contradiction list after structural migration.
- [x] Confirm root `rebuild_instruction.md` is absent in the current local repository state.
- [x] Add validator failure for active root direction-drift instructions.
- [x] Add validator failure for report contradictions around `rebuild_instruction.md` state and accepted-exception counts.
- [x] Regenerate validation and migration reports so accepted exceptions are consistently 0.

## Remaining P1/P2 Work

- [x] Create role-based navigation under `kb/navigation/`.
- [x] Create root `START_HERE.md`.
- [x] Create first-time user repository map and usage guides.
- [x] Create root `WHAT_NOT_TO_TOUCH.md` and `MAINTAINER_CHECKLIST.md`.
- [x] Create KB-local `START_HERE.md`, `INDEX.md`, `LEARNING_PATHS.md`, and `DESIGNER_WORKFLOWS.md`.
- [x] Create reversible structure simplification plan.
- [x] Add folder-level README markers for canonical/generated/tool/optional/legacy/deprecated areas.
- [x] Mark generated exports and legacy folders clearly.
- [x] Add project-specific navigation after ProjectOverlay records exist.
- [ ] Add verified-source reading routes after legal sidecars or open/legal notes exist.
- [ ] Add navigation for quote, comparison, anti-pattern, and case-study cards after those folders contain real entities.
- [x] Add explicit `entity_type` frontmatter to legacy generated Markdown entity files.
- [x] Resolve remaining README placeholder exceptions listed in `MIGRATION_EXCEPTIONS_REPORT.md`.
- [ ] Add legal sidecars or lawful replacements for priority works.
- [ ] Attach user notes to selected dossiers.
- [ ] Promote selected claims only after evidence refs exist.
- [x] Implement ProjectOverlay draft scaffold and sample overlay.
- [x] Add PlaytestLog template and sample draft log.
- [x] Add hard quarantine marker for legacy `50-game-design-masters-kb`.
- [x] Move local private PDF/EPUB source files into `_private_sources/`.

## Next Exact Prompt

Evidence intake is allowed only after the truth-alignment validation remains PASS. Do not parse high-risk source bodies.

```text
build-evidence-intake-phase-1
```
