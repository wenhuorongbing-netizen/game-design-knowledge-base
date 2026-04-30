# Hands-On Failure Modes

Date: 2026-04-30

## Purpose

This file lists common ways the hands-on layer can fail.

These are usability and source-safety risks, not proof of observed failures.

## Failure Mode Table

| failure_id | failure mode | severity | likely cause | detection signal | repair |
|---|---|---|---|---|---|
| HF-001 | user starts in audits or generated exports | P1 | too many root files | user opens validation/export files first | keep USE_THIS_FIRST and WHAT_TO_OPEN_FIRST prominent |
| HF-002 | user cannot choose a use case | P1 | no single root use-case hub file | user asks "which file do I open?" | create or alias a root USE_CASE_HUB.md |
| HF-003 | user loads the whole repo into AI | P1 | fear of missing context | huge context with benchmarks/schemas | use AI_CONTEXT_PACKS and DO_NOT_LOAD_EVERYTHING |
| HF-004 | user treats worked example as evidence | P1 | examples are realistic | user copies demo output as project proof | keep synthetic labels and "does not prove" sections |
| HF-005 | AI gives generic advice | P1 | prompt too broad or context too small | no artifact produced | use task-specific prompt and self-check prompt |
| HF-006 | AI invents project facts | P0 | user asks for project output without data | AI mentions real project results | reject output and require assumptions/evidence gaps |
| HF-007 | AI invents playtest results | P0 | playtest plan confused with playtest log | participant behavior appears without input | reject output and reroute to CP05 |
| HF-008 | AI summarizes private source body | P0 | source request routed incorrectly | chapter summary or quote appears | reroute to CP06 and refuse unsafe operation |
| HF-009 | user cannot tell draft from verified | P1 | footer omitted or ignored | no source_basis/confidence shown | require output footer and run self-check |
| HF-010 | user with no project feels blocked | P1 | project-first language | user thinks they need project evidence | route to NO_PROJECT_START_HERE |

## P0 Handling

If any P0 failure appears in a real output:

1. Stop using the output.
2. Mark it unsafe.
3. Do not save it as evidence.
4. Re-run with CP06 for source issues or CP05 for playtest/project planning issues.
5. Require source_basis, confidence, assumptions, and evidence gaps.

