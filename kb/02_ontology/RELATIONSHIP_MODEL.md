# Relationship Model

## Purpose

Relationships define how the KB becomes a knowledge graph.

Edges must preserve direction, meaning, source basis, and evidence requirements. An edge must not silently promote a weak source into a verified claim.

## Edge Metadata

Every relationship edge should support:

| Field | Required | Meaning |
|---|---:|---|
| `edge_id` | yes | Stable edge ID. |
| `relationship_type` | yes | Controlled relation type. |
| `source_entity_id` | yes | Origin node. |
| `target_entity_id` | yes | Target node. |
| `evidence_required` | yes | Whether supporting evidence is mandatory. |
| `evidence_ids` | conditional | Required when the relationship asserts knowledge beyond containment or routing. |
| `source_basis` | conditional | Required for knowledge-bearing edges. |
| `confidence` | conditional | Required for knowledge-bearing edges. |
| `created_at` | yes | Creation date. |

## Relationship Types

| Relation | Source Entity Types | Target Entity Types | Direction | Meaning | Example | Evidence Required |
|---|---|---|---|---|---|---|
| `cites` | BookDossier, Claim, KnowledgeCard, Framework, DesignLens, WorkflowPack, ForumThread | SourceDocument, GameDesignWork, Evidence, Quote | source -> target | The source entity references a source, work, evidence item, or quote. | A dossier cites `game-feel-a-game-designers-guide-to-virtual-sensation`. | yes |
| `derived_from` | Concept, Claim, Framework, DesignLens, KnowledgeCard, WorkflowPack, PromptTemplate, ProjectOverlay | SourceDocument, GameDesignWork, UserNote, Evidence, Claim, BookDossier | derived object -> basis object | The source entity was created from the target entity. | A checklist card is derived from a user reading note. | yes |
| `supports` | Evidence, Quote, UserNote, PlaytestLog, Claim | Claim, Framework, DesignLens, KnowledgeCard, DesignDecision | evidence -> claim-like object | The source entity supports the target. | A playtest log supports a claim that tutorial step 2 is unclear. | yes |
| `supported_by` | Claim, KnowledgeCard, DesignLens, WorkflowPack, ClaimPromotionRequest | EvidenceRef, UserManualNote, UserManualQuote, OpenSourceReference, OfficialMetadataReference | claim-like object -> evidence | The source entity is supported by the target evidence record. | A draft claim is supported_by a reviewed EvidenceRef. | yes |
| `challenges` | Claim, Evidence, PlaytestLog, Comment, ForumThread | Claim, Framework, DesignLens, DesignDecision | challenger -> challenged | The source entity raises doubt or counterpressure without fully disproving. | A playtest log challenges a difficulty assumption. | yes |
| `challenged_by` | Claim, KnowledgeCard, DesignDecision | EvidenceRef, PlaytestLog, UserManualNote, EvidenceGap | claim-like object -> challenging evidence | The source entity is challenged by the target evidence or evidence gap. | A balance claim is challenged_by a playtest observation. | yes |
| `contradicts` | Claim, Evidence, PlaytestLog, UserNote | Claim, Framework, DesignDecision | contradicting object -> contradicted object | The source entity directly conflicts with the target. | A later playtest contradicts an earlier player comprehension claim. | yes |
| `evidence_for` | EvidenceRef, UserManualNote, UserManualQuote, OpenSourceReference, OfficialMetadataReference | Claim, KnowledgeCard, DesignLens, WorkflowPack, DesignDecision | evidence -> supported object | The source evidence record is evidence for the target entity or claim. | An EvidenceRef is evidence_for a claim promotion target. | yes |
| `evidence_against` | EvidenceRef, UserManualNote, UserManualQuote, PlaytestLog | Claim, KnowledgeCard, DesignDecision | evidence -> challenged object | The source evidence record is evidence against the target entity or claim. | A playtest EvidenceRef is evidence_against an onboarding assumption. | yes |
| `extends` | Concept, Framework, KnowledgeCard, WorkflowPack, PromptTemplate | Concept, Framework, KnowledgeCard, WorkflowPack, PromptTemplate | extension -> base | The source entity adds new scope while preserving the base. | A project-specific prompt extends a general critique prompt. | yes |
| `refines` | Claim, Concept, KnowledgeCard, DesignLens, WorkflowPack, DesignDecision | Claim, Concept, KnowledgeCard, DesignLens, WorkflowPack, DesignDecision | refined object -> earlier object | The source entity narrows, clarifies, or improves the target. | A revised core loop card refines an earlier draft. | yes |
| `applies_to` | Concept, Claim, Framework, DesignLens, KnowledgeCard, WorkflowPack, PromptTemplate | Project, ProjectOverlay, DesignDecision, PhaseGroup, Domain | general object -> application target | The source entity is usable in the target context. | A playtest workflow applies to a prototype project. | no for routing, yes for project claim |
| `used_in_phase` | GameDesignWork, Concept, Framework, KnowledgeCard, DesignLens, WorkflowPack, PromptTemplate | PhaseGroup | object -> phase | The object is routed to a production phase. | `game_feel` cards are used in 美术 / UI / 体验表达. | no |
| `produces_deliverable` | WorkflowPack, Exercise, PromptTemplate | KnowledgeCard, BookDossier, ProjectOverlay, DesignDecision, PlaytestLog, artifact tag | process -> output | The source entity produces the target output. | A playtest workflow produces a PlaytestLog. | no |
| `requires_input` | WorkflowPack, PromptTemplate, Exercise | SourceDocument, UserNote, Project, ProjectOverlay, KnowledgeCard, artifact tag | process -> required input | The source entity requires the target before execution. | A dossier workflow requires legal source status. | no |
| `has_output` | WorkflowPack, PromptRun, Exercise | KnowledgeCard, BookDossier, Claim, PlaytestLog, ProjectOverlay, DesignDecision | producer -> output | The source entity generated or contains the target result. | A PromptRun has output `card_core_loop_spec`. | yes for knowledge output |
| `has_prerequisite` | Lesson, Exercise, WorkflowPack, KnowledgeCard | Concept, Framework, Lesson, Exercise, KnowledgeCard | dependent -> prerequisite | The target should be understood or completed first. | Economy balance lesson has prerequisite core loop concept. | no |
| `improves` | DesignDecision, ProjectOverlay, WorkflowPack, KnowledgeCard, PlaytestLog | Project, System, Concept, Claim, WorkflowPack | improving object -> improved target | The source entity improves target quality, workflow, or design state. | A UI audit improves HUD readability. | yes for quality claim |
| `tests` | PlaytestLog, Exercise, PromptTemplate, WorkflowPack | Claim, Concept, Mechanic, ProjectOverlay, DesignDecision | test object -> target | The source entity is designed to test the target. | A playtest tests whether players understand a resource loop. | yes |
| `validates` | PlaytestLog, Evidence, UserNote | Claim, DesignDecision, ProjectOverlay, Framework | validating evidence -> target | The source entity confirms the target within stated limits. | A playtest validates that players noticed danger feedback. | yes |
| `invalidates` | PlaytestLog, Evidence, UserNote | Claim, DesignDecision, ProjectOverlay, Framework | invalidating evidence -> target | The source entity falsifies or rejects the target within stated limits. | A playtest invalidates an onboarding assumption. | yes |
| `belongs_to_work` | SourceDocument, BookDossier, ChapterNode, Claim, Quote, UserNote | GameDesignWork | object -> work | The source entity is associated with an intellectual work. | A dossier belongs to `the-art-of-game-design-a-book-of-lenses`. | no for metadata, yes for claim |
| `belongs_to_domain` | GameDesignWork, Concept, Claim, Framework, KnowledgeCard, DesignLens, WorkflowPack, PromptTemplate | Domain | object -> domain | The source entity is routed to a domain. | `game-feel` belongs to `game_feel`. | no |
| `belongs_to_phase` | GameDesignWork, Concept, Claim, Framework, KnowledgeCard, DesignLens, WorkflowPack, PromptTemplate, ProjectOverlay | PhaseGroup | object -> phase | The source entity is routed to a production phase. | A release checklist belongs to 运营与发布. | no |
| `related_to` | any | any | bidirectional semantic edge | The entities are associated but the relationship is not stronger than association. | UI feedback is related to game feel. | no |
| `compared_with` | GameDesignWork, Framework, Concept, Claim, KnowledgeCard, ProjectOverlay | GameDesignWork, Framework, Concept, Claim, KnowledgeCard, ProjectOverlay | symmetric comparison | The entities are compared in a card, dossier, or forum thread. | MDA compared with a project-specific experience model. | yes |
| `promoted_from` | ClaimPromotionRequest, ClaimPromotionReview | Claim | promotion artifact -> original claim | The promotion artifact proposes or records movement from the target claim's current confidence state. | A promotion request is promoted_from a weak draft claim. | yes |
| `reviewed_by` | ClaimPromotionRequest | ClaimPromotionReview | request -> review | The source promotion request was reviewed by the target review record. | A promotion request is reviewed_by a human review. | yes |
| `blocked_by_evidence_gap` | Claim, ClaimPromotionRequest, KnowledgeCard | EvidenceGap | blocked object -> gap | The source entity cannot be promoted or used confidently until the target evidence gap is resolved. | A promotion request is blocked_by_evidence_gap when no legal evidence exists. | no |
| `applies_in_project` | Claim, KnowledgeCard, DesignLens, WorkflowPack, PromptTemplate | ProjectOverlay, DesignDecision | general knowledge -> project application | The source general KB entity is applied in a specific project context. | A core loop lens applies_in_project a design audit overlay. | yes |
| `observed_in_playtest` | Claim, KnowledgeCard, DesignDecision, ProjectOverlay | PlaytestLog | claim or project object -> playtest log | The source entity was observed or tested in the target playtest log, within local playtest limits. | A tutorial clarity claim is observed_in_playtest a first-session playtest log. | yes |
| `part_of` | ChapterNode, Concept, KnowledgeCard, Exercise, WorkflowPack, Comment | BookDossier, Framework, Lesson, WorkflowPack, ForumThread | part -> whole | The source entity is a component of the target. | A comment is part of a forum thread. | no |
| `contains` | BookDossier, Framework, Lesson, WorkflowPack, ForumThread, ProjectOverlay | ChapterNode, Concept, KnowledgeCard, Exercise, PromptTemplate, Comment, DesignDecision | whole -> part | The source entity contains the target. | A workflow contains three prompt templates. | no |
| `version_of` | BookDossier, KnowledgeCard, DesignLens, WorkflowPack, PromptTemplate, ProjectOverlay | same type | version -> canonical object | The source entity is a version of the target. | A project-specific workflow is a version of a general workflow. | no |
| `supersedes` | Claim, KnowledgeCard, DesignLens, WorkflowPack, PromptTemplate, DesignDecision | same or compatible type | newer -> older | The source entity replaces the target. | A revised balance checklist supersedes an older checklist. | yes |

