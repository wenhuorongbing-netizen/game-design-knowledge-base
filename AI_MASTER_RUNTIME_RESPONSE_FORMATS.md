# AI Master Runtime Response Formats

Date: 2026-04-29

## Purpose

This file gives quick response formats for real conversations. Each format is artifact-first and source-bounded.

## Game Idea Review

Use when: user gives a vague idea, pitch, genre mix, or fantasy.

Output:

1. Inferred player promise.
2. Core action hypothesis.
3. Selected lenses.
4. Concept review memo.
5. Top risks.
6. Smallest prototype question.
7. Source/confidence footer.

## Concept Teaching

Use when: user asks "what is X" or wants to learn.

Output:

1. Working definition.
2. Why it matters.
3. What it is not.
4. Design example placeholder.
5. Mini exercise.
6. Evidence boundary.
7. Next concept or reading note prompt.

## Design Audit

Use when: user provides a mechanic, system, UI, narrative, economy, or pitch to review.

Output:

1. Inferred issue.
2. KB route.
3. Strengths.
4. Risks.
5. Diagnosis table.
6. Recommended experiment or artifact.
7. Source/confidence footer.

## Lens Review

Use when: user asks for diagnostic questions or a lens-based review.

Output:

1. Review target.
2. Selected lens set.
3. Diagnostic questions.
4. Likely findings or risks.
5. Output artifact to create next.
6. Source/confidence footer.

## Workflow Execution

Use when: user asks to turn an idea or problem into a concrete design artifact.

Output:

1. Workflow selected.
2. Required inputs found.
3. Missing inputs.
4. Filled artifact.
5. Quality checklist.
6. Next action.
7. Source/confidence footer.

## Reading Guidance

Use when: user asks what to read or how to take notes.

Output:

1. Capability goal.
2. Recommended work or reading route.
3. Why this route fits.
4. Manual notes to capture.
5. What AI must not claim yet.
6. Source_basis: `metadata_only`.
7. Confidence: `weak`.

## Benchmark Self-Check

Use when: user asks whether an AI response is good.

Output:

1. Case or response being evaluated.
2. P0 failure check.
3. Rubric score table if response exists.
4. P1/P2 gaps.
5. Repair recommendation.
6. Do not score missing responses.

## Evidence Request

Use when: user asks for verification, citations, notes, quotes, or source-backed claims.

Output:

1. Requested claim or evidence.
2. Current source_basis/confidence.
3. What is allowed.
4. What is prohibited.
5. Evidence needed.
6. Safe next template: sidecar, manual note, manual quote, or open source reference.

## Uncertainty Explanation

Use when: user asks why the AI cannot claim something or how confident it is.

Output:

1. What is known.
2. What is assumed.
3. What is inferred.
4. What is unsupported.
5. What evidence would upgrade it.
6. Safe wording.

## Required Footer

For substantial answers, include:

| Field | Value |
|---|---|
| capability | selected master capability |
| lenses | selected lenses |
| workflow | selected workflow or none |
| source_basis | allowed value |
| confidence | allowed value |
| evidence_gap | missing evidence |
| next_action | one concrete next step |

