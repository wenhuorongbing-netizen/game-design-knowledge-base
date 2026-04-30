# Hands-On Prompt Library

This is the non-maintainer prompt library for using the AI Game Design Master framework in real conversations.

Use this when you want to copy one prompt, paste your idea or question, and receive a concrete design artifact without understanding repository internals.

## How To Use

Fast path:

1. Open [AI_CONTEXT_MINIMUM.md](AI_CONTEXT_MINIMUM.md).
2. Pick one prompt below.
3. Copy only the "Copy-Paste Prompt" section.
4. Replace the bracketed fields.
5. Paste into your AI.
6. Check the answer with the prompt's self-check line.

If you are unsure which prompt to use, open [USER_JOURNEY_HUB.md](USER_JOURNEY_HUB.md) or [HANDS_ON_PROMPT_SELECTION_GUIDE.md](HANDS_ON_PROMPT_SELECTION_GUIDE.md).

Prompt style rules are maintained in [COPY_PASTE_PROMPT_STYLE_GUIDE.md](COPY_PASTE_PROMPT_STYLE_GUIDE.md).

## Quick Picks

- Have a rough idea: use P01.
- Need the core experience: use P02.
- Need critique: use P04, then choose a specific audit if needed.
- Need a prototype or playtest plan: use P10 or P11.
- Want to learn: use P12.
- Need a reading plan: use P13.
- Need to check a claim: use P14.

## Prompt Index

| ID | Prompt | Output artifact |
|---|---|---|
| P01 | [Review My Game Idea](hands_on_prompts/P01_review_my_game_idea.md) | one-page concept memo |
| P02 | [Define Core Experience](hands_on_prompts/P02_define_core_experience.md) | core experience statement |
| P03 | [Generate Design Questions](hands_on_prompts/P03_generate_design_questions.md) | diagnostic question set |
| P04 | [Run Lens Review](hands_on_prompts/P04_run_lens_review.md) | lens review report |
| P05 | [Audit Meaningful Decisions](hands_on_prompts/P05_audit_meaningful_decisions.md) | decision audit matrix |
| P06 | [Audit Systems And Economy](hands_on_prompts/P06_audit_systems_and_economy.md) | system/economy audit |
| P07 | [Audit Game Feel And Feedback](hands_on_prompts/P07_audit_game_feel_and_feedback.md) | feel and feedback checklist |
| P08 | [Audit UI Feedback](hands_on_prompts/P08_audit_ui_feedback.md) | UI feedback audit |
| P09 | [Align Narrative And Mechanics](hands_on_prompts/P09_align_narrative_and_mechanics.md) | narrative-mechanic alignment map |
| P10 | [Make Prototype Plan](hands_on_prompts/P10_make_prototype_plan.md) | prototype question sheet |
| P11 | [Make Playtest Plan](hands_on_prompts/P11_make_playtest_plan.md) | playtest plan |
| P12 | [Teach Me Game Design](hands_on_prompts/P12_teach_me_game_design.md) | mini lesson and exercise |
| P13 | [Create Reading Plan](hands_on_prompts/P13_create_reading_plan.md) | source-safe reading plan |
| P14 | [Check Unsupported Claim](hands_on_prompts/P14_check_unsupported_claim.md) | claim safety report |
| P15 | [Pitch Critique](hands_on_prompts/P15_pitch_critique.md) | pitch critique memo |

## Global Safety Rules

Every hands-on prompt requires the AI to:

- not invent facts;
- label assumptions;
- label `source_basis`;
- label confidence;
- ask at most 3 high-value questions if needed;
- produce a concrete artifact;
- not cite books unless evidence is available;
- not claim verified status without EvidenceRef and review;
- not parse private or high-risk source bodies;
- not invent evidence, quotes, notes, sidecars, project facts, playtest results, telemetry, or benchmark outputs.

## Default Trust Setting

Unless the user supplies real legal/user/project/playtest evidence:

| Field | Default |
|---|---|
| source_basis | `unsupported_draft` for design scaffolds; `metadata_only` for book routing |
| confidence | `weak` |
| verified claims | none |
| evidence_refs | none |

## If A Prompt Fails

Use the self-check prompt included in each prompt file. If the AI still invents evidence, refuses to label uncertainty, or gives generic advice without an artifact, reject the output and rerun with [AI_CONTEXT_MINIMUM.md](AI_CONTEXT_MINIMUM.md).

## Copyability Standard

Hands-on prompts should:

- use short lines;
- use bracketed replacement fields such as `[paste your idea]`;
- ask at most 3 high-value questions unless deeper review is requested;
- require one concrete artifact;
- require assumptions, `source_basis`, confidence, and evidence gaps;
- keep source-safety rules inside the copied prompt.

## Prompt QA

- Review result: [HANDS_ON_PROMPT_PACK_REVIEW.md](HANDS_ON_PROMPT_PACK_REVIEW.md)
- Maintenance checklist: [HANDS_ON_PROMPT_PACK_CHECKLIST.md](HANDS_ON_PROMPT_PACK_CHECKLIST.md)
- Selection guide: [HANDS_ON_PROMPT_SELECTION_GUIDE.md](HANDS_ON_PROMPT_SELECTION_GUIDE.md)
