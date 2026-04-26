# 美术、UI、体验表达 Prompt Pack

Stage-specific prompt templates for 美术、UI、体验表达.

## Pack Snapshot

- Type: Prompt Pack
- Cards: 3
- Prompt templates: 3
- Checklists: 0
- Other cards: 0
- Covered phases: 美术、UI、体验表达

## When To Use

Use this when the current task belongs to 美术、UI、体验表达 and you want reusable drafting prompts instead of starting from scratch.

## Suggested Workflow

1. Pick the prompt template in 美术、UI、体验表达 Prompt Pack that matches the deliverable you need right now.
2. Fill in the placeholders with project-specific constraints instead of generic design language.
3. Keep only one answer path per prompt run so the result remains editable.
4. Pass the output into a checklist or implementation review before treating it as final.

## Included Cards

### Prompt Templates

- 动效与打击感表达 Prompt 模板
- 美术、UI、体验表达 Prompt 模板
- HUD / UI 结构设计 Prompt 模板

## Full Card Bodies

---

# 动效与打击感表达 Prompt 模板

## 适用场景

当团队觉得“手感不对”“动作发飘”“打中像没打中”时使用。

## 使用前提供

- 目标动作或战斗感觉
- 输入延迟、角色响应、移动曲线
- 命中、受击、位移、镜头和音效现状
- 参考作品
- 当前最明显的手感问题

## 预期输出

1. 目标 feel 描述
2. 输入与响应链
3. 命中与受击反馈
4. 视觉/音频/镜头配合
5. 过度表现风险
6. 优先级最高的 polish 项

## Prompt 模板

```text
你是一个世界级 game-feel 顾问。
请把下面的问题整理成一份可执行的动效与打击感优化方案。

输入：
- 目标 feel：{{target_feel}}
- 输入与响应：{{input_and_response}}
- 命中/受击现状：{{hit_reaction_state}}
- 镜头/音效/动效：{{camera_audio_vfx}}
- 参考作品：{{references}}
- 当前问题：{{current_feel_problems}}

请输出：
1. 目标 feel：玩家应该感受到什么。
2. 响应链：输入到反馈之间每一步哪里在拖后腿。
3. 命中反馈：命中、受击、错失、爆发各自要强调什么。
4. 多模态配合：镜头、动画、音效、粒子如何分工。
5. 风险：哪些过度表现会伤害可控性和可读性。
6. 优先级：最值得先修的 5 个点。

要求：
- 先保玩家控制感，再谈视觉炫技。
- 区分“反馈不足”和“动作设计本身有问题”。
- 不要让 hit-feel 牺牲信息清晰度。
```

## 二次追问

- 只围绕移动手感重做一版。
- 只围绕近战命中反馈重做一版。

---

# 美术、UI、体验表达 Prompt 模板

## 适用场景

当一个项目已经能玩，但界面拥挤、反馈发虚、风格不统一或移动阅读性差时使用。

## 使用前提供

- 视觉方向与参考图
- HUD / 菜单 / 信息层级现状
- 目标设备、分辨率与输入方式
- 当前反馈问题，例如打击感不足、动效拖沓、信息读不清
- 可访问性或发行平台限制

## 预期输出

1. 美术方向
2. HUD / UI 结构设计
3. 视觉层级与可读性
4. 动效与打击感表达
5. 资产规格
6. 可访问性风险
7. 优先级最高的 polish 项

## Prompt 模板

```text
你是一个世界级游戏 UI / UX / art direction 顾问。
请根据以下输入，把视觉表达和交互反馈整理成一份可执行的审查结论。

输入：
- 目标视觉方向：{{visual_direction}}
- 参考作品：{{reference_titles}}
- 当前 HUD / UI：{{hud_ui_state}}
- 目标设备与输入方式：{{devices_and_input}}
- 当前反馈问题：{{feedback_issues}}
- 可访问性与平台限制：{{accessibility_constraints}}

请输出：
1. 美术方向：最应该保留的视觉 identity。
2. HUD / UI 结构：信息层级、常驻元素、上下文元素。
3. 可读性：字号、对比、留白、聚焦点问题。
4. 动效与打击感：输入反馈、命中反馈、状态切换反馈。
5. 资产规格：关键界面或美术资源需要怎样的规格约束。
6. 可访问性风险：颜色、对比、操作复杂度、拥挤度。
7. 优先级：最值得先修的 5 个 polish 项。

要求：
- 以玩家阅读和操作负担为中心。
- 不要只说“做得更酷、更统一”，要指出具体结构问题。
- 说明哪些问题影响理解，哪些问题只影响质感。
```

## 二次追问

- 把 HUD 结构细化成 wireframe 级描述。
- 单独输出 hit-feel polish 清单。

---

# HUD / UI 结构设计 Prompt 模板

## 适用场景

当画面上信息越来越多，团队都觉得“应该再整理一下”，但没人能说清结构应该怎样重排时使用。

## 使用前提供

- 当前 HUD 截图或元素清单
- 玩家最常做的任务
- 常驻信息、上下文信息和警报信息
- 目标设备与输入方式
- 当前阅读和操作痛点

## 预期输出

1. 信息层级
2. 区域分配
3. 常驻/上下文元素拆分
4. 交互优先级
5. 危险拥挤点
6. 重排建议

## Prompt 模板

```text
你是一个世界级游戏 HUD / UI 架构顾问。
请基于以下输入，把当前界面重组为一套更可读、更符合玩家任务流的 HUD 方案。

输入：
- 当前 HUD / UI：{{current_hud}}
- 玩家常见任务：{{common_player_tasks}}
- 常驻信息：{{persistent_info}}
- 上下文信息：{{contextual_info}}
- 警报/高优先级信息：{{alerts}}
- 设备与输入：{{devices_and_input}}
- 当前痛点：{{ui_pain_points}}

请输出：
1. 信息层级：什么必须常驻，什么只在上下文出现。
2. 屏幕区域：左上/右上/底部/中心分别放什么。
3. 任务导向结构：玩家在常见任务里最先看哪里。
4. 拥挤与冲突：哪些元素在抢同一块注意力。
5. 重排建议：删什么、合并什么、后置什么。
6. 简版 wireframe 描述：按区域描述最终布局。

要求：
- 以玩家任务优先，而不是按功能部门分区。
- 区分常驻信息和“只有设计师想看到”的信息。
- 不要增加更多面板来解决拥挤。
```

## 二次追问

- 把最终布局再细化成移动端版本。
- 单独评估战斗态 HUD。
