# Codex Smoke Runs

Date: 2026-04-30

## Purpose

This folder contains controlled smoke-run task packs for the Codex Agent Runtime.

Smoke runs test whether Codex can use the repository as a Game Design Knowledgebase and Skill Pack:

- start at `AGENT_START.md`;
- route through the manifest and router;
- load one selected skill;
- load minimal context;
- produce a contract-shaped artifact;
- preserve source safety.

## Boundary

Smoke task packs are not benchmark results, evidence records, user notes, project evidence, or playtest logs.

Do not fabricate outputs.

Do not score missing outputs.

Do not parse private source bodies.

## Runs

| Run | Status | Purpose |
|---|---|---|
| `run_001/` | prepared_not_executed | first controlled Codex runtime smoke task pack |

## Normal Flow

1. Prepare task pack.
2. Execute each task with Codex in Prompt 4 or later.
3. Preserve raw output exactly.
4. Review against output contract.
5. Record failures and repairs.
