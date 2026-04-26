# Audit Pack Starter Prompt

Use the following copy-paste prompt when you want one integrated response instead of opening each card separately.

## What This Prompt Does

Use this when a build feels unstable, unclear, late, or over-scoped and you need a structured review pass.

## Copy-Paste Prompt

```text
You are a world-class game design director, systems designer, and production reviewer. I need you to run the "Audit Pack" workflow.

Use the context below and produce one integrated response.

Project context:
- Current build or branch state: {{current_build_or_branch_state}}
- Known blockers, bugs, and risk areas: {{known_blockers_bugs_and_risk_areas}}
- Recent regressions or quality complaints: {{recent_regressions_or_quality_complaints}}
- Performance, UI, or onboarding pain points: {{performance_ui_or_onboarding_pain_points}}

Workflow to follow:
1. 项目状态审计 Prompt 模板
   Goal: 把当前项目进度压成阶段判断、风险排序和 stop/continue 建议。

2. Bug Triage Prompt 模板
   Goal: 把一堆 bug 清单压成严重度、影响链路和实际修复优先级。

3. 版本验收 Checklist
   Goal: 检查当前 build 是否达到可提交、可试玩、可继续迭代的最低门槛。

4. 回归测试 Checklist
   Goal: 把版本的必测路径压成稳定、可复用的回归基线。

5. 性能优化 Checklist
   Goal: 检查性能问题是否被拆成可定位、可排序、可验证的优化工作，而不是一团“后面再优化”。

6. 可读性与可访问性评审 Checklist
   Goal: 检查视觉表达是否真正可读、可理解、可操作，而不是只在熟手眼里成立。

7. 风险预判 Checklist
   Goal: 在原型前检查范围、资源、玩法和制作风险是否已经暴露。

Output requirements:
- Start with a short decision summary.
- Then create one section per workflow step, in order.
- Make assumptions explicit whenever the context is incomplete.
- Separate draft generation from review findings.
- End with the next 3 highest-value actions.

Do not answer generically. Ground every section in the provided context and constraints.
```

## Included Cards

- [项目状态审计 Prompt 模板](../cards/prompt-project-status-audit.md)
- [Bug Triage Prompt 模板](../cards/prompt-bug-triage.md)
- [版本验收 Checklist](../cards/checklist-build-acceptance.md)
- [回归测试 Checklist](../cards/checklist-regression-checklist.md)
- [性能优化 Checklist](../cards/checklist-performance-optimization.md)
- [可读性与可访问性评审 Checklist](../cards/checklist-readability-accessibility-review.md)
- [风险预判 Checklist](../cards/checklist-risk-precheck.md)
