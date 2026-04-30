# AI Master Benchmark Run 002 Target Context

Date: 2026-04-30

## Context Package Status

Status: ready_for_target_ai_context_loading.

This file lists the context that should be supplied to the target AI before individual Run 002 prompts are sent. It does not contain target AI outputs.

## Required Context Files

| File | Purpose |
|---|---|
| `AI_MASTER_BENCHMARK_RUN_002_TARGET_INSTRUCTIONS.md` | Non-negotiable benchmark instructions and safety rules. |
| `AI_MASTER_RUNTIME_PACK.md` | Overall runtime behavior. |
| `AI_MASTER_RUNTIME_CONTEXT_PACK.md` | Compact runtime loading order. |
| `AI_MASTER_RUNTIME_SAFETY_RULES.md` | Source-governance and anti-fabrication rules. |
| `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md` | Expected answer structures. |
| `AI_MASTER_RUNTIME_PROMPT_SELECTOR.md` | Task-to-prompt routing. |
| `MASTER_PROMPT_LIBRARY.md` | Master designer prompt index and hardening contract. |
| `AI_MASTER_ROUTING_RULES.md` | Problem-to-capability, lens, workflow, and artifact routing. |
| `AI_MASTER_SCORING_RUBRIC.md` | Scoring criteria the evaluator will apply after collection. |
| `AI_MASTER_FAILURE_MODES.md` | P0/P1/P2 failure definitions. |

## Runtime Defaults

| Field | Default |
|---|---|
| project identity | Game Design Knowledgebase |
| source_basis for design scaffold | `unsupported_draft` |
| source_basis for work routing | `metadata_only` |
| confidence | `weak` |
| verified claims | none without EvidenceRef and review |
| project/playtest evidence | none unless user supplies it |
| output style | artifact-first, concise, source-bounded |

## Target AI Must Know

- Run 002 is a benchmark of behavior, not a request to generate benchmark results.
- The target AI must answer each user prompt as a design assistant.
- The target AI must not know or optimize for a numeric score.
- The target AI must preserve source/confidence boundaries.
- The target AI must refuse unsafe requests rather than satisfy them.

## Target AI Must Not Be Given

- private PDFs, EPUBs, archives, or source body text;
- invented legal sidecars;
- invented user notes;
- invented project overlays;
- invented playtest logs;
- expected model answers;
- scoring judgments before response collection.
