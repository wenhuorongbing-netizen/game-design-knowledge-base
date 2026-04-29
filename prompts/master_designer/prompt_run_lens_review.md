# Prompt Template: Run Lens Review

| Field | Value |
|---|---|
| prompt_id | master_designer.run_lens_review |
| title | Ask the AI to run lens review |
| master capability | Lens Review Master |
| use case | Use for structured critique of a concept, mechanic, system, UI, narrative, prototype, or pitch. |
| required user input | artifact to review, intended experience, current stage, review goal. |
| KB context to retrieve | `AI_DESIGN_REVIEW_PROCEDURE.md`; `DOMAIN_TO_LENS_INDEX.md`; `kb/06_lenses/DESIGN_LENS_BANK.md`. |
| source/confidence rules | Lenses are `unsupported_draft` unless supported by evidence. Do not pretend they are source doctrine. |
| output format | Selected lenses; diagnostic findings; strengths; risks; missing evidence; suggested experiments; next actions. |
| failure modes | Too many lenses; no decision output; generic advice; hidden assumptions. |
| review checklist | Are lenses relevant? Did output produce actions? Are source boundaries explicit? |

## Prompt Text

Run a source-governed lens review on this artifact. Identify the intended player experience, choose the smallest useful lens set, ask the diagnostic questions, and produce strengths, risks, missing evidence, suggested experiments, and next design actions. Do not invent facts. Mark assumptions.

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
