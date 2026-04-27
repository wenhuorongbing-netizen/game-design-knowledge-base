# TODO

## Immediate P0

- [x] Remove or quarantine `50-game-design-masters-kb/raw/private-library/extracted/*.json` from repository release scope.
- [x] Regenerate `kb-portal/data.js` only from safe `/kb/11_import_export/export/search_index.json`.
- [x] Disable or gate `kb-tools/extract_private_book_artifacts.py` and `kb-tools/extract-private-book-artifacts.mjs` behind legal sidecar approval.
- [x] Add repo-wide source-governance scan for `preview_text`, `sample_sections.text`, high-risk filenames, and unsafe search excerpts.
- [x] Add root `/kb` as canonical P0 KB structure.
- [x] Add root `/tools/validate_kb` validator.
- [x] Re-run P0 acceptance review and confirm 0 remaining P0 blockers.
- [x] Migrate all KB root files and folders into `D:\Game\FOTN\knowledge` so `knowledge/` is the standalone repository root.

## P1

- [x] Add root KB README and release boundary documentation.
- [x] Complete Phase 1 source-governed content release minimums.
- [x] Regenerate structured exports from canonical root `/kb`.
- [x] Create `/kb/12_quality/PHASE_1_CONTENT_RELEASE.md`.
- [x] Review Phase 1 source-governed content release.
- [ ] Fix 5 placeholder card README files that lack source_basis/confidence.
- [ ] Resolve 41 `card_without_related_work` validation warnings.
- [ ] Normalize domain vocabulary across works, ontology, cards, lenses, workflows, and exports.
- [ ] Tighten JSON schemas after normalization.
- [ ] Add official metadata records for core works.
- [ ] Add legal sidecar examples.
- [ ] Add at least one sanitized project overlay example.

## P2

- [ ] Add graph QA report.
- [ ] Add CI-style validation command documentation.
- [ ] Add safe static portal release process.
- [ ] Add evidence-backed upgrades for top 20 cards after legal/user notes are available.

## Next Exact Prompt

```text
continue-kb-p1-hardening
```
