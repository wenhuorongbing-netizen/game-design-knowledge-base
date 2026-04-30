# User Confusion Audit

Date: 2026-04-30

## Summary

The repo is not confusing because it lacks documentation. It is confusing because it has too much valid documentation at the same level. A first-time user needs a single practical path before they see governance, evidence, benchmark, export, and maintenance systems.

## Top 10 Confusion Points

| Rank | Confusion point | Severity | Evidence | Recommended fix |
|---:|---|---|---|---|
| 1 | Too many entrypoints compete. | P1 | `README.md`, `START_HERE.md`, runtime start, runtime guide, problem index, navigation files. | Create `HANDS_ON_START.md` as the only first-use action page. |
| 2 | The first action is not obvious. | P1 | `START_HERE.md` lists many files before a concrete prompt. | Add first 5 copy-paste prompts and expected outputs. |
| 3 | The user sees internal governance before hands-on use. | P1 | Evidence and source links appear early in entry docs. | Move governance into "read when verifying" section in the hands-on layer. |
| 4 | Prompt templates exist but are too distributed. | P1 | `MASTER_PROMPT_LIBRARY.md` and `prompts/master_designer/` are extensive. | Create `COPY_PASTE_PROMPTS.md` with 10 curated prompts. |
| 5 | Worked examples are missing. | P1 | Docs explain output artifact names but rarely show full example input/output. | Add `WORKED_EXAMPLES.md` with fictional, source-safe examples. |
| 6 | Benchmark artifacts distract from using the runtime. | P2 | Many AI benchmark files exist at root. | Add `FILES_TO_IGNORE_FOR_FIRST_USE.md`. |
| 7 | Evidence status is accurate but intimidating. | P2 | Evidence dashboards and source governance are heavily linked. | Summarize draft/verified status in one short user-facing note. |
| 8 | No-project use is possible but scattered. | P1 | Runtime docs say no project required, problem maps support it. | Add explicit "I do not have a project yet" use case. |
| 9 | Design review workflow requires too much file knowledge. | P1 | Designer path links to many cards/lenses/workflows. | Create one design-review prompt that loads the relevant runtime rules. |
| 10 | Root reports make the repo feel larger than the product surface. | P2 | Acceptance, benchmark, audit, and state files are visible at root. | Keep reports, but label them as maintainer/reviewer files in the first-use ignore list. |

## User Mental Model Needed

A first-time user should think:

1. I start at `HANDS_ON_START.md`.
2. I choose one use case.
3. I copy one prompt.
4. The AI produces one artifact.
5. Draft/source labels tell me how much to trust it.
6. I only open governance files if I want verification or maintenance.

## Priority Fix

Create the hands-on layer before adding more benchmark, evidence, or framework reports.
