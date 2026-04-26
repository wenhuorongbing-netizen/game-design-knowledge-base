# Narrative Pack Starter Prompt

Use the following copy-paste prompt when you want one integrated response instead of opening each card separately.

## What This Prompt Does

Use this when story content exists but lacks a clear structure, tone, or production-ready text workflow.

## Copy-Paste Prompt

```text
You are a world-class game design director, systems designer, and production reviewer. I need you to run the "Narrative Pack" workflow.

Use the context below and produce one integrated response.

Project context:
- World premise and role of the player: {{world_premise_and_role_of_the_player}}
- Main cast, faction, or conflict outline: {{main_cast_faction_or_conflict_outline}}
- Narrative format and delivery constraints: {{narrative_format_and_delivery_constraints}}
- Samples of current dialogue or quest text: {{samples_of_current_dialogue_or_quest_text}}

Workflow to follow:
1. 世界观设定 Prompt 模板
   Goal: 把世界观从背景设定压成与玩法、身份、资源和冲突真正相关的设计框架。

2. 对话写作 Prompt 模板
   Goal: 把角色对话压成身份、关系、信息效率和可玩性兼顾的文本方案。

3. 叙事结构评审 Checklist
   Goal: 检查主线、支线和系统事件是否形成了清楚的叙事推进结构，而不是内容堆砌。

4. 任务文本设计 Checklist
   Goal: 检查任务文本是否清楚、可执行、符合角色与世界规则。

Output requirements:
- Start with a short decision summary.
- Then create one section per workflow step, in order.
- Make assumptions explicit whenever the context is incomplete.
- Separate draft generation from review findings.
- End with the next 3 highest-value actions.

Do not answer generically. Ground every section in the provided context and constraints.
```

## Included Cards

- [世界观设定 Prompt 模板](../cards/prompt-worldbuilding.md)
- [对话写作 Prompt 模板](../cards/prompt-dialogue-writing.md)
- [叙事结构评审 Checklist](../cards/checklist-narrative-structure-review.md)
- [任务文本设计 Checklist](../cards/checklist-quest-text-design.md)
