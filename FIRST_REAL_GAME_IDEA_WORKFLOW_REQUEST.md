# First Real Game Idea Workflow Request

Date: 2026-05-01

## Status

Blocked pending user-supplied game idea or design problem.

The user entered `build`, but this is not enough to execute `game_idea_review` because the skill requires 1 to 5 sentences describing a real idea.

No game idea, project fact, playtest result, citation, user note, or evidence record was invented.

## What To Provide

Provide one of the following:

- a rough game idea in 1 to 5 sentences;
- a design problem you want reviewed;
- a genre plus player fantasy;
- a short pitch you want shaped into a one-page concept memo.

## Minimum Input

Use this form:

- Idea: 
- Target player, if known:
- Desired feeling:
- Core action, if known:
- Constraints, if any:

Only the idea line is required.

## Optional Helpful Input

- genre;
- platform;
- reference games, if any;
- intended session length;
- solo or multiplayer;
- production constraints;
- what you want Codex to help decide.

## What Codex Will Do After Input Exists

Codex will use:

- `AGENT_START.md`
- `AGENT_SKILL_MANIFEST.md`
- `AGENT_ROUTER.md`
- `skills/game_idea_review/SKILL.md`
- `agent_output_contracts/one_page_concept_memo.md`
- `context_packs/CP02_game_idea_review.md` only if more context is needed

Codex will produce:

- one-sentence concept;
- target player and player fantasy;
- core experience hypothesis;
- design pillars;
- key risks;
- next prototype question;
- assumptions;
- source_basis;
- confidence;
- evidence gaps;
- next action.

## Source Safety Boundary

The output will be `unsupported_draft` unless the user supplies evidence.

Codex must not:

- cite books without evidence;
- claim verified status;
- invent project facts;
- invent player reactions;
- invent market data;
- invent playtest observations;
- parse private source bodies.
