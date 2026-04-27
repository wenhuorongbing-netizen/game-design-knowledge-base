# Evidence Intake Plan

## Purpose

Evidence intake is the controlled process for turning draft KB scaffolds into source-backed knowledge without violating source governance.

The process separates source access, user notes, evidence references, promotion requests, and reviewer decisions.

## Intake Stages

1. Register source metadata without reading protected body text.
2. Attach a LegalSidecar only when the user explicitly confirms legal access and AI-processing permission.
3. Keep the LegalSidecar at `approval_status: pending_review` until a human review is complete.
4. Link sidecars from SourceDocument records using `legal_sidecar_ids`.
5. Add UserManualNote or UserManualQuote records only when the user supplies them directly.
6. Add OpenSourceReference or OfficialMetadataReference records for lawful public metadata or open full text.
7. Create EvidenceRef records that point from allowed evidence to specific entities or claims.
8. Create ClaimPromotionRequest records when evidence may justify stronger confidence.
9. Review promotion requests with ClaimPromotionReview.
10. Update cards, dossiers, or claims only after review accepts the request.
11. Re-run export, validation, and audit.

## LegalSidecar Workflow

LegalSidecar records are created from `kb/13_evidence/sidecars/source_sidecar_template.yaml`.

Required LegalSidecar fields:

- `sidecar_id`
- `source_document_id`
- `work_id`
- `user_confirms_legal_access`
- `access_basis`
- `allowed_for_ai_processing`
- `allowed_operations`
- `prohibited_operations`
- `high_risk_marker_review`
- `private_or_public`
- `citation_preference`
- `user_supplied_notes_path`
- `user_supplied_quotes_path`
- `reviewer`
- `approval_status`
- `review_date`
- `expiration_date`
- `notes`

Allowed `access_basis` values:

- `owned_physical_copy`
- `purchased_ebook`
- `library_access`
- `official_open_access`
- `publisher_permission`
- `author_permission`
- `public_domain`
- `other`

Allowed `approval_status` values:

- `pending_review`
- `approved_metadata_only`
- `approved_user_notes_only`
- `approved_full_processing`
- `rejected`
- `expired`

Default approval status is always `pending_review`. No sidecar may default to `approved_full_processing`.

## Source Basis Boundary

Allowed evidence bases:

- `open_fulltext`
- `official_metadata`
- `user_legal_file`
- `user_manual_note`
- `user_manual_quote`
- `derived_from_user_note`
- `derived_from_public_metadata`

Not enough for verified claims:

- `metadata_only`
- `unsupported_draft`
- `ai_hypothesis`

## What This Phase Does Not Do

- It does not parse high-risk source body text.
- It does not summarize copyrighted books.
- It does not extract quotes from high-risk files.
- It does not generate embeddings.
- It does not promote claims.
- It does not add new game design content.

## UserManualNote Workflow

UserManualNote records are created from `kb/13_evidence/manual_notes/user_manual_note_template.md`.

Required fields:

- `note_id`
- `work_id`
- `source_document_id`, optional
- `sidecar_id`, optional
- `title`
- `note_type`
- `location`
- `user_summary`
- `user_interpretation`
- `user_questions`
- `related_concepts`
- `related_cards`
- `related_lenses`
- `related_workflows`
- `evidence_refs`
- `source_basis`
- `confidence`
- `status`
- `created_at`
- `updated_at`

Allowed `note_type` values:

- `chapter_note`
- `concept_note`
- `reading_reflection`
- `method_note`
- `comparison_note`
- `project_application_note`

Allowed `status` values:

- `draft`
- `review_needed`
- `accepted_user_note`
- `rejected`

Manual notes must use `source_basis: user_manual_note` and `confidence: user_interpretation`.

## UserManualQuote Workflow

UserManualQuote records are created from `kb/13_evidence/manual_quotes/user_manual_quote_template.md`.

Required fields:

- `quote_id`
- `work_id`
- `source_document_id`
- `sidecar_id`, optional
- `quote_text`
- `quote_length_words`
- `location`
- `user_commentary`
- `why_it_matters`
- `related_concepts`
- `related_cards`
- `source_basis`
- `confidence`
- `status`
- `created_at`
- `updated_at`

Allowed quote status values:

- `draft`
- `accepted_user_quote`
- `needs_review`
- `rejected`

Quote safety rules:

- Do not create quotes automatically.
- Quotes must be user-provided.
- Do not allow long quotes.
- Manual quotes must never be derived from automated extraction.
- Quotes from high-risk sources require sidecar review before strong or verified use.
- Manual quotes appear in search only when safe, user-provided, accepted, and below the configured threshold.

## Acceptance Gate For Future Evidence

A future evidence batch is admissible only when:

- every evidence object has `source_basis` and `confidence`;
- every quote is user-provided or legally allowed;
- every sidecar is explicit about AI-processing permission;
- every sidecar references an existing SourceDocument and GameDesignWork;
- every full-processing sidecar has explicit reviewer and review date;
- every manual note uses `source_basis: user_manual_note` and `confidence: user_interpretation`;
- every manual quote uses `source_basis: user_manual_quote`;
- every manual quote is explicitly user-provided and below the length threshold;
- every EvidenceRef points to existing entities or claims;
- every verified claim has at least one legal EvidenceRef;
- every ClaimPromotionRequest names target claims, EvidenceRef IDs, reviewer, rationale, proposed confidence, and evidence-scope alignment;
- every ClaimPromotionReview names request ID, decision, reviewer, decision rationale, approved confidence if any, and limitations;
- project overlays and playtest logs remain local evidence until a claim promotion review explicitly generalizes a claim;
- validation and audit pass.

## Claim Promotion Gate

Claim promotion is handled through `kb/13_evidence/CLAIM_PROMOTION_WORKFLOW.md`.

Promotion levels are:

- `unsupported_draft`
- `ai_hypothesis`
- `user_interpretation`
- `weak`
- `medium`
- `strong`
- `verified`

Verified promotion requires legal EvidenceRef records, human review, and exact evidence-scope alignment. This phase creates the gate only; it does not promote any current claim.
