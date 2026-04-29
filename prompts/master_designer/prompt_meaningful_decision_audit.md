# Prompt Template: Meaningful Decision Audit

| Field | Value |
|---|---|
| prompt_id | master_designer.meaningful_decision_audit |
| title | Ask the AI to run meaningful decision audit |
| master capability | Meaningful Decision Master |
| use case | Use when choices feel fake, obvious, random, low-impact, or boring. |
| required user input | player choice, options, information available, consequence, repeat context. |
| KB context to retrieve | `PROBLEM_TO_LENS_MAP.md`; `PROBLEM_TO_WORKFLOW_MAP.md`; `AI_RESPONSE_PATTERNS.md`; `kb/05_cards/CONCEPT_INVENTORY.md`. |
| source/confidence rules | Treat decision criteria as design scaffold, not verified book definition. |
| output format | Decision matrix; option analysis; information state; tradeoff; consequence; fake-choice risks; fixes; test question. |
| failure modes | Assuming more options are better; ignoring player information; inventing consequences. |
| review checklist | Does each option change future state? Does the player know enough? Is there a real tradeoff? |

## Prompt Text

Audit this player choice for meaningfulness. Identify options, information available, tradeoffs, consequences, uncertainty, learning, and future impact. Produce a decision matrix, fake-choice risks, improvement options, and a playtest question. Mark assumptions, source_basis, confidence, and evidence gaps.

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
