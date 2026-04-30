# Hands-On Prompt Pack Review

Date: 2026-04-30

## Verdict

Prompt pack verdict: ACCEPTED_FOR_HANDS_ON_DRAFT_USE.

The hands-on prompt pack is suitable for non-maintainer use. It provides 15 task-specific prompts, each with source-safety rules, artifact expectations, follow-up prompts, and self-check prompts.

This verdict does not mean a target AI will always obey the prompts. It means the prompt files themselves are usable, consistent, and source-governed.

## Scope Reviewed

| Area | Result |
|---|---|
| prompt count | 15 task prompts plus README and root index |
| required sections | present in all 15 prompt files |
| no triple-backtick fences | pass |
| source-safety rules | present in all 15 prompt files |
| confidence labeling | present in all 15 prompt files |
| assumptions labeling | present in all 15 prompt files |
| no fake evidence rule | present in all 15 prompt files |
| concrete artifact requirement | present in all 15 prompt files |
| follow-up prompt | present in all 15 prompt files |
| self-check prompt | present in all 15 prompt files |

## Required Section Audit

| Prompt | Use Case | Copy-Paste Prompt | Replace Guidance | Expected Output | Output Format | Source Rules | No Fake Evidence | Follow-Up | Self-Check |
|---|---|---|---|---|---|---|---|---|---|
| P01 | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| P02 | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| P03 | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| P04 | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| P05 | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| P06 | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| P07 | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| P08 | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| P09 | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| P10 | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| P11 | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| P12 | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| P13 | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| P14 | pass | pass | pass | pass | pass | pass | pass | pass | pass |
| P15 | pass | pass | pass | pass | pass | pass | pass | pass | pass |

## Strengths

- Prompts are copy-pasteable and do not require repository-internal knowledge.
- Each prompt asks for a concrete artifact instead of generic advice.
- Each prompt blocks fake evidence, fake citations, fake project facts, fake playtests, telemetry invention, and unsupported verification.
- Each prompt requires assumptions, `source_basis`, confidence, evidence gaps, and next action.
- The prompt set covers idea shaping, review, questions, lenses, decisions, systems, economy, game feel, UI, narrative, prototype, playtest, teaching, reading, claim safety, and pitch critique.

## Remaining Risks

| Risk | Severity | Mitigation |
|---|---|---|
| Target AI may ignore safety instructions. | P1 | Use `FIRST_USE_CHECKLIST.md` and future real-output smoke tests. |
| Users may choose an overly broad prompt. | P2 | Use `HANDS_ON_PROMPT_SELECTION_GUIDE.md`. |
| Some outputs may still be generic if user input is thin. | P2 | Prompts allow up to 3 high-value questions and require a concrete artifact. |
| Users may confuse draft artifacts with verified evidence. | P1 | Prompt footers require `source_basis`, confidence, and evidence gaps. |

## Acceptance Criteria

| Criterion | Status |
|---|---|
| Prompt library for hands-on use exists. | pass |
| At least 15 copy-paste prompts exist. | pass |
| Prompts are easy for non-maintainers to use. | pass |
| Prompts preserve source safety. | pass |
| No prompt asks AI to parse private books. | pass |
| No prompt asks AI to invent evidence. | pass |

## Next Exact Prompt

`run-hands-on-prompt-smoke-test`
