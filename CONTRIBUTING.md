# Contributing

Date: 2026-04-30

## Project Scope

This repository is a source-governed AI Game Design Master Knowledgebase, documentation runtime, validation tooling, and hands-on prompt system.

It is not an app project. Contributions must not add app features, user accounts, forums, reading sessions, or private source parsing.

## Before You Change Anything

1. Read `USE_THIS_FIRST.md` if you are changing user-facing docs.
2. Read `WHAT_NOT_TO_TOUCH.md` if you are changing generated, legacy, private, or source-governance areas.
3. Read `DOC_CREATION_RULES.md` before adding a new document.
4. Read `DOC_CHANGE_REVIEW_CHECKLIST.md` before opening a PR.

## Common Contribution Types

| Contribution | Start here | Required checks |
|---|---|---|
| first-use docs | `TOP_10_FILES_FOR_FIRST_USE.md` | avoid first-use overload |
| use case or prompt | `USE_CASE_HUB.md` | preserve source/confidence labels |
| AI context pack | `AI_CONTEXT_PACKS.md` | keep context minimal |
| KB content | `kb/` indexes and schemas | do not promote unsupported claims |
| evidence governance | `kb/13_evidence/` | do not invent evidence |
| validator/tooling | `tools/` | run export, validate, audit |
| generated reports | tool commands | do not edit manually unless explicitly documented |

## Required Commands

Run before review:

- `npm run kb:export`
- `npm run kb:validate`
- `npm run kb:audit` when source governance, evidence, or reports may be affected
- `npm run kb:coverage` when coverage reports or release state are affected

## Documentation Rules

- New docs need purpose, target user, parent link, owner, lifecycle state, and deprecation condition.
- Prefer updating an existing hub over adding a new root file.
- Keep first-use paths short.
- Keep source/confidence boundaries visible.
- Append `report.md` only when the active prompt or phase requires it.

## Source Safety Rules

- Do not parse private or high-risk source bodies.
- Do not summarize private or copyrighted book chapters.
- Do not extract quotes from source files.
- Do not invent legal sidecars, user notes, manual quotes, project facts, playtest logs, or benchmark outputs.
- Do not present draft or metadata-only content as verified.

