# Game Design Knowledgebase Acceptance Review

Review date: 2026-04-27
Reviewed repository path: `D:\Game\FOTN`
Current standalone KB repository root: `D:\Game\FOTN\knowledge`
Primary KB path reviewed: `kb`

## 1. Executive Verdict

- Verdict: CONDITIONALLY_ACCEPTED
- Reason: P0 source-governance repairs are complete. The repository now has a root `/kb` canonical KB structure, unsafe legacy private-library extraction artifacts were removed from release scope, portal data was regenerated from safe exports, and repo-wide validation reports 0 P0 issues. Remaining gaps are P1/P2 hardening and source-backed content promotion.
- Overall score out of 100: 78
- P0 blocker count: 0
- P1 major gap count: 10
- P2 improvement count: 8
- Directional risk: ON_TRACK

P0 repair validation: `node .\tools\validate_kb\validate_kb.js` passes with 0 P0 issues. See `VALIDATION_REPORT.md`.

## Repository Boundary Migration 2026-04-27

The KB repository boundary has been moved into `D:\Game\FOTN\knowledge`.

Migration result:

- Root-level `kb/`, `tools/`, audit files, state files, validation reports, README, and release-boundary docs were moved into `knowledge/`.
- Parent folder `D:\Game\FOTN` now has only visible content folders `founder-of-the-north/` and `knowledge/`.
- Future repository management should treat `D:\Game\FOTN\knowledge` as the repo root.
- `D:\Game\FOTN\founder-of-the-north` is a sibling game project and remains out of scope for the general KB.
- Hidden parent `.git` metadata was not moved or merged for safety.

## Phase 1 Content Review 2026-04-27

Review scope: canonical root `/kb` source-governed content release only. No app, forum, reading-note, or user-auth features were reviewed or added.

Verdict: PASS_WITH_WARNINGS.

Evidence:

- 19 GameDesignWork entries.
- 19 source-safe dossier shells.
- 109 concept cards.
- 104 original design lens cards.
- 20 workflow packs.
- 85 exercise cards.
- 164 claim graph entries.
- 856 exported entities.
- 8383 exported relationships.
- 734 search documents.
- Validation result: PASS, 0 P0 issues, 488 warnings.

Decision: Phase 1 is accepted as a source-governed draft release. It should proceed to P1 hardening before any Phase 2 content expansion.

Review report: `kb/12_quality/PHASE_1_CONTENT_REVIEW.md`.

## P0 Re-Review 2026-04-27

Re-review scope: P0 blockers only. No content expansion, app work, reading-note feature, or forum feature was reviewed or added.

| P0 ID | Previous Issue | Current Status | Evidence | Accepted? | Remaining Fix |
|---|---|---|---|---|---|
| P0-001 | Legacy private-library artifacts contained high-risk source body text | resolved | `knowledge/50-game-design-masters-kb/raw/private-library/extracted` has 0 JSON files; repo scan found no `preview_text` or `sample_sections` body fields in unsafe surfaces | yes | none for P0; stale manifest paths may be cleaned in P1 |
| P0-002 | Portal data indexed high-risk source artifacts | resolved | `knowledge/kb-portal/data.js` and `content.js` were regenerated from safe `/kb` search export; validator reports 0 P0 | yes | none |
| P0-003 | Extraction scripts could process private books without legal sidecar gate | resolved | `knowledge/kb-tools/extract-private-book-artifacts.mjs` blocks body extraction pending legal sidecar; Python extractor hard-stops | yes | none |
| P0-004 | Legal/source audit scope was too narrow | resolved | `tools/validate_kb/validate_kb.js` performs repo-wide P0 checks and passes | yes | none |
| GAP-P0-005 | Accepted release boundary was unclear | resolved | root `README.md`, `RELEASE_BOUNDARY.md`, canonical `/kb`, and `/tools/validate_kb` exist | yes | none |
| GAP-P0-006 | Unsafe search excerpts were possible | resolved | `VALIDATION_REPORT.md` shows 0 P0; metadata-only search excerpts remain suppressed | yes | none |

