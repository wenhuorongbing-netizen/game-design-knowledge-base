# Agent Runtime Tests

Date: 2026-04-30

## Purpose

This folder contains lightweight tests for the Codex Agent Runtime layer.

These tests verify routing fixtures and runtime contract metadata. They do not execute Codex outputs, score AI behavior, parse private sources, or create benchmark results.

## Test Files

| File | Purpose |
|---|---|
| `ROUTER_FIXTURES.md` | human-readable router fixture suite |
| `ROUTER_FIXTURES.json` | machine-readable fixture data |
| `ROUTER_FIXTURE_EXPECTATIONS.md` | expected checker behavior and acceptance criteria |
| `ROUTER_FIXTURE_TEST_REPORT.md` | latest static router fixture validation report |

## Runtime Boundary

Router fixture tests are structural checks only.

They verify that:

- expected skills exist in `AGENT_SKILL_MANIFEST.json`;
- expected context packs exist;
- expected output contracts exist;
- unsafe request fixtures are present;
- fixture fields are complete.

They do not prove that Codex will route correctly in live execution. Smoke runs are required for behavioral evidence.

## Source Safety

Fixtures must not require private source body parsing, copyrighted chapter summaries, invented evidence, invented citations, invented user notes, invented project facts, or invented playtests.
