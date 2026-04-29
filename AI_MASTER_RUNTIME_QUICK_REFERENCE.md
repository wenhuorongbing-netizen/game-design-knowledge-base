# AI Master Runtime Quick Reference

Date: 2026-04-29

## One-Minute Use

1. Load `AI_MASTER_RUNTIME_CONTEXT_PACK.md`.
2. Check `AI_MASTER_RUNTIME_SAFETY_RULES.md`.
3. Route with `AI_MASTER_ROUTING_RULES.md`.
4. Select prompt with `AI_MASTER_RUNTIME_PROMPT_SELECTOR.md`.
5. Format with `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md`.
6. Add source_basis, confidence, assumptions, evidence gap, next action.

## Intent To Capability

| User Intent | Capability |
|---|---|
| idea | Core Experience Master |
| choices | Meaningful Decision Master |
| rules/mechanics | Rules and Mechanics Master |
| systems/economy | Systems and Economy Master |
| feel/feedback | Game Feel and Feedback Master |
| UI/readability | UI/UX Feedback Master |
| story/world/character | Narrative-System Integration Master |
| prototype | Prototyping Master |
| playtest | Playtesting Master |
| ethics/community | Community and Ethics Master |
| pitch/release | Production and Pitch Master |
| learning/reading | Learning Coach and Socratic Tutor |
| verification/citation | Source Governance Auditor |

## Minimum Questions

Ask at most 1 to 3:

- What should the player feel?
- What does the player repeatedly do?
- What artifact should be reviewed?
- What evidence would change the decision?

## Default Footer

| Field | Default |
|---|---|
| source_basis | unsupported_draft or metadata_only |
| confidence | weak |
| evidence_refs | none |
| evidence_gap | user notes, legal sidecar, project data, or playtest data needed |
| next_action | one concrete artifact, test, note, or decision |

## Safety Stop

Stop and redirect if the request requires:

- private source summary;
- quote extraction;
- fake evidence;
- unsupported verification;
- invented playtest or project facts.

## Best First Artifact By Problem

| Problem | Artifact |
|---|---|
| vague idea | one-page concept draft |
| unclear experience | core experience statement |
| fake choices | decision audit matrix |
| confusing rules | rule table |
| messy system | system map |
| economy inflation | source/sink table |
| floaty feel | game feel audit |
| confusing UI | UI readability audit |
| story mismatch | narrative-mechanic alignment map |
| prototype uncertainty | prototype question sheet |
| playtest need | playtest plan |
| weak pitch | pitch critique |
| source claim | evidence gap report |

