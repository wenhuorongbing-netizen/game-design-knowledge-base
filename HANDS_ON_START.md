# Hands-On Start

Use this page if you want to use the AI Game Design Master framework now, without understanding the whole repository first.

If you are completely new, start with [USE_THIS_FIRST.md](USE_THIS_FIRST.md), then return here.

## The 2-Minute Path

1. Open this file.
2. Pick one use case from [USE_CASES/README.md](USE_CASES/README.md).
3. Copy one prompt from [COPY_PASTE_PROMPTS.md](COPY_PASTE_PROMPTS.md).
4. Give the AI the minimal context in [AI_CONTEXT_MINIMUM.md](AI_CONTEXT_MINIMUM.md).
5. Read the answer as draft design help unless it includes real evidence references.

## What This Gives You

| Your need | Start here | Expected output |
|---|---|---|
| I have a vague game idea. | [USE_CASES/vague_game_idea.md](USE_CASES/vague_game_idea.md) | one-page concept memo |
| I want a design review. | [USE_CASES/design_review.md](USE_CASES/design_review.md) | lens-based design review |
| I have no project yet. | [USE_CASES/no_project_start.md](USE_CASES/no_project_start.md) | learning or idea-generation route |
| I want to learn game design. | [USE_CASES/learn_game_design.md](USE_CASES/learn_game_design.md) | mini lesson and exercise |
| I want to read books safely. | [USE_CASES/reading_to_notes.md](USE_CASES/reading_to_notes.md) | reading-note plan |
| I want to check a claim or citation. | [USE_CASES/source_safety_check.md](USE_CASES/source_safety_check.md) | evidence gap report |

## First Prompt To Try

Copy this into your AI:

> You are using the Game Design Knowledgebase as an AI Game Design Master runtime. I do not need verified book doctrine yet. Treat the KB as draft/source-governed scaffolding unless evidence exists. Review this rough idea and produce a one-page concept memo. Mark assumptions, source_basis, confidence, evidence gaps, and one next action.
>
> My idea: [write one or two sentences here]

## What The AI Should Output

| Output part | What it should contain |
|---|---|
| Inferred concept | What the AI thinks the idea is. |
| Core experience | What the player should feel and repeatedly do. |
| Best-fit capability | Example: Core Experience Master or Meaningful Decision Master. |
| Lenses | 2 to 5 relevant diagnostic lenses. |
| Workflow | One workflow to run next. |
| Artifact | A concrete memo, matrix, map, plan, or checklist. |
| Assumptions | What the AI inferred but you did not say. |
| source_basis | Usually `unsupported_draft` unless you supplied evidence. |
| confidence | Usually `weak` unless evidence exists. |
| Evidence gaps | What must be supplied before stronger claims are allowed. |
| Next action | One specific thing to do next. |

## Trust Labels

| Label | Meaning for you |
|---|---|
| `unsupported_draft` | Useful design scaffold, not verified. |
| `metadata_only` | Safe book/work routing, not proof of a claim. |
| `weak` | Plausible design hypothesis to test. |
| `user_interpretation` | Based on user-authored notes, not necessarily source doctrine. |
| `verified` | Should appear only with EvidenceRefs and review. |

## What To Ignore On First Use

Open [FILES_TO_IGNORE_FOR_FIRST_USE.md](FILES_TO_IGNORE_FOR_FIRST_USE.md). In short: ignore benchmark internals, generated exports, schema files, legacy folders, deprecated docs, and source-audit reports unless you are maintaining or verifying the KB.

## What The AI Must Not Do

- Do not claim it read private or high-risk book bodies.
- Do not summarize private chapters.
- Do not invent quotes, citations, user notes, sidecars, project facts, playtest results, telemetry, or benchmark outputs.
- Do not call draft or metadata-only material verified.
- Do not require an active game project unless you ask for project-specific evidence.

## If You Get Stuck

Use [COPY_PASTE_PROMPTS.md](COPY_PASTE_PROMPTS.md) and pick the prompt closest to your situation. If none fits, use the "route my problem" prompt.
