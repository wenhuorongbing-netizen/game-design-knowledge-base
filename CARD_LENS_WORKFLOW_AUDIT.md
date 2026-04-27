# Card, Lens, Workflow, Exercise Audit

## Summary

The new KB contains enough structured assets to be useful as a draft Game Design Knowledgebase. The main weakness is evidence depth, not volume.

## Counts

| Asset Type | Count | Status |
|---|---:|---|
| concept cards | 109 | structurally good, evidence-light |
| framework cards | 15 | structurally good, evidence-light |
| application cards | 10 | structurally good |
| checklist cards | 15 | structurally good |
| prompt cards | 15 | structurally good |
| placeholder card READMEs | 5 | incomplete |
| design lenses | 104 | strong original draft bank |
| lessons | 84 | strong draft curriculum |
| workflow packs | 20 | usable |
| exercises | 85 | usable |
| workflow prompt templates | 15 | usable |

## Card Findings

| ID | Severity | Issue | Evidence | Fix |
|---|---|---|---|---|
| CLW-001 | P1 | Placeholder card folders lack entity frontmatter | quote/comparison/exercise/anti-pattern/case-study README files | Add valid placeholder entities or move README out of scanned folders |
| CLW-002 | P1 | 41 cards have no related work | `validation_issues.json` | Add related_works or define exempt governance/tool cards |
| CLW-003 | P1 | Most cards are not evidence-backed | source_basis mostly `derived_from_public_metadata` or `unsupported_draft` | Attach legal/user notes before promotion |

## Lens Findings

| ID | Severity | Issue | Evidence | Fix |
|---|---|---|---|---|
| CLW-004 | P2 | Lens frontmatter uses `domain` singular | sampled `lens_player-experience_agency.md` | Normalize to `domains` array or document typed field |
| CLW-005 | P2 | Lenses are original but unsupported | source_basis `unsupported_draft` | Keep as diagnostic tools; do not present as source claims |

## Workflow Findings

| ID | Severity | Issue | Evidence | Fix |
|---|---|---|---|---|
| CLW-006 | P2 | Workflow packs are generic and need real examples | sampled `workflow_game-idea-to-one-page-concept.md` | Add project overlay examples after P0 cleanup |
| CLW-007 | P2 | Workflows should not imply source-backed doctrine | source_basis `unsupported_draft` | UI/docs must display draft status |

## Exercise Findings

| ID | Severity | Issue | Evidence | Fix |
|---|---|---|---|---|
| CLW-008 | P2 | Exercises are nested under workflows, not separate `/08_exercises` | `knowledge/kb/08_workflows/exercises` | Document layout or move in a future restructuring |
| CLW-009 | P2 | Exercise frontmatter may not expose `domains` array | sampled entity scan | Normalize if strict universal frontmatter is required |

## Acceptance Status

Rejected only because repository-level P0 source governance issues exist. The new card/lens/workflow layer itself is acceptable as a draft scaffold.

