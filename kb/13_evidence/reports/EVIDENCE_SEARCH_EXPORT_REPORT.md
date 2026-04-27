# Evidence Search Export Report

Date: 2026-04-27

## Search Export

- Path: ../11_import_export/export/search_index.json
- Documents: 737
- Required evidence fields present in every document: yes

## Required Field Coverage

| field | missing_count |
| --- | --- |
| evidence_status | 0 |
| source_basis | 0 |
| confidence | 0 |
| is_verified | 0 |
| has_evidence_refs | 0 |
| evidence_gap_count | 0 |
| entity_scope | 0 |
| related_evidence_refs | 0 |
| promotion_status | 0 |

## Evidence Field Counts

### Evidence Status

| Evidence Status | Count |
| --- | --- |
| evidence_gap_open | 225 |
| evidence_status_unknown | 50 |
| metadata_only | 39 |
| unsupported_draft_no_evidence | 423 |

### Entity Scope

| Entity Scope | Count |
| --- | --- |
| draft_scaffold | 422 |
| general_kb | 313 |
| playtest_log | 1 |
| project_overlay | 1 |

### Verified

| is_verified | Count |
| --- | --- |
| false | 737 |

### Has Evidence Refs

| has_evidence_refs | Count |
| --- | --- |
| false | 737 |

## Safety Result

Search export exposes evidence state and still uses safe excerpts only. No high-risk body text was parsed or indexed.
