# Phase Groups

## Phase Metadata Rule

Phase routing is task routing, not proof that a source contains a specific claim.

Example cards, lenses, and workflows below are placeholders. Unless created from a governed source or user note, they must be marked:

| Field | Value |
|---|---|
| `source_basis` | `unsupported_draft` |
| `confidence` | `unsupported_draft` |
| `claim_scope` | `ai_hypothesis` |

## 1. 立项与方向

### Purpose

Decide what game should exist, why it should exist, who it serves, what experience it promises, and what will be excluded from the first build.

### Core Questions

- What is the central player promise?
- Who is the intended player and what problem, fantasy, or desire is the game addressing?
- What is the smallest viable version of the game?
- What market, platform, team, legal, or production constraints shape the direction?
- What assumptions are most likely to kill the project if wrong?

### Typical Deliverables

- game vision brief
- target player profile
- market and competitor teardown
- platform fit memo
- MVP scope cut
- risk register
- design pillars
- director review memo

### Common Failure Modes

- vague fantasy with no playable promise
- too many audiences at once
- MVP that is not actually minimal
- market comparison without design implications
- project identity defined by content volume instead of player action
- untested assumptions about controls, audience, scope, or platform

### Relevant Knowledge Domains

- `play_theory`
- `player_experience`
- `player_psychology`
- `formal_elements`
- `prototyping`
- `business_pitch_release`
- `ethics_responsibility`
- `prompt_engineering_game_design`

### Relevant Works

- `play-matters`
- `the-aesthetic-of-play`
- `the-art-of-game-design-a-book-of-lenses`
- `a-theory-of-fun-for-game-design`
- `game-design-workshop-a-playcentric-approach`
- `rules-of-play`
- `mda-mechanics-dynamics-aesthetics`
- `bartle-player-types`
- `characteristics-of-games`

### Example Cards

- `card_player_promise_statement`
- `card_mvp_scope_cut`
- `card_target_player_hypothesis`
- `card_design_pillar_test`
- `card_risk_register_pattern`

### Example Lenses

- `lens_player_promise`
- `lens_mvp_truth`
- `lens_audience_fit`
- `lens_scope_risk`
- `lens_platform_fit`

### Example Workflow Packs

- `workflow_project_direction_sprint`
- `workflow_mvp_definition_review`
- `workflow_competitor_teardown_to_design_pillars`
- `workflow_director_greenlight_review`

## 2. 核心玩法与系统设计

### Purpose

Define the repeatable gameplay structure: player verbs, goals, constraints, feedback, core loop, failure and success states, and system interactions.

### Core Questions

- What does the player repeatedly do?
- What decisions matter?
- What changes in game state after each action?
- What makes the loop deepen instead of merely repeat?
- What is the failure condition and why is it meaningful?
- Which mechanics must be prototyped before content production begins?

### Typical Deliverables

- core loop diagram
- mechanic spec
- system map
- rules table
- onboarding sketch
- difficulty curve hypothesis
- mechanic prototype plan
- failure and victory condition spec

### Common Failure Modes

- core loop described as theme instead of action
- mechanics that do not create decisions
- too many systems with unclear priority
- feedback that does not explain consequence
- difficulty curve based on hope rather than testable parameters
- tutorial that teaches UI instead of play logic

### Relevant Knowledge Domains

- `rules_and_mechanics`
- `formal_elements`
- `systems_thinking`
- `loops_parts_wholes`
- `chance_skill_decisions`
- `game_feel`
- `prototyping`
- `playtesting`

### Relevant Works

- `game-feel-a-game-designers-guide-to-virtual-sensation`
- `the-art-of-game-design-a-book-of-lenses`
- `advanced-game-design-a-systems-approach`
- `game-mechanics-advanced-game-design`
- `game-design-workshop-a-playcentric-approach`
- `challenges-for-game-designers`
- `rules-of-play`
- `mda-mechanics-dynamics-aesthetics`
- `formal-abstract-design-tools`
- `characteristics-of-games`

### Example Cards

- `card_core_loop_spec`
- `card_mechanic_verb_table`
- `card_meaningful_decision_test`
- `card_failure_condition_pattern`
- `card_onboarding_sequence`

### Example Lenses

- `lens_core_loop_pressure`
- `lens_meaningful_choice`
- `lens_feedback_legibility`
- `lens_emergence_risk`
- `lens_tutorial_truth`

### Example Workflow Packs

- `workflow_core_loop_definition`
- `workflow_single_mechanic_prototype`
- `workflow_system_map_review`
- `workflow_onboarding_design_review`

## 3. 数值与经济设计

### Purpose

Model resources, quantities, pacing, costs, rewards, scarcity, progression, and balance pressure so that systems remain legible and tunable.

### Core Questions

- What resources enter, leave, accumulate, decay, or transform?
- Which numbers shape player decisions?
- What should become easier, harder, faster, slower, rarer, or more expensive over time?
- Where can runaway advantage or stagnant progression occur?
- What balance questions need simulation or playtest data?

### Typical Deliverables

