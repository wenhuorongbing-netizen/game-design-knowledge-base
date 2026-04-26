# 核心玩法与系统设计 Prompt Pack

Stage-specific prompt templates for 核心玩法与系统设计.

## Pack Snapshot

- Type: Prompt Pack
- Cards: 3
- Prompt templates: 3
- Checklists: 0
- Other cards: 0
- Covered phases: 核心玩法与系统设计

## When To Use

Use this when the current task belongs to 核心玩法与系统设计 and you want reusable drafting prompts instead of starting from scratch.

## Suggested Workflow

1. Pick the prompt template in 核心玩法与系统设计 Prompt Pack that matches the deliverable you need right now.
2. Fill in the placeholders with project-specific constraints instead of generic design language.
3. Keep only one answer path per prompt run so the result remains editable.
4. Pass the output into a checklist or implementation review before treating it as final.

## Included Cards

### Prompt Templates

- 核心玩法与系统设计 Prompt 模板
- 核心循环设计 Prompt 模板
- 战斗系统设计 Prompt 模板

## Full Card Bodies

---

# 核心玩法与系统设计 Prompt 模板

## 适用场景

当你已经知道项目大方向，但不知道核心循环、战斗、成长或 onboarding 应该怎样互相咬合时使用。

## 使用前提供

- 玩家 fantasy 与主要目标
- 玩家的核心动词集合
- 关键资源、状态与反馈
- 一局或一个循环的时长
- 失败条件、胜利条件与当前痛点
- 你最想验证的一条机制命题

## 预期输出

1. 核心循环设计
2. 单机制原型切分
3. 状态与资源流转
4. 失败/胜利条件
5. 难度曲线与 onboarding
6. 最小验证原型方案
7. 试玩问题清单

## Prompt 模板

```text
你是一个世界级玩法设计师和系统设计研究者。
请把以下概念拆成可测试的玩法系统，而不是写一篇概念介绍。

输入：
- 玩家 fantasy：{{player_fantasy}}
- 核心目标：{{core_goal}}
- 核心动词：{{core_verbs}}
- 关键资源/状态：{{resources_and_states}}
- 单局时长或循环长度：{{session_length}}
- 当前担忧：{{current_pain_points}}
- 最想验证的机制命题：{{mechanic_hypothesis}}

请按以下结构输出：
1. 核心循环：用 5-8 步描述一轮完整循环。
2. 单机制原型：指出最小可独立验证的机制单元。
3. 系统接口：说明战斗 / 关卡 / 成长 / 资源循环如何互相影响。
4. 失败与胜利条件：给出具体条件与其设计意义。
5. 难度与 onboarding：前 10 分钟如何教会玩家，后续如何抬升。
6. 原型方案：做什么，不做什么，如何在一周内验证。
7. 试玩问题：列出 5 个最应该观察的问题。

要求：
- 不要用“会很好玩”作为论证。
- 所有结论都必须能落到原型和试玩。
- 如果发现 fantasy 和机制冲突，要明确指出。
```

## 二次追问

- 把核心循环压缩成一个纸面原型版本。
- 把 onboarding 进一步细化成前 5 分钟脚本。

---

# 核心循环设计 Prompt 模板

## 适用场景

当团队一直在讲机制，但没人能用一句话说清“玩家反复在做什么、为什么继续做”时使用。

## 使用前提供

- 玩家目标与 fantasy
- 核心动词和关键资源
- 短期回报、中期目标、长期目标
- 当前循环断点或无聊点
- 想让玩家反复追求的感觉

## 预期输出

1. 核心循环 5-7 步
2. 循环中的驱动力
3. 回报与风险
4. 断点与掉速点
5. 最小验证方案

## Prompt 模板

```text
你是一个世界级玩法设计师。
请把下面的信息压成一个真正可运转的核心循环，而不是一串功能列表。

输入：
- 玩家目标：{{player_goal}}
- 玩家 fantasy：{{player_fantasy}}
- 核心动词：{{core_verbs}}
- 关键资源：{{key_resources}}
- 短中长期回报：{{rewards}}
- 当前循环问题：{{loop_breakpoints}}
- 目标感觉：{{target_feeling}}

请输出：
1. 核心循环：5-7 步闭环描述。
2. 每一步驱动力：玩家为什么会愿意进入下一步。
3. 风险与回报：哪里制造张力，哪里提供满足。
4. 掉速点：循环最容易塌在哪里。
5. 最小验证：先做什么能证明这个循环成立。

要求：
- 每一步都要有玩家动机。
- 如果某一步只是为了串联流程、没有设计意义，要指出。
- 最后给一句核心循环总结。
```

## 二次追问

- 把核心循环压成适合纸面原型的版本。
- 分析循环在哪一步最容易产生无聊感。

---

# 战斗系统设计 Prompt 模板

## 适用场景

当战斗开始成型，但动作、资源、反馈和职业/敌人差异还没有被整理成真正的战斗系统时使用。

## 使用前提供

- 战斗 fantasy 与视角
- 玩家动词、武器/技能与敌人类型
- 关键资源，如耐力、冷却、怒气、弹药
- 期望的战斗节奏与时长
- 当前战斗痛点，如站桩、乱、反馈弱、套路单一

## 预期输出

1. 核心战斗循环
2. 输入与状态机框架
3. 资源与节奏控制
4. 敌我 counterplay
5. 命中/受击/失误反馈
6. 战斗原型验证方案

## Prompt 模板

```text
你是一个世界级战斗系统设计师。
请把下面的战斗想法压成一个可测试、可扩展的战斗系统草案。

输入：
- 战斗 fantasy：{{combat_fantasy}}
- 玩家动词：{{player_actions}}
- 武器/技能：{{weapons_and_skills}}
- 敌人类型：{{enemy_types}}
- 关键资源：{{combat_resources}}
- 目标节奏：{{combat_pacing}}
- 当前痛点：{{combat_pain_points}}

请输出：
1. 核心战斗循环：接敌、博弈、爆发、收尾如何闭环。
2. 输入与状态：关键状态、取消、硬直、窗口和风险。
3. 资源设计：每个资源怎样塑造节奏，而不是只是限制。
4. Counterplay：玩家对敌人、敌人对玩家各有哪些可读反制。
5. 反馈：命中、受击、失误、处决或爆发的反馈设计重点。
6. 原型验证：先做什么最能验证这套战斗有没有深度。

要求：
- 不要只堆技能名词。
- 说明为什么战斗不会很快退化成单一最优打法。
- 指出最可能出现的读不懂或不公平问题。
```

## 二次追问

- 把敌人 archetype 再拆成 4 类。
- 把反馈设计单独整理成 hit-feel 清单。
