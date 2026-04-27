# Maintainer Checklist

Use this before and after any repository maintenance change.

## Before Editing

- [ ] Read [START_HERE.md](START_HERE.md).
- [ ] Read [WHAT_NOT_TO_TOUCH.md](WHAT_NOT_TO_TOUCH.md).
- [ ] Confirm the change is KB-first, not app/product work.
- [ ] Confirm high-risk source body text will not be parsed.
- [ ] Confirm whether the target file is source, generated, legacy, deprecated, optional, or private/local by checking [REPO_MAP.md](REPO_MAP.md).

## Safe Edit Targets

- [ ] Root human-entry docs such as `START_HERE.md`, `HOW_TO_USE_THIS_KB.md`, and `HOW_TO_ADD_KNOWLEDGE.md`.
- [ ] Governance docs under `kb/00_governance/`.
- [ ] Source metadata under `kb/01_sources/`.
- [ ] Work metadata under `kb/03_works/`.
- [ ] Entity Markdown under `kb/04_dossiers/`, `kb/05_cards/`, `kb/06_lenses/`, `kb/07_lessons/`, and `kb/08_workflows/`.
- [ ] Tooling under `tools/` when validation/export behavior must change.

## Unsafe Edit Targets

- [ ] Do not manually edit `kb/11_import_export/export/*.json`.
- [ ] Do not edit or parse private PDF/EPUB body text under `_private_sources/`.
- [ ] Do not use `50-game-design-masters-kb/` as canonical.
- [ ] Do not run `kb-tools/` unless explicitly opted in for legacy maintenance.

## Required Commands

After documentation-only changes:

```powershell
npm run kb:validate
```

After KB entity or registry changes:

```powershell
npm run kb:export
npm run kb:validate
```

After source-governance changes:

```powershell
npm run kb:audit
```

## Before Stopping

- [ ] Validation report has `0` P0 issues.
- [ ] Warnings or accepted exceptions are documented honestly.
- [ ] `source_basis`, `confidence`, and `status` remain intact on KB entities.
- [ ] No draft content was promoted to verified without evidence.
- [ ] State files are updated when the change affects project status.
