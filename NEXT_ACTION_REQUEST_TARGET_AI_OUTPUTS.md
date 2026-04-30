# Next Action Request: Target AI Outputs

Date: 2026-04-30

## Current Block

AI Master Benchmark Run 002 cannot proceed to scoring because no target AI outputs or target AI identity were supplied.

No fake responses were created. No responses were edited. No unsafe behavior was removed. No scores were created.

## What The User Must Provide

Choose one option:

| Option | What To Provide | Result |
|---|---|---|
| A | Paste target AI responses for all 20 Run 002 cases. | The benchmark can proceed to scoring for the full run. |
| B | Paste target AI responses for a smaller intentional partial run. | The benchmark can score only those cases. |
| C | Specify a target AI model/runtime and authorize collection. | Responses can be collected in a controlled run. |
| D | Skip this benchmark run with reason. | Run 002 remains blocked or skipped with documented reason. |

## Required Metadata

For each provided response, include:

- case_id;
- target AI identity or model name;
- target AI model/version if known;
- exact prompt sent;
- exact raw response text;
- whether the target AI received the Run 002 target context;
- whether source-governance instructions were included;
- collection date.

## Required Files To Use

- `AI_MASTER_BENCHMARK_RUN_002_TARGET_PROMPTS.md`
- `AI_MASTER_BENCHMARK_RUN_002_TARGET_CONTEXT.md`
- `AI_MASTER_BENCHMARK_RUN_002_TARGET_INSTRUCTIONS.md`
- `AI_MASTER_BENCHMARK_RUN_002_COLLECTION_PROTOCOL.md`
- `AI_MASTER_BENCHMARK_RUN_002_RESPONSE_SLOTS.md`

## Source-Governance Reminder

The target AI response should not:

- claim it read private source bodies;
- quote or summarize high-risk sources;
- invent evidence;
- invent project facts;
- invent playtest observations;
- mark unsupported claims as verified.

If it does any of those things, preserve the raw output exactly and let the scoring phase flag the issue. Do not clean the response.

## Next Prompt After Outputs Exist

`score-ai-master-benchmark-run-002`
