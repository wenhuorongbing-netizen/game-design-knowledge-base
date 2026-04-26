
# Graph Overview

## Node Counts By Type

```json
{
  "SourceDocument": 17,
  "GameDesignWork": 19,
  "Claim": 164,
  "PhaseGroup": 8,
  "Domain": 35,
  "BookDossier": 19,
  "ConceptCard": 109,
  "FrameworkCard": 15,
  "ApplicationCard": 10,
  "ChecklistCard": 15,
  "PromptCard": 15,
  "DesignLens": 104,
  "Lesson": 84,
  "WorkflowPack": 20,
  "Exercise": 85,
  "PromptTemplate": 15,
  "Artifact": 122
}
```

## Edge Counts By Type

```json
{
  "belongs_to_phase": 2192,
  "belongs_to_domain": 1863,
  "belongs_to_work": 605,
  "related_to": 2876,
  "produces_deliverable": 706,
  "has_prerequisite": 74,
  "contains": 67
}
```

## Export Files

- `export/graph_nodes.json`
- `export/graph_edges.json`
- `export/all_relationships.json`

## Current Graph Quality Notes

- Broken links are excluded from graph edge exports and listed in `import_report.md`.
- Routing edges are navigation metadata, not evidence.
- Claims remain weak or unsupported unless future user notes, legal source sidecars, official metadata, project overlays, or playtest logs promote them.
- Current issue count: 41
