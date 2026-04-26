# Tag System

## Purpose

Tags are retrieval aids and filter labels. They do not replace ontology relationships, source basis, confidence, or legal status.

Every tag belongs to a tag type. Controlled tags must be documented here before broad use.

## Tag Format

Use lowercase snake case for machine tags.

Examples:

- `phase_core_play_systems`
- `domain_game_feel`
- `artifact_design_lens`
- `confidence_weak`
- `risk_high_risk_source`

## Phase Tags

| Tag | Label |
|---|---|
| `phase_project_direction` | 立项与方向 |
| `phase_core_play_systems` | 核心玩法与系统设计 |
| `phase_numbers_economy` | 数值与经济设计 |
| `phase_content_narrative` | 内容与叙事 |
| `phase_art_ui_experience` | 美术 / UI / 体验表达 |
| `phase_development_implementation` | 开发实现 |
| `phase_testing_acceptance_audit` | 测试 / 验收 / 审计 |
| `phase_operations_release` | 运营与发布 |

## Domain Tags

| Tag | Label |
|---|---|
| `domain_play_theory` | Play Theory |
| `domain_player_experience` | Player Experience |
| `domain_player_psychology` | Player Psychology |
| `domain_fun_learning_mastery` | Fun, Learning, and Mastery |
| `domain_rules_and_mechanics` | Rules and Mechanics |
| `domain_formal_elements` | Formal Elements |
| `domain_systems_thinking` | Systems Thinking |
| `domain_loops_parts_wholes` | Loops, Parts, and Wholes |
| `domain_economy_and_balance` | Economy and Balance |
| `domain_chance_skill_decisions` | Chance, Skill, and Meaningful Decisions |
| `domain_game_feel` | Game Feel |
| `domain_input_response_context_polish` | Input / Response / Context / Polish |
| `domain_ui_ux_feedback` | UI / UX / Feedback |
| `domain_narrative_story_structure` | Narrative and Story Structure |
| `domain_worldbuilding` | Worldbuilding |
| `domain_character_design` | Character Design |
| `domain_space_level_design` | Space and Level Design |
| `domain_prototyping` | Prototyping |
| `domain_playtesting` | Playtesting |
| `domain_iteration_production` | Iteration and Production |
| `domain_multiplayer_community` | Multiplayer and Community |
| `domain_ethics_responsibility` | Ethics and Responsibility |
| `domain_business_pitch_release` | Business, Pitch, and Release |
| `domain_education_serious_games` | Education, Serious Games, and Transformation |
| `domain_design_exercises` | Design Exercises |
| `domain_prompt_engineering_game_design` | Prompt Engineering for Game Design |

## Artifact Tags

| Tag | Use |
|---|---|
| `artifact_source_document` | SourceDocument records. |
| `artifact_work` | GameDesignWork records. |
| `artifact_book_dossier` | BookDossier files. |
| `artifact_chapter_node` | Chapter or section nodes. |
| `artifact_concept_card` | Concept cards. |
| `artifact_framework_card` | Framework cards. |
| `artifact_quote_card` | Quote cards. |
| `artifact_comparison_card` | Comparison cards. |
| `artifact_application_card` | Application cards. |
| `artifact_checklist_card` | Checklist cards. |
| `artifact_prompt_card` | Prompt cards. |
| `artifact_design_lens` | Design lenses. |
| `artifact_exercise` | Exercises. |
| `artifact_lesson` | Lessons. |
| `artifact_workflow_pack` | Workflow packs. |
| `artifact_prompt_template` | Prompt templates. |
| `artifact_prompt_run` | Prompt run logs. |
| `artifact_project_overlay` | Project overlays. |
| `artifact_design_decision` | Design decision logs. |
| `artifact_playtest_log` | Playtest logs. |
| `artifact_forum_thread` | Forum threads. |
| `artifact_comment` | Comments. |
| `artifact_user_note` | User notes. |

## Difficulty Tags

| Tag | Meaning |
|---|---|
| `difficulty_beginner` | Accessible to a new designer. |
| `difficulty_intermediate` | Requires basic design vocabulary and examples. |
| `difficulty_advanced` | Requires system-level reasoning or production context. |
| `difficulty_expert` | Requires deep theory, live production judgment, or research literacy. |

## Confidence Tags

