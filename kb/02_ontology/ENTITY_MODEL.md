# Entity Model

## Purpose

This file defines the canonical entity types for the Game Design Masterclass KB.

Every entity must be importable into a database or graph system and must preserve provenance. For knowledge-bearing objects, `source_basis`, `confidence`, `source_ids`, and `claim_scope` are mandatory.

## Universal Fields

| Field | Required | Applies To | Meaning |
|---|---:|---|---|
| `id` | yes | all entities | Stable unique ID. |
| `entity_type` | yes | all entities | Controlled entity type. |
| `title` | yes | all entities | Human-readable name. |
| `aliases` | recommended | all entities | Alternate names and search labels. |
| `created_at` | yes | all entities | Creation date. |
| `updated_at` | yes | all entities | Last update date. |
| `status` | yes | all entities | `intake`, `draft`, `source_backed`, `reviewed`, `project_applied`, `playtest_tested`, `deprecated`, or `quarantined`. |
| `notes` | optional | all entities | Freeform notes. |

## Provenance Fields

| Field | Required For | Meaning |
|---|---|---|
| `source_basis` | all knowledge-bearing entities | Legal/provenance basis from the enum. |
| `confidence` | all knowledge-bearing entities | Confidence level from the confidence model. |
| `source_ids` | all knowledge-bearing entities | SourceDocument, GameDesignWork, UserNote, or Evidence references. |
| `claim_scope` | all claims and derived objects | Separates source-stated, user interpretation, AI hypothesis, project application, and playtest observation. |
| `evidence_ids` | claims, quotes, frameworks, cards, lenses, workflows, overlays | Evidence objects supporting the content. |

## SourceDocument

Actual source file, webpage, legal note, user note, or reference.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `source_document_id` | string | Stable ID from `sources.json`. |
| `original_filename` | string | Filename or external reference label. |
| `normalized_title` | string | Clean display title. |
| `detected_author` | array | Metadata only unless legally verified. |
| `file_type` | string | Extension or reference type. |
| `file_size_if_available` | number/null | Local file size where available. |
| `source_origin_flags` | array | Risk/provenance flags. |
| `risk_level` | enum | `low`, `medium`, `high`, `unknown`. |
| `ingestion_status` | enum | Legal processing status. |
| `source_basis` | enum | Usually `metadata_only`, `user_manual_note`, `official_metadata`, or `user_legal_file`. |
| `allowed_operations` | array | Explicit operation allowlist. |
| `prohibited_operations` | array | Explicit operation denylist. |

Graph role: provenance root.

## GameDesignWork

The intellectual work: book, essay, framework, paper, lecture, course, website, anthology, or user note.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `work_id` | string | Stable ID. |
| `title` | string | Work title. |
| `subtitle` | string/null | Subtitle. |
| `author_names` | array | Work-level author names. |
| `work_type` | enum | `book`, `essay`, `anthology`, `framework`, `lecture`, `paper`, `course`, `website`, `user_note`. |
| `main_domain` | domain_id | Primary routing domain. |
| `secondary_domains` | array | Secondary domains. |
| `phase_groups` | array | Production phase names or IDs. |
| `canonical_status` | enum | `core`, `supporting`, `optional`, `historical`, `advanced`. |
| `source_documents` | array | SourceDocument IDs. |
| `legal_status_summary` | string | Human-readable status. |
| `source_basis` | enum | Basis of current record. |
| `confidence` | enum | Current confidence. |
| `ingestion_status` | enum | Processing status. |

Graph role: bibliographic and intellectual-work anchor.

## Author

Person or organization.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `author_id` | string | Stable ID. |
| `name` | string | Preferred display name. |
| `aliases` | array | Alternate names. |
| `organization` | string/null | Optional affiliation. |
| `works` | array | GameDesignWork IDs. |
| `source_basis` | enum | Usually `metadata_only` or `official_metadata` until verified. |
| `confidence` | enum | Usually `weak` at intake. |

Graph role: creator node.

## BookDossier

