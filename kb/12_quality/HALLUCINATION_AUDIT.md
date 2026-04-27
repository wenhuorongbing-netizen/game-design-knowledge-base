
# Hallucination Audit

## Status

Critical hallucination status: **pass**.

The KB does not currently present metadata-only book material as verified knowledge. The main risk is overusing draft scaffolds as if they were source-backed design doctrine.

## Findings

| Audit Item | Classification | Count | Evidence | Repair |
|---|---|---:|---|---|
| claims with confidence too high | pass | 0 | No claim is strong or verified. | No repair needed. |
| unsupported definitions | warning | 109 | Definitions are intentionally weak or draft. | Attach legal/user evidence before promotion. |
| invented book-specific claims | pass | 0 | Generated text avoids saying a book states an internal claim. | No repair needed. |
| ambiguous source_basis | pass | 0 | Prompt 9 found no missing source_basis. | No repair needed. |
| weak evidence | warning | 164 | Most claims are evidence gaps by design. | Prioritize legal notes and official metadata. |
| circular references | pass | 0 | No critical circular evidence chain was detected; routing links are not evidence. | No repair needed. |
| AI-sounding generic filler | warning | 164 | Many cards are scaffold language rather than final teaching prose. | Replace top cards with user-note-backed definitions and examples. |
| missing project application | warning | 1 | ProjectOverlay is designed but not implemented with real project examples. | Run Prompt 11 Project Overlay system. |
| missing when-not-to-use | pass | 0 | Concept cards generally include when_not_to_use. | Add limitations where missing. |
| missing output artifacts | pass | 0 | Most production cards include output artifacts. | Add output_artifacts where missing. |

## Claim Graph Review

| Metric | Count |
|---|---:|
| total claims | 164 |
| high-confidence or verified claims | 0 |
| unsupported/draft claims | 164 |
| definition claims without evidence | 109 |

## Card Explanation Review

| Metric | Count |
|---|---:|
| reviewed card-family entities | 164 |
| scaffold-like cards | 164 |
| cards missing output artifacts | 0 |
| concept cards missing when_not_to_use | 0 |

## Risk Controls

- Do not use any `weak` or `unsupported_draft` claim as a cited fact.
- Do not say "according to [book]" unless evidence_refs point to a legal source, official metadata, or user note.
- Do not use related_works as evidence.
- Do not convert a lens or workflow into a recommendation unless project context or playtest evidence exists.
- Keep draft cards visible in GDKB, but display their confidence and source_basis prominently.

## Promotion Path

1. Add legal sidecar or user note.
2. Attach evidence_refs to claims/cards/lenses.
3. Rewrite generic scaffold explanations into source-bounded definitions.
4. Add project overlay examples.
5. Add playtest logs for validated recommendations.
