# Codex Usage Guide

Date: 2026-04-30

## Audience

This guide is for Codex-like agents using this repository as a game design skill pack.

## How To Initialize

1. Read `AGENT_START.md`.
2. Read `AGENT_SKILL_MANIFEST.md` or `AGENT_SKILL_MANIFEST.json`.
3. Read `AGENT_ROUTER.md`.
4. Do not browse the whole repo.

## How To Route A Task

Match the user request to one skill using `AGENT_ROUTER.md`.

If unclear:

- choose `game_idea_review` for design work;
- choose `learning_coach` for study questions;
- choose `claim_safety_check` for source or evidence questions.

Ask at most three high-value questions if needed.

## How To Load Context

Load:

- one skill file;
- one output contract;
- one context pack if needed;
- selected KB references only after the skill is selected.

Do not load benchmark files, generated exports, private sources, or deprecated material for normal use.

## How To Answer The User

Produce the requested artifact, not a repository tour.

Every answer should include:

- assumptions;
- `source_basis`;
- confidence;
- evidence gaps;
- next action.

## How To Write Output Artifacts

If the user asks to write a file, use the relevant output contract and keep the artifact source-safe.

Do not mark the artifact as verified unless legal evidence and review exist.

## Avoid Hallucinated Citations

Do not cite books unless a valid evidence reference is present or the user supplies the citation context.

For book routing, use `metadata_only` unless user notes or legal evidence exist.

## Avoid Private Source Parsing

Never read or summarize private/high-risk source bodies.

If the user asks for this, refuse the unsafe operation and offer a safe manual-note workflow.

## No Active Game Project

Use `learning_coach`, `game_idea_review`, or `core_experience_definition`.

Produce learning plans, exercises, draft concepts, or design question lists.

## Vague Game Idea

Use `game_idea_review`.

Produce a one-page concept memo and one next prototype question.

## Learning

Use `learning_coach`.

Teach one topic, give an exercise, and label confidence.

## Reading-Note Intake

Use `reading_note_intake`.

Help the user create their own manual notes. Do not write book-derived notes from private source bodies.
