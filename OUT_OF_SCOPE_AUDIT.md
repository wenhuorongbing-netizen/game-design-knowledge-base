# Out-of-Scope Audit

The repository must be evaluated as a structured Game Design Knowledgebase, not as BookOS, a reading app, a forum, or a general app.

| Feature/File | Why Out of Scope | Risk | Keep / Remove / Defer |
|---|---|---|---|
| `knowledge/rebuild_instruction.md` | Full BookOS reading operating system specification | Direction drift into reading app/forum/product | Defer/archive outside release |
| login/auth requirements inside `rebuild_instruction.md` | User-auth CRUD is explicitly not part of this KB | Misallocates development effort | Remove from KB roadmap |
| reading sessions in `rebuild_instruction.md` | Personal reading progress is not KB infrastructure | Turns KB into reading tracker | Remove/defer |
| quote book/daily sentence in `rebuild_instruction.md` | Personal book app feature | Legal and scope risk | Remove/defer |
| forum CRUD in `rebuild_instruction.md` | Forum platform not required | Product drift | Remove/defer |
| `knowledge/kb/10_forum_templates` | Discussion templates only; acceptable if not CRUD | Low | Keep as templates only |
| `knowledge/kb-portal` project/profile workbench | Static browsing can be useful; workbench can dominate scope | Medium | Defer until source data safe |
| `founder-of-the-north` | Game project, not general KB | Repo identity confusion | Keep only as monorepo sibling, not KB release |
| `knowledge/50-game-design-masters-kb` | Legacy knowledge folder with old extraction model | P0 legal risk | Quarantine/remove from release |

Conclusion: The current canonical KB should be `knowledge/kb`. Everything else must be explicitly classified as legacy, optional static display, local private material, or out-of-scope.

