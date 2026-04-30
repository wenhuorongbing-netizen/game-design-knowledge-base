# Information Architecture Redesign

Date: 2026-04-30

## Verdict

IA verdict: ACCEPTED_FOR_PROGRESSIVE_DISCLOSURE.

The repository should not be made smaller by deleting content. It should feel smaller by showing different users only the layer they need.

## Problem

The project is structurally strong but intimidating because root-level files mix:

- first-use instructions;
- prompt packs;
- AI runtime rules;
- canonical KB content;
- governance and evidence reports;
- benchmark infrastructure;
- generated validation/export reports;
- optional portal files;
- legacy and deprecated material.

The current issue is not missing navigation. The issue is too many navigations at the same visual priority.

## Redesign Principle

Use progressive disclosure:

1. One page only.
2. First-use files.
3. Use-case routes.
4. Context packs and prompts.
5. Runtime and framework reference.
6. Governance, benchmark, validation, and schemas.
7. Generated exports and internals.

Normal users should stay in Levels 0 to 3 unless a specific task requires more.

AI agents should start at Level 3 and load the smallest context pack.

Maintainers should start at Level 5.

## Canonical Entry Decisions

| Audience | First file | Why |
|---|---|---|
| normal human user | `USE_THIS_FIRST.md` | shortest human explanation |
| user wanting immediate action | `10_MINUTE_QUICKSTART.md` | direct action path |
| user choosing a task | `USE_CASE_HUB.md` | routes intent to prompt/context/example |
| AI agent | `AI_CONTEXT_PACKS.md` | prevents loading everything |
| maintainer | `REPO_FOR_MAINTAINERS.md` | command and edit boundaries |
| source-governance reviewer | `SOURCE_GOVERNANCE_AUDIT.md` | current safety state |

## What Changes In This Sprint

This sprint adds and updates maps only. It does not move or delete canonical content.

Created:

- `PROGRESSIVE_DISCLOSURE_MODEL.md`
- `START_PAGE_DECISION_TREE.md`
- `REPO_SURFACE_LEVELS.md`
- `TOP_10_FILES_FOR_FIRST_USE.md`
- `FILE_PRIORITY_INDEX_V2.md`

Updated:

- `TOP_20_FILES_TO_KNOW.md`
- `EVERYTHING_ELSE_IS_REFERENCE.md`
- `REPO_FOR_HUMANS.md`
- `REPO_FOR_AI_AGENTS.md`
- `REPO_FOR_MAINTAINERS.md`

## Acceptance Criteria

- A normal user can stop after `USE_THIS_FIRST.md` and one prompt.
- A user who wants a task can open `USE_CASE_HUB.md`.
- An AI agent can pick one context pack.
- A maintainer can find commands and generated-file boundaries.
- Governance, benchmark, schemas, generated exports, private sources, and legacy folders are clearly outside first-use scope.

## Remaining IA Risk

No real observed user trial has confirmed that users follow this model. The next usability step should test the Level 0 to Level 3 path with a real user packet.
