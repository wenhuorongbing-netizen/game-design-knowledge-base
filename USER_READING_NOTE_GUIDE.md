# User Reading Note Guide

Date: 2026-04-29

## Purpose

This guide tells the user how to write manual reading notes that can safely upgrade the Game Design Knowledgebase.

The goal is not to summarize books. The goal is to create small, useful, traceable notes that help the AI ask better questions, teach better concepts, select better lenses, and produce better design artifacts.

## One Chapter Reading Method

| Stage | Action |
|---|---|
| before reading | Choose one AI capability or design problem to improve. |
| during reading | Mark ideas, questions, disagreements, and possible applications in your own words. |
| after reading | Write one to three short notes from memory or your own paraphrase. |
| after note | Link each note to one concept, lens, workflow, or capability. |
| review | Add limitations and what AI should not claim yet. |

## Good Note Length

| Note Type | Recommended Length |
|---|---|
| concept note | 80 to 200 words |
| framework note | 120 to 300 words |
| lens note | 3 to 7 diagnostic questions |
| workflow note | 5 to 10 process steps |
| disagreement note | 80 to 200 words |
| comparison note | one small table |
| project idea note | one use case and one limitation |
| question note | one question and why it matters |

## Required Separation

Every note should separate:

| Field | Meaning |
|---|---|
| source_claim_user_paraphrase | What you think the source is saying, in your own words. |
| user_interpretation | What you think it means. |
| design_application | How it could affect a design decision. |
| AI_should_not_claim | What the AI must not treat as proven. |
| evidence_needed | What would be needed to raise confidence. |

## Avoid Copying Long Passages

Do not paste:

- chapter paragraphs;
- long excerpts;
- copied exercise text;
- copied lens text;
- copied tables;
- screenshots of book pages;
- OCR output;
- AI-generated summaries of private source bodies.

Use short user-authored paraphrase instead.

## Manual Quote Safety

Only use a quote note when the quote is:

- manually provided by the user;
- short;
- lawful for personal note use;
- not automatically extracted;
- clearly marked as quote text;
- linked to a work and source document;
- within validator length thresholds.

If unsure, skip the quote and write a paraphrased user note instead.

## How To Link A Note To A Concept Card

1. Open `kb/05_cards/CONCEPT_INVENTORY.md`.
2. Find the closest concept.
3. Record the concept card path in `related_cards`.
4. Record the concept name in `related_concepts`.
5. If no concept exists, write `concept_gap: proposed_new_concept`.
6. Do not create a new verified concept from one note.

## How To Link A Note To A Lens

1. Open `DOMAIN_TO_LENS_INDEX.md`.
2. Find the domain closest to the note.
3. Choose one existing lens if possible.
4. If the note suggests a new diagnostic question, record it as a lens idea.
5. Mark source_basis as `user_manual_note`.
6. Keep confidence as `user_interpretation`.

## How To Link A Note To A Workflow

1. Open `DOMAIN_TO_WORKFLOW_INDEX.md`.
2. Identify what artifact the note helps produce.
3. Link the closest workflow pack.
4. Record which step the note improves.
5. Do not rewrite the whole workflow from one note.

## EvidenceRef Later

A user note can become EvidenceRef later if:

- it is user-authored;
- it has work_id;
- it has a useful location;
- it has limitations;
- it links to an existing target entity;
- it is reviewed.

EvidenceRef supports traceability. It does not automatically make the target verified.

## Quality Checklist

Before submitting a note, check:

- Did I write this in my own words?
- Did I avoid copying long text?
- Did I record location?
- Did I separate source claim and interpretation?
- Did I say what this does not prove?
- Did I link to a concept, lens, workflow, or capability?
- Did I mark what the AI should not claim yet?

