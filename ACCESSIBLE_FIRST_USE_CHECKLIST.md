# Accessible First-Use Checklist

Date: 2026-04-30

## Purpose

Use this checklist after your first AI answer.

It is a simpler companion to [FIRST_USE_CHECKLIST.md](FIRST_USE_CHECKLIST.md).

## The Answer Is Good Enough If

- It produced one concrete artifact.
- It asked at most 3 high-value questions.
- It labeled assumptions.
- It labeled source_basis.
- It labeled confidence.
- It listed evidence gaps.
- It gave one next action.
- It did not pretend draft guidance is verified.

## Reject Or Rerun If

- It gives generic advice without an artifact.
- It asks a long questionnaire before helping.
- It claims to have read private or high-risk book text.
- It summarizes a private chapter.
- It invents a quote or citation.
- It invents user notes, legal sidecars, project facts, playtest results, telemetry, or benchmark outputs.
- It marks unsupported or metadata-only content as verified.

## Quick Rerun Prompt

Paste this if the answer is weak:

> Rerun this using the Game Design Knowledgebase runtime.
>
> Produce one concrete artifact first.
>
> Ask at most 3 high-value missing-input questions only if needed.
>
> Label assumptions, source_basis, confidence, evidence gaps, and one next action.
>
> Do not invent evidence, quotes, citations, project facts, playtest results, or verified claims.

## Plain-Language Trust Labels

- source_basis: where the answer is allowed to come from.
- unsupported_draft: useful draft thinking, not verified.
- metadata_only: book or work routing only, not proof of a specific claim.
- confidence: how strongly the AI should treat the answer.
- evidence gap: what is missing before the claim can get stronger.

## Best First Action

Use the artifact for one small next step. Do not treat it as source-backed truth unless evidence exists.
