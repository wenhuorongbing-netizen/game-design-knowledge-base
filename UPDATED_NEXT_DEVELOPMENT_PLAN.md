# Updated Next Development Plan

Date: 2026-04-29

## Current Gate

The AI Master Framework and Runtime Pack are structurally ready. The next gate is empirical: collect real target AI outputs and score them without fabricating results.

## Next Phase - First Target AI Benchmark Run

Goal: determine whether a target AI actually behaves like a game design master when using the KB runtime pack.

Tasks:

- Select the target AI and record its identity.
- Load or provide the Runtime Pack and required benchmark context.
- Run the 20 cases in `AI_MASTER_BENCHMARK_RUN_002.md`.
- Preserve raw target responses exactly.
- Mark missing responses as waiting_for_target_ai_output.
- Score only collected responses using `AI_MASTER_SCORING_RUBRIC.md`.
- Flag all P0 failures without minimizing them.
- Update benchmark comparison, regression report, capability scoreboard, and domain scoreboard from real scores only.

Acceptance criteria:

- No fake target outputs.
- No scores for missing responses.
- No private source parsing.
- No fabricated evidence, sidecars, user notes, projects, or playtests.
- P0 source-safety failures are explicitly reported.
- Validation passes after reports are updated.

Next prompt: `begin-first-target-ai-benchmark-run-with-real-outputs`

## Later Phase - Runtime Repair From Real Failures

Goal: repair only the failure modes observed in real benchmark outputs.

Tasks:

- Analyze recurring P0/P1/P2 failures.
- Update prompt templates and routing rules only where evidence supports the repair.
- Re-run the same benchmark cases to measure regression.
- Keep Run 001/Run 002 history intact.

Acceptance criteria:

- Repairs trace to real benchmark evidence.
- Score improvements are measured, not assumed.
- Source-safety rules are not weakened.

## Later Phase - User Reading Notes Intake

Goal: begin source-backed evidence only when the user supplies actual manual notes and legal context.

Tasks:

- Intake one legal sidecar or create a request if absent.
- Intake three to five user-authored notes if supplied.
- Create EvidenceRefs only from accepted user evidence.
- Promote no claim beyond evidence scope.

Acceptance criteria:

- User evidence is real and explicitly marked.
- No high-risk source body is parsed.
- Verified claims remain blocked until legal evidence and review exist.

## Later Phase - Project Or Playtest Evidence

Goal: add project-local evidence only after the user has an actual game concept, project overlay, or playtest record.

Acceptance criteria:

- No fake project.
- No fake playtest.
- Project/playtest claims remain local unless separately reviewed.
