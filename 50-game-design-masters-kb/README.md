# Legacy Snapshot

This folder is a legacy snapshot from an earlier Game Design KB build.

- Status: legacy
- Users: maintainers only for explicit re-audit or migration work
- Edit: no by default
- Updated by: no default command; do not use legacy scripts unless explicitly approved and guarded

This folder is not canonical. Current canonical KB content lives in:

```text
../kb/
```

Current authoritative commands live at the repository root:

```powershell
npm run kb:export
npm run kb:validate
npm run kb:coverage
npm run kb:audit
```

Do not use old instructions or old `kb-tools/build-all.mjs` commands from this snapshot. The legacy toolchain is deprecated and guarded.

Do not parse, summarize, quote, embed, or transform any high-risk source body text from this folder unless a future audited migration explicitly permits a metadata-only or legal-sidecar workflow.
