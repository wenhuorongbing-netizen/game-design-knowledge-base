# Researcher Path

Use this path when your job is to evaluate evidence, provenance, claims, and coverage rather than solve a design problem immediately.

## Core Governance Concepts

| Concept | Meaning | Start Here |
|---|---|---|
| `source_basis` | The legal/provenance basis for a claim or entity. | [SOURCE_BASIS_ENUM.md](../00_governance/SOURCE_BASIS_ENUM.md) |
| `confidence` | How strongly the KB can stand behind an entity or claim. | [CONFIDENCE_MODEL.md](../00_governance/CONFIDENCE_MODEL.md) |
| `evidence_refs` | IDs or source references that support a claim or entity. | [Claim Graph](../05_cards/CLAIM_GRAPH.md) |
| legal sidecar | User-provided legal processing declaration. | [source_sidecar_template.yaml](../01_sources/source_sidecar_template.yaml) |
| draft vs verified | Difference between scaffolded knowledge and evidence-backed knowledge. | [Release Checklist](../12_quality/RELEASE_CHECKLIST.md) |
| high-risk quarantine | Metadata-only status for risky sources. | [high_risk_quarantine.md](../01_sources/high_risk_quarantine.md) |

## Research Workflow

1. Check the source registry: [sources.json](../01_sources/sources.json)
2. Check work metadata: [works.json](../03_works/works.json)
3. Check the work registry table: [WORK_REGISTRY.md](../03_works/WORK_REGISTRY.md)
4. Review dossiers only as metadata shells unless legal notes exist: [DOSSIER_INDEX.md](../04_dossiers/DOSSIER_INDEX.md)
5. Inspect claims: [CLAIM_GRAPH.md](../05_cards/CLAIM_GRAPH.md)
6. Inspect evidence gaps: [EVIDENCE_GAPS.md](../05_cards/EVIDENCE_GAPS.md)
7. Inspect hallucination risks: [HALLUCINATION_AUDIT.md](../12_quality/HALLUCINATION_AUDIT.md)
8. Inspect coverage: [COVERAGE_MATRIX.md](../12_quality/COVERAGE_MATRIX.md)

## Draft Vs Verified

Draft KB assets can be useful for routing, study, prompting, and design work, but they are not verified source claims. A card, lens, workflow, or lesson is not verified unless it has:

- suitable `source_basis`
- suitable `confidence`
- explicit `evidence_refs`
- no high-risk body-text dependency

## Claim Graph

Start with [CLAIM_GRAPH.md](../05_cards/CLAIM_GRAPH.md) and [claim_graph.json](../05_cards/claim_graph.json).

Use claims to separate:

- definition
- principle
- method
- warning
- comparison
- application
- hypothesis

Do not upgrade a claim to verified unless evidence is legal and explicit.

## Coverage Matrix

Use [COVERAGE_MATRIX.md](../12_quality/COVERAGE_MATRIX.md) to find weak areas by phase and domain. Coverage is not the same as proof. A domain can have many draft assets and still have weak verified evidence.

## TODO

- Add source-backed reading-note routes after legal sidecars or open sources are attached.
- Add a verified-claims index after at least one claim becomes verified.
