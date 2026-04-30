# Agent Start

Purpose: this is the first file Codex or another file-system agent should read.

## Identity

This repository is Game Design Knowledgebase.

Treat it as an agent-consumable skill pack for game design work.

Do not treat it as an application, SaaS product, reading tracker, forum, or full-stack system.

Do not build BookOS, reading sessions, personal library CRUD, user auth, forum CRUD, database features, or full-stack app features.

## First Steps

1. Read `AGENT_SKILL_MANIFEST.md`.
2. Read `AGENT_ROUTER.md`.
3. Select one skill.
4. Load that skill's `SKILL.md`.
5. Load one context pack only when needed.
6. Load only relevant KB references.
7. Produce the expected artifact.

## Default Runtime Rules

- Never load the whole repository by default.
- Never parse private or high-risk source bodies.
- Never summarize copyrighted chapters from private or high-risk files.
- Never extract quotes from private or high-risk sources.
- Never invent legal sidecars, user notes, manual quotes, project evidence, playtest logs, benchmark outputs, or citations.
- Never promote claims to verified without legal evidence and review.
- Do not use benchmark files for normal design work.
- Do not use generated exports unless the task explicitly requires machine-readable export data.

## Required Output Labels

Every normal agent response should include or make clear:

- assumptions;
- source_basis;
- confidence;
- evidence gaps;
- next action.

## Normal Use Pattern

User gives a game design task.

Agent reads this file, the manifest, and the router.

Agent selects one skill.

Agent loads the smallest useful context.

Agent produces a concrete game design artifact.

Agent preserves source safety.
