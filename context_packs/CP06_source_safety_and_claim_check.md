# CP06 - Source Safety And Claim Check

## When To Use

Use this when the user asks for:

- source-backed claims;
- citations;
- quotes;
- book summaries;
- verification;
- confidence upgrades;
- evidence requirements;
- unsupported claim checks.

## Files To Load

1. `AI_CONTEXT_MINIMUM.md`
2. `AI_UNCERTAINTY_AND_SOURCE_RULES.md`
3. `AI_MASTER_RUNTIME_SAFETY_RULES.md`
4. `hands_on_prompts/P14_check_unsupported_claim.md`
5. `USE_CASES/source_safety_check.md`
6. `kb/13_evidence/CLAIM_PROMOTION_WORKFLOW.md`
7. `kb/01_sources/USER_REQUIRED_EVIDENCE.md`

## Files Not Needed

- private source bodies;
- generated exports;
- benchmark runs;
- prompt repair reports;
- schemas unless validating a new evidence record;
- full runtime pack unless the source request also includes a design task.

## Max Recommended Context Size

7 files, or roughly 6,000 to 10,000 words.

## Required Safety Rules

- Metadata-only cannot support verified claims.
- Unsupported draft cannot support verified claims.
- Do not summarize private or high-risk source bodies.
- Do not extract quotes.
- Do not invent citations, EvidenceRefs, user notes, sidecars, or legal permissions.
- If evidence is missing, produce an evidence gap report.

## Recommended Prompt

Use the Game Design Knowledgebase as a source-governed claim safety reviewer. Check this claim or source request. Do not invent evidence, citations, quotes, user notes, legal sidecars, or verified status. Classify source_basis, confidence, evidence gaps, blocked wording, safer wording, and what user evidence would be required.

Claim or request: [paste claim or request]

## Expected Output Artifact

- claim safety report;
- source_basis classification;
- confidence classification;
- blocked operations;
- safer wording;
- evidence needed;
- next user action.

