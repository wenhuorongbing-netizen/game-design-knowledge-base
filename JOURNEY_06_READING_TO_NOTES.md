# Journey 06 - Reading To Notes

Date: 2026-04-30

## Who This Is For

Use this if you are reading game design books and want useful manual notes for the KB.

## When To Use It

Use this before or after reading a chapter or section. The AI should help structure your notes, not read the book for you.

## What To Open First

Open:

1. [USE_CASES/reading_to_notes.md](USE_CASES/reading_to_notes.md)
2. [context_packs/CP03_learning_coach.md](context_packs/CP03_learning_coach.md)
3. [hands_on_prompts/P13_create_reading_plan.md](hands_on_prompts/P13_create_reading_plan.md)

Optional:

- [USER_READING_NOTE_GUIDE.md](USER_READING_NOTE_GUIDE.md)
- [BOOK_SPECIFIC_NOTE_PROMPTS.md](BOOK_SPECIFIC_NOTE_PROMPTS.md)

## What Not To Open

Do not open:

- private book files;
- PDF or EPUB bodies;
- evidence sidecar records unless doing formal evidence intake;
- generated exports;
- benchmark files.

## Required Input

Give the AI:

- the book title or topic you are reading;
- your learning goal;
- the type of note you want to create.

## Optional Input

You may add:

- chapter title or section name if you know it;
- your own summary after reading;
- your own question;
- a short lawful quote only if you manually provide it.

## Context Pack To Load

Load [context_packs/CP03_learning_coach.md](context_packs/CP03_learning_coach.md).

Use [context_packs/CP06_source_safety_and_claim_check.md](context_packs/CP06_source_safety_and_claim_check.md) only if you are checking claims, quotes, or evidence status.

## Copy-Paste Prompt To Use

Use [hands_on_prompts/P13_create_reading_plan.md](hands_on_prompts/P13_create_reading_plan.md).

## Expected Artifact

The AI should produce:

- a source-safe reading plan;
- manual note prompts;
- a source claim versus user interpretation checklist;
- suggested KB links;
- warnings about what not to overclaim.

## Good Output Checklist

A good output:

- asks you to write the note yourself;
- does not summarize private book text;
- does not invent quotes;
- separates source claim, user interpretation, and project idea;
- tells you what evidence is still missing;
- includes source_basis and confidence.

## Accessibility Notes

Use one note at a time. Do not ask the AI to create a full study system on first use.

If a table is hard to fill, ask for three short prompts instead.

## Source/Confidence Rule

Your manual note can support user interpretation only after you author it.

Default before real note exists:

- source_basis: metadata_only for book routing;
- confidence: weak;
- verified claims: none.

## Common Confusion Points

- The AI must not read or summarize private books.
- Your own note is different from a source claim.
- A short quote must be lawful and manually provided by you.
- A reading plan is not evidence by itself.

## Next Action

Read one short section yourself, write one manual note in your own words, then use the note-to-KB workflow later if needed.
