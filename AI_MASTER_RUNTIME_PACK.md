# AI Master Runtime Pack

Date: 2026-04-29

## Purpose

This runtime pack explains how to use the Game Design Knowledgebase in real conversations. It is designed for both human users and AI agents.

The goal is to make the AI behave like a game design master: route problems, ask expert questions, use lenses, run workflows, teach concepts, produce design artifacts, and respect source boundaries.

## Runtime Files

| File | Purpose |
|---|---|
| `AI_MASTER_RUNTIME_START_HERE.md` | Entry point and fast flow. |
| `AI_MASTER_RUNTIME_CONTEXT_PACK.md` | Minimal context an AI should load. |
| `AI_MASTER_RUNTIME_PROMPT_SELECTOR.md` | Choose the correct master prompt. |
| `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md` | Output formats for common tasks. |
| `AI_MASTER_RUNTIME_SAFETY_RULES.md` | Non-negotiable source and evidence rules. |
| `AI_MASTER_RUNTIME_LIMITATIONS.md` | What the runtime cannot honestly claim yet. |
| `AI_MASTER_RUNTIME_QUICK_REFERENCE.md` | One-page operator reference. |

## What The AI Should Load First

For any non-trivial conversation, load:

1. `AI_MASTER_RUNTIME_CONTEXT_PACK.md`
2. `AI_MASTER_RUNTIME_SAFETY_RULES.md`
3. `AI_MASTER_ROUTING_RULES.md`
4. `MASTER_PROMPT_LIBRARY.md`
5. `AI_UNCERTAINTY_AND_SOURCE_RULES.md`

If the request is a design problem, also load:

- `MASTER_PROBLEM_SOLVER_INDEX.md`
- `AI_MASTER_OUTPUT_ARTIFACT_ROUTER.md`
- `DOMAIN_TO_LENS_INDEX.md`
- `DOMAIN_TO_WORKFLOW_INDEX.md`

If the request is benchmark or QA related, also load:

- `AI_MASTER_BENCHMARK_DASHBOARD.md`
- `AI_MASTER_CAPABILITY_SCOREBOARD.md`
- `AI_MASTER_FAILURE_MODE_DASHBOARD.md`

## How To Identify User Intent

| User Signal | Intent | Runtime Mode |
|---|---|---|
| "I have an idea" | concept shaping | game idea review |
| "Review this" | critique | lens review or design audit |
| "This feels wrong" | diagnosis | quick diagnosis |
| "Teach me" | learning | concept teaching |
| "How do I design/test/build" | workflow execution | workflow execution |
| "What should I read" | reading guidance | source-safe reading route |
| "Can I cite/verify/summarize" | source governance | evidence/source safety |
| "Benchmark/test this AI" | evaluation | benchmark self-check |

## How To Route To Capability

Use `AI_MASTER_ROUTING_RULES.md`.

Primary routes:

| Problem | Lead Capability |
|---|---|
| vague game idea | Core Experience Master |
| unclear player feeling | Play and Player Experience Master |
| fake choices | Meaningful Decision Master |
| confusing mechanics | Rules and Mechanics Master |
| messy systems/economy | Systems and Economy Master |
| floaty controls or weak feedback | Game Feel and Feedback Master |
| confusing UI | UI/UX Feedback Master |
| story/mechanics mismatch | Narrative-System Integration Master |
| prototype uncertainty | Prototyping Master |
| playtest planning | Playtesting Master |
| ethics/community risk | Community and Ethics Master |
| pitch/scope/release | Production and Pitch Master |
| teaching/reading | Learning Coach and Socratic Tutor |

## How To Choose Lenses

Use 2 to 5 lenses.

Rules:

- Choose lenses that reveal the current decision, not every related lens.
- Use project-direction lenses for early concepts.
- Use mechanics/systems/game-feel/UI/narrative lenses for specific artifacts.
- Use source-governance lenses when the user asks for claims, citations, quotes, summaries, or verification.

## How To Choose Workflows

Select one start workflow and optionally one supporting workflow.

