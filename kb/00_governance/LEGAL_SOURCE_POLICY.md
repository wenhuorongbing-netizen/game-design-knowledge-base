# Legal Source Policy

## Scope

This KB supports multiple source classes, but not all source classes permit the same operations.

The KB must govern sources before it transforms them.

## Source Classes

### LEGAL_READY_SOURCE

Allowed examples:

- clearly open full text
- official metadata pages
- user-written notes
- user-written quotes
- user-provided legal files with explicit sidecar approval

Allowed operations depend on exact `source_basis`, but may include:

- metadata ingest
- summary
- concept extraction
- card creation
- lesson design
- workflow derivation

### HIGH_RISK_SOURCE

A file is high risk if the file name or visible metadata includes signals such as:

- `z-library`
- `z-lib`
- `1lib`
- `Anna’s Archive`
- `it-ebooks`
- mirror indicators
- suspicious scan language

Allowed operations:

- record filename
- detect title
- detect author
- detect edition
- detect publisher
- detect year
- detect ISBN if visible in filename or metadata surface
- record file type
- record risk flags
- record recommended legal action
- record whether a legal sidecar is required

Forbidden operations:

- body ingest
- chapter summary
- quote extraction
- long quotation
- concept derivation from body text
- confident comparison based on book internals
- lens creation based on body text

### HIGH_RISK_CONTAINER

Archive containers such as `.7z` that likely hold restricted material but are not yet legally cleared.

Allowed operations:

- archive-level metadata
- file/container size
- archive filename
- inspection status

Forbidden operations:

- unpacking for knowledge ingest
- internal text transformation

unless legal sidecar approval exists and tooling permits compliant inspection.

### LEGACY_DERIVED_SNAPSHOT

A pre-existing local KB or generated artifact set whose claims may already be contaminated by earlier unsafe transforms.

Allowed operations:

- structural inspection
- governance review
- migration planning

Forbidden operations:

- treating its summaries as verified facts without re-audit

## Sidecar Requirement

Any user-provided file that is not obviously open or official must remain blocked until a sidecar declares its legal status.

Use [source_sidecar_template.yaml](../01_sources/source_sidecar_template.yaml).

## Allowed Operations Matrix

| Source basis | Metadata | Summary | Quote card | Chapter summary | Comparison | Workflow derivation |
|---|---:|---:|---:|---:|---:|---:|
| `open_fulltext` | yes | yes | yes, short and attributed | yes | yes | yes |
| `official_metadata` | yes | only metadata summary | no | no | limited, metadata-level | limited |
| `user_legal_file` | yes | yes | yes, short and governed | yes | yes | yes |
| `user_manual_note` | yes | yes | yes, if user wrote it | yes, if note supports it | yes, note-bounded | yes |
| `user_manual_quote` | yes | no | yes, user-supplied only | no | limited | limited |
| `derived_from_user_note` | yes | yes, with attribution chain | no direct quote unless note contains it | limited | yes, note-bounded | yes |
| `derived_from_public_metadata` | yes | limited | no | no | metadata-level only | limited |
| `metadata_only` | yes | no confident summary | no | no | no confident comparison | no |
| `unsupported_draft` | yes | draft only | no | no | draft only | draft only |

## Chapter Summary Rule

Never create a chapter summary unless the input basis is one of:

- `open_fulltext`
- `official_metadata` when the “summary” is only structural metadata
- `user_legal_file`
- `user_manual_note`

## Quote Rule

Never create long quotations.

For restricted or uncertain sources, do not create quote cards at all.

## Migration Rule

Existing generated content in the workspace must not be imported into this KB as verified content unless its source chain is re-established under this policy.
