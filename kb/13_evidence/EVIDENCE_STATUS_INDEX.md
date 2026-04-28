# Evidence Status Index

Date: 2026-04-28

This index makes evidence state visible without requiring users to inspect raw JSON. It is not proof that any claim is verified.

For domain and phase-level trust, use [Evidence-Weighted Coverage Matrix](../12_quality/EVIDENCE_WEIGHTED_COVERAGE_MATRIX.md). It separates structural coverage from metadata-only, user-note, manual-quote, project, playtest, and verified coverage.

## Status Vocabulary

| Field | Meaning |
|---|---|
| evidence_status | Derived evidence state for search and navigation. |
| source_basis | Legal/provenance basis. |
| confidence | Claim/entity confidence. |
| is_verified | True only when status or confidence is verified. |
| has_evidence_refs | True when explicit EvidenceRef IDs are attached. |
| evidence_gap_count | Derived count of known evidence gaps. |
| entity_scope | general_kb, project_overlay, playtest_log, or draft_scaffold. |
| promotion_status | Verified/review/promotion/blocking state. |

## Counts By Evidence Status

| Evidence Status | Count |
| --- | --- |
| evidence_gap_open | 225 |
| evidence_status_unknown | 50 |
| metadata_only | 39 |
| unsupported_draft_no_evidence | 423 |

## Counts By Source Basis

| Source Basis | Count |
| --- | --- |
| derived_from_public_metadata | 218 |
| metadata_only | 39 |
| official_metadata | 43 |
| unsupported_draft | 421 |
| user_manual_note | 16 |

## Priority Evidence Visibility Table

