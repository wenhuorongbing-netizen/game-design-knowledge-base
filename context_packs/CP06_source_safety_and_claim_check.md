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

## Agent Runtime Files To Load

1. `AI_CONTEXT_MINIMUM.md`
2. `AI_UNCERTAINTY_AND_SOURCE_RULES.md`
3. `AI_MASTER_RUNTIME_SAFETY_RULES.md`
4. `USE_CASES/source_safety_check.md`
5. `kb/13_evidence/CLAIM_PROMOTION_WORKFLOW.md`
6. `kb/01_sources/USER_REQUIRED_EVIDENCE.md`

## Optional Human Prompt References

These files are for human copy-paste use. Codex should not load them for normal runtime execution unless the user explicitly asks for prompt text:

- `hands_on_prompts/P14_check_unsupported_claim.md`

## Files Not Needed

- private source bodies;
- generated exports;
- benchmark runs;
- prompt repair reports;
- schemas unless validating a new evidence record;
- full runtime pack unless the source request also includes a design task.

## Max Recommended Context Size

6 agent-runtime files, or roughly 5,000 to 9,000 words.

Optional prompt references may be loaded only for human prompt packaging or onboarding.

## Required Safety Rules

- Metadata-only cannot support verified claims.
- Unsupported draft cannot support verified claims.
- Do not summarize private or high-risk source bodies.
- Do not extract quotes.
- Do not invent citations, EvidenceRefs, user notes, sidecars, or legal permissions.
- If evidence is missing, produce an evidence gap report.

## Recommended Prompt

Use this short prompt:

> Use the Game Design Knowledgebase as a source-governed claim safety reviewer.
>
> Claim or request: [paste claim or request]
>
> Do not invent evidence, citations, quotes, user notes, legal sidecars, or verified status.
>
> Classify source_basis, confidence, evidence gaps, blocked wording, safer wording, and required user evidence.
>
> Do not parse private or high-risk source bodies.

## Expected Output Artifact

- claim safety report;
- source_basis classification;
- confidence classification;
- blocked operations;
- safer wording;
- evidence needed;
- next user action.
