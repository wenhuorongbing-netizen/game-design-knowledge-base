# Prompt Template: Economy Audit

| Field | Value |
|---|---|
| prompt_id | master_designer.economy_audit |
| title | Ask the AI to run economy audit |
| master capability | Systems and Economy Master |
| use case | Use for inflation, resource loops, rewards, costs, progression, scarcity, or balance pressure. |
| required user input | resources, sources, sinks, progression assumptions, reward/cost rules if known. |
| KB context to retrieve | `PROBLEM_TO_LENS_MAP.md`; `PROBLEM_TO_WORKFLOW_MAP.md`; `MASTER_DOMAIN_MAP.md`. |
| source/confidence rules | Do not claim numeric balance without data. Treat all tuning advice as hypothesis. |
| output format | Resource table; source/sink map; accumulation risks; exploit risks; test plan; missing data. |
| failure modes | Inventing rates; assuming player behavior; ignoring sinks; confusing economy with monetization. |
| review checklist | Are sources and sinks explicit? Are accumulation risks named? Are tests proposed? |

## Prompt Text

Audit this game economy. Identify resources, sources, sinks, transformation paths, progression pressure, inflation risks, exploit risks, and readability issues. Produce a source/sink table and a balance test plan. Mark missing data and do not invent numbers.

