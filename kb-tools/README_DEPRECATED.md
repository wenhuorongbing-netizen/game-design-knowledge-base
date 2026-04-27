# Deprecated Legacy Toolchain

`kb-tools/` is not the authoritative Game Design Knowledgebase pipeline.

Authoritative commands live at the repository root:

```powershell
npm run kb:export
npm run kb:validate
npm run kb:coverage
npm run kb:audit
```

The authoritative pipeline operates on `/kb`.

Legacy scripts in this folder were originally created for the older `50-game-design-masters-kb` snapshot and private-source intake experiments. They must not be used as the default build path.

Rules:

- Do not parse PDF/EPUB body text.
- Do not generate embeddings from high-risk source files.
- Do not extract private-library text.
- Do not treat `user_provided_file` as legal AI-processing permission.
- Use legal sidecars before any body-level processing is considered.

`build-all.mjs` is hard-blocked. Other scripts are retained for explicit audited maintenance only.
