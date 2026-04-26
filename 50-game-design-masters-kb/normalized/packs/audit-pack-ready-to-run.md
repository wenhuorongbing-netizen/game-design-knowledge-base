# Audit Pack Ready To Run

Cross-phase bundle for status review, risk discovery, regression checking, and delivery-quality audits.

## Use This When

Use this when a build feels unstable, unclear, late, or over-scoped and you need a structured review pass.

## Prepare Before You Start

- [ ] Current build or branch state
- [ ] Known blockers, bugs, and risk areas
- [ ] Recent regressions or quality complaints
- [ ] Performance, UI, or onboarding pain points

## Run Order

1. [项目状态审计 Prompt 模板](../cards/prompt-project-status-audit.md)
    - Goal: 把当前项目进度压成阶段判断、风险排序和 stop/continue 建议。
    - Type: Prompt Template
2. [Bug Triage Prompt 模板](../cards/prompt-bug-triage.md)
    - Goal: 把一堆 bug 清单压成严重度、影响链路和实际修复优先级。
    - Type: Prompt Template
3. [版本验收 Checklist](../cards/checklist-build-acceptance.md)
    - Goal: 检查当前 build 是否达到可提交、可试玩、可继续迭代的最低门槛。
    - Type: Checklist
4. [回归测试 Checklist](../cards/checklist-regression-checklist.md)
    - Goal: 把版本的必测路径压成稳定、可复用的回归基线。
    - Type: Checklist
5. [性能优化 Checklist](../cards/checklist-performance-optimization.md)
    - Goal: 检查性能问题是否被拆成可定位、可排序、可验证的优化工作，而不是一团“后面再优化”。
    - Type: Checklist
6. [可读性与可访问性评审 Checklist](../cards/checklist-readability-accessibility-review.md)
    - Goal: 检查视觉表达是否真正可读、可理解、可操作，而不是只在熟手眼里成立。
    - Type: Checklist
7. [风险预判 Checklist](../cards/checklist-risk-precheck.md)
    - Goal: 在原型前检查范围、资源、玩法和制作风险是否已经暴露。
    - Type: Checklist

## Working Rule

Move in order. Treat each prompt card as a draft-producing step and each checklist as a decision gate before advancing.

## Files

- Full pack: `knowledge/50-game-design-masters-kb/normalized/packs/audit-pack.md`
- Starter index: `knowledge/50-game-design-masters-kb/indexes/workflow-starter-index.json`
