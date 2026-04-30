# Validator Rule Coverage Matrix

Date: 2026-04-30

## Purpose

This matrix maps major validator rule families to current coverage and recommended regression fixtures.

## Coverage Matrix

| Rule family | Covered by current validator | Current state | Fixture test needed |
|---|---|---|---|
| required IDs | yes | current KB passes | missing id fixture |
| duplicate IDs | yes | current KB passes | duplicate id fixture |
| `entity_type` required | yes | current KB passes | missing entity_type fixture |
| `source_basis` required/valid | yes | current KB passes | invalid source_basis fixture |
| confidence required/valid | yes | current KB passes | invalid confidence fixture |
| broken relationships | yes | current KB passes | broken target fixture |
| card related-work warning | yes | current KB passes | intentional exception fixture |
| lens questions required | yes | current KB passes | lens without questions fixture |
| workflow output artifact required | yes | current KB passes | workflow without output artifact fixture |
| verified claim evidence | yes | current KB passes | verified claim without EvidenceRef fixture |
| metadata-only verification block | yes | current KB passes | metadata-only claim promotion fixture |
| unsupported draft verification block | yes | current KB passes | unsupported draft promotion fixture |
| pending sidecar block | yes | current KB passes | pending sidecar evidence fixture |
| manual quote safety | yes | current KB passes | long quote and auto-extracted quote fixtures |
| manual note status/source rules | yes | current KB passes | bad manual note fixture |
| high-risk source operation boundary | yes | current KB passes | high-risk full-text fixture |
| sidecar required fields/status | yes | current KB passes | unsafe sidecar fixture |
| claim promotion review rules | yes | current KB passes | missing reviewer/rationale fixture |
| project overlay scope | yes | current KB passes | project-local claim overgeneralization fixture |
| playtest scope | yes | current KB passes | playtest observation overgeneralization fixture |
| legacy high-risk artifact scan | yes | current KB passes | unsafe legacy artifact fixture |
| portal data safety scan | yes | current KB passes | unsafe portal excerpt fixture |
| direction-drift scan | yes | current KB passes | active legacy-direction fixture |
| report consistency scan | yes | current KB passes | contradictory report fixture |

## Interpretation

The validator covers the right rule families for current governance. The missing piece is regression proof that each rule fails when deliberately violated.

## Next Step

Create a fixture harness and add known-bad fixtures gradually. Do not refactor validator internals before fixture tests exist.
