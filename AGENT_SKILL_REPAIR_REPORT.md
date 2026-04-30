# Agent Skill Repair Report

Date: 2026-04-30

## Scope

Skill repairs were limited to selected skills directly affected by Smoke Run 001 P1 failures.

## Repairs

| Failure ID | Skill file | Old problem | Change made | Expected improvement | Acceptance criteria |
|---|---|---|---|---|---|
| P1-CST003-001 | `skills/learning_coach/SKILL.md` | The skill said to suggest one next topic or note, which allowed the output to merge next-topic and next-action obligations. | Added explicit `Next Topic` and `Next Action` execution steps, plus a failure mode for merging them. | Learning-coach outputs should expose learning progression and immediate action separately. | A future learning output has visible `Next Topic` and `Next Action` labels. |
| P1-CST007-001 | `skills/claim_safety_check/SKILL.md` | The skill assumed a normal claim-review flow and did not explicitly handle unsafe source-processing requests. | Added request-type detection and required use of the claim-safety refusal variant for unsafe source-processing requests. | Private-source summary or quote requests should be refused safely while still producing a useful artifact. | A future unsafe request has clear boundary, safe alternative, source_basis, confidence, evidence gaps, and next action. |

## Skills Not Changed

All other skills passed Smoke Run 001 without observed skill-instruction failures.

No new skills were added.

