# Repo For Humans

Date: 2026-04-30

## What This File Does

This is the human-facing map for normal use.

It deliberately hides most repository complexity. You can use the AI Game Design Master layer without reading audits, schemas, exports, benchmark runs, or evidence governance internals.

## The Repository In One Sentence

This repository is a source-governed Game Design Knowledgebase that helps an AI ask better game design questions, choose lenses and workflows, teach concepts, and produce draft design artifacts while labeling uncertainty.

## The Small Surface Area

For normal use, start with only these:

| Need | Open |
|---|---|
| Fastest start | [USE_THIS_FIRST.md](USE_THIS_FIRST.md) |
| Pick a use case | [USE_CASE_HUB.md](USE_CASE_HUB.md) |
| Copy a prompt | [HANDS_ON_PROMPT_LIBRARY.md](HANDS_ON_PROMPT_LIBRARY.md) |
| Choose AI context | [AI_CONTEXT_PACKS.md](AI_CONTEXT_PACKS.md) |
| See safe examples | [WORKED_EXAMPLES_README.md](WORKED_EXAMPLES_README.md) |
| No active project | [NO_PROJECT_START_HERE.md](NO_PROJECT_START_HERE.md) |
| Know what to ignore | [WHAT_TO_IGNORE_FIRST.md](WHAT_TO_IGNORE_FIRST.md) |

## Normal Use Flow

1. Pick your situation from [USE_CASE_HUB.md](USE_CASE_HUB.md).
2. Open the suggested context pack.
3. Copy the suggested prompt.
4. Paste your idea, question, or learning goal.
5. Ask for one concrete artifact.
6. Check that the AI labeled assumptions, `source_basis`, confidence, and evidence gaps.

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

Use [TOP_20_FILES_TO_KNOW.md](TOP_20_FILES_TO_KNOW.md). It is the human-sized map of the important files.

