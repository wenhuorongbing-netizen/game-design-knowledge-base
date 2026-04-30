# Prompt Length Audit

Date: 2026-04-30

## Verdict

Verdict: REPAIRED_FOR_COPY_PASTE_USE.

The main prompt accessibility problem was long single-line copy-paste instructions. The 15 hands-on prompt files were repaired by splitting dense safety rules into short editable lines.

## Evidence Before Repair

Static inspection before this repair found long prompt lines in every hands-on prompt file:

| file group | observed maximum line length |
|---|---:|
| `hands_on_prompts/P01` to `P15` before repair | 418 to 472 characters |
| `context_packs/CP01` to `CP07` before repair | 255 to 396 characters |

Primary cause:

- one dense "Safety and behavior rules" paragraph in each prompt;
- one dense recommended prompt paragraph in each context pack.

## Evidence After Repair

After repair:

| file group | maximum line length after repair |
|---|---:|
| `hands_on_prompts/P01` to `P15` | 139 characters |
| `context_packs/CP01` to `CP07` | 134 characters |

Notes:

- `hands_on_prompts/README.md` still has a 180-character line in a descriptive section, not in a copy-paste prompt.
- `context_packs/README.md` remains under 140 characters.
- The repaired prompt files preserve source-safety language.

## Prompt Control Check

All 15 prompt files include:

- at most 3 high-value questions rule;
- concrete artifact requirement;
- assumptions label;
- source_basis label;
- confidence label;
- no private or high-risk source body parsing;
- no verified status without evidence/review;
- no fake evidence rule.

## Remaining P2 Issues

- Some output-format tables remain wide by nature.
- `hands_on_prompts/README.md` can be shortened later if a strict global line-length rule is added.
- A scripted Markdown line-length check does not yet exist.

## Recommendation

Keep the current prompt files accepted for hands-on use. Add an automated documentation line-length check later only if CI is introduced.