P0 verdict: PASS.

Remaining blockers: none at P0.

Phase 1 content expansion may begin only after running P1 hardening prompt; do not ingest high-risk source bodies.

Next exact prompt: `continue-kb-p1`.

## 2. Project Identity Check

- Is this repository actually a Game Design Knowledgebase? Partially. `knowledge/kb` is clearly a structured Game Design Knowledgebase with governance, sources, works, ontology, cards, lenses, workflows, exercises, schemas, validation exports, and quality reports.
- Is it drifting into a reading notes app? Yes, in legacy inputs. `knowledge/rebuild_instruction.md` describes BookOS, reading sessions, quote books, personal library, daily sentence, and forum features. Those are not the current KB mission.
- Is it drifting into a forum app? Partially. The current `kb/10_forum_templates` are acceptable discussion templates, but `rebuild_instruction.md` contains full forum CRUD/product requirements that are out of scope.
- Is it drifting into a general web app? Partially. `knowledge/kb-portal` is a static browser/search portal, which can be acceptable if secondary. However it currently includes legacy high-risk search data and project/workbench concepts.
- What is the primary evidence? The accepted KB core is under `knowledge/kb`; the risky/legacy layers are `knowledge/50-game-design-masters-kb`, `knowledge/kb-portal`, `knowledge/kb-tools`, and `knowledge/rebuild_instruction.md`.

## 3. Files Inspected

| Path | Exists | Purpose | Status | Notes |
|---|---:|---|---|---|
| `README.md` | no | root repo entry | missing | Root has no KB-first README. |
| `knowledge/README.md` | yes | knowledge folder entry | partial | Says private source files are not included, but local folder contains ignored high-risk PDFs/EPUBs. |
| `SPEC.md` | no | implementation spec | missing | No root spec. |
| `KB_STATE.md` | no | root state | missing | Exists only at `knowledge/kb/KB_STATE.md`. |
| `IMPLEMENTATION_LOG.md` | no | root implementation log | missing | Exists only at `knowledge/kb/IMPLEMENTATION_LOG.md`. |
| `TODO.md` | no | root todo | missing | Exists only at `knowledge/kb/TODO.md`. |
| `LEGAL_SOURCE_POLICY.md` | no | root policy | missing | Exists under `knowledge/kb/00_governance`. |
| `SOURCE_BASIS_ENUM.md` | no | root enum | missing | Exists under `knowledge/kb/00_governance`. |
| `CONFIDENCE_MODEL.md` | no | root confidence model | missing | Exists under `knowledge/kb/00_governance`. |
| `COVERAGE_MATRIX.md` | no | root coverage report | missing | Exists under `knowledge/kb/12_quality`. |
| `knowledge/kb` | yes | new KB core | complete | Strong structured draft KB. |
| `knowledge/kb/00_governance` | yes | governance | complete | Good policy layer. |
| `knowledge/kb/01_sources` | yes | source audit | complete | 17 source records, 14 high-risk quarantined. |
| `knowledge/kb/02_ontology` | yes | ontology | complete | Phase, domain, entity, relationship, tag system present. |
| `knowledge/kb/03_works` | yes | work registry | complete | 19 works registered. |
| `knowledge/kb/04_dossiers` | yes | dossier shells | partial | 19 draft dossiers; no user notes/legal sidecars. |
| `knowledge/kb/05_cards` | yes | card library | partial | 164+ cards, but 5 placeholder README card folders lack frontmatter. |
| `knowledge/kb/06_lenses` | yes | design lenses | complete | 104 lenses, original and draft-labeled. |
| `knowledge/kb/07_lessons` | yes | lessons | complete | 84 lessons; useful but draft/source-light. |
| `knowledge/kb/08_workflows` | yes | workflows/exercises/prompts | complete | 20 workflows, 85 exercises, 15 prompts. |
| `knowledge/kb/10_forum_templates` | yes | discussion templates | partial | Acceptable as templates, not a forum app. |
| `knowledge/kb/11_import_export` | yes | schemas/export/import | partial | Exports exist; schemas are permissive. |
| `knowledge/kb/12_quality` | yes | audits/release docs | partial | Strong self-audit, but does not cover legacy high-risk artifacts outside `knowledge/kb`. |
| `knowledge/tools/kb_importer/import_kb.js` | yes | importer/exporter | usable | Generates exports and validation report. |
| `knowledge/50-game-design-masters-kb` | yes | legacy KB | violation | Contains private-library extracted artifacts with sample text/preview text from high-risk sources. |
| `knowledge/kb-portal/data.js` | yes | static portal data | violation | Contains search entries and links to high-risk source files/extracted artifacts. |
| `knowledge/rebuild_instruction.md` | yes | legacy BookOS instruction | out_of_scope | Reading OS/forum/product spec, not KB acceptance target. |
| `founder-of-the-north` | yes | game project | out_of_scope | Should remain separate from generic KB review. |

