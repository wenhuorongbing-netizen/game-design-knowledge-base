
# Graph Model

## Purpose

The graph model lets BookOS and future tools traverse provenance, routing, production use, learning paths, workflows, deliverables, and evidence gaps.

## Graph Nodes

Graph nodes are all normalized entities exported to:

- `export/all_entities.json`
- `export/graph_nodes.json`

Node types include:

- SourceDocument
- GameDesignWork
- PhaseGroup
- Domain
- BookDossier
- Claim
- ConceptCard
- FrameworkCard
- QuoteCard
- ComparisonCard
- ApplicationCard
- ChecklistCard
- PromptCard
- DesignLens
- Lesson
- Exercise
- WorkflowPack
- PromptTemplate
- ProjectOverlay
- ForumThreadTemplate
- Artifact

## Graph Edges

Edges use relationship types defined in `/kb/02_ontology/RELATIONSHIP_MODEL.md` and exported to:

- `export/all_relationships.json`
- `export/graph_edges.json`

Primary generated edge families:

- `belongs_to_phase`
- `belongs_to_domain`
- `belongs_to_work`
- `related_to`
- `has_prerequisite`
- `cites`
- `contains`
- `produces_deliverable`
- `supports`
- `challenges`
- `contradicts`

## Broken Link Policy

Broken links are not exported as graph edges. They are reported in `import_report.md` as validation issues. This keeps BookOS graph imports clean while preserving repair tasks.

## Evidence Policy

Routing and containment edges do not prove source claims. Provenance, support, comparison, challenge, validation, and supersession edges require evidence before they can be used as knowledge claims.
