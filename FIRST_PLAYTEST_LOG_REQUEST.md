# First PlaytestLog Request

Status: BLOCKED_PENDING_USER_PLAYTEST_DATA

No real playtest record was supplied in this round. The KB must not invent participants, observations, participant quotes, tester interpretation, design hypotheses, design decisions, or next actions.

## What This Means

- No real `PlaytestLog` record was created.
- No record was added under `kb/09_project_overlays/playtest_logs/records/`.
- No participant was invented.
- No observation was invented.
- No participant quote was invented.
- No design decision was invented.
- No `EvidenceRef` record was created.
- Existing sample playtest logs remain `unsupported_draft` scaffolds and are not evidence.

## Required User Input

To create the first real PlaytestLog, provide one playtest packet with the fields below.

| Field | Required | Notes |
|---|---|---|
| playtest_log_id | yes | Stable ID, for example `playtest_log_fotn_core_loop_session_001`. |
| project_overlay_id | recommended | Existing real ProjectOverlay ID, if one exists. If none exists yet, state `not available`. |
| project_name | yes | Name of the actual game project. |
| prototype_version | yes | Version, build ID, paper prototype label, or artifact ID tested. |
| test_date | yes | ISO date if possible. |
| test_goal | yes | The concrete design question or learning goal. |
| participant_count | yes | Number of participants. |
| participant_profile_summary | yes | High-level summary only; avoid private personal data. |
| observed_facts | yes | What happened, separated from interpretation. |
| participant_quotes | optional | Only short user-provided quotes from the playtest. Do not invent. |
| tester_interpretation | yes | What the tester thinks the observations mean. |
| design_hypotheses | yes | Hypotheses requiring later validation. |
| design_decisions | optional | Decisions actually made from this playtest. |
| next_actions | yes | Follow-up changes, tests, or open questions. |
| related_cards | optional | Existing card IDs. |
| related_lenses | optional | Existing lens IDs. |
| related_workflows | optional | Existing workflow IDs. |
| evidence_refs | optional | Usually empty unless reviewed evidence exists. |
| limitations | yes | What this playtest does not prove. |
| source_basis | yes | Usually `derived_from_user_note` or `user_manual_note` after user submission. |
| confidence | yes | Usually `user_interpretation` or `weak`, not `verified`. |
| status | yes | `draft`, `review_needed`, or another repository-approved status. |

## Suggested Existing Links

Use these only if they fit the real playtest:

| Area | Candidate Links |
|---|---|
| Playtest planning | `workflow_playtest-plan`, `lens_prototype-and-playtest_playtest-signal`, `concept_playtest` |
| Observation quality | `lens_prototype-and-playtest_observation-quality`, `concept_feedback`, `concept_iteration` |
| Iteration decision | `workflow_iteration-decision`, `lens_prototype-and-playtest_iteration-decision`, `concept_iteration` |
| Prototype question | `workflow_prototype-question`, `lens_prototype-and-playtest_prototype-question`, `concept_prototype` |
| Project overlay linkage | `FIRST_PROJECT_OVERLAY_REQUEST.md`, `project_overlay_sample_design_audit` only as a sample scaffold, not evidence |

## Minimal Submission Format

playtest_log_id:

project_overlay_id:

project_name:

prototype_version:

test_date:

test_goal:

participant_count:

participant_profile_summary:

observed_facts:

participant_quotes:

tester_interpretation:

design_hypotheses:

design_decisions:

next_actions:

related_cards:

related_lenses:

related_workflows:

evidence_refs:

limitations:

status:

## Scope Boundary

A PlaytestLog can support local project decisions only. A single playtest does not prove universal design doctrine. Observed facts, participant quotes, tester interpretation, hypotheses, decisions, and next actions must remain separated.

## Next User Prompt

Use this exact intent:

submit-first-playtest-log-data

Then provide the filled fields above for one real playtest.
