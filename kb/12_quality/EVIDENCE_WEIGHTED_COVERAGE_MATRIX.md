# Evidence-Weighted Coverage Matrix

Date: 2026-04-28

This matrix separates structural coverage from evidence-backed coverage. The KB has broad draft structure, but it does not yet have verified source-backed coverage.

## Executive Summary

| Metric | Count | Meaning |
|---|---:|---|
| total entities | 859 | Structural KB objects exported by the importer. |
| search documents | 737 | Searchable safe KB records. |
| relationships | 8405 | Routing, graph, and structural links. |
| entities with evidence gaps | 761 | Objects that still need evidence, review, or promotion. |
| entities with EvidenceRefs | 0 | No evidence refs exist yet. |
| UserManualNote records | 0 | No real user-authored manual notes have been ingested. |
| UserManualQuote records | 0 | No lawful user-provided quote has been ingested. |
| real ProjectOverlay records | 0 | Only a sample scaffold exists; it is not evidence. |
| real PlaytestLog records | 0 | Only a sample scaffold exists; it is not evidence. |
| verified claims | 0 | Verified source-backed masterclass gate remains blocked. |

## Rating Model

| Rating | Meaning |
|---|---|
| no_evidence | Structural material may exist, but there is no metadata-only basis, EvidenceRef, user note, quote, project evidence, playtest evidence, or verified claim in that area. |
| metadata_only | The area has metadata-only or public-metadata scaffolding, but no EvidenceRef-backed support. |
| user_interpretation_started | Real user notes, manual quotes, project overlays, or playtest logs exist, but claims remain local or interpretive. |
| weak_evidence | At least one EvidenceRef exists, but evidence remains limited. |
| moderate_evidence | Multiple EvidenceRefs exist, but verified status is not yet justified. |
| strong_evidence | Substantial reviewed evidence exists, still below verified doctrine. |
| verified | At least one verified claim exists with legal EvidenceRef support. |

## Coverage Type Separation

| Coverage Type | Current Status | Count | Interpretation |
|---|---|---:|---|
| structural coverage | strong draft structure | 859 entities | Useful for navigation, learning, prompting, and workflow routing. |
| metadata-only coverage | present | 39 entities | Bibliographic or metadata-safe coverage only. |
| user-note-backed coverage | absent | 0 UserManualNote records | Requires user-authored notes. |
| manual-quote-backed coverage | absent | 0 UserManualQuote records | Requires short user-provided lawful quotes. |
| project-overlay-backed coverage | absent | 0 real ProjectOverlay records | Sample overlay is not evidence. |
| playtest-backed coverage | absent | 0 real PlaytestLog records | Sample playtest log is not evidence. |
| verified source-backed coverage | absent | 0 verified claims | Requires legal EvidenceRefs and promotion review. |

## Domain Evidence Coverage

| Domain | Total Entities | Evidence Gaps | Metadata-Only | EvidenceRefs | User Notes | Manual Quotes | Project-Local Evidence | Playtest Evidence | Verified Claims | Evidence Rating | Next Evidence Needed |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|
| ai_assisted_design | 4 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | no_evidence | Add user notes or reviewed prompt-run evidence. |
| business_pitch_release | 100 | 95 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | no_evidence | Add launch/pitch project notes and release evidence. |
| chance_skill_decisions | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | no_evidence | Add manual notes linking chance/skill design examples. |
| character_design | 63 | 59 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | no_evidence | Add character design notes or project examples. |
| design_exercises | 4 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add exercise completion notes and review results. |
| design_lenses | 20 | 18 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add project lens review notes. |
| economy_and_balance | 105 | 97 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add economy notes, project overlays, and playtest observations. |
| education_serious_games | 26 | 22 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add user notes or open-source references. |
| ethics_responsibility | 65 | 58 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add project ethics review records. |
| formal_elements | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | no_evidence | Add formal-elements notes. |
| formal_game_design | 148 | 123 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add manual notes for rules, procedures, objectives, and outcomes. |
| game_feel | 140 | 134 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add Game Feel manual notes and tuning/playtest evidence. |
| input_response_context_polish | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | no_evidence | Add game-feel metric notes. |
| interactivity | 96 | 82 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add interaction notes and prototype evidence. |
| iteration_production | 5 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | no_evidence | Add iteration decision records. |
| level_design | 4 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add level design project notes. |
| loops_parts_wholes | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | no_evidence | Add system map notes. |
| multiplayer_community | 59 | 56 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | no_evidence | Add community or moderation case notes. |
| narrative_design | 68 | 62 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add narrative-mechanic project notes. |
| narrative_story_structure | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | no_evidence | Add story-structure notes. |
| play_theory | 70 | 57 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add legal/user notes for play theory claims. |
| player_experience | 252 | 221 | 18 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add user notes and playtest evidence. |
| player_psychology | 101 | 93 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add user notes or official/open references. |
| playtesting | 78 | 65 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add real PlaytestLog records. |
| production_process | 109 | 99 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add production/project decision logs. |
| prompt_engineering_for_game_design | 41 | 41 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | no_evidence | Add reviewed prompt run evidence. |
| prompt_engineering_game_design | 19 | 15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | no_evidence | Add reviewed prompt templates and run logs. |
| prototyping | 107 | 96 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add prototype records and observations. |
| rules_and_mechanics | 230 | 210 | 10 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add meaningful-decision and formal-rule notes. |
| space_level_design | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | no_evidence | Add level/space design notes. |
| systems_design | 112 | 102 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add system loop notes and project overlays. |
| systems_thinking | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | no_evidence | Add systems-thinking notes. |
| ui_ux_feedback | 135 | 125 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add UI playtest observations. |
| worldbuilding | 56 | 55 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | no_evidence | Add worldbuilding project notes. |

