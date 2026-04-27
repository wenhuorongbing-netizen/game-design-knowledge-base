# EvidenceRef Schema

## Purpose

EvidenceRef is the link between evidence material and the KB entity or claim it supports.

EvidenceRef does not store long source text. It stores provenance, scope, limitations, and target IDs.

## Required Fields

| Field | Required | Meaning |
|---|---:|---|
| `evidence_ref_id` | yes | Stable evidence reference ID. |
| `evidence_type` | yes | One of legal_sidecar, user_manual_note, user_manual_quote, open_source_reference, official_metadata_reference, derived_note, audit_reference. |
| `source_basis` | yes | Provenance basis. Must be legal enough for the intended use. |
| `confidence` | yes | Confidence label. `ai_hypothesis` cannot verify claims. |
| `evidence_scope` | yes | What the evidence can and cannot support. |
| `source_document_id` | if applicable | SourceDocument metadata record. |
| `work_id` | if applicable | GameDesignWork record. |
| `sidecar_id` | if applicable | LegalSidecar record. |
| `manual_note_id` | if applicable | UserManualNote record. |
| `manual_quote_id` | if applicable | UserManualQuote record. |
| `open_source_reference_id` | if applicable | OpenSourceReference record. |
| `supports_entity_ids` | yes | Entity IDs this evidence supports. May be empty for draft intake. |
| `supports_claim_ids` | yes | Claim IDs this evidence supports. May be empty for draft intake. |
| `limitations` | yes | Known limits, uncertainty, or non-transferable context. |
| `reviewer` | yes | Person or process that reviewed the evidence. |
| `status` | yes | draft, pending_review, approved, rejected, superseded, archived. |
| `created_at` | yes | Creation date. |
| `updated_at` | yes | Last update date. |

## Verification Rules

- A verified claim requires at least one EvidenceRef with a legal source basis.
- `metadata_only` cannot verify a claim.
- `unsupported_draft` cannot verify a claim.
- `ai_hypothesis` cannot verify a claim.
- A pending sidecar cannot verify a claim.
- A high-risk source requires explicit legal sidecar approval before it can support stronger evidence status.
