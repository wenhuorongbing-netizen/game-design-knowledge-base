# Prompt Template: Define Core Experience

| Field | Value |
|---|---|
| prompt_id | master_designer.define_core_experience |
| title | Ask the AI to define core experience |
| master capability | Core Experience Master |
| use case | Use when the user needs to clarify what the game should make players feel, do, understand, or remember. |
| required user input | idea or mechanic, target player if known, desired emotion or fantasy, constraints. |
| KB context to retrieve | `AI_MASTER_DESIGNER_OPERATING_MANUAL.md`; `DOMAIN_TO_CAPABILITY_INDEX.md`; `DOMAIN_TO_LENS_INDEX.md`; `DOMAIN_TO_WORKFLOW_INDEX.md`. |
| source/confidence rules | Use as a design hypothesis. Do not imply players will actually feel the target experience without testing. |
| output format | Core experience statement; player fantasy; core action; feedback loop; exclusion list; proof test. |
| failure modes | Confusing theme with experience; ignoring player action; producing vague pillars. |
| review checklist | Is the experience testable? Is there a repeated action? Is there a proof condition? |

## Prompt Text

Help define the core experience for this game idea. Separate theme, player fantasy, player action, feedback, and testable proof. Produce a concise core experience statement, three design pillars, a not-now exclusion list, and one prototype or playtest question. Mark assumptions and evidence gaps.

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
