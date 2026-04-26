# Master Taxonomy

## Purpose

The Game Design Masterclass KB uses a two-axis taxonomy:

- production phase axis: what the designer is trying to do now
- knowledge domain axis: what kind of design knowledge is being used

This prevents the KB from becoming a pile of book notes. Every reusable item must be findable by task, theory, source basis, confidence, and output artifact.

## Governance Boundary

This taxonomy does not claim that a high-risk source says anything internally.

Current work routing is based on:

- work titles
- author names
- user-provided Prompt 2 references
- metadata-level registry entries

Example concepts, cards, lenses, and workflow packs in this file are scaffolding placeholders. They must use `source_basis = unsupported_draft` until supported by legal sources or user notes.

## Axis 1: Production Phase Groups

| Phase ID | Phase Group | Purpose | Typical Outputs |
|---|---|---|---|
| `phase_project_direction` | 立项与方向 | Decide what to make, why it should exist, who it serves, and what not to build. | vision brief, audience model, MVP cut, risk memo, market comparison |
| `phase_core_play_systems` | 核心玩法与系统设计 | Define the repeatable play structure, core mechanics, loops, goals, constraints, and player decisions. | core loop spec, mechanic spec, system map, onboarding sketch, difficulty plan |
| `phase_numbers_economy` | 数值与经济设计 | Shape values, pacing, rewards, resource flows, balance pressures, and progression curves. | economy map, reward table, tuning sheet, progression curve, balance test plan |
| `phase_content_narrative` | 内容与叙事 | Build characters, worlds, story structures, missions, dialogue, and meaning-bearing content. | world bible, quest outline, character sheet, dialogue spec, narrative constraint doc |
| `phase_art_ui_experience` | 美术 / UI / 体验表达 | Make the game readable, expressive, responsive, coherent, and accessible moment to moment. | art direction brief, HUD map, feedback spec, readability audit, accessibility notes |
| `phase_development_implementation` | 开发实现 | Translate design into prototypes, systems, tools, runtime behavior, and maintainable implementation. | technical spec, prototype plan, input/state spec, tool request, performance risk note |
| `phase_testing_acceptance_audit` | 测试 / 验收 / 审计 | Test assumptions, validate play, inspect quality, triage bugs, and decide what is accepted or rejected. | playtest plan, balance report, bug triage, acceptance checklist, status audit |
| `phase_operations_release` | 运营与发布 | Prepare launch, communicate value, sustain player interest, and learn from post-release behavior. | release checklist, store page copy, roadmap, event plan, retention review |

## Axis 2: Cross-Domain Knowledge Domains

