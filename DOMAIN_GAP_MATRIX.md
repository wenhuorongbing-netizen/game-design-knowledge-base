# Domain Gap Matrix

Date: 2026-04-29

## Purpose

This matrix separates structural coverage from evidence coverage for the Master Framework Phase.

The KB is structurally broad, but it is not yet a verified source-backed masterclass. Most domain coverage is scaffolded by metadata, original lenses, workflow packs, and draft concept cards.

## Gap Summary

| Domain | Structural Coverage | Evidence Level | Main Gap | Recommended Next Work |
|---|---|---|---|---|
| Game Design Foundations | strong_structural | metadata_only + unsupported_draft | no user notes on design direction criteria | Core Experience Master operating guide |
| Player Experience | strong_structural | metadata_only + unsupported_draft | no source-backed player experience definitions | Player Experience question ladder |
| Play Theory | adequate_structural | metadata_only + unsupported_draft | theory concepts need legal/user notes | play theory user note packet |
| Fun, Learning, and Mastery | adequate_structural | metadata_only + unsupported_draft | no source-backed learning/mastery model | challenge/mastery operating guide |
| Rules and Mechanics | strong_structural | metadata_only + unsupported_draft | no verified formal definitions | mechanic spec router |
| Meaningful Decisions | strong_structural | metadata_only + unsupported_draft | no user examples of meaningful vs fake choices | decision audit operating guide |
| Skill, Chance, Challenge, and Balance | strong_structural | metadata_only + unsupported_draft | no playtest or tuning evidence | balance diagnosis prompt |
| Systems, Loops, and Economy | strong_structural | metadata_only + unsupported_draft | no real economy examples or source-backed models | Systems and Economy Master guide |
| Game Feel and Feedback | strong_structural | metadata_only + unsupported_draft | no prototype artifacts or user notes | game feel artifact intake prompt |
| UI, UX, and Interface | strong_structural | metadata_only + unsupported_draft | no UI examples or screenshots | UI artifact request protocol |
| Narrative, World, and Character | strong_structural | metadata_only + unsupported_draft | no project narrative context | Narrative-System Integration guide |
| Space and Level Design | weak_structural | metadata_only + unsupported_draft | few dedicated level cards, lenses, or workflows | level design domain expansion plan |
| Prototyping | strong_structural | metadata_only + unsupported_draft | no real prototype history | Prototyping Master guide |
| Playtesting and Iteration | strong_structural | metadata_only + unsupported_draft | no real PlaytestLog | Playtesting Master guide |
| Community and Multiplayer | adequate_structural | metadata_only + unsupported_draft | no primary source notes or community cases | community risk note prompts |
| Ethics and Responsibility | adequate_structural | metadata_only + unsupported_draft | no reviewed ethics evidence or case studies | ethics review gate |
| Production, Documentation, and Pitch | strong_structural | metadata_only + unsupported_draft | no project-specific artifact templates chosen | master artifact template set |
| Business and Release | adequate_structural | metadata_only + unsupported_draft | no active project, market, platform, or launch context | defer until project/pitch exists |
| AI-Assisted Design and Prompt Engineering | strong_structural | unsupported_draft | no prompt-run evidence | master prompt router |

## Priority Gaps

| Priority | Gap | Why It Matters | Safe Fix |
|---|---|---|---|
| P1 | Master prompt router missing | The AI still needs a deterministic way to choose capability, domain, lens, workflow, and artifact. | Build `MASTER_PROMPT_ROUTER.md` from existing metadata only. |
| P1 | Capability operating guides missing | Capabilities exist, but they need step-by-step behavior rules. | Create one guide per master capability. |
| P1 | Evidence-light domains could be mistaken as verified | Structural coverage looks strong, but evidence remains weak. | Keep source_basis and confidence warnings in all master docs. |
| P1 | Level design is under-modeled | Space and level design has fewer direct assets than other domains. | Add a future level design expansion plan without inventing book evidence. |
| P2 | Business/release needs project context | Commercial advice without a project can become generic. | Defer deeper business routing until user has a project or pitch. |
| P2 | Community/multiplayer needs source and case evidence | Social design advice is context-sensitive. | Request user notes or case-specific evidence before stronger claims. |

## Evidence Upgrade Needs

| Evidence Needed | Applies To | Status |
|---|---|---|
| legal sidecars | high-risk source files | none supplied |
| user manual notes | all domains | none supplied |
| user manual quotes | optional, short, lawful quotes only | none supplied |
| open-source references | public papers, official pages, public metadata | not expanded in this phase |
| project overlays | project-specific application | not applicable yet |
| playtest logs | playtest-specific observation | not applicable yet |

## Acceptance Position

The master domain map is acceptable as a navigation and AI behavior layer.

It is not acceptable as verified source-backed doctrine until evidence is supplied and reviewed.

