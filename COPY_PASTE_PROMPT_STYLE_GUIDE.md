# Copy-Paste Prompt Style Guide

Date: 2026-04-30

## Purpose

This guide keeps hands-on prompts easy to copy, easy to edit, and source-safe.

Use it when creating or repairing files under `hands_on_prompts/` or short prompts inside `context_packs/`.

## Plain Language Rules

- Write for a non-technical user.
- Say what the prompt does in one sentence.
- Prefer short lines over dense paragraphs.
- Avoid repository-internal terms unless the prompt needs them.
- Explain required trust labels in simple terms when possible.
- Ask for one concrete artifact, not a broad discussion.

## Replaceable Field Format

Use square brackets for fields the user must replace:

- `[paste your idea]`
- `[paste design problem]`
- `[paste prototype question]`
- `[paste claim]`
- `[write unknown]`

Rules:

- Keep each field visible on its own line.
- Do not hide required fields inside long paragraphs.
- Use "unknown" as an allowed value when the user may not know the answer.

## Short Prompt Pattern

Use this pattern for first-use prompts:

> Use the Game Design Knowledgebase as an AI Game Design Master runtime.
>
> Task: [paste task]
>
> Ask at most 3 high-value questions if needed.
>
> Produce one concrete artifact.
>
> Label assumptions, source_basis, confidence, evidence gaps, and one next action.
>
> Do not invent evidence or parse private source bodies.

## Deep Prompt Pattern

Use this pattern only when the user asks for deeper review:

> Use the Game Design Knowledgebase as an AI Game Design Master runtime.
>
> Task: [paste task]
>
> Route the task to capability, domain, lenses, and workflow.
>
> Ask at most 3 high-value missing-input questions before proceeding.
>
> Produce a concrete artifact with sections.
>
> Include assumptions, source_basis, confidence, evidence gaps, risks, and one next action.
>
> Do not invent evidence, quotes, citations, project facts, playtest data, or verified claims.

## Output Artifact Requirement

Every prompt must request a named artifact, such as:

- concept memo;
- core experience statement;
- diagnostic question set;
- lens review report;
- decision audit matrix;
- system map;
- UI feedback audit;
- prototype plan;
- playtest plan;
- mini lesson;
- reading plan;
- claim safety report;
- pitch critique memo.

## Source/Confidence Label Requirement

Every prompt must ask the AI to label:

- assumptions;
- source_basis;
- confidence;
- evidence gaps;
- next action.

Default labels when no real evidence exists:

- source_basis: unsupported_draft for design scaffolds;
- source_basis: metadata_only for book or work routing;
- confidence: weak;
- verified claims: none.

## Safety Reminder

Every prompt must preserve these rules:

- Do not parse private or high-risk source bodies.
- Do not summarize copyrighted chapters.
- Do not invent evidence.
- Do not invent citations.
- Do not invent quotes.
- Do not invent user notes.
- Do not invent legal sidecars.
- Do not invent project facts.
- Do not invent playtest results.
- Do not claim verified status without EvidenceRef and review.

## Self-Check Line

Each prompt file should include a self-check prompt similar to:

> Check your previous answer.
>
> Did you invent facts or evidence?
>
> Did you label assumptions, source_basis, confidence, and evidence gaps?
>
> Did you produce the requested artifact?
>
> If not, correct the answer.

## Length Targets

- Copy-paste prompt lines should stay under 140 characters where practical.
- Dense safety rules should be split into short lines.
- Tables may remain when they define output format, but do not put the copy-paste prompt itself in a wide table.

## Maintenance Rule

Do not reduce source-safety constraints to shorten a prompt. Split the rule into shorter lines instead.
