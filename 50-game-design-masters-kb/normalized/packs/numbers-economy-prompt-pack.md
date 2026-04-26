# 数值与经济设计 Prompt Pack

Stage-specific prompt templates for 数值与经济设计.

## Pack Snapshot

- Type: Prompt Pack
- Cards: 4
- Prompt templates: 4
- Checklists: 0
- Other cards: 0
- Covered phases: 数值与经济设计

## When To Use

Use this when the current task belongs to 数值与经济设计 and you want reusable drafting prompts instead of starting from scratch.

## Suggested Workflow

1. Pick the prompt template in 数值与经济设计 Prompt Pack that matches the deliverable you need right now.
2. Fill in the placeholders with project-specific constraints instead of generic design language.
3. Keep only one answer path per prompt run so the result remains editable.
4. Pass the output into a checklist or implementation review before treating it as final.

## Included Cards

### Prompt Templates

- 货币系统设计 Prompt 模板
- 经济系统设计 Prompt 模板
- 数值与经济设计 Prompt 模板
- 战斗数值平衡 Prompt 模板

## Full Card Bodies

---

# 货币系统设计 Prompt 模板

## 适用场景

当项目里出现多个货币、代币、材料，但没人能说清为什么需要这么多时使用。

## 使用前提供

- 现有货币和材料列表
- 每种货币对应的使用场景
- 获取频率和消耗频率
- 稀缺与 prestige 目标
- 当前玩家困惑或经济问题

## 预期输出

1. 货币层级
2. 每种货币职责
3. 获取与消耗逻辑
4. 冗余与合并建议
5. 风险点
6. 监控建议

## Prompt 模板

```text
你是一个世界级游戏货币系统设计师。
请把下面的货币与材料系统整理成职责清晰、便于调优的结构。

输入：
- 货币/材料列表：{{currencies}}
- 使用场景：{{use_cases}}
- 获取频率：{{earn_rate}}
- 消耗频率：{{spend_rate}}
- 稀缺/ prestige 目标：{{scarcity_goals}}
- 当前问题：{{currency_problems}}

请输出：
1. 货币层级：哪些是日常、成长、稀缺、身份性货币。
2. 职责：每种货币主要解决什么，不该解决什么。
3. 获取/消耗逻辑：它们如何形成经济节奏。
4. 合并建议：哪些货币是冗余的。
5. 风险：通胀、囤积、无感、认知负担。
6. 监控建议：哪些指标最该跟踪。

要求：
- 减少认知负担优先于表面丰富度。
- 明确指出哪些货币只是把复杂度堆出来了。
- 最后给一版简化后的货币方案。
```

## 二次追问

- 只围绕移动端轻量化经济重做一版。
- 单独展开稀缺货币与 prestige 货币。

---

# 经济系统设计 Prompt 模板

## 适用场景

当经济系统开始膨胀，资源名词越来越多，却没人能说清每个资源到底干什么时使用。

## 使用前提供

- 全部货币与资源
- 短中长期消耗目标
- 稀缺资源与爆点资源
- 玩家获取方式与损失方式
- 当前经济症状，如通胀、囤积、无意义 grind

## 预期输出

1. 经济层级
2. 资源职责划分
3. 获取/消耗流向
4. 稀缺控制
5. 风险点
6. 调参与监控建议

## Prompt 模板

```text
你是一个世界级游戏经济设计师。
请把以下经济系统整理成一个职责清晰、可维护的系统方案。

输入：
- 货币与资源：{{resources}}
- 短中长期目标：{{short_mid_long_goals}}
- 获取方式：{{earning_methods}}
- 消耗方式：{{spending_methods}}
- 稀缺资源：{{scarce_resources}}
- 当前症状：{{economy_symptoms}}

请输出：
1. 经济层级：哪些资源负责日常、成长、稀缺、 prestige。
2. 资源职责：每个资源该解决什么，不该解决什么。
3. 获取/消耗流：玩家如何进入和离开每条资源链。
4. 稀缺控制：哪些门槛在控节奏，哪些在控选择。
5. 风险：通胀、囤积、失真、低价值资源。
6. 调参建议：最先监控和最先动刀的点。

要求：
- 指出可以合并掉的冗余资源。
- 区分“有价值的稀缺”和“令人烦躁的卡点”。
- 最后给一个简版资源结构图描述。
```

