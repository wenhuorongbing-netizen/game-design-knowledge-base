# AI Workflow Selection Procedure

Date: 2026-04-29

## Purpose

This procedure tells the AI how to select and execute workflow packs from the KB.

## Selection Inputs

| Input | Use |
|---|---|
| user goal | Determines task type. |
| artifact provided | Determines whether to review or create. |
| production phase | Narrows workflow candidates. |
| domain | Selects capability and workflow family. |
| urgency | Chooses quick diagnosis or full workflow. |
| evidence status | Determines confidence and caveats. |

## First Decision

Ask: does the user need a deliverable or an explanation?

- Deliverable needed: select workflow.
- Explanation needed: use teaching procedure.
- Critique needed: use design review procedure.
- Source trust needed: use uncertainty and source rules.

## Workflow Selection Table

| User Situation | Workflow |
|---|---|
| vague game idea | Game Idea to One-Page Concept Pack |
| unclear player experience | Core Experience Definition Pack |
| unclear audience | Player Persona and Audience Pack |
| fake choices or weak decisions | Meaningful Decision Audit Pack |
| unclear repeated play | Core Loop Design Pack |
| vague mechanics | Rules and Formal Elements Pack |
| complex system | Systems Map Pack |
| economy inflation or balance risk | Economy and Balance Pack |
| difficulty, randomness, or fairness issue | Skill / Chance / Challenge Pack |
| controls feel bad | Game Feel Prototype Pack |
| UI feedback unclear | UI Feedback Pack |
| story and play conflict | Narrative-Mechanic Alignment Pack |
| world or character unclear | World and Character Function Pack |
| prototype lacks purpose | Prototype Question Pack |
| non-digital test needed | Paper Prototype Pack |
| digital prototype scope needed | Digital Prototype Pack |
| test planning needed | Playtest Plan Pack |
| playtest results need decisions | Iteration Decision Pack |
| broad critique needed | Design Lens Review Pack |
| launch or production risk | Release Readiness and Risk Audit Pack |

## Execution Steps

1. Name the selected workflow.
2. State why it fits.
3. List required inputs.
4. If inputs are missing, produce a partial template with assumptions.
5. Run the workflow steps in a concise way.
6. Produce the expected output artifact.
7. Add a quality checklist.
8. Add evidence gaps and confidence.
9. End with next action.

## Missing Input Handling

If a workflow requires missing inputs, use this pattern:

| Missing Input | AI Action |
|---|---|
| target player | create placeholder and ask for correction |
| platform/input | mark as assumption |
| core mechanic | ask for one repeated player action |
| rules | generate a rules template, not rules as fact |
| prototype | ask for artifact or propose prototype question |
| playtest data | create playtest plan, not findings |
| project context | produce general scaffold only |

## Workflow Output Format

Use:

- selected workflow
- required assumptions
- output artifact
- risks
- quality checklist
- evidence gaps
- next action

## Workflow Failure Modes

| Failure Mode | Prevention |
|---|---|
| overfitting to wrong workflow | state why workflow was selected and offer alternate route |
| generic advice | require an output artifact |
| pretending missing context exists | mark assumptions |
| too many workflows | choose one primary workflow |
| source overclaiming | cite source_basis and confidence |
| project-specific invention | request project context |

## Default Source Handling

Most workflow packs are original KB scaffolds:

- source_basis: `unsupported_draft`
- confidence: `unsupported_draft` or `weak`
- evidence gap: no user/project/playtest validation yet

## Example Placeholder

User: "My game idea is a cozy survival game about rebuilding a lighthouse."

AI route:

- domain: Game Design Foundations
- capability: Core Experience Master
- workflow: Game Idea to One-Page Concept Pack
- lenses: Core Experience, Player Fantasy, Scope, Feasibility
- output: one-page concept draft with assumptions and next prototype question

