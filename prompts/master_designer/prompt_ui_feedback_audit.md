# Prompt Template: UI Feedback Audit

| Field | Value |
|---|---|
| prompt_id | master_designer.ui_feedback_audit |
| title | Ask the AI to run UI feedback audit |
| master capability | UI/UX Feedback Master |
| use case | Use when players may not understand state, action, consequence, mode, error, or feedback. |
| required user input | screen or flow description, player task, available actions, current feedback, platform/input. |
| KB context to retrieve | `DOMAIN_TO_LENS_INDEX.md`; `PROBLEM_TO_OUTPUT_ARTIFACT_MAP.md`; `AI_DESIGN_REVIEW_PROCEDURE.md`. |
| source/confidence rules | UI critique is hypothesis without artifact or playtest data. |
| output format | Information priority; visible/missing state; action clarity; feedback timing; accessibility risks; fixes. |
| failure modes | Critiquing visuals without task context; ignoring accessibility; assuming user comprehension. |
| review checklist | Does the audit identify what the player needs to know now? |

## Prompt Text

Audit this UI or feedback flow. Identify the player's current goal, required information, visible information, available actions, feedback timing, mode clarity, error recovery, and accessibility risks. Produce a readability audit and prioritized fixes. Mark assumptions and evidence gaps.

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
