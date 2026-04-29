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