## 4. Current Implementation Matrix

| Area | Expected for KB | Actual in Repo | Status | Evidence | Severity | Required Fix |
|---|---|---|---|---|---|---|
| Direction | KB-first repo | New KB exists, but repo also contains game project and legacy BookOS direction | partial | `knowledge/kb`, `founder-of-the-north`, `knowledge/rebuild_instruction.md` | P1 | Declare one canonical KB root and quarantine or remove legacy/out-of-scope layers from release. |
| Source governance | High-risk files metadata-only | New KB complies; legacy extraction artifacts violate | violation | `knowledge/50-game-design-masters-kb/raw/private-library/extracted/*.json` | P0 | Remove generated body-text artifacts and block extraction without legal sidecars. |
| Source audit | SourceDocument registry | Present with 17 sources and 14 high-risk quarantined | complete | `knowledge/kb/01_sources/sources.json` | none | Keep. |
| Work registry | Structured works | Present with 19 works | complete | `knowledge/kb/03_works/works.json` | none | Add official metadata later. |
| Ontology | phase/domain/entity/relation/tag | Present | complete | `knowledge/kb/02_ontology` | none | Tighten machine constraints later. |
| Card system | source-governed cards | 164+ generated cards, mostly draft | partial | `knowledge/kb/05_cards` | P1 | Convert placeholder folders into real typed cards or remove from entity scan. |
| Lens system | original diagnostic lenses | 104 draft lenses | complete | `knowledge/kb/06_lenses/cards` | none | Add evidence links later. |
| Workflow packs | process assets | 20 workflow packs | complete | `knowledge/kb/08_workflows/packs` | none | Add real project examples later. |
| Exercises | original exercises | 85 exercises | complete | `knowledge/kb/08_workflows/exercises` | none | Consider moving to `/kb/08_exercises` if repo standard matters. |
| Claims/evidence | claims separated and labeled | 164 claims, all weak/draft | usable | `knowledge/kb/05_cards/claim_graph.json` | P1 | Add evidence refs from legal/user notes before promotion. |
| Graph | relationship exports | 856 nodes, 8383 edges | complete | `knowledge/kb/11_import_export/export` | none | Add graph QA tests. |
| Frontmatter | universal YAML frontmatter | Most entity files have it; some placeholder README files do not | partial | 5 entity folder README files missing source_basis/confidence | P1 | Exclude README placeholders or add valid frontmatter. |
| JSON schemas | strict validation | Schemas exist but allow additionalProperties | partial | `card.schema.json` has `additionalProperties: true` | P1 | Tighten schemas and enforce required entity-specific fields. |
| Validation | detects legal/schema errors | Import report detects core rules, 41 warnings | partial | `import_report.md`, `validation_issues.json` | P1 | Add legacy artifact scanner and fail on high-risk body text. |
| Import/export | JSON exportable | Exports exist | complete | `all_entities.json`, `search_index.json`, graph exports | none | Regenerate after P0 cleanup. |
| Coverage | phase/domain matrix | Present | complete | `knowledge/kb/12_quality/COVERAGE_MATRIX.md` | none | Update after P0 cleanup. |
| Legal audit | repo-level audit | New KB audit passes, repo-level fails | violation | Legacy private-library extraction and portal data | P0 | Audit entire repository, not only `knowledge/kb`. |
| Documentation | maintenance docs | Good inside KB, missing root docs | partial | `knowledge/kb/12_quality/KB_README.md`; root missing | P1 | Add root README and release boundary. |
| Maintainability | repeatable pipeline | Importer exists, but multiple overlapping pipelines exist | partial | `knowledge/tools`, `knowledge/kb-tools` | P1 | Separate approved importer from legacy unsafe extractor. |
| Usefulness | usable KB assets | Strong draft KB, but mostly unsupported | usable | Cards/lenses/workflows are draft-labeled | P1 | Add user notes/legal sources for verified release. |

