# Hands-On Phase Plan

Date: 2026-04-30

## Phase Goal

Make the AI Game Design Master framework usable in one sitting by a first-time user who does not want to understand the entire repository first.

This phase must simplify the entry experience without deleting canonical KB content, benchmark files, evidence governance, or validation infrastructure.

## Design Principle

Do not reduce the KB by destroying structure. Reduce cognitive load by adding a thin action layer above it.

## Target User

The target user says:

- I have collected game design books.
- I may not have a game project yet.
- I want the AI to help me think like a game designer.
- I do not want to browse hundreds of files before asking a question.
- I need copy-paste prompts and examples.

## Proposed Hands-On Layer

| Layer asset | Purpose | Must include |
|---|---|---|
| `HANDS_ON_START.md` | Single first-use page | What to open, what to ignore, first 5 prompts, expected outputs. |
| `USE_CASES/README.md` | Use-case index | Vague idea, design review, learning guidance, reading plan, source-safe claim check. |
| `USE_CASES/vague_game_idea.md` | First practical route | Copy-paste prompt, required input, output artifact, example. |
| `USE_CASES/design_review.md` | Design critique route | Prompt, lenses, workflow, output expectations. |
| `USE_CASES/learn_game_design.md` | Learning route | Prompt, reading path, exercise output. |
| `USE_CASES/reading_to_notes.md` | Reading-note route | Safe note prompts without chapter summaries. |
| `USE_CASES/source_safety_check.md` | Source-governance route | How to ask safely about evidence, claims, and citations. |
| `COPY_PASTE_PROMPTS.md` | Small prompt kit | 10 curated prompts only, not the whole library. |
| `WORKED_EXAMPLES.md` | Example input/output | Fictional examples with source labels and confidence. |
| `AI_CONTEXT_MINIMAL.md` | Minimal load bundle | The few files an AI should read first. |
| `FILES_TO_IGNORE_FOR_FIRST_USE.md` | First-session ignore list | Reports, generated exports, legacy folders, benchmark internals. |

## Phase Tasks

1. Create a one-page hands-on start file.
2. Create a small use-case folder with five practical flows.
3. Create copy-paste prompts that a user can use immediately.
4. Create worked examples using fictional inputs only.
5. Create a minimal AI context file.
6. Create a first-session ignore list.
7. Update `README.md` and `START_HERE.md` to point users to the hands-on layer first.
8. Run validation.

## Non-Goals

- Do not delete canonical KB content.
- Do not delete benchmark files.
- Do not delete evidence governance.
- Do not move generated exports.
- Do not create fake evidence.
- Do not create fake target AI outputs.
- Do not build an app.

## Acceptance Criteria

- A user can start from one file and run a useful AI prompt in under 2 minutes.
- The user can ignore most repository files during first use.
- Copy-paste prompts exist for the most common use cases.
- Worked examples show input, output shape, assumptions, `source_basis`, confidence, and evidence gaps.
- The system remains source-governed.
- Validation passes.

## Next Exact Prompt

`build-hands-on-use-layer`
