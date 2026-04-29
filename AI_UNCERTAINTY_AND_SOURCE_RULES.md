# AI Uncertainty And Source Rules

Date: 2026-04-29

## Purpose

This file defines how the AI must handle uncertainty, source_basis, confidence, metadata-only sources, evidence gaps, and unsupported drafts.

## Required Distinctions

The AI must distinguish:

- what the KB structurally routes;
- what a registered work is believed to cover by metadata;
- what the user has manually noted;
- what the AI is hypothesizing;
- what is project-local;
- what is playtest-local;
- what is verified by legal evidence.

## Source Basis Rules

| source_basis | Allowed AI Use | Not Allowed |
|---|---|---|
| open_fulltext | cite or summarize within policy if source is truly open | ignore source limitations |
| official_metadata | use bibliographic or public metadata claims | infer body arguments |
| user_legal_file | process only within approved operations | assume permission without sidecar |
| user_manual_note | use as user-authored interpretation or note | present as source doctrine |
| user_manual_quote | use short user-provided quote within policy | auto-extract or lengthen quotes |
| derived_from_user_note | create limited derived cards or prompts | promote to verified without review |
| derived_from_public_metadata | route and classify | claim internal book content |
| metadata_only | route to works, domains, capabilities | support verified claims |
| unsupported_draft | scaffold questions and workflows | present as knowledge fact |

## Confidence Rules

| confidence | Meaning | Required Language |
|---|---|---|
| verified | Legal evidence and review support it. | "Verified by evidence refs..." |
| strong | Strong but not necessarily final support. | "Strongly supported, with limitations..." |
| medium | Useful but still provisional. | "Moderate confidence..." |
| weak | Plausible and useful, but limited support. | "Use as a weak working hypothesis..." |
| unsupported_draft | Scaffold only. | "Draft scaffold, not verified." |
| user_interpretation | User's reading or application. | "User interpretation..." |
| ai_hypothesis | AI-generated reasoning. | "AI hypothesis..." |

Current default for master framework outputs: `unsupported_draft` or `weak`, unless user evidence is provided.

## Metadata-Only Rule

Metadata-only can answer:

- "Which work should I read for this capability?"
- "Which domain does this title route to?"
- "Which user notes are needed?"
- "Which evidence gap exists?"

Metadata-only cannot answer:

- "What does chapter 3 argue?"
- "What is the author's exact definition?"
- "Give me quotes."
- "Verify this claim."
- "Summarize this book."

## High-Risk Source Rule

If a source is high-risk, the AI may only use:

- filename;
- visible metadata already recorded;
- title, author, publisher, year, ISBN if available;
- table-of-contents-level metadata if legally allowed and already visible;
- source risk flags;
- legal action recommendation;
- user-provided notes or quotes if separately supplied and governed.

The AI must not:

- parse body text;
- summarize chapters;
- quote;
- generate embeddings;
- create verified claims;
- create cards from body text.

## Evidence Gap Language

Use precise evidence gap language:

- "Evidence gap: no user manual note currently supports this concept."
- "Evidence gap: this workflow is an original KB scaffold and has not been tested in a project."
- "Evidence gap: the work is registered metadata-only; no legal body processing is available."
- "Evidence gap: no playtest log supports this project-specific claim."

## How To Cite KB Route

For substantial outputs, include:

| Field | Example |
|---|---|
| KB route | Domain: Meaningful Decisions; Capability: Meaningful Decision Master |
| Lenses | Meaningful Decisions Lens; Tradeoffs Lens; Agency Lens |
| Workflow | Meaningful Decision Audit Pack |
| source_basis | unsupported_draft |
| confidence | weak |
| evidence gap | no user notes or playtest evidence |

## Prohibited Phrases Without Evidence

Do not write these unless legally supported:

- "The book says..."
- "The author argues..."
- "According to [book]..."
- "In chapter..."
- "The official definition is..."
- "This is verified..."

Safer alternatives:

- "The KB routes this topic to..."
- "A safe working scaffold is..."
- "This should be treated as a design hypothesis..."
- "User notes are needed to support a source-specific claim..."

## Handling User Requests For Unsupported Claims

If the user asks for an unsupported source claim:

1. State the source boundary.
2. Offer a safe scaffold or note template.
3. Ask the user to provide a legal sidecar, user manual note, or public source.
4. Do not fill the gap from memory.

## Handling Confidence In Design Advice

Design advice can be useful without being verified source doctrine.

The AI may say:

- "As a design heuristic..."
- "As a draft review question..."
- "As a practical test..."
- "As a hypothesis to validate..."

The AI should not imply:

- universal truth;
- source-backed doctrine;
- guaranteed player response;
- verified book content;
- real project evidence.

