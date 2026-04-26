# Balance Pack

Cross-phase bundle for economy architecture, combat numbers, reward logic, and balance review loops.

## Pack Snapshot

- Type: Use Case Pack
- Cards: 7
- Prompt templates: 4
- Checklists: 3
- Other cards: 0
- Covered phases: 数值与经济设计

## When To Use

Use this when the game has enough systems to show inflation, dead rewards, or unclear progression pressure.

## Inputs To Prepare

- Key currencies and resource flows
- Combat stats and progression targets
- Reward tables, drop logic, or progression pacing
- Current balance pain points or telemetry symptoms

## Suggested Workflow

1. Map the economy layers before touching individual numbers.
2. Separate currency roles from combat-balance roles.
3. Review growth curve and reward logic after the system frame is clear.
4. End with the smallest set of balance changes worth testing next.

## Included Cards

### Prompt Templates

- 货币系统设计 Prompt 模板
- 经济系统设计 Prompt 模板
- 数值与经济设计 Prompt 模板
- 战斗数值平衡 Prompt 模板

### Checklists

- 成长曲线设计 Checklist
- 掉落与奖励设计 Checklist
- 资源产出消耗设计 Checklist

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

---

# 成长曲线设计 Checklist

## 适用场景

用于成长系统 review、长期进度 review，或诊断“升级很多但没变强感”的问题。

## 检查项

- 成长每个阶段都带来新决策或新理解。
- 升级不仅提高数值，也改变玩家行为选择。
- 短期奖励、中期 build、长期目标彼此区分清楚。
- 卡关时玩家知道缺的是什么，而不是只觉得更 grind。
- 成长门槛不会与核心乐趣脱节。
- 重复行为不会成为唯一进度来源。
- 后期成长不会让前期系统全部失效。

## 通过标准

- 成长能持续提供掌握感或身份差异。
- 玩家知道为什么要追求下一个阶段。
- 成长路径和项目体验目标一致。

## 常见失败信号

- 升级只意味着打得更久、刷得更多。
- 后期所有 build 都收敛成同一个答案。
- 成长系统像外接模块，和玩法循环无关。

---

# 掉落与奖励设计 Checklist

## 适用场景

用于掉落表、奖励节奏或长期奖励 review。

## 检查项

- 奖励频率与玩家风险投入匹配。
- 高价值奖励真的改变 build、进度或选择。
- 奖励不会长期稀释到毫无感觉。
- 不同奖励层级有明确职责，不是都在做同一种激励。
- 重复奖励不会快速贬值成垃圾噪音。
- 低概率奖励不会成为唯一有效驱动力。
- 奖励不会直接破坏经济和成长层级。

## 通过标准

- 玩家能区分普通奖励、关键奖励和身份奖励。
- 奖励真正影响后续决策和期待。
- 奖励节奏与项目目标体验一致。

## 常见失败信号

- 奖励很多，但玩家对掉落没有任何判断和期待。
- 奖励只能通过堆稀有度显得重要。
- 奖励表变成掩盖平衡问题的止痛药。

---

# 资源产出消耗设计 Checklist

## 适用场景

用于资源循环 review、制作/生存系统 review，或排查“资源很多但决策很少”。

## 检查项

- 每种资源都能说明主要来源和主要去向。
- 产出速度与消耗压力形成真实决策，而不是纯等待。
- 玩家能通过玩法改变资源结构，而不是只能被动接受。
- 资源之间存在清楚的层级和转换关系。
- 资源短缺能制造张力，但不会长期让玩家失去行动权。
- 过剩资源不会长期堆积成无意义数字。
- 资源循环与核心玩法、成长、世界规则保持一致。

## 通过标准

- 资源系统推动玩家做选择。
- 资源压力与爽感是结构性的，而不是临时调出来的。
- 资源循环可被解释、观测和调优。

## 常见失败信号

- 资源系统只是在拖时长。
- 玩家永远缺同一种东西，其他资源都没意义。
- 资源转换只是层层套娃，没有新决策。
