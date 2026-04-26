# Release Pack

Cross-phase bundle for preparing a playable release candidate, external messaging, and post-launch planning.

## Pack Snapshot

- Type: Use Case Pack
- Cards: 6
- Prompt templates: 3
- Checklists: 3
- Other cards: 0
- Covered phases: 运营与发布 / 测试、验收与审计 / 立项与方向

## When To Use

Use this when a project is moving from internal development into public testing, store presence, or release preparation.

## Inputs To Prepare

- Target release window and platform set
- Current build quality and known defects
- Store-facing fantasy, hook, and audience
- Retention goals and live-ops expectations

## Suggested Workflow

1. Validate the release target and platform fit first.
2. Run pre-release and build-acceptance checks before marketing polish.
3. Write store copy and retention framing against the real build.
4. Close with a concrete post-launch update roadmap.

## Included Cards

### Prompt Templates

- 留存优化 Prompt 模板
- 平台适配判断 Prompt 模板
- 商店页文案 Prompt 模板

### Checklists

- 版本验收 Checklist
- 发布前检查 Checklist
- 更新路线图 Checklist

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

# 平台适配判断 Prompt 模板

## 适用场景

当团队同时想上多个平台，但没有真正分析输入、节奏、展示和市场预期是否匹配时使用。

## 使用前提供

- 项目概念与核心循环
- 目标平台列表
- 输入方式和会话长度
- 性能与资源约束
- 团队最担心的平台错配点

## 预期输出

1. 平台适配结论
2. 匹配点
3. 冲突点
4. 移植或并行开发风险
5. 推荐平台顺序
6. 为适配需要牺牲什么

## Prompt 模板

```text
你是一个世界级游戏产品与平台适配顾问。
请根据以下信息，对项目的平台匹配度做一次清晰判断。

输入：
- 项目概念：{{project_pitch}}
- 核心循环：{{core_loop}}
- 目标平台：{{target_platforms}}
- 输入与会话长度：{{input_and_session}}
- 性能/资源约束：{{constraints}}
- 担心的错配点：{{platform_risks}}

请输出：
1. 平台适配结论：哪些平台适合，哪些不适合。
2. 匹配点：这个项目在哪些维度天然适合某平台。
3. 冲突点：哪类平台会拖垮设计或产能。
4. 风险：移植或并行开发最危险的地方。
5. 推荐顺序：先做哪个平台版本，为什么。
6. 适配代价：如果一定要上不匹配平台，需要牺牲什么。

要求：
- 不要默认“全平台都上”是好事。
- 重点分析输入、阅读负担、会话长度和产能匹配。
- 最后给一句平台策略建议。
```

## 二次追问

- 只围绕移动端适配再做一版。
- 把 UI/HUD 适配代价单独展开。

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

---

# 版本验收 Checklist

## 适用场景

用于每周 build review、对外试玩前检查，或确认一个版本是否值得继续基于其迭代。

## 检查项

- 核心循环可完整跑通至少一轮。
- 关键任务和关键路径不会被 blocker 卡死。
- 高严重度 bug 已经单独列出并有处理结论。
- 回归高风险项至少过一遍 smoke test。
- 本版本的目标玩家问题有对应观测点。
- 试玩者能在最小引导下完成主要任务。
- 团队对“这个版本算不算通过”已有统一口径。

## 通过标准

- 版本可用于验证当前阶段目标。
- 严重缺陷不会掩盖真正想观察的体验问题。
- 本次 build 的价值和局限都已明确。

## 常见失败信号

- 版本跑不通却仍试图讨论高层体验。
- 所有问题都被当成同一个优先级。
- 试玩后得不到与目标相关的结论。

---

# 发布前检查 Checklist

## 适用场景

用于外部 demo、封测、商店页上线或公开活动前的最后一轮通读。

## 检查项

- 版本目标和对外承诺一致。
- 最容易触发的 blocker 已有结论。
- 商店页文案、截图、视频和实际版本体验方向一致。
- 最基本的新手路径可在外部环境下走通。
- 已知高风险问题有公开说明或内部预案。
- 反馈收集方式已经准备好。
- 团队知道发布后第一时间要盯什么。

## 通过标准

- 对外版本不会因为基础问题完全失焦。
- 玩家第一印象与文案承诺一致。
- 团队具备发布后的响应准备。

## 常见失败信号

- 对外承诺超过当前版本实际可交付。
- 出了问题没人知道先看哪里。
- 发布被当成结束，而不是下一轮输入开始。

---

# 更新路线图 Checklist

## 适用场景

用于内容 roadmap review、版本路线整理，或防止更新计划退化成功能堆叠。

## 检查项

- roadmap 的阶段顺序有清楚逻辑，而不是谁想加什么就排什么。
- 每个版本目标对应明确的玩家价值。
- 短期修复、中期系统优化、长期扩展被区分清楚。
- 路线图没有承诺超出团队真实产能的内容。
- 每个版本都有可验证的成功标准。
- 更新项不会持续背离项目核心体验。
- 有明确的删减与顺延规则。

## 通过标准

- roadmap 能指导实际取舍，而不是只做展示。
- 团队知道为什么这个版本先于那个版本。
- 更新路线和玩家反馈形成闭环。

## 常见失败信号

- 路线图只是在维护期待，没有维护焦点。
- 每个版本都在同时做修 bug、加系统、加内容、改方向。
- 版本顺序无法解释。
