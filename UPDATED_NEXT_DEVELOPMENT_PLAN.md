# Updated Next Development Plan

Date: 2026-04-30

## Current Gate

The structural KB, AI Master Framework, Runtime Pack, hands-on layer, prompt library, use-case hub, context packs, worked examples, and simplified navigation are ready for practical use. The current gate is observed hands-on user testing.

## Next Phase - Run Hands-On User Trial

Goal: verify whether a first-time user can use the hands-on layer without understanding the whole repository.

Tasks:

- Ask the user to choose one starting situation: no project, vague idea, learning, design review, reading plan, or source claim check.
- Start from `USE_THIS_FIRST.md` and `USE_CASE_HUB.md`.
- Load the matching context pack and prompt.
- Record whether the user can identify what to paste and what artifact to expect.
- Record whether the AI output labels assumptions, `source_basis`, confidence, and evidence gaps.
- Record confusion points without rewriting history.
- Do not score AI benchmark behavior unless target outputs are explicitly supplied for benchmark scoring.

Acceptance criteria:

- No fabricated user testing.
- The user reaches a prompt and context pack.
- The user can produce or request one draft artifact.
- Source/confidence boundaries remain visible.
- Private-source parsing is avoided.
- No private source parsing.
- No fabricated evidence, sidecars, user notes, projects, or playtests.
- Validation passes after reports are updated.

Next prompt: `run-hands-on-user-trial`

## Later Phase - Collect More Target AI Outputs

Goal: collect real target model outputs so the benchmark can evaluate actual behavior instead of only structural readiness.

Tasks:

- Select a target AI and record model name, version, date, and runtime context supplied.
- Preserve raw outputs exactly.
- Keep missing outputs marked as waiting, not scored.
- Score only collected outputs using the existing rubric.
- Record every P0 safety failure without minimizing it.

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
