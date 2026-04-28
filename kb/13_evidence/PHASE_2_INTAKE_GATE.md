# Evidence Phase 2 Intake Gate

Status: gate ready, no user evidence ingested.

## Purpose

This gate controls the first real evidence packet for the Game Design Knowledgebase. It exists so the user can provide lawful evidence without allowing the agent to read high-risk source bodies or invent evidence.

## Allowed First Packet Contents

| Evidence Item | Maximum For First Packet | Required Human Source |
|---|---:|---|
| LegalSidecar | 1 | user-provided legal/access confirmation |
| UserManualNote | 3 to 5 | user-authored notes |
| UserManualQuote | 0 to 1 | user-provided lawful short quote |
| ProjectOverlay | 1 | real project context from user |
| PlaytestLog | 1 | real playtest observation from user |

## Intake Status Values

- `not_submitted`
- `received`
- `blocked_missing_user_confirmation`
- `blocked_source_governance`
- `accepted_for_validation`
- `accepted_partial`
- `rejected`

## Gate Rules

- Do not parse source files.
- Do not summarize private or high-risk books.
- Do not extract quotes from source files.
- Do not create sidecars on behalf of the user.
- Do not invent user notes.
- Do not invent manual quotes.
- Do not promote claims during packet intake.
- Do not mark any claim verified during this phase.
- High-risk files remain metadata-only unless an approved sidecar explicitly permits a narrower operation.

## Accepted Packet Requirements

An evidence packet can be marked `accepted_for_validation` or `accepted_partial` only when:

- the user confirms notes are user-authored;
- the user confirms quotes are user-provided;
- the user confirms no copied chapter text is included;
- the user confirms no long quotations are included;
- the user confirms no AI-generated summaries from private source bodies are included;
- the user confirms high-risk files remain metadata-only unless a sidecar permits otherwise;
- referenced source IDs exist;
- referenced work IDs exist;
- sidecars, notes, quotes, overlays, and playtest logs referenced by the packet exist;
- ProjectOverlay records are scoped to `project_overlay`;
- PlaytestLog records are scoped to `playtest_log`;
- validation passes.

## Workflow

1. User prepares a packet using `USER_EVIDENCE_PACKET_TEMPLATE.md`.
2. Maintainer checks the packet with `USER_EVIDENCE_PACKET_CHECKLIST.md`.
3. Maintainer copies validated packet metadata into `kb/13_evidence/batches/` only after the user has supplied real evidence records.
4. Run `npm run kb:export`.
5. Run `npm run kb:validate`.
6. Run `npm run kb:audit`.
7. If validation fails, set packet status to `blocked_missing_user_confirmation`, `blocked_source_governance`, or `rejected`.
8. If validation passes, keep the packet accepted for validation only; claim promotion is a separate review step.

## Current Gate State

- Evidence packet records: 0.
- Approved legal sidecars: 0.
- User manual notes: 0.
- User manual quotes: 0.
- Real ProjectOverlay records: 0.
- Real PlaytestLog records: 0.
- Verified claims: 0.

Phase 2 may begin only when the user supplies the first packet.