| Domain ID | Domain Name | Short Description |
|---|---|---|
| `play_theory` | Play Theory | What play is, why it matters, and how games frame activity. |
| `player_experience` | Player Experience | What the player perceives, feels, understands, and remembers. |
| `player_psychology` | Player Psychology | Motivation, attention, learning, identity, emotion, and behavior. |
| `fun_learning_mastery` | Fun, Learning, and Mastery | How challenge, learning, pattern recognition, and competence produce engagement. |
| `rules_and_mechanics` | Rules and Mechanics | The rule structures, actions, verbs, constraints, and state changes that define play. |
| `formal_elements` | Formal Elements | Players, objectives, procedures, resources, boundaries, outcomes, and other formal parts. |
| `systems_thinking` | Systems Thinking | How mechanics interact as feedback structures and dynamic systems. |
| `loops_parts_wholes` | Loops, Parts, and Wholes | Core loops, nested loops, component hierarchies, and system decomposition. |
| `economy_and_balance` | Economy and Balance | Resource flows, rewards, costs, scarcity, pacing, and tuning. |
| `chance_skill_decisions` | Chance, Skill, and Meaningful Decisions | Randomness, agency, tradeoffs, uncertainty, risk, and decision quality. |
| `game_feel` | Game Feel | Real-time control, response, motion, feedback, and virtual sensation. |
| `input_response_context_polish` | Input / Response / Context / Polish | Input timing, response mapping, contextual control, polish layers, and moment-to-moment feedback. |
| `ui_ux_feedback` | UI / UX / Feedback | Information architecture, HUD, usability, affordance, feedback, and accessibility. |
| `narrative_story_structure` | Narrative and Story Structure | Plot, pacing, quest structure, dramatic arc, authored sequence, and interactive narrative shape. |
| `worldbuilding` | Worldbuilding | Setting logic, factions, history, tone, culture, constraints, and environmental meaning. |
| `character_design` | Character Design | Character function, readability, motivation, player relationship, and representation. |
| `space_level_design` | Space and Level Design | Spatial layout, encounter flow, traversal, pacing, pathing, and spatial readability. |
| `prototyping` | Prototyping | Fast experiments that test design assumptions with playable or inspectable artifacts. |
| `playtesting` | Playtesting | Observation, test design, feedback capture, validity, and interpretation. |
| `iteration_production` | Iteration and Production | Pipelines, scope control, design specs, prioritization, and collaboration. |
| `multiplayer_community` | Multiplayer and Community | Social play, player types, matchmaking, cooperation, competition, moderation, and community health. |
| `ethics_responsibility` | Ethics and Responsibility | Safety, fairness, accessibility, dark patterns, representation, and player well-being. |
| `business_pitch_release` | Business, Pitch, and Release | Positioning, market fit, monetization framing, launch communication, and product strategy. |
| `education_serious_games` | Education, Serious Games, and Transformation | Learning goals, behavior change, training, simulation, and social impact. |
| `design_exercises` | Design Exercises | Practice prompts, constraints, drills, workshops, and skill-building tasks. |
| `prompt_engineering_game_design` | Prompt Engineering for Game Design | AI prompt patterns for ideation, critique, specification, testing, and documentation. |

## Domain Detail Matrix

