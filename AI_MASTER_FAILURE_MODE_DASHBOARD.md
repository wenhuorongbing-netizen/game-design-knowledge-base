# AI Master Failure Mode Dashboard

Date: 2026-04-30

## Purpose

This dashboard tracks P0, P1, and P2 failure modes across benchmark cases. Failure counts must come only from scored real target AI outputs.

No real target outputs have been scored. Frequencies are `not_observed_unscored`, not zero proven failures.

## P0 Failure Dashboard

| Failure Mode | Severity | Static Cases Testing It | Observed Count | Benchmark Status | Required Repair If Observed |
|---|---|---:|---|---|---|
| Fake evidence | P0 | 18 | not_observed_unscored | blocked_pending_target_outputs | reject response; harden fake evidence refusal |
| Unsafe source use | P0 | 12 | not_observed_unscored | blocked_pending_target_outputs | reject response; strengthen source refusal |
| Hallucinated citation | P0 | 14 | not_observed_unscored | blocked_pending_target_outputs | reject response; require evidence_ref |
| False verification | P0 | 10 | not_observed_unscored | blocked_pending_target_outputs | reject response; enforce source_basis/confidence rules |
| Quote fabrication | P0 | 7 | not_observed_unscored | blocked_pending_target_outputs | reject response; prohibit reconstructed quotes |
| Project scope leak | P0 | 9 | not_observed_unscored | blocked_pending_target_outputs | reject response; scope project/playtest evidence locally |
| Invented playtest data | P0 | 9 | not_observed_unscored | blocked_pending_target_outputs | reject response; require real PlaytestLog or user data |
| Invented market data | P0 | 7 | not_observed_unscored | blocked_pending_target_outputs | reject response; require external evidence or mark as hypothesis |

## P1 Failure Dashboard

| Failure Mode | Severity | Static Cases Testing It | Observed Count | Benchmark Status | Required Repair If Observed |
|---|---|---:|---|---|---|
| Generic advice | P1 | 42 | not_observed_unscored | blocked_pending_target_outputs | require artifact-first output |
| Wrong capability route | P1 | 35 | not_observed_unscored | blocked_pending_target_outputs | repair routing rules and prompt context |
| Lens dumping | P1 | 25 | not_observed_unscored | blocked_pending_target_outputs | force 2 to 5 justified lenses |
| Workflow omission | P1 | 38 | not_observed_unscored | blocked_pending_target_outputs | require workflow route and output artifact |
| Missing uncertainty | P1 | 50 | not_observed_unscored | blocked_pending_target_outputs | require assumptions/evidence gap/footer |
| No user input boundary | P1 | 30 | not_observed_unscored | blocked_pending_target_outputs | enforce minimum question rule |
| Poor artifact output | P1 | 45 | not_observed_unscored | blocked_pending_target_outputs | strengthen artifact router and templates |
| Weak actionability | P1 | 40 | not_observed_unscored | blocked_pending_target_outputs | require next smallest action |

## P2 Failure Dashboard

| Failure Mode | Severity | Static Cases Testing It | Observed Count | Benchmark Status | Required Repair If Observed |
|---|---|---:|---|---|---|
| Weak prioritization | P2 | 25 | not_observed_unscored | blocked_pending_target_outputs | require ranked next actions |
| Overlong output | P2 | 20 | not_observed_unscored | blocked_pending_target_outputs | require concise artifact-first formatting |
| Underdeveloped artifact | P2 | 30 | not_observed_unscored | blocked_pending_target_outputs | expand required artifact sections |
| Missing related KB route | P2 | 35 | not_observed_unscored | blocked_pending_target_outputs | require capability/lens/workflow footer |

## Dashboard Rule

Do not convert `not_observed_unscored` to `0` until real target outputs are scored. Absence of observed failures is not evidence of safe behavior.
