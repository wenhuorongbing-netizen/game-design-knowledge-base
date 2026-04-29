# Prompt Template: Generate Exercises

| Field | Value |
|---|---|
| prompt_id | master_designer.generate_exercises |
| title | Ask the AI to generate exercises |
| master capability | Learning Coach and Socratic Tutor |
| use case | Use when the user wants practice tasks for a concept, lens, workflow, or domain. |
| required user input | concept or domain, learner level, desired output, time limit if any. |
| KB context to retrieve | `AI_TEACHING_PROCEDURE.md`; `MASTER_DOMAIN_MAP.md`; `kb/08_workflows/EXERCISE_LIBRARY.md`; `BOOK_TO_CAPABILITY_MAP.md`. |
| source/confidence rules | Exercises must be original. Do not copy book exercises. |
| output format | Exercise title; goal; constraints; steps; expected output; review rubric; evidence note. |
| failure modes | Copying source exercises; making exercises too vague; no evaluation criteria. |
| review checklist | Is exercise original? Is output clear? Is source boundary visible? |

## Prompt Text

Generate original game design exercises for this concept or domain. Each exercise must have a goal, constraints, steps, expected output, evaluation rubric, and source/confidence note. Do not copy exercise text from any book or claim the exercise is source-derived.

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
