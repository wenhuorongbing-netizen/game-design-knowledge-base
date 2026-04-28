# Updated Validation Report

Date: 2026-04-28

## Validation Verdict

Status: PASS

| Metric | Count |
|---|---:|
| P0 issues | 0 |
| P1 issues | 0 |
| warnings | 0 |
| accepted exceptions | 0 |

## Import / Export Counts

| Artifact | Count |
|---|---:|
| all_entities.json entities | 859 |
| all_relationships.json relationships | 8405 |
| search_index.json documents | 737 |
| graph_nodes.json nodes | 859 |
| graph_edges.json edges | 8405 |
| import issues | 0 |

## Evidence Search Fields

| Field | Missing Count |
|---|---:|
| evidence_status | 0 |
| source_basis | 0 |
| confidence | 0 |
| is_verified | 0 |
| has_evidence_refs | 0 |
| evidence_gap_count | 0 |
| entity_scope | 0 |
| related_evidence_refs | 0 |
| promotion_status | 0 |

## Evidence Status Counts

| Metric | Count |
|---|---:|
| verified search documents | 0 |
| search documents with EvidenceRef records | 0 |
| search documents with evidence gaps | 657 |
| project-scoped search documents | 1 |
| playtest-scoped search documents | 1 |
| draft scaffold search documents | 422 |

## Validation Meaning

The KB passes the draft/source-governed safety gate. This does not mean the KB is a verified source-backed masterclass. Verified content is still blocked pending user-supplied legal evidence, manual notes, manual quotes, EvidenceRef records, and reviewer-approved promotion.

## Commands Run For Final Gate

- `npm run kb:export`
- `npm run kb:validate`
- `npm run kb:audit`
- `npm run kb:coverage`

## Final Command Result

All four final gate commands completed successfully. Final validation result is PASS with 0 P0 issues, 0 warnings, and 0 accepted exceptions.

## Truth Reconciliation Addendum

Root `rebuild_instruction.md` is absent in the working tree, HEAD, origin/main, and GitHub raw access. The validator report-consistency scan now covers the truth-sync and updated release reports in addition to the primary acceptance, backlog, state, and TODO reports.
