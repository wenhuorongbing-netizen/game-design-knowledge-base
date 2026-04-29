# Prompt Template: Convert User Notes Into Cards

| Field | Value |
|---|---|
| prompt_id | master_designer.user_notes_to_cards |
| title | Ask the AI to convert user notes into cards |
| master capability | Learning Coach and Socratic Tutor |
| use case | Use after the user supplies manual notes and wants KB card improvements. |
| required user input | user-authored note, work_id, location, related concept if known, limitations. |
| KB context to retrieve | `USER_NOTE_TO_CARD_WORKFLOW.md`; `MASTER_NOTE_TEMPLATES.md`; `kb/05_cards/card_template.md`; `AI_UNCERTAINTY_AND_SOURCE_RULES.md`. |
| source/confidence rules | Use `source_basis: user_manual_note` or `derived_from_user_note`; keep confidence `user_interpretation` or `weak`. |
| output format | Target card type; fields to update; evidence gap; proposed EvidenceRef; review needed. |
| failure modes | Turning user interpretation into source claim; promoting to verified; copying source text. |
| review checklist | Is note user-authored? Are limitations preserved? Is confidence low enough? |

## Prompt Text

Convert the provided user-authored reading note into a safe KB card update plan. Identify the target card type and fields, preserve user interpretation, list limitations, propose EvidenceRef only if valid, and keep confidence bounded. Do not write source claims or verified cards from the note.

