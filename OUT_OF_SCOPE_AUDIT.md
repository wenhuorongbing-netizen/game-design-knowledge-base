# Out-of-Scope Audit

The repository must be evaluated as a structured Game Design Knowledgebase, not as BookOS, a reading app, a forum, or a general app.

| Feature/File | Why Out of Scope | Risk | Keep / Remove / Defer |
|---|---|---|---|
| `docs/deprecated/BOOKOS_REBUILD_INSTRUCTION_DEPRECATED.md` | Deprecated BookOS reading operating system specification | Low after deprecation header and root KB rebuild instruction | Keep only as historical context |
| login/auth requirements inside deprecated BookOS instruction | User-auth CRUD is explicitly not part of this KB | Low after deprecation | Keep deprecated only |
| reading sessions in deprecated BookOS instruction | Personal reading progress is not KB infrastructure | Low after deprecation | Keep deprecated only |
| quote book/daily sentence in deprecated BookOS instruction | Personal book app feature | Low after deprecation | Keep deprecated only |
| forum CRUD in deprecated BookOS instruction | Forum platform not required | Low after deprecation | Keep deprecated only |
| `knowledge/kb/10_forum_templates` | Discussion templates only; acceptable if not CRUD | Low | Keep as templates only |
| `knowledge/kb-portal` project/profile workbench | Static browsing can be useful; workbench can dominate scope | Medium | Defer until source data safe |
| `founder-of-the-north` | Game project, not general KB | Repo identity confusion | Keep only as monorepo sibling, not KB release |
| `knowledge/50-game-design-masters-kb` | Legacy knowledge folder with old extraction model | Low after explicit quarantine marker | Keep quarantined unless separately re-audited |
| `knowledge/_private_sources` | Local private source quarantine | Medium if force-added or parsed | Keep ignored; metadata-only unless legal sidecar permits more |

Conclusion: The current canonical KB should be `knowledge/kb`. Everything else must be explicitly classified as legacy, optional static display, local private material, or out-of-scope.
