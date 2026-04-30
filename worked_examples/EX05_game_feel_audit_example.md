# EX05 - Game Feel Audit Example

Labels: demo_only, synthetic_example, not_user_evidence, not_project_evidence, not_benchmark_result, not_verified_claim.

## User Input

My character feels floaty in a 2D platformer. Jumping feels delayed and landing feels soft.

## Prompt Used

[P07_audit_game_feel_and_feedback.md](../hands_on_prompts/P07_audit_game_feel_and_feedback.md)

## Example AI Output

| Feel issue | Possible cause | What to inspect | Draft adjustment | Test question |
|---|---|---|---|---|
| jump feels delayed | input buffering missing or startup delay too long | input-to-liftoff frames | add jump buffer and reduce startup delay | Does jump start feel immediate? |
| floaty airtime | gravity too low or apex hang too long | rise time, fall time, apex duration | increase fall gravity or reduce apex hang | Does landing timing feel predictable? |
| soft landing | weak impact feedback | animation, sound, particles, camera impulse | add landing squash, sound, dust, small screen response | Does landing read as physical contact? |
| poor control recovery | coyote time or air control mismatch | time after ledge, horizontal acceleration | tune coyote time and air acceleration separately | Does near-miss recovery feel fair? |

## Why This Output Is Useful

It converts a subjective feel complaint into measurable tuning areas and prototype questions.

## Assumptions

- The game is a 2D action platformer.
- The user can adjust movement timing and feedback.
- No existing telemetry is available.

## Source_basis

unsupported_draft

## Confidence

weak

## Evidence Gaps

- No movement values.
- No footage.
- No controller latency data.
- No playtest observations.
- No source-backed EvidenceRefs.

## What This Example Does Not Prove

It does not prove the cause of floatiness. It lists plausible inspection points and tests.

## How User Can Adapt It

Provide jump height, rise time, fall time, input buffer, coyote time, and a short clip description. Ask the AI for a tuning checklist.

