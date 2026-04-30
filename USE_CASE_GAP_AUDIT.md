# Use Case Gap Audit

Date: 2026-04-30

## Summary

The repo has strong domain and workflow coverage, but use cases are presented as maps rather than guided interactions. A first-time user needs "I want to do X; paste this prompt; expect this artifact" pages.

## Current Use Case Coverage

| Use case | Current coverage | Gap | Required improvement |
|---|---|---|---|
| I have a vague game idea. | Covered in problem solver and runtime files. | No single copy-paste prompt plus example output. | Add use-case page and prompt. |
| I do not have an active project. | Mentioned in runtime docs. | Not framed as a first-class use case. | Add "no project yet" path. |
| I want a design review. | Covered by prompt library and designer path. | Too many files to inspect before action. | Add simple design-review prompt and expected artifact. |
| I want learning guidance. | Covered by learning paths and runtime guide. | No minimal learner prompt for "teach me." | Add learner prompt and expected mini-lesson output. |
| I want to know what to read. | Covered by reading plan and book maps. | Not packaged as a first-use reading prompt. | Add source-safe reading plan use case. |
| I want to check whether a claim is supported. | Covered by evidence and unsupported-claims docs. | Too governance-heavy for a user. | Add source-safety check use case. |
| I want to run a workflow. | Workflow packs exist. | User may not know which workflow to choose. | Add prompt selector in hands-on layer. |
| I want to use lenses. | Lens bank exists. | User may not know what a lens output looks like. | Add worked lens-review example. |
| I want a concrete output artifact. | Artifact names exist. | Few worked artifact examples. | Add examples for concept memo, decision audit, system map. |
| I want to benchmark an AI. | Benchmark system exists. | Too advanced for first use. | Keep as optional advanced path. |

## Missing Hands-On Assets

| Missing asset | Why it matters |
|---|---|
| copy-paste prompt pack | Converts repository knowledge into immediate action. |
| worked examples | Shows users what good output looks like. |
| first-session ignore list | Reduces bloat perception. |
| minimal AI context | Prevents users from loading dozens of files. |
| no-project use case | Matches the user's current situation. |
| vague-idea review use case | Highest-value first practical interaction. |

## Use Case Priority

1. Vague game idea to concept memo.
2. No-project learning guidance.
3. Source-safe reading plan.
4. Design review for a rough concept.
5. Meaningful decision audit.
6. System/economy audit.
7. Game feel/UI feedback audit.
8. Claim support and evidence gap check.

## Verdict

Use-case coverage is structurally strong but hands-on weak. The next phase should create a curated use-case layer, not more deep framework reports.
