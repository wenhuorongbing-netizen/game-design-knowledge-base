# Next Phase Decision After First Game Idea Workflow

Date: 2026-05-01

Phase: User-Supplied Game Idea Execution Phase

## Decision

Chosen next phase: wait for user evidence.

## Why This Decision

The workflow cannot continue into prototype execution, project overlay creation, evidence pilots, or reading notes intake because no valid user-supplied idea packet or evidence exists.

The correct next action is to wait for user-provided input rather than generating more blocked artifacts.

## Options Not Chosen

| Option | Reason Not Chosen |
|---|---|
| continue this game idea into prototype execution | No real game idea or prototype question exists. |
| create first project overlay from user-provided project facts | No project facts were supplied. |
| begin user reading notes intake | No user reading notes were supplied. |
| begin Game Feel evidence pilot | No user evidence exists. |
| begin Meaningful Decisions evidence pilot | No user evidence exists. |
| begin Systems and Economy evidence pilot | No user evidence exists. |
| improve agent runtime validation | Useful later, but the immediate blocker is user input. |
| expand skills to more domains | Runtime should not expand while basic real-use input is missing. |
| simplify runtime further | Useful, but the immediate next phase should not create more docs before user input. |

## Exact Next Prompt

Provide a valid game idea packet:

- idea summary;
- desired player experience;
- current uncertainty or concern;
- optional target player;
- optional genre;
- optional platform;
- optional constraints;
- optional player actions;
- optional rules;
- optional resources;
- optional decisions;
- optional prototype question;
- optional test goal.

After that, Codex should create `first_real_game_idea_workflow/USER_GAME_IDEA_PACKET.md`, mark workflow status as `idea_packet_received`, rerun routing, and generate Artifact 01 only from user-supplied facts.
