# Entity Type Migration Plan

Date: 2026-04-27

## Goal

Reduce structural migration exceptions by adding explicit `entity_type` frontmatter to legacy generated Markdown entity files.

This is a schema-only migration. It must not change knowledge content, evidence status, legal provenance, confidence, or verification state.

## Starting Point

`VALIDATION_REPORT.md` reported:

- accepted exceptions: 477
- missing `entity_type` exceptions: 472
- placeholder README exceptions: 5

## Type Mapping

| Folder | Entity Type | Count |
|---|---|---:|
| `kb/05_cards/concept_cards/` | `ConceptCard` | 109 |
| `kb/05_cards/framework_cards/` | `FrameworkCard` | 15 |
| `kb/05_cards/application_cards/` | `ApplicationCard` | 10 |
| `kb/05_cards/checklist_cards/` | `ChecklistCard` | 15 |
| `kb/05_cards/prompt_cards/` | `PromptCard` | 15 |
| `kb/06_lenses/cards/` | `DesignLens` | 104 |
| `kb/07_lessons/lesson_cards/` | `Lesson` | 84 |
| `kb/08_workflows/packs/` | `WorkflowPack` | 20 |
| `kb/08_workflows/exercises/` | `Exercise` | 85 |
| `kb/08_workflows/prompts/` | `PromptTemplate` | 15 |

## Migration Rule

For each file listed by `VALIDATION_REPORT.json` with rule `missing_entity_type_in_legacy_generated_file`:

1. Parse only the YAML frontmatter block.
2. If `entity_type` already exists, do nothing.
3. Insert the inferred `entity_type` immediately after the primary ID field.
4. Preserve all existing fields, values, ordering outside the insertion point, body text, source basis, confidence, status, related works, and evidence gaps.
5. Do not edit generated JSON exports by hand.

## Acceptance Criteria

- Missing `entity_type` exceptions reduced from 472 to 0.
- Total accepted exceptions reduced by at least 80%.
- No new validation errors.
- No source governance violations.
- No draft content promoted to verified.

## Expected Remaining Exceptions

Only placeholder README exceptions may remain unless the validator is later changed to exclude README placeholders from entity-folder migration reports.

## Result

Completed on 2026-04-27.

- Files updated: 472
- Missing `entity_type` exceptions before: 472
- Missing `entity_type` exceptions after: 0
- Total accepted exceptions before: 477
- Total accepted exceptions after: 5
- Remaining exceptions: README placeholders in entity folders
- Validation result: PASS, 0 P0 issues, 0 warnings

## Follow-Up Cleanup: README Placeholder Exceptions

After the entity-type migration, the validation report no longer had missing `entity_type` exceptions. The remaining accepted exceptions were 5 README placeholders in entity scan folders:

- `kb/05_cards/quote_cards/README.md`
- `kb/05_cards/comparison_cards/README.md`
- `kb/05_cards/exercise_cards/README.md`
- `kb/05_cards/anti_pattern_cards/README.md`
- `kb/05_cards/case_study_cards/README.md`

Cleanup rule:

1. Preserve the placeholder meaning in `kb/05_cards/PLACEHOLDER_CARD_FOLDERS.md`.
2. Remove README files from entity scan folders.
3. Do not create new card entities.
4. Do not change `source_basis`, `confidence`, `status`, related works, or evidence gaps on any entity.
5. Regenerate exports and validation reports through the authoritative pipeline.

Expected result:

- accepted exceptions: 0
- missing `entity_type` exceptions: 0
- validation errors: 0
- warnings: 0
