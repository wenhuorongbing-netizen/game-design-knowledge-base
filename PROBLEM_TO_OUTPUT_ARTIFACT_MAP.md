# Problem To Output Artifact Map

Date: 2026-04-29

## Purpose

This map ensures the AI responds to design problems with concrete artifacts instead of generic advice.

Each artifact can be produced without an active game project by using placeholders, assumptions, and evidence gaps.

## Artifact Routing

| Problem | Output Artifact | Artifact Sections | Evidence Required | AI Must Not Assume |
|---|---|---|---|---|
| I have a vague game idea | one-page concept draft | premise; player fantasy; core action; target experience; MVP proof; risks | user premise and assumptions | market validation or feasibility |
| I do not know what my game is about | player promise and design pillars | promise; pillars; exclusions; test question | user taste, intended player, constraints | that theme equals design |
| My core experience is unclear | core experience statement | intended feeling; player action; feedback; proof; playtest question | target experience and core action | actual player emotion |
| My choices feel meaningless | decision audit matrix | option; information; tradeoff; consequence; learning | choice list and current rules | that more options are better |
| My rules are confusing | rule table | action; rule; state change; constraint; outcome; edge case | current rules or mechanic description | hidden rules or player understanding |
| My system has too many parts | system map and cut list | part; loop; dependency; core/support/noise; cut/merge/defer | feature list and core promise | all features are needed |
| My economy may inflate | source/sink table | resource; source; sink; accumulation risk; test idea | resources and progression assumptions | numeric balance or player behavior |
| My game feels boring | engagement diagnosis table | repeated action; tension; novelty; learning; feedback; test | current loop and target experience | adding rewards fixes boredom |
| My feedback is weak | feedback timing audit | action; expected feedback; current feedback; missing layer; timing risk | action and feedback description | actual feel without artifact |
| My UI is confusing | UI readability audit | player goal; needed info; visible info; action; feedback; ambiguity | screen/flow/HUD description | visual state or accessibility |
| My narrative does not support mechanics | narrative-mechanic alignment map | premise; player role; core actions; world rules; conflicts; fixes | premise and mechanics | story details not provided |
| My prototype has no clear question | prototype question sheet | risky assumption; test question; smallest artifact; success signal; discard rule | prototype idea or assumption | production scope |
| I do not know how to playtest | playtest plan | test goal; participants; tasks; observations; interview; decision rule | prototype state and test goal | results or participant behavior |
| My design is too complex | complexity reduction memo | core promise; feature list; rule burden; cut/merge/defer; next test | feature/rule list | complexity equals depth |
| My pitch is weak | pitch critique and skeleton | audience; promise; player action; proof features; scope; risk | pitch text or concept | market demand |
| I do not know what to read next | reading priority recommendation | capability goal; first work; notes to capture; evidence gap | learning goal | that AI can summarize books |
| I want AI to teach me game design | guided learning path | level; topic; concept; example; exercise; next lesson | user level/topic | verified source doctrine |

## Artifact Quality Rule

Each artifact should include:

- assumptions;
- missing information;
- source_basis;
- confidence;
- next action.

## Default Source/Confidence

Unless evidence exists:

- source_basis: `unsupported_draft`
- confidence: `weak`
- evidence gap: no user notes, project evidence, or playtest evidence yet

