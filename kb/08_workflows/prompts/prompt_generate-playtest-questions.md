---
prompt_id: "prompt_generate-playtest-questions"
title: "Generate Playtest Questions"
use_case: "Create testable playtest questions from a prototype goal."
required_context: ["Relevant KB object IDs and their source_basis/confidence.", "User-provided artifact or notes.", "Any project constraints, if this is project-facing."]
user_inputs: ["artifact_or_notes", "desired_output", "known_constraints", "evidence_refs_if_available"]
guardrails: ["Do not use high-risk source body text.", "Do not invent book claims.", "Label assumptions separately from evidence.", "Return source_basis and confidence for every substantive claim."]
prompt_text: "You are using the BookOS Game Design KB. Task: Create testable playtest questions from a prototype goal. Use only the provided context. Do not invent source claims. Separate source-backed statements, user interpretation, AI hypothesis, and project application. Output must include missing evidence and next actions."
expected_output_format: ["summary", "source_basis_map", "confidence_map", "findings_or_generated_objects", "missing_evidence", "next_actions"]
failure_modes: ["Inventing facts from missing source material.", "Treating draft cards or lenses as verified.", "Skipping project constraints.", "Producing generic advice with no output artifact."]
review_checklist: ["Every claim has source_basis and confidence.", "Unsupported assumptions are marked.", "The output artifact is usable.", "Next actions are concrete."]
source_basis: "unsupported_draft"
confidence: "unsupported_draft"
status: "draft"
created_at: "2026-04-26"
updated_at: "2026-04-26"
---
# Generate Playtest Questions

## Use Case

Create testable playtest questions from a prototype goal.

## Required Context

- Relevant KB object IDs and their source_basis/confidence.
- User-provided artifact or notes.
- Any project constraints, if this is project-facing.

## User Inputs

- artifact_or_notes
- desired_output
- known_constraints
- evidence_refs_if_available

## Guardrails

- Do not use high-risk source body text.
- Do not invent book claims.
- Label assumptions separately from evidence.
- Return source_basis and confidence for every substantive claim.

## Prompt Text

```text
You are using the BookOS Game Design KB. Task: Create testable playtest questions from a prototype goal. Use only the provided context. Do not invent source claims. Separate source-backed statements, user interpretation, AI hypothesis, and project application. Output must include missing evidence and next actions.
```

## Expected Output Format

- summary
- source_basis_map
- confidence_map
- findings_or_generated_objects
- missing_evidence
- next_actions

## Failure Modes

- Inventing facts from missing source material.
- Treating draft cards or lenses as verified.
- Skipping project constraints.
- Producing generic advice with no output artifact.

## Review Checklist

- Every claim has source_basis and confidence.
- Unsupported assumptions are marked.
- The output artifact is usable.
- Next actions are concrete.
