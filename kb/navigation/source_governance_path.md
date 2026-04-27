# Source Governance Path

Use this path when auditing sources, legal status, AI processing permission, and evidence safety.

## First Principles

- High-risk source files are metadata-only.
- `user_provided_file` does not imply legal AI processing permission.
- Do not summarize, quote, embed, or transform high-risk body text.
- Do not create verified claims from high-risk body text.
- A legal sidecar is required before a user file can be treated as legally processable.

## Start Here

1. [LEGAL_SOURCE_POLICY.md](../00_governance/LEGAL_SOURCE_POLICY.md)
2. [SOURCE_BASIS_ENUM.md](../00_governance/SOURCE_BASIS_ENUM.md)
3. [CONFIDENCE_MODEL.md](../00_governance/CONFIDENCE_MODEL.md)
4. [sources.json](../01_sources/sources.json)
5. [SOURCE_AUDIT_REPORT.md](../01_sources/SOURCE_AUDIT_REPORT.md)
6. [high_risk_quarantine.md](../01_sources/high_risk_quarantine.md)
7. [source_sidecar_template.yaml](../01_sources/source_sidecar_template.yaml)

## Evidence Governance Links

- [Evidence Dashboard](../13_evidence/EVIDENCE_DASHBOARD.md)
- [Evidence Status Index](../13_evidence/EVIDENCE_STATUS_INDEX.md)
- [Evidence Intake Plan](../13_evidence/EVIDENCE_INTAKE_PLAN.md)
- [Legal Sidecar Workflow](../13_evidence/sidecars/SIDECAR_REVIEW_GUIDE.md)
- [User Manual Note Template](../13_evidence/manual_notes/user_manual_note_template.md)
- [User Manual Quote Template](../13_evidence/manual_quotes/user_manual_quote_template.md)
- [Claim Promotion Workflow](../13_evidence/CLAIM_PROMOTION_WORKFLOW.md)
- [Priority Evidence Backlog](../13_evidence/PRIORITY_EVIDENCE_BACKLOG.md)
- [Evidence Gap Register](../13_evidence/EVIDENCE_GAP_REGISTER.md)
- [Verified Claims Index](../13_evidence/reports/VERIFIED_CLAIMS_INDEX.md)
- [Unsupported Claims Index](../13_evidence/reports/UNSUPPORTED_CLAIMS_INDEX.md)
- [Game Feel Evidence Pilot](../13_evidence/reports/GAME_FEEL_EVIDENCE_PILOT.md)
- [Meaningful Decisions Evidence Pilot](../13_evidence/reports/MEANINGFUL_DECISIONS_EVIDENCE_PILOT.md)
- [Systems Economy Playtest Evidence Pilot](../13_evidence/reports/SYSTEMS_ECONOMY_PLAYTEST_EVIDENCE_PILOT.md)

## Source Intake Decision Tree

| Question | Action |
|---|---|
| Does the filename or metadata include z-library, z-lib, 1lib, Anna's Archive, it-ebooks, mirror, suspicious scan, or unknown scanned copy? | Mark high risk and metadata-only quarantine. |
| Does the user provide a legal sidecar with AI-processing permission? | Record sidecar and allow only the operations stated by policy. |
| Is the source open full text or official metadata? | Use the allowed source basis and keep citation/evidence refs explicit. |
| Is the source a user note? | Use `user_manual_note` or `derived_from_user_note`, not book-body ingestion. |
| Is there no evidence? | Keep the entity as `unsupported_draft` or `metadata_only`. |

## Audits To Run

```powershell
npm run kb:audit
npm run kb:validate
```

Review:

- [SOURCE_GOVERNANCE_AUDIT.md](../../SOURCE_GOVERNANCE_AUDIT.md)
- [LEGAL_AUDIT_REPORT.md](../12_quality/LEGAL_AUDIT_REPORT.md)
- [HALLUCINATION_AUDIT.md](../12_quality/HALLUCINATION_AUDIT.md)
- [VALIDATION_REPORT.md](../../VALIDATION_REPORT.md)

## Safe AI Retrieval Rule

When using this KB with an AI assistant, always include:

- `source_basis`
- `confidence`
- `status`
- `evidence_refs`
- `body_excerpt_safe`

If `source_basis` is `metadata_only` or status is quarantined, the AI may use the record only as metadata/routing context.

## TODO

- Add approved legal sidecar examples after the user provides one.
- Add a verified-source checklist after at least one source is legally approved for deeper processing.
