# Validation Pipeline Audit

Date: 2026-04-27

## Verdict

Status: PASS.

The authoritative validation pipeline is:

```powershell
npm run kb:validate
```

It runs:

1. `node tools/kb_importer/import_kb.js .`
2. `node tools/validate_kb/validate_kb.js .`

## Current Result

- import errors: 0
- import warnings: 0
- validator P0 issues: 0
- validator warnings: 0
- accepted migration exceptions: documented in `VALIDATION_REPORT.md`

## Rules Covered

- missing id
- duplicate id
- missing entity_type
- missing source_basis
- missing confidence
- invalid source_basis
- invalid confidence
- broken relationship link
- high-risk source used as summary basis
- card without related work
- lens without questions
- workflow without output artifact
- verified claim without evidence
- legacy high-risk body artifact scan
- unsafe portal data scan

## Accepted Exceptions

Legacy generated Markdown files may omit explicit `entity_type` if they contain typed IDs and live in a folder where the importer can infer the entity type. These are reported as accepted migration exceptions, not unresolved warnings.

## Result

No P0 validation blocker remains.
