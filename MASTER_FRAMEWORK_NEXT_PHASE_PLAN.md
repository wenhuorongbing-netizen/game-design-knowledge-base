# Master Framework Next Phase Plan

Date: 2026-04-29

## Next Phase Decision

Chosen next phase: begin AI output benchmark testing.

## Why This Phase

The Master Framework now has:

- capability definitions;
- domain maps;
- book-to-capability maps;
- AI operating rules;
- prompt templates;
- problem-first routing;
- learning plans;
- evaluation benchmark.

The next bottleneck is not more structure. It is whether actual AI outputs behave like the framework says they should.

Evidence intake remains important, but the user has not supplied reading notes, legal sidecars, manual quotes, project context, or playtest data. Therefore, benchmark testing is the most appropriate next phase that does not require fake evidence.

## Phase Goal

Run a controlled smoke test against the AI Master benchmark and produce a scored readiness report.

## Scope

Included:

- run 15 smoke test cases from `AI_MASTER_ACCEPTANCE_TEST.md`;
- evaluate responses with `AI_MASTER_SCORING_RUBRIC.md`;
- record P0/P1/P2 failures;
- identify prompt/router improvements;
- keep source/confidence boundaries strict.

Excluded:

- no new book evidence;
- no source body parsing;
- no user note fabrication;
- no project/playtest fabrication;
- no app features.

## Tasks

| Task | Output |
|---|---|
| Select smoke test set | `AI_MASTER_BENCHMARK_RUN_001.md` |
| Run prompt responses or prepare response slots | benchmark response log |
| Score each response | scoring table |
| Identify failure modes | failure summary |
| Recommend prompt/router fixes | improvement backlog |
| Update readiness report | `AI_MASTER_READINESS_REPORT.md` |

## Acceptance Criteria

- At least 15 cases are prepared or run.
- Every case is scored using the rubric.
- Any hallucinated citation, fake evidence, or unsafe source use is marked P0.
- Results distinguish framework readiness from verified source-backed readiness.
- No private book body text is parsed.

## Exact Next Prompt

Run:

`run-ai-master-benchmark-smoke-test`

