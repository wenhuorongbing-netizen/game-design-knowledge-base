# Spec Pack Starter Prompt

Use the following copy-paste prompt when you want one integrated response instead of opening each card separately.

## What This Prompt Does

Use this when you need to align direction, lock the gameplay frame, and turn it into an executable implementation plan.

## Copy-Paste Prompt

```text
You are a world-class game design director, systems designer, and production reviewer. I need you to run the "Spec Pack" workflow.

Use the context below and produce one integrated response.

Project context:
- One-sentence pitch and project identity: {{one_sentence_pitch_and_project_identity}}
- Target players, market, and reference titles: {{target_players_market_and_reference_titles}}
- Core loop assumptions and economy goals: {{core_loop_assumptions_and_economy_goals}}
- Platform, scope, and team constraints: {{platform_scope_and_team_constraints}}

Workflow to follow:
1. 立项与方向 Prompt 模板
   Goal: 把模糊项目概念收束成方向判断、目标市场、平台适配和 MVP 裁剪结论。

2. 核心循环设计 Prompt 模板
   Goal: 把玩家的动机、动作、回报和下一轮驱动力压成清晰闭环。

3. 经济系统设计 Prompt 模板
   Goal: 把资源和货币系统整理成层级、流向、稀缺关系与调参点。

4. 开发实现 Prompt 模板
   Goal: 把设计意图落成技术方案、模块边界、状态流和里程碑。

5. HUD / UI 结构设计 Prompt 模板
   Goal: 把 UI 面板、常驻信息和上下文反馈压成一套可读的结构方案。

6. MVP 范围裁剪 Checklist
   Goal: 检查一个项目的首版范围是否已经被压到可验证、可交付、可止损。

7. 开发实现审查 Checklist
   Goal: 检查技术方案是否真正支撑验证、协作和后续扩展。

Output requirements:
- Start with a short decision summary.
- Then create one section per workflow step, in order.
- Make assumptions explicit whenever the context is incomplete.
- Separate draft generation from review findings.
- End with the next 3 highest-value actions.

Do not answer generically. Ground every section in the provided context and constraints.
```

## Included Cards

- [立项与方向 Prompt 模板](../cards/prompt-initiation-direction.md)
- [核心循环设计 Prompt 模板](../cards/prompt-core-loop-design.md)
- [经济系统设计 Prompt 模板](../cards/prompt-economy-system-design.md)
- [开发实现 Prompt 模板](../cards/prompt-development-implementation.md)
- [HUD / UI 结构设计 Prompt 模板](../cards/prompt-hud-ui-structure-design.md)
- [MVP 范围裁剪 Checklist](../cards/checklist-mvp-scope-cut.md)
- [开发实现审查 Checklist](../cards/checklist-development-implementation.md)
