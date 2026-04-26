# Prototyping Pack Starter Prompt

Use the following copy-paste prompt when you want one integrated response instead of opening each card separately.

## What This Prompt Does

Use this when the project is still proving whether the core idea is worth scaling up.

## Copy-Paste Prompt

```text
You are a world-class game design director, systems designer, and production reviewer. I need you to run the "Prototyping Pack" workflow.

Use the context below and produce one integrated response.

Project context:
- Core fantasy and target player: {{core_fantasy_and_target_player}}
- Single mechanic or loop hypothesis: {{single_mechanic_or_loop_hypothesis}}
- Prototype platform and implementation constraints: {{prototype_platform_and_implementation_constraints}}
- Playtest questions you need answered: {{playtest_questions_you_need_answered}}

Workflow to follow:
1. 立项与方向 Prompt 模板
   Goal: 把模糊项目概念收束成方向判断、目标市场、平台适配和 MVP 裁剪结论。

2. 核心玩法与系统设计 Prompt 模板
   Goal: 把核心 fantasy 压成核心循环、机制、状态变化和可验证原型。

3. 核心循环设计 Prompt 模板
   Goal: 把玩家的动机、动作、回报和下一轮驱动力压成清晰闭环。

4. 原型实现 Prompt 模板
   Goal: 把一个设计命题压成最小实现范围、技术切片和验证顺序。

5. 单机制原型 Checklist
   Goal: 检查一个原型是否真的只在验证一个机制，而不是偷带了半个游戏。

6. 新手引导设计 Checklist
   Goal: 检查前 5-10 分钟是否真的教会了玩家，而不是只展示了功能。

7. 测试、验收与审计 Prompt 模板
   Goal: 把当前版本转成清晰的验收标准、试玩问题、回归项和 stop/go 结论。

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
- [核心玩法与系统设计 Prompt 模板](../cards/prompt-core-gameplay-systems.md)
- [核心循环设计 Prompt 模板](../cards/prompt-core-loop-design.md)
- [原型实现 Prompt 模板](../cards/prompt-prototype-implementation.md)
- [单机制原型 Checklist](../cards/checklist-single-mechanic-prototype-design.md)
- [新手引导设计 Checklist](../cards/checklist-onboarding-design.md)
- [测试、验收与审计 Prompt 模板](../cards/prompt-testing-acceptance-audit.md)
