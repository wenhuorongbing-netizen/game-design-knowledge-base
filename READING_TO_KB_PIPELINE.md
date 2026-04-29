# Reading To KB Pipeline

Date: 2026-04-29

## Purpose

This pipeline explains how the user can read game design books and turn manual reading notes into source-governed KB upgrades.

This is not a reading app, not a reading session tracker, and not a personal library system. It is a source-safe note capture process for improving the AI Game Design Master Framework.

## Governance Boundary

- The AI must not parse private or high-risk book body text.
- The AI must not generate book summaries.
- The AI must not write notes on behalf of the user.
- The AI must not extract quotes.
- The AI must not promote claims to verified from metadata-only sources.
- The user may read lawful copies and write manual notes in their own words.

## Pipeline Overview

| Step | Actor | Action | Output |
|---|---|---|---|
| 1. Choose target | user | Select one work from `WORK_PRIORITY_INDEX.md` or `BOOK_TO_CAPABILITY_MAP.md`. | selected work_id and capability target |
| 2. Read legally | user | Read a lawful copy outside AI processing. | personal understanding |
| 3. Capture note | user | Write a short manual note using `MASTER_NOTE_TEMPLATES.md`. | UserManualNote draft |
| 4. Separate claims | user | Mark source claim, user interpretation, project idea, question, or disagreement. | scoped note |
| 5. Link targets | user or AI | Link the note to concept cards, lenses, workflows, or evidence gaps. | related_entities list |
| 6. Validate safety | AI | Check source_basis, confidence, quote length, and no copied body text. | validation-ready note |
| 7. Create EvidenceRef later | AI | Convert accepted notes into EvidenceRef records only after review. | EvidenceRef |
| 8. Upgrade KB object later | AI | Use EvidenceRef to improve card, lens, workflow, or prompt hook. | draft improvement, not verified claim |

## Reading One Chapter Safely

Use this sequence when reading a chapter or section:

1. Before reading, write the question: "What should this help the AI do better?"
2. While reading, mark only your own observations, not copied paragraphs.
3. After reading, close the book and write a short note in your own words.
4. Record location as chapter, section, page range, timestamp, or "whole work reflection".
5. Identify one design problem the note helps solve.
6. Identify one concept, lens, workflow, or AI capability it might improve.
7. Record what the note does not prove.
8. If you want to preserve a quote, enter it separately as a short lawful user-provided quote.

## What A Useful Manual Note Contains

| Field | Good Note |
|---|---|
| work_id | Uses a registered ID such as `game-design-workshop-a-playcentric-approach`. |
| location | Locates the note without copying body text. |
| core idea | Short user-authored summary in the user's own words. |
| user interpretation | What the user thinks it means for design practice. |
| design problem | What this helps diagnose, teach, or produce. |
| AI capability target | Which master capability should improve. |
| linked KB object | Existing concept, lens, workflow, card, or gap. |
| limitations | What the note cannot prove. |

## Separating Source Claim, User Interpretation, And Project Idea

| Note Layer | Meaning | KB Use |
|---|---|---|
| source claim | What the user believes the source says, written in the user's words and with location. | Can become evidence only after review. |
| user interpretation | What the user thinks the idea means. | `confidence: user_interpretation`. |
| design heuristic | A practical rule the user wants to try. | Can improve draft card or lens cautiously. |
| project idea | A possible application to a future game. | Keep as project idea, not universal doctrine. |
| disagreement | Where the user challenges the source or framework. | Can create comparison or challenge notes. |
| question | What remains unclear. | Goes to evidence gap or reading backlog. |

## Manual Quote Rule

Quotes are optional and should be rare.

Only record a quote when:

- the user manually provides it;
- it is short;
- it is lawful to use;
- it is marked as quote text;
- it has location;
- it is not copied automatically from a source file;
- it does not exceed quote length limits in `kb/13_evidence/EVIDENCE_VALIDATION_RULES.md`.

Do not turn quotes into verified claims unless source governance and review allow it.

## Linking Notes To Existing KB Objects

Use existing KB paths:

| Target | Where To Look |
|---|---|
| concept card | `kb/05_cards/concept_cards/` |
| framework card | `kb/05_cards/framework_cards/` |
| design lens | `kb/06_lenses/cards/` |
| workflow pack | `kb/08_workflows/packs/` |
| work | `kb/03_works/works.json` |
| evidence gap | `kb/13_evidence/EVIDENCE_GAP_REGISTER.md` |
| capability | `MASTER_CAPABILITY_MATRIX.md` |

## EvidenceRef Creation Later

An EvidenceRef should be created only after:

- note is user-authored;
- note is accepted or review_needed;
- source_basis is `user_manual_note`;
- confidence is `user_interpretation`;
- target entity exists;
- limitations are explicit.

EvidenceRef does not mean verified. It means a governed evidence link exists.

## What A Note Does Not Prove

A manual note does not automatically prove:

- the source's full argument;
- the author's exact wording;
- a universal game design rule;
- a verified definition;
- project success;
- playtest validation.

## First Recommended Reading Packet

Start with one of these:

| Goal | First Work | Notes To Capture |
|---|---|---|
| Make AI better at design critique | The Art of Game Design | lens note; diagnostic question note; disagreement note |
| Make AI better at process | Game Design Workshop | framework note; workflow note; playtest question note |
| Make AI better at mechanics | Game Mechanics or Rules of Play | concept note; framework note; comparison note |
| Make AI better at player experience | A Theory of Fun | concept note; question note; lens note |
| Make AI better at systems | Advanced Game Design | framework note; workflow note; system mapping note |

