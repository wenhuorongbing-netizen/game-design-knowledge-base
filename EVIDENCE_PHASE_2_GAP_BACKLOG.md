# Evidence Phase 2 Gap Backlog

Date: 2026-04-28

## P0 Gaps

No P0 safety blockers remain. The repository is safe as a draft/source-governed Game Design Knowledgebase.

## P1 User Evidence Dependencies

| Gap ID | Severity | Title | Affected Files | Required Fix | Acceptance Criteria | Suggested Prompt |
|---|---|---|---|---|---|---|
| EP2-GAP-001 | P1 | first legal sidecar missing | `kb/13_evidence/sidecars/`, `kb/01_sources/sources.json` | User supplies one legal sidecar packet for an existing source and work. | Sidecar record validates; default is not full processing; no source body parsed. | `submit-first-legal-sidecar` |
| EP2-GAP-002 | P1 | first manual notes missing | `kb/13_evidence/manual_notes/records/` | User supplies three to five user-authored manual notes. | Notes validate with `source_basis: user_manual_note` and `confidence: user_interpretation`. | `submit-game-feel-phase-3-user-notes` |
| EP2-GAP-003 | P1 | EvidenceRefs unavailable | `kb/13_evidence/evidence_refs/` | Create EvidenceRefs only after accepted user evidence exists. | EvidenceRefs point to existing evidence records and target entities. | `create-evidencerefs-from-accepted-user-notes` |
| EP2-GAP-004 | P1 | claim promotion requests blocked | `kb/13_evidence/promotion_requests/records/`, `kb/05_cards/claim_graph.json` | Create limited promotion requests after EvidenceRefs exist. | Requests include reviewer, rationale, evidence scope, limitations, and do not exceed weak/user interpretation. | `draft-limited-claim-promotion-requests` |
| EP2-GAP-005 | P1 | real ProjectOverlay missing | `kb/09_project_overlays/records/` | User supplies project context and design decisions. | Overlay validates with `entity_scope: project_overlay`; claims stay project-local. | `submit-first-project-overlay-packet` |
| EP2-GAP-006 | P1 | real PlaytestLog missing | `kb/09_project_overlays/playtest_logs/records/` | User supplies real playtest data. | Log separates observed facts, quotes, interpretation, hypotheses, decisions, and next actions. | `submit-first-playtest-log-packet` |

## P2 Evidence Coverage Improvements

| Gap ID | Severity | Title | Affected Files | Required Fix | Acceptance Criteria | Suggested Prompt |
|---|---|---|---|---|---|---|
| EP2-GAP-007 | P2 | Game Feel evidence dossier needed | `kb/13_evidence/reports/`, `kb/05_cards/`, `kb/06_lenses/` | Build a domain evidence dossier after Game Feel notes exist. | Dossier lists claims, EvidenceRefs, limitations, and blocked promotions. | `build-game-feel-evidence-dossier` |
| EP2-GAP-008 | P2 | evidence-weighted navigation needs real evidence counts | `kb/navigation/`, `kb/12_quality/EVIDENCE_WEIGHTED_COVERAGE_MATRIX.md` | Refresh after first EvidenceRefs exist. | Navigation labels user-note backed, project-local, playtest-local, and verified states accurately. | `refresh-evidence-weighted-navigation` |
| EP2-GAP-009 | P2 | verified claims index empty | `kb/13_evidence/reports/VERIFIED_CLAIMS_INDEX.md` | Leave empty until legal evidence and review justify verification. | Index explicitly states no verified claims if none exist. | `review-verified-claim-readiness` |

## Blocked Items

All evidence creation and claim-promotion work is blocked until the user supplies real evidence. This is intentional and required by source governance.
