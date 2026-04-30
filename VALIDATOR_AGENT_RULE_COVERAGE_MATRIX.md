# Validator Agent Rule Coverage Matrix

Date: 2026-04-30

## Purpose

Track agent runtime rules and their current enforcement.

| Rule | Current enforcement | Gap |
|---|---|---|
| agent start exists | `npm run agent:check` | none |
| manifest markdown exists | `npm run agent:check` | none |
| manifest JSON valid | `npm run agent:check` | none |
| router exists | `npm run agent:check` | none |
| context protocol exists | `npm run agent:check` | none |
| source safety rules exist | `npm run agent:check` | none |
| every skill has SKILL.md | `npm run agent:check` | none |
| every skill has required headings | `npm run agent:check` | none |
| every skill has output contract | `npm run agent:check` | partial for manifest artifacts |
| no forbidden load paths | `npm run agent:check` | natural-language unsafe text fixtures still needed |
| router maps common tasks | documented in `AGENT_ROUTER.md` | fixture automation needed |
| output includes required labels | contracts require it | response-level testing needed |
| no fake evidence | skill rules require it | response-level testing needed |

## Priority

Next: add fixture tests for router mapping and unsafe skill definitions.
