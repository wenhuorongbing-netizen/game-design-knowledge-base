# EX03 - Meaningful Decision Audit

Labels: demo_only, synthetic_example, not_user_evidence, not_project_evidence, not_benchmark_result, not_verified_claim.

## User Input

Each day the player can spend energy on fishing, repairing the lighthouse, or talking to a spirit.

## Prompt Used

[P05_audit_meaningful_decisions.md](../hands_on_prompts/P05_audit_meaningful_decisions.md)

## Example AI Output

| Decision | Information available | Tradeoff | Consequence | Reversibility | Fake-choice risk | Improvement |
|---|---|---|---|---|---|---|
| fish | food level and weather hint | food security now versus less repair progress | tomorrow starts with more safety margin | partially reversible | fake if food is always abundant | add weather-driven shortages or recipe needs |
| repair | visible broken subsystem | world improvement versus fewer social actions | lighthouse function changes navigation or safety | low reversibility if repair order matters | fake if all repairs unlock the same result | make repair order change routes or night hazards |
| talk to spirit | request or relationship clue | emotional insight versus material progress | trust, hint, or ritual option changes | partially reversible | fake if dialogue only adds flavor | connect trust to one future repair or route |

## Why This Output Is Useful

It tests whether each option has information, tradeoff, consequence, and a reason to choose differently across situations.

## Assumptions

- Energy is limited.
- The three actions compete for the same daily resource.
- Consequences can persist into future days.

## Source_basis

unsupported_draft

## Confidence

weak

## Evidence Gaps

- No rules values.
- No prototype.
- No player observation.
- No evidence that players perceive the tradeoffs.

## What This Example Does Not Prove

It does not prove these are meaningful choices in practice. It only identifies design conditions that could make them meaningful.

## How User Can Adapt It

List your real options, available information, costs, consequences, and reversibility. Then ask the AI to find fake-choice risks.