| Tag | Confidence Value |
|---|---|
| `confidence_verified` | `verified` |
| `confidence_strong` | `strong` |
| `confidence_medium` | `medium` |
| `confidence_weak` | `weak` |
| `confidence_unsupported_draft` | `unsupported_draft` |
| `confidence_user_interpretation` | `user_interpretation` |
| `confidence_ai_hypothesis` | `ai_hypothesis` |

## Source Basis Tags

| Tag | Source Basis |
|---|---|
| `basis_open_fulltext` | `open_fulltext` |
| `basis_official_metadata` | `official_metadata` |
| `basis_user_legal_file` | `user_legal_file` |
| `basis_user_manual_note` | `user_manual_note` |
| `basis_user_manual_quote` | `user_manual_quote` |
| `basis_derived_from_user_note` | `derived_from_user_note` |
| `basis_derived_from_public_metadata` | `derived_from_public_metadata` |
| `basis_metadata_only` | `metadata_only` |
| `basis_unsupported_draft` | `unsupported_draft` |

## Production Role Tags

| Tag | Role |
|---|---|
| `role_game_director` | Direction, vision, scope, and final tradeoffs. |
| `role_game_designer` | Core design and player experience. |
| `role_systems_designer` | Systems, mechanics, and interactions. |
| `role_economy_designer` | Balance, economy, tuning, and progression. |
| `role_narrative_designer` | Story, world, quest, and dialogue. |
| `role_level_designer` | Space, encounter, flow, and traversal. |
| `role_ui_ux_designer` | Interface, usability, feedback, and accessibility. |
| `role_engineer` | Runtime, tools, architecture, and implementation. |
| `role_producer` | Schedule, scope, risk, and coordination. |
| `role_qa_playtest` | Testing, QA, playtest, acceptance, and regression. |
| `role_marketing_release` | Store, pitch, launch, roadmap, and community messaging. |

## Player Experience Tags

| Tag | Use |
|---|---|
| `px_clarity` | Player understands state, action, or consequence. |
| `px_agency` | Player has meaningful choice. |
| `px_mastery` | Player learns and improves. |
| `px_tension` | Player feels pressure, risk, or stakes. |
| `px_flow` | Player experiences smooth challenge and engagement. |
| `px_discovery` | Player explores, infers, or finds novelty. |
| `px_expression` | Player expresses identity or style. |
| `px_social` | Player experience depends on other players. |
| `px_immersion` | Player feels situated in the game world. |
| `px_fairness` | Player perceives outcomes as fair or explainable. |

## Risk Tags

| Tag | Use |
|---|---|
| `risk_high_risk_source` | Suspicious or mirror-marked source. |
| `risk_metadata_only` | Metadata-only record cannot support body claims. |
| `risk_legal_sidecar_required` | Needs user legal sidecar before processing. |
| `risk_unsupported_claim` | Claim lacks evidence. |
| `risk_legacy_contamination` | Derived from old unaudited KB content. |
| `risk_scope_creep` | Production or design scope may expand beyond capacity. |
| `risk_balance_instability` | System likely creates tuning instability. |
| `risk_readability` | Player may not understand state or feedback. |
| `risk_accessibility` | Design may exclude players unnecessarily. |
| `risk_dark_pattern` | Player pressure or monetization may be ethically problematic. |

## AI Workflow Tags

| Tag | Use |
|---|---|
| `ai_retrieval` | Prompt or workflow retrieves KB context. |
| `ai_summarization` | Prompt or workflow summarizes allowed material. |
| `ai_critique` | Prompt or workflow critiques design. |
| `ai_spec_generation` | Prompt or workflow creates a spec. |
| `ai_prompt_template` | Reusable prompt template. |
| `ai_prompt_run` | Logged AI run. |
| `ai_hallucination_audit` | Checks unsupported claims. |
| `ai_source_bounded` | Prompt explicitly restricts source use. |
| `ai_project_overlay` | AI applies general KB to a project. |

## Freeform Tags

Freeform tags are allowed only when:

- no controlled tag exists
- the tag is local to one project or forum discussion
- it does not duplicate phase, domain, confidence, or source basis

Freeform tags should be promoted to controlled tags only after repeated use.

## Tagging Rules

Each reusable object should include:

- one or more phase tags
- one or more domain tags
- one artifact tag
- one confidence tag
- one source basis tag
- optional role, player experience, risk, and AI workflow tags

Tags cannot override source restrictions.
