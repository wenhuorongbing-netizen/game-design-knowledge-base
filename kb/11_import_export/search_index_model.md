
# Search Index Model

## Purpose

The search index is a safe retrieval surface for GDKB. It is not a raw source text index.

## Fields

| Field | Type | Meaning |
|---|---|---|
| `id` | string | Entity ID. |
| `entity_type` | string | Entity type. |
| `title` | string | Display title. |
| `summary` | string | Safe summary from frontmatter or registry metadata. |
| `body_excerpt_safe` | string | Safe excerpt from generated KB Markdown, suppressed for metadata-only or quarantined entities. |
| `domains` | string[] | Domain IDs. |
| `phase_groups` | string[] | Phase names or IDs. |
| `tags` | string[] | Controlled and local tags. |
| `related_works` | string[] | Work IDs where available. |
| `confidence` | enum | Confidence. |
| `source_basis` | enum | Provenance basis. |
| `status` | string | Workflow status. |
| `evidence_status` | string | Human-readable evidence state such as metadata_only, unsupported_draft_no_evidence, evidence_gap_open, or verified_with_evidence. |
| `is_verified` | boolean | Whether status or confidence is verified. |
| `has_evidence_refs` | boolean | Whether explicit evidence_refs exist. |
| `evidence_gap_count` | number | Count of explicit or derived evidence gaps. |
| `entity_scope` | enum | general_kb, project_overlay, playtest_log, or draft_scaffold. |
| `related_evidence_refs` | string[] | EvidenceRef IDs attached to the entity. |
| `promotion_status` | string | Promotion/review status or blocked_no_evidence. |
| `evidence_gap` | string | Short gap text when present in frontmatter. |

## Safety Rules

- Do not index high-risk book body text.
- Suppress body excerpts for `metadata_only` or quarantined entities.
- Treat generated cards, lenses, lessons, workflows, exercises, and prompts as draft scaffolds unless evidence promotes them.
- Search results must expose `source_basis` and `confidence` so AI retrieval cannot hide uncertainty.
- Search results must expose `evidence_status`, `entity_scope`, `is_verified`, and `promotion_status` so draft, project-specific, playtest-specific, and verified content are not conflated.
