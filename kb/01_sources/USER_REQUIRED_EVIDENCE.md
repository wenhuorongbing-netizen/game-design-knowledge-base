# User Required Evidence

## Purpose

This file explains what the user must provide before a source can be used beyond metadata-only handling.

## For High-Risk Sources

High-risk sources include files or metadata with markers such as:

- z-library
- z-lib
- 1lib
- Anna's Archive
- it-ebooks
- mirror
- suspicious scan
- unknown scanned copy

High-risk sources remain `metadata_only_quarantined` unless a LegalSidecar explicitly permits a narrower operation.

## Required User Inputs

| Desired Operation | Required User Evidence |
|---|---|
| Record metadata | No sidecar required if metadata is already visible. |
| Attach user notes | UserManualNote or sidecar confirming notes are user-created. |
| Attach short user quotes | UserManualQuote explicitly supplied by user. |
| Generate cards from user notes | UserManualNote plus EvidenceRef. |
| Process full text | LegalSidecar with `approval_status: approved_full_processing`, reviewer, and review date. |

## What The User Must Not Provide As Evidence

- suspicious mirror files without a lawful access explanation;
- copied chapter text from high-risk sources;
- long quotations;
- generated summaries from copyrighted book bodies;
- embeddings from private or high-risk files.

## Current State

No legal sidecars have been approved. No source is approved for full processing.
