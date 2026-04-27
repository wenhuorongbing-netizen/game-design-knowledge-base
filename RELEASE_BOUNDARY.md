# Release Boundary

This file defines the boundary for the uploadable Game Design Knowledgebase repository.

## Repository Root

The repository root is:

```text
D:\Game\FOTN\knowledge
```

The parent folder `D:\Game\FOTN` should contain only:

- `founder-of-the-north/`
- `knowledge/`

Hidden `.git` metadata may still exist in the parent folder, but it is not content managed by this KB repository.

## In Scope For The Game Design Knowledgebase

- `kb/`
- `tools/validate_kb/`
- `tools/kb_importer/`
- root audit, state, backlog, and validation files
- `kb-portal/` only when generated from safe exports

## Out Of Scope For KB Release

- `../founder-of-the-north/`: game project content
- `docs/deprecated/BOOKOS_REBUILD_INSTRUCTION_DEPRECATED.md`: legacy BookOS/readings-app instruction retained only as historical context
- `_private_sources/`: private source quarantine ignored by `.gitignore` except its README
- `50-game-design-masters-kb/`: legacy snapshot unless re-audited
- any BookOS, forum CRUD, reading session, user auth, or personal library feature

## P0 Rule

No release artifact may contain high-risk source body text, long quotes, generated chapter summaries, embeddings, or cards derived from high-risk body text.