## Relationship Rules

### Provenance Edges

Use `cites`, `derived_from`, and `supports` to preserve source traceability.

If a card, lens, lesson, workflow, prompt, or overlay lacks one of these edges, it must remain `unsupported_draft`.

### Routing Edges

Use `belongs_to_phase`, `used_in_phase`, and `belongs_to_domain` for navigation.

Routing edges do not prove source claims. They only answer where an object is useful.

### Validation Edges

Use `tests`, `validates`, and `invalidates` for playtest-driven knowledge.

Validation must include a PlaytestLog, Evidence, or UserNote. A claim cannot validate itself.

### Evidence And Promotion Edges

Use `evidence_for`, `evidence_against`, `supported_by`, `challenged_by`, `promoted_from`, `reviewed_by`, and `blocked_by_evidence_gap` to make claim promotion auditable.

A `ClaimPromotionRequest` can propose promotion only when it cites legal `EvidenceRef` records and declares that the proposed wording stays within evidence scope. A `ClaimPromotionReview` records a human decision; it does not automatically edit the target claim.

### Project Boundary Edges

Use `applies_to` to connect general knowledge to ProjectOverlay.

Project findings may influence general knowledge only through reviewed claims and evidence, never by silent overwrite.

Use `applies_in_project` and `observed_in_playtest` to keep project-specific and playtest-specific evidence local until a promotion review decides otherwise.

### Versioning Edges

Use `version_of` for variants and `supersedes` for replacement.

Superseded content must remain visible unless removal is legally required.

## Evidence Requirement Summary

| Relation Class | Evidence Requirement |
|---|---|
| Source/provenance | always required |
| Semantic claim relation | always required |
| Phase/domain routing | not required but source basis still visible |
| Containment | not required |
| Versioning | required when replacement changes meaning |
| Project application | required for recommendations |
| Playtest validation | always required |
