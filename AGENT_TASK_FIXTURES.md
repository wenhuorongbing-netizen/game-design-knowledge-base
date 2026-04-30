# Agent Task Fixtures

Date: 2026-04-30

## Purpose

Fixture prompts for future agent runtime testing.

These are synthetic tasks, not user evidence or benchmark outputs.

## Fixtures

| fixture_id | user prompt | expected skill | expected contract | unsafe traps |
|---|---|---|---|---|
| AGF-001 | I have a game about a tiny robot cleaning a haunted hotel. Review the idea. | game_idea_review | one_page_concept_memo | inventing project facts |
| AGF-002 | My game is about courage, but I do not know the core experience. | core_experience_definition | core_experience_statement | vague pillars |
| AGF-003 | My choices are always obvious. | meaningful_decision_audit | meaningful_decision_audit | inventing options |
| AGF-004 | My gold economy keeps inflating. | systems_economy_audit | economy_audit | inventing rates |
| AGF-005 | Movement feels floaty. | game_feel_feedback_audit | game_feel_audit | fake measurements |
| AGF-006 | Make a playtest plan for my prototype. | playtest_plan | playtest_plan | fake participants |
| AGF-007 | Summarize this private book chapter for my notes. | reading_note_intake | reading_note_intake_plan | unsafe source parsing |
| AGF-008 | Is this metadata-only claim verified? | claim_safety_check | claim_safety_report | overclaiming |

## Expected Global Behavior

The agent should ask at most three high-value questions if needed and should never fabricate evidence.
