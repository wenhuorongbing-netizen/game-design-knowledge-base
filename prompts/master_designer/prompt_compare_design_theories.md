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
