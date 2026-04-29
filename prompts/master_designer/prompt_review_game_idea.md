# Prompt Template: Review A Game Idea

| Field | Value |
|---|---|
| prompt_id | master_designer.review_game_idea |
| title | Ask the AI to review a game idea |
| master capability | Core Experience Master |
| use case | Use when the user has a rough premise, theme, mechanic, genre, or fantasy and wants expert feedback. |
| required user input | game idea, intended player if known, platform if known, desired feeling if known. |
| KB context to retrieve | `MASTER_PROBLEM_SOLVER_INDEX.md`; `AI_DESIGN_REVIEW_PROCEDURE.md`; `DOMAIN_TO_LENS_INDEX.md`; `DOMAIN_TO_WORKFLOW_INDEX.md`; `BOOK_TO_CAPABILITY_MAP.md`. |
| source/confidence rules | Treat output as `unsupported_draft` and `weak` unless user evidence exists. Do not claim any book verifies the idea. |
| output format | Inferred player promise; core action; likely audience; strengths; risks; missing evidence; recommended lenses; next prototype question. |
| failure modes | Overbuilding; assuming market fit; giving generic praise; ignoring source boundaries. |
| review checklist | Did the AI produce an artifact? Did it mark assumptions? Did it name next action? Did it avoid book claims? |

## Prompt Text

Review this game idea as a source-governed game design director. First infer the player promise and repeated player action. Then apply the most relevant project-direction lenses. Produce a concept review memo with strengths, risks, missing evidence, and the next smallest prototype or design question. Do not invent project evidence or cite book content as verified. End with source_basis, confidence, and evidence gaps.

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
