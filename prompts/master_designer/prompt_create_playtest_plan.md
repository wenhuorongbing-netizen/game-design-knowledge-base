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

