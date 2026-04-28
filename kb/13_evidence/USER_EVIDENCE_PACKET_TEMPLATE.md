# User Evidence Packet Template

Status: template only. Do not import this file as evidence.

Copy these fields into a new packet record under `kb/13_evidence/batches/` only after the user supplies real evidence records. Do not submit placeholders as accepted evidence.

## Packet Metadata

packet_id: replace_with_packet_id

id: replace_with_packet_id

entity_type: EvidenceIntakeBatch

evidence_intake_batch_id: replace_with_packet_id

title: First user evidence packet

submitted_by: replace_with_user_name_or_handle

submission_date: YYYY-MM-DD

intended_scope: first_phase_2_evidence_packet

source_basis: unsupported_draft

confidence: unsupported_draft

status: draft

intake_status: not_submitted

reviewer: replace_with_reviewer_or_empty_until_review

created_at: YYYY-MM-DD

updated_at: YYYY-MM-DD

version: 0.1.0

## Referenced Sources And Works

source_documents_referenced: []

works_referenced: []

## Included Evidence Records

legal_sidecars_included: []

manual_notes_included: []

manual_quotes_included: []

project_overlays_included: []

playtest_logs_included: []

batch_items: []

## Required User Confirmations

user_confirms_notes_are_user_authored: false

user_confirms_quotes_are_user_provided: false

user_confirms_no_copied_chapter_text: false

user_confirms_no_long_quotations: false

user_confirms_no_ai_generated_summaries_from_private_source_bodies: false

user_confirms_high_risk_files_remain_metadata_only_unless_sidecar_permits_otherwise: false

## Optional Review Fields

review_notes: ""

blocked_reason: ""

accepted_scope: ""

next_validation_command: npm run kb:validate

## Required First Packet Shape

- Include no more than one LegalSidecar.
- Include three to five UserManualNote records.
- Include zero or one UserManualQuote record.
- Include zero or one ProjectOverlay record.
- Include zero or one PlaytestLog record.
- Do not include ClaimPromotionRequest records in the first packet.
- Do not include ClaimPromotionReview records in the first packet.
- Do not include source body text.
- Do not include copied chapter text.
