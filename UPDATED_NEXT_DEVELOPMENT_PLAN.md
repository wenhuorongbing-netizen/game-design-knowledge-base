# Updated Next Development Plan

Date: 2026-04-28

## Current Gate

Evidence Phase 2 review is complete. Evidence ingestion remains blocked until the user supplies real evidence. Immediate development has been refocused to the Master Framework Phase.

## Phase 3 - Master Framework Phase

Goal: organize the whole field of game design into AI-usable master capabilities.

Tasks:

- Build a master prompt router.
- Create capability operating guides for the 14 master capabilities.
- Build expert question banks by phase and domain.
- Create artifact templates for briefs, loop maps, decision matrices, system maps, audits, playtest plans, and pitch outlines.
- Create lens bundle presets for common reviews.
- Define tutor modes for beginner, intermediate, advanced, and professional users.
- Add confidence-aware response rules.

Acceptance criteria:

- No source body parsing.
- No fabricated evidence.
- No claim promotion.
- AI outputs carry source and confidence boundaries.
- Validation passes with 0 P0 issues and 0 warnings.

Next prompt: `build-master-prompt-router`

## Later Phase - Limited Claim Review

Goal: Review a small set of evidence-linked claims.

Tasks:

- Evaluate evidence scope and limitations.
- Reject or block overbroad promotion requests.
- Update unsupported and verified claim indexes.
- Keep metadata-only claims out of verified status.

Acceptance criteria:

- Every promotion request has EvidenceRefs, reviewer, rationale, and limitations.
- No project-local or playtest-local observation becomes general doctrine without review.

## Later Phase - Optional Project And Playtest Evidence

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

## Later Phase - Evidence Release Refresh

Goal: Publish an evidence-weighted update after real evidence exists.

Tasks:

- Regenerate exports.
- Run validation, audit, and coverage commands.
- Update evidence dashboard, coverage matrix, and navigation.
- Issue a focused release report for the Game Feel evidence domain.

Acceptance criteria:

- Structural coverage and evidence-backed coverage remain separate.
- Draft and verified states are visible in search and navigation.
