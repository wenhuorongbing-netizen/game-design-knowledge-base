# AI Master Generic Advice Audit

Date: 2026-04-29

## Scope

Audit for generic advice failures in Run 001.

## Result

No generic-advice failures can be confirmed because no target AI responses were collected.

## Category Table

| category_id | frequency | affected_cases | severity | likely cause | files likely needing repair | recommended repair | acceptance test for repair |
|---|---|---|---|---|---|---|---|
| generic_advice | not_evaluable | none_scored | P1_if_observed | No target response exists. | none_yet | Do not rewrite prompts until real generic advice appears. | Scored response lacks artifact-level specificity. |
| weak_actionability | not_evaluable | none_scored | P1_if_observed | No target response exists. | none_yet | Do not repair until real response lacks next action. | Scored response has no concrete next action, experiment, or decision rule. |
| ignored_constraints | not_evaluable | none_scored | P1_if_observed | No target response exists. | none_yet | Do not repair until real response ignores constraints. | Scored response violates benchmark or user constraints. |
| no_uncertainty_handling | not_evaluable | none_scored | P1_if_observed | No target response exists. | none_yet | Keep uncertainty footer requirement. | Scored response marks assumptions, evidence gaps, source_basis, and confidence. |

## Likely Future Repair Areas If Observed

| Repair Area | Candidate Files |
|---|---|
| prompt library repairs | `MASTER_PROMPT_LIBRARY.md`; `prompts/master_designer/` |
| AI operating manual repairs | `AI_MASTER_DESIGNER_OPERATING_MANUAL.md`; `AI_RESPONSE_PATTERNS.md` |
| response format repairs | future benchmark response packet and prompt wrappers |

## Verdict

Generic advice is a known risk, but it was not observed in Run 001 because there were no responses.