## Canonical Phase Evidence Coverage

| Phase Group | Total Entities | Evidence Gaps | Metadata-Only | EvidenceRefs | User Notes | Manual Quotes | Project-Local Evidence | Playtest Evidence | Verified Claims | Evidence Rating | Next Evidence Needed |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|
| 立项与方向 | 405 | 378 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add project direction notes and first real ProjectOverlay. |
| 核心玩法与系统设计 | 532 | 493 | 24 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add core-loop, rules, and meaningful-decision notes. |
| 数值与经济设计 | 126 | 120 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add economy/balance notes and project data. |
| 内容与叙事 | 93 | 89 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add narrative-mechanic project notes. |
| 美术 / UI / 体验表达 | 229 | 221 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add Game Feel and UI feedback notes/playtests. |
| 开发实现 | 309 | 303 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add prototype implementation and tuning evidence. |
| 测试 / 验收 / 审计 | 699 | 672 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | metadata_only | Add real PlaytestLog and audit observations. |
| 运营与发布 | 132 | 130 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | no_evidence | Add release/pitch/community project notes. |

## Legacy Phase-ID Routing Coverage

These phase IDs remain in some scaffold records as routing aliases. They are structurally valid but not evidence-backed.

| Phase ID | Total Entities | Evidence Gaps | Metadata-Only | EvidenceRefs | Evidence Rating |
|---|---:|---:|---:|---:|---|
| phase_art_ui_experience | 9 | 0 | 0 | 0 | no_evidence |
| phase_content_narrative | 6 | 0 | 0 | 0 | no_evidence |
| phase_core_play_systems | 19 | 1 | 0 | 0 | no_evidence |
| phase_development_implementation | 7 | 0 | 0 | 0 | no_evidence |
| phase_numbers_economy | 5 | 0 | 0 | 0 | no_evidence |
| phase_operations_release | 7 | 0 | 0 | 0 | no_evidence |
| phase_project_direction | 13 | 1 | 0 | 0 | no_evidence |
| phase_testing_acceptance_audit | 16 | 2 | 0 | 0 | no_evidence |

## Interpretation

- The existing `COVERAGE_MATRIX.md` answers "Is there structure to navigate?"
- This file answers "Is there evidence to trust?"
- Current answer: structure is broad, but evidence-backed coverage is effectively absent.
- No draft lens, workflow, lesson, or card should be presented as verified until EvidenceRefs and promotion reviews exist.

## Next Evidence Needed

1. Add three to five user-authored manual notes using `FIRST_MANUAL_NOTES_REQUEST.md`.
2. Add one legal sidecar using `FIRST_SIDECAR_REQUEST.md`.
3. Optionally add one lawful short user quote using `FIRST_MANUAL_QUOTE_REQUEST.md`.
4. Add one real project packet using `FIRST_PROJECT_OVERLAY_REQUEST.md`.
5. Add one real playtest packet using `FIRST_PLAYTEST_LOG_REQUEST.md`.
6. Create EvidenceRefs only after real evidence records exist.
7. Keep verified claims at 0 until legal evidence and review justify promotion.
