# Meaningful Decisions / Rules / Mechanics Evidence Pilot

Date: 2026-04-27

## Scope

This limited pilot covers meaningful decisions, rules, mechanics, formal elements, skill/chance, challenge, and balance. It creates evidence slots and gap reports only. It does not promote claims.

## Source Boundary

- High-risk source body text was not parsed.
- Private PDFs or EPUBs were not opened.
- No quote was extracted.
- No concept, card, workflow, lens, or claim was upgraded.
- Existing metadata and exported KB entity metadata were used only to identify candidate entities and evidence gaps.

## Audit Query Terms

- meaningful decision
- meaningful decisions
- obvious decision
- obvious decisions
- meaningless decision
- meaningless decisions
- blind decision
- blind decisions
- tradeoff
- tradeoffs
- trade-off
- trade-offs
- dilemma
- dilemmas
- risk versus reward
- risk-vs-reward
- risk reward
- rules
- rule
- mechanics
- mechanic
- goals
- goal
- objectives
- objective
- resources
- resource
- conflict
- boundaries
- boundary
- outcomes
- outcome
- chance
- strategic skill
- twitch skill
- skill
- challenge
- balance
- formal elements
- formal element
- formal_game_design
- rules_and_mechanics
- economy_and_balance
- meaningful-decision
- meaningful-decisions
- rules-mechanics
- formal-elements
- skill-chance
- challenge-balance

## Audit Counts

- Audited entities: 239
- Evidence slots created: 6
- Verified claims created: 0
- Claims promoted: 0
- EvidenceRef records added: 0

By entity type:

- ApplicationCard: 1
- BookDossier: 12
- ChecklistCard: 3
- Claim: 53
- ConceptCard: 41
- DesignLens: 18
- Exercise: 45
- FrameworkCard: 5
- GameDesignWork: 12
- Lesson: 36
- PromptCard: 3
- WorkflowPack: 10

## Evidence Slots

| evidence_slot_id | target_entity_id | target_claim_id | required_note_type | expected_location_type | accepted_evidence_source | blocked_operations | promotion_target | reviewer_needed | current_status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| evslot_md_001_meaningful_decision_definition | concept_meaningful-decisions | claim_meaningful-decisions_tracked_as_draft_concept | concept_note | chapter, lecture, user reading note, or open source section | user_manual_note, user_manual_quote, user_legal_file with approved sidecar, open_fulltext | source body extraction, high-risk summary, metadata-only verification | weak_to_medium_candidate; verified deferred | yes | open_evidence_gap |
| evslot_md_002_tradeoff_dilemma_examples | concept_tradeoffs | claim_tradeoffs_tracked_as_draft_concept | concept_note or project_application_note | design example, classroom exercise, user project artifact, or lawful reading note | user_manual_note, project overlay observation, playtest log with local scope | automatic example extraction from high-risk books | weak_to_medium_candidate; verified deferred | yes | open_evidence_gap |
| evslot_md_003_chance_skill_balance | concept_chance | claim_chance_tracked_as_draft_concept | method_note or comparison_note | balance analysis, playtest observation, legal source note, or design audit | user_manual_note, approved project evidence, open_fulltext, official/public metadata for bibliographic routing only | treating intuition as verified balance theory | weak_to_medium_candidate; verified deferred | yes | open_evidence_gap |
| evslot_md_004_formal_elements | concept_formal-elements | claim_formal-elements_tracked_as_draft_concept | method_note | lawful reading note, public lecture note, or user-created system breakdown | user_manual_note, user_legal_file with approved sidecar, open_fulltext | chapter summary from quarantined source | weak_to_medium_candidate; verified deferred | yes | open_evidence_gap |
| evslot_md_005_project_meaningful_choice_failure | workflow_meaningful-decision-audit |  | project_application_note | ProjectOverlay, design decision log, or project audit note | derived_from_user_note or user_manual_note with project scope only | promoting one project failure into universal doctrine | application confidence only; universal verification blocked | yes | open_evidence_gap |
| evslot_md_006_playtest_fake_or_meaningful_choice | concept_meaningful-decisions | claim_meaningful-decisions_tracked_as_draft_concept | project_application_note plus PlaytestLog | playtest observation showing fake choice, blind choice, obvious choice, or meaningful choice | PlaytestLog and derived_from_user_note with local project scope | treating playtest observation as general theory without additional evidence | local project evidence only; verified deferred | yes | open_evidence_gap |

## Promotion Rule

No concept may be upgraded merely because it sounds correct. Every promotion requires an EvidenceRef, an allowed source_basis, evidence scope review, and human reviewer approval.

## Result

Pilot B is ready for human evidence intake. It remains blocked from verification until lawful user notes, short user-provided quotes, open sources, or approved sidecars are supplied.
