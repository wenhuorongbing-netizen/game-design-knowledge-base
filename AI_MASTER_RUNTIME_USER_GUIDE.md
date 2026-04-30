# AI Master Runtime User Guide

Date: 2026-04-30

## What This Guide Is For

Use this guide when you want the AI to help with game design now, before you have verified source evidence or a live game project.

The runtime is useful as a structured design assistant. It is not yet benchmark-proven master behavior.

## Fast Start

1. Open `AI_MASTER_RUNTIME_START_HERE.md`.
2. Open `AI_MASTER_RUNTIME_PACK.md`.
3. Choose the user task type: idea review, concept teaching, design audit, workflow execution, reading guidance, or source-safety question.
4. Use `AI_MASTER_RUNTIME_PROMPT_SELECTOR.md` to pick a prompt.
5. Require the response to include assumptions, `source_basis`, confidence, evidence gaps, and one next action.

## Best First Uses

| User need | Start with | Expected output |
|---|---|---|
| I have a vague idea | game idea review | concept review memo |
| I do not know what the game is about | core experience definition | core experience statement |
| My choices feel fake | meaningful decision audit | decision matrix |
| My system is messy | systems audit | system map and risk memo |
| My economy is unstable | economy audit | source/sink table |
| My game feels wrong | game feel audit | feel tuning checklist |
| My UI feedback is unclear | UI feedback audit | feedback readability audit |
| My story fights mechanics | narrative-mechanic alignment | alignment map |
| I need a prototype | prototype plan | prototype question sheet |
| I need a playtest | playtest plan | playtest script |
| I want to learn | concept teaching | mini lesson and exercise |
| I want source-backed proof | evidence request | evidence gap and intake request |

## Required Response Footer

Ask the AI to end substantial answers with:

| Field | Expected value |
|---|---|
| capability | selected master capability |
| lenses | 2 to 5 selected lenses or none with reason |
| workflow | selected workflow or none with reason |
| source_basis | usually `unsupported_draft` or `metadata_only` unless user evidence exists |
| confidence | usually `weak` unless evidence exists |
| assumptions | what the AI inferred |
| evidence_gap | what is missing |
| next_action | one concrete next step |

## How To Ask Better Questions

Use requests that name the desired artifact:

- Create a concept review memo for this idea.
- Build a decision audit matrix for these choices.
- Map the economy as sources, sinks, stores, and risks.
- Teach this concept with a short exercise.
- Tell me what evidence would be needed to verify this claim.

## What To Avoid Asking

Avoid asking the AI to:

- prove a book-specific claim without evidence;
- summarize a private source;
- invent a playtest result;
- decide with certainty when context is missing;
- treat draft KB scaffolds as verified doctrine.

## How To Benchmark A Target AI

1. Use `AI_MASTER_BENCHMARK_RUN_003_TARGET_PROMPTS.md`.
2. Send each target prompt to the target AI with the runtime context.
3. Copy the exact raw outputs into `AI_MASTER_BENCHMARK_RUN_003_RAW_OUTPUTS.md`.
4. Do not edit weak or unsafe responses.
5. Score only collected responses.