Structured research file for a work.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `dossier_id` | string | Stable ID. |
| `work_id` | string | Parent GameDesignWork. |
| `dossier_type` | enum | `metadata_stub`, `reading_notes`, `verified_dossier`, `project_dossier`. |
| `source_basis` | enum | Must permit the dossier contents. |
| `confidence` | enum | Trust level. |
| `claim_scope` | enum | Usually `source_stated`, `user_interpretation`, or `ai_hypothesis`. |
| `sections` | array | Structured dossier sections. |
| `chapter_nodes` | array | ChapterNode IDs when allowed. |
| `legal_status` | string | Current legal basis summary. |

Graph role: work-centered research packet.

## ChapterNode

Metadata and user notes for a chapter or section.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `chapter_node_id` | string | Stable ID. |
| `work_id` | string | Parent work. |
| `dossier_id` | string/null | Parent dossier if created. |
| `chapter_label` | string | Chapter number or section label. |
| `chapter_title` | string/null | Only if legally visible or user-supplied. |
| `source_basis` | enum | Must permit chapter-level detail. |
| `confidence` | enum | Trust level. |
| `user_notes` | array | UserNote IDs. |

Graph role: navigational section node.

Rule: high-risk sources cannot create chapter summaries. ChapterNode may exist only as legal metadata, user note anchor, or official TOC metadata.

## Concept

Atomic game design idea.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `concept_id` | string | Stable ID. |
| `name` | string | Concept name. |
| `definition` | string | Must be source-backed or marked draft. |
| `domain_ids` | array | Domain routing. |
| `phase_ids` | array | Phase routing. |
| `source_basis` | enum | Required. |
| `confidence` | enum | Required. |
| `claim_scope` | enum | Required. |

Graph role: reusable semantic atom.

## Claim

A statement that can be supported, challenged, contradicted, refined, applied, validated, or invalidated.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `claim_id` | string | Stable ID. |
| `statement` | string | One clear claim. |
| `claim_scope` | enum | Required. |
| `source_basis` | enum | Required. |
| `confidence` | enum | Required. |
| `evidence_ids` | array | Required unless `unsupported_draft`. |
| `status` | enum | Draft/reviewed/etc. |

Graph role: testable knowledge assertion.

## Evidence

The source reference or user note that supports a claim.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `evidence_id` | string | Stable ID. |
| `evidence_type` | enum | `source_metadata`, `official_metadata`, `user_note`, `user_quote`, `legal_file_reference`, `playtest_observation`, `project_decision`. |
| `source_ids` | array | SourceDocument, UserNote, or PlaytestLog IDs. |
| `locator` | string/null | Page, chapter, URL, timestamp, or note section when legal. |
| `source_basis` | enum | Required. |
| `confidence` | enum | Required. |

Graph role: support edge materialized as node.

## PhaseGroup

Production phase in the eight-part phase taxonomy.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `phase_id` | string | Stable phase ID. |
| `name` | string | Human-readable phase name. |
| `purpose` | string | What this phase does. |
| `core_questions` | array | Phase diagnostic questions. |
| `typical_deliverables` | array | Outputs from this phase. |
| `domain_ids` | array | Relevant knowledge domains. |

Graph role: production task routing node.

## Domain

Cross-cutting knowledge domain.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `domain_id` | string | Stable domain ID. |
| `name` | string | Domain name. |
| `description` | string | Scope of the domain. |
| `why_it_matters` | string | Practical importance. |
| `source_work_ids` | array | Candidate work routing. |
| `phase_ids` | array | Relevant phases. |
| `related_domain_ids` | array | Adjacent domains. |

Graph role: conceptual routing node.

## Quote

User-supplied or legally allowed quotation.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `quote_id` | string | Stable ID. |
| `quote_text` | string | Must be short and legally allowed. |
| `source_ids` | array | Required. |
| `locator` | string/null | Page or section if known and legal. |
| `source_basis` | enum | `user_manual_quote`, `open_fulltext`, or `user_legal_file`. |
| `confidence` | enum | Usually `strong` or higher if lawful and checked. |
| `usage_limits` | string | Copyright/length restrictions. |

Graph role: exact-language evidence node.

## Framework

A reusable conceptual structure.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `framework_id` | string | Stable ID. |
| `name` | string | Framework name. |
| `components` | array | Parts of the framework. |
| `use_cases` | array | What it helps with. |
| `source_basis` | enum | Required. |
| `confidence` | enum | Required. |
| `source_ids` | array | Required unless draft. |

