# Hands-On User Trial Protocol

Date: 2026-04-30

## Purpose

This protocol explains how to run the first observed hands-on user trial for the Game Design Knowledgebase.

The trial checks whether a first-time user can use the AI Game Design Master hands-on layer without understanding the whole repository.

## Status

Current status: READY_FOR_TRIAL_INPUT.

No observed user trial has been supplied yet.

## What This Trial Tests

The trial tests whether a user can:

- find the first-use path;
- choose a use case;
- choose the right context pack;
- copy a prompt;
- know what to paste;
- ask for one concrete artifact;
- understand assumptions, `source_basis`, confidence, and evidence gaps;
- avoid private-source parsing and fake evidence.

## What This Trial Does Not Test

This trial does not test:

- verified source-backed truth;
- legal sidecar intake;
- user reading note intake;
- real project evidence;
- real playtest evidence;
- target AI benchmark scoring;
- market, player, or telemetry claims.

## Trial Route Options

Choose one route:

| route_id | route | start files | expected artifact |
|---|---|---|---|
| HOUT-R01 | no active project | `USE_THIS_FIRST.md`; `NO_PROJECT_START_HERE.md`; CP03; P12 | one daily exercise artifact |
| HOUT-R02 | vague game idea | `USE_THIS_FIRST.md`; `USE_CASE_HUB.md`; CP02; P01 | one-page concept memo |
| HOUT-R03 | design review | `USE_CASES/design_review.md`; CP04; P04-P09 | design audit memo |
| HOUT-R04 | learning game design | `USE_CASES/learn_game_design.md`; CP03; P12 | mini lesson and exercise |
| HOUT-R05 | reading plan | `USE_CASES/reading_to_notes.md`; CP03; P13 | source-safe reading plan |
| HOUT-R06 | source claim check | `USE_CASES/source_safety_check.md`; CP06; P14 | unsupported claim check |

## Trial Steps

1. Start at [USE_THIS_FIRST.md](USE_THIS_FIRST.md).
2. Open [USE_CASE_HUB.md](USE_CASE_HUB.md).
3. Select one route from the table above.
4. Open the matching context pack.
5. Open the matching prompt file.
6. Paste a real user idea, question, or learning goal.
7. Preserve the AI output exactly if one is produced.
8. Record confusion points.
9. Check whether the output includes assumptions, `source_basis`, confidence, evidence gaps, and one next action.

## Required Observation Fields

Use [HANDS_ON_USER_TRIAL_OBSERVATION_TEMPLATE.md](HANDS_ON_USER_TRIAL_OBSERVATION_TEMPLATE.md).

Required fields:

- trial_id;
- observer;
- trial_date;
- route_id;
- user_start_file;
- files_opened;
- context_pack_used;
- prompt_used;
- user_input_supplied;
- target_ai_used, if any;
- raw_ai_output_supplied, if any;
- completion_status;
- time_to_first_prompt;
- time_to_first_artifact;
- confusion_points;
- source_safety_result;
- confidence_label_result;
- artifact_result;
- next_repair_recommendation.

## Completion Status Values

Allowed values:

- not_started
- blocked_missing_user_input
- blocked_missing_target_ai_output
- completed_user_reached_prompt
- completed_artifact_generated
- completed_with_confusion
- failed_user_could_not_start
- failed_source_safety_violation

## Safety Rules

Do not:

- fabricate a user observation;
- fabricate target AI output;
- score missing output;
- parse private or high-risk source bodies;
- summarize copyrighted or private chapters;
- extract quotes from source files;
- invent legal sidecars, user notes, project facts, or playtest observations;
- claim verified source-backed knowledge without legal EvidenceRefs.

## Acceptance Criteria

The trial can be accepted only when:

- a real user or operator supplies a route and input;
- the user can reach a prompt;
- the context pack and prompt are recorded;
- any AI output is preserved without improvement;
- confusion points are recorded;
- source/confidence handling is checked;
- missing data is marked as missing, not invented.

