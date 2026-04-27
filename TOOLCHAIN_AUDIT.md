# Toolchain Audit

Date: 2026-04-27

## Verdict

Status: PASS.

The authoritative Game Design Knowledgebase pipeline is the root `package.json` script set. It operates on `/kb` and does not parse PDF/EPUB body text.

## Authoritative Commands

| Command | Purpose | Scope |
|---|---|---|
| `npm run kb:export` | Regenerate entities, relationships, search index, graph exports, schemas, and import report. | `/kb` only |
| `npm run kb:validate` | Run export, then run repository P0 validator. | `/kb` plus repo safety scan |
| `npm run kb:coverage` | Generate root coverage summary from safe exports. | `/kb/11_import_export/export` |
| `npm run kb:audit` | Generate source governance audit, then run validator. | `/kb` plus repo safety scan |

## Deprecated Toolchain

`kb-tools/` is deprecated legacy tooling for the old `50-game-design-masters-kb` snapshot and private-source intake experiments.

Controls:

- `kb-tools/build-all.mjs` is hard-blocked.
- `kb-tools/README.md` and `kb-tools/README_DEPRECATED.md` document the deprecation.
- Entry scripts in `kb-tools/*.mjs` call `requireLegacyToolOptIn(...)` and exit unless `ALLOW_LEGACY_KB_TOOLS=true`.
- `kb-tools/_common.mjs` explicitly labels the toolchain as deprecated and points legacy paths at `50-game-design-masters-kb` only for opt-in maintenance.
- `kb-tools/ingest-user-files.mjs` defaults user files to `pending_review` / `allowed_metadata_only`, or `metadata_only_quarantined` for high-risk markers.
- Private source body extraction remains disabled.

## P0 Toolchain Rules

- Default build must never parse PDF/EPUB body text.
- Default build must never generate embeddings from high-risk source files.
- Default build must never create verified claims from high-risk source bodies.
- `user_provided_file` does not imply legal AI processing permission.
- Legacy tools cannot run accidentally.

## Result

No P0 toolchain blocker remains.

Latest recheck: default `npm` scripts use `/tools`, not `/kb-tools`; legacy entry scripts remain guarded by `ALLOW_LEGACY_KB_TOOLS=true`.
