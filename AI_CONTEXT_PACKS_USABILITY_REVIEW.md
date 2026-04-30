# AI Context Packs Usability Review

Date: 2026-04-30

## Verdict

Verdict: ACCEPTED_FOR_HANDS_ON_RUNTIME_USE.

The context-pack layer reduces cognitive load by giving users and AI agents a small set of task-specific files to load instead of the full repository.

This verdict does not mean the AI behavior is benchmark-proven. It means the context packs are clear, source-safe, and usable as runtime input selectors.

## Files Reviewed

| File | Status | Notes |
|---|---|---|
| AI_CONTEXT_PACKS.md | pass | Provides default recommendation, pack index, use-case mapping, exclusions, and safety defaults. |
| DO_NOT_LOAD_EVERYTHING.md | pass | Explains why full-repo loading is unnecessary and risky for normal use. |
| context_packs/README.md | pass | Folder purpose and pack index are clear. |
| context_packs/CP01_minimal_general_use.md | pass | Correct default for most first-use cases. |
| context_packs/CP02_game_idea_review.md | pass | Supports vague ideas and core experience work. |
| context_packs/CP03_learning_coach.md | pass | Supports learning without source-body summaries. |
| context_packs/CP04_design_audit.md | pass | Supports critique and diagnosis using prompt routing. |
| context_packs/CP05_prototype_and_playtest.md | pass | Plans prototype/playtest work without inventing data. |
| context_packs/CP06_source_safety_and_claim_check.md | pass | Correctly routes claims, citations, quotes, summaries, and verification requests to safety handling. |
| context_packs/CP07_runtime_full.md | pass | Provides full runtime context with a warning not to use it by default. |

## Required Section Audit

| Required section | Result |
|---|---|
| when to use | pass |
| files to load | pass |
| files not needed | pass |
| max recommended context size | pass |
| required safety rules | pass |
| recommended prompt | pass |
| expected output artifact | pass |

## Cognitive Load Review

| Question | Result |
|---|---|
| Does the user know the default pack? | yes, CP01 is explicitly recommended. |
| Does the user know not to load the whole repo? | yes, AI_CONTEXT_PACKS.md and DO_NOT_LOAD_EVERYTHING.md state this clearly. |
| Are generated exports excluded from normal use? | yes. |
| Are benchmark internals excluded from normal use? | yes. |
| Are schemas excluded from casual use? | yes. |
| Are evidence folders excluded unless needed? | yes. |
| Can a user map use case to pack quickly? | yes, the index and use-case mapping provide direct routes. |

## Source Safety Review

| Requirement | Result |
|---|---|
| private/high-risk source bodies are excluded | pass |
| fake evidence is prohibited | pass |
| fake citations are prohibited | pass |
| fake project/playtest facts are prohibited | pass |
| verified claims require EvidenceRef and review | pass |
| source_basis and confidence labeling are required | pass |
| CP06 handles source-sensitive requests | pass |

## Remaining Risks

| Risk | Severity | Mitigation |
|---|---|---|
| Users may still choose CP07 too early. | P2 | CP07 says not to use it by default; DO_NOT_LOAD_EVERYTHING.md reinforces starting small. |
| The absent USE_CASE_HUB.md could confuse future prompts that reference it. | P2 | Current packs use existing USE_CASES/README.md and prompt indexes; do not create a duplicate hub unless needed. |
| Users may ignore max context size guidance. | P2 | Context pack checklist requires each pack to keep explicit size guidance. |

## Acceptance Criteria

| Criterion | Status |
|---|---|
| Minimal context packs exist. | pass |
| User no longer needs to load the whole repo. | pass |
| Each major use case maps to a context pack. | pass |
| Source safety is preserved. | pass |
| Validation passes. | pass |

## Next Exact Prompt

`run-context-pack-smoke-test`

