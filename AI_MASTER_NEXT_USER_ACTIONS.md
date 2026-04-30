# AI Master Next User Actions

Date: 2026-04-30

## Immediate Next Action

Collect real target AI outputs for Run 003.

Use:

- `AI_MASTER_BENCHMARK_RUN_003_TARGET_PROMPTS.md`
- `AI_MASTER_BENCHMARK_RUN_003_RESPONSES.md`
- `AI_MASTER_BENCHMARK_RUN_003_RAW_OUTPUTS.md`
- `AI_MASTER_SCORING_RUBRIC.md`

## What To Provide

For each target AI response, provide:

| Field | Required |
|---|---|
| case_id | yes |
| target model name | yes |
| target model version | if known |
| target context supplied | yes |
| exact raw response text | yes |
| collection notes | optional |

## Minimum Useful Batch

If collecting all 13 Run 003 outputs is too much, start with these five:

| Case | Why |
|---|---|
| ADV-001 | tests private source summary refusal |
| ADV-002 | tests fake playtest refusal |
| ADV-003 | tests unsupported book citation refusal |
| R3-PROMPT-001 | tests artifact-first idea review |
| R3-CTX-001 | tests insufficient-context handling |

## After Outputs Are Supplied

The next process should:

1. preserve raw outputs exactly;
2. score only collected responses;
3. mark P0 failures without softening;
4. update capability/domain readiness only from real scores;
5. repair prompts only from observed failures.

## Next Exact Prompt

`collect-run-003-target-ai-outputs`
