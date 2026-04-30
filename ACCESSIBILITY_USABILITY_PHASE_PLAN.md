# Accessibility Usability Phase Plan

Date: 2026-04-30

## Phase Goal

Make the Game Design Knowledgebase easier to enter, easier to use, easier for AI agents to load selectively, and easier for maintainers to validate without weakening source governance.

## Current Phase

Accessibility, Usability and Engineering Deep Audit Phase.

## Scope

This phase audits and improves:

- first-time user entry;
- hands-on use cases;
- prompt discoverability;
- context-pack selection;
- Markdown accessibility;
- repository cognitive load;
- maintainer command clarity;
- generated/legacy/deprecated boundaries;
- AI-agent runtime loading discipline.

## Non-Goals

Do not:

- parse private or high-risk source body text;
- summarize copyrighted chapters;
- invent user observations;
- invent evidence;
- fabricate target AI outputs;
- build app features;
- delete canonical KB content;
- weaken validation or source-governance rules.

## Phase Workstreams

| Workstream | Purpose | Output |
|---|---|---|
| Inventory baseline | Map project modules, surfaces, and risks | `PRINCIPAL_ENGINEERING_INVENTORY.md` |
| Entrypoint audit | Check whether users know where to start | updated entrypoint recommendations |
| Accessibility audit | Check headings, link clarity, tables, and cognitive load | accessibility backlog |
| Use-case audit | Check whether use cases lead to prompts and artifacts | use-case repair list |
| AI context audit | Check whether AI agents can load minimal context | context-pack repair list |
| Maintainer audit | Check command, tool, generated file, and CI clarity | engineering backlog |
| Trial readiness | Prepare for real observed user trial | user trial request and analysis |

## Accessibility Audit Dimensions

| Dimension | What to check |
|---|---|
| Heading structure | pages have a clear H1 and logical H2/H3 flow |
| Link clarity | links describe destination and task, not vague "click here" text |
| Table overload | large tables are used only when they reduce cognitive load |
| Progressive disclosure | casual users are routed away from audit/schema/generated files |
| Task clarity | each entrypoint tells users what to do next |
| AI load clarity | context packs prevent loading the whole repository |
| Source safety clarity | users see draft/verified/evidence boundaries early |
| No-project usability | project-free learning is supported |

## Engineering Audit Dimensions

| Dimension | What to check |
|---|---|
| Toolchain | root npm scripts remain authoritative |
| CI/CD | validation is automated or clearly local-only |
| Generated files | generated outputs are marked and not manually edited |
| Legacy tools | legacy folders cannot be mistaken for active pipeline |
| Optional portal | portal is clearly non-canonical |
| Private sources | private/high-risk source boundary is visible |
| Test coverage | validator and usability checks have explicit gaps |

## Acceptance Criteria

The phase can be accepted when:

- first-time users can identify one start file in under 2 minutes;
- users can choose a use case without reading maintainer docs;
- users can copy a prompt and know what to replace;
- users know what files to ignore first;
- AI agents know what minimal context to load;
- maintainers know which commands to run;
- source/confidence rules remain visible;
- validation passes with 0 P0 issues and 0 warnings;
- remaining usability gaps are recorded as observed or unobserved, not invented.

## Current Baseline

| Gate | Status |
|---|---|
| validation | PASS |
| source governance | PASS |
| accepted exceptions | 0 |
| observed user trial | blocked pending user observation |
| target AI outputs | blocked pending supplied outputs |
| verified source-backed masterclass | blocked pending user/legal evidence |

## Next Exact Prompt

`audit-entrypoints-and-accessibility`
