# 测试、验收与审计 Prompt Pack

Stage-specific prompt templates for 测试、验收与审计.

## Pack Snapshot

- Type: Prompt Pack
- Cards: 3
- Prompt templates: 3
- Checklists: 0
- Other cards: 0
- Covered phases: 测试、验收与审计

## When To Use

Use this when the current task belongs to 测试、验收与审计 and you want reusable drafting prompts instead of starting from scratch.

## Suggested Workflow

1. Pick the prompt template in 测试、验收与审计 Prompt Pack that matches the deliverable you need right now.
2. Fill in the placeholders with project-specific constraints instead of generic design language.
3. Keep only one answer path per prompt run so the result remains editable.
4. Pass the output into a checklist or implementation review before treating it as final.

## Included Cards

### Prompt Templates

- 测试、验收与审计 Prompt 模板
- 项目状态审计 Prompt 模板
- Bug Triage Prompt 模板

## Full Card Bodies

---

# 测试、验收与审计 Prompt 模板

## 适用场景

当版本开始可玩，但团队对“到底算不算通过”“先修什么”没有统一口径时使用。

## 使用前提供

- 当前 build 范围与目标玩家任务
- 最新试玩发现和关键 bug
- 已知高风险与 blocker
- 版本目标与发版门槛
- 你想验证的玩家体验问题

## 预期输出

1. 玩法验收标准
2. 版本验收与 stop/go 判断
3. Bug triage
4. 回归测试检查单
5. 试玩问题设计
6. 下一轮迭代优先级

## Prompt 模板

```text
你是一个世界级游戏测试负责人和项目审计顾问。
请根据当前版本信息，输出一份能直接用于版本 review 的验收与审计结论。

输入：
- 当前 build 范围：{{build_scope}}
- 目标玩家任务：{{target_tasks}}
- 最新试玩反馈：{{latest_playtest_findings}}
- 关键 bug / blocker：{{critical_bugs}}
- 版本目标：{{release_goal}}
- 发版门槛：{{release_bar}}
- 重点体验问题：{{experience_questions}}

请输出：
1. 玩法验收标准：玩家必须完成什么才能算通过。
2. 版本审计：当前是否达到目标，原因是什么。
3. Bug triage：按严重度和影响链路排序。
4. 回归测试检查单：每次构建必测项。
5. 试玩问题设计：下一轮要重点问什么、观察什么。
6. 优先级建议：先修什么，后修什么，哪些暂不修。

要求：
- 不要只列 bug，要说明影响的玩家任务和体验目标。
- 明确 stop ship 条件。
- 区分必须修复的问题和可以带病迭代的问题。
```

## 二次追问

- 把回归清单压成每日 smoke test 版本。
- 单独输出一个给设计团队的体验问题清单。

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
