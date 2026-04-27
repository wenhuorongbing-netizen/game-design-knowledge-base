# Meaningful Decisions Promotion Backlog

Date: 2026-04-27

This is a backlog, not a ClaimPromotionRequest entity. It creates no promotion and no verified claim.

## Required Evidence Slots

| backlog_id | target_entity_id | target_claim_id | requested_evidence | current_status | allowed_next_step | not_allowed |
| --- | --- | --- | --- | --- | --- | --- |
| promo_backlog_md_001_meaningful_decision_definition | concept_meaningful-decisions | claim_meaningful-decisions_tracked_as_draft_concept | concept_note | blocked_until_evidence_ref_and_reviewer | User supplies legal manual note or project/playtest observation; maintainer creates EvidenceRef after review. | source body extraction, high-risk summary, metadata-only verification |
| promo_backlog_md_002_tradeoff_dilemma_examples | concept_tradeoffs | claim_tradeoffs_tracked_as_draft_concept | concept_note or project_application_note | blocked_until_evidence_ref_and_reviewer | User supplies legal manual note or project/playtest observation; maintainer creates EvidenceRef after review. | automatic example extraction from high-risk books |
| promo_backlog_md_003_chance_skill_balance | concept_chance | claim_chance_tracked_as_draft_concept | method_note or comparison_note | blocked_until_evidence_ref_and_reviewer | User supplies legal manual note or project/playtest observation; maintainer creates EvidenceRef after review. | treating intuition as verified balance theory |
| promo_backlog_md_004_formal_elements | concept_formal-elements | claim_formal-elements_tracked_as_draft_concept | method_note | blocked_until_evidence_ref_and_reviewer | User supplies legal manual note or project/playtest observation; maintainer creates EvidenceRef after review. | chapter summary from quarantined source |
| promo_backlog_md_005_project_meaningful_choice_failure | workflow_meaningful-decision-audit | none | project_application_note | blocked_until_evidence_ref_and_reviewer | User supplies legal manual note or project/playtest observation; maintainer creates EvidenceRef after review. | promoting one project failure into universal doctrine |
| promo_backlog_md_006_playtest_fake_or_meaningful_choice | concept_meaningful-decisions | claim_meaningful-decisions_tracked_as_draft_concept | project_application_note plus PlaytestLog | blocked_until_evidence_ref_and_reviewer | User supplies legal manual note or project/playtest observation; maintainer creates EvidenceRef after review. | treating playtest observation as general theory without additional evidence |

## Blocked Until

- A human user supplies lawful manual notes or project/playtest evidence.
- A maintainer creates EvidenceRef records.
- A reviewer confirms legal source basis, scope, and wording.
- Validator passes with no high-risk source misuse.
