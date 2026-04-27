# Import And Export

This folder documents the Markdown frontmatter standard, JSON schemas, import pipeline, search model, graph model, and generated export artifacts.

- Status: mixed canonical and generated
- Users: maintainers, data engineers, BookOS/GDKB integration work
- Edit: documentation and schemas carefully; generated outputs no
- Updated by: `npm run kb:export`

Generated files include:

- `export/all_entities.json`
- `export/all_relationships.json`
- `export/search_index.json`
- `export/graph_nodes.json`
- `export/graph_edges.json`
- `export/validation_issues.json`
- `import_report.md`
- `graph_overview.md`

Do not manually edit generated exports. Fix source Markdown, registries, schemas, or importer code, then regenerate.
