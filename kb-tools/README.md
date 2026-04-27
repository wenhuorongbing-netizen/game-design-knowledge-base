# Deprecated Legacy KB Tools

`kb-tools/` is not the authoritative Game Design Knowledgebase pipeline.

- Status: legacy
- Users: maintainers only for explicit audited legacy work
- Edit: no by default
- Updated by: do not run unless `ALLOW_LEGACY_KB_TOOLS=true`

Use the root commands instead:

```powershell
npm run kb:export
npm run kb:validate
npm run kb:coverage
npm run kb:audit
```

These legacy scripts target the old `50-game-design-masters-kb` snapshot and private-source intake experiments. They are hard-guarded and must not run accidentally.

To run a legacy script for an explicit audited maintenance task only:

```powershell
$env:ALLOW_LEGACY_KB_TOOLS = "true"
node .\kb-tools\<script>.mjs
```

Rules:

- Do not parse PDF/EPUB body text.
- Do not generate embeddings from high-risk source files.
- Do not extract private-library text.
- Do not treat `user_provided_file` as legal AI-processing permission.
- Do not use these tools as the default build path.