- economy source/sink map
- resource loop diagram
- reward table
- progression curve
- combat tuning sheet
- drop table
- balance test matrix
- monetization-risk note when applicable

### Common Failure Modes

- rewards that do not support player goals
- progression without meaningful choice
- economy sources without sinks
- balance decisions made from average values only
- hidden inflation
- tuning changes not tied to test observations

### Relevant Knowledge Domains

- `economy_and_balance`
- `systems_thinking`
- `loops_parts_wholes`
- `chance_skill_decisions`
- `playtesting`
- `business_pitch_release`
- `ethics_responsibility`

### Relevant Works

- `advanced-game-design-a-systems-approach`
- `game-mechanics-advanced-game-design`
- `characteristics-of-games`
- `mda-mechanics-dynamics-aesthetics`

### Example Cards

- `card_source_sink_map`
- `card_progression_curve`
- `card_reward_table_pattern`
- `card_runaway_feedback_warning`
- `card_balance_test_matrix`

### Example Lenses

- `lens_economy_pressure`
- `lens_reward_meaning`
- `lens_progression_readability`
- `lens_balance_exploit`
- `lens_randomness_fairness`

### Example Workflow Packs

- `workflow_resource_economy_design`
- `workflow_progression_curve_review`
- `workflow_balance_test_plan`
- `workflow_reward_and_drop_audit`

## 4. 内容与叙事

### Purpose

Create meaning-bearing content: story, world, characters, quests, dialogue, missions, and authored context that supports play rather than drowning it.

### Core Questions

- What does the world make possible or impossible?
- Which characters matter to player action?
- What story information changes player decisions?
- How does content pacing support mechanics?
- What content constraints prevent tone, lore, and task sprawl?

### Typical Deliverables

- world bible
- narrative premise
- quest structure
- character sheet
- dialogue sample
- mission brief
- content generation constraints
- narrative review checklist

### Common Failure Modes

- lore with no gameplay function
- characters defined by biography but not role
- quests that are tasks without dramatic or systemic purpose
- dialogue that explains systems instead of supporting decisions
- worldbuilding that creates production debt

### Relevant Knowledge Domains

- `narrative_story_structure`
- `worldbuilding`
- `character_design`
- `player_experience`
- `ui_ux_feedback`
- `ethics_responsibility`

### Relevant Works

- `level-up-the-guide-to-great-video-game-design`
- `better-game-characters-by-design`
- `chris-crawford-on-game-design`
- `the-art-of-game-design-a-book-of-lenses`

### Example Cards

- `card_world_rule`
- `card_character_gameplay_role`
- `card_quest_arc`
- `card_dialogue_function`
- `card_content_constraint`

### Example Lenses

- `lens_story_supports_play`
- `lens_character_readability`
- `lens_world_constraint`
- `lens_quest_meaning`
- `lens_dialogue_load`

### Example Workflow Packs

- `workflow_world_to_mechanics`
- `workflow_character_design_review`
- `workflow_quest_structure_sprint`
- `workflow_narrative_content_audit`

## 5. 美术 / UI / 体验表达

### Purpose

Make the game understandable, expressive, responsive, accessible, and coherent through visual, interface, motion, sound, and feedback systems.

### Core Questions

- Can the player read what is happening?
- Does feedback communicate cause, effect, priority, and risk?
- Do art direction and UI support the intended experience?
- Are controls, HUD, camera, and feedback coherent?
- What accessibility or readability risks exist?

### Typical Deliverables

- art direction brief
- HUD structure
- feedback spec
- input and response map
- readability audit
- accessibility checklist
- animation and impact note
- visual style consistency guide

### Common Failure Modes

- attractive visuals with poor gameplay readability
- UI that reports state but does not guide action
- feedback that is late, weak, or ambiguous
- style choices that contradict mechanics
- accessibility treated as polish instead of design requirement

### Relevant Knowledge Domains

- `game_feel`
- `input_response_context_polish`
- `ui_ux_feedback`
- `player_experience`
- `character_design`
- `space_level_design`
- `ethics_responsibility`

### Relevant Works

- `game-feel-a-game-designers-guide-to-virtual-sensation`
- `level-up-the-guide-to-great-video-game-design`
- `better-game-characters-by-design`
- `the-art-of-game-design-a-book-of-lenses`

### Example Cards

- `card_feedback_layer_stack`
- `card_hud_information_priority`
- `card_input_response_chain`
- `card_visual_readability_audit`
- `card_accessibility_risk`

### Example Lenses

- `lens_readability`
- `lens_feedback_truth`
- `lens_game_feel`
- `lens_ui_action_guidance`
- `lens_accessibility`

### Example Workflow Packs

- `workflow_feedback_specification`
- `workflow_hud_structure_review`
- `workflow_game_feel_audit`
- `workflow_visual_readability_pass`

## 6. 开发实现

### Purpose

Translate design into playable software, tools, data structures, runtime systems, content pipelines, and maintainable implementation choices.

### Core Questions

