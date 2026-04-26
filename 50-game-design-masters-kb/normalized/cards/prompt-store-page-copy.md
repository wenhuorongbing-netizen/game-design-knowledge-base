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
