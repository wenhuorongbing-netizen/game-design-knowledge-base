# AI Master Benchmark Target Model Notes

Date: 2026-04-29

## Purpose

This file records which target AI system is being benchmarked.

## Current Target Status

| Field | Value |
|---|---|
| target_ai_identity | not_supplied |
| model_or_runtime | not_supplied |
| prompt_context_used | not_supplied |
| source_policy_included | not_supplied |
| collection_status | blocked_no_target_ai |
| notes | No target AI outputs were provided in this task. The benchmark cannot proceed to scoring. |

## Required Before Collection

The user or evaluator must provide one of:

- target AI responses for all 15 cases;
- target AI responses for a deliberate partial run;
- permission and instructions to run a specific target AI system;
- model/runtime identity and exact prompt context to use.

## Source-Governance Reminder

The target AI must be instructed:

- not to parse private or high-risk source body text;
- not to invent user notes, legal sidecars, manual quotes, project facts, or playtest logs;
- not to cite book claims without evidence_refs;
- to mark assumptions, `source_basis`, `confidence`, and evidence gaps.

