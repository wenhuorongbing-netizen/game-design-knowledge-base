# 美术、UI、体验表达 Checklist Pack

Stage-specific review checklists for 美术、UI、体验表达.

## Pack Snapshot

- Type: Checklist Pack
- Cards: 3
- Prompt templates: 0
- Checklists: 3
- Other cards: 0
- Covered phases: 美术、UI、体验表达

## When To Use

Use this after a draft, prototype, or build exists and you need a concentrated 美术、UI、体验表达 review pass.

## Suggested Workflow

1. Use 美术、UI、体验表达 Checklist Pack as a review pass after a draft, prototype, or build already exists.
2. Mark the failed checks first, then group them into a short fix order.
3. Do not treat every failed line as equally important; separate identity risks from polish issues.
4. Repeat the checklist after the next meaningful revision.

## Included Cards

### Checklists

- 可读性与可访问性评审 Checklist
- 美术、UI、体验表达 Checklist
- 玩家体验流畅度评审 Checklist

## Full Card Bodies

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

# 美术、UI、体验表达 Checklist

## 适用场景

用于 UI review、polish review 或判断“为什么看起来能玩但用起来发堵”。

## 检查项

- 屏幕上最重要的信息在 1 秒内能被看见。
- HUD 常驻信息与上下文信息分层清楚。
- 输入、命中、受击、状态切换都有即时反馈。
- 视觉风格统一，不同页面不会像来自不同游戏。
- 字号、对比、颜色和动效速度对主要设备可读。
- 关键信息不依赖颜色单独传达。
- 最常见玩家任务不会被界面负担打断。

## 通过标准

- 玩家能快速理解当前状态和下一步动作。
- 反馈闭环支撑了操作爽感与理解成本。
- 视觉 identity 与玩法 identity 同向。

## 常见失败信号

- 信息过多但没有层次，玩家只能扫全屏。
- 动效很多却不能解释系统状态变化。
- 界面问题只能靠玩家熟悉后去适应。

---

# 玩家体验流畅度评审 Checklist

## 适用场景

用于体验 polish review，或排查“没有大 bug 但玩起来总觉得卡、堵、断”的问题。

## 检查项

- 玩家最常见任务不会频繁被弹窗或层级跳转打断。
- 关键状态切换有足够快且明确的反馈。
- 等待、加载、过场和确认步骤数量可控。
- 失败和重试的链路足够短。
- 从一个系统跳到另一个系统时不会丢失上下文。
- 需要玩家注意的信号强度与其重要性匹配。
- 高频动作不会因为 UI 或动画过度而变慢。

## 通过标准

- 玩家能持续保持在目标任务流里。
- 系统切换不会制造无谓摩擦。
- 节奏问题可以被定位到具体节点。

## 常见失败信号

- 体验被大量小停顿切碎。
- 玩家总在问“我接下来去哪/看哪”。
- 界面和动画为了表现自己而压过了操作节奏。