## 5. Repository Structure Review

The new KB core has a coherent KB-first structure under `knowledge/kb`, but the repository root does not match the expected shape. Expected root-level `/kb`, `/tools`, `/docs`, and governance files are instead nested under `knowledge/kb` and `knowledge/tools`.

This difference is partially justified by the recent migration that moved the knowledge base out of `founder-of-the-north`. It is not fully acceptable for a GitHub KB repo because there is no root README explaining that `knowledge/kb` is canonical and that `knowledge/50-game-design-masters-kb` is legacy/quarantined.

The repository also contains `founder-of-the-north`, a game project. That is acceptable only if the repo is explicitly a monorepo. If the intended GitHub project is solely "Game Design Knowledgebase", the game project should be outside the repo or clearly excluded from KB release validation.

## 6. Source Governance Review

Strengths:

- `knowledge/kb/00_governance` defines legal source policy, source basis enum, and confidence model.
- `knowledge/kb/01_sources/sources.json` classifies 14 high-risk source records as `metadata_only_quarantined`.
- `knowledge/kb/03_works/works.json` keeps high-risk works at `metadata_only` / `weak`.
- New cards, lenses, lessons, workflows, exercises, and prompts generally include `source_basis` and `confidence`.
- `knowledge/kb/11_import_export/import_report.md` reports 0 missing source_basis and 0 missing confidence for exported entities.

Blocking failures:

- `knowledge/50-game-design-masters-kb/raw/private-library/extracted/*.json` contains `sample_sections` and `preview_text` from high-risk private source files.
- `knowledge/kb-portal/data.js` contains generated search data that references high-risk source filenames and extracted private-library artifacts.
- `knowledge/kb-tools/extract_private_book_artifacts.py` and `knowledge/kb-tools/extract-private-book-artifacts.mjs` implement extraction of sample sections and preview text without a visible legal-sidecar gate.
- `knowledge/kb/12_quality/LEGAL_AUDIT_REPORT.md` only audits the new KB layer and therefore gives a pass that is not valid for the entire repository.

## 7. Work Registry Review

The work registry is one of the strongest parts of the new KB. It registers the expected core works and correctly marks most uploaded files as metadata-only/high-risk. It includes:

- Game Feel
- Play Matters
- The Aesthetic of Play
- The Art of Game Design
- The Game Design Reader
- A Theory of Fun for Game Design
- Advanced Game Design
- Challenges for Game Designers
- Game Design Workshop
- Game Mechanics
- Level Up
- Better Game Characters by Design
- Rules of Play
- MDA
- Formal Abstract Design Tools
- Bartle Player Types
- Chris Crawford works

Status: complete as a metadata-first work registry. It is not yet a verified research corpus because legal sidecars, official metadata links, user notes, and legal excerpts are missing.

## 8. Ontology and Taxonomy Review

The ontology is strong and covers:

