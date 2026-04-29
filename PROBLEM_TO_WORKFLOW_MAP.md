# Problem To Workflow Map

Date: 2026-04-29

## Purpose

This map routes user problems to practical workflow packs and output artifacts.

The AI should use this when the user needs action, not only explanation.

## Runtime Routing Hardening

Use `AI_MASTER_ROUTING_DECISION_TREE.md` to identify the route and `AI_MASTER_OUTPUT_ARTIFACT_ROUTER.md` to choose the expected artifact. Select one start workflow and at most one supporting workflow unless the user asks for a deep review.

## Workflow Routing

| Problem | Start Workflow | Supporting Workflow | Minimum Required Input | Output Artifact |
|---|---|---|---|---|
| I have a vague game idea | Game Idea to One-Page Concept Pack | Core Experience Definition Pack | premise or fantasy | one-page concept draft |
| I do not know what my game is about | Core Experience Definition Pack | Game Idea to One-Page Concept Pack | rough idea or theme | player promise and design pillars |
| My core experience is unclear | Core Experience Definition Pack | Player Persona and Audience Pack | intended feeling or player action | core experience statement |
| My choices feel meaningless | Meaningful Decision Audit Pack | Skill / Chance / Challenge Pack | one player choice | decision matrix |
| My rules are confusing | Rules and Formal Elements Pack | Paper Prototype Pack | current rule or mechanic description | rule table |
| My system has too many parts | Systems Map Pack | Design Lens Review Pack | feature/system list | system map and cut list |
| My economy may inflate | Economy and Balance Pack | Systems Map Pack | resources and source/sink assumptions | economy risk memo |
| My game feels boring | Core Experience Definition Pack | Meaningful Decision Audit Pack | current loop or repeated action | boredom diagnosis table |
| My feedback is weak | Game Feel Prototype Pack | UI Feedback Pack | action and current feedback | feedback timing audit |
| My UI is confusing | UI Feedback Pack | Playtest Plan Pack | screen, HUD list, or flow description | UI readability audit |
| My narrative does not support mechanics | Narrative-Mechanic Alignment Pack | World and Character Function Pack | premise and core actions | alignment map |
| My prototype has no clear question | Prototype Question Pack | Paper Prototype Pack or Digital Prototype Pack | prototype idea or risky assumption | prototype question sheet |
| I do not know how to playtest | Playtest Plan Pack | Iteration Decision Pack | thing to test | playtest plan |
| My design is too complex | Design Lens Review Pack | Rules and Formal Elements Pack; Systems Map Pack | feature/rule list | cut/merge/defer table |
| My pitch is weak | Game Idea to One-Page Concept Pack | Release Readiness and Risk Audit Pack | pitch text or rough idea | revised pitch skeleton |
| I do not know what to read next | Source-safe reading process | Master note templates | learning goal | reading recommendation and note prompts |
| I want AI to teach me game design | AI Teaching Procedure | 90-day study plan; Design Lens Review Pack | level and topic | lesson path and mini exercise |

## Missing Input Handling

If the user lacks a complete project, the AI should still produce:

- a partial artifact;
- assumptions;
- missing-input questions;
- next smallest action.

The AI should not require a full game project unless the requested output is explicitly project-specific.

The AI should ask only the minimum required questions from `AI_MASTER_MINIMUM_INPUT_QUESTIONS.md`, then proceed with a bounded draft.

## Workflow Confidence

Most workflow outputs are:

- source_basis: `unsupported_draft`
- confidence: `weak` or `unsupported_draft`

If the user supplies manual notes or project data later, the confidence can be revisited through the evidence workflow.
