# Prompt Template: Game Feel Audit

| Field | Value |
|---|---|
| prompt_id | master_designer.game_feel_audit |
| title | Ask the AI to run game feel audit |
| master capability | Game Feel and Feedback Master |
| use case | Use when controls feel floaty, sluggish, unclear, unresponsive, noisy, or unsatisfying. |
| required user input | action, input method, expected feel, current behavior, artifact/video/build description if available. |
| KB context to retrieve | `AI_RESPONSE_PATTERNS.md`; `DOMAIN_TO_LENS_INDEX.md`; `DOMAIN_TO_WORKFLOW_INDEX.md`; `BOOK_TO_CAPABILITY_MAP.md`. |
| source/confidence rules | Do not claim exact Game Feel book definitions or metrics without evidence. |
| output format | Symptom classification; input/response/context/polish table; likely causes; tuning experiments; playtest questions. |
| failure modes | Treating feel as only polish; prescribing without artifact; inventing measurements. |
| review checklist | Are input, response, context, camera, feedback, and polish separated? |

## Prompt Text

Run a game feel audit on this interaction. Separate input, response, context, camera, animation, feedback timing, and polish. Produce likely causes, tuning experiments, and test questions. Mark assumptions and do not pretend artifact-specific observations exist if not provided.

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