- What is the smallest playable implementation that tests the design?
- Which systems require technical specs before coding?
- What data, states, inputs, saves, and tools are needed?
- Where can engineering constraints improve or damage design?
- What should be hardcoded, data-driven, simulated, or tooled?

### Typical Deliverables

- technical design spec
- prototype implementation prompt
- state machine spec
- input system spec
- save/load model
- data schema
- tool request
- performance risk note
- refactor or cleanup checklist

### Common Failure Modes

- code implementation before design assumptions are testable
- design specs that omit state, failure, or edge cases
- tools built before workflow is understood
- prototypes mistaken for shippable architecture
- performance risks discovered after content scale-up

### Relevant Knowledge Domains

- `prototyping`
- `iteration_production`
- `loops_parts_wholes`
- `game_feel`
- `ui_ux_feedback`
- `prompt_engineering_game_design`

### Relevant Works

- `game-design-workshop-a-playcentric-approach`
- `challenges-for-game-designers`
- `level-up-the-guide-to-great-video-game-design`

### Example Cards

- `card_technical_spec_boundary`
- `card_state_machine_prompt`
- `card_data_driven_tuning`
- `card_prototype_scope_guard`
- `card_cleanup_checklist`

### Example Lenses

- `lens_build_only_what_tests`
- `lens_design_to_state`
- `lens_tooling_value`
- `lens_prototype_disposability`
- `lens_performance_design_risk`

### Example Workflow Packs

- `workflow_design_spec_to_prototype`
- `workflow_state_machine_design`
- `workflow_input_system_definition`
- `workflow_cleanup_and_refactor_pass`

## 7. 测试 / 验收 / 审计

### Purpose

Turn assumptions into evidence through playtests, reviews, audits, acceptance criteria, bug triage, balance checks, and project status inspection.

### Core Questions

- What assumption is being tested?
- What behavior was observed?
- What changed after the test?
- Which design claims remain unsupported?
- What must be fixed before the version is accepted?
- What should be cut, repeated, or escalated?

### Typical Deliverables

- playtest plan
- observation log
- balance report
- usability audit
- version acceptance checklist
- bug triage
- regression checklist
- project status audit
- hallucination/source audit for KB outputs

### Common Failure Modes

- collecting opinions instead of observing behavior
- testing too many questions at once
- accepting a feature without criteria
- treating bugs and design failures as the same thing
- ignoring negative playtest evidence
- letting AI-generated claims bypass source review

### Relevant Knowledge Domains

- `playtesting`
- `player_experience`
- `game_feel`
- `ui_ux_feedback`
- `economy_and_balance`
- `iteration_production`
- `prompt_engineering_game_design`

### Relevant Works

- `game-design-workshop-a-playcentric-approach`
- `the-art-of-game-design-a-book-of-lenses`
- `mda-mechanics-dynamics-aesthetics`
- `formal-abstract-design-tools`
- `characteristics-of-games`
- `game-feel-a-game-designers-guide-to-virtual-sensation`

### Example Cards

- `card_playtest_question`
- `card_observation_vs_opinion`
- `card_acceptance_criteria`
- `card_bug_triage_bucket`
- `card_hallucination_audit`

### Example Lenses

- `lens_testable_assumption`
- `lens_player_behavior`
- `lens_acceptance_truth`
- `lens_balance_signal`
- `lens_source_confidence`

### Example Workflow Packs

- `workflow_playtest_design`
- `workflow_version_acceptance`
- `workflow_balance_audit`
- `workflow_project_status_audit`

## 8. 运营与发布

### Purpose

Prepare the game for launch, communication, audience fit, retention learning, updates, community response, and post-release iteration.

### Core Questions

- What promise does the public-facing page make?
- What should players understand before installing or buying?
- What retention or community hypothesis is being tested?
- What update path preserves design identity?
- What telemetry, reviews, and community feedback should influence future design?

### Typical Deliverables

- release readiness checklist
- store page copy
- trailer messaging brief
- roadmap
- update plan
- event plan
- community risk memo
- retention hypothesis

### Common Failure Modes

- marketing promise misaligned with real play
- launch checklist treated as only technical
- retention tactics that undermine design trust
- community feedback ingested without segmentation
- updates that add content without improving loops

### Relevant Knowledge Domains

- `business_pitch_release`
- `multiplayer_community`
- `player_psychology`
- `ethics_responsibility`
- `iteration_production`
- `prompt_engineering_game_design`

### Relevant Works

- `bartle-player-types`
- `level-up-the-guide-to-great-video-game-design`

### Example Cards

- `card_store_page_promise`
- `card_release_readiness`
- `card_retention_hypothesis`
- `card_update_roadmap`
- `card_community_feedback_filter`

### Example Lenses

- `lens_public_promise_truth`
- `lens_release_risk`
- `lens_retention_ethics`
- `lens_community_signal`
- `lens_update_identity`

### Example Workflow Packs

- `workflow_release_readiness_review`
- `workflow_store_page_design`
- `workflow_retention_hypothesis_audit`
- `workflow_update_roadmap_review`
