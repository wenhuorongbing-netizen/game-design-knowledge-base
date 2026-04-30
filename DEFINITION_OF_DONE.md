# Definition Of Done

Date: 2026-04-30

## Purpose

This definition of done keeps changes safe, reviewable, and maintainable.

## Done For Any Change

- The change has a clear purpose.
- The affected user or maintainer is clear.
- The change stays within knowledgebase scope.
- Source governance is not weakened.
- Generated files are not manually edited unless explicitly justified.
- Validation passes.

## Done For Documentation Changes

- Lifecycle state is known.
- Owner role is known.
- Parent hub or index is linked.
- Duplicate content is avoided or justified.
- First-use overload is not increased.
- Deprecated or legacy content is clearly marked.

## Done For Prompt Or Runtime Changes

- Prompts require assumptions, `source_basis`, and confidence where relevant.
- Prompts do not ask AI to parse private source bodies.
- Prompts do not ask AI to invent evidence or citations.
- Expected output artifact is clear.
- Copy-paste prompts are understandable to non-maintainers.

## Done For Evidence Or Claim Changes

- No claim is promoted beyond evidence scope.
- EvidenceRefs point to existing entities when used.
- User notes and manual quotes are user-provided, not fabricated.
- Sidecars do not default to full processing.
- Verified status is blocked unless validated evidence supports it.

## Done For Tooling Changes

- `npm run kb:export` passes.
- `npm run kb:validate` passes.
- `npm run kb:audit` passes when source governance or evidence is affected.
- `npm run kb:coverage` passes when coverage or release reporting is affected.
- CI workflow impact is documented.

