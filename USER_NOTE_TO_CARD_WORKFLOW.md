# User Note To Card Workflow

Date: 2026-04-29

## Purpose

This workflow explains how a user-authored manual note can improve a concept card, framework card, application card, checklist card, prompt card, or comparison card.

It does not create verified claims automatically.

## Entry Requirements

| Requirement | Rule |
|---|---|
| note exists | UserManualNote record or user-provided note text must exist. |
| user-authored | The note must be written by the user, not generated from source body text. |
| source_basis | Must be `user_manual_note`. |
| confidence | Usually `user_interpretation`. |
| target | Existing card or clearly named card gap. |
| limitations | Note must say what it does not prove. |

## Workflow

1. Identify note type: concept, framework, comparison, project idea, disagreement, question, or exercise idea.
2. Identify target card type.
3. Link to existing card if possible.
4. Extract only the user's own wording and interpretation.
5. Create or update card sections cautiously:
   - one_sentence_summary
   - when_to_use
   - when_not_to_use
   - common_misunderstandings
   - AI_prompt_hooks
   - evidence_gap
6. Add evidence_refs later only after review.
7. Keep confidence at `user_interpretation` or `weak`.
8. Do not mark verified.

## Card Type Routing

| Note Type | Card Type |
|---|---|
| concept note | concept_card |
| framework note | framework_card |
| lens note | prompt_card or framework_card if not yet a lens |
| workflow note | checklist_card or framework_card |
| disagreement note | comparison_card or anti_pattern_card |
| comparison note | comparison_card |
| project idea note | application_card |
| exercise idea note | exercise_card or checklist_card |
| question note | evidence_gap entry |

## Safe Card Update Language

Use:

- "User note suggests..."
- "As a user interpretation..."
- "Possible application..."
- "Evidence gap remains..."

Do not use:

- "The book says..."
- "The author proves..."
- "This is verified..."
- "Chapter X teaches..."

## Output

| Output | Description |
|---|---|
| updated card draft | Card includes note-based improvement. |
| source_basis | `derived_from_user_note` or `user_manual_note`. |
| confidence | `user_interpretation` or `weak`. |
| evidence gap | What still needs legal/source evidence. |
| review status | user_review_needed or needs_evidence. |

## Acceptance Criteria

- No source body text is used.
- No book-specific claim is created without evidence.
- User interpretation remains separate from source claim.
- Card remains draft unless evidence and review support promotion.

