# AI Master Output Artifact Router

Date: 2026-04-29

## Purpose

This router ensures that AI responses produce usable design artifacts rather than generic advice.

## Artifact Routing Table

| User Problem | Output Artifact | Required Sections | Optional Sections | Source/Confidence Footer |
|---|---|---|---|---|
| vague idea | one-page concept draft | player fantasy; core action; target experience; MVP proof; assumptions; next test | audience; pitch hook; scope cut | source_basis, confidence, evidence_gap |
| unclear core experience | core experience statement | intended feeling; player action; feedback; proof signal; exclusion list | player promise; design pillars | source_basis, confidence, assumptions |
| weak player motivation | engagement hypothesis table | repeated action; motivation driver; change over time; tension; test idea | reward/friction notes | source_basis, confidence, evidence_gap |
| meaningless choices | decision audit matrix | choice; options; player information; tradeoff; consequence; learning | fake-choice risk; test prompt | source_basis, confidence, evidence needed |
| confusing rules | rule table | player action; rule; constraint; state change; outcome; edge case | contradiction list | source_basis, confidence, assumptions |
| shallow mechanics | mechanic depth audit | verb; decision; variation; skill expression; exploit risk; complexity cost | prototype idea | source_basis, confidence, evidence_gap |
| broken system loops | system map and cut list | parts; loops; dependencies; feedback; core/support/noise; cut/merge/defer | diagram notes | source_basis, confidence, missing data |
| economy inflation | source/sink risk table | resource; source; sink; accumulation risk; exploit risk; test idea | progression hypothesis | source_basis, confidence, numeric-data gap |
| weak feedback | feedback timing audit | action; state change; expected feedback; current feedback; missing layer; timing risk | audio/visual/camera/UI notes | source_basis, confidence, artifact needed |
| bad game feel | game feel audit | action; input; response; context; camera/avatar; feedback; tuning experiment | prototype instrumentation | source_basis, confidence, artifact needed |
| confusing UI | UI readability audit | player goal; needed information; visible information; available action; feedback; ambiguity | accessibility check | source_basis, confidence, screenshot/flow gap |
| narrative-mechanic mismatch | narrative-mechanic alignment map | premise; player role; core actions; world rules; conflict; repair option | character function notes | source_basis, confidence, project-context gap |
| prototype without question | prototype question sheet | risky assumption; test question; smallest artifact; success signal; discard rule | paper/digital/kinesthetic route | source_basis, confidence, assumption boundary |
| playtest planning | playtest plan | test goal; participant profile; tasks; observations; interview questions; decision rule | bias risks; consent notes | source_basis, confidence, no invented results |
| pitch critique | pitch skeleton | audience; promise; player action; proof features; scope; risk | one-liner variants | source_basis, confidence, no market claim |
| ethical/community risk | ethics risk memo | affected player; risk mechanism; severity; mitigation; uncertainty; next review | accessibility/community notes | source_basis, confidence, no legal claim |
| concept teaching | concept lesson | definition boundary; example placeholder; misconception; mini exercise; reflection | related reading | source_basis, confidence, not verified doctrine |
| reading guidance | reading route | capability target; first work; why read; notes to capture; AI should not claim yet | 7-day reading plan | metadata_only, weak, no book summary |

## Artifact Quality Bar

Each output artifact should include:

- a clear title;
- selected capability;
- selected lens set;
- selected workflow;
- artifact body;
- assumptions;
- missing information;
- source_basis;
- confidence;
- next smallest action.

## Partial Artifact Rule

If inputs are incomplete, the AI should still create a partial artifact. Missing fields should be marked as `unknown`, `assumption`, or `needs_user_input`, not invented.

## Artifact Refusal or Caution Rule

The AI must refuse or caution when:

- the user asks it to summarize private/high-risk source bodies;
- the user asks for quotes not manually provided;
- the user asks for verified claims without evidence_ref;
- the user asks for real playtest findings without playtest data;
- the user asks for legal, market, production, or community certainty without evidence.

