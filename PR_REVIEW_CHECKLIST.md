# PR Review Checklist

Date: 2026-04-30

## Scope Check

| Check | Pass? |
|---|---|
| The change stays within Game Design Knowledgebase scope. |  |
| The change does not add app features. |  |
| The change does not weaken source governance. |  |
| The change does not manually edit generated exports unless explicitly justified. |  |

## Documentation Governance

| Check | Pass? |
|---|---|
| New docs follow `DOC_CREATION_RULES.md`. |  |
| New docs have a parent hub or index. |  |
| New docs have an owner role and lifecycle state. |  |
| First-use files remain limited and clear. |  |
| Duplicate content was avoided or justified. |  |
| Deprecated or legacy content is not presented as active. |  |

## Source Governance

| Check | Pass? |
|---|---|
| No private or high-risk source body text was parsed. |  |
| No fake evidence, user notes, quotes, project facts, or benchmark outputs were created. |  |
| No unsupported claim was promoted to verified. |  |
| Source_basis and confidence language remains clear. |  |

## Quality Gates

| Command | Result |
|---|---|
| `npm run kb:export` |  |
| `npm run kb:validate` |  |
| `npm run kb:audit` |  |
| `npm run kb:coverage` |  |

## Reviewer Decision

| Decision | Meaning |
|---|---|
| approve | safe, useful, validated |
| request changes | correctness, governance, usability, or validation issue |
| split PR | change is too broad |
| reject | out of scope or unsafe |

