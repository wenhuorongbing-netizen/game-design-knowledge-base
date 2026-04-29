# Prompt Template: Narrative-Mechanic Alignment

| Field | Value |
|---|---|
| prompt_id | master_designer.narrative_mechanic_alignment |
| title | Ask the AI to run narrative-mechanic alignment audit |
| master capability | Narrative-System Integration Master |
| use case | Use when story, world, character, player role, and mechanics may conflict. |
| required user input | premise, player role, core actions, world rules, character function, intended experience. |
| KB context to retrieve | `MASTER_DOMAIN_MAP.md`; `DOMAIN_TO_LENS_INDEX.md`; `DOMAIN_TO_WORKFLOW_INDEX.md`. |
| source/confidence rules | Do not invent lore, canon, or project evidence. |
| output format | Alignment map; story promise; mechanic demands; conflicts; support opportunities; next artifact. |
| failure modes | Writing lore instead of design structure; ignoring player agency; assuming story details. |
| review checklist | Do mechanics express the premise? Does player role support agency? |

## Prompt Text

Audit narrative-mechanic alignment. Compare premise, player role, core actions, world rules, character function, and intended experience. Identify support, conflict, missing constraints, and next design artifacts. Do not invent story details or project evidence.

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
