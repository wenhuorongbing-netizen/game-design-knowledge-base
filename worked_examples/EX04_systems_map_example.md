# EX04 - Systems Map Example

Labels: demo_only, synthetic_example, not_user_evidence, not_project_evidence, not_benchmark_result, not_verified_claim.

## User Input

My game has energy, scrap, lighthouse repairs, spirit trust, weather, and nightly hazards. I do not know how they connect.

## Prompt Used

[P06_audit_systems_and_economy.md](../hands_on_prompts/P06_audit_systems_and_economy.md)

## Example AI Output

| Element | Role | Source | Sink | Feedback risk | Design question |
|---|---|---|---|---|---|
| energy | daily action budget | rest, food, upgrades | fishing, repair, spirit visits | too little energy stalls play | What is the minimum useful day? |
| scrap | repair currency | shore scavenging, rewards | lighthouse subsystems | runaway stockpile | What prevents hoarding? |
| repair progress | world recovery | scrap and energy spending | subsystem completion | linear checklist boredom | Does repair order change experience? |
| spirit trust | relationship state | conversations, fulfilled requests | ritual access, hints | invisible progression | How does the player read trust changes? |
| weather | pressure modifier | schedule or random seed | affects fishing and hazards | unfair randomness | What weather info is forecast? |
| nightly hazard | consequence layer | weather, unrepaired systems | consumes safety margin | punishment spiral | Can players recover from bad nights? |

## Why This Output Is Useful

It turns a loose feature list into system roles, sources, sinks, feedback risks, and design questions.

## Assumptions

- Energy is the main limiting resource.
- Scrap is gathered rather than purchased.
- Weather changes risk and opportunity.

## Source_basis

unsupported_draft

## Confidence

weak

## Evidence Gaps

- No numeric model.
- No prototype telemetry.
- No playtest logs.
- No economy balance evidence.

## What This Example Does Not Prove

It does not prove the economy is balanced or fun. It only provides a first systems map for discussion.

## How User Can Adapt It

Replace the elements with your own resources, states, loops, and pressures. Ask the AI to mark sources, sinks, feedback loops, and runaway risks.

