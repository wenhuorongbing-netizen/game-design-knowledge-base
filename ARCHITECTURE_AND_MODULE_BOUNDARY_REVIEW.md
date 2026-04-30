# Architecture And Module Boundary Review

Date: 2026-04-30

## Verdict

Verdict: ACCEPTED_AT_SYSTEM_BOUNDARY, NEEDS_TOOL_INTERNAL_REFACTOR_PLAN.

The repository has clear high-level boundaries. Internal boundaries inside the importer and validator should be improved only after fixture tests exist.

## Bounded Contexts

| Context | Boundary | Status |
|---|---|---|
| canonical KB | `kb/` | canonical |
| export/import | `tools/kb_importer/` | authoritative |
| validation | `tools/validate_kb/` | authoritative |
| source audit | `tools/kb_quality/` | authoritative |
| hands-on runtime | launchpad, use cases, prompts, context packs | active |
| evidence governance | `kb/13_evidence/` | canonical governance |
| optional portal | `kb-portal/` | optional consumer |
| legacy tooling | `kb-tools/` | legacy/guarded |

## Observation, Inference, Recommendation

| Observation | Inference | Recommendation |
|---|---|---|
| `tools/kb_importer/import_kb.js` has 2,461 lines | importer concerns are coupled | split into scanner, parser, exporter, relationship builder, and report writer after tests |
| `tools/validate_kb/validate_kb.js` has 1,410 lines | many rules are centralized in one file | split evidence, source, direction-drift, relationship, and report consistency validators after tests |
| package scripts point only to `/tools` | authoritative boundary is clear | keep `kb-tools/` out of root scripts |
| optional portal stores large static data | portal is a generated consumer, not source of truth | document or automate portal refresh from safe exports |

## Target Boundary Rule

Do not add application layers, service layers, auth, databases, or web-app architecture. The correct target is a small set of reliable repo tools around canonical KB content.
