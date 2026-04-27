# Sidecar Status Index

Generated manually for now; `npm run kb:audit` creates the audit report at `kb/13_evidence/reports/SIDECAR_AUDIT_REPORT.md`.

## Current Status

| Category | Count | Notes |
|---|---:|---|
| LegalSidecar records | 0 | No real sidecars have been added. |
| Pending review | 0 | Template is ignored as an entity. |
| Approved metadata only | 0 | No sources upgraded. |
| Approved user notes only | 0 | No sources upgraded. |
| Approved full processing | 0 | No sources upgraded. |
| Rejected | 0 | None. |
| Expired | 0 | None. |

## Source Upgrade Status

No existing source has been upgraded automatically. High-risk sources remain `metadata_only_quarantined`.

## Maintenance Rule

After adding a real sidecar, run:

- `npm run kb:export`
- `npm run kb:validate`
- `npm run kb:audit`

Then check `kb/13_evidence/reports/SIDECAR_AUDIT_REPORT.md`.
