# Prompt Template: Generate Design Questions

| Field | Value |
|---|---|
| prompt_id | master_designer.generate_design_questions |
| title | Ask the AI to generate design questions |
| master capability | Lens Review Master |
| use case | Use when the user needs expert questions before designing or reviewing an artifact. |
| required user input | artifact type, design stage, domain or problem, decision to support. |
| KB context to retrieve | `DOMAIN_TO_LENS_INDEX.md`; `MASTER_DOMAIN_MAP.md`; `AI_RESPONSE_PATTERNS.md`. |
| source/confidence rules | Questions are original KB scaffolds, not copied or verified book lenses. |
| output format | Question set grouped by domain; why each question matters; expected answer artifact. |
| failure modes | Asking too many questions; asking vague questions; failing to connect questions to output. |
| review checklist | Are questions diagnostic? Are they actionable? Are assumptions marked? |

## Prompt Text

Generate a focused set of game design questions for the provided artifact or problem. Route the problem to the relevant domain and capability, select the smallest useful lens set, and produce questions that lead to concrete design decisions. Do not cite book-specific lens wording. Include source_basis, confidence, and missing evidence.

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
