# 开发实现 Checklist Pack

Stage-specific review checklists for 开发实现.

## Pack Snapshot

- Type: Checklist Pack
- Cards: 3
- Prompt templates: 0
- Checklists: 3
- Other cards: 0
- Covered phases: 开发实现

## When To Use

Use this after a draft, prototype, or build exists and you need a concentrated 开发实现 review pass.

## Suggested Workflow

1. Use 开发实现 Checklist Pack as a review pass after a draft, prototype, or build already exists.
2. Mark the failed checks first, then group them into a short fix order.
3. Do not treat every failed line as equally important; separate identity risks from polish issues.
4. Repeat the checklist after the next meaningful revision.

## Included Cards

### Checklists

- 存档 / 状态机 / 输入系统 Checklist
- 开发实现审查 Checklist
- 性能优化 Checklist

## Full Card Bodies

---

# 存档 / 状态机 / 输入系统 Checklist

## 适用场景

用于系统底座 review、版本稳定性 review，或定位“功能都在加，但基础越来越脆”的问题。

## 检查项

- 关键状态有单一真值来源。
- 存档内容和运行时状态边界清楚。
- 输入映射、输入缓冲和禁用条件有统一规则。
- 状态切换不是散落在各个功能里的隐式 if/else。
- 异常中断和恢复路径有最小处理方案。
- 调试时能观察到当前状态与输入。
- 这些系统能在原型阶段先用简化版稳定跑起来。

## 通过标准

- 基础系统不再靠约定俗成维持。
- 新增玩法时不会反复打穿底层状态逻辑。
- bug 定位可以从状态和输入链路切入。

## 常见失败信号

- 任何新功能都能随意改全局状态。
- 玩家卡死或读档异常时无法解释当前状态。
- 输入冲突只能靠加补丁修。

---

# 开发实现审查 Checklist

## 适用场景

用于实现前 spec review、版本技术审查或判断“为什么越做越乱”。

## 检查项

- 模块边界已经定义，重复 ownership 明显减少。
- 关键状态有单一真值来源。
- 存档、输入和状态机不是散落在功能代码里的隐式逻辑。
- 调试与工具需求被单独列出，而不是默认以后再做。
- 性能预算与高风险平台已经写清楚。
- 里程碑先保证可验证，再考虑豪华封装。
- 若砍半周期，知道优先保留哪些模块。

## 通过标准

- 工程和策划对交付范围理解一致。
- 出现 bug 或性能问题时能快速定位到模块边界。
- 技术方案支持快速迭代，而不是拖慢验证。

## 常见失败信号

- 所有系统共用一套含糊的全局状态。
- 关键风险被写成“后续优化”。
- 工具、调试、观测能力完全缺失。

---

# 性能优化 Checklist

## 适用场景

用于性能 review、移植前审查或判断当前卡顿到底来自哪里。

## 检查项

- 目标平台和帧率/内存预算明确。
- 性能问题被拆成渲染、逻辑、IO、资源加载等来源。
- 最常见卡顿场景有稳定复现方法。
- 关键指标能被采集或观测，而不是凭感觉。
- 高成本系统已按优先级排序。
- 优化不会先破坏验证效率和开发效率。
- “后面优化”不再是无边界借口。

## 通过标准

- 团队知道先测什么、先砍什么、先观察什么。
- 优化顺序服从项目当前阶段目标。
- 性能问题可以被持续跟踪。

## 常见失败信号

- 所有问题都被归结为“机器太差”。
- 没有固定场景能复现卡顿。
- 优化动作全是随机试错。
