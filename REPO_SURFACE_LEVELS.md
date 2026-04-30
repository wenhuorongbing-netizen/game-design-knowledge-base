# Repo Surface Levels

Date: 2026-04-30

## Purpose

This file defines the repository surface levels. Each level answers: "How much of the repo should this user see right now?"

## Level 0: One Page Only

Open:

- `USE_THIS_FIRST.md`

Audience:

- first-time users;
- overwhelmed users;
- users who do not know their task yet.

Do not open:

- anything else until a task is chosen.

## Level 1: First-Use Files

Open:

- `10_MINUTE_QUICKSTART.md`
- `TOP_10_FILES_FOR_FIRST_USE.md`
- `WHAT_TO_IGNORE_FIRST.md`
- `START_PAGE_DECISION_TREE.md`

Audience:

- users who want to get value quickly;
- users who need a tiny map.

## Level 2: Use Case Files

Open:

- `USE_CASE_HUB.md`
- `USE_CASES/README.md`
- one specific file under `USE_CASES/`

Audience:

- users with a situation or problem.

Examples:

- no project;
- vague idea;
- design review;
- learning;
- reading plan;
- claim check.

## Level 3: Context Packs And Prompts

Open:

- `AI_CONTEXT_PACKS.md`
- one file under `context_packs/`
- `HANDS_ON_PROMPT_LIBRARY.md`
- one file under `hands_on_prompts/`
- `WORKED_EXAMPLES_README.md`

Audience:

- users copying prompts;
- AI agents loading minimal context;
- users comparing output shape.

## Level 4: Runtime And Framework Reference

Open only when needed:

- `AI_MASTER_RUNTIME_PACK.md`
- `AI_MASTER_RUNTIME_SAFETY_RULES.md`
- `AI_UNCERTAINTY_AND_SOURCE_RULES.md`
- `MASTER_PROBLEM_SOLVER_INDEX.md`
- `MASTER_CAPABILITY_MATRIX.md`
- `MASTER_DOMAIN_MAP.md`
- `PROBLEM_TO_LENS_MAP.md`
- `PROBLEM_TO_WORKFLOW_MAP.md`

Audience:

- AI runtime designers;
- advanced users;
- prompt maintainers.

## Level 5: Governance, Benchmark, Validation, Schemas

Open only for maintenance, QA, or audit:

- `VALIDATION_REPORT.md`
- `SOURCE_GOVERNANCE_AUDIT.md`
- `KB_REBUILD_INSTRUCTION.md`
- `AI_MASTER_BENCHMARK_*`
- `kb/13_evidence/`
- `kb/11_import_export/schemas/`
- `tools/`
- root audit and acceptance reports.

Audience:

- maintainers;
- source-governance reviewers;
- benchmark evaluators.

## Level 6: Generated Exports And Internals

Do not manually edit:

- `kb/11_import_export/export/`
- generated graph files;
- generated search index files;
- generated validation issue JSON;
- generated import report.

Audience:

- tools;
- import/export pipeline;
- optional portal generation.

## Surface Rule

Normal users should stay in Levels 0 to 3.

AI agents should start at Level 3 and move to Level 4 only if routing or safety requires it.

Maintainers start at Level 5.

Generated internals stay at Level 6.