| Domain | Why It Matters | Source Works | Phase Groups | Common Artifacts | Example Concepts | Example Exercises | Related Domains |
|---|---|---|---|---|---|---|---|
| Play Theory | Gives designers vocabulary for what kind of activity the game creates. | `play-matters`; `the-aesthetic-of-play`; `the-game-design-reader-a-rules-of-play-anthology`; `rules-of-play`; `the-art-of-computer-game-design` | 立项与方向; 核心玩法与系统设计 | design philosophy note; play definition memo | play frame; voluntary constraint; player stance | Compare two non-digital play activities as game seeds. | player_experience; formal_elements; ethics_responsibility |
| Player Experience | Keeps design focused on perceived experience, not only mechanics. | `game-feel-a-game-designers-guide-to-virtual-sensation`; `the-art-of-game-design-a-book-of-lenses`; `a-theory-of-fun-for-game-design`; `characteristics-of-games` | 立项与方向; 核心玩法与系统设计; 美术 / UI / 体验表达; 测试 / 验收 / 审计 | target experience statement; experience audit | anticipation; feedback clarity; flow hypothesis | Write a target-experience statement for a 3-minute prototype. | game_feel; ui_ux_feedback; playtesting |
| Player Psychology | Helps explain motivation, learning, attention, emotion, and identity. | `a-theory-of-fun-for-game-design`; `better-game-characters-by-design`; `bartle-player-types` | 立项与方向; 核心玩法与系统设计; 内容与叙事; 运营与发布 | player motivation note; persona hypothesis | motivation; mastery; avatar attachment | Draft three player motivation hypotheses and tests. | fun_learning_mastery; multiplayer_community; character_design |
| Fun, Learning, and Mastery | Connects challenge and learning to sustained engagement. | `a-theory-of-fun-for-game-design`; `game-design-workshop-a-playcentric-approach`; `challenges-for-game-designers` | 核心玩法与系统设计; 测试 / 验收 / 审计 | skill ladder; challenge curve | learning loop; mastery gate; difficulty ramp | Convert a mechanic into a three-step mastery ladder. | player_psychology; playtesting; economy_and_balance |
| Rules and Mechanics | Defines what players can do and what the game system recognizes. | `game-mechanics-advanced-game-design`; `rules-of-play`; `formal-abstract-design-tools`; `characteristics-of-games` | 核心玩法与系统设计; 数值与经济设计 | mechanic spec; rule table | verb; constraint; state transition | Rewrite a vague feature as explicit rules. | formal_elements; systems_thinking; chance_skill_decisions |
| Formal Elements | Provides structured inventory of game parts. | `rules-of-play`; `the-game-design-reader-a-rules-of-play-anthology`; `mda-mechanics-dynamics-aesthetics` | 立项与方向; 核心玩法与系统设计 | formal element checklist; game breakdown | objective; procedure; outcome | Decompose a familiar game into formal elements. | rules_and_mechanics; systems_thinking; play_theory |
| Systems Thinking | Helps designers reason about interaction, emergence, and second-order effects. | `advanced-game-design-a-systems-approach`; `game-mechanics-advanced-game-design`; `characteristics-of-games` | 核心玩法与系统设计; 数值与经济设计; 测试 / 验收 / 审计 | system map; feedback loop diagram | positive feedback; negative feedback; emergence | Draw a system map for a survival loop. | loops_parts_wholes; economy_and_balance; playtesting |
| Loops, Parts, and Wholes | Turns abstract systems into usable design structures. | `advanced-game-design-a-systems-approach`; `game-design-workshop-a-playcentric-approach`; `level-up-the-guide-to-great-video-game-design` | 立项与方向; 核心玩法与系统设计; 开发实现 | core loop diagram; feature hierarchy | core loop; nested loop; dependency | Identify the smallest loop worth prototyping. | systems_thinking; prototyping; iteration_production |
| Economy and Balance | Controls pacing, scarcity, reward, and long-term system pressure. | `game-mechanics-advanced-game-design`; `advanced-game-design-a-systems-approach`; `characteristics-of-games` | 数值与经济设计; 测试 / 验收 / 审计; 运营与发布 | economy map; tuning sheet; reward matrix | sink; source; progression curve | Build a source/sink table for one resource. | systems_thinking; chance_skill_decisions; playtesting |
| Chance, Skill, and Meaningful Decisions | Keeps randomness and agency legible and satisfying. | `game-mechanics-advanced-game-design`; `characteristics-of-games`; `rules-of-play` | 核心玩法与系统设计; 数值与经济设计; 测试 / 验收 / 审计 | decision matrix; probability note | risk; tradeoff; uncertainty | Replace one random event with a meaningful choice. | rules_and_mechanics; economy_and_balance; player_experience |
| Game Feel | Shapes the immediate tactile quality of interaction. | `game-feel-a-game-designers-guide-to-virtual-sensation`; `level-up-the-guide-to-great-video-game-design` | 核心玩法与系统设计; 美术 / UI / 体验表达; 测试 / 验收 / 审计 | control feel audit; response tuning note | input latency; hit feedback; virtual sensation | Tune one action across three response profiles. | input_response_context_polish; ui_ux_feedback; prototyping |
| Input / Response / Context / Polish | Converts playable mechanics into satisfying moment-to-moment interaction. | `game-feel-a-game-designers-guide-to-virtual-sensation`; `level-up-the-guide-to-great-video-game-design` | 核心玩法与系统设计; 美术 / UI / 体验表达; 开发实现 | input map; polish checklist | input buffer; context action; animation feedback | List every feedback layer for one player action. | game_feel; ui_ux_feedback; development_implementation |
| UI / UX / Feedback | Makes state, action, consequence, and next step understandable. | `level-up-the-guide-to-great-video-game-design`; `better-game-characters-by-design`; `the-art-of-game-design-a-book-of-lenses` | 美术 / UI / 体验表达; 测试 / 验收 / 审计 | HUD map; usability checklist; accessibility audit | affordance; signifier; readability | Run a UI first-five-minutes audit. | player_experience; game_feel; playtesting |
| Narrative and Story Structure | Organizes authored meaning, quests, pacing, and player-facing events. | `level-up-the-guide-to-great-video-game-design`; `chris-crawford-on-game-design`; `better-game-characters-by-design` | 内容与叙事; 立项与方向 | narrative brief; quest graph | dramatic beat; quest arc; reveal | Convert a mechanic into a short quest premise. | worldbuilding; character_design; player_experience |
| Worldbuilding | Gives content coherence and constraints for production. | `level-up-the-guide-to-great-video-game-design`; `the-art-of-game-design-a-book-of-lenses` | 内容与叙事; 美术 / UI / 体验表达 | world bible; faction sheet | setting rule; tone constraint; lore affordance | Write five world rules that constrain mechanics. | narrative_story_structure; character_design; art_ui_experience |
| Character Design | Supports readable agents, avatars, opponents, allies, and emotional hooks. | `better-game-characters-by-design`; `level-up-the-guide-to-great-video-game-design` | 内容与叙事; 美术 / UI / 体验表达; 测试 / 验收 / 审计 | character sheet; silhouette/readability note | role; motivation; relationship | Redesign a character around one gameplay function. | player_psychology; narrative_story_structure; ui_ux_feedback |
| Space and Level Design | Shapes movement, encounter rhythm, discovery, and spatial comprehension. | `level-up-the-guide-to-great-video-game-design`; `game-design-workshop-a-playcentric-approach` | 核心玩法与系统设计; 内容与叙事; 美术 / UI / 体验表达; 开发实现 | level flow map; encounter plan | critical path; gating; landmark | Block out a level using only verbs and constraints. | game_feel; ui_ux_feedback; prototyping |
| Prototyping | Turns assumptions into testable artifacts quickly. | `game-design-workshop-a-playcentric-approach`; `challenges-for-game-designers`; `game-feel-a-game-designers-guide-to-virtual-sensation` | 立项与方向; 核心玩法与系统设计; 开发实现; 测试 / 验收 / 审计 | prototype plan; assumption test | throwaway prototype; paper prototype; greybox | Create a one-hour prototype test plan. | playtesting; iteration_production; design_exercises |
| Playtesting | Separates designer intention from observed player behavior. | `game-design-workshop-a-playcentric-approach`; `the-art-of-game-design-a-book-of-lenses`; `mda-mechanics-dynamics-aesthetics` | 测试 / 验收 / 审计; 核心玩法与系统设计 | playtest script; observation sheet; debrief | test objective; observer bias; signal | Design a test for one risky mechanic assumption. | prototyping; player_experience; iteration_production |
| Iteration and Production | Keeps design knowledge actionable across a team and schedule. | `game-design-workshop-a-playcentric-approach`; `level-up-the-guide-to-great-video-game-design`; `chris-crawford-on-game-design` | 开发实现; 测试 / 验收 / 审计; 运营与发布 | design spec; sprint note; decision log | scope cut; production risk; iteration loop | Turn one playtest finding into three backlog items. | prototyping; playtesting; business_pitch_release |
| Multiplayer and Community | Handles social motivation, player types, coordination, conflict, and live community context. | `bartle-player-types`; `rules-of-play`; `characteristics-of-games` | 立项与方向; 核心玩法与系统设计; 运营与发布 | community hypothesis; mode spec | player type; cooperation; competition | Create a feature map for two player motivations. | player_psychology; ethics_responsibility; business_pitch_release |
| Ethics and Responsibility | Prevents harmful, inaccessible, exploitative, or exclusionary design. | `play-matters`; `better-game-characters-by-design`; `bartle-player-types` | 立项与方向; 美术 / UI / 体验表达; 运营与发布 | ethics review; accessibility checklist | dark pattern; fairness; representation | Audit one system for pressure and fairness risks. | player_psychology; ui_ux_feedback; business_pitch_release |
| Business, Pitch, and Release | Connects design identity to market positioning and launch reality. | `level-up-the-guide-to-great-video-game-design`; `bartle-player-types` | 立项与方向; 运营与发布 | pitch deck; store page brief; roadmap | audience promise; feature hook; retention loop | Write a one-sentence promise and three proof features. | multiplayer_community; iteration_production; player_experience |
| Education, Serious Games, and Transformation | Applies game design to learning, training, simulation, and behavior change. | `a-theory-of-fun-for-game-design`; `the-game-design-reader-a-rules-of-play-anthology` | 立项与方向; 核心玩法与系统设计; 测试 / 验收 / 审计 | learning objective map; assessment plan | transfer; practice loop; feedback cycle | Convert one learning objective into a playable action. | fun_learning_mastery; playtesting; ethics_responsibility |
| Design Exercises | Builds designer skill through constrained practice. | `challenges-for-game-designers`; `game-design-workshop-a-playcentric-approach` | 核心玩法与系统设计; 开发实现; 测试 / 验收 / 审计 | exercise card; workshop plan | constraint drill; variant design; critique prompt | Design three games with the same verb and different goals. | prototyping; playtesting; rules_and_mechanics |
| Prompt Engineering for Game Design | Makes AI usage repeatable, auditable, and source-governed. | user instructions; KB governance docs | all phases | prompt template; prompt run log; audit checklist | retrieval prompt; critique prompt; source-bounded generation | Rewrite a vague AI prompt with source and confidence constraints. | iteration_production; playtesting; ethics_responsibility |

