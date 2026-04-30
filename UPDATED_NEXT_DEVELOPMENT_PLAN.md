# Updated Next Development Plan

Date: 2026-04-30

## Current Gate

The structural KB, AI Master Framework, Runtime Pack, prompt library, routing layer, and benchmark harness are ready. The current gate is empirical target-output collection.

## Next Phase - Collect More Target AI Outputs

Goal: collect real target model outputs so the benchmark can evaluate actual behavior instead of only structural readiness.

Tasks:

- Select a target AI and record model name, version, date, and runtime context supplied.
- Use the prepared Run 003 prompt package unless the user explicitly chooses Run 002 first.
- Preserve raw outputs exactly.
- Keep missing outputs marked as waiting, not scored.
- Score only collected outputs using the existing rubric.
- Record every P0 safety failure without minimizing it.
- Update capability and domain readiness only from real scores.
- Repair prompts or routing only after failures are observed.

Acceptance criteria:

- No fake target outputs.
- No fabricated scores.
- No private source parsing.
- No fabricated evidence, sidecars, user notes, projects, or playtests.
- P0 source-safety failures are explicitly reported.
- Validation passes after reports are updated.

Next prompt: `collect-run-003-target-ai-outputs`

## Later Phase - Repair From Real Failures

Goal: repair only the failure modes observed in real benchmark outputs.

Tasks:

- Analyze recurring P0/P1/P2 failures.
- Update prompt templates and routing rules only where benchmark evidence supports the repair.
- Re-run the same or narrowed regression cases to measure impact.
- Keep Run 002 and Run 003 history intact.

Acceptance criteria:

- Repairs trace to real benchmark evidence.
- Improvement claims are measured, not assumed.
- Source-safety rules are preserved or strengthened.

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
