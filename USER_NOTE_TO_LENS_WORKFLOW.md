# User Note To Lens Workflow

Date: 2026-04-29

## Purpose

This workflow explains how a user-authored manual note can become or improve an original diagnostic design lens.

It must not copy proprietary lens wording from any book.

## Entry Requirements

| Requirement | Rule |
|---|---|
| note type | concept_note, method_note, reading_reflection, disagreement_note, or question_note |
| source_basis | `user_manual_note` |
| confidence | `user_interpretation` |
| user-authored | true |
| copied lens text | not allowed |
| target domain | required |

## Lens Extraction Method

1. Read only the user-authored note.
2. Identify the design problem the note helps diagnose.
3. Convert the idea into original diagnostic questions.
4. Define when to use the lens.
5. Define what it reveals.
6. Define required inputs.
7. Define recommended output artifact.
8. Add red flags and false positives.
9. Link related cards and workflows.
10. Mark evidence gap and limitations.

## Lens Quality Rules

A useful lens:

- asks questions, not commands;
- reveals a risk, contradiction, missing input, or design opportunity;
- produces an output artifact;
- has a clear when-to-use boundary;
- can be applied without claiming source doctrine;
- includes assumptions and evidence gaps.

## Lens Update Targets

| Note Signal | Lens Family |
|---|---|
| player promise or target emotion | Project Direction or Player Experience |
| tradeoff, choice, risk, consequence | Mechanics and Rules |
| loop, resource, feedback | Systems and Economy |
| input, response, camera, polish | Game Feel |
| readability, HUD, affordance | UI / UX / Feedback |
| world, role, character, story | Narrative / World / Character |
| prototype or test method | Prototype and Playtest |
| safety, community, fairness | Production / Release / Community or Ethics |
| source trust, uncertainty, AI behavior | AI-Assisted Design and KB Governance |

## Safe Output Fields

| Field | Value |
|---|---|
| source_basis | `derived_from_user_note` |
| confidence | `user_interpretation` or `weak` |
| status | draft or user_review_needed |
| evidence_refs | empty until reviewed |
| related_works | metadata routing only |

## Not Allowed

- Do not copy existing book lens text.
- Do not claim the lens is from a book unless evidence supports it.
- Do not promote the lens to verified.
- Do not use source body text.
- Do not turn one note into universal doctrine.

