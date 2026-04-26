# 立项与方向 Prompt Pack

Stage-specific prompt templates for 立项与方向.

## Pack Snapshot

- Type: Prompt Pack
- Cards: 4
- Prompt templates: 4
- Checklists: 0
- Other cards: 0
- Covered phases: 立项与方向

## When To Use

Use this when the current task belongs to 立项与方向 and you want reusable drafting prompts instead of starting from scratch.

## Suggested Workflow

1. Pick the prompt template in 立项与方向 Prompt Pack that matches the deliverable you need right now.
2. Fill in the placeholders with project-specific constraints instead of generic design language.
3. Keep only one answer path per prompt run so the result remains editable.
4. Pass the output into a checklist or implementation review before treating it as final.

## Included Cards

### Prompt Templates

- 竞品拆解 Prompt 模板
- 立项与方向 Prompt 模板
- 平台适配判断 Prompt 模板
- 玩家画像与目标市场 Prompt 模板

## Full Card Bodies

---

# 竞品拆解 Prompt 模板

## 适用场景

当团队正在拿竞品做方向参照，但讨论停留在“像不像、酷不酷、卖得好不好”时使用。

## 使用前提供

- 你的项目一句话概念
- 3-5 个直接竞品
- 每个竞品最强与最弱的地方
- 你最想借鉴和最怕重复的部分
- 当前项目的资源和平台约束

## 预期输出

1. 竞品分层
2. 核心差异判断
3. 可借鉴要素
4. 不可照搬要素
5. 机会区间
6. 对当前项目的方向建议

## Prompt 模板

```text
你是一个世界级游戏总监和竞品拆解顾问。
请不要写市场套话，而是把竞品分析压成对项目方向有帮助的结论。

输入：
- 我们的项目：{{project_pitch}}
- 竞品列表：{{competitors}}
- 竞品优点：{{competitor_strengths}}
- 竞品弱点：{{competitor_weaknesses}}
- 想借鉴的部分：{{wanted_lessons}}
- 不想重复的部分：{{avoid_copying}}
- 资源/平台约束：{{constraints}}

请输出：
1. 竞品分层：哪些是直接竞品，哪些只是题材或情绪参考。
2. 核心差异：我们的项目最应该和他们在哪些点拉开。
3. 可借鉴要素：哪些机制、表达、节奏值得学。
4. 不可照搬要素：哪些设计在我们的约束下会失真。
5. 机会区间：还有哪些需求或体验没有被满足。
6. 方向建议：这份竞品拆解会怎样改变我们的立项结论。

要求：
- 明确指出“看起来像机会、实际上是陷阱”的点。
- 区分题材相似、体验相似、系统相似。
- 最后给出一句方向建议。
```

## 二次追问

- 按 PC / 主机 / 移动端分别重做一版判断。
- 只围绕核心循环再拆一层竞品差异。

---

# 立项与方向 Prompt 模板

## 适用场景

当一个项目还停留在概念、愿景、题材或一堆好点子阶段时，用它把高层讨论压回“做什么、不做什么、先验证什么”。

## 使用前提供

- 项目一句话概念与核心 fantasy
- 目标玩家、目标市场与参考竞品
- 平台、发行、预算、周期和团队约束
- 必须保留的创意与当前最大不确定性
- 你已经讨论过但仍然分歧很大的方向点

## 预期输出

1. 方向收敛结论
2. 核心玩法判断
3. 玩家画像与目标市场
4. 平台适配判断
5. 主要风险预判
6. MVP 范围裁剪
7. 下一轮验证动作

## Prompt 模板

```text
你是一个世界级游戏总监、系统设计研究者和项目审查顾问。
请不要按岗位分工回答，而是按“开发阶段 -> 输出物”组织分析。

项目背景：
- 项目名：{{project_name}}
- 一句话概念：{{one_sentence_pitch}}
- 核心 fantasy：{{core_fantasy}}
- 目标玩家：{{target_players}}
- 参考竞品：{{comparables}}
- 平台：{{platforms}}
- 商业/发行约束：{{business_constraints}}
- 团队与周期：{{team_and_timeline}}
- 当前不确定点：{{top_unknowns}}
- 必须保留元素：{{must_keep}}

请输出：
1. 方向收敛结论：一句话说明应该做什么，不该做什么。
2. 核心玩法判断：当前概念真正可成立的玩法核心是什么。
3. 玩家画像与目标市场：最应该服务谁，为什么。
4. 平台适配判断：哪些平台适合，哪些平台会拉垮设计。
5. 风险预判：列出 3-5 个最高风险，并给出验证方法。
6. MVP 范围裁剪：保留项、推迟项、删除项。
7. 下一轮验证动作：一周内应该做的最小验证件。

要求：
- 结论必须可执行，避免空泛愿景描述。
- 明确指出互相冲突的目标。
- 需要做取舍时，优先保留最能定义项目 identity 的部分。
```

## 二次追问

- 再给出两个方向变体：更商业化 / 更作者性。
- 如果团队资源砍半，重新给出 MVP。

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

# 玩家画像与目标市场 Prompt 模板

## 适用场景

当团队在说“应该有更广人群”“做给所有玩家玩”时，用它把目标受众收束到具体的玩家画像与市场位置。

## 使用前提供

- 项目概念与核心体验
- 最像的竞品和最不想像的竞品
- 目标平台、价格和游玩时长
- 你认为玩家会为什么而来、为什么而留
- 团队最担心的市场错位

## 预期输出

1. 核心玩家画像
2. 次级玩家画像
3. 使用场景
4. 买点与阻力
5. 市场位置
6. 不该服务的人群

## Prompt 模板

```text
你是一个世界级游戏总监和用户研究顾问。
请把下面的项目信息整理成明确的玩家画像和目标市场判断。

输入：
- 项目概念：{{project_concept}}
- 核心体验：{{core_experience}}
- 参考竞品：{{reference_titles}}
- 目标平台/价格：{{platform_and_price}}
- 单次游玩时长：{{session_shape}}
- 你认为玩家会为什么而来：{{entry_motives}}
- 你认为玩家会为什么而留：{{retention_motives}}
- 市场错位担忧：{{market_mismatch_fears}}

请输出：
1. 核心玩家画像：最应该优先服务的人是谁。
2. 次级玩家画像：还能覆盖谁，但不应为其扭曲主设计。
3. 使用场景：玩家在什么情境下最愿意打开这款游戏。
4. 买点与阻力：玩家最容易被什么吸引，又会被什么劝退。
5. 市场位置：该项目在同类中最该占什么位置。
6. 明确指出不该优先服务的人群。

要求：
- 不要用泛化人群词汇，如“所有策略玩家”。
- 如果项目同时想服务两个相互冲突的群体，要指出并取舍。
- 最后给一句目标人群定义。
```

## 二次追问

- 改成更商业化版本的人群定位。
- 只围绕 Steam / 主机市场重做一版。
