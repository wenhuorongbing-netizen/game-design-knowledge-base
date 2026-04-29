# Master Framework Phase Plan

Date: 2026-04-29

## Phase Verdict

Current phase: Master Framework Phase.

This phase supersedes the previous immediate Game Feel evidence-intake default. Game Feel evidence remains a later option after user notes exist.

## Goal

Turn the existing Game Design Knowledgebase into an AI-usable master framework that organizes the whole field of game design into capabilities, diagnostic methods, teaching paths, workflow selection, and confidence-aware output rules.

## Inputs Already Available

| Asset | Current State | Use In This Phase |
|---|---|---|
| ontology and taxonomy | broad draft structure exists | capability/domain routing |
| work registry | 19 work records, mostly metadata-only or high-risk | reading target and source-boundary routing |
| concept inventory | broad draft concept vocabulary exists | AI concept map |
| lens bank | 104 original draft diagnostic lenses | AI diagnostic question engine |
| workflow pack index | 20 workflow packs | AI action/workflow selector |
| masterclass curriculum | 84 lesson cards | AI teaching and tutoring route |
| evidence architecture | safe but empty | confidence boundary and evidence-gap handling |
| navigation | role-based paths exist | user-facing entry points |

## Scope

This phase creates meta-documents that define what the AI should be able to do with the KB.

It does not:

- parse private or high-risk book body text;
- summarize copyrighted chapters;
- extract quotes;
- invent user notes;
- promote claims to verified;
- create project overlays or playtest logs;
- build application features.

## Workstreams

| Workstream | Purpose | Outputs |
|---|---|---|
| master goal alignment | make the AI-master objective explicit | `MASTER_GOAL.md` |
| master definition | define what "AI Game Design Master" means in this repo | `AI_GAME_DESIGN_MASTER_DEFINITION.md` |
| capability matrix | map game design domains to AI abilities | `MASTER_CAPABILITY_MATRIX.md` |
| allowed abilities | state what the AI should produce | `WHAT_THE_AI_SHOULD_BE_ABLE_TO_DO.md` |
| source-boundary rules | state what the AI must not claim | `WHAT_THE_AI_MUST_NOT_CLAIM.md` |
| next steps | prioritize framework development before evidence/project intake | `NEXT_10_DEVELOPMENT_STEPS.md` |

## Development Logic

The repo already has enough draft structure to route expert behavior. What it lacks is an explicit layer that tells an AI how to behave as a game design master while using the KB safely.

This phase therefore prioritizes:

- capability mapping;
- expert-question design;
- artifact production rules;
- lens/workflow selection rules;
- confidence and source-boundary behavior;
- teaching and Socratic tutoring behavior;
- future integration points for user notes and project evidence.

## Acceptance Criteria

- The next phase is clearly refocused away from immediate Game Feel evidence intake.
- The AI master goal is explicit.
- A capability matrix exists and covers major game design domains.
- The AI's allowed outputs are clear.
- The AI's prohibited claims are clear.
- No source body is parsed.
- No fake evidence is created.
- Validation passes.

## Next Default Development Direction

Build master prompt packs and capability-specific AI operating procedures from the matrix. Evidence intake resumes only after the user supplies legal/user evidence.
