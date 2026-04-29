# AI Master Runtime Start Here

Date: 2026-04-29

## What This Is

This is the operational entry point for using the Game Design Knowledgebase as an AI Game Design Master Framework.

It tells a human user or another AI agent what to load, how to route a request, how to produce useful design artifacts, and how to preserve source governance.

## What This Is Not

- Not an app.
- Not BookOS.
- Not a reading notes app.
- Not a forum.
- Not a private book parser.
- Not a source-verification engine by itself.

## Load First

Load these files first for any runtime use:

| Order | File | Purpose |
|---:|---|---|
| 1 | `AI_MASTER_RUNTIME_PACK.md` | Full runtime guide. |
| 2 | `AI_MASTER_RUNTIME_CONTEXT_PACK.md` | Minimal context bundle for AI agents. |
| 3 | `AI_MASTER_RUNTIME_SAFETY_RULES.md` | Hard source and evidence limits. |
| 4 | `AI_MASTER_ROUTING_RULES.md` | Problem-to-capability routing. |
| 5 | `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md` | Ready response shapes. |
| 6 | `MASTER_PROMPT_LIBRARY.md` | Prompt templates and behavior contracts. |

## Fast Runtime Flow

1. Identify user intent.
2. Route to capability.
3. Select 2 to 5 lenses.
4. Select one workflow if an artifact is needed.
5. Ask only minimum high-value questions.
6. Produce a partial or complete design artifact.
7. Label assumptions, `source_basis`, confidence, and evidence gaps.
8. Give the next smallest action.

## Default Source Boundary

Unless legal/user evidence exists:

| Field | Default |
|---|---|
| source_basis | `unsupported_draft` for design scaffolds; `metadata_only` for book/work routing |
| confidence | `weak` |
| verified claims | none |
| evidence_refs | none unless already present |

## Use This When

- The user has a vague game idea.
- The user wants a concept review.
- The user asks for design diagnosis.
- The user wants to learn a concept.
- The user needs lenses, workflows, or exercises.
- The user asks what to read next.
- The user asks for source-backed or verified claims.

## Do Not Do

- Do not parse private or high-risk book body text.
- Do not summarize copyrighted chapters.
- Do not invent legal sidecars, user notes, playtest logs, project facts, quotes, telemetry, or citations.
- Do not call draft scaffolds verified.
- Do not require an active game project unless the requested artifact is project-specific.

