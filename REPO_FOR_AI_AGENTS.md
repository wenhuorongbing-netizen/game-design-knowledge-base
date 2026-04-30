# Repo For AI Agents

Date: 2026-04-30

## Purpose

This file tells AI agents how to use the repository without loading unnecessary files or violating source governance.

## Read First

For normal hands-on tasks, read:

1. [USE_THIS_FIRST.md](USE_THIS_FIRST.md)
2. [USE_CASE_HUB.md](USE_CASE_HUB.md)
3. [AI_CONTEXT_PACKS.md](AI_CONTEXT_PACKS.md)
4. the one selected file under [context_packs/](context_packs/README.md)
5. the one selected prompt under [hands_on_prompts/](hands_on_prompts/README.md)
6. [AI_UNCERTAINTY_AND_SOURCE_RULES.md](AI_UNCERTAINTY_AND_SOURCE_RULES.md)

Do not load the whole repository unless the user explicitly asks for repository-wide QA or maintenance.

## What Not To Read Unless Needed

Do not read these by default:

| Area | Why not by default |
|---|---|
| `AI_MASTER_BENCHMARK_*` | Benchmark internals are for evaluating AI behavior, not normal design help. |
| `kb/11_import_export/export/` | Generated machine output, not a human reading surface. |
| `kb/11_import_export/schemas/` | Needed for schema maintenance only. |
| `kb/13_evidence/` internals | Needed only for evidence intake or source-governance tasks. |
| `docs/deprecated/` | Historical material, not active instruction. |
| `kb-tools/` | Deprecated legacy tools. |
| `50-game-design-masters-kb/` | Legacy snapshot, not canonical. |
| `_private_sources/` | Private/local quarantine; never parse body text. |

## Use Cases

Route by user intent:

| User intent | Use case file | Context pack | Prompt family |
|---|---|---|---|
| vague game idea | [USE_CASES/vague_game_idea.md](USE_CASES/vague_game_idea.md) | [CP02](context_packs/CP02_game_idea_review.md) | P01-P04 |
| learn game design | [USE_CASES/learn_game_design.md](USE_CASES/learn_game_design.md) | [CP03](context_packs/CP03_learning_coach.md) | P12-P13 |
| design review | [USE_CASES/design_review.md](USE_CASES/design_review.md) | [CP04](context_packs/CP04_design_audit.md) | P04-P09, P15 |
| prototype or playtest | [USE_CASES/design_review.md](USE_CASES/design_review.md) | [CP05](context_packs/CP05_prototype_and_playtest.md) | P10-P11 |
| source or claim safety | [USE_CASES/source_safety_check.md](USE_CASES/source_safety_check.md) | [CP06](context_packs/CP06_source_safety_and_claim_check.md) | P14 |

## Source Governance Rules For Agents

Never:

- parse private or high-risk source body text;
- summarize copyrighted or private chapters;
- extract quotes from source files;
- invent EvidenceRefs;
- invent legal sidecars;
- invent user notes;
- invent manual quotes;
- invent project facts;
- invent playtest observations;
- claim verified status without legal evidence and an `evidence_ref`.

Always:

- label assumptions;
- label `source_basis`;
- label confidence;
- distinguish draft scaffolding from verified evidence;
- ask at most three high-value missing-input questions unless the user asks for a full intake.

## Output Rule

Produce a concrete artifact, not generic advice.

Examples:

- concept memo;
- core experience statement;
- decision matrix;
- systems loop map;
- economy risk table;
- game feel audit;
- UI feedback checklist;
- prototype plan;
- playtest plan;
- reading plan;
- unsupported claim check.

## If The User Asks To Load Everything

Prefer the smallest relevant context pack and explain why.

If the user insists on a full repository review, use [REPO_FOR_MAINTAINERS.md](REPO_FOR_MAINTAINERS.md) and [FILE_PRIORITY_INDEX.md](FILE_PRIORITY_INDEX.md) to separate canonical, generated, benchmark, audit, schema, legacy, and ignore-first material.

