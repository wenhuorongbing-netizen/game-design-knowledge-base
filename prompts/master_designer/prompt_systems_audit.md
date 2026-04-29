# Prompt Template: Systems Audit

| Field | Value |
|---|---|
| prompt_id | master_designer.systems_audit |
| title | Ask the AI to run systems audit |
| master capability | Systems and Economy Master |
| use case | Use for loops, resources, interacting features, progression, runaway effects, or system complexity. |
| required user input | system parts, player actions, resources, goals, known loops if any. |
| KB context to retrieve | `DOMAIN_TO_WORKFLOW_INDEX.md`; `DOMAIN_TO_LENS_INDEX.md`; `PROBLEM_TO_OUTPUT_ARTIFACT_MAP.md`. |
| source/confidence rules | System diagnosis is hypothesis until project or playtest evidence exists. |
| output format | System parts table; loop map; feedback risks; dependency map; cut/merge/defer recommendations; tests. |
| failure modes | Treating feature list as system map; inventing numeric balance; ignoring player behavior. |
| review checklist | Are loops explicit? Are dependencies visible? Are risks testable? |

## Prompt Text

Run a source-governed systems audit. Map parts, loops, feedback, dependencies, player actions, and emergent risks. Separate structure from hypothesis. Produce a system map, risk memo, cut/merge/defer options, and next tests. Do not invent project evidence.

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