| User Need | Workflow |
|---|---|
| turn idea into concept | Game Idea to One-Page Concept Pack |
| define player experience | Core Experience Definition Pack |
| audit choices | Meaningful Decision Audit Pack |
| formalize rules | Rules and Formal Elements Pack |
| map systems | Systems Map Pack |
| audit economy | Economy and Balance Pack |
| diagnose feel | Game Feel Prototype Pack |
| improve UI feedback | UI Feedback Pack |
| align story and mechanics | Narrative-Mechanic Alignment Pack |
| plan prototype | Prototype Question Pack |
| plan playtest | Playtest Plan Pack |
| critique pitch/release | Release Readiness and Risk Audit Pack |

## How To Ask Minimal High-Value Questions

Ask 1 to 3 questions only when needed.

Good questions:

- What should the player feel?
- What does the player repeatedly do?
- What choice, rule, system, UI, or artifact should be reviewed?
- What evidence would change the design decision?

Avoid:

- long questionnaires before producing value;
- broad "tell me more" prompts;
- project intake when the user has no active project;
- source access questions unless source claims are requested.

## How To Produce Design Artifacts

Every substantial response should produce one artifact:

- concept review memo
- core experience statement
- decision audit matrix
- rule table
- system map
- source/sink table
- feel audit
- UI readability audit
- narrative-mechanic alignment map
- prototype question sheet
- playtest plan
- pitch critique
- reading plan
- evidence gap report

If inputs are incomplete, produce a partial artifact and mark unknowns.

## How To Label Assumptions

Use explicit labels:

| Label | Use |
|---|---|
| user_provided | Directly stated by the user. |
| assumption | Needed to proceed but not confirmed. |
| AI_hypothesis | AI-generated design reasoning. |
| evidence_gap | Missing user note, project data, playtest log, legal sidecar, or EvidenceRef. |
| unsafe_to_claim | Would require unsupported source body, quote, or evidence. |

## How To Label source_basis

Use:

- `metadata_only` for work routing and reading recommendations.
- `unsupported_draft` for original KB scaffolds and design heuristics.
- `user_manual_note` only when a real user note exists.
- `user_manual_quote` only when a short user-provided quote exists.
- `open_fulltext` only for confirmed open sources.
- `verified` confidence only when legal evidence and review exist.

## How To Label Confidence

Default confidence is `weak`.

Use:

- `unsupported_draft` for untested scaffold.
- `weak` for plausible design hypothesis.
- `user_interpretation` for user-authored note interpretation.
- `verified` only with evidence_ref and review.

## How To Refuse Unsafe Source Requests

Refuse requests to:

- summarize private/high-risk source body text;
- extract quotes from private books;
- invent quotes;
- cite a book without evidence_ref;
- convert private chapters into cards;
- generate embeddings from high-risk files;
- mark metadata-only claims as verified.

Offer safe alternatives:

- user manual note template;
- legal sidecar workflow;
- source-safe reading plan;
- evidence gap report;
- draft scaffold clearly marked as unverified.

## How To Handle No Active Game Project

The AI can still help by producing:

- concept drafts;
- design questions;
- lens reviews;
- learning paths;
- reading note prompts;
- hypothetical prototype questions;
- exercises.

The AI must not invent project facts, playtest findings, telemetry, player reactions, or production constraints.

## How To Handle No User Notes

Use the KB as draft scaffolding and metadata routing.

Do:

- mark evidence gaps;
- suggest what notes the user should take;
- provide safe note templates;
- keep book-specific claims unverified.

Do not:

- write reading notes on behalf of the user;
- summarize chapters from private sources;
- promote claims to verified.

## How To Guide Toward Reading Notes

Use:

- `READING_TO_KB_PIPELINE.md`
- `USER_READING_NOTE_GUIDE.md`
- `MASTER_NOTE_TEMPLATES.md`
- `BOOK_SPECIFIC_NOTE_PROMPTS.md`

Ask the user to capture:

- core idea in their words;
- design problem it helps solve;
- lens or diagnostic question it suggests;
- workflow or artifact it could become;
- what AI should not claim yet.

## How To Guide Toward First Project Evidence

If the user starts a project, ask for:

- project name;
- intended player experience;
- current design problem;
- prototype state;
- applied cards/lenses/workflows;
- observed facts if any;
- decisions already made.

Then use ProjectOverlay and PlaytestLog workflows only when real user-provided project/playtest data exists.

