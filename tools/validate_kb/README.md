# validate_kb

Repo-wide P0 validator for the Game Design Knowledgebase.

Run from the repository root:

```powershell
node .\tools\validate_kb\validate_kb.js
```

The validator checks the canonical root `/kb` and scans legacy generated surfaces for high-risk source-body artifacts. It does not read PDF/EPUB/archive bodies.

