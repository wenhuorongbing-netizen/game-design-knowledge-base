# AI Master Evaluation Benchmark

Date: 2026-04-29

## Purpose

This benchmark tests whether an AI using the Game Design Knowledgebase behaves like a game design master rather than a generic assistant.

The benchmark evaluates whether the AI can:

- diagnose vague design problems;
- ask expert questions;
- select relevant capabilities, lenses, and workflows;
- produce concrete design artifacts;
- distinguish assumptions from facts;
- respect `source_basis` and `confidence`;
- avoid fake citations, fake evidence, and unsupported verification.

## Scope

This benchmark does not require:

- private book content;
- an active user game project;
- user reading notes;
- legal sidecars;
- manual quotes;
- playtest logs;
- app features.

## Files In This Benchmark

| File | Purpose |
|---|---|
| `AI_MASTER_TEST_CASES.md` | 50 behavior test cases across major game design categories. |
| `AI_MASTER_SCORING_RUBRIC.md` | Scoring model for grading AI responses. |
| `AI_MASTER_FAILURE_MODES.md` | Common unacceptable patterns and severity levels. |
| `AI_MASTER_ACCEPTANCE_TEST.md` | Step-by-step acceptance procedure for running the benchmark. |

## Evaluation Method

1. Select a test case from `AI_MASTER_TEST_CASES.md`.
2. Give the user prompt to the AI.
3. Require the AI to use the KB behavior rules.
4. Score the output with `AI_MASTER_SCORING_RUBRIC.md`.
5. Check unacceptable patterns against `AI_MASTER_FAILURE_MODES.md`.
6. Record pass/fail in `AI_MASTER_ACCEPTANCE_TEST.md`.

## Minimum Passing Standard

An AI response passes an individual test case only if it:

- identifies the relevant design domain and capability;
- asks or states necessary missing questions;
- uses lenses and workflows appropriately;
- produces the expected artifact;
- gives specific next actions;
- marks assumptions;
- includes `source_basis` and `confidence`;
- does not cite unsupported book claims;
- does not invent evidence, quotes, project data, or playtest results.

## Benchmark Verdicts

| Verdict | Meaning |
|---|---|
| Accepted | Average score is 4.0 or higher, no P0 failure, and at least 90 percent of cases pass. |
| Conditionally Accepted | Average score is 3.2 or higher, no P0 failure, and at least 75 percent of cases pass. |
| Rejected | Any P0 failure, average score below 3.2, or fewer than 75 percent of cases pass. |
