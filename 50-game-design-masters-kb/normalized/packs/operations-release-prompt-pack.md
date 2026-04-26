# 运营与发布 Prompt Pack

Stage-specific prompt templates for 运营与发布.

## Pack Snapshot

- Type: Prompt Pack
- Cards: 2
- Prompt templates: 2
- Checklists: 0
- Other cards: 0
- Covered phases: 运营与发布

## When To Use

Use this when the current task belongs to 运营与发布 and you want reusable drafting prompts instead of starting from scratch.

## Suggested Workflow

1. Pick the prompt template in 运营与发布 Prompt Pack that matches the deliverable you need right now.
2. Fill in the placeholders with project-specific constraints instead of generic design language.
3. Keep only one answer path per prompt run so the result remains editable.
4. Pass the output into a checklist or implementation review before treating it as final.

## Included Cards

### Prompt Templates

- 留存优化 Prompt 模板
- 商店页文案 Prompt 模板

## Full Card Bodies

---

# 留存优化 Prompt 模板

## 适用场景

当团队已经感受到玩家流失，但还停留在“多做点内容/多发点奖励”这类粗放反应时使用。

## 使用前提供

- 目标留存周期和目标玩家
- 玩家进入、回流和流失节点
- 当前留存症状
- 已有系统如任务、成长、社交、活动
- 你怀疑最影响留存的 2-3 个原因

## 预期输出

1. 留存问题拆分
2. 关键流失节点
3. 驱动力缺口
4. 短中长期优化点
5. 不该做的伪优化
6. 实验优先级

## Prompt 模板

```text
你是一个世界级 live ops 与玩家留存顾问。
请把下面的留存问题整理成能实际实验和验证的优化方案。

输入：
- 目标玩家与周期：{{retention_target}}
- 进入/回流/流失节点：{{retention_funnel}}
- 当前症状：{{retention_symptoms}}
- 现有系统：{{current_systems}}
- 怀疑原因：{{suspected_causes}}

请输出：
1. 留存问题拆分：这到底是 onboarding、目标感、奖励、社交还是节奏问题。
2. 流失节点：玩家最容易在哪些时刻离开。
3. 驱动力缺口：哪些动机没有被接住。
4. 短中长期优化点：哪些可以立刻试，哪些需要结构改动。
5. 伪优化：哪些做法看似加内容，实际上只会拖慢判断。
6. 实验优先级：先做哪 3 个实验，为什么。

要求：
- 不要默认“多奖励”就是答案。
- 重点指出留存问题和核心体验是否矛盾。
- 最后给一个最小实验列表。
```

## 二次追问

- 只围绕次日留存重做一版。
- 只围绕中长期目标感重做一版。

---

# 商店页文案 Prompt 模板

## 适用场景

当项目准备对外曝光，但文案还停留在内部语言或世界观堆砌时使用。

## 使用前提供

- 项目一句话概念与目标玩家
- 最想强调的 3-5 个卖点
- 参考竞品商店页
- 目标平台与商店限制
- 最怕被误解的点

## 预期输出

1. headline
2. short description
3. feature bullets
4. long description structure
5. 误解风险
6. A/B 方向

## Prompt 模板

```text
你是一个世界级游戏发行文案顾问。
请把以下项目信息整理成适合商店页的对外文案结构。

输入：
- 项目概念：{{project_pitch}}
- 目标玩家：{{target_players}}
- 核心卖点：{{key_features}}
- 参考商店页：{{reference_store_pages}}
- 平台限制：{{store_constraints}}
- 最怕被误解的点：{{misunderstandings}}

请输出：
1. headline：一行抓住项目定位。
2. short description：简短说明玩家会做什么、为什么值得玩。
3. feature bullets：3-6 条高强度卖点。
4. long description 结构：分段说明项目体验。
5. 误解风险：哪些说法会把玩家带偏。
6. 两个文案方向：更系统导向 / 更情绪导向。

要求：
- 不要写内部术语。
- 少讲概念，多讲玩家实际会做什么。
- 必须能和竞品形成差异。
```

## 二次追问

- 改成更偏 Steam 的写法。
- 改成更偏主机商店的短文案版本。
