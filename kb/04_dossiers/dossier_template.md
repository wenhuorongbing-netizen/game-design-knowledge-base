# BookDossier Template

## Legal Rule

Do not create chapter summaries from high-risk sources.
Do not extract body text from high-risk files.
Do not quote from high-risk files.

For `metadata_only` or `metadata_only_quarantined` sources, this template creates a metadata shell only.

## Promotion Path

| From | To | Required Gate |
|---|---|---|
| `metadata_stub` | `reading_notes` | User notes attached. |
| `reading_notes` | `verified_dossier` | Legal basis supports summaries or claims; source refs recorded. |
| `verified_dossier` | `project_dossier` | Project overlay or design decision references the dossier. |

## Dossier Frontmatter

```yaml
dossier_id: dossier_[work_id]
entity_type: BookDossier
work_id: [work_id]
dossier_type: metadata_stub
source_basis: metadata_only
confidence: weak
claim_scope: ai_hypothesis
status: metadata_shell
created_at: YYYY-MM-DD
updated_at: YYYY-MM-DD
```

# BookDossier: [Title]

## Metadata

- work_id:
- title:
- subtitle:
- author:
- edition:
- publisher:
- year:
- ISBN:
- source_documents:
- legal_status:
- ingestion_status:
- source_basis:
- confidence:

## Why This Work Matters

Draft rationale only unless supported by legal notes or public metadata.

## Knowledge Domains

- primary domains:
- secondary domains:
- phase groups:
- production roles:

## Reading Status

- unread:
- reading:
- read:
- user_notes_available:
- verified:
- needs_legal_sidecar:

## Chapter Map

| chapter_id | chapter_title | chapter_order | status | domains | phase_groups | expected_card_types | user_note_slot | manual_quote_slot | questions_to_answer |
|---|---|---:|---|---|---|---|---|---|---|
| pending | Pending user notes or legal TOC | 1 | user_notes_needed | pending | pending | pending | pending | pending | pending |

## Core Thesis

Pending user notes or legal source sidecar.

## Core Claims

| claim_id | claim_text | source_basis | confidence | evidence_refs | status |
|---|---|---|---|---|---|

## Key Concepts

| concept_id | concept_name | provisional_definition | source_basis | confidence | related_cards | related_lenses |
|---|---|---|---|---|---|---|

## Methods And Frameworks

| framework_id | name | purpose | required_inputs | expected_outputs | source_basis | confidence | can_be_used_in_workflow_pack |
|---|---|---|---|---|---|---|---|

## Design Exercises

| exercise_id | purpose | estimated_time | inputs | steps | outputs | evaluation | source_basis | confidence |
|---|---|---|---|---|---|---|---|---|

## Quotes

Only use `user_manual_quote`, `open_fulltext`, or legally allowed quotes.

| quote_id | location | user_quote_text | user_commentary | source_basis |
|---|---|---|---|---|

## Application Notes

- how this work helps a designer:
- what phase groups it supports:
- what project situations it applies to:
- common mistakes it can help prevent:
- AI prompt ideas:
- discussion thread ideas:

## Comparisons

- supports / extends / conflicts with other works:
- concept overlaps:
- terminology differences:
- open questions:

## Cards To Create

- concept_card:
- framework_card:
- quote_card:
- comparison_card:
- application_card:
- checklist_card:
- prompt_card:

## Source References

Every filled section must cite source refs. Unfilled sections must be marked as pending.

## Dossier Status

- metadata_shell:
- user_notes_needed:
- partial:
- verified:
- archived:
