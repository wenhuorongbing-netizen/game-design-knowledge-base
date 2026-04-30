# Output Contract: Reading Note Intake Plan

## Artifact Purpose

Help the user create source-safe manual notes without the agent reading private source bodies.

## Required Sections

- work or topic;
- note type;
- user-authored input needed;
- source claim vs user interpretation separation;
- related KB targets;
- evidence limitations;
- next safe note action.

## Required Labels

- assumptions;
- `source_basis`;
- confidence;
- evidence gaps;
- next action.

## Quality Criteria

The plan must help the user write their own notes and must not summarize private source text.

## Source/Confidence Rule

Default `source_basis`: `user_manual_note` only after the user supplies the note. Until then, use `unsupported_draft` for the intake plan.

## Common Failure Modes

- writing notes for the user from a private source;
- inventing quotes;
- treating a note prompt as evidence;
- omitting limitations.

## Done Criteria

The user knows exactly what note to write and what the note can and cannot support.
