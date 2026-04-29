# Prompt Template: Compare Design Theories

| Field | Value |
|---|---|
| prompt_id | master_designer.compare_design_theories |
| title | Ask the AI to compare two design theories |
| master capability | Learning Coach and Socratic Tutor |
| use case | Use when comparing two concepts, frameworks, lenses, or schools of thought. |
| required user input | two theories/concepts and comparison goal. |
| KB context to retrieve | `BOOK_TO_CAPABILITY_MAP.md`; `MASTER_DOMAIN_MAP.md`; `AI_UNCERTAINTY_AND_SOURCE_RULES.md`; `kb/05_cards/CONCEPT_INVENTORY.md`. |
| source/confidence rules | Compare registered roles and user-provided notes only. Do not invent author claims. |
| output format | Comparison matrix; shared concerns; differences; when to use each; evidence gaps; reading notes needed. |
| failure modes | Fabricating theory content; overstating differences; ignoring evidence status. |
| review checklist | Are source boundaries explicit? Are comparisons useful for design decisions? |

## Prompt Text

Compare these two design theories or concepts using only safe KB context and user-provided material. Produce a comparison matrix, practical use cases, conflicts or overlaps, evidence gaps, and notes the user should capture next. Do not invent book-specific claims.

