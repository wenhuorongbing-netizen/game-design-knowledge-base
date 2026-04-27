# Game Design Knowledgebase Rebuild Instruction

This is the active rebuild instruction for this repository.

## Project Identity

This repository is the **Game Design Knowledgebase**.

It is not BookOS. It is not a reading notes app. It is not a personal book tracker. It is not a forum platform. It is not a Vue/Spring/MySQL application.

## Hard Scope Boundaries

Do not build:

- BookOS
- reading sessions
- reading progress
- personal book library CRUD
- user authentication
- forum CRUD
- daily quote or sentence product features
- Vue, Spring, MySQL, or full-stack app layers

Do not parse, summarize, quote, embed, or transform high-risk PDF/EPUB source body text.

High-risk markers include:

- `z-library`
- `z-lib`
- `1lib`
- `Anna's Archive`
- `it-ebooks`
- `mirror`
- `suspicious scan`
- unknown scanned copies

## Current Scope

Work only on the structured knowledgebase system:

- source governance
- source audit
- work registry
- ontology and taxonomy
- Markdown frontmatter standards
- JSON schemas
- concept cards
- framework cards
- design lenses
- workflow packs
- exercise cards
- prompt cards
- claim and evidence model
- confidence labels
- validation pipeline
- export pipeline
- search and graph exports
- coverage matrix
- legal audit
- hallucination audit
- evidence upgrade workflow

## Required Source Governance

Every knowledge entity must carry:

- `source_basis`
- `confidence`
- `status`

Draft scaffolds must remain visibly draft. Do not promote `weak`, `unsupported_draft`, or `ai_hypothesis` content to verified without allowed evidence.

Allowed source bases:

- `open_fulltext`
- `official_metadata`
- `user_legal_file`
- `user_manual_note`
- `user_manual_quote`
- `derived_from_user_note`
- `derived_from_public_metadata`
- `metadata_only`
- `unsupported_draft`

Confidence levels:

- `verified`
- `strong`
- `medium`
- `weak`
- `unsupported_draft`
- `user_interpretation`
- `ai_hypothesis`

## Release Gates

### Draft KB Release Gate

The draft KB release may pass when:

- high-risk sources are metadata-only;
- all entities have `source_basis` and `confidence`;
- validation/export pipelines run cleanly;
- search and graph exports exist;
- draft scaffolds are labeled as draft or unsupported;
- accepted exceptions are explicitly documented.

### Verified Source-Backed Masterclass Release Gate

The verified release must remain blocked until:

- legal sidecars or open/legal source bases exist;
- user notes or allowed quotes are attached;
- verified claims have evidence refs;
- book-specific claims are source-backed;
- project overlays or playtest logs support practice recommendations.

## Authoritative Commands

Run from the repository root:

```powershell
npm run kb:export
npm run kb:validate
npm run kb:coverage
npm run kb:audit
```

The authoritative pipeline operates on `/kb`. Legacy `/kb-tools` scripts are deprecated and must not be used as the default build path.
