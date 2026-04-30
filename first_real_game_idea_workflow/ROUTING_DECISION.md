# Routing Decision

Date: 2026-05-01

## Routing Status

blocked_pending_user_game_idea_packet

## Packet Check

`first_real_game_idea_workflow/USER_GAME_IDEA_PACKET.md` does not exist.

No valid user-supplied idea packet is available for routing into a design artifact.

## User Intent

Unknown. The current prompt asks to route a user-supplied game idea, but the actual idea packet is missing.

## Chosen Skill

`game_idea_review` is the provisional default skill only.

This is not an executed route. It is the expected route after a valid idea packet exists.

## Fallback Skill

`core_experience_definition`

Use this fallback only if the user packet is mainly about defining player fantasy, core experience, or what the game is about.

## Reason

The phase is "First Real Game Idea Workflow." The router's default for a vague or early design idea is `game_idea_review`, with `core_experience_definition` as the likely fallback.

Because no idea packet exists, Codex cannot safely decide whether another skill would be better, such as:

- `meaningful_decision_audit`;
- `systems_economy_audit`;
- `narrative_mechanic_alignment`;
- `prototype_plan`;
- `learning_coach`;
- `claim_safety_check`.

## Output Contract

Provisional output contract after packet exists:

- `agent_output_contracts/one_page_concept_memo.md`

No output contract is executed in this step.

## Context Pack

Provisional context pack after packet exists:

- `context_packs/CP02_game_idea_review.md`

Load only if the selected skill needs extra context.

## Minimum Questions

Maximum question count: 3.

1. What is the idea summary?
2. What desired player experience should the game create?
3. What is the current uncertainty or concern you want Codex to help with?

## Source Safety Reminder

- Do not invent project facts.
- Do not invent target player, genre, platform, or constraints.
- Do not invent evidence, citations, quotes, notes, playtests, telemetry, or legal sidecars.
- Treat any future artifact as `unsupported_draft` unless reviewed evidence is supplied.
- Default confidence is weak until concrete user input exists.
