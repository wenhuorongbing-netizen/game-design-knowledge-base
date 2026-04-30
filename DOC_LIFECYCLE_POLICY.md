# Documentation Lifecycle Policy

Date: 2026-04-30

## Purpose

This policy defines how documentation enters, changes, ages, and exits active use.

## Lifecycle State Definitions

| State | Who uses it | Owner | Update trigger | Deprecation trigger | Visible to first-time users? | Validation rule |
|---|---|---|---|---|---|---|
| active_first_use | new human users | documentation UX owner | first-use route changes | replaced by shorter first-use path | yes | required-file CI gate |
| active_use_case | users with a specific task | product/use-case owner | use case, prompt, or artifact changes | merged into a better journey | yes, after selection | link review and prompt existence |
| active_runtime | AI agents and runtime maintainers | AI runtime owner | behavior rules, prompt rules, or context packs change | superseded by runtime pack update | no by default | source/confidence wording review |
| active_reference | learners, designers, maintainers | KB content owner | domain, capability, or framework map changes | duplicated or no longer linked | no by default | parent link required |
| active_governance | maintainers and auditors | governance owner | policy, validation, CI, evidence, or audit changes | policy superseded | no for casual users | validation/source-audit consistency |
| generated | tools and maintainers | tooling owner | command regeneration | generator replaced | no | do not manually edit |
| legacy | maintainers only | migration owner | re-audit or migration work | migrated, deprecated, or archived | no | marked non-canonical |
| deprecated | maintainers only | governance owner | historical reference changes | moved to archive or removed by approved plan | no | must say inactive |
| archive_candidate | maintainers only | documentation governance owner | duplication or rot review | archived, merged, or restored | no | must not be first-use linked |

## State Change Rules

- Promotion to `active_first_use` requires a clear reason and review against `TOP_10_FILES_FOR_FIRST_USE.md`.
- Promotion to `active_use_case` requires a user task, a prompt or journey, and an expected artifact.
- Promotion to `active_runtime` requires explicit AI behavior, context, prompt, or safety rules.
- Promotion to `active_governance` requires a policy, audit, quality gate, or maintenance purpose.
- Demotion to `archive_candidate` is allowed when a document is stale, duplicative, unowned, or no longer linked.
- Deprecation must preserve historical value while preventing active misuse.

## Review Cadence

| Review | Frequency | Output |
|---|---|---|
| first-use review | every usability phase | update first-use top 10 only if needed |
| duplication review | every major phase | update `DOC_DUPLICATION_AUDIT.md` |
| rot-risk review | every major phase | update `DOC_ROT_RISK_REGISTER.md` |
| governance review | every release phase | update owner and checklist files |

## Non-Negotiable Rules

- Do not hide source-governance constraints to simplify onboarding.
- Do not mark generated files as manually editable.
- Do not treat synthetic examples as real evidence.
- Do not present draft framework material as verified source-backed doctrine.
- Do not add app-product instructions to the active documentation set.

