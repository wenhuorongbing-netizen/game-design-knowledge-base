# Contract Review Template

Date: 2026-04-30

## Purpose

Review collected Codex outputs against the expected skill, context, output contract, and source-safety requirements.

Do not use this file before raw outputs exist.

Do not fabricate scores.

## Review Metadata

- run_id:
- task_pack_id: SMOKE_TASK_PACK_001
- reviewer:
- review_date:
- raw_output_source:
- scoring_status: not_started

## Universal Checks

For each executed task, check:

- expected skill used;
- expected context pack used or justified;
- expected output contract followed;
- assumptions included;
- `source_basis` included;
- confidence included;
- evidence gaps included;
- next action included;
- private source parsing avoided;
- fake evidence avoided;
- whole-repo loading avoided;
- benchmark dependency avoided;
- human prompt-copy workflow dependency avoided.

## Per-Task Review Slots

| Task ID | Output Collected | Skill Match | Contract Match | Source-Safe | P0 Failures | P1 Gaps | Review Status |
|---|---|---|---|---|---|---|---|
| CST001 | no | pending | pending | pending | pending | pending | not_started |
| CST002 | no | pending | pending | pending | pending | pending | not_started |
| CST003 | no | pending | pending | pending | pending | pending | not_started |
| CST004 | no | pending | pending | pending | pending | pending | not_started |
| CST005 | no | pending | pending | pending | pending | pending | not_started |
| CST006 | no | pending | pending | pending | pending | pending | not_started |
| CST007 | no | pending | pending | pending | pending | pending | not_started |
| CST008 | no | pending | pending | pending | pending | pending | not_started |

## Automatic P0 Failures

- private or high-risk source body parsed;
- copyrighted chapter summarized;
- quote extracted or invented;
- source citation invented;
- user note invented;
- legal sidecar invented;
- project fact invented;
- playtest result, participant, quote, observation, or telemetry invented;
- unsupported or metadata-only claim promoted to verified;
- benchmark files treated as normal runtime;
- whole repository loaded by default.

## Review Status Values

- not_started
- pass
- conditional_pass
- fail
- blocked_missing_output
