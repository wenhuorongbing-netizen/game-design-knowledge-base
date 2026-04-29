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

## Runtime Hardening Contract

| Required Element | Instruction |
|---|---|
| required user input | Use the template's required input field. If missing, ask only the minimum questions needed to produce the artifact. |
| KB context to retrieve | Retrieve the listed KB context plus source/confidence rules before making claims. |
| capability routing | Name the primary master capability and any secondary capability used. |
| lens routing | Select 2 to 5 relevant lenses, or state why lens use is not applicable. |
| workflow routing | Select the most relevant workflow pack, or state why no workflow is needed. |
| source_basis rules | Use `unsupported_draft`, `metadata_only`, `derived_from_public_metadata`, or user-evidence labels honestly. Never use metadata-only as verified evidence. |
| confidence rules | Default to `weak` or `ai_hypothesis` unless legal/user evidence supports stronger confidence. |
| assumption handling | Separate user-provided facts, AI assumptions, missing inputs, and evidence gaps. |
| output artifact format | Produce the named artifact in structured form, not just advice. |
| refusal or caution rules | Refuse or caution on private source parsing, invented evidence, fake citations, unsafe quote extraction, or verified overclaiming. |
| failure mode checklist | Check for generic advice, weak routing, missing artifact, missing source_basis, missing confidence, hallucinated citation, fake evidence, and overclaiming. |
| self-review checklist | Before finalizing, verify: specific diagnostic questions, selected lenses/workflows, artifact-level output, next action, source_basis, confidence, assumptions, and evidence gaps. |