- phase groups
- knowledge domains
- entity types
- relationship types
- tag system
- machine-readable `ontology.json`
- machine-readable `relationship_types.json`

Expected phase groups are present in the parsed JSON:

1. 立项与方向
2. 核心玩法与系统设计
3. 数值与经济设计
4. 内容与叙事
5. 美术 / UI / 体验表达
6. 开发实现
7. 测试 / 验收 / 审计
8. 运营与发布

Expected domains are substantially present. Naming is not perfectly normalized across older and newer layers: examples include `rules_and_mechanics` versus `rules_mechanics`, `economy_and_balance` versus `economy_balance`, and `production_process` versus `production`. This is a P1 normalization issue for future imports.

## 9. Card System Review

The current card system is structurally useful. It includes:

- 109 concept card drafts
- 15 framework card drafts
- 10 application card drafts
- 15 checklist card drafts
- 15 prompt card drafts
- placeholder quote/comparison/exercise/anti-pattern/case-study README files

Most real card files include:

- card_id
- card_type
- title
- source_basis
- confidence
- phase_groups
- domains
- related_works
- evidence_refs
- when_to_use
- when_not_to_use
- status

Problems:

- Five placeholder README files are located inside entity card folders and lack frontmatter/source_basis/confidence.
- 41 validation warnings show cards without related works.
- Most cards are intentionally `weak` or `unsupported_draft`, so they are scaffolds rather than verified knowledge.

## 10. Design Lens Review

The design lens bank is strong as an original diagnostic question system:

- 104 lens files exist.
- Lenses have diagnostic questions and AI review prompts.
- They are marked `unsupported_draft`, which is appropriate because they are original tools rather than sourced claims.
- They are grouped by phase and domain.

Issue:

- Lens frontmatter uses `domain` singular rather than the universal `domains` array. The importer accepts this, but the frontmatter standard should either allow this explicitly or normalize it.

No evidence of copied proprietary lens text was found in the new `knowledge/kb/06_lenses` layer.

## 11. Workflow Pack Review

The workflow pack system is useful and aligned with KB goals:

- 20 required workflow packs exist.
- Each sampled workflow has required inputs, step-by-step process, output artifacts, quality checklist, related cards, related lenses, source_basis, and confidence.
- Workflows are source-safe because they are labeled `unsupported_draft` and do not claim to summarize books.

Issue:

- Workflows are mostly generic scaffolds. They need real project overlay examples and evidence-backed card links before being treated as mature production methodology.

## 12. Exercise System Review

The exercise system is good as an original practice layer:

- 85 exercise files exist.
- Exercise categories appear to cover ideation, mechanics, decisions, systems/economy, game feel, UI/feedback, narrative/world, ethics/community, and pitch/release.
- Exercises are marked `unsupported_draft`, which is appropriate.

Issue:

- Exercises live under `knowledge/kb/08_workflows/exercises` rather than the expected `/kb/08_exercises`. This is acceptable if documented, but currently the repo shape differs from the expected acceptance shape.
- Exercise frontmatter does not consistently expose a `domains` array under the universal standard.

## 13. Claim / Evidence / Confidence Review

The new KB handles claim confidence conservatively:

- `claim_graph.json` contains 164 claims.
- No high-confidence or verified claims were observed.
- Cards generally avoid saying "according to [book]" without evidence.
- Related works are treated as routing metadata, not evidence.

Major limitation:

- Evidence is mostly absent. The system is a strong scaffold, not a verified knowledge corpus.
- Legacy artifacts outside `knowledge/kb` violate this model by containing extracted source text.

## 14. Validation Pipeline Review

The new importer can detect:

- missing source_basis
- missing confidence
- unsupported verified claim
- high-risk source used as summary basis
- broken relationship link
- duplicate ID
- missing phase group
- missing domain
- card without related work
- lens without diagnostic questions
- workflow without output artifact
- lesson without exercise
- prompt without guardrails

