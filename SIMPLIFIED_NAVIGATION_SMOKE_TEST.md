# Simplified Navigation Smoke Test

Date: 2026-04-30

## Purpose

This smoke test checks whether the simplified navigation layer can guide a first-time user without requiring them to understand the full repository.

This test does not claim observed human success. It is a documentation-path test.

## Test Cases

| test_id | user task | start file | expected next action | pass criteria | status |
|---|---|---|---|---|---|
| SNS-001 | User wants to use the AI now. | `SIMPLIFIED_NAVIGATION.md` | Open `USE_THIS_FIRST.md`, then `USE_CASE_HUB.md`. | User reaches a prompt and context pack path. | PASS |
| SNS-002 | User wants to learn game design without a project. | `SIMPLIFIED_NAVIGATION.md` | Open `NO_PROJECT_START_HERE.md`. | User can choose a no-project exercise. | PASS |
| SNS-003 | User wants to maintain the repo. | `SIMPLIFIED_NAVIGATION.md` | Open `REPO_FOR_MAINTAINERS.md`. | User sees commands and generated-file rules. | PASS |
| SNS-004 | AI agent needs minimal context. | `REPO_FOR_AI_AGENTS.md` | Load `USE_THIS_FIRST.md`, `USE_CASE_HUB.md`, one context pack, and one prompt. | AI does not load benchmark, schema, generated, or private source files by default. | PASS |
| SNS-005 | User is overwhelmed by root file count. | `TOP_20_FILES_TO_KNOW.md` | Use only top-20 normal-use files. | User can ignore most files until needed. | PASS |
| SNS-006 | User asks whether to load the whole repo. | `DO_NOT_LOAD_EVERYTHING.md` | Choose a context pack instead. | User gets a smaller context strategy. | PASS |
| SNS-007 | User sees benchmark files. | `EVERYTHING_ELSE_IS_REFERENCE.md` | Treat benchmark files as reference unless evaluating target AI. | Benchmark internals are not required for normal use. | PASS |
| SNS-008 | User asks for book summaries or quotes. | `REPO_FOR_AI_AGENTS.md` | Route to source-safety rules and CP06. | AI refuses unsafe source-body parsing and fake evidence. | PASS |
| SNS-009 | User wants to edit generated exports. | `REPO_FOR_MAINTAINERS.md` | Regenerate instead of hand-editing. | Generated files remain tool-owned. | PASS |
| SNS-010 | User wants to know what a file is for. | `FILE_PRIORITY_INDEX.md` | Check classification and priority. | User can tell whether to open, ignore, or treat as reference. | PASS |

## Smoke Test Result

Result: PASS.

The simplified navigation layer gives a small start surface, separates normal users from maintainers and AI agents, and preserves source-governance boundaries.

## Residual Risks

- Real first-time-user observation has not yet been performed.
- The root directory is still large, so the simplified files must stay visible.
- Future additions should update `FILE_PRIORITY_INDEX.md` if they become important for normal use.

