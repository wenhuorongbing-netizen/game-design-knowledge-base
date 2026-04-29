# Prompt Template: Create Playtest Plan

| Field | Value |
|---|---|
| prompt_id | master_designer.create_playtest_plan |
| title | Ask the AI to create a playtest plan |
| master capability | Playtesting Master |
| use case | Use when the user needs to observe whether a concept, mechanic, UI, or prototype works. |
| required user input | test goal, prototype state, target player, task, decision to inform. |
| KB context to retrieve | `AI_RESPONSE_PATTERNS.md`; `PROBLEM_TO_WORKFLOW_MAP.md`; `DOMAIN_TO_LENS_INDEX.md`. |
| source/confidence rules | Do not invent participants, observations, quotes, or results. |
| output format | Test goal; participant profile; tasks; observation sheet; interview questions; decision rule; limitations. |
| failure modes | Biased questions; collecting opinions without observation; treating future findings as facts. |
| review checklist | Are observed facts separated from interpretation? Is the design decision explicit? |

## Prompt Text

Create a playtest plan. Define the test question, participant profile, setup, tasks, observations to record, interview questions, decision rule, and limitations. Do not invent playtest findings. Mark source_basis and confidence.

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