Current import report:

- 856 entities exported
- 8383 relationships exported
- 734 search documents exported
- 41 warnings
- Warning class: `card_without_related_work`

Blocking gap:

- The validation pipeline does not scan the whole repository for legacy high-risk body text artifacts. It validates `knowledge/kb` but misses `knowledge/50-game-design-masters-kb` and `knowledge/kb-portal/data.js`.

## 15. Import / Export Review

The KB exports exist:

- `knowledge/kb/11_import_export/export/all_entities.json`
- `knowledge/kb/11_import_export/export/all_relationships.json`
- `knowledge/kb/11_import_export/export/search_index.json`
- `knowledge/kb/11_import_export/export/graph_nodes.json`
- `knowledge/kb/11_import_export/export/graph_edges.json`
- `knowledge/kb/11_import_export/import_report.md`

The export pipeline is usable for a draft KB. It must be rerun after P0 cleanup because legacy portal/search data currently contradicts source governance.

## 16. Coverage Review

Coverage is broad and useful:

- All 8 phase groups have coverage.
- Major domains have some coverage.
- At least 100 cards exist.
- At least 100 lenses exist.
- At least 60 lessons exist.
- At least 20 workflow packs exist.
- At least 80 exercises exist.

Weakest coverage areas are not quantity but evidence quality:

- legal sidecars: none
- user reading notes: none
- verified claims: none
- project overlays: placeholders only
- playtest logs: absent
- high-risk legacy artifacts: present outside new KB audit

## 17. Out-of-Scope Audit

| Feature/File | Why Out of Scope | Risk | Keep / Remove / Defer |
|---|---|---|---|
| `knowledge/rebuild_instruction.md` | Describes BookOS, reading sessions, login, quote book, daily sentence, forum CRUD, user library | Causes direction drift | Defer or archive outside release scope |
| `founder-of-the-north` | Game project, not general KB | Confuses repo identity if this is a KB-only repo | Keep only in monorepo with clear boundary |
| `knowledge/kb-portal` project workbench/profile UI | Optional static browser, not core KB | Can pull product direction toward app UI | Defer until source data is safe |
| `knowledge/50-game-design-masters-kb` legacy layer | Old structure and unsafe extraction artifacts | P0 legal/source-governance risk | Remove from release or quarantine outside repo |
| `knowledge/kb/10_forum_templates` | Discussion templates are acceptable, but not forum app | Low risk if kept as templates only | Keep as templates, no CRUD |
| `knowledge/kb-tools/extract_private_book_artifacts.py` | Extracts private book body samples | Violates current legal governance unless gated | Disable or require sidecar gate |

## 18. P0 Blockers

| ID | Issue | Evidence | Impact | Required Fix | Acceptance Criteria |
|---|---|---|---|---|---|
| P0-001 | Legacy private-library artifacts contain high-risk source body text | `knowledge/50-game-design-masters-kb/raw/private-library/extracted/*.json` had `sample_sections` and `preview_text` | Repository violated metadata-only rule | completed | `extracted/*.json` removed; removal report created. |
| P0-002 | Portal data indexes high-risk source artifacts | `knowledge/kb-portal/data.js` referenced high-risk filenames and extracted private-library JSON | Search surface could expose restricted content | completed | Portal `data.js` and `content.js` regenerated from safe root `/kb` search export. |
| P0-003 | Extraction scripts can process private books without legal sidecar gate | `knowledge/kb-tools/extract_private_book_artifacts.py`, `extract-private-book-artifacts.mjs` | Future runs could recreate violations | completed | Scripts now block body extraction and report `blocked_pending_legal_sidecar`. |
| P0-004 | Legal audit scope is too narrow | Previous audit only covered `knowledge/kb` | False release confidence | completed | `tools/validate_kb/validate_kb.js` performs repo-wide legacy artifact and portal safety scans. |

## 19. P1 Major Gaps

