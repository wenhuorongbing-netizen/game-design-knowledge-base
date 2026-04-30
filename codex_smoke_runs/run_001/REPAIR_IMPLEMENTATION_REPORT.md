# Repair Implementation Report For Smoke Run 001

Date: 2026-04-30

## Scope

This report documents runtime repairs traced to observed Smoke Run 001 failures.

Repairs were limited to P1 runtime-reliability findings from `REPAIR_BACKLOG.md` and `P1_REPAIR_PLAN.md`.

## Repairs Implemented

| Failure ID | File changed | Old problem | Change made | Expected improvement | Acceptance criteria |
|---|---|---|---|---|---|
| P1-CST003-001 | `agent_output_contracts/learning_plan.md` | The learning output could satisfy `next action` while missing explicit `next topic`. | Added a required output-label rule distinguishing `next topic` from `next action`. | Future learning outputs should expose both the follow-on learning topic and immediate user action. | Future CST003-style output has both labels. |
| P1-CST003-001 | `skills/learning_coach/SKILL.md` | Skill execution protocol only said to suggest one next topic or note. | Added explicit `Next Topic` and `Next Action` steps, plus failure and acceptance criteria. | The selected skill now directly instructs Codex to satisfy the repaired contract. | Learning coach output contains visible `Next Topic` and `Next Action`. |
| P1-CST007-001 | `agent_output_contracts/claim_safety_report.md` | Contract assumed normal claim review and did not fit unsafe source-processing refusal. | Added unsafe source-processing refusal required sections and strengthened source/confidence rule. | Future private-source summary requests can be safely refused while still matching the contract. | Refusal output includes blocked operation, safety boundary, safer alternative, evidence gaps, and next action. |
| P1-CST007-001 | `skills/claim_safety_check/SKILL.md` | Skill protocol did not explicitly choose between normal claim review and unsafe source-processing refusal. | Added request-type detection and refusal-variant usage to the execution protocol. | The skill now routes unsafe source processing through the correct contract variant. | Claim safety output makes claim status or unsafe-request boundary clear. |
| P1-CST003-001; P1-CST007-001 | `AGENT_OUTPUT_CONTRACTS.md` | Universal failure conditions did not explicitly mention missing contract-specific required sections. | Added missing contract-specific required sections as a failure condition. | Future reviews can flag section gaps consistently. | Output contract compliance review treats omitted contract sections as failures. |

## Repairs Not Implemented

| Failure ID | Reason |
|---|---|
| P2-CTX-001 | Context pack cleanup is a P2 quality repair and `context_packs/` was not an allowed target in this prompt. |
| P2-AUTO-001 | Smoke-output automation should wait until contract shapes stabilize. |
| P3-CST008-001 | Router ambiguity was a watch item, not a Smoke Run 001 failure. |

## Source Safety Result

Source-safety rules were preserved and strengthened.

No repair authorizes private source parsing, chapter summarization, quote extraction, invented EvidenceRefs, or verified claims without evidence.

## Validation Commands

- `npm run agent:check`
- `npm run kb:export`
- `npm run kb:validate`
- `npm run kb:audit`

