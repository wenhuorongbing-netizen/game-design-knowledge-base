# Use Case QA Checklist

Date: 2026-04-30

Use this checklist when reviewing or adding a hands-on use case.

## Required User Clarity

Each use case should answer:

- What situation is this for?
- What should the user provide?
- What should the user copy?
- What should the AI produce?
- What should the user ignore?
- What is draft versus verified?
- What source or evidence boundary applies?

## Required Files

Each use case should point to at least one of:

- a copy-paste prompt;
- a context pack;
- a worked example;
- a no-project exercise;
- a source-safety guide.

## Required Safety Language

Every use case must preserve:

- no private source body parsing;
- no invented project facts;
- no invented playtest data;
- no fake citations;
- no fake EvidenceRefs;
- no verified claims without EvidenceRef and review;
- source_basis label required;
- confidence label required.

## Acceptance Questions

| Question | Pass condition |
|---|---|
| Can the user start in under 2 minutes? | yes, file has one clear first action. |
| Can the user copy a prompt? | yes, prompt or prompt file is linked. |
| Can the user see expected output? | yes, artifact type is named. |
| Can the user avoid overclaiming? | yes, source/confidence rule is visible. |
| Can the user avoid irrelevant folders? | yes, ignore guidance is linked. |

## Reject A Use Case If

Reject or revise the use case if it:

- requires reading the whole repository;
- routes casual users into generated exports;
- routes casual users into benchmark internals;
- asks AI to read private sources;
- treats a draft artifact as evidence;
- omits what the user should paste;
- omits the expected output artifact.