| ID | Issue | Evidence | Impact | Required Fix | Acceptance Criteria |
|---|---|---|---|---|---|
| P1-001 | Root repository identity is unclear | root has no README/KB_STATE/policy files | Users and CI cannot identify canonical KB root | Add root README pointing to `knowledge/kb` or move KB to root `/kb` | Root explains scope and release boundary. |
| P1-002 | Root contains both game project and KB | `founder-of-the-north` plus `knowledge` | Acceptance target is ambiguous | Document monorepo layout or split repos | KB validation ignores game project by design. |
| P1-003 | Placeholder card folders lack frontmatter | 5 README placeholders in entity folders | Violates universal entity contract if scanned | Exclude placeholders or add typed placeholder frontmatter | 0 entity markdown files missing source_basis/confidence. |
| P1-004 | 41 cards lack related works | `validation_issues.json` | Retrieval/evidence routing weaker | Add related works or mark as governance/tool cards exempt | Import report has 0 warnings or documented exemptions. |
| P1-005 | Schemas are permissive | `additionalProperties: true` | Invalid fields can slip through | Tighten schemas after current data normalized | Schemas reject unknown critical fields and invalid entity shape. |
| P1-006 | Domain vocabulary is split | `rules_and_mechanics` vs `rules_mechanics`; similar variants | Graph/search fragmentation | Add canonical domain mapping | All exports use one domain vocabulary. |
| P1-007 | No legal sidecars | source audit says 0 approved sidecars | No verified source-backed book knowledge | Add sidecar examples and user-provided legal notes | At least one work can be legally promoted. |
| P1-008 | Most claims are scaffolds | 164 draft/weak claims | KB cannot claim masterclass authority yet | Add evidence-backed notes and promote selected claims | Top concepts have evidence_refs and confidence upgraded. |
| P1-009 | Multiple toolchains overlap | `knowledge/tools/kb_importer` and `knowledge/kb-tools` | Maintainers may run unsafe old pipeline | Mark approved pipeline and quarantine legacy scripts | One documented safe build command exists. |
| P1-010 | Project overlays are placeholders | `knowledge/kb/09_project_overlays` | KB not yet proven in production use | Add general overlay schema and one sanitized example | Project application workflow can be validated. |

## 20. P2 Improvements

| ID | Improvement | Benefit | Priority |
|---|---|---|---|
| P2-001 | Add CI command for repo-wide source governance scan | Prevents recurrence of P0 issues | high |
| P2-002 | Add root `/docs` with KB maintainer guide | Easier onboarding | medium |
| P2-003 | Add graph QA report for orphan nodes and high-degree hubs | Better retrieval quality | medium |
| P2-004 | Add source sidecar examples for purchased/library-owned books | Faster legal promotion | high |
| P2-005 | Add official metadata fetch plan for each work | Improves bibliography quality | medium |
| P2-006 | Add controlled ID conventions document | Reduces duplicate/variant IDs | medium |
| P2-007 | Add static portal build from safe exports only | Makes UI safe and reproducible | high |
| P2-008 | Add release boundary manifest | Makes accepted/rejected files explicit | high |

## 21. Final Recommendation

- Should development continue? Yes. Continue with P1 hardening after P0 cleanup.
- Should the repo be restructured? P0 root structure is now repaired by adding canonical `/kb`; future P1 cleanup should remove or archive legacy layers.
- What should be fixed first? Resolve remaining validation warnings, normalize schema/domain vocabulary, and add root documentation.
- What should be explicitly deferred? Login, personal library, reading sessions, forum CRUD, daily sentence, general BookOS app features, and project-specific game content.
- What exact next build prompt should be used?

```text
continue-kb-p1: Perform only P1 hardening for the Game Design Knowledgebase. Do not add app features. Fix placeholder entity frontmatter, resolve card related-work warnings or documented exemptions, normalize domain vocabulary, tighten schemas after data normalization, add root KB README/release boundary docs, and keep repo-wide validation at 0 P0 issues.
```
