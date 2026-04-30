# Repo For Humans

Date: 2026-04-30

## What This File Does

This is the human-facing map for normal use.

It deliberately hides most repository complexity. You can use the AI Game Design Master layer without reading audits, schemas, exports, benchmark runs, or evidence governance internals.

Canonical human start: [USE_THIS_FIRST.md](USE_THIS_FIRST.md).

## The Repository In One Sentence

This repository is a source-governed Game Design Knowledgebase that helps an AI ask better game design questions, choose lenses and workflows, teach concepts, and produce draft design artifacts while labeling uncertainty.

## The Small Surface Area

For normal use, start with the first-use top 10:

| Need | Open |
|---|---|
| One-page start | [USE_THIS_FIRST.md](USE_THIS_FIRST.md) |
| Immediate action | [10_MINUTE_QUICKSTART.md](10_MINUTE_QUICKSTART.md) |
| Decide by situation | [START_PAGE_DECISION_TREE.md](START_PAGE_DECISION_TREE.md) |
| See only 10 files | [TOP_10_FILES_FOR_FIRST_USE.md](TOP_10_FILES_FOR_FIRST_USE.md) |
| Pick a use case | [USE_CASE_HUB.md](USE_CASE_HUB.md) |
| Copy a prompt | [HANDS_ON_PROMPT_LIBRARY.md](HANDS_ON_PROMPT_LIBRARY.md) |
| Choose AI context | [AI_CONTEXT_PACKS.md](AI_CONTEXT_PACKS.md) |
| See safe examples | [WORKED_EXAMPLES_README.md](WORKED_EXAMPLES_README.md) |
| No active project | [NO_PROJECT_START_HERE.md](NO_PROJECT_START_HERE.md) |
| Know what to ignore | [WHAT_TO_IGNORE_FIRST.md](WHAT_TO_IGNORE_FIRST.md) |

## Surface Levels For Humans

| Level | Open |
|---|---|
| Level 0 | `USE_THIS_FIRST.md` |
| Level 1 | `10_MINUTE_QUICKSTART.md`, `TOP_10_FILES_FOR_FIRST_USE.md`, `WHAT_TO_IGNORE_FIRST.md` |
| Level 2 | `USE_CASE_HUB.md`, one `USE_CASES/` file |
| Level 3 | one prompt and one context pack |
| Level 4+ | reference only unless the task requires it |

## Normal Use Flow

1. Open [USE_THIS_FIRST.md](USE_THIS_FIRST.md).
2. If you want immediate action, open [10_MINUTE_QUICKSTART.md](10_MINUTE_QUICKSTART.md).
3. If you know your situation, open [START_PAGE_DECISION_TREE.md](START_PAGE_DECISION_TREE.md).
4. Open one use case.
5. Copy one prompt.
6. Ask for one concrete artifact.
7. Check that the AI labeled assumptions, `source_basis`, confidence, and evidence gaps.

## What You Do Not Need For Normal Use

You do not need:

- generated exports;
- validation reports;
- benchmark run files;
- scoring rubrics;
- evidence sidecar folders;
- JSON schemas;
- legacy tool folders;
- deprecated BookOS material;
- private source folders.

## Draft Versus Verified

Most hands-on outputs are draft design scaffolds.

Default assumption:

| Field | Normal-use default |
|---|---|
| source_basis | `unsupported_draft` for generated design artifacts; `metadata_only` for work routing |
| confidence | `weak` unless evidence exists |
| verified claims | none |
| project facts | only what the user supplies |
| playtest facts | only what the user supplies |

## If You Want To Go Deeper

Use [TOP_20_FILES_TO_KNOW.md](TOP_20_FILES_TO_KNOW.md). It is the broader human-sized map after first use.
