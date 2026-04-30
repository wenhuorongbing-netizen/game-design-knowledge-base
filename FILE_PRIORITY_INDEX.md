# File Priority Index

Date: 2026-04-30

## Purpose

This index classifies important files and folders by how a human or AI agent should treat them.

Allowed classifications:

- `start_here`
- `hands_on`
- `prompt`
- `use_case`
- `context_pack`
- `runtime`
- `reference`
- `audit`
- `benchmark`
- `schema`
- `generated`
- `legacy`
- `ignore_first`

## Normal-Use Priority

| Path | Classification | Priority | Use when |
|---|---|---|---|
| `README.md` | start_here | P0 | You need repository identity and main links. |
| `USE_THIS_FIRST.md` | start_here | P0 | You need the shortest practical first-use guide. |
| `START_HERE.md` | start_here | P1 | You want the older general start page. |
| `HANDS_ON_START_HERE.md` | hands_on | P0 | You want the hands-on layer. |
| `10_MINUTE_QUICKSTART.md` | hands_on | P0 | You want immediate use. |
| `30_MINUTE_GUIDED_TOUR.md` | hands_on | P1 | You want a slower guided path. |
| `USE_CASE_HUB.md` | use_case | P0 | You want to choose a route by user situation. |
| `USE_CASES/README.md` | use_case | P1 | You want the use-case folder index. |
| `USE_CASES/*.md` | use_case | P1 | You need a specific use-case route. |
| `HANDS_ON_PROMPT_LIBRARY.md` | prompt | P0 | You want copy-paste prompts. |
| `hands_on_prompts/README.md` | prompt | P0 | You want the prompt folder index. |
| `hands_on_prompts/P*.md` | prompt | P1 | You need one task-specific prompt. |
| `COPY_PASTE_PROMPTS.md` | prompt | P1 | You want a compact prompt set. |
| `HANDS_ON_PROMPT_SELECTION_GUIDE.md` | prompt | P1 | You are unsure which prompt to choose. |
| `AI_CONTEXT_PACKS.md` | context_pack | P0 | You need the smallest useful AI context. |
| `context_packs/README.md` | context_pack | P0 | You need the context pack index. |
| `context_packs/CP*.md` | context_pack | P1 | You need task-specific runtime context. |
| `AI_CONTEXT_MINIMUM.md` | context_pack | P0 | You need minimal safe context. |
| `AI_CONTEXT_RECOMMENDED.md` | context_pack | P1 | You need richer but still bounded context. |
| `WORKED_EXAMPLES_README.md` | hands_on | P0 | You want synthetic examples of expected outputs. |
| `worked_examples/*.md` | hands_on | P1 | You need one example output shape. |
| `NO_PROJECT_START_HERE.md` | hands_on | P0 | You have no active game project. |
| `NO_PROJECT_7_DAY_HANDS_ON_PLAN.md` | hands_on | P1 | You want a one-week practice path. |
| `NO_PROJECT_DAILY_EXERCISES.md` | hands_on | P1 | You want daily exercises. |

## Runtime And Master Framework

| Path | Classification | Priority | Use when |
|---|---|---|---|
| `AI_MASTER_RUNTIME_PACK.md` | runtime | P0 | You need the full AI runtime behavior guide. |
| `AI_MASTER_RUNTIME_START_HERE.md` | runtime | P1 | You need runtime onboarding. |
| `AI_MASTER_RUNTIME_SAFETY_RULES.md` | runtime | P0 | You need source-safety rules. |
| `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md` | runtime | P1 | You need output formats. |
| `AI_MASTER_RUNTIME_PROMPT_SELECTOR.md` | runtime | P1 | You need prompt-routing support. |
| `AI_UNCERTAINTY_AND_SOURCE_RULES.md` | runtime | P0 | You need confidence and source handling. |
| `MASTER_PROBLEM_SOLVER_INDEX.md` | runtime | P0 | You want to start from a design problem. |
| `MASTER_CAPABILITY_MATRIX.md` | reference | P1 | You need AI capability definitions. |
| `MASTER_DOMAIN_MAP.md` | reference | P1 | You need the domain map. |
| `PROBLEM_TO_LENS_MAP.md` | reference | P1 | You need lens routing. |
| `PROBLEM_TO_WORKFLOW_MAP.md` | reference | P1 | You need workflow routing. |
| `PROBLEM_TO_OUTPUT_ARTIFACT_MAP.md` | reference | P1 | You need artifact routing. |

