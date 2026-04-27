# Sidecar Review Guide

## Purpose

This guide explains how to review a LegalSidecar before it can affect source operations or EvidenceRef strength.

## Required Checks

| Check | Required Result |
|---|---|
| `source_document_id` exists | Must point to a SourceDocument in `kb/01_sources/sources.json`. |
| `work_id` exists | Must point to a GameDesignWork in `kb/03_works/works.json`. |
| legal access confirmed | `user_confirms_legal_access` must be true for any approval above metadata-only. |
| access basis stated | Must be one of the controlled `access_basis` values. |
| AI permission explicit | `allowed_for_ai_processing` must be true before AI processing is allowed. |
| high-risk marker reviewed | Must record whether z-library, Anna's Archive, mirror, scan, or archive risk remains. |
| reviewer present | Required for `approved_full_processing`. |
| review date present | Required for `approved_full_processing`. |
| expiration date considered | Required when access is temporary, such as library access. |

## Allowed Access Basis Values

- `owned_physical_copy`
- `purchased_ebook`
- `library_access`
- `official_open_access`
- `publisher_permission`
- `author_permission`
- `public_domain`
- `other`

## Decision Rules

- Use `approved_metadata_only` when the sidecar confirms only bibliographic or metadata use.
- Use `approved_user_notes_only` when the user can provide personal notes but not source body text.
- Use `approved_full_processing` only when legal access and AI-processing permission are explicit.
- Use `rejected` when provenance or permission is unclear.
- Use `expired` when a previous approval is no longer valid.

## High-Risk Sources

High-risk marker review is not a rubber stamp. If the source filename or metadata includes high-risk markers, keep the source quarantined unless the reviewer has a clear lawful basis for the exact operation.

Even with a sidecar, prefer narrow permissions:

- metadata only;
- user notes only;
- user-supplied short quotes only;
- full processing only with explicit approval.
