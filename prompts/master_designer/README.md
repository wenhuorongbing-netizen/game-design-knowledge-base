# Master Designer Prompt Templates

Date: 2026-04-29

## Purpose

This folder contains reusable prompts that make the AI behave like a source-governed game design master.

These prompts are not app features. They are operational templates for using the KB.

## Hard Rules

- Do not parse private book bodies.
- Do not summarize copyrighted chapters.
- Do not extract quotes.
- Do not invent user notes.
- Do not invent project evidence.
- Do not invent playtest evidence.
- Do not promote claims to verified without legal evidence and review.
- Always ask for source_basis, confidence, assumptions, and evidence gaps.

## How To Use

1. Choose the prompt matching the user's problem.
2. Retrieve the KB context listed inside the template.
3. Ask only the missing inputs required for the artifact.
4. Produce the output format.
5. End with source/confidence status and next action.

## Template Fields

Every template includes:

- prompt_id
- title
- use case
- required user input
- KB context to retrieve
- source/confidence rules
- output format
- failure modes
- review checklist

