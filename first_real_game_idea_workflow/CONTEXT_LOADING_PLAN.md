# Context Loading Plan

Date: 2026-05-01

## Status

blocked_pending_user_game_idea_packet

## Core Rule

Never load the whole repository.

## Current Step

This step is routing setup only. No game idea artifact should be produced because the user idea packet is missing.

## Files Loaded For Routing Setup

- `first_real_game_idea_workflow/SOURCE_SAFETY_BOUNDARY.md`
- `AGENT_START.md`
- `AGENT_SKILL_MANIFEST.md`
- `AGENT_SKILL_MANIFEST.json`
- `AGENT_ROUTER.md`
- `AGENT_CONTEXT_LOADING_PROTOCOL.md`
- `AGENT_SOURCE_SAFETY_RULES.md`
- `CODEX_USAGE_GUIDE.md`
- `report.md`

## Files Missing

- `first_real_game_idea_workflow/USER_GAME_IDEA_PACKET.md`

## Files To Load After A Valid Packet Exists

1. `first_real_game_idea_workflow/USER_GAME_IDEA_PACKET.md`
2. `skills/game_idea_review/SKILL.md`
3. `agent_output_contracts/one_page_concept_memo.md`
4. `context_packs/CP02_game_idea_review.md` only if more game-idea review context is needed

## Selected KB References

Do not load extra KB references until the user packet exists.

If needed after packet review, prefer indexes before deep files:

- `MASTER_PROBLEM_SOLVER_INDEX.md`
- `PROBLEM_TO_LENS_MAP.md`
- `PROBLEM_TO_WORKFLOW_MAP.md`

## Forbidden Loading

Do not load:

- private source bodies;
- high-risk book bodies;
- private PDFs, EPUBs, scans, or archives;
- benchmark files for normal runtime;
- generated exports for normal runtime;
- human prompt-copy files unless explicitly needed;
- deprecated or legacy folders;
- full repository context.

## Stop Rule

If the user supplies only the required idea packet fields, load only the packet, selected skill, output contract, and context pack if needed. Stop loading when that is enough to produce the one-page concept memo.
