# Evidence Dashboard

Date: 2026-04-27

This dashboard is the human entry point for evidence status in the Game Design Knowledgebase. It is generated from source-governed KB exports and evidence reports.

## Current Evidence Gate

| Gate | Status | Meaning |
|---|---|---|
| Draft KB release | PASS | Draft/source-governed scaffolds are usable with visible uncertainty. |
| Verified source-backed masterclass | BLOCKED | No verified claims exist yet because no legal EvidenceRef records have been approved. |
| High-risk body ingestion | BLOCKED | No PDF/EPUB/archive body text may be parsed without legal sidecar approval. |
| Project/playtest evidence | SCAFFOLDED | Templates and scope validation exist, but sample overlays/logs are not evidence. |

## Counts

| Metric | Count |
|---|---|
| Search documents | 737 |
| All entities | 859 |
| Relationships | 8405 |
| Evidence entities currently imported | 0 |
| Verified search documents | 0 |
| Search documents with evidence refs | 0 |
| Search documents with evidence gaps | 657 |
| Project-scoped search documents | 1 |
| Playtest-scoped search documents | 1 |
| Draft-scaffold search documents | 422 |

## Evidence Status Counts

| Evidence Status | Count |
| --- | --- |
| evidence_gap_open | 225 |
| evidence_status_unknown | 50 |
| metadata_only | 39 |
| unsupported_draft_no_evidence | 423 |

## Entity Scope Counts

| Entity Scope | Count |
| --- | --- |
| draft_scaffold | 422 |
| general_kb | 313 |
| playtest_log | 1 |
| project_overlay | 1 |

## Promotion Status Counts

| Promotion Status | Count |
| --- | --- |
| blocked_no_evidence | 737 |

## Start Here

- [Evidence Intake Plan](EVIDENCE_INTAKE_PLAN.md)
- [Legal Sidecar Workflow](sidecars/SIDECAR_REVIEW_GUIDE.md)
- [User Manual Note Template](manual_notes/user_manual_note_template.md)
- [User Manual Quote Template](manual_quotes/user_manual_quote_template.md)
- [Claim Promotion Workflow](CLAIM_PROMOTION_WORKFLOW.md)
- [Priority Evidence Backlog](PRIORITY_EVIDENCE_BACKLOG.md)
- [Evidence Gap Register](EVIDENCE_GAP_REGISTER.md)
- [Verified Claims Index](reports/VERIFIED_CLAIMS_INDEX.md)
- [Unsupported Claims Index](reports/UNSUPPORTED_CLAIMS_INDEX.md)
- [Game Feel Evidence Pilot](reports/GAME_FEEL_EVIDENCE_PILOT.md)
- [Meaningful Decisions Evidence Pilot](reports/MEANINGFUL_DECISIONS_EVIDENCE_PILOT.md)
- [Systems Economy Playtest Evidence Pilot](reports/SYSTEMS_ECONOMY_PLAYTEST_EVIDENCE_PILOT.md)

## Rule

If an item is not explicitly verified with legal EvidenceRef support, treat it as draft, metadata-only, or project/playtest-local according to its fields.