## 二次追问

- 把经济系统压成一张资源流表。
- 单独对稀缺资源做风险演算。

---

# 数值与经济设计 Prompt 模板

## 适用场景

当资源循环已经存在，但产出、消耗、奖励和成长开始互相打架时使用。

## 使用前提供

- 全部货币、资源与成长维度
- 每个资源的产出与消耗路径
- 目标 session cadence 与付费/非付费约束
- 当前平衡症状，例如通胀、卡点、奖励感不足
- 你想控制的关键指标，如 TTK、进度速度、留存压力

## 预期输出

1. 数值框架设计
2. 资源 faucet / sink 地图
3. 成长曲线与 gating
4. 掉落与奖励规则
5. 平衡风险
6. 测试与调参顺序

## Prompt 模板

```text
你是一个世界级数值与经济设计师。
请把下面的系统描述整理成一个能调、能测、能扩展的数值框架。

输入：
- 货币/资源：{{currencies_and_resources}}
- 产出路径：{{faucets}}
- 消耗路径：{{sinks}}
- 成长维度：{{progression_axes}}
- 目标节奏：{{session_cadence}}
- 商业化或非商业约束：{{monetization_constraints}}
- 当前失衡症状：{{balance_symptoms}}
- 关键指标：{{critical_metrics}}

请输出：
1. 数值框架：核心资源与层级关系。
2. Faucet/Sink 地图：每个资源如何进入和离开系统。
3. 成长曲线：短期、中期、长期目标与 gating。
4. 奖励设计：掉落、奖励频率、风险回报关系。
5. 风险：通胀、枯竭、无效资源、最优解固化等。
6. 调参顺序：先调什么，再调什么，为什么。

要求：
- 把每个数值层的目的说清楚。
- 明确指出哪些资源不应该同时承担多个冲突职责。
- 如果存在商业化，单独指出其对平衡的扭曲风险。
```

## 二次追问

- 把成长曲线再拆成 early / mid / late game 三段。
- 为掉落与奖励给出一个最小表格草案。

---

# 战斗数值平衡 Prompt 模板

## 适用场景

当战斗已经能玩，但出现秒杀、刮痧、单一 build 或节奏失衡时使用。

## 使用前提供

- 玩家输出与防御结构
- 敌人血量、伤害、护甲和行为频率
- 关键战斗资源和冷却
- 目标 TTK、容错和风险回报
- 当前失衡症状

## 预期输出

1. 平衡目标
2. 核心战斗指标
3. 敌我数值关系
4. 风险回报结构
5. 失衡来源
6. 调参顺序

## Prompt 模板

```text
你是一个世界级战斗数值设计师。
请根据以下战斗数据与目标，输出一份可操作的平衡分析方案。

输入：
- 玩家输出/防御：{{player_combat_stats}}
- 敌人输出/防御：{{enemy_combat_stats}}
- 资源与冷却：{{resources_and_cooldowns}}
- 目标 TTK 与容错：{{target_ttk_and_margin}}
- 风险回报预期：{{risk_reward_expectation}}
- 当前症状：{{balance_symptoms}}

请输出：
1. 平衡目标：理想战斗节奏应该是什么。
2. 核心指标：最该监控哪些数值关系。
3. 敌我关系：输出、承伤、窗口、容错是否合理。
4. 风险回报：高风险操作是否真的给出高回报。
5. 症状来源：当前最可能导致失衡的机制或数值层。
6. 调参顺序：先调哪些参数，再调哪些参数。

要求：
- 先指出结构问题，再谈具体数字。
- 不要只给“削一点/加强一点”的建议。
- 说明为什么会出现最优打法固化。
```

## 二次追问

- 把平衡指标改成 boss 战版本。
- 单独为高风险技能做收益校准。
