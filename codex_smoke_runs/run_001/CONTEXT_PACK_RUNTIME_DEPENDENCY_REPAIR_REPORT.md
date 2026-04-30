# Context Pack Runtime Dependency Repair Report

Date: 2026-05-01

## Scope

This repair addresses `P2-CTX-001` from Smoke Run 001.

## Failure Addressed

| Failure ID | Observation | Repair |
|---|---|---|
| P2-CTX-001 | Context packs listed human prompt files in `Files To Load`, which made normal agent runtime appear dependent on prompt-copy workflows. | Context packs now separate `Agent Runtime Files To Load` from `Optional Human Prompt References`. |

## Files Changed

- `context_packs/CP01_minimal_general_use.md`
- `context_packs/CP02_game_idea_review.md`
- `context_packs/CP03_learning_coach.md`
- `context_packs/CP04_design_audit.md`
- `context_packs/CP05_prototype_and_playtest.md`
- `context_packs/CP06_source_safety_and_claim_check.md`
- `context_packs/CP07_runtime_full.md`
- `context_packs/README.md`
- `AGENT_CONTEXT_LOADING_PROTOCOL.md`

## Repair Details

- `hands_on_prompts/` references were moved out of runtime load lists.
- `HANDS_ON_PROMPT_LIBRARY.md` and `HANDS_ON_PROMPT_SELECTION_GUIDE.md` are now optional human references where relevant.
- Max recommended context sizes now describe agent-runtime files first.
- `AGENT_CONTEXT_LOADING_PROTOCOL.md` now states that normal Codex runtime should not load human prompt references unless explicitly requested.

## Acceptance Criteria

| Criterion | Result |
|---|---|
| Context packs distinguish agent runtime files from human prompt references | PASS |
| Normal runtime no longer appears to depend on `hands_on_prompts/` | PASS |
| Source-safety rules preserved | PASS |
| No raw smoke output rewritten | PASS |

## Verification Commands

- `rg -n "Files To Load|hands_on_prompts|Optional Human Prompt References|HANDS_ON_PROMPT" context_packs AGENT_CONTEXT_LOADING_PROTOCOL.md`
- `npm run agent:runtime-check`
- `npm run kb:check`

## Remaining Gaps

- P2-AUTO-001 remains open: no automated smoke-output section checker yet.
- P3-CST008-001 remains open: fake-playtest routing boundary remains a polish item.
