# User Evidence Packet Checklist

Use this checklist before any packet is marked `accepted_for_validation` or `accepted_partial`.

## Identity

| Check | Required Result |
|---|---|
| packet_id exists | yes |
| submitted_by exists | yes |
| submission_date exists | yes |
| intended_scope exists | yes |
| reviewer exists before acceptance | yes |
| intake_status uses controlled enum | yes |

## User Confirmations

| Confirmation | Required Before Acceptance |
|---|---|
| notes are user-authored | true |
| quotes are user-provided | true |
| no copied chapter text | true |
| no long quotations | true |
| no AI-generated summaries from private source bodies | true |
| high-risk files remain metadata-only unless sidecar permits otherwise | true |

## Source Governance

| Check | Required Result |
|---|---|
| source_documents_referenced resolve to SourceDocument records | yes |
| works_referenced resolve to GameDesignWork records | yes |
| high-risk sources remain metadata-only | yes |
| sidecar does not default to full processing | yes |
| sidecar references existing source_document_id and work_id | yes |
| source body text is absent | yes |

## Evidence Record Checks

| Evidence Type | Required Result |
|---|---|
| LegalSidecar | max 1 in first packet; not auto-approved |
| UserManualNote | 3 to 5 in first packet; explicitly user-authored |
| UserManualQuote | max 1 in first packet; explicitly user-provided and under length threshold |
| ProjectOverlay | max 1 in first packet; entity_scope is project_overlay |
| PlaytestLog | max 1 in first packet; entity_scope is playtest_log |

## Blocking Conditions

Set `intake_status: blocked_missing_user_confirmation` if any required user confirmation is false or missing.

Set `intake_status: blocked_source_governance` if any source, sidecar, note, quote, overlay, or playtest record violates source-governance rules.

Set `intake_status: rejected` if the packet includes copied source body text, generated summaries from private source bodies, automated quote extraction, or any instruction to promote claims without review.

## Validation Commands

- `npm run kb:export`
- `npm run kb:validate`
- `npm run kb:audit`

## Acceptance Output

If the packet passes, record:

- accepted packet ID;
- accepted item IDs;
- blocked item IDs, if any;
- reviewer;
- validation command output;
- next action.
