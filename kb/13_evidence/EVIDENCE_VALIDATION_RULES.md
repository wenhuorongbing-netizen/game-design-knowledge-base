# Evidence Validation Rules

## Required Checks

The validator must check:

- every EvidenceRef has `id`, `evidence_ref_id`, `evidence_type`, `source_basis`, `confidence`, and `evidence_scope`;
- every EvidenceRef points only to existing entities or claims;
- verified claims require at least one legal EvidenceRef;
- `metadata_only` cannot support verified claims;
- `unsupported_draft` cannot support verified claims;
- `ai_hypothesis` cannot support verified claims;
- pending, rejected, blocked, or expired sidecars cannot support verified claims;
- LegalSidecar records must include all required workflow fields;
- LegalSidecar `approval_status` must be one of the controlled values;
- LegalSidecar records must reference existing `source_document_id` and `work_id`;
- LegalSidecar records must default to `pending_review`, not full processing;
- `approved_full_processing` requires explicit reviewer and review date;
- a source cannot set `allowed_for_ai_processing: true` without a linked sidecar;
- high-risk `process_full_text` requires `approved_full_processing`, reviewer, and review date;
- UserManualQuote records must be explicitly user-provided;
- UserManualNote records must use `source_basis: user_manual_note`;
- UserManualNote records must use `confidence: user_interpretation`;
- UserManualQuote records must use `source_basis: user_manual_quote`;
- UserManualQuote records must include `quote_length_words`;
- UserManualQuote records over 80 words fail validation;
- UserManualQuote records over 40 words require review;
- UserManualQuote records must not set `automated_extraction: true`;
- UserManualQuote records must not set `generated_from_source_body: true`;
- UserManualQuote records must reference existing `work_id` and `source_document_id`;
- UserManualQuote records from high-risk sources require sidecar review before strong or verified use;
- ClaimPromotionRequest records must include target claims, EvidenceRef IDs, reviewer, rationale, and proposed confidence;
- ClaimPromotionRequest records cannot promote to `strong` or `verified` unless evidence scope alignment is explicit;
- ClaimPromotionRequest records cannot use `metadata_only`, `unsupported_draft`, or `ai_hypothesis` evidence for strong or verified promotion;
- ClaimPromotionReview records must include request ID, decision, reviewer, and decision rationale;
- ClaimPromotionReview records cannot approve above the confidence level requested;
- ProjectOverlay records must declare `entity_scope: project_overlay`;
- ProjectOverlay observations must remain project-scoped and cannot be treated as universal doctrine without promotion review;
- PlaytestLog records must declare `entity_scope: playtest_log`;
- PlaytestLog records must distinguish `observed_facts`, `participant_quotes`, `tester_interpretations`, `design_hypotheses`, `design_decisions`, and `next_actions`;
- PlaytestLog observations must remain playtest-scoped and cannot be treated as universal doctrine without additional evidence;
- sample ProjectOverlay and PlaytestLog records must remain `unsupported_draft`;
- project-specific claims must declare `entity_scope: project_overlay`;
- playtest-specific claims must declare `entity_scope: playtest_log`;
- project/playtest evidence cannot support verified general claims without promotion review and narrowed scope;
- high-risk sources cannot be used beyond allowed operations;
- source_basis and confidence values must stay inside the controlled enums.

## Legal Safety Checks

High-risk sources must remain metadata-only unless explicit legal sidecar approval changes the allowed operation for a specific user-provided file.

The default allowed operations for high-risk files remain:

- record metadata;
- attach user notes;
- attach manual quotes.

The prohibited operations remain:

- extract body text;
- generate summary;
- generate embeddings;
- create cards from body text.

## Failure Severity

| Rule Failure | Severity |
|---|---|
| verified claim without legal EvidenceRef | P0 |
| high-risk source used beyond allowed operations | P0 |
| manual quote not explicitly user-provided | P0 |
| manual quote missing work/source/length | P0 |
| manual quote too long | P0 |
| manual quote derived from automated extraction | P0 |
| manual note not marked user_interpretation | P0 |
| pending sidecar used for verified claim | P0 |
| sidecar references nonexistent source or work | P0 |
| sidecar defaults to approved_full_processing | P0 |
| source allows AI processing without sidecar | P0 |
| high-risk process_full_text without explicit sidecar approval | P0 |
| EvidenceRef broken target link | P0 |
| promotion request without reviewer or rationale | P0 |
| promotion request beyond evidence scope | P0 |
| promotion review without reviewer or rationale | P0 |
| project/playtest observation treated as universal doctrine | P0 |
| project/playtest record missing entity_scope | P0 |
| PlaytestLog missing separated observation fields | P0 |
| sample ProjectOverlay or PlaytestLog promoted above unsupported_draft | P0 |
| project/playtest evidence supports verified general claim without promotion review | P0 |
| missing optional reviewer on draft evidence | P1 |
| evidence gap without priority | P2 |
