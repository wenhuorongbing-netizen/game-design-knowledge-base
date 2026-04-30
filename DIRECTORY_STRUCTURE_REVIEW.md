# Directory Structure Review

Date: 2026-04-30

## Verdict

Verdict: CONDITIONALLY_ACCEPTED.

The directory structure is understandable through maps and launchpads, but still large and visually noisy.

## Structure Findings

| Area | Observation | Inference | Recommendation |
|---|---|---|---|
| root | 308 root Markdown files | normal users can be overwhelmed | keep `ONE_PAGE_LAUNCHPAD.md` and `USE_THIS_FIRST.md` dominant |
| `kb/` | 790 canonical/generation/governance files | canonical content is large but organized | preserve folder READMEs and maps |
| `tools/` | 6 files | authoritative tooling surface is small | add tests before increasing tool count |
| `kb-tools/` | legacy guarded folder still visible | can confuse maintainers | keep hard guard and legacy README |
| `kb-portal/` | optional static browser with large generated files | useful but not canonical | mark as optional consumer and document refresh path |
| `kb/07_workflows/` | empty | possible confusion with active `kb/08_workflows/` | mark or archive in a reversible plan |
| `kb/10_forum_templates/` | forum-named folder exists | conflicts with "not a forum" message | keep quarantined and label as non-app template area |

## Recommended Structure Policy

- Canonical content stays in `kb/`.
- Generated exports stay under `kb/11_import_export/`.
- Tools stay under `tools/`.
- User start layer stays root-level but should be curated.
- Legacy/deprecated folders remain visible only with warnings.
