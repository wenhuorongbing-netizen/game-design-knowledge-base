# Worked Examples Usability Review

Date: 2026-04-30

## Verdict

Verdict: ACCEPTED_FOR_HANDS_ON_DEMO_USE.

The worked examples are usable for first-time users because they show concrete input, prompt selection, output shape, assumptions, source_basis, confidence, evidence gaps, and adaptation guidance.

This verdict does not mean the examples are real evidence, real projects, real benchmark outputs, or verified claims.

## Files Reviewed

| File | Status | Notes |
|---|---|---|
| WORKED_EXAMPLES_README.md | pass | Clear safety framing and index. |
| worked_examples/EX01_vague_game_idea_review.md | pass | Shows rough idea to concept memo. |
| worked_examples/EX02_core_experience_statement.md | pass | Shows premise to core experience target. |
| worked_examples/EX03_meaningful_decision_audit.md | pass | Shows decision matrix structure. |
| worked_examples/EX04_systems_map_example.md | pass | Shows systems roles, sources, sinks, and feedback risks. |
| worked_examples/EX05_game_feel_audit_example.md | pass | Shows feel complaint to tuning questions. |
| worked_examples/EX06_ui_feedback_redesign.md | pass | Shows feedback redesign table. |
| worked_examples/EX07_narrative_mechanic_alignment.md | pass | Shows story promise to mechanic alignment. |
| worked_examples/EX08_prototype_plan_example.md | pass | Shows prototype question and scope control. |
| worked_examples/EX09_playtest_plan_example.md | pass | Shows plan only, no invented playtest result. |
| worked_examples/EX10_unsupported_claim_check.md | pass | Shows safe handling of unsupported source claims. |

## Safety Audit

| Requirement | Result |
|---|---|
| Every example has safety labels. | pass |
| Every example marks itself synthetic. | pass |
| No example claims to be user evidence. | pass |
| No example claims to be project evidence. | pass |
| No example claims to be a benchmark result. | pass |
| No example claims verified status. | pass |
| No example cites private books. | pass |
| No example summarizes source chapters. | pass |
| No example extracts quotes. | pass |

## Required Section Audit

| Required section | Result |
|---|---|
| user input | pass |
| prompt used | pass |
| example AI output | pass |
| why this output is useful | pass |
| assumptions | pass |
| source_basis | pass |
| confidence | pass |
| evidence gaps | pass |
| what this example does not prove | pass |
| how user can adapt it | pass |

## First-Time User Clarity

| Question | Answer |
|---|---|
| Can the user see where to start? | yes, WORKED_EXAMPLES_README.md provides an index. |
| Can the user copy the pattern without knowing the repo? | yes, each example links to one prompt and shows output shape. |
| Can the user distinguish demo from evidence? | yes, labels and evidence-gap sections are explicit. |
| Can the user adapt the example? | yes, every example ends with adaptation guidance. |

## Remaining Risks

| Risk | Severity | Mitigation |
|---|---|---|
| User may copy example output as if it were their own design evidence. | P1 | Keep safety labels and "what this example does not prove" sections. |
| User may skip the prompt file and only imitate the example. | P2 | Folder README now points back to the prompt library. |
| Some examples are still longer than a quickstart needs. | P2 | Use USE_THIS_FIRST.md or 10_MINUTE_QUICKSTART.md for shortest path. |

## Acceptance Criteria

| Criterion | Status |
|---|---|
| At least 10 worked examples exist. | pass |
| Examples are clearly synthetic. | pass |
| No example claims verified evidence. | pass |
| No example uses private source body text. | pass |
| Examples are linked from first-use docs. | pass |
| Validation passes. | pass |

## Next Exact Prompt

`run-worked-examples-smoke-test`

