# Systems / Economy / Playtesting / Project Evidence Pilot

Date: 2026-04-27

## Scope

This limited pilot covers systems_design, economy_balance, playtesting, ProjectOverlay, and PlaytestLog intake. It creates templates, evidence slots, and gap reports only. It does not create real project evidence.

## Source And Evidence Boundary

- High-risk source body text was not parsed.
- No private PDFs or EPUBs were opened.
- No real project evidence was invented.
- No playtest result, participant quote, observation, or design decision was invented.
- Existing sample overlays and playtest logs remain unsupported_draft and are not evidence.
- No claim was promoted.

## Audit Counts

- Audited entities: 553
- Evidence slots created: 8
- ProjectOverlay records audited: 1
- PlaytestLog records audited: 1
- Verified claims created: 0
- Claims promoted: 0
- EvidenceRef records added: 0

By entity type:

- ApplicationCard: 4
- BookDossier: 10
- ChecklistCard: 5
- Claim: 164
- ConceptCard: 109
- DesignLens: 104
- Exercise: 85
- FrameworkCard: 5
- GameDesignWork: 14
- Lesson: 37
- PlaytestLog: 1
- ProjectOverlay: 1
- PromptCard: 5
- WorkflowPack: 9

## Project Evidence Rule

A ProjectOverlay may support project-specific conclusions only. It must not become general KB doctrine unless evidence is reviewed, multiple project cases or stronger source evidence support it, the claim scope is explicitly changed, and a reviewer approves promotion.

## Playtest Evidence Rule

A PlaytestLog must distinguish observed fact, participant quote, tester interpretation, design hypothesis, design decision, and next action. Playtest evidence remains local unless reviewed with broader support.

## Evidence Slots

| evidence_slot_id | target_entity_id | target_claim_id | required_note_type | expected_location_type | accepted_evidence_source | blocked_operations | promotion_target | reviewer_needed | current_status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| evslot_sys_001_system_loop_map | concept_loop | claim_loop_tracked_as_draft_concept | method_note | system map, lawful reading note, or project artifact | user_manual_note, user_legal_file with sidecar, open_fulltext, project_overlay with local scope | high-risk body parsing; metadata-only verification | weak_to_medium_candidate; verified deferred | yes | open_evidence_gap |
| evslot_sys_002_feedback_progression_power | concept_feedback-loop | claim_feedback-loop_tracked_as_draft_concept | method_note | progression/power curve analysis or legal source note | user_manual_note, open_fulltext, approved sidecar, project artifact with local scope | treating one curve as universal system theory | weak_to_medium_candidate; verified deferred | yes | open_evidence_gap |
| evslot_econ_001_source_sink_faucet_drain | concept_economy | claim_economy_tracked_as_draft_concept | method_note | economy sheet, lawful note, or project economy artifact | user_manual_note, project_overlay, playtest_log, approved sidecar, open_fulltext | automated extraction from high-risk economy chapters | weak_to_medium_candidate; verified deferred | yes | open_evidence_gap |
| evslot_econ_002_transitive_intransitive_balance | concept_transitive-balance | claim_transitive-balance_tracked_as_draft_concept | comparison_note or method_note | balance comparison, legal note, or project balance test | user_manual_note, user_legal_file with sidecar, open_fulltext, playtest observation with local scope | promoting intuition to verified balance claim | weak_to_medium_candidate; verified deferred | yes | open_evidence_gap |
| evslot_pt_001_prototype_question_playtest_plan | concept_playtest | claim_playtest_tracked_as_draft_concept | method_note or project_application_note | playtest plan, prototype question, or real session record | user_manual_note, PlaytestLog, ProjectOverlay, open_fulltext | inventing playtest results or participants | project_local_only unless broader review exists | yes | open_evidence_gap |
| evslot_pt_002_observation_quality_iteration_decision | workflow_iteration-decision |  | project_application_note | real playtest observation and decision record | PlaytestLog plus user_manual_note; local scope | treating one playtest decision as universal doctrine | application confidence only; universal verification blocked | yes | open_evidence_gap |
| evslot_po_001_real_project_overlay | project_overlay_sample_design_audit |  | project_application_note | real project overlay replacing sample scaffold | ProjectOverlay with entity_scope project_overlay and EvidenceRef | using sample overlay as evidence | project-specific evidence only | yes | open_evidence_gap |
| evslot_pl_001_real_playtest_log | playtest_log_sample_first_session |  | project_application_note plus playtest record | real playtest log with separated observation categories | PlaytestLog with entity_scope playtest_log and EvidenceRef | inventing playtest observations or generalizing sample results | project/playtest-specific evidence only | yes | open_evidence_gap |

## Result

Pilot C is ready for human project/playtest evidence intake. It remains blocked from verification until real project overlays, real playtest logs, EvidenceRef records, and reviewer approval exist.
