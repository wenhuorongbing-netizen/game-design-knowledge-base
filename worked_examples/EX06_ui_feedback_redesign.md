# EX06 - UI Feedback Redesign

Labels: demo_only, synthetic_example, not_user_evidence, not_project_evidence, not_benchmark_result, not_verified_claim.

## User Input

Players keep missing when the greenhouse robot is low on battery. The battery icon exists, but people ignore it.

## Prompt Used

[P08_audit_ui_feedback.md](../hands_on_prompts/P08_audit_ui_feedback.md)

## Example AI Output

| Feedback need | Current problem | Redesign direction | Timing | Risk |
|---|---|---|---|---|
| low battery awareness | icon is too passive | add robot animation slowdown, warm warning tint, and short sound | before the player loses an action | too many warnings may annoy |
| action affordability | player discovers failure too late | preview energy cost on action hover or selection | before confirming action | clutter if every action shows too much |
| recovery route | player sees danger but not remedy | show nearest recharge or rest option | when battery enters low state | over-guiding may reduce discovery |
| consequence clarity | low battery feels arbitrary | show one skipped action or slower movement as cause-effect | immediately after depletion | punishment may feel harsh |

## Why This Output Is Useful

It moves UI feedback from a static icon to layered, timed, player-actionable feedback.

## Assumptions

- Battery matters to action availability.
- The UI can use audiovisual and animation feedback.
- The issue is awareness, not disagreement with the battery system.

## Source_basis

unsupported_draft

## Confidence

weak

## Evidence Gaps

- No UI screenshots.
- No playtest notes.
- No accessibility review.
- No user-provided evidence.

## What This Example Does Not Prove

It does not prove players will notice the new feedback. It proposes changes to test.

## How User Can Adapt It

Describe the missed signal, current UI, consequence, and player action needed. Ask for feedback timing, modality, and test criteria.

