# Validation Report

Generated at: 2026-04-30T08:57:57.623Z
Repository: `D:\Game\FOTN\knowledge`

## Summary

- P0 issues: 0
- P1 issues: 0
- warnings: 0
- accepted exceptions: 0
- result: PASS
- pass meaning: P0 safety gate passed; no accepted migration exceptions remain.

## Release Interpretation

Validation PASS means the draft/source-governed KB safety gate passed and no accepted migration exceptions remain.

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
- evidence_ref required fields
- evidence_ref broken links
- metadata_only cannot support verified claims
- unsupported_draft cannot support verified claims
- pending sidecar cannot support verified claims
- user_manual_quote explicit user-provided flag
- user_manual_quote source_basis and status
- user_manual_quote work/source/length requirements
- user_manual_quote length threshold
- user_manual_quote automated extraction block
- user_manual_note source_basis and user_interpretation confidence
- user_manual_note type/status/work requirements
- high-risk source evidence-operation boundary
- legal sidecar required fields
- legal sidecar source/work references
- sidecar approval status enum
- no sidecar default full processing
- source AI processing requires sidecar
- high-risk process_full_text requires approved sidecar
- claim status/confidence conflict
- promotion request reviewer and rationale
- promotion request evidence references and target claims
- promotion request evidence-scope alignment
- promotion review reviewer and rationale
- promotion review request link and decision enum
- project overlay local observation boundary
- playtest local observation boundary
- legacy high-risk body artifact scan
- unsafe portal data scan
- active root direction-drift instruction scan
- report consistency scan

## Issues

| Severity | Rule | File | Message |
|---|---|---|---|
| pass | none |  | No issues found. |

## Accepted Exceptions

| Rule | File | Message |
|---|---|---|
| none |  | No accepted exceptions. |
