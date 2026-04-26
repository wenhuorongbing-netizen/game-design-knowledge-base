
# Seed Import Plan

## Import Order

1. SourceDocument records from `/kb/01_sources/sources.json`
2. GameDesignWork records from `/kb/03_works/works.json`
3. Ontology nodes from `/kb/02_ontology/ontology.json`
4. BookDossier Markdown files
5. Claim graph records
6. Card Markdown files
7. DesignLens Markdown files
8. Lesson Markdown files
9. WorkflowPack, Exercise, and PromptTemplate Markdown files
10. ProjectOverlay and ForumThreadTemplate Markdown files when implemented
11. Derived Artifact nodes for output deliverables
12. Relationship graph
13. Search index

## Pipeline Steps

1. Scan configured `/kb` folders only.
2. Parse YAML frontmatter from entity Markdown files.
3. Validate normalized entities against JSON schemas.
4. Extract body section headings and safe excerpts.
5. Normalize IDs and link fields.
6. Validate `source_basis` and `confidence`.
7. Validate legal status and high-risk quarantine boundaries.
8. Build relationship graph from explicit IDs and routing fields.
9. Generate search index records with safe excerpts only.
10. Produce `import_report.md`.
11. Export `all_entities.json`, `all_relationships.json`, `search_index.json`, `graph_nodes.json`, and `graph_edges.json`.

## BookOS Seed Mapping

| BookOS Table | Source |
|---|---|
| `kb_entities` | `export/all_entities.json` |
| `kb_relationships` | `export/all_relationships.json` |
| `kb_search_documents` | `export/search_index.json` |
| `kb_sources` | SourceDocument entities filtered from all_entities |
| `kb_works` | GameDesignWork entities filtered from all_entities |
| `kb_project_overlays` | ProjectOverlay entities when Prompt 10 implements them |

## Legal Import Boundary

The importer must never unpack archives, parse book PDFs, extract EPUB body text, generate embeddings from quarantined sources, or promote `metadata_only` material. It only reads generated KB Markdown and curated JSON registries.

## Command

```powershell
node tools/kb_importer/import_kb.js
```

Run from the repository root. The script writes exports into `/kb/11_import_export/export`.
