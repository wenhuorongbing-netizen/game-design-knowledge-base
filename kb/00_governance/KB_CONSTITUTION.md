# BookOS Game Design KB Constitution

## Purpose

This knowledge base is a governed game design operating system, not a loose note archive.

Its job is to transform reading, research, discussion, and project use into traceable design knowledge that can safely support:

- works and source registries
- dossiers
- concept cards
- design lenses
- workflow packs
- forum discussion
- project overlays
- later AI-assisted retrieval and composition

## Non-Negotiable Rules

### 1. Traceability First

Every claim, card, lens, lesson, workflow, and dossier must trace back to a declared `source_basis`.

If a statement cannot be traced, it must be marked as one of:

- `unsupported_draft`
- `user_interpretation`
- `ai_hypothesis`

### 2. Legal Source Governance Is Mandatory

No source may be treated as legally usable merely because it exists in the workspace.

If a file name or visible metadata includes markers such as:

- `z-library`
- `z-lib`
- `1lib`
- `Anna’s Archive`
- `it-ebooks`
- suspicious mirror indicators

then the source is `HIGH_RISK_SOURCE` unless the user later provides an explicit legal sidecar.

`HIGH_RISK_SOURCE` files may be recorded at metadata level only. They may not be ingested for body text, chapter summary, quote extraction, or confident interpretation.

### 3. Separate Source, Interpretation, Inference, and Application

The KB must always distinguish:

- what a source says
- what the user thinks
- what the AI infers
- what has been applied to a project
- what has been tested in playtests

These are different knowledge states and must not be merged silently.

### 4. Production Use and Theory Use Both Matter

Game design knowledge must be navigable in two ways:

- by theory and concept
- by production phase and deliverable

The ontology must support both.

### 5. Confidence Is Required Everywhere

Every future work note, dossier, card, lens, lesson, workflow, and overlay must declare a confidence level.

Allowed values are defined in [CONFIDENCE_MODEL.md](./CONFIDENCE_MODEL.md).

### 6. No Silent Promotion

`metadata_only` material may seed intake records, but it must not be silently promoted to:

- verified summary
- chapter summary
- quote card
- framework claim
- production recommendation

without a stronger legal source basis.

### 7. Project Overlays Must Stay Separate

General knowledge belongs in `/kb`.

Project-specific application belongs in `/kb/09_project_overlays` or a downstream project workspace.

The global KB must not be distorted by one project’s needs.

### 8. AI Must Inherit Governance, Not Override It

AI is allowed to organize, format, compare, and scaffold.

AI is not allowed to:

- invent source support
- upgrade weak evidence into verified fact
- summarize copyrighted body text from high-risk files
- produce long quotations from restricted sources

### 9. Reading Is Transformation, Not Hoarding

The desired output of the KB is not “stored books.”

The desired output is reusable design knowledge:

- concepts
- frameworks
- comparisons
- lenses
- lessons
- workflows
- project applications

### 10. Prompt 1 Scope Lock

Prompt 1 creates governance, ontology, intake scaffolding, and source audit only.

Prompt 1 does not:

- ingest high-risk book bodies
- summarize copyrighted chapters
- create verified doctrine from suspicious files

## Decision Hierarchy

When there is a conflict, resolve it in this order:

1. legal source policy
2. source basis
3. confidence model
4. ontology consistency
5. usability and formatting preference

## Exit Condition For Future Agents

If an agent cannot prove legal basis and confidence basis, it must stop at intake metadata and mark the output as draft or blocked.
