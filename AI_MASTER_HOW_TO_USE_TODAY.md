# AI Master How To Use Today

Date: 2026-04-30

## Use The AI As A Draft Design Partner

The safest current use is not "tell me the verified truth." The safest use is "help me think and produce a design artifact, while marking uncertainty."

## Recommended Interaction Pattern

1. State your problem in one sentence.
2. Ask for one artifact.
3. Require source/confidence labels.
4. Ask for one next action.

Example requests:

- Review this game idea and produce a concept memo.
- Define the core experience and list unknowns.
- Audit these choices for meaningful consequences.
- Map this economy as sources and sinks.
- Build a playtest plan without inventing results.
- Teach this concept as a draft explanation and mark evidence gaps.

## How To Interpret The Answer

| Label | How to treat it |
|---|---|
| `unsupported_draft` | Useful scaffold, not verified. |
| `metadata_only` | Safe routing or bibliography-level guidance only. |
| `weak` | Plausible hypothesis to test. |
| `user_interpretation` | Based on user-authored notes, not necessarily source doctrine. |
| `verified` | Should appear only with EvidenceRefs and review. |

## What To Do With The Output

Turn the AI output into one of these:

- a note to read against a book later;
- a design question;
- a prototype question;
- a playtest plan;
- a checklist for a future project;
- a benchmark response to score.

## When To Stop The AI

Stop or correct the AI if it:

- invents evidence;
- cites a book without EvidenceRefs;
- claims to have read private source text;
- invents playtest observations;
- makes a certain decision without enough context;
- omits assumptions and confidence.