## Learning And Reading

| Path | Classification | Priority | Use when |
|---|---|---|---|
| `MASTER_LEARNING_PATH.md` | reference | P1 | You need the capability-based learning path. |
| `90_DAY_GAME_DESIGN_MASTER_PLAN.md` | reference | P2 | You need a long study plan. |
| `BOOK_READING_SEQUENCE.md` | reference | P1 | You need book ordering. |
| `USER_READING_NOTE_GUIDE.md` | reference | P1 | You are writing user-authored notes. |
| `BOOK_SPECIFIC_NOTE_PROMPTS.md` | reference | P1 | You need safe note prompts for a work. |
| `READING_TO_KB_PIPELINE.md` | reference | P1 | You are turning user notes into KB upgrades. |

## Maintainer And Structure

| Path | Classification | Priority | Use when |
|---|---|---|---|
| `REPO_FOR_HUMANS.md` | start_here | P0 | You need the simplified human map. |
| `REPO_FOR_AI_AGENTS.md` | start_here | P0 | An AI agent needs loading rules. |
| `REPO_FOR_MAINTAINERS.md` | reference | P0 | You are maintaining the repo. |
| `TOP_20_FILES_TO_KNOW.md` | start_here | P0 | You need the small file list. |
| `EVERYTHING_ELSE_IS_REFERENCE.md` | ignore_first | P0 | You need permission to ignore most files. |
| `FILE_PRIORITY_INDEX.md` | reference | P0 | You need file classification. |
| `REPO_MAP.md` | reference | P1 | You need top-level folder roles. |
| `STRUCTURE_MAP.md` | reference | P1 | You need visual structure. |
| `WHAT_NOT_TO_TOUCH.md` | reference | P0 | You need editing safety rules. |
| `WHAT_TO_IGNORE_FIRST.md` | ignore_first | P0 | You need first-use ignore guidance. |
| `DO_NOT_LOAD_EVERYTHING.md` | ignore_first | P0 | You need context-loading discipline. |
| `MAINTAINER_CHECKLIST.md` | reference | P1 | You are performing maintenance. |

## Audit, Benchmark, Schema, Generated, Legacy

| Path | Classification | Priority | Use when |
|---|---|---|---|
| `VALIDATION_REPORT.md` | audit | P1 | You need latest validation status. |
| `SOURCE_GOVERNANCE_AUDIT.md` | audit | P1 | You need source governance status. |
| `KB_ACCEPTANCE_REVIEW.md` | audit | P2 | You need acceptance history. |
| `USABILITY_ACCEPTANCE_REVIEW.md` | audit | P2 | You need usability review history. |
| `HANDS_ON_ACCEPTANCE_TESTS.md` | audit | P2 | You are testing hands-on usability. |
| `AI_MASTER_BENCHMARK_*.md` | benchmark | P2 | You are running or reviewing benchmark work. |
| `AI_MASTER_*_SCORES.md` | benchmark | P2 | You are scoring real target AI outputs. |
| `AI_MASTER_*_RAW_OUTPUTS.md` | benchmark | P2 | You are preserving target AI outputs. |
| `kb/11_import_export/schemas/` | schema | P2 | You are editing entity schemas. |
| `kb/05_cards/card_schema.json` | schema | P2 | You are editing card structure. |
| `kb/06_lenses/lens_schema.json` | schema | P2 | You are editing lens structure. |
| `kb/08_workflows/workflow_pack_schema.json` | schema | P2 | You are editing workflow structure. |
| `kb/11_import_export/export/` | generated | P2 | Tools need exported JSON. |
| `kb/11_import_export/import_report.md` | generated | P2 | You need importer output. |
| `kb-tools/` | legacy | P3 | Only audited legacy maintenance. |
| `50-game-design-masters-kb/` | legacy | P3 | Only audited legacy review. |
| `docs/deprecated/` | legacy | P3 | Only direction-drift review. |
| `_private_sources/` | ignore_first | P3 | Metadata-only source quarantine; do not parse body text. |
| `kb/13_evidence/` | reference | P2 | Evidence intake only. |

## Rule

If a file is classified `generated`, `legacy`, `schema`, `benchmark`, `audit`, or `ignore_first`, do not open it for normal hands-on use unless the task explicitly requires it.