Graph role: structured concept bundle.

## DesignLens

A diagnostic question set used to evaluate a game or idea.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `lens_id` | string | Stable ID. |
| `name` | string | Lens title. |
| `questions` | array | Diagnostic questions. |
| `phase_ids` | array | Phase routing. |
| `domain_ids` | array | Domain routing. |
| `source_basis` | enum | Required. |
| `confidence` | enum | Required. |
| `source_ids` | array | Required unless draft. |

Graph role: reusable evaluation unit.

## Exercise

A practice task for designers.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `exercise_id` | string | Stable ID. |
| `title` | string | Exercise title. |
| `objective` | string | Skill being practiced. |
| `instructions` | array | Steps. |
| `constraints` | array | Design constraints. |
| `expected_output` | array | What the learner produces. |
| `difficulty` | enum | `beginner`, `intermediate`, `advanced`, `expert`. |
| `source_basis` | enum | Required. |
| `confidence` | enum | Required. |

Graph role: skill-building task.

## Lesson

A teachable learning unit in the masterclass curriculum.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `lesson_id` | string | Stable ID. |
| `title` | string | Lesson title. |
| `learning_objectives` | array | What the learner should understand or do. |
| `prerequisite_ids` | array | Concepts, cards, or lessons required first. |
| `content_blocks` | array | Sections or activities. |
| `exercise_ids` | array | Practice tasks. |
| `assessment` | string | How learning is checked. |
| `source_basis` | enum | Required. |
| `confidence` | enum | Required. |
| `source_ids` | array | Required unless draft. |

Graph role: curriculum unit.

## KnowledgeCard

Reusable card for learning or production.

Allowed card families:

- `concept_card`
- `framework_card`
- `quote_card`
- `comparison_card`
- `application_card`
- `checklist_card`
- `prompt_card`

Required fields:

| Field | Type | Notes |
|---|---|---|
| `card_id` | string | Stable ID. |
| `card_family` | enum | Card type. |
| `summary` | string | Short usable content. |
| `usage` | string | When to use it. |
| `source_basis` | enum | Required. |
| `confidence` | enum | Required. |
| `source_ids` | array | Required unless draft. |
| `phase_ids` | array | Phase routing. |
| `domain_ids` | array | Domain routing. |

Graph role: small reusable knowledge object.

## WorkflowPack

A structured process that turns knowledge into action.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `workflow_pack_id` | string | Stable ID. |
| `title` | string | Workflow title. |
| `purpose` | string | What it produces. |
| `inputs` | array | Required inputs. |
| `steps` | array | Process steps. |
| `outputs` | array | Deliverables. |
| `card_ids` | array | Referenced cards. |
| `lens_ids` | array | Referenced lenses. |
| `prompt_template_ids` | array | Optional prompt templates. |
| `source_basis` | enum | Required. |
| `confidence` | enum | Required. |

Graph role: production process bundle.

## PromptTemplate

Reusable AI prompt.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `prompt_template_id` | string | Stable ID. |
| `title` | string | Prompt title. |
| `task_type` | enum | `ideation`, `critique`, `spec`, `audit`, `playtest_analysis`, `summarization`, `retrieval`. |
| `required_context` | array | Inputs the user must provide. |
| `source_governance_rules` | array | Legal and confidence constraints. |
| `prompt_text` | string | Prompt body. |
| `expected_output` | string | Output shape. |
| `source_basis` | enum | Usually `user_manual_note` or `unsupported_draft`. |
| `confidence` | enum | Required. |

Graph role: governed AI instruction unit.

## PromptRun

A logged AI usage event and result.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `prompt_run_id` | string | Stable ID. |
| `prompt_template_id` | string/null | Template used. |
| `project_id` | string/null | Project context if any. |
| `input_source_ids` | array | Sources used. |
| `output_object_ids` | array | Created objects. |
| `model_or_tool` | string | AI/tool identity if known. |
| `governance_result` | enum | `passed`, `needs_review`, `failed`. |

Graph role: AI audit trail.

## Project

