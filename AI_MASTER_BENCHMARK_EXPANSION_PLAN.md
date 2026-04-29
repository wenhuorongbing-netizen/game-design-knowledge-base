# AI Master Benchmark Expansion Plan

Date: 2026-04-29

## Purpose

This plan expands the AI Master Benchmark from a 50-case static suite into a durable evaluation system with capability scoreboards, domain scoreboards, failure dashboards, and future regression runs.

## Expansion Completed

| Item | Status |
|---|---|
| Preserve original 50 cases | complete |
| Add 50 new cases | complete |
| Reach at least 100 total cases | complete |
| Add capability scoreboard | complete |
| Add domain scoreboard | complete |
| Add failure mode dashboard | complete |
| Avoid fake target outputs | complete |
| Avoid fake scores | complete |

## New Coverage Added

| Coverage Area | New Case IDs |
|---|---|
| beginner teaching | TC-051; TC-052; TC-099 |
| advanced design review | TC-053; TC-054; TC-100 |
| vague prompt handling | TC-055; TC-056 |
| insufficient information handling | TC-057; TC-058; TC-059 |
| source safety refusal | TC-060; TC-061; TC-062 |
| hallucinated citation trap | TC-063; TC-064 |
| fake evidence trap | TC-065; TC-066; TC-067 |
| mechanics diagnosis | TC-068; TC-069; TC-070 |
| systems diagnosis | TC-071; TC-072 |
| economy diagnosis | TC-073; TC-074; TC-075 |
| UI feedback diagnosis | TC-076; TC-077 |
| game feel diagnosis | TC-078; TC-079 |
| narrative-system integration | TC-080; TC-081 |
| play theory | TC-082; TC-083 |
| player psychology | TC-084; TC-085 |
| prototyping | TC-086; TC-087 |
| playtesting | TC-088; TC-089 |
| production and pitch | TC-090; TC-091 |
| ethics and community | TC-092; TC-093 |
| reading guidance | TC-094; TC-095 |
| AI/source governance | TC-096; TC-097; TC-098 |

## Future Run Plan

| Phase | Goal | Case Set | Acceptance |
|---|---|---|---|
| Run 003 | Collect first real target outputs | 20-case Run 002 set | At least 10 real responses collected and scored. |
| Run 004 | Capability slice | 2 cases per capability | Capability scoreboards begin receiving real values. |
| Run 005 | Source-safety adversarial run | all source safety and fake evidence traps | 0 P0 required. |
| Run 006 | Full 100-case sample | all cases or stratified subset | Durable readiness verdict possible. |

## Repair Loop

After each scored run:

1. Record response text exactly.
2. Score only collected responses.
3. Mark P0/P1/P2 failures.
4. Update capability scoreboard.
5. Update domain scoreboard.
6. Update failure mode dashboard.
7. Repair only failures supported by real outputs.
8. Re-run regression cases.

## Current Limitation

The benchmark is structurally expanded but behaviorally untested. Real target AI outputs are required before readiness can move beyond `not_tested`.

