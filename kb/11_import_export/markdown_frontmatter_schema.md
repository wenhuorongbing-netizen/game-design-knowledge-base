
# Markdown Frontmatter Schema

## Purpose

Markdown remains the canonical authoring format for human-readable KB objects. YAML frontmatter is the machine contract that lets GDKB import, validate, link, search, and graph the knowledge base.

This standard applies to entity Markdown files, not general index files. Templates may show placeholder values, but concrete entity files must use stable IDs.

## Universal Fields

Every Markdown entity must include:

| Field | Type | Required | Meaning |
|---|---|---:|---|
| `id` | string | yes | Universal stable ID. Existing files may use entity-specific IDs during migration, but Prompt 9 exports normalize them into `id`. |
| `entity_type` | enum | yes | Entity type such as `ConceptCard`, `DesignLens`, `Lesson`, or `WorkflowPack`. |
| `title` | string | yes | Human-readable title. |
| `status` | string | yes | Draft, needs_evidence, metadata_shell, verified, retired, quarantined, or another controlled workflow state. |
| `source_basis` | enum | yes | Legal/provenance basis from `SOURCE_BASIS_ENUM.md`. |
| `confidence` | enum | yes | Confidence from `CONFIDENCE_MODEL.md`. |
| `phase_groups` | string[] | yes | One or more of the eight production phase groups, unless the entity is only a raw SourceDocument. |
| `domains` | string[] | yes | Cross-domain routing IDs. |
| `tags` | string[] | yes | Controlled tags plus optional local tags. Empty array is allowed only for intake objects. |
| `related_entities` | string[] | yes | Explicit cross-links to other KB entity IDs. |
| `evidence_refs` | string[] | yes | Evidence IDs or source refs. Empty array is allowed only for draft/metadata objects. |
| `created_at` | date string | yes | Creation date. |
| `updated_at` | date string | yes | Last update date. |
| `version` | string | yes | Semantic or local version, for example `0.1.0`. |

## Source Basis And Confidence Enums

`source_basis` must be one of:

- `open_fulltext`
- `official_metadata`
- `user_legal_file`
- `user_manual_note`
- `user_manual_quote`
- `derived_from_user_note`
- `derived_from_public_metadata`
- `metadata_only`
- `unsupported_draft`

`confidence` must be one of:

- `verified`
- `strong`
- `medium`
- `weak`
- `unsupported_draft`
- `user_interpretation`
- `ai_hypothesis`

## Entity-Specific Required Fields

### SourceDocument

- `source_document_id`
- `original_filename`
- `normalized_title`
- `risk_level`
- `ingestion_status`
- `legal_sidecar_ids`
- `sidecar_review_status`
- `allowed_for_ai_processing`
- `allowed_operations`
- `prohibited_operations`

### GameDesignWork

- `work_id`
- `author_names`
- `work_type`
- `main_domain`
- `secondary_domains`
- `phase_groups`
- `canonical_status`
- `source_documents`
- `legal_status_summary`
- `ingestion_status`

### BookDossier

- `dossier_id`
- `work_id`
- `legal_status`
- `ingestion_status`
- `dossier_status`
- `user_notes_available`

### ChapterNode

- `chapter_node_id`
- `work_id`
- `dossier_id`
- `chapter_title`
- `chapter_order`
- `chapter_status`

### ConceptCard

- `card_id`
- `card_type: concept_card`
- `aliases`
- `one_sentence_summary`
- `related_works`
- `related_lenses`
- `when_to_use`
- `output_artifacts`

### FrameworkCard

- `card_id`
- `card_type: framework_card`
- `required_inputs`
- `output_artifacts`
- `related_works`
- `related_lenses`

### QuoteCard

- `card_id`
- `card_type: quote_card`
- `quote_source_id`
- `locator`
- `quote_length_words`
- `usage_limits`

Quote cards are allowed only for `user_manual_quote`, `open_fulltext`, or `user_legal_file`.

### ComparisonCard

