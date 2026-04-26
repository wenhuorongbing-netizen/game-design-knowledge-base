
# Search Index Model

## Purpose

The search index is a safe retrieval surface for BookOS. It is not a raw source text index.

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

## Safety Rules

- Do not index high-risk book body text.
- Suppress body excerpts for `metadata_only` or quarantined entities.
- Treat generated cards, lenses, lessons, workflows, exercises, and prompts as draft scaffolds unless evidence promotes them.
- Search results must expose `source_basis` and `confidence` so AI retrieval cannot hide uncertainty.
