# 开发实现 Prompt Pack

Stage-specific prompt templates for 开发实现.

## Pack Snapshot

- Type: Prompt Pack
- Cards: 3
- Prompt templates: 3
- Checklists: 0
- Other cards: 0
- Covered phases: 开发实现

## When To Use

Use this when the current task belongs to 开发实现 and you want reusable drafting prompts instead of starting from scratch.

## Suggested Workflow

1. Pick the prompt template in 开发实现 Prompt Pack that matches the deliverable you need right now.
2. Fill in the placeholders with project-specific constraints instead of generic design language.
3. Keep only one answer path per prompt run so the result remains editable.
4. Pass the output into a checklist or implementation review before treating it as final.

## Included Cards

### Prompt Templates

- 工具链开发 Prompt 模板
- 开发实现 Prompt 模板
- 原型实现 Prompt 模板

## Full Card Bodies

---

# 工具链开发 Prompt 模板

## 适用场景

当团队开始觉得“手工流程太痛了”，但又不确定到底该先做编辑器、调试面板、表工具还是自动化时使用。

## 使用前提供

- 当前最痛的手工流程
- 团队角色与使用者
- 高频改动内容
- 当前出错点和返工点
- 工具开发预算和周期

## 预期输出

1. 工具优先级
2. 使用者与价值
3. 最小工具方案
4. 自动化机会
5. 先不做的工具
6. 里程碑建议

## Prompt 模板

```text
你是一个世界级游戏工具链负责人。
请根据下面的工作流痛点，给出一份最小但高回报的工具链方案。

输入：
- 当前痛点流程：{{painful_workflows}}
- 使用者：{{users}}
- 高频改动：{{frequent_changes}}
- 出错与返工：{{error_and_rework_points}}
- 工具预算：{{tool_budget}}

请输出：
1. 工具优先级：最该先做的 1-3 个工具。
2. 每个工具解决谁的什么问题。
3. 最小工具方案：先做到什么就够了。
4. 自动化机会：哪些环节适合脚本化或批处理。
5. 先不做什么：哪些工具现在看起来诱人但回报低。
6. 里程碑：按最小可交付拆分。

要求：
- 以节省返工和降低出错为核心。
- 不要设计成巨型平台工程。
- 如果手工流程频率不高，要明确指出不值得工具化。
```

## 二次追问

- 只围绕策划编辑器再细化一版。
- 只围绕调试与可视化再细化一版。

---

# 开发实现 Prompt 模板

## 适用场景

当你已经有玩法方向，但还缺一份能让工程和策划同时执行的技术方案 spec 时使用。

## 使用前提供

- 目标平台与技术栈
- 核心系统模块
- 存档、状态机、输入、网络或工具需求
- 性能预算与风险平台
- 开发周期、里程碑与当前 blocker

## 预期输出

1. 技术方案 spec
2. 模块边界与依赖
3. 状态与数据流
4. 存档/输入系统设计
5. 工具链与调试需求
6. 性能风险与优化顺序
7. 里程碑拆分

## Prompt 模板

```text
你是一个世界级游戏工程负责人和技术设计顾问。
请把下面的设计目标整理成一份工程可执行的实现 spec。

输入：
- 平台与技术栈：{{platform_and_stack}}
- 核心玩法模块：{{core_modules}}
- 状态/数据问题：{{state_and_data_concerns}}
- 存档/输入/网络需求：{{save_input_network_requirements}}
- 工具与调试需求：{{tooling_needs}}
- 性能预算：{{performance_budgets}}
- 周期与 blocker：{{timeline_and_blockers}}

请输出：
1. 技术方案概览：为什么这样分层。
2. 模块边界：每个模块负责什么，不负责什么。
3. 状态与数据流：关键状态如何流转，谁拥有真值。
4. 存档/状态机/输入系统：最低可行实现方案。
5. 工具链：哪些内部工具最值得先做。
6. 性能与风险：最可能炸的点和优先优化顺序。
7. 里程碑：按周或按里程碑拆成最小交付。

要求：
- 不要输出泛泛架构图名词堆砌。
- 对每个重要模块给出清晰 ownership。
- 优先保留最能支撑验证的实现，不要先做豪华基础设施。
```

## 二次追问

- 把里程碑再细化成任务列表。
- 单独展开存档 / 输入 / 状态机模块。

---

# 原型实现 Prompt 模板

## 适用场景

当你知道要做原型，但总是一下子想把完整系统都做完时使用。

## 使用前提供

- 要验证的命题
- 必须存在的玩法与 UI 元素
- 可以 fake 或跳过的部分
- 目标周期与验收标准
- 主要技术约束和复用模块

## 预期输出

1. 原型范围
2. 最小技术切片
3. 数据与状态简化
4. 临时实现与正式实现边界
5. 验收标准
6. 放弃项

## Prompt 模板

```text
你是一个世界级原型工程负责人。
请把下面的设计命题压成一份最小可行原型实现方案。

输入：
- 设计命题：{{prototype_goal}}
- 必要功能：{{must_have_features}}
- 可 fake 项：{{fakeable_parts}}
- 周期：{{timeline}}
- 验收标准：{{acceptance_bar}}
- 技术约束：{{technical_constraints}}

请输出：
1. 原型范围：哪些东西必须真的做出来。
2. 最小技术切片：先做哪 3-5 个系统切片。
3. 简化策略：哪些数据、状态、UI 可以先简化。
4. 临时实现边界：哪些是 throwaway，哪些以后可复用。
5. 验收标准：怎样才算验证成功。
6. 放弃项：这次坚决不做什么。

要求：
- 目标是验证，不是生产级完整度。
- 如果一个模块不是验证必需，优先删掉。
- 明确指出最容易偷跑成正式开发的地方。
```

## 二次追问

- 把技术切片改成按天拆分。
- 给每个切片补一个 smoke test。
