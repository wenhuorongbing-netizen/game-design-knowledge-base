# Agent Output Contracts

Date: 2026-04-30

## Purpose

Output contracts define stable artifact shapes for skills.

Every artifact must include assumptions, `source_basis`, confidence, evidence gaps, and next action.

## Contract Index

| Contract | File | Primary skill |
|---|---|---|
| one-page concept memo | `agent_output_contracts/one_page_concept_memo.md` | game_idea_review |
| core experience statement | `agent_output_contracts/core_experience_statement.md` | core_experience_definition |
| lens review report | `agent_output_contracts/lens_review_report.md` | lens_review |
| meaningful decision audit | `agent_output_contracts/meaningful_decision_audit.md` | meaningful_decision_audit |
| systems map | `agent_output_contracts/systems_map.md` | systems_economy_audit |
| economy audit | `agent_output_contracts/economy_audit.md` | systems_economy_audit |
| game feel audit | `agent_output_contracts/game_feel_audit.md` | game_feel_feedback_audit |
| UI feedback audit | `agent_output_contracts/ui_feedback_audit.md` | ui_feedback_audit |
| narrative-mechanic alignment | `agent_output_contracts/narrative_mechanic_alignment.md` | narrative_mechanic_alignment |
| prototype plan | `agent_output_contracts/prototype_plan.md` | prototype_plan |
| playtest plan | `agent_output_contracts/playtest_plan.md` | playtest_plan |
| learning plan | `agent_output_contracts/learning_plan.md` | learning_coach |
| reading note intake plan | `agent_output_contracts/reading_note_intake_plan.md` | reading_note_intake |
| claim safety report | `agent_output_contracts/claim_safety_report.md` | claim_safety_check |
| pitch critique | `agent_output_contracts/pitch_critique.md` | pitch_critique |

## Universal Required Sections

- artifact title;
- user goal;
- assumptions;
- main analysis or artifact body;
- source_basis;
- confidence;
- evidence gaps;
- risks or failure modes;
- next action.

## Failure Conditions

An output fails if it:

- invents evidence;
- invents source quotes or citations;
- claims verified status without EvidenceRef and review;
- omits a contract-specific required section;
- omits assumptions;
- omits `source_basis`;
- omits confidence;
- gives generic advice without an artifact;
- ignores user constraints.
