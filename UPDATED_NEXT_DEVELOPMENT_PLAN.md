# Updated Next Development Plan

Date: 2026-04-28

## Current Gate

Evidence Phase 2 review is complete. Evidence ingestion remains blocked until the user supplies real evidence.

## Phase 3 - Game Feel Evidence Intake

Goal: Add the first narrow-domain evidence packet for Game Feel.

Tasks:

- Receive three to five user-authored Game Feel manual notes.
- Optionally receive one legal sidecar.
- Optionally receive one lawful short user-provided quote.
- Validate notes, source basis, confidence, and target links.
- Create EvidenceRefs only from accepted evidence.
- Review five to ten Game Feel claims.
- Draft three to five limited promotion requests only to `user_interpretation` or `weak`.
- Build a Game Feel evidence dossier.
- Refresh evidence-weighted coverage.

Acceptance criteria:

- No source body parsing.
- No fabricated evidence.
- No verified claim unless legal evidence and prior review explicitly justify it.
- Validation passes with 0 P0 issues and 0 warnings.

Next prompt: `start-evidence-phase-3-game-feel-user-notes`

## Phase 4 - Limited Claim Review

Goal: Review a small set of evidence-linked claims.

Tasks:

- Evaluate evidence scope and limitations.
- Reject or block overbroad promotion requests.
- Update unsupported and verified claim indexes.
- Keep metadata-only claims out of verified status.

Acceptance criteria:

- Every promotion request has EvidenceRefs, reviewer, rationale, and limitations.
- No project-local or playtest-local observation becomes general doctrine without review.

## Phase 5 - Optional Project And Playtest Evidence

Goal: Add first real project/playtest evidence only if the user supplies it.

Tasks:

- Intake one ProjectOverlay packet.
- Intake one PlaytestLog packet.
- Keep project and playtest claims scoped locally.
- Link to relevant Game Feel cards, lenses, and workflows.

Acceptance criteria:

- No fake project.
- No fake playtest.
- Observations, interpretation, hypotheses, decisions, and next actions are separated.

## Phase 6 - Evidence Release Refresh

Goal: Publish an evidence-weighted update after real evidence exists.

Tasks:

- Regenerate exports.
- Run validation, audit, and coverage commands.
- Update evidence dashboard, coverage matrix, and navigation.
- Issue a focused release report for the Game Feel evidence domain.

Acceptance criteria:

- Structural coverage and evidence-backed coverage remain separate.
- Draft and verified states are visible in search and navigation.
