# Coverage Matrix

This coverage matrix summarizes the acceptance-review view for the standalone `knowledge/` repository. The detailed generated matrix remains at `kb/12_quality/COVERAGE_MATRIX.md`.

## Phase 1 Content Release Summary

Date: 2026-04-27

Phase 1 content target is met by the canonical root `/kb` release.

| Content Requirement | Target | Current | Status |
|---|---:|---:|---|
| GameDesignWork entries | 12 | 19 | pass |
| source-safe dossier shells | 12 | 19 | pass |
| concept cards | 30 | 109 | pass |
| original design lens cards | 20 | 104 | pass |
| workflow packs | 10 | 20 | pass |
| exercise cards | 20 | 85 | pass |
| claim graph file | 1 | 1 | pass |
| relationship graph export | 1 | 1 | pass |
| search index export | 1 | 1 | pass |
| coverage matrix | 1 | 1 | pass |

Structured export counts:

| Export | Count |
|---|---:|
| all_entities.json | 856 |
| all_relationships.json | 8383 |
| search_index.json | 734 |
| graph_nodes.json | 856 |
| graph_edges.json | 8383 |

Validation result: `PASS`, 0 P0 issues, 488 warnings.

Phase 1 content review verdict: `PASS_WITH_WARNINGS`. The release is accepted as a source-governed draft KB; proceed to P1 hardening before Phase 2 expansion.

Repository boundary: `D:\Game\FOTN\knowledge` is now the uploadable KB repository root. The sibling `D:\Game\FOTN\founder-of-the-north` folder is out of scope.

## Structural Coverage

| Area | Coverage | Quality | Notes |
|---|---:|---|---|
| phase groups | 8 / 8 | strong | All required phase groups exist. |
| major domains | broad | adequate | Some domain naming aliases remain. |
| source governance docs | present | strong in KB | Repository boundary has been moved to `knowledge/`. |
| source registry | 17 records | strong | 14 high-risk records quarantined in new KB. |
| work registry | 19 works | strong | Metadata-first, not verified. |
| dossiers | 19 draft shells | adequate | User notes/legal sidecars missing. |
| cards | 164+ | adequate | Most are draft/evidence-light. |
| lenses | 104 | strong | Original diagnostic lenses. |
| lessons | 84 | strong | Curriculum scaffold. |
| workflows | 20 | strong | Usable process assets. |
| exercises | 85 | strong | Original exercises. |
| prompt templates | 15 | adequate | Useful but governance display required. |
| graph export | 856 nodes / 8383 edges | strong | Needs graph QA. |
| search export | 734 docs | adequate | Current export is safe; portal must continue to be regenerated only from safe exports. |

## Phase Coverage

| Phase Group | Coverage Rating | Main Evidence | Gap |
|---|---|---|---|
| 立项与方向 | strong | works/cards/lenses/workflows | needs evidence-backed examples |
| 核心玩法与系统设计 | strong | large card/lens/workflow coverage | needs legal/user notes |
| 数值与经济设计 | adequate | economy workflow and systems cards | some cross-domain gaps |
| 内容与叙事 | adequate | narrative/world cards and workflow | source evidence sparse |
| 美术 / UI / 体验表达 | adequate | game feel/UI lenses and workflows | source evidence sparse |
| 开发实现 | adequate | implementation workflows/checklists | not primary KB focus |
| 测试 / 验收 / 审计 | strong | playtest/audit workflows and validation | needs actual playtest logs |
| 运营与发布 | adequate | release readiness workflow | needs product examples |

## Domain Coverage Weaknesses

| Domain | Current Weakness | Recommended Addition |
|---|---|---|
| prompt_engineering | mostly workflow/prompt scaffolds | add KB-specific prompt validation examples |
| business | draft coverage | add official metadata and pitch examples |
| ethics | draft coverage | add source-backed ethical review claims |
| community | mostly generic | add multiplayer/community source notes |
| narrative_world_character | adequate but source-light | add user notes from legal narrative design sources |
| economy_balance | good workflow coverage | add worked balance examples |

## Acceptance Note

Coverage quantity is sufficient. Acceptance is blocked by source governance, not by missing volume.
