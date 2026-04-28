# First Manual Notes Request

Status: BLOCKED_PENDING_USER_MANUAL_NOTES

No actual user-authored manual notes were supplied in this round. The KB must not invent notes, infer reading summaries, parse source files, or create book-derived claims from memory.

## What This Means

- No `UserManualNote` record was created.
- No `EvidenceRef` record was created.
- No source body text was parsed.
- No book chapter was summarized.
- No quote was extracted.
- No claim was promoted.
- Existing cards, lenses, workflows, and claims remain draft/source-governed.

## Required Batch Size

Submit three to five actual user-authored notes. Each note must be written by the user in the user's own words.

Do not paste copied chapter text. Do not paste long quotations. Do not provide AI-generated summaries from private or high-risk source bodies.

## Required Fields Per Note

| Field | Required | Notes |
|---|---|---|
| note_id | yes | Stable ID, for example `note-game-feel-real-time-control-2026-04-28`. |
| work_id | yes | Must exist in `kb/03_works/works.json`, or use a project/manual-note scope approved by maintainer. |
| source_document_id | optional | Use only if the note refers to a specific source in `kb/01_sources/sources.json`. |
| sidecar_id | optional | Use only if a real LegalSidecar exists. |
| title | yes | Short human title. |
| note_type | yes | One of the allowed values below. |
| location | yes | Chapter/page/section/project artifact/session ID, or `not specified`. |
| user_summary | yes | User-authored summary in the user's own words. |
| user_interpretation | yes | What the user thinks the note means for design. |
| user_questions | optional | Open questions caused by the note. |
| related_concepts | yes | Existing concept IDs. |
| related_cards | yes | Existing card IDs. |
| related_lenses | optional | Existing lens IDs. |
| related_workflows | optional | Existing workflow IDs. |
| evidence_refs | optional | Usually empty for first intake unless EvidenceRef records are also created after validation. |
| source_basis | yes | Must be `user_manual_note`. |
| confidence | yes | Must be `user_interpretation` unless reviewed otherwise. |
| status | yes | `draft`, `review_needed`, `accepted_user_note`, or `rejected`. |
| created_at | yes | ISO date. |
| updated_at | yes | ISO date. |

## Allowed `note_type` Values

- `chapter_note`
- `concept_note`
- `reading_reflection`
- `method_note`
- `comparison_note`
- `project_application_note`

## Needed Notes

| Request ID | Priority Domain | Needed User Note | Suggested Existing Links | Why Needed |
|---|---|---|---|---|
| manual-note-request-001 | game_feel | A user-authored note explaining how the user understands game feel, real-time control, responsiveness, tightness/floatiness, or input/response/context/polish metrics. | concepts: `concept_game-feel`, `concept_real-time-control`, `concept_responsiveness`; lens: `lens_game-feel_real-time-control`; workflow: `workflow_game-feel-prototype` | Game Feel has 108 evidence slots and 0 EvidenceRef records. |
| manual-note-request-002 | meaningful_decisions | A user-authored note explaining a meaningful decision, tradeoff, dilemma, fake choice, blind choice, or risk/reward example. | concepts: `concept_meaningful-decisions`, `concept_tradeoffs`, `concept_dilemmas`; lens: `lens_mechanics-and-rules_meaningful-decisions`; workflow: `workflow_meaningful-decision-audit` | Meaningful decision concepts are central but still draft/source-governed. |
| manual-note-request-003 | systems_design | A user-authored note describing a system loop, feedback loop, part/whole relationship, emergence risk, or game+player system example. | concepts: `concept_loop`, `concept_feedback-loop`, `concept_system`; lens: `lens_systems-and-economy_parts-loops-whole`; workflow: `workflow_systems-map` | Systems/economy/playtest pilot has open evidence slots but no real notes. |
| manual-note-request-004 | economy_balance | A user-authored note describing sources, sinks, faucets, drains, progression curve, power curve, or balance failure. | concepts: `concept_economy`, `concept_source`, `concept_sink`, `concept_balance`; lens: `lens_systems-and-economy_source-sink-balance`; workflow: `workflow_economy-and-balance` | Economy and balance workflows need user/project evidence before practical confidence can increase. |
| manual-note-request-005 | playtesting | A user-authored note describing a prototype question, playtest observation, observation quality problem, or iteration decision. | concepts: `concept_playtest`, `concept_iteration`, `concept_prototype`; lens: `lens_prototype-and-playtest_playtest-signal`; workflows: `workflow_playtest-plan`, `workflow_iteration-decision` | Playtest-related claims must stay local unless reviewed with EvidenceRef and scope limits. |

## Minimal Submission Format

For each note, provide:

note_id:

work_id:

source_document_id:

sidecar_id:

title:

note_type:

location:

user_summary:

user_interpretation:

user_questions:

related_concepts:

related_cards:

related_lenses:

related_workflows:

status:

## Review Boundary

Accepted manual notes may support `user_interpretation` or weak draft claims after review. They do not verify book claims. They do not authorize source-body processing. They do not make a high-risk source legally ingestible.

## Next User Prompt

Use this exact intent:

submit-first-user-manual-notes

Then provide three to five filled notes using the fields above.
