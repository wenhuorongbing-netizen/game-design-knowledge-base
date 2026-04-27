# Ontology and Schema Audit

## Ontology Review

Status: solid with normalization gaps.

| Area | Status | Evidence | Gap |
|---|---|---|---|
| phase groups | complete | `knowledge/kb/02_ontology/PHASE_GROUPS.md`, `ontology.json` | none |
| cross-domain taxonomy | complete | `MASTER_TAXONOMY.md`, `ontology.json` | domain aliases need normalization |
| entity model | complete | `ENTITY_MODEL.md` | none |
| relationship model | complete | `RELATIONSHIP_MODEL.md`, `relationship_types.json` | none |
| tag system | complete | `TAG_SYSTEM.md` | none |
| machine import readiness | partial | JSON files exist | needs stronger schema validation |

## Phase Groups

Required phase groups are present:

1. 立项与方向
2. 核心玩法与系统设计
3. 数值与经济设计
4. 内容与叙事
5. 美术 / UI / 体验表达
6. 开发实现
7. 测试 / 验收 / 审计
8. 运营与发布

## Domain Normalization Gaps

Observed vocabulary families are close but not identical:

| Concept | Variant A | Variant B | Required Fix |
|---|---|---|---|
| rules/mechanics | `rules_and_mechanics` | `rules_mechanics` | choose one canonical ID |
| economy/balance | `economy_and_balance` | `economy_balance` | choose one canonical ID |
| production | `production_process` | `production` | choose one canonical ID |
| community | `multiplayer_community` | `community` | map old to new |
| business | `business_pitch_release` | `business` | map old to new |

## Schema Review

Schema files exist under `knowledge/kb/11_import_export/schemas`:

- `source_document.schema.json`
- `work.schema.json`
- `dossier.schema.json`
- `card.schema.json`
- `lens.schema.json`
- `lesson.schema.json`
- `exercise.schema.json`
- `workflow_pack.schema.json`
- `prompt_template.schema.json`
- `project_overlay.schema.json`
- `relationship.schema.json`

Issue: schemas are too permissive for acceptance. For example, `card.schema.json` uses `additionalProperties: true`, which is useful during prototyping but weak for release validation.

## Required Fixes

1. Define one canonical domain vocabulary.
2. Add alias migration map for old domain IDs.
3. Tighten schemas after current data is normalized.
4. Ensure lens, exercise, and prompt frontmatter satisfy the universal `domains` and `phase_groups` contract or document typed exceptions.
5. Add schema validation command to CI/release checklist.

