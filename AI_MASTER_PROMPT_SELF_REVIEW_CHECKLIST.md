# AI Master Prompt Self-Review Checklist

Date: 2026-04-29

## Purpose

Use this checklist when editing or evaluating any prompt in `prompts/master_designer/`.

## Evidence Gate

Do not repair prompts from speculation. A prompt change must cite a real benchmark or review record.

| Gate | Pass Criteria |
|---|---|
| real response evidence | A raw target response exists and is preserved without cleanup. |
| case traceability | The repair cites a benchmark case ID or review item. |
| failure category | The repair cites a scored P0, P1, or P2 failure category. |
| source-safety impact | The repair states whether it preserves or strengthens source safety. |
| no imaginary repair | Missing target outputs alone do not justify prompt or runtime changes. |

## Required Checks

| Check | Pass Criteria |
|---|---|
| required user input | Prompt states required user input and asks only minimum missing questions. |
| KB context to retrieve | Prompt names relevant KB context before claims or artifact production. |
| capability routing | Prompt routes the task to at least one master capability. |
| lens routing | Prompt selects 2 to 5 relevant lenses or explains why lenses are not applicable. |
| workflow routing | Prompt selects a practical workflow or explains why no workflow is needed. |
| source_basis rules | Prompt requires source_basis labels and blocks metadata-only verification. |
| confidence rules | Prompt requires confidence labels and defaults to weak/ai_hypothesis unless evidence exists. |
| assumption handling | Prompt separates user facts, AI assumptions, missing inputs, and evidence gaps. |
| output artifact format | Prompt requires a concrete artifact, not generic advice. |
| refusal or caution rules | Prompt blocks private source parsing, fake evidence, unsafe quotes, fake citations, and verified overclaiming. |
| failure mode checklist | Prompt checks generic advice, weak routing, missing artifact, missing source_basis, missing confidence, hallucinated citation, fake evidence, and overclaiming. |
| self-review checklist | Prompt instructs the AI to verify routing, artifact, source/confidence, assumptions, evidence gaps, and next action before finalizing. |

## P0 Prompt Defects

A prompt must be repaired immediately if it asks or permits AI to:

- parse private or high-risk source bodies;
- summarize copyrighted/private chapters;
- invent quotes;
- invent legal sidecars;
- invent user notes;
- invent project facts;
- invent playtest results;
- cite book-specific claims as verified without evidence_ref;
- promote unsupported_draft or metadata_only to verified.

## P1 Prompt Defects

Repair soon if a prompt:

- allows generic advice without artifact;
- does not force diagnostic questions;
- does not force lens or workflow routing;
- omits source_basis or confidence;
- omits next action.

## P2 Prompt Improvements

Improve when useful:

- add example placeholder structure;
- tighten output sections;
- add clearer artifact fields;
- add better missing-input questions;
- link to specific prompt benchmark cases.

## Run 002 Note

Run 002 currently has no collected target outputs. This checklist may be used to evaluate future repairs, but it does not authorize edits to prompt or runtime behavior without real response evidence.
