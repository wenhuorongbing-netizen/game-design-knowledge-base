# First Real Game Idea Workflow

Date: 2026-05-01

## Purpose

This folder controls the first real user-supplied game idea workflow for Game Design Knowledgebase as an agent-consumable skill pack.

The workflow exists to prevent Codex from inventing a project, design problem, target player, player experience, playtest result, evidence record, or source-backed claim.

## Current Status

`blocked_pending_user_game_idea`

## Valid Idea Packet Requirements

A valid packet must include at least:

- idea summary;
- desired player experience;
- current uncertainty or concern.

Optional fields:

- target player;
- genre;
- platform;
- constraints.

## Expected Skill After Intake

Once a valid idea packet exists, Codex should route through:

- `AGENT_START.md`
- `AGENT_SKILL_MANIFEST.md`
- `AGENT_ROUTER.md`
- `skills/game_idea_review/SKILL.md`
- `agent_output_contracts/one_page_concept_memo.md`

## Safety Boundary

Until a valid idea packet exists, Codex must not create design artifacts.

Do not invent:

- game idea;
- player fantasy;
- target player;
- design pillars;
- project facts;
- playtest observations;
- citations;
- user notes;
- legal sidecars;
- verified claims.

## Files

- `GAME_IDEA_INTAKE_REQUEST.md`
- `GAME_IDEA_PACKET_TEMPLATE.md`
- `SOURCE_SAFETY_BOUNDARY.md`
- `WORKFLOW_STATUS.md`
