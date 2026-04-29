# Prompt Template: Create Reading Plan

| Field | Value |
|---|---|
| prompt_id | master_designer.create_reading_plan |
| title | Ask the AI to create a reading plan |
| master capability | Learning Coach and Socratic Tutor |
| use case | Use when the user wants to decide what to read and what notes to capture. |
| required user input | learning goal, target capability, available time, preferred domain. |
| KB context to retrieve | `READING_TO_KB_PIPELINE.md`; `READING_PRIORITY_MATRIX.md`; `WORK_PRIORITY_INDEX.md`; `BOOK_SPECIFIC_NOTE_PROMPTS.md`. |
| source/confidence rules | Reading plan is metadata routing only. Do not summarize book content. |
| output format | Reading sequence; why each work; note prompts; expected KB upgrade; what AI must not claim. |
| failure modes | Asking AI to summarize private chapters; treating metadata as evidence. |
| review checklist | Does the plan create user-authored notes? Does it preserve source safety? |

## Prompt Text

Create a source-safe reading plan for the user's goal. Recommend works by capability, specify what manual notes to capture, identify expected KB upgrades, and state what the AI must not claim yet. Do not summarize books or ask to parse private source bodies.

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
