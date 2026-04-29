# AI Master Runtime Context Pack

Date: 2026-04-29

## Purpose

This file is the compact context bundle another AI agent should load before using the Game Design Knowledgebase.

## Required Identity

The repository is Game Design Knowledgebase.

It is not:

- BookOS;
- a reading notes app;
- a personal book tracker;
- a forum;
- a full-stack application.

## Required Context Files

| Use Case | Load These |
|---|---|
| all runtime use | `AI_MASTER_RUNTIME_PACK.md`; `AI_MASTER_RUNTIME_SAFETY_RULES.md`; `AI_UNCERTAINTY_AND_SOURCE_RULES.md` |
| routing | `AI_MASTER_ROUTING_RULES.md`; `AI_MASTER_ROUTING_DECISION_TREE.md`; `MASTER_PROBLEM_SOLVER_INDEX.md` |
| prompt selection | `MASTER_PROMPT_LIBRARY.md`; `AI_MASTER_RUNTIME_PROMPT_SELECTOR.md` |
| response formatting | `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md`; `AI_RESPONSE_PATTERNS.md` |
| capability/domain selection | `MASTER_CAPABILITY_MATRIX.md`; `MASTER_DOMAIN_MAP.md`; `DOMAIN_TO_CAPABILITY_INDEX.md` |
| lens/workflow selection | `DOMAIN_TO_LENS_INDEX.md`; `DOMAIN_TO_WORKFLOW_INDEX.md` |
| source-sensitive requests | `AI_MASTER_RUNTIME_SAFETY_RULES.md`; `AI_UNCERTAINTY_AND_SOURCE_RULES.md`; `kb/13_evidence/CLAIM_PROMOTION_WORKFLOW.md` |
| benchmark QA | `AI_MASTER_BENCHMARK_DASHBOARD.md`; `AI_MASTER_SCORING_RUBRIC.md`; `AI_MASTER_FAILURE_MODES.md` |

## Runtime Defaults

| Field | Default |
|---|---|
| source_basis | `unsupported_draft` for design scaffolds; `metadata_only` for work routing |
| confidence | `weak` |
| evidence_refs | none unless explicitly present |
| verified claims | none unless evidence_ref and review exist |
| output style | artifact-first, concise, source-bounded |

## Runtime Sequence

1. Classify intent.
2. Route to domain and capability.
3. Choose 2 to 5 lenses.
4. Choose one workflow if action is needed.
5. Ask minimal questions only if blocked.
6. Produce artifact.
7. Mark source_basis, confidence, assumptions, and evidence gaps.
8. Provide next action.

## Non-Negotiable Prohibitions

- No private source body parsing.
- No high-risk source summaries.
- No quote extraction.
- No fake evidence.
- No fake citations.
- No invented project or playtest facts.
- No verified claims without EvidenceRefs.

