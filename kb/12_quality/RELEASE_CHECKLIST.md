
# Release Checklist

## Release Decision

Status: **release candidate for BookOS draft KB integration**.

This KB is structurally release-ready and legally safe as a draft/source-governed system. It is not yet a verified source-backed masterclass corpus because no commercial book body has a legal sidecar and no user reading notes have been attached.

## Final Acceptance Checklist

| Gate | Status | Evidence |
|---|---|---|
| source policy is clear | pass | Governance and legal policy files exist. |
| all high-risk sources quarantined | pass | 14 high-risk records remain metadata-only. |
| every entity has source_basis | pass | 0 missing. |
| every entity has confidence | pass | 0 missing. |
| all phase groups have coverage | pass | All 8 phases are represented. |
| all major domains have coverage | pass | All requested major domains are represented. |
| at least 100 cards exist | pass | 164 cards. |
| at least 100 lenses exist | pass | 104 lenses. |
| at least 60 lessons exist | pass | 84 lessons. |
| at least 20 workflow packs exist | pass | 20 workflows. |
| at least 80 exercises exist | pass | 85 exercises. |
| search export exists | pass | 734 search documents. |
| graph export exists | pass | 8383 graph edges. |
| legal audit has no unresolved violations | pass | No unresolved legal violations. |
| hallucination audit has no critical unresolved issues | pass | No high-confidence unsupported claims. |

## Remaining Non-Blocking Warnings

- 41 validation warnings remain.
- Current warning class: `card_without_related_work`.
- Prompt 10 accepts these as release-hardening backlog because they do not create legal risk or broken graph imports.

## Blockers For Verified Source-Backed Release

- Legal sidecars are missing for high-risk book files.
- User reading notes are missing.
- ProjectOverlay examples are missing.
- Playtest logs are missing.
