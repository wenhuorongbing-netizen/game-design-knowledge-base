# Audit Pack

Cross-phase bundle for status review, risk discovery, regression checking, and delivery-quality audits.

## Pack Snapshot

- Type: Use Case Pack
- Cards: 7
- Prompt templates: 2
- Checklists: 5
- Other cards: 0
- Covered phases: 测试、验收与审计 / 开发实现 / 美术、UI、体验表达 / 立项与方向

## When To Use

Use this when a build feels unstable, unclear, late, or over-scoped and you need a structured review pass.

## Inputs To Prepare

- Current build or branch state
- Known blockers, bugs, and risk areas
- Recent regressions or quality complaints
- Performance, UI, or onboarding pain points

## Suggested Workflow

1. Run a project-status audit to expose the current bottlenecks.
2. Triage the known bugs and regression risk first.
3. Review build acceptance, performance, and readability together.
4. End with a concrete risk list and a fix order.

## Included Cards

### Prompt Templates

- 项目状态审计 Prompt 模板
- Bug Triage Prompt 模板

### Checklists

- 版本验收 Checklist
- 风险预判 Checklist
- 回归测试 Checklist
- 可读性与可访问性评审 Checklist
- 性能优化 Checklist

## Full Card Bodies

---

# 项目状态审计 Prompt 模板

## 适用场景

用于 milestone review、版本停损判断，或团队觉得一直很忙但不确定到底有没有往前走时。

## 使用前提供

- 当前目标与本期范围
- 已完成内容与未完成内容
- 最近试玩/QA/用户反馈
- 当前 blocker、技术债和制作债
- 团队时间和资源变化

## 预期输出

1. 阶段判断
2. 当前真实进展
3. 关键阻塞
4. 风险排序
5. 建议的 stop/continue/pivot 结论
6. 下一阶段最小目标

## Prompt 模板

```text
你是一个世界级项目审计顾问。
请基于下面的信息，对项目当前状态做一次严格的阶段审计。

输入：
- 当前目标：{{current_goal}}
- 本期范围：{{current_scope}}
- 已完成内容：{{done_items}}
- 未完成内容：{{undone_items}}
- 最新试玩/QA：{{latest_findings}}
- blocker 与技术债：{{blockers_and_debt}}
- 资源变化：{{resource_changes}}

请输出：
1. 阶段判断：项目现在更像立项、原型、生产还是 polishing，为什么。
2. 真实进展：哪些进展是真的，哪些只是忙碌感。
3. 阻塞：当前最大的 3-5 个阻塞项。
4. 风险排序：现在最该先解决什么。
5. 结论：continue / stop / pivot，并说明理由。
6. 下一阶段目标：只保留最小可推进目标。

要求：
- 不要安慰式总结。
- 明确指出伪进展。
- 需要停损时直接说。
```

## 二次追问

- 把下一阶段目标改成两周冲刺版本。
- 只围绕最大 blocker 再展开一版解决路径。

---

# Bug Triage Prompt 模板

## 适用场景

当 bug 越堆越多，团队开始只看数量、不再看影响链路时使用。

## 使用前提供

- 当前 bug 清单
- 每个 bug 的复现路径和范围
- 影响到的玩家任务
- 版本目标和发版门槛
- 已知修复成本

## 预期输出

1. 严重度排序
2. 影响链路
3. 必须立即修复
4. 可带病迭代
5. 可延期处理
6. triage 结论

## Prompt 模板

```text
你是一个世界级 QA lead。
请根据以下 bug 清单，给出一份真正可执行的 triage 结论。

输入：
- bug 清单：{{bug_list}}
- 复现路径：{{repro_steps}}
- 影响玩家任务：{{affected_player_tasks}}
- 版本目标：{{build_goal}}
- 发版门槛：{{release_bar}}
- 修复成本：{{fix_cost_estimates}}

请输出：
1. 严重度排序：按真实体验影响排序，而不是按直觉。
2. 影响链路：每个高优先级 bug 会破坏什么玩家任务。
3. 立即修复：哪些必须马上处理。
4. 可带病迭代：哪些不会遮住当前验证目标。
5. 可延期：哪些问题可以安全后置。
6. triage 结论：给出本轮处理建议。

要求：
- 同时考虑严重度、频率和验证目标影响。
- 不要只按技术复杂度排序。
- 结论要能直接指导本轮冲刺。
```

## 二次追问

- 把立即修复项改成今日必须完成版本。
- 为每类 bug 给出最简回归方法。

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

# 风险预判 Checklist

## 适用场景

用于立项会后、原型前和方向争议很大时的快速风险盘点。

## 检查项

- 核心玩法风险和制作风险被分开列出。
- 最贵的系统、资产和技术假设已经点名。
- 需要依赖未知外部条件的部分已被标红。
- 范围膨胀风险已经落实到删减候选项。
- 项目成功最依赖的 1-2 个假设已明确。
- 每个高风险项都有验证动作，而不是只写担忧。
- 失败后怎样止损也被提前考虑过。

## 通过标准

- 团队知道哪类风险先验证，哪类风险可以后置。
- 高风险不再被包装成“以后再看”。
- 原型阶段的重点足够聚焦。

## 常见失败信号

- 所有风险都被写成“需要更多时间”。
- 没有人能指出最可能导致项目失败的点。
- 删减范围时没有任何预案。

---

# 回归测试 Checklist

## 适用场景

用于每次 build smoke test、版本回归和大改动后的最低保底检查。

## 检查项

- 核心循环至少跑通一轮。
- 关键存档/读档路径过一遍。
- 关键输入路径和重绑定/冲突场景过一遍。
- 高风险 UI / HUD 交互过一遍。
- 上一轮修复过的高优先级 bug 有针对性回归。
- 跨系统切换链路至少走一遍。
- 所有必测项都能被新成员读懂并执行。

## 通过标准

- 回归清单足够小，能持续执行。
- 它覆盖的是最容易炸且最值钱的路径。
- 版本风险不会因为“忘测”而失控。

## 常见失败信号

- 清单太长，团队根本不跑。
- 清单过于泛泛，谁跑都得靠自己理解。
- 修过的 bug 总在下个版本重复回来。

---

# 可读性与可访问性评审 Checklist

## 适用场景

用于 UI / HUD review、设备适配 review，或排查“看起来很美但玩家读不懂”。

## 检查项

- 关键状态和目标信息能在短时间内被识别。
- 字号、对比和层级对目标设备可读。
- 颜色不是唯一的信息通道。
- 高频操作不依赖细小或难点的交互目标。
- 视觉装饰不会遮蔽关键反馈和路径。
- 动效速度不会妨碍理解和操作。
- 新玩家和熟手都能快速找到下一步行动信息。

## 通过标准

- 玩家能在正常负荷下看清、看懂、做对。
- 界面和视觉反馈没有排斥关键玩家群体。
- 可读性是结构层成立的，而不是靠玩家适应。

## 常见失败信号

- 只有熟手才知道信息在哪。
- 为了美观牺牲了判断速度。
- 重要状态需要多次确认才能看清。

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
