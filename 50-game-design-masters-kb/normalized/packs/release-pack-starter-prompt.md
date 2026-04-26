# Release Pack Starter Prompt

Use the following copy-paste prompt when you want one integrated response instead of opening each card separately.

## What This Prompt Does

Use this when a project is moving from internal development into public testing, store presence, or release preparation.

## Copy-Paste Prompt

```text
You are a world-class game design director, systems designer, and production reviewer. I need you to run the "Release Pack" workflow.

Use the context below and produce one integrated response.

Project context:
- Target release window and platform set: {{target_release_window_and_platform_set}}
- Current build quality and known defects: {{current_build_quality_and_known_defects}}
- Store-facing fantasy, hook, and audience: {{store_facing_fantasy_hook_and_audience}}
- Retention goals and live-ops expectations: {{retention_goals_and_live_ops_expectations}}

Workflow to follow:
1. 商店页文案 Prompt 模板
   Goal: 把项目卖点压成商店页 headline、短描述、长描述和 feature bullets。

2. 发布前检查 Checklist
   Goal: 检查项目在对外试玩、上架或发版本前是否已经满足最基本的发布条件。

3. 版本验收 Checklist
   Goal: 检查当前 build 是否达到可提交、可试玩、可继续迭代的最低门槛。

4. 留存优化 Prompt 模板
   Goal: 把留存问题压成具体的流失节点、驱动力缺口和可实验优化点。

5. 更新路线图 Checklist
   Goal: 检查 roadmap 是否围绕玩家价值和阶段判断，而不是杂乱功能愿望单。

6. 平台适配判断 Prompt 模板
   Goal: 把项目与平台之间的控制、节奏、会话长度和商业预期冲突压成明确判断。

Output requirements:
- Start with a short decision summary.
- Then create one section per workflow step, in order.
- Make assumptions explicit whenever the context is incomplete.
- Separate draft generation from review findings.
- End with the next 3 highest-value actions.

Do not answer generically. Ground every section in the provided context and constraints.
```

## Included Cards

- [商店页文案 Prompt 模板](../cards/prompt-store-page-copy.md)
- [发布前检查 Checklist](../cards/checklist-pre-release-check.md)
- [版本验收 Checklist](../cards/checklist-build-acceptance.md)
- [留存优化 Prompt 模板](../cards/prompt-retention-optimization.md)
- [更新路线图 Checklist](../cards/checklist-update-roadmap.md)
- [平台适配判断 Prompt 模板](../cards/prompt-platform-fit-evaluation.md)