| id | type | title | evidence_status | source_basis | confidence | status | verified | evidence_refs | evidence_gaps | entity_scope | promotion_status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| src-user-rebuild-instruction | SourceDocument | Deprecated BookOS Rebuild Instruction | metadata_only | metadata_only | unsupported_draft | allowed_metadata_only | no | 0 | 0 | draft_scaffold | blocked_no_evidence |
| src-user-prompt-2-known-work-list | SourceDocument | Prompt 2 requested known-work reference list | unsupported_draft_no_evidence | user_manual_note | unsupported_draft | allowed_metadata_only | no | 0 | 0 | draft_scaffold | blocked_no_evidence |
| src-legacy-kb-snapshot | SourceDocument | legacy game design KB snapshot | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | allowed_metadata_only | no | 0 | 0 | draft_scaffold | blocked_no_evidence |
| src-active-kb-rebuild-instruction | SourceDocument | Active Game Design Knowledgebase Rebuild Instruction | unsupported_draft_no_evidence | user_manual_note | unsupported_draft | allowed_metadata_only | no | 0 | 0 | draft_scaffold | blocked_no_evidence |
| claim_play_tracked_as_draft_concept | Claim | claim_play_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_playfulness_tracked_as_draft_concept | Claim | claim_playfulness_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_magic-circle_tracked_as_draft_concept | Claim | claim_magic-circle_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_play-as-context_tracked_as_draft_concept | Claim | claim_play-as-context_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_play-as-appropriation_tracked_as_draft_concept | Claim | claim_play-as-appropriation_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_play-as-disruption_tracked_as_draft_concept | Claim | claim_play-as-disruption_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_play-as-free-movement-within-constraints_tracked_as_draft_concept | Claim | claim_play-as-free-movement-within-constraints_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_player-experience_tracked_as_draft_concept | Claim | claim_player-experience_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_pleasure_tracked_as_draft_concept | Claim | claim_pleasure_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_fun_tracked_as_draft_concept | Claim | claim_fun_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_challenge_tracked_as_draft_concept | Claim | claim_challenge_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_mastery_tracked_as_draft_concept | Claim | claim_mastery_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_learning_tracked_as_draft_concept | Claim | claim_learning_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_flow_tracked_as_draft_concept | Claim | claim_flow_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_curiosity_tracked_as_draft_concept | Claim | claim_curiosity_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_uncertainty_tracked_as_draft_concept | Claim | claim_uncertainty_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_tension_tracked_as_draft_concept | Claim | claim_tension_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_agency_tracked_as_draft_concept | Claim | claim_agency_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_game_tracked_as_draft_concept | Claim | claim_game_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_rules_tracked_as_draft_concept | Claim | claim_rules_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_mechanics_tracked_as_draft_concept | Claim | claim_mechanics_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_dynamics_tracked_as_draft_concept | Claim | claim_dynamics_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_aesthetics_tracked_as_draft_concept | Claim | claim_aesthetics_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_formal-elements_tracked_as_draft_concept | Claim | claim_formal-elements_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_objectives_tracked_as_draft_concept | Claim | claim_objectives_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_procedures_tracked_as_draft_concept | Claim | claim_procedures_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_resources_tracked_as_draft_concept | Claim | claim_resources_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_conflict_tracked_as_draft_concept | Claim | claim_conflict_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_boundaries_tracked_as_draft_concept | Claim | claim_boundaries_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_outcome_tracked_as_draft_concept | Claim | claim_outcome_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_meaningful-decisions_tracked_as_draft_concept | Claim | claim_meaningful-decisions_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_tradeoffs_tracked_as_draft_concept | Claim | claim_tradeoffs_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_dilemmas_tracked_as_draft_concept | Claim | claim_dilemmas_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_risk-versus-reward_tracked_as_draft_concept | Claim | claim_risk-versus-reward_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_chance_tracked_as_draft_concept | Claim | claim_chance_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_skill_tracked_as_draft_concept | Claim | claim_skill_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_twitch-skill_tracked_as_draft_concept | Claim | claim_twitch-skill_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_strategic-skill_tracked_as_draft_concept | Claim | claim_strategic-skill_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_balance_tracked_as_draft_concept | Claim | claim_balance_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_system_tracked_as_draft_concept | Claim | claim_system_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_part_tracked_as_draft_concept | Claim | claim_part_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_loop_tracked_as_draft_concept | Claim | claim_loop_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_whole_tracked_as_draft_concept | Claim | claim_whole_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_emergence_tracked_as_draft_concept | Claim | claim_emergence_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_feedback-loop_tracked_as_draft_concept | Claim | claim_feedback-loop_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_game-plus-player-system_tracked_as_draft_concept | Claim | claim_game-plus-player-system_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_mental-model_tracked_as_draft_concept | Claim | claim_mental-model_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_progression-curve_tracked_as_draft_concept | Claim | claim_progression-curve_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_power-curve_tracked_as_draft_concept | Claim | claim_power-curve_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_economy_tracked_as_draft_concept | Claim | claim_economy_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_source_tracked_as_draft_concept | Claim | claim_source_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_sink_tracked_as_draft_concept | Claim | claim_sink_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_faucet_tracked_as_draft_concept | Claim | claim_faucet_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_drain_tracked_as_draft_concept | Claim | claim_drain_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_transitive-balance_tracked_as_draft_concept | Claim | claim_transitive-balance_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_intransitive-balance_tracked_as_draft_concept | Claim | claim_intransitive-balance_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_game-feel_tracked_as_draft_concept | Claim | claim_game-feel_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_real-time-control_tracked_as_draft_concept | Claim | claim_real-time-control_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_simulated-space_tracked_as_draft_concept | Claim | claim_simulated-space_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_polish_tracked_as_draft_concept | Claim | claim_polish_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_input-metric_tracked_as_draft_concept | Claim | claim_input-metric_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_response-metric_tracked_as_draft_concept | Claim | claim_response-metric_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_context-metric_tracked_as_draft_concept | Claim | claim_context-metric_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_polish-metric_tracked_as_draft_concept | Claim | claim_polish-metric_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_metaphor-metric_tracked_as_draft_concept | Claim | claim_metaphor-metric_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_rules-metric_tracked_as_draft_concept | Claim | claim_rules-metric_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_responsiveness_tracked_as_draft_concept | Claim | claim_responsiveness_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_tightness_tracked_as_draft_concept | Claim | claim_tightness_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_floatiness_tracked_as_draft_concept | Claim | claim_floatiness_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_juiciness_tracked_as_draft_concept | Claim | claim_juiciness_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_feedback_tracked_as_draft_concept | Claim | claim_feedback_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_interface_tracked_as_draft_concept | Claim | claim_interface_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_camera-feel_tracked_as_draft_concept | Claim | claim_camera-feel_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_avatar-feel_tracked_as_draft_concept | Claim | claim_avatar-feel_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_kinesthetic-prototype_tracked_as_draft_concept | Claim | claim_kinesthetic-prototype_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_ideation_tracked_as_draft_concept | Claim | claim_ideation_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_problem-statement_tracked_as_draft_concept | Claim | claim_problem-statement_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_experience-goal_tracked_as_draft_concept | Claim | claim_experience-goal_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_playcentric-design_tracked_as_draft_concept | Claim | claim_playcentric-design_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_prototype_tracked_as_draft_concept | Claim | claim_prototype_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_paper-prototype_tracked_as_draft_concept | Claim | claim_paper-prototype_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_digital-prototype_tracked_as_draft_concept | Claim | claim_digital-prototype_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_playtest_tracked_as_draft_concept | Claim | claim_playtest_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_iteration_tracked_as_draft_concept | Claim | claim_iteration_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_design-document_tracked_as_draft_concept | Claim | claim_design-document_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_pitch_tracked_as_draft_concept | Claim | claim_pitch_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_production-phase_tracked_as_draft_concept | Claim | claim_production-phase_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_release-readiness_tracked_as_draft_concept | Claim | claim_release-readiness_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_premise_tracked_as_draft_concept | Claim | claim_premise_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_story_tracked_as_draft_concept | Claim | claim_story_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_dramatic-arc_tracked_as_draft_concept | Claim | claim_dramatic-arc_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_emergent-story_tracked_as_draft_concept | Claim | claim_emergent-story_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_narrative-architecture_tracked_as_draft_concept | Claim | claim_narrative-architecture_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_worldbuilding_tracked_as_draft_concept | Claim | claim_worldbuilding_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_character-function_tracked_as_draft_concept | Claim | claim_character-function_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_avatar_tracked_as_draft_concept | Claim | claim_avatar_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_player-identity_tracked_as_draft_concept | Claim | claim_player-identity_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_status_tracked_as_draft_concept | Claim | claim_status_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_transformation_tracked_as_draft_concept | Claim | claim_transformation_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_multiplayer-pattern_tracked_as_draft_concept | Claim | claim_multiplayer-pattern_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_community_tracked_as_draft_concept | Claim | claim_community_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_griefing_tracked_as_draft_concept | Claim | claim_griefing_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_player-rights_tracked_as_draft_concept | Claim | claim_player-rights_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_ethics_tracked_as_draft_concept | Claim | claim_ethics_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_responsibility_tracked_as_draft_concept | Claim | claim_responsibility_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_transformational-games_tracked_as_draft_concept | Claim | claim_transformational-games_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_serious-games_tracked_as_draft_concept | Claim | claim_serious-games_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_business-model_tracked_as_draft_concept | Claim | claim_business-model_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_audience_tracked_as_draft_concept | Claim | claim_audience_tracked_as_draft_concept | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| claim_mda-routing-scaffold_is_draft_structure | Claim | claim_mda-routing-scaffold_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_formal-elements-map_is_draft_structure | Claim | claim_formal-elements-map_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_core-loop-map_is_draft_structure | Claim | claim_core-loop-map_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_game-feel-metrics-scaffold_is_draft_structure | Claim | claim_game-feel-metrics-scaffold_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_source-sink-economy-map_is_draft_structure | Claim | claim_source-sink-economy-map_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_meaningful-decision-test_is_draft_structure | Claim | claim_meaningful-decision-test_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_player-motivation-hypothesis-map_is_draft_structure | Claim | claim_player-motivation-hypothesis-map_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_playtest-question-framework_is_draft_structure | Claim | claim_playtest-question-framework_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_prototype-assumption-matrix_is_draft_structure | Claim | claim_prototype-assumption-matrix_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_narrative-function-map_is_draft_structure | Claim | claim_narrative-function-map_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_character-function-sheet_is_draft_structure | Claim | claim_character-function-sheet_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_level-flow-map_is_draft_structure | Claim | claim_level-flow-map_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_ethics-risk-review_is_draft_structure | Claim | claim_ethics-risk-review_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_release-readiness-gate_is_draft_structure | Claim | claim_release-readiness-gate_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_ai-source-bounded-retrieval-framework_is_draft_structure | Claim | claim_ai-source-bounded-retrieval-framework_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_source-governance-checklist_is_draft_structure | Claim | claim_source-governance-checklist_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_legal-sidecar-checklist_is_draft_structure | Claim | claim_legal-sidecar-checklist_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_concept-card-evidence-checklist_is_draft_structure | Claim | claim_concept-card-evidence-checklist_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_core-loop-checklist_is_draft_structure | Claim | claim_core-loop-checklist_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_mechanic-spec-checklist_is_draft_structure | Claim | claim_mechanic-spec-checklist_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_economy-source-sink-checklist_is_draft_structure | Claim | claim_economy-source-sink-checklist_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_game-feel-audit-checklist_is_draft_structure | Claim | claim_game-feel-audit-checklist_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_ui-feedback-checklist_is_draft_structure | Claim | claim_ui-feedback-checklist_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_playtest-plan-checklist_is_draft_structure | Claim | claim_playtest-plan-checklist_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_dossier-promotion-checklist_is_draft_structure | Claim | claim_dossier-promotion-checklist_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_quote-card-safety-checklist_is_draft_structure | Claim | claim_quote-card-safety-checklist_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_project-overlay-checklist_is_draft_structure | Claim | claim_project-overlay-checklist_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_release-readiness-checklist_is_draft_structure | Claim | claim_release-readiness-checklist_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_hallucination-audit-checklist_is_draft_structure | Claim | claim_hallucination-audit-checklist_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_claim-graph-review-checklist_is_draft_structure | Claim | claim_claim-graph-review-checklist_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_source-bounded-card-extraction_is_draft_structure | Claim | claim_source-bounded-card-extraction_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_dossier-note-ingestion_is_draft_structure | Claim | claim_dossier-note-ingestion_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_claim-graph-audit_is_draft_structure | Claim | claim_claim-graph-audit_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_concept-comparison_is_draft_structure | Claim | claim_concept-comparison_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_framework-extraction-from-user-notes_is_draft_structure | Claim | claim_framework-extraction-from-user-notes_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_playtest-analysis_is_draft_structure | Claim | claim_playtest-analysis_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_core-loop-critique_is_draft_structure | Claim | claim_core-loop-critique_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_economy-balance-critique_is_draft_structure | Claim | claim_economy-balance-critique_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_game-feel-critique_is_draft_structure | Claim | claim_game-feel-critique_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_ui-feedback-critique_is_draft_structure | Claim | claim_ui-feedback-critique_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_narrative-premise-critique_is_draft_structure | Claim | claim_narrative-premise-critique_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_character-review_is_draft_structure | Claim | claim_character-review_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_release-page-critique_is_draft_structure | Claim | claim_release-page-critique_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_project-overlay-generation_is_draft_structure | Claim | claim_project-overlay-generation_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_evidence-gap-finder_is_draft_structure | Claim | claim_evidence-gap-finder_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_apply-core-loop-to-prototype_is_draft_structure | Claim | claim_apply-core-loop-to-prototype_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_apply-game-feel-audit_is_draft_structure | Claim | claim_apply-game-feel-audit_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_apply-source-sink-economy-map_is_draft_structure | Claim | claim_apply-source-sink-economy-map_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_apply-playtest-findings_is_draft_structure | Claim | claim_apply-playtest-findings_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_apply-narrative-function-map_is_draft_structure | Claim | claim_apply-narrative-function-map_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_apply-character-function_is_draft_structure | Claim | claim_apply-character-function_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_apply-release-readiness_is_draft_structure | Claim | claim_apply-release-readiness_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_apply-ethics-review_is_draft_structure | Claim | claim_apply-ethics-review_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_apply-community-segmentation_is_draft_structure | Claim | claim_apply-community-segmentation_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| claim_apply-ai-source-governance_is_draft_structure | Claim | claim_apply-ai-source-governance_is_draft_structure | unsupported_draft_no_evidence | unsupported_draft | unsupported_draft | needs_evidence | no | 0 | 1 | draft_scaffold | blocked_no_evidence |
| dossier_a-theory-of-fun-for-game-design | BookDossier | dossier_a-theory-of-fun-for-game-design | metadata_only | metadata_only | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_advanced-game-design-a-systems-approach | BookDossier | dossier_advanced-game-design-a-systems-approach | metadata_only | metadata_only | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_bartle-player-types | BookDossier | dossier_bartle-player-types | evidence_gap_open | user_manual_note | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_better-game-characters-by-design | BookDossier | dossier_better-game-characters-by-design | evidence_gap_open | user_manual_note | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_challenges-for-game-designers | BookDossier | dossier_challenges-for-game-designers | metadata_only | metadata_only | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_characteristics-of-games | BookDossier | dossier_characteristics-of-games | metadata_only | metadata_only | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_chris-crawford-on-game-design | BookDossier | dossier_chris-crawford-on-game-design | evidence_gap_open | user_manual_note | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_formal-abstract-design-tools | BookDossier | dossier_formal-abstract-design-tools | evidence_gap_open | user_manual_note | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_game-design-workshop-a-playcentric-approach | BookDossier | dossier_game-design-workshop-a-playcentric-approach | metadata_only | metadata_only | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_game-feel-a-game-designers-guide-to-virtual-sensation | BookDossier | dossier_game-feel-a-game-designers-guide-to-virtual-sensation | metadata_only | metadata_only | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_game-mechanics-advanced-game-design | BookDossier | dossier_game-mechanics-advanced-game-design | metadata_only | metadata_only | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_level-up-the-guide-to-great-video-game-design | BookDossier | dossier_level-up-the-guide-to-great-video-game-design | metadata_only | metadata_only | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_mda-mechanics-dynamics-aesthetics | BookDossier | dossier_mda-mechanics-dynamics-aesthetics | evidence_gap_open | user_manual_note | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_play-matters | BookDossier | dossier_play-matters | metadata_only | metadata_only | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_rules-of-play | BookDossier | dossier_rules-of-play | evidence_gap_open | user_manual_note | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_the-aesthetic-of-play | BookDossier | dossier_the-aesthetic-of-play | metadata_only | metadata_only | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_the-art-of-computer-game-design | BookDossier | dossier_the-art-of-computer-game-design | evidence_gap_open | user_manual_note | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_the-art-of-game-design-a-book-of-lenses | BookDossier | dossier_the-art-of-game-design-a-book-of-lenses | metadata_only | metadata_only | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| dossier_the-game-design-reader-a-rules-of-play-anthology | BookDossier | dossier_the-game-design-reader-a-rules-of-play-anthology | metadata_only | metadata_only | weak | metadata_shell | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_aesthetics | ConceptCard | aesthetics | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_agency | ConceptCard | agency | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_audience | ConceptCard | audience | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_avatar-feel | ConceptCard | avatar feel | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_avatar | ConceptCard | avatar | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_balance | ConceptCard | balance | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_boundaries | ConceptCard | boundaries | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_business-model | ConceptCard | business model | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_camera-feel | ConceptCard | camera feel | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_challenge | ConceptCard | challenge | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_chance | ConceptCard | chance | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_character-function | ConceptCard | character function | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_community | ConceptCard | community | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_conflict | ConceptCard | conflict | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_context-metric | ConceptCard | context metric | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_curiosity | ConceptCard | curiosity | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_design-document | ConceptCard | design document | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_digital-prototype | ConceptCard | digital prototype | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_dilemmas | ConceptCard | dilemmas | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_drain | ConceptCard | drain | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_dramatic-arc | ConceptCard | dramatic arc | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_dynamics | ConceptCard | dynamics | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_economy | ConceptCard | economy | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_emergence | ConceptCard | emergence | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_emergent-story | ConceptCard | emergent story | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_ethics | ConceptCard | ethics | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_experience-goal | ConceptCard | experience goal | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_faucet | ConceptCard | faucet | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_feedback-loop | ConceptCard | feedback loop | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_feedback | ConceptCard | feedback | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_floatiness | ConceptCard | floatiness | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_flow | ConceptCard | flow | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |
| concept_formal-elements | ConceptCard | formal elements | evidence_gap_open | derived_from_public_metadata | weak | needs_evidence | no | 0 | 1 | general_kb | blocked_no_evidence |

## Full Machine Index

Use [../11_import_export/export/search_index.json](../11_import_export/export/search_index.json) for the full evidence-aware search export.
