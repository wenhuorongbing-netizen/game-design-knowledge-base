# Master Framework Gap Backlog

Date: 2026-04-29

## Purpose

This backlog lists remaining gaps after Master Framework Phase acceptance. These are not P0 blockers.

## P1 Gaps

| Gap ID | Severity | Gap | Affected Files | Required Fix | Acceptance Criteria |
|---|---|---|---|---|---|
| MF-P1-001 | P1 | AI benchmark has not been run against actual model outputs. | `AI_MASTER_EVALUATION_BENCHMARK.md`; `AI_MASTER_TEST_CASES.md` | Run smoke test set and score responses. | At least 15 benchmark cases scored with no P0 failures. |
| MF-P1-002 | P1 | Prompt templates are documentation templates, not structured PromptTemplate entities. | `MASTER_PROMPT_LIBRARY.md`; `prompts/master_designer/` | Optionally convert prompt templates into schema-valid KB entities. | Prompts appear in export/search with `source_basis` and `confidence`. |
| MF-P1-003 | P1 | Verified source-backed masterclass remains blocked. | Evidence folders; source registry | User supplies legal sidecars and manual notes. | First lawful notes create EvidenceRefs without unsafe source use. |
| MF-P1-004 | P1 | Learning path is not yet connected to progress tracking. | Learning path docs | Keep as documentation unless a future app layer is explicitly requested. | No app drift; optional static checklist only. |
| MF-P1-005 | P1 | Some domains have stronger structural coverage than evidence coverage. | `MASTER_DOMAIN_MAP.md`; `EVIDENCE_WEIGHTED_COVERAGE_MATRIX.md` | Add user notes by selected domain. | Evidence-weighted coverage improves without fake verification. |

## P2 Improvements

| Gap ID | Severity | Improvement | Benefit |
|---|---|---|---|
| MF-P2-001 | P2 | Add an artifact template library for outputs such as decision matrix, system map, pitch memo, and playtest plan. | Makes AI outputs more consistent. |
| MF-P2-002 | P2 | Add a benchmark results log. | Makes AI readiness measurable over time. |
| MF-P2-003 | P2 | Add a master prompt router index. | Helps map user problems to prompt templates faster. |
| MF-P2-004 | P2 | Add examples using fictional toy problems. | Helps users learn without real project evidence. |
| MF-P2-005 | P2 | Add source-safe glossary of confidence labels for learners. | Makes source governance easier to understand. |

## User Evidence Dependencies

| Dependency | Why It Matters | Required User Action |
|---|---|---|
| Legal sidecars | Required before any private/high-risk source body can support stronger claims. | Provide lawful access and processing permission per sidecar template. |
| Manual reading notes | Safest way to upgrade draft concepts and framework cards. | Read lawful copies and write notes in the user's own words. |
| Manual quotes | Optional; only short lawful user-provided quotes. | Provide quote text manually with location and permission status. |
| Real project context | Required for ProjectOverlay records. | Provide project name, design problem, intended experience, and current state. |
| Real playtest data | Required for PlaytestLog records. | Provide observed facts, quotes if any, interpretations, and decisions. |

## Current Blockers

No P0 blockers remain for the draft/source-governed Master Framework.

The only blocker for the verified masterclass target is missing user/legal evidence.

