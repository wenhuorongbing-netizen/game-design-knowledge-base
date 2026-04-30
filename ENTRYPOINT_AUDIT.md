# Entrypoint Audit

Date: 2026-04-30

## Summary

The repository has enough entrypoints, but they are not ranked by user intent. The current entry system is suitable for a maintainer. It is less suitable for a first-time user who wants to use the AI framework immediately.

## Entrypoint Review

| Entrypoint | Current role | Strength | Weakness | Recommended action |
|---|---|---|---|---|
| `README.md` | Repository identity and navigation | Starts with `START_HERE.md`, clear identity, commands present. | Still broad and repository-oriented. | Add a prominent hands-on start link after it exists. |
| `START_HERE.md` | Human entry point | Clear answers to common questions. | Too many links before the first practical prompt. | Add "If you want to use this now, open `HANDS_ON_START.md`." |
| `AI_MASTER_RUNTIME_START_HERE.md` | Runtime first file | Strong operational flow. | Assumes user understands runtime context and knows why to load files. | Link from hands-on layer as "what the AI should load." |
| `AI_MASTER_RUNTIME_USER_GUIDE.md` | Human runtime guide | Practical and concise. | Still asks user to choose among task types without examples. | Reuse content in hands-on layer. |
| `AI_MASTER_HOW_TO_USE_TODAY.md` | Practical advice | Good safety and interaction pattern. | Not exposed as the first-use path. | Promote as supporting file. |
| `MASTER_PROBLEM_SOLVER_INDEX.md` | Problem-to-route map | Strong coverage of design problems. | Too long for a first session. | Use it behind simplified use-case pages. |
| `MASTER_PROMPT_LIBRARY.md` | Prompt template index | Strong prompt coverage. | Too large for casual first use. | Curate only the top 10 prompts. |
| `kb/navigation/quick_problem_solver.md` | Symptom lookup | Useful and link-rich. | Still assumes the user wants to browse KB assets. | Convert common entries into hands-on prompts. |
| `REPO_MAP.md` | Structure classification | Good for maintainers. | Not needed before first prompt. | Put in "ignore until maintaining." |
| `STRUCTURE_MAP.md` | Visual structure map | Useful repository map. | Not a usage flow. | Keep as maintainer/reference link. |
| `WHAT_NOT_TO_TOUCH.md` | Safety guide | Important. | Maintenance oriented. | Summarize in hands-on layer as "files to ignore." |

## Recommended Entrypoint Stack

| User intent | First file | Second file | Reason |
|---|---|---|---|
| Use AI now | `HANDS_ON_START.md` | `COPY_PASTE_PROMPTS.md` | Fastest path to action. |
| Learn the framework | `AI_MASTER_RUNTIME_USER_GUIDE.md` | `AI_MASTER_RUNTIME_PACK.md` | Explains runtime behavior. |
| Solve a problem | `USE_CASES/README.md` | selected use case | Avoids browsing the full KB. |
| Maintain the repo | `START_HERE.md` | `REPO_MAP.md` | Existing structure works for maintainers. |
| Verify sources | `kb/13_evidence/EVIDENCE_DASHBOARD.md` | source governance path | Existing structure is strong. |

## Entrypoint Verdict

Current entrypoints are acceptable for repository navigation, but conditionally accepted for hands-on use. The missing piece is a single action-first entrypoint.
