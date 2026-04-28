# Evidence Intake

Status: canonical architecture, no evidence ingested yet.

This folder defines how future legal evidence can upgrade draft Game Design Knowledgebase entities.

It is not a source-text extraction area. Do not place raw PDF, EPUB, archive, scanned book, or copied book body text here.

## What Belongs Here

| Area | Purpose |
|---|---|
| `EVIDENCE_DASHBOARD.md` | Human dashboard for evidence status, verification boundary, and pilot links. |
| `EVIDENCE_STATUS_INDEX.md` | Evidence-aware index for draft/verified/project/playtest status. |
| `PHASE_2_INTAKE_GATE.md` | Gate rules for the first real user evidence packet. |
| `USER_EVIDENCE_PACKET_TEMPLATE.md` | Template for the first user-submitted evidence packet. |
| `USER_EVIDENCE_PACKET_CHECKLIST.md` | Checklist used before a packet can be accepted for validation. |
| `PHASE_2_INTAKE_REVIEW.md` | Current review state for Phase 2 intake. |
| `sidecars/` | LegalSidecar records that explicitly state whether a user has legal access and AI-processing permission. |
| `manual_notes/` | UserManualNote records written by the user, not extracted from high-risk files. |
| `manual_quotes/` | UserManualQuote records explicitly supplied by the user and kept short. |
| `open_sources/` | OpenSourceReference and OfficialMetadataReference records for lawful public sources and official metadata. |
| `evidence_refs/` | EvidenceRef records that connect admissible evidence to entities or claims. |
| `evidence_gaps/` | EvidenceGap records for missing evidence that needs follow-up. |
| `batches/` | EvidenceIntakeBatch records for grouped intake runs. |
| `promotion_requests/` | ClaimPromotionRequest records proposing evidence-backed confidence upgrades. |
| `reviews/` | ClaimPromotionReview records that accept, reject, or defer promotion requests. |
| `reports/` | EvidenceAuditReport records and future evidence audit outputs. |
| `schemas/` | JSON schemas for evidence intake objects. |

## Non-Negotiable Rules

- High-risk source body text must not be parsed, summarized, quoted, embedded, or transformed.
- `metadata_only`, `unsupported_draft`, and `ai_hypothesis` cannot support verified claims.
- Pending sidecars cannot support verified claims.
- `user_manual_quote` evidence must be explicitly user-provided.
- Claim promotion requires EvidenceRef records, reviewer, rationale, and evidence-scope alignment.
- Project overlays and playtest logs remain local evidence until reviewed; they are not universal doctrine.
- Evidence intake can support future upgrades, but this architecture phase does not promote any claim.

## Current Release Boundary

This phase creates infrastructure only. Verified source-backed masterclass status remains blocked until legal sidecars, manual notes, open sources, and evidence reviews exist.

## Evidence Status Links

- [EVIDENCE_DASHBOARD.md](EVIDENCE_DASHBOARD.md)
- [EVIDENCE_STATUS_INDEX.md](EVIDENCE_STATUS_INDEX.md)
- [PHASE_2_INTAKE_GATE.md](PHASE_2_INTAKE_GATE.md)
- [USER_EVIDENCE_PACKET_TEMPLATE.md](USER_EVIDENCE_PACKET_TEMPLATE.md)
- [USER_EVIDENCE_PACKET_CHECKLIST.md](USER_EVIDENCE_PACKET_CHECKLIST.md)
- [PHASE_2_INTAKE_REVIEW.md](PHASE_2_INTAKE_REVIEW.md)
- [EVIDENCE_INTAKE_PLAN.md](EVIDENCE_INTAKE_PLAN.md)
- [CLAIM_PROMOTION_WORKFLOW.md](CLAIM_PROMOTION_WORKFLOW.md)
- [PRIORITY_EVIDENCE_BACKLOG.md](PRIORITY_EVIDENCE_BACKLOG.md)
- [EVIDENCE_GAP_REGISTER.md](EVIDENCE_GAP_REGISTER.md)
- [reports/VERIFIED_CLAIMS_INDEX.md](reports/VERIFIED_CLAIMS_INDEX.md)
- [reports/UNSUPPORTED_CLAIMS_INDEX.md](reports/UNSUPPORTED_CLAIMS_INDEX.md)
- [reports/PHASE_2_READINESS_REPORT.md](reports/PHASE_2_READINESS_REPORT.md)
- [reports/USER_EVIDENCE_DEPENDENCY_REPORT.md](reports/USER_EVIDENCE_DEPENDENCY_REPORT.md)
