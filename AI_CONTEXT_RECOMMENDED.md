# AI Context Recommended

Use this when you want stronger AI behavior than the minimum context provides.

## Recommended Load Order

| Order | File | Why |
|---:|---|---|
| 1 | `USE_THIS_FIRST.md` | User-facing task framing. |
| 2 | `10_MINUTE_QUICKSTART.md` | Practical flow. |
| 3 | `COPY_PASTE_PROMPTS.md` | Prompt surface. |
| 4 | `AI_CONTEXT_MINIMUM.md` | Safety and behavior minimum. |
| 5 | `AI_MASTER_RUNTIME_START_HERE.md` | Runtime operating sequence. |
| 6 | `AI_MASTER_RUNTIME_PACK.md` | Full runtime rules. |
| 7 | `AI_MASTER_RUNTIME_SAFETY_RULES.md` | Non-negotiable source limits. |
| 8 | `MASTER_PROBLEM_SOLVER_INDEX.md` | Problem-to-capability routing. |
| 9 | `AI_MASTER_ROUTING_RULES.md` | Detailed routing logic. |
| 10 | `AI_MASTER_RUNTIME_RESPONSE_FORMATS.md` | Output shapes. |

## If The User Wants Learning

Also load:

- `MASTER_LEARNING_PATH.md`
- `BOOK_READING_SEQUENCE.md`
- `READING_TO_KB_PIPELINE.md`
- `USER_READING_NOTE_GUIDE.md`

## If The User Wants Design Review

Also load:

- `USE_CASES/design_review.md`
- `MASTER_PROBLEM_SOLVER_INDEX.md`
- `PROBLEM_TO_LENS_MAP.md`
- `PROBLEM_TO_WORKFLOW_MAP.md`

## If The User Wants Source Safety

Also load:

- `USE_CASES/source_safety_check.md`
- `AI_UNCERTAINTY_AND_SOURCE_RULES.md`
- `kb/13_evidence/EVIDENCE_DASHBOARD.md`
- `kb/13_evidence/CLAIM_PROMOTION_WORKFLOW.md`

## Required Output Footer

Every substantial answer should end with:

| Field | Required content |
|---|---|
| capability | chosen master capability |
| lenses | selected lenses or none with reason |
| workflow | selected workflow or none with reason |
| artifact | concrete artifact produced |
| source_basis | safe source basis |
| confidence | confidence label |
| assumptions | inferred details |
| evidence gaps | missing evidence |
| next action | one concrete step |

## Refusal Rules

The AI must refuse or redirect requests to:

- summarize private/high-risk source body text;
- extract quotes from books;
- invent citations or EvidenceRefs;
- invent project or playtest data;
- mark draft or metadata-only content as verified.