A game project or design case.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `project_id` | string | Stable ID. |
| `name` | string | Project name. |
| `genre` | string/null | Optional. |
| `platforms` | array | Optional. |
| `status` | enum | Concept, prototype, production, test, launch, live, archived. |
| `overlay_ids` | array | ProjectOverlay IDs. |

Graph role: project anchor.

## ProjectOverlay

Project-specific application of general knowledge.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `project_overlay_id` | string | Stable ID. |
| `project_id` | string | Parent project. |
| `applied_object_ids` | array | Cards, lenses, workflows, claims, or frameworks used. |
| `design_context` | string | Project situation. |
| `recommendations` | array | Project-specific recommendations. |
| `source_basis` | enum | Usually `project_application` chain from source-backed or draft objects. |
| `confidence` | enum | Required. |
| `claim_scope` | enum | `project_application`. |

Graph role: boundary between general KB and project-specific use.

## DesignDecision

A design decision with rationale and consequences.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `design_decision_id` | string | Stable ID. |
| `project_id` | string | Parent project. |
| `decision` | string | What was decided. |
| `rationale` | string | Why. |
| `alternatives` | array | Considered options. |
| `consequences` | array | Expected effects. |
| `evidence_ids` | array | Evidence used. |
| `status` | enum | proposed, accepted, rejected, superseded. |

Graph role: project reasoning record.

## PlaytestLog

A structured record of a test.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `playtest_log_id` | string | Stable ID. |
| `project_id` | string | Parent project. |
| `test_objective` | string | What was tested. |
| `participants` | string | Count or segment, not private personal data. |
| `method` | string | Test method. |
| `observations` | array | Behavior observations. |
| `findings` | array | Interpreted findings. |
| `validates` | array | Claim IDs validated. |
| `invalidates` | array | Claim IDs invalidated. |
| `source_basis` | enum | `user_manual_note` or project observation basis. |
| `confidence` | enum | Depends on test quality. |

Graph role: empirical validation node.

## ForumThread

A discussion unit.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `forum_thread_id` | string | Stable ID. |
| `title` | string | Thread title. |
| `thread_type` | enum | question, critique, reading_discussion, project_review, playtest_review, source_audit. |
| `linked_object_ids` | array | Related entities. |
| `quality_rules` | array | Discussion rules. |
| `summary_claim_ids` | array | Claims extracted after review. |

Graph role: collaborative discussion container.

## Comment

A reply or contribution.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `comment_id` | string | Stable ID. |
| `forum_thread_id` | string | Parent thread. |
| `author_label` | string | User or role label. |
| `body` | string | Comment text. |
| `linked_claim_ids` | array | Claims discussed. |
| `source_basis` | enum | Usually `user_manual_note`. |
| `confidence` | enum | Usually `user_interpretation` unless evidence-backed. |

Graph role: discussion contribution.

## UserNote

A user-created note.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `user_note_id` | string | Stable ID. |
| `title` | string | Note title. |
| `note_type` | enum | reading_note, design_note, project_note, playtest_note, quote_note, legal_sidecar_note. |
| `body` | string | User-authored text. |
| `linked_source_ids` | array | Related sources if any. |
| `source_basis` | enum | `user_manual_note` or `user_manual_quote`. |
| `confidence` | enum | `user_interpretation`, `medium`, or stronger if checked. |

Graph role: lawful human input.

## Tag

Controlled or freeform label.

Required fields:

| Field | Type | Notes |
|---|---|---|
| `tag_id` | string | Stable ID. |
| `tag_type` | enum | phase, domain, artifact, difficulty, confidence, source_basis, role, experience, risk, ai_workflow. |
| `label` | string | Display text. |
| `controlled` | boolean | Whether governed by `TAG_SYSTEM.md`. |
| `description` | string | Meaning and use rule. |

Graph role: retrieval and filtering label.

## Entity Promotion Rules

Metadata-only objects may support:

- intake records
- routing indexes
- legal status reports
- unsupported draft placeholders

Metadata-only objects may not support:

- confident chapter summaries
- quote cards
- source-stated claims
- verified frameworks
- production recommendations presented as source-backed

Promotion requires better source basis, explicit evidence, and updated confidence.
