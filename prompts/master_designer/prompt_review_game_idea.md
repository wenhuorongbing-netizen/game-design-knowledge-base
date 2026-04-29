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

