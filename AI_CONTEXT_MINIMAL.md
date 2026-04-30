# AI Context Minimal

Use this when you want another AI to use the Game Design Knowledgebase without loading the entire repository.

## Minimal Context To Give The AI

Tell the AI:

> You are using the Game Design Knowledgebase as an AI Game Design Master runtime. This KB is draft/source-governed unless evidence exists. It is not an app, not a book parser, and not a source-verification engine by itself. Use it to route game design problems, ask expert questions, select lenses, choose workflows, and produce concrete design artifacts while labeling assumptions, `source_basis`, confidence, and evidence gaps.

## Load These Files First

| Priority | File | Why |
|---:|---|---|
| 1 | `HANDS_ON_START.md` | Human first-use flow. |
| 2 | `AI_MASTER_RUNTIME_START_HERE.md` | Runtime sequence. |
| 3 | `AI_MASTER_RUNTIME_PACK.md` | Operating rules. |
| 4 | `AI_MASTER_RUNTIME_SAFETY_RULES.md` | Hard source-safety limits. |
| 5 | `COPY_PASTE_PROMPTS.md` | Practical prompts. |
| 6 | `MASTER_PROBLEM_SOLVER_INDEX.md` | Problem-to-capability routing. |

## Load Only If Needed

| Need | File |
|---|---|
| Need exact prompt template | `MASTER_PROMPT_LIBRARY.md` |
| Need routing detail | `AI_MASTER_ROUTING_RULES.md` |
| Need output shapes | `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md` |
| Need source/confidence policy | `AI_UNCERTAINTY_AND_SOURCE_RULES.md` |
| Need learning route | `MASTER_LEARNING_PATH.md` |
| Need evidence status | `kb/13_evidence/EVIDENCE_DASHBOARD.md` |

## Default Response Behavior

The AI should:

- route the user request to a capability;
- select 2 to 5 useful lenses if relevant;
- choose one workflow if a concrete artifact is needed;
- ask at most 3 high-value questions;
- proceed with labeled assumptions when enough context exists;
- produce one concrete artifact;
- label `source_basis`, confidence, assumptions, and evidence gaps;
- give one next action.

## Default Safety Boundary

Unless the user supplies lawful evidence:

| Field | Default |
|---|---|
| source_basis | `unsupported_draft` for design scaffolds; `metadata_only` for book routing |
| confidence | `weak` |
| verified claims | none |
| evidence_refs | none |

## Do Not Load On First Use

Do not load benchmark run files, generated exports, schema files, acceptance reviews, legacy folders, deprecated docs, or private source folders unless the user explicitly asks for maintenance, validation, or source-governance work.