## Object Families

| Family | Object Types |
|---|---|
| Source and bibliography | `SourceDocument`, `GameDesignWork`, `Author`, `BookDossier`, `ChapterNode` |
| Knowledge atoms | `Concept`, `Claim`, `Evidence`, `Quote`, `Framework` |
| Reusable production objects | `DesignLens`, `Exercise`, `KnowledgeCard`, `WorkflowPack`, `PromptTemplate` |
| Project application | `Project`, `ProjectOverlay`, `DesignDecision`, `PlaytestLog`, `PromptRun` |
| Community discussion | `ForumThread`, `Comment`, `UserNote` |
| Retrieval support | `Tag`, relationship edges, source IDs, confidence, source basis |

## Required Metadata For All Reusable Objects

Every future dossier, card, lens, lesson, workflow, prompt template, project overlay, design decision, playtest log, and forum-derived claim must include:

| Field | Required | Purpose |
|---|---:|---|
| `id` | yes | Stable machine ID. |
| `object_type` | yes | Entity type for graph import. |
| `title` | yes | Human label. |
| `source_basis` | yes | Legal/provenance basis. |
| `confidence` | yes | Trust level. |
| `source_ids` | yes | SourceDocument, Work, Note, or Evidence IDs. |
| `claim_scope` | yes | `source_stated`, `user_interpretation`, `ai_hypothesis`, `project_application`, or `playtest_observation`. |
| `phase_ids` | yes | Production phase routing. |
| `domain_ids` | yes | Knowledge domain routing. |
| `tags` | yes | Controlled retrieval labels. |
| `created_at` | yes | Lifecycle tracking. |
| `updated_at` | yes | Lifecycle tracking. |
| `review_status` | yes | Draft, reviewed, verified, deprecated, or quarantined. |

## Knowledge State Model

| State | Meaning |
|---|---|
| `intake` | Metadata exists; no usable content yet. |
| `draft` | Human or AI scaffold exists; not verified. |
| `source_backed` | Supported by a governed legal source or user note. |
| `reviewed` | Checked for source basis and conceptual clarity. |
| `project_applied` | Used in a specific project overlay or decision. |
| `playtest_tested` | Tested through a playtest log. |
| `deprecated` | Replaced or no longer recommended. |
| `quarantined` | Retained but blocked for legal or reliability reasons. |

## Graph Design Principles

The graph must answer these questions:

- Which source or note supports this claim?
- Which phase does this object help with?
- Which domain does this object belong to?
- Which project used this knowledge?
- Which playtest validated or invalidated it?
- Which workflow produces which deliverable?
- Which claims are still unsupported drafts?

No edge may silently upgrade legal status or confidence.
