# Documentation Creation Rules

Date: 2026-04-30

## Purpose

These rules prevent documentation bloat.

Before creating a new document, prove that it deserves to exist.

## Required Creation Fields

Every new document must have:

| Field | Required answer |
|---|---|
| purpose | what problem this file solves |
| target user | who will read or use it |
| entrypoint role | active_agent_runtime, active_skill, active_context_pack, first-use, use-case, runtime, reference, governance, generated, legacy, or deprecated |
| linked parent | the hub or index that points to it |
| update owner | accountable owner role |
| source/confidence policy | how it handles claims, evidence, and confidence |
| deprecation condition | when it should be merged, deprecated, or archived |
| layer decision | first-use layer or reference layer |

## Creation Decision

Create a new file only if at least one condition is true:

- the content is a new user journey;
- the content is a new reusable prompt or context pack;
- the content is a policy or quality gate;
- the content is a generated report expected by tools;
- the content is a major reference that would make an existing file too hard to scan.

Do not create a new file if:

- the update is a small clarification;
- the content duplicates a current hub;
- the content can be a section in an existing file;
- the content is only a one-off note;
- the content would add another first-use decision.

## First-Use Layer Rule

First-use files are scarce.

Before adding one, answer:

- Which existing first-use file becomes less important?
- Does this reduce the first-time user's next action count?
- Does this help a user start in under 2 minutes?
- Can the same job be done by linking from `USE_THIS_FIRST.md` or `USE_CASE_HUB.md`?

## Reference Layer Rule

Most new docs should be reference-layer or governance-layer files.

Reference files should not be shown to normal users unless:

- a route explicitly needs them;
- a context pack references them;
- a maintainer task requires them.

## Source/Confidence Rule

Any document that discusses claims, books, evidence, notes, quotes, projects, or benchmark outputs must preserve:

- no private source parsing;
- no fake evidence;
- no fake user notes;
- no fake manual quotes;
- no fake project or playtest facts;
- no verified claim without validated evidence.
