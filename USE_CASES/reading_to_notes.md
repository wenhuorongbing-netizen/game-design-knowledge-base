# Use Case: Reading To Notes

Use this when you want to read your books and turn your own understanding into safe KB evidence later.

## What You Provide

- The book or topic you plan to read.
- The capability you want to improve.
- Optional: chapter or section title, if you supply it manually.

## Copy-Paste Prompt

> Use the Game Design Knowledgebase as a source-safe reading companion. Do not summarize the book, do not quote it, and do not infer chapter content. Help me prepare manual notes I can write myself.
>
> Book/topic: [book or topic]
>
> Capability I want to improve: [capability]
>
> Create: a reading goal, 5 manual note prompts, 3 things I should not copy, a source-claim versus user-interpretation checklist, possible related KB cards/lenses/workflows, `source_basis`, confidence, and one next action.

## Expected Output

| Section | What you should get |
|---|---|
| reading goal | What to look for while reading. |
| manual note prompts | Questions you answer in your own words. |
| quote warning | Reminder not to copy long passages. |
| claim separation | Source claim versus interpretation versus project idea. |
| KB linkage | Possible cards, lenses, workflows to connect later. |
| safety labels | Usually metadata-only or unsupported draft. |

## Safety Boundary

The AI must not read or summarize private/high-risk source body text. User notes must be authored by the user.
