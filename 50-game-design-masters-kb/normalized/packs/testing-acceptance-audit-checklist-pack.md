# 测试、验收与审计 Checklist Pack

Stage-specific review checklists for 测试、验收与审计.

## Pack Snapshot

- Type: Checklist Pack
- Cards: 4
- Prompt templates: 0
- Checklists: 4
- Other cards: 0
- Covered phases: 测试、验收与审计

## When To Use

Use this after a draft, prototype, or build exists and you need a concentrated 测试、验收与审计 review pass.

## Suggested Workflow

1. Use 测试、验收与审计 Checklist Pack as a review pass after a draft, prototype, or build already exists.
2. Mark the failed checks first, then group them into a short fix order.
3. Do not treat every failed line as equally important; separate identity risks from polish issues.
4. Repeat the checklist after the next meaningful revision.

## Included Cards

### Checklists

- 版本验收 Checklist
- 测试、验收与审计 Checklist
- 回归测试 Checklist
- 如何把这套知识库落到具体项目

## Full Card Bodies

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

# 测试、验收与审计 Checklist

## 适用场景

用于版本验收会、QA kickoff 或项目状态审计。

## 检查项

- 版本目标与通过标准已经写成玩家可执行任务。
- 关键 bug 有严重度和影响路径，而不是一锅端待修。
- 回归测试项覆盖核心循环、存档、输入和关键 UI。
- 试玩问题有明确观察目标，不只是“随便玩玩看”。
- stop ship 条件写清楚并被全员接受。
- 下一轮优先级按体验风险而不是按谁声音大排序。
- 每次构建都能复用同一套基础 smoke test。

## 通过标准

- 团队知道当前版本到底在验什么。
- 严重问题能快速归类为阻塞 / 非阻塞。
- 试玩与 QA 结果能直接驱动下一轮取舍。

## 常见失败信号

- 验收标准只写成主观句子，如“更流畅、更好玩”。
- 版本会后仍然没人知道先修哪个问题。
- 回归测试只能靠个人记忆。

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

# 如何把这套知识库落到具体项目

这份笔记不是针对某个单独项目，而是给任何正在开发中的游戏一个通用落地方法。

重点不是“继续读更多书”，而是把手头已经有的设定、系统和文档压缩成更清楚的设计判断。

## 优先映射

### 产品定义与核心循环

优先看：

- Jesse Schell
- Raph Koster
- `Game Design Concepts` Level 1, 3, 5

你要回答的问题：

- 玩家反复进入的 30 秒、5 分钟、20 分钟循环分别是什么？
- 每个循环在强化哪一种乐趣？
- 玩家在每个阶段学会了什么新的模式？

### 资源循环、长期发展与决策压力

优先看：

- Adams / Dormans
- `Game Design Concepts` Level 16
- `Characteristics of Games`

你要回答的问题：

- 核心资源有哪些？它们是闭环还是开环？
- 哪个行为是高收益但高风险，哪个行为是稳定但缓慢？
- 有没有“越赢越赢”的过强正反馈？

### 战斗、操作与即时反馈

优先看：

- Steve Swink
- Scott Rogers
- Tracy Fullerton

你要回答的问题：

- 每次攻击、受击、移动、技能释放，玩家是否立刻收到清楚反馈？
- 失败是因为判断失误，还是因为信息不清？
- 一场战斗结束后，玩家能否说出“我为什么赢 / 输”？

### 世界、身份与长期沉浸

优先看：

- Richard Bartle
- Chris Crawford
- Miguel Sicart

你要回答的问题：

- 玩家在这个世界里是谁，而不只是“操作一个角色”？
- 世界是否支持身份表达、关系变化和长期目标？
- 玩法与叙事是否真的相互支撑，而不是平行摆设？

## 任何项目都值得建立的 10 个审查问题

1. 核心循环是否能用一句话说清，并且团队成员说法一致？
2. 几个主要系统之间是否存在明确的资源交换关系？
3. 玩家前两小时的成长是否以“新理解”驱动，而不是纯数值膨胀？
4. 有没有至少一种明确的短期决策张力和一种长期规划张力？
5. 文档中的规则是否能被第一次接触项目的人独立读懂？
6. 任意一个大系统如果被删除，产品定位会不会明显变化？
7. 战斗、经营、成长或探索的奖励节奏是否互相打架？
8. 信息层是否把关键决策点暴露给玩家，而不是埋在后台数值里？
9. 玩家是否能形成“我的基地 / 我的队伍 / 我的路线 / 我的身份”这类所有权感？
10. 当前项目最大的设计风险是“无聊”“混乱”“过载”还是“空心”？团队是否说得一致？

## 建议你下一轮文档改造时的工作方式

1. 先抽一条主循环，不要同时改三个系统。
2. 每次修改只验证一个核心假设。
3. 每轮评审都写清楚：
   - 目标体验
   - 当前机制
   - 预期动态
   - 风险
   - 验证方法

## 推荐的最小行动

如果只做一件事，我建议你先把当前项目抽成下面四张图：

- 核心循环图
- 资源循环图
- 玩家成长图
- 信息暴露图

做完这四张图之后，再去读 Schell、Dormans / Adams 和 MIT 的规则写作材料，收益会最大。
