# Narrative Pack

Cross-phase bundle for worldbuilding, dialogue, quest text, and narrative structure reviews.

## Pack Snapshot

- Type: Use Case Pack
- Cards: 4
- Prompt templates: 2
- Checklists: 2
- Other cards: 0
- Covered phases: 内容与叙事

## When To Use

Use this when story content exists but lacks a clear structure, tone, or production-ready text workflow.

## Inputs To Prepare

- World premise and role of the player
- Main cast, faction, or conflict outline
- Narrative format and delivery constraints
- Samples of current dialogue or quest text

## Suggested Workflow

1. Establish the world and narrative frame first.
2. Write dialogue only after the structure and role logic are stable.
3. Review quest text and narrative beats as production outputs.
4. Use the final checklist to catch inconsistency and readability drift.

## Included Cards

### Prompt Templates

- 对话写作 Prompt 模板
- 世界观设定 Prompt 模板

### Checklists

- 任务文本设计 Checklist
- 叙事结构评审 Checklist

## Full Card Bodies

---

# 对话写作 Prompt 模板

## 适用场景

当角色会说话了，但文本还在“交代信息”和“立角色”之间打架时使用。

## 使用前提供

- 角色身份、关系和当前场景目标
- 玩家此刻最需要知道的信息
- 这段对话要推动的任务或情绪
- 角色口吻和禁区
- 当前对话的问题，如啰嗦、平、信息塞车

## 预期输出

1. 对话目标
2. 角色关系张力
3. 信息分配
4. 示例对话
5. 删减建议
6. 可交互点

## Prompt 模板

```text
你是一个世界级游戏对话写作者。
请把下面的场景信息整理成一段既能立角色、又不拖垮节奏的游戏对话方案。

输入：
- 角色与关系：{{characters_and_relationships}}
- 当前场景目标：{{scene_goal}}
- 玩家必须知道的信息：{{must_know_info}}
- 任务/情绪推进：{{quest_or_emotion_goal}}
- 角色口吻：{{voice_constraints}}
- 当前问题：{{dialogue_problems}}

请输出：
1. 对话目标：这段对话最该完成什么。
2. 关系张力：角色之间最重要的拉扯是什么。
3. 信息分配：哪些信息明说，哪些留白。
4. 示例对话：写一段可直接进游戏的版本。
5. 删减建议：哪些句子最容易变成废话。
6. 交互点：玩家在哪些地方适合介入或选择。

要求：
- 不要用纯 exposition 对话。
- 角色说话方式要能区分身份和关系。
- 优先保证游戏节奏，不要把对话写成小说段落。
```

## 二次追问

- 改成更短、更适合高频交互的版本。
- 只保留任务信息最小化版本。

---

# 世界观设定 Prompt 模板

## 适用场景

当世界观文档越写越厚，但跟玩家行为、资源关系和系统冲突仍然脱节时使用。

## 使用前提供

- 项目题材与核心 fantasy
- 玩家在世界中的身份
- 关键势力、地点、资源和禁忌
- 你想强调的价值冲突或生存压力
- 当前世界观和玩法脱节的点

## 预期输出

1. 世界观核心命题
2. 玩家身份与位置
3. 势力/地点/资源结构
4. 主要冲突
5. 世界规则如何作用于玩法
6. 应保留与应删除的设定

## Prompt 模板

```text
你是一个世界级游戏叙事设计师和系统世界构建顾问。
请把以下世界观想法整理成一套能真正服务玩法和身份表达的世界框架。

输入：
- 题材与核心 fantasy：{{theme_and_fantasy}}
- 玩家身份：{{player_role}}
- 势力与地点：{{factions_and_places}}
- 关键资源与禁忌：{{resources_and_taboos}}
- 核心冲突：{{core_conflicts}}
- 当前脱节点：{{worldbuilding_disconnects}}

请输出：
1. 世界观核心命题：这个世界最重要的规则和张力是什么。
2. 玩家身份：玩家在这个世界里是谁，为什么重要。
3. 势力/地点/资源结构：它们如何制造选择与风险。
4. 主要冲突：哪些冲突会持续推动内容与系统。
5. 对玩法的作用：世界规则如何落到循环、成长、叙事和经济。
6. 删改建议：哪些设定值得保留，哪些只是装饰噪音。

要求：
- 不要写百科全书式背景介绍。
- 所有设定都要能回答“它怎样影响玩家的行为或判断”。
- 如果存在设定很酷但会拖垮玩法的部分，要直接指出。
```

## 二次追问

- 只围绕玩家身份与长期归属感再拆一版。
- 只围绕势力冲突和资源政治再拆一版。

---

# 任务文本设计 Checklist

## 适用场景

用于任务文案 review、日志文案 review，或排查“玩家看了字但还是不知道做什么”。

## 检查项

- 任务目标写成玩家可执行动作，而不是含糊愿望。
- 文本长度与玩家阅读负担匹配。
- 关键信息不会埋在背景描述里。
- 角色口吻与世界观一致。
- 玩家读完后能知道去哪里、做什么、为什么做。
- 日志文本、接受文本、完成文本之间信息分工清楚。
- 文本不会误导玩家做错误路径判断。

## 通过标准

- 任务文本既能说明目标，也能保留角色味道。
- 玩家不需要二次猜测系统意图。
- 文本支持行动，而不是只做装饰。

## 常见失败信号

- 文本很有风格，但任务目标不清楚。
- 文本清楚了，但完全失去角色和世界语气。
- 玩家只能靠 UI 高亮而不是文本理解任务。

---

# 叙事结构评审 Checklist

## 适用场景

用于剧情结构 review、任务树审查，或处理“内容很多但推进无感”的问题。

## 检查项

- 主线推进与玩家核心目标一致。
- 支线不是纯填充，而是在补角色、世界或系统理解。
- 关键叙事节点有清楚的节奏变化和 stakes 上升。
- 系统事件与剧情事件不会互相打断或互相否定。
- 玩家在叙事中拥有足够的行动位置，而不是只看故事发生。
- 叙事回报与玩法回报关系清楚。
- 内容结构能支持后续扩展，而不是每条线都重新起炉灶。

## 通过标准

- 玩家能感知自己在往哪条线推进，以及为什么推进。
- 叙事结构在系统层也成立，而不只是文本层成立。
- 每条内容线都知道自己服务的目标。

## 常见失败信号

- 剧情和系统像两套并行节目单。
- 支线只能靠奖励来吸引玩家。
- 关键节点出现时没有结构上的重量变化。
