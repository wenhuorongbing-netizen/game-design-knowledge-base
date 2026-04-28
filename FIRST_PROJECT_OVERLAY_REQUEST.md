# First ProjectOverlay Request

Status: BLOCKED_PENDING_USER_PROJECT_CONTEXT

No real project context was supplied in this round. The KB must not invent a project, design decisions, prototype status, playtest observations, or project-local claims.

## What This Means

- No real `ProjectOverlay` record was created.
- No record was added under `kb/09_project_overlays/records/`.
- No project-specific claim was created.
- No design decision was invented.
- No playtest observation was invented.
- No `EvidenceRef` record was created.
- Existing sample overlays remain `unsupported_draft` scaffolds and are not evidence.

## Required User Input

To create the first real ProjectOverlay, provide one project packet with the fields below.

| Field | Required | Notes |
|---|---|---|
| project_overlay_id | yes | Stable ID, for example `project_overlay_fotn_core_loop_2026_04_28`. |
| project_name | yes | Name of the actual game project. |
| genre | yes | Genre or genre mix. |
| project_context | yes | What the project is, current scope, platform, team size, and known constraints. |
| design_problem | yes | The concrete design issue to apply the KB to. |
| intended_player_experience | yes | What the player should feel, do, learn, or decide. |
| current_prototype_status | yes | Idea, paper prototype, playable build, vertical slice, shipped build, or other concrete state. |
| relevant_cards | yes | Existing card IDs, or `unknown` if the user wants maintainer help selecting them. |
| relevant_lenses | yes | Existing lens IDs, or `unknown`. |
| relevant_workflows | yes | Existing workflow IDs, or `unknown`. |
| applied_concepts | optional | Concepts the user believes apply to the project. |
| decisions_already_made | yes | Actual decisions already made by the user/team. Do not invent. |
| project_specific_claims | optional | Claims about this project only; must be marked project-local. |
| design_decisions | optional | Decision IDs or natural-language decisions that already exist. |
| evidence_refs | optional | Usually empty unless real evidence already exists. |
| limitations | yes | What this overlay does not prove. |
| source_basis | yes | Usually `derived_from_user_note` after the user supplies context. |
| confidence | yes | Usually `user_interpretation` or `weak`, not `verified`. |
| status | yes | `draft`, `review_needed`, or another repository-approved status. |

## Suggested Existing Links

Use these only if they fit the real project context:

| Area | Candidate Links |
|---|---|
| Game idea and direction | `workflow_game-idea-to-one-page-concept`, `lens_project-direction_core-experience`, `lens_project-direction_scope`, `concept_experience-goal` |
| Core loop | `workflow_core-loop-design`, `lens_mechanics-and-rules_core-loop`, `lens_systems-and-economy_parts-loops-whole`, `concept_loop` |
| Meaningful decisions | `workflow_meaningful-decision-audit`, `lens_mechanics-and-rules_meaningful-decisions`, `concept_meaningful-decisions`, `concept_tradeoffs` |
| Systems and economy | `workflow_systems-map`, `workflow_economy-and-balance`, `lens_systems-and-economy_source-sink-balance`, `concept_economy` |
| Game feel | `workflow_game-feel-prototype`, `lens_game-feel_tight-versus-floaty`, `lens_game-feel_input-responsiveness`, `concept_game-feel` |
| UI feedback | `workflow_ui-feedback`, `lens_ui-ux-feedback_feedback-immediacy`, `concept_feedback`, `concept_interface` |
| Narrative alignment | `workflow_narrative-mechanic-alignment`, `lens_narrative-world-character_narrative-agency`, `concept_narrative-architecture` |
| Playtest planning | `workflow_playtest-plan`, `workflow_iteration-decision`, `lens_prototype-and-playtest_playtest-signal`, `concept_playtest` |

## Minimal Submission Format

project_overlay_id:

project_name:

genre:

project_context:

design_problem:

intended_player_experience:

current_prototype_status:

relevant_cards:

relevant_lenses:

relevant_workflows:

applied_concepts:

decisions_already_made:

project_specific_claims:

design_decisions:

evidence_refs:

limitations:

status:

## Scope Boundary

A ProjectOverlay can support project-specific conclusions only. It does not prove general game design doctrine. A project-local claim can become a general KB claim only through a separate promotion review with stronger evidence, narrowed wording, and reviewer approval.

## Next User Prompt

Use this exact intent:

submit-first-project-overlay-context

Then provide the filled fields above for one real project.