- `card_id`
- `card_type: comparison_card`
- `compared_entities`
- `comparison_basis`
- `evidence_refs`

### ApplicationCard

- `card_id`
- `card_type: application_card`
- `project_context_required`
- `when_to_use`
- `output_artifacts`

### ChecklistCard

- `card_id`
- `card_type: checklist_card`
- `checklist_items_count`
- `quality_gate`
- `output_artifacts`

### PromptCard

- `card_id`
- `card_type: prompt_card`
- `AI_prompt_hooks`
- `guardrails`
- `expected_output_format`

### DesignLens

- `lens_id`
- `diagnostic_questions_count`
- `target_artifact_type`
- `related_cards`
- `review_output_format`

### Lesson

- `lesson_id`
- `level`
- `learning_objectives`
- `related_cards`
- `related_lenses`
- `practical_exercise`
- `design_deliverable`

### Exercise

- `exercise_id`
- `difficulty`
- `estimated_time`
- `solo_or_group`
- `expected_output`
- `evaluation_rubric`
- `related_lesson`

### WorkflowPack

- `workflow_id`
- `required_inputs`
- `output_artifacts`
- `estimated_time`
- `quality_gate`
- `AI_prompt_templates`

### PromptTemplate

- `prompt_id`
- `use_case`
- `required_context`
- `user_inputs`
- `guardrails`
- `prompt_text`
- `expected_output_format`

### ProjectOverlay

- `project_overlay_id`
- `project_id`
- `linked_workflows`
- `design_decisions`
- `playtest_logs`
- `general_kb_entities_applied`

### EvidenceRef

- `evidence_ref_id`
- `evidence_type`
- `evidence_scope`
- `source_basis`
- `confidence`
- `supports_entity_ids`
- `supports_claim_ids`
- `limitations`
- `reviewer`

`metadata_only`, `unsupported_draft`, and `ai_hypothesis` cannot support verified claims.

### LegalSidecar

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
- `approval_status`
- `reviewer`
- `review_date`
- `expiration_date`
- `notes`

Pending sidecars cannot promote or verify claims.

### UserManualNote

- `note_id`
- `work_id`
- `source_document_id`
- `sidecar_id`
- `note_type`
- `location`
- `user_summary`
- `user_interpretation`
- `user_questions`
- `related_concepts`
- `related_cards`
- `related_lenses`
- `related_workflows`

Manual notes must use `source_basis: user_manual_note` and `confidence: user_interpretation`.

### UserManualQuote

- `quote_id`
- `work_id`
- `source_document_id`
- `sidecar_id`
- `quote_text`
- `quote_length_words`
- `location`
- `user_commentary`
- `why_it_matters`
- `related_concepts`
- `related_cards`
- `user_provided`
- `automated_extraction`
- `generated_from_source_body`

Manual quotes must use `source_basis: user_manual_quote`, must be explicitly user-provided, and must not exceed 80 words.

Manual quotes must be explicitly user-provided and should remain short.

### ClaimPromotionRequest

- `claim_promotion_request_id`
- `target_claim_ids`
- `evidence_ref_ids`
- `proposed_confidence`
- `requested_by`
- `reviewer`
- `rationale`
- `evidence_scope_alignment`
- `within_evidence_scope`
- `evidence_gap_ids`

### ClaimPromotionReview

- `claim_promotion_review_id`
- `request_id`
- `decision`
- `reviewer`
- `decision_rationale`
- `evidence_ref_ids`
- `approved_confidence`
- `limitations`

### ForumThreadTemplate

- `forum_thread_template_id`
- `thread_type`
- `opening_prompt`
- `required_context`
- `quality_rules`
- `expected_replies`

## Migration Rule

Earlier Prompt 5 to Prompt 8 files often use entity-specific IDs such as `card_id`, `lens_id`, or `workflow_id` instead of universal `id`. The Prompt 9 importer normalizes those fields into `id` without rewriting the authored files. Future hand-authored entities should include both `id` and the entity-specific ID until migration is complete.
