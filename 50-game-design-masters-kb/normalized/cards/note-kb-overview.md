# 游戏设计大师知识库

这个知识库的目标不是“囤 PDF”，而是建立一个可持续使用的通用游戏设计研究库：

- 只收录可合法归档的开放材料。
- 对受版权保护但必须读的经典书，只保留官方入口、摘要和用途说明。
- 把“谁该读什么”“怎么把这些材料落到具体项目里”写清楚。

## 当前规模

- 已下载本地文件：53 个
- 本地体积：约 36.14 MB
- 主要来源：
  - `raw/open-web/game-design-concepts/`：Ian Schreiber 的 `Game Design Concepts` 全课程页面快照，21 个 HTML
  - `raw/open-web/mit-ocw-2010/`：MIT OCW 2010 游戏设计课程材料，10 个 PDF
  - `raw/open-web/mit-ocw-2014/`：MIT OCW 2014 游戏设计课程材料，8 个 PDF
  - `raw/open-web/mit-ocw-2016/`：MIT OCW 2016 游戏设计课程材料，11 个 PDF
  - `raw/open-web/richard-bartle/`：Richard Bartle 授权版 `Designing Virtual Worlds`，PDF + DOCX
  - `raw/open-web/mda/`：MDA 论文官方 PDF，1 个文件

## 目录结构

- [catalog/01-legal-policy-and-scope.md](catalog/01-legal-policy-and-scope.md)
  法律边界、授权来源、为什么有些书没有下载。
- [catalog/02-core-books-and-official-links.md](catalog/02-core-books-and-official-links.md)
  核心正版书单、每本书解决什么问题、官方入口。
- [catalog/03-downloaded-open-resources.md](catalog/03-downloaded-open-resources.md)
  已经在本地的开放资源索引。
- [catalog/04-master-map.md](catalog/04-master-map.md)
  设计大师地图，帮你快速决定“当前问题应该看谁”。
- [notes/01-study-paths.md](notes/01-study-paths.md)
  按目标拆好的阅读路径。
- [notes/02-applying-the-kb-to-projects.md](notes/02-applying-the-kb-to-projects.md)
  把这套知识库落到任意具体项目时可直接套用的方法和审查清单。
- [notes/03-jesse-schell-and-playcentric-design.md](notes/03-jesse-schell-and-playcentric-design.md)
- [notes/04-schreiber-romero-and-exercise-driven-design.md](notes/04-schreiber-romero-and-exercise-driven-design.md)
- [notes/05-koster-crawford-bartle-and-systems-thinking.md](notes/05-koster-crawford-bartle-and-systems-thinking.md)
- [notes/06-rules-feel-and-formalism.md](notes/06-rules-feel-and-formalism.md)

## 建议入口

如果你现在只是想开始用，不要从头翻。

1. 先看 [catalog/04-master-map.md](catalog/04-master-map.md)。
2. 再按 [notes/01-study-paths.md](notes/01-study-paths.md) 选一条路径。
3. 如果目标是直接推进手头项目，优先看 [notes/02-applying-the-kb-to-projects.md](notes/02-applying-the-kb-to-projects.md)。

## 首批 Prompt / Checklist

现在已经内置首批按 6 个母类组织的提示卡：

- 立项与方向：1 个 prompt 模板 + 1 个审查 checklist
- 核心玩法与系统设计：1 个 prompt 模板 + 1 个审查 checklist
- 数值与经济设计：1 个 prompt 模板 + 1 个审查 checklist
- 开发实现：1 个 prompt 模板 + 1 个审查 checklist
- 测试、验收与审计：1 个 prompt 模板 + 1 个审查 checklist
- 美术、UI、体验表达：1 个 prompt 模板 + 1 个审查 checklist

在门户里可以用：

- 列表模式：`仅卡片类`
- 卡片类型过滤：`Prompt 模板` 或 `检查单`

## 第二层子类卡

现在已经继续补了 12 张高频二级卡，分别是：

- 立项与方向：`竞品拆解 Prompt 模板`、`风险预判 Checklist`
- 核心玩法与系统设计：`战斗系统设计 Prompt 模板`、`新手引导设计 Checklist`
- 数值与经济设计：`经济系统设计 Prompt 模板`、`成长曲线设计 Checklist`
- 开发实现：`原型实现 Prompt 模板`、`存档 / 状态机 / 输入系统 Checklist`
- 测试、验收与审计：`项目状态审计 Prompt 模板`、`版本验收 Checklist`
- 美术、UI、体验表达：`HUD / UI 结构设计 Prompt 模板`、`玩家体验流畅度评审 Checklist`

这意味着现在这套库已经有两层：

- 第一层：6 个母类入口卡
- 第二层：12 个高频子类落地卡

## 第三层叶子卡

现在又补了 12 张更贴近真实交付物的叶子卡：

- 立项与方向：`玩家画像与目标市场 Prompt 模板`、`MVP 范围裁剪 Checklist`
- 核心玩法与系统设计：`核心循环设计 Prompt 模板`、`单机制原型 Checklist`
- 数值与经济设计：`战斗数值平衡 Prompt 模板`、`掉落与奖励设计 Checklist`
- 开发实现：`工具链开发 Prompt 模板`、`性能优化 Checklist`
- 测试、验收与审计：`Bug Triage Prompt 模板`、`回归测试 Checklist`
- 美术、UI、体验表达：`动效与打击感表达 Prompt 模板`、`可读性与可访问性评审 Checklist`

现在这套库已经形成三层：

- 第一层：母类入口卡
- 第二层：高频子类卡
- 第三层：叶子交付物卡

## 当前卡片覆盖

到目前为止，库里已经有：

- 18 个 `Prompt 模板`
- 18 个 `Checklist`
- 8 个 `Phase Guide`
- 其余为书籍条目、来源概览和内部笔记卡

并且已经覆盖 8 个一级分类，不再只停留在最初主展示的 6 个母类。新增覆盖包括：

- 内容与叙事：`世界观设定`、`对话写作`、`叙事结构评审`、`任务文本设计`
- 运营与发布：`商店页文案`、`发布前检查`、`留存优化`、`更新路线图`

## Prompt Pack

现在还额外生成了批量导出层：

- 按阶段的 `Prompt Pack`
- 按阶段的 `Checklist Pack`
- 跨阶段的场景组合包
- 两份全量汇总包

入口文件会生成在：

- `normalized/packs/`
- `indexes/prompt-pack-index.json`
- `reports/prompt-pack-overview.md`

如果你不想一张张点卡，而是想按阶段整包拿去改写，直接用这里的 pack 即可。

当前已经内置的跨阶段组合包包括：

- `Spec Pack`
- `Audit Pack`
- `Prototyping Pack`
- `Release Pack`
- `Narrative Pack`
- `Balance Pack`

## 重建命令

- 一键重建：`node kb-tools/build-all.mjs`
- 强制重抓开放来源：`node kb-tools/build-all.mjs --refresh-open`
- 强制重抓官方元数据：`node kb-tools/build-all.mjs --refresh-metadata`

## 这次刻意没做的事

- 没有下载《The Art of Game Design》《Rules of Play》《Game Feel》这类受版权保护的商业书完整版。
- 没有把 `Game AI Pro` 章节镜像进仓库，因为站点明确允许下载，但不允许他站再分发或再托管。
- 没有抓取版权状态不明确的第三方 PDF 镜像。

如果你之后拥有这些书的合法电子版或无 DRM 版本，我可以继续把它们整理进一个私有索引层，再做全文检索、主题标签和摘要卡片。

具体项目专属的应用文档不再放在这个通用知识库里，而是应放到独立的项目 overlay 目录中。
