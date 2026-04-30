# File Priority Index V2

Date: 2026-04-30

## Purpose

This index classifies important files by progressive-disclosure level.

Use it to decide what to open, what to ignore, and what not to edit manually.

## Level Summary

| Level | Open by default? | Audience |
|---|---|---|
| 0 | yes | first-time human user |
| 1 | yes | normal user |
| 2 | after choosing task | normal user |
| 3 | when using AI | user and AI agent |
| 4 | only when needed | advanced AI/runtime work |
| 5 | maintainer/auditor only | maintainers |
| 6 | no manual reading/editing | tools |

## Level 0 And 1: First Use

| Path | Level | Classification | Use when |
|---|---:|---|---|
| `USE_THIS_FIRST.md` | 0 | start_here | You need one page only. |
| `10_MINUTE_QUICKSTART.md` | 1 | hands_on | You want immediate value. |
| `TOP_10_FILES_FOR_FIRST_USE.md` | 1 | start_here | You want the smallest file list. |
| `START_PAGE_DECISION_TREE.md` | 1 | start_here | You know your situation and need route. |
| `WHAT_TO_IGNORE_FIRST.md` | 1 | ignore_first | You need to reduce visible scope. |

## Level 2: Use Cases

| Path | Level | Classification | Use when |
|---|---:|---|---|
| `USE_CASE_HUB.md` | 2 | use_case | You need the route selector. |
| `USE_CASES/README.md` | 2 | use_case | You want use-case folder index. |
| `USE_CASES/vague_game_idea.md` | 2 | use_case | You have a rough idea. |
| `USE_CASES/design_review.md` | 2 | use_case | You need critique. |
| `USE_CASES/no_project_start.md` | 2 | use_case | You have no project. |
| `USE_CASES/learn_game_design.md` | 2 | use_case | You want a lesson. |
| `USE_CASES/reading_to_notes.md` | 2 | use_case | You want safe reading notes. |
| `USE_CASES/source_safety_check.md` | 2 | use_case | You need claim safety. |

## Level 3: Context Packs And Prompts

| Path | Level | Classification | Use when |
|---|---:|---|---|
| `AI_CONTEXT_PACKS.md` | 3 | context_pack | Choose minimal context. |
| `context_packs/README.md` | 3 | context_pack | Browse context packs. |
| `context_packs/CP*.md` | 3 | context_pack | Load one task context. |
| `HANDS_ON_PROMPT_LIBRARY.md` | 3 | prompt | Find copy-paste prompt. |
| `hands_on_prompts/README.md` | 3 | prompt | Browse prompt folder. |
| `hands_on_prompts/P*.md` | 3 | prompt | Copy one prompt. |
| `COPY_PASTE_PROMPTS.md` | 3 | prompt | Use compact prompt set. |
| `WORKED_EXAMPLES_README.md` | 3 | hands_on | See output shape. |
| `worked_examples/*.md` | 3 | hands_on | Inspect one synthetic example. |

## Level 4: Runtime And Framework Reference

| Path | Level | Classification | Use when |
|---|---:|---|---|
| `AI_MASTER_RUNTIME_PACK.md` | 4 | runtime | Full runtime behavior. |
| `AI_MASTER_RUNTIME_SAFETY_RULES.md` | 4 | runtime | Source safety rules. |
| `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md` | 4 | runtime | Output formats. |
| `AI_UNCERTAINTY_AND_SOURCE_RULES.md` | 4 | runtime | Source and confidence handling. |
| `MASTER_PROBLEM_SOLVER_INDEX.md` | 4 | runtime | Start from problem. |
| `MASTER_CAPABILITY_MATRIX.md` | 4 | reference | Capability definitions. |
| `MASTER_DOMAIN_MAP.md` | 4 | reference | Domain map. |
| `PROBLEM_TO_LENS_MAP.md` | 4 | reference | Lens routing. |
| `PROBLEM_TO_WORKFLOW_MAP.md` | 4 | reference | Workflow routing. |
| `PROBLEM_TO_OUTPUT_ARTIFACT_MAP.md` | 4 | reference | Artifact routing. |

## Level 5: Maintainer, Governance, Benchmark, Validation, Schemas

| Path | Level | Classification | Use when |
|---|---:|---|---|
| `REPO_FOR_MAINTAINERS.md` | 5 | reference | Maintaining the repo. |
| `KB_REBUILD_INSTRUCTION.md` | 5 | reference | Active rebuild rules. |
| `VALIDATION_REPORT.md` | 5 | audit | Validation status. |
| `SOURCE_GOVERNANCE_AUDIT.md` | 5 | audit | Source safety status. |
| `AI_MASTER_BENCHMARK_*.md` | 5 | benchmark | Evaluating target AI behavior. |
| `kb/13_evidence/` | 5 | reference | Evidence intake/governance. |
| `kb/11_import_export/schemas/` | 5 | schema | Schema maintenance. |
| `tools/` | 5 | tool | Authoritative scripts. |
| `REPO_MAP.md` | 5 | reference | Top-level structure. |
| `STRUCTURE_MAP.md` | 5 | reference | Structure map. |
| `WHAT_NOT_TO_TOUCH.md` | 5 | reference | Edit safety. |

## Level 6: Generated And Internals

| Path | Level | Classification | Rule |
|---|---:|---|---|
| `kb/11_import_export/export/` | 6 | generated | regenerate, do not edit manually |
| `kb/11_import_export/import_report.md` | 6 | generated | regenerate, do not edit manually |
| `VALIDATION_REPORT.json` | 6 | generated | regenerate through validator |
| generated graph/search files | 6 | generated | tools consume these |
| `kb-tools/` | 6 | legacy | do not run unless explicitly enabled |
| `50-game-design-masters-kb/` | 6 | legacy | non-canonical |
| `docs/deprecated/` | 6 | legacy | historical only |
| `_private_sources/` | 6 | ignore_first | do not parse source body text |

## Opening Rule

Open the lowest level that solves the task. Do not move deeper by default.
