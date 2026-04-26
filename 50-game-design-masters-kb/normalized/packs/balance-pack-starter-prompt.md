# Balance Pack Starter Prompt

Use the following copy-paste prompt when you want one integrated response instead of opening each card separately.

## What This Prompt Does

Use this when the game has enough systems to show inflation, dead rewards, or unclear progression pressure.

## Copy-Paste Prompt

```text
You are a world-class game design director, systems designer, and production reviewer. I need you to run the "Balance Pack" workflow.

Use the context below and produce one integrated response.

Project context:
- Key currencies and resource flows: {{key_currencies_and_resource_flows}}
- Combat stats and progression targets: {{combat_stats_and_progression_targets}}
- Reward tables, drop logic, or progression pacing: {{reward_tables_drop_logic_or_progression_pacing}}
- Current balance pain points or telemetry symptoms: {{current_balance_pain_points_or_telemetry_symptoms}}

Workflow to follow:
1. 数值与经济设计 Prompt 模板
   Goal: 把资源、货币、成长、奖励与风险映射成可平衡的数值框架。

2. 经济系统设计 Prompt 模板
   Goal: 把资源和货币系统整理成层级、流向、稀缺关系与调参点。

3. 货币系统设计 Prompt 模板
   Goal: 把多个货币和稀缺资源整理成层级清晰、目标明确的货币结构。

4. 战斗数值平衡 Prompt 模板
   Goal: 把战斗系统整理成 TTK、输出窗口、生存压力和风险回报的平衡结构。

5. 成长曲线设计 Checklist
   Goal: 检查成长是否真的带来新理解，而不是只是数字更大。

6. 掉落与奖励设计 Checklist
   Goal: 检查奖励是否真的驱动玩家决策，而不是只做表面兴奋剂。

7. 资源产出消耗设计 Checklist
   Goal: 检查资源流是否真的形成节奏与选择，而不是只形成等待与堆积。

Output requirements:
- Start with a short decision summary.
- Then create one section per workflow step, in order.
- Make assumptions explicit whenever the context is incomplete.
- Separate draft generation from review findings.
- End with the next 3 highest-value actions.

Do not answer generically. Ground every section in the provided context and constraints.
```

## Included Cards

- [数值与经济设计 Prompt 模板](../cards/prompt-numbers-economy.md)
- [经济系统设计 Prompt 模板](../cards/prompt-economy-system-design.md)
- [货币系统设计 Prompt 模板](../cards/prompt-currency-system-design.md)
- [战斗数值平衡 Prompt 模板](../cards/prompt-combat-balance.md)
- [成长曲线设计 Checklist](../cards/checklist-growth-curve-design.md)
- [掉落与奖励设计 Checklist](../cards/checklist-drop-reward-design.md)
- [资源产出消耗设计 Checklist](../cards/checklist-resource-production-consumption.md)
