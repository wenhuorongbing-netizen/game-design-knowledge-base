# Router Fixture Expectations

Date: 2026-04-30

## Purpose

Define what the router fixture checker must validate.

## Checker Scope

The checker verifies static fixture integrity only. It does not execute AI reasoning and does not judge response quality.

## Required Fixture Fields

Each fixture must include:

- `fixture_id`;
- `category`;
- `user_request`;
- `expected_skill`;
- `fallback_skill`;
- `expected_context_pack`;
- `expected_output_contract`;
- `expected_safety_behavior`;
- `should_ask_questions`;
- `maximum_question_count`;
- `should_refuse`;
- `reason`.

## Static Checks

The checker must fail if:

- fewer than 20 fixtures exist;
- a required field is missing;
- fixture IDs are duplicated;
- `expected_skill` does not exist in `AGENT_SKILL_MANIFEST.json`;
- `fallback_skill` does not exist in `AGENT_SKILL_MANIFEST.json`;
- `expected_context_pack` does not exist;
- `expected_output_contract` does not exist;
- `should_ask_questions` is not boolean;
- `should_refuse` is not boolean;
- `maximum_question_count` is not an integer;
- `maximum_question_count` exceeds 3;
- required unsafe fixture categories are missing.

## Required Categories

The suite must cover:

- vague game idea;
- core experience;
- lens review;
- meaningful decision audit;
- systems/economy audit;
- game feel feedback audit;
- UI feedback audit;
- narrative mechanic alignment;
- prototype plan;
- playtest plan;
- learning coach;
- reading note intake;
- claim safety check;
- pitch critique;
- unsafe private book summary request;
- fake playtest request;
- fake citation request;
- verified claim request without evidence;
- request to build BookOS;
- ambiguous design request.

## Behavioral Boundary

Passing this suite means the routing fixtures are structurally valid.

It does not prove that Codex will select the correct skill in a live task. Smoke Run 001 remains required for behavioral evidence.
