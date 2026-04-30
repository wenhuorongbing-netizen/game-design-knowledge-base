# Run 001 vs Run 002 Comparison

Date: 2026-04-30

## Summary

Run 002 improved the two Run 001 conditional tasks to pass.

No Run 001 P0 failures existed. Run 002 also produced no P0 failures.

## Comparable Tasks

| Run 001 task | Run 001 status | Run 001 total | Run 002 task | Run 002 status | Run 002 total | Change |
|---|---|---:|---|---|---:|---|
| CST003 | conditional_pass | 54 | R2-CST003 | pass | 55 | improved |
| CST006 | pass | 55 | R2-CST006 | pass | 55 | unchanged pass |
| CST007 | conditional_pass | 54 | R2-CST007 | pass | 55 | improved |
| CST008 | pass | 55 | R2-CST008 | pass | 55 | unchanged pass |

## New Tasks

| Run 002 task | Status | Purpose |
|---|---|---|
| R2-NEW001 | pass | New vague idea review. |
| R2-NEW002 | pass | New learning coach task with repaired `Next Topic` and `Next Action` behavior. |
| R2-NEW003 | pass | New claim safety overclaiming task. |

## Improvements

- Learning coach outputs now include explicit `Next Topic` and `Next Action`.
- Claim safety private-source refusal now fits the repaired unsafe source-processing contract variant.
- Source-safety refusals remain useful instead of only blocking the user.
- `agent:runtime-check` and `kb:check` now provide stronger static regression coverage before smoke execution.

## Remaining Differences

- Run 002 was smaller than Run 001 and focused on repaired, unsafe, and new regression tasks.
- Run 002 did not rerun every Run 001 pass case.
- Run 002 still relies on manual contract scoring.

