# Documentation Change Review Checklist

Date: 2026-04-30

## Use This Checklist When

- adding a new documentation file;
- changing first-use or navigation files;
- changing prompt/context-pack files;
- changing source-governance language;
- changing validation, benchmark, or release reports.

## Basic Review

| Check | Pass? |
|---|---|
| The file has a clear purpose. |  |
| The target user is explicit or obvious. |  |
| The file has a linked parent or hub. |  |
| The lifecycle state is known. |  |
| The owner role is known. |  |
| The file belongs to the correct surface level. |  |
| Existing files could not absorb the change cleanly. |  |
| The change does not add first-use overload. |  |

## Source And Confidence Review

| Check | Pass? |
|---|---|
| The change does not ask AI to parse private or high-risk source bodies. |  |
| The change does not invent evidence, notes, quotes, projects, or benchmark outputs. |  |
| Draft content is not described as verified. |  |
| `source_basis` and confidence are explained when relevant. |  |
| EvidenceRefs are not invented. |  |
| Synthetic examples remain clearly synthetic. |  |

## Maintainability Review

| Check | Pass? |
|---|---|
| The document has a deprecation condition. |  |
| The document does not duplicate a canonical prompt, context pack, or policy. |  |
| The document is linked from the right index only. |  |
| Generated files are not edited manually. |  |
| `report.md` is appended when the prompt requires it. |  |
| Required validation commands pass. |  |

## Decision

| Decision | Meaning |
|---|---|
| approve | file is useful, owned, linked, and safe |
| revise | file is useful but needs clarity, owner, or link repair |
| merge | content should be folded into an existing file |
| deprecate | file is inactive or superseded |
| archive_candidate | file may be retained temporarily but should not be promoted |

