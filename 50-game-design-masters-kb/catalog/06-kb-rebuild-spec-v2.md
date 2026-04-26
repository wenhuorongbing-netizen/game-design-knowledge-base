# 游戏设计知识库重构规格书 V2

## 1. 重构目标

这次重构不是继续补几张卡，而是把现有知识库从“人工整理的资料夹”升级为“知识优先、证据驱动、可持续扩展的游戏设计读书与研究系统”。

目标有四个：

1. 让已经放进仓库的书真正进入知识管线，而不是停留在目录里。
2. 让 `works / cards / packs` 尽量建立在书本体的解析结果上，而不是长期依赖手工薄摘要。
3. 让通用知识库与项目专属应用层分离，避免再次被单个项目绑架。
4. 让门户重新回到“知识浏览优先”，工作流能力降为附加层。

## 2. 当前版本的主要问题

### 2.1 根目录书籍没有真正被 ingest

当前脚本只扫描：

- `knowledge/50-game-design-masters-kb/incoming/user-supplied/`

但你把书放在了：

- `knowledge/`

这导致系统在“看起来有书”和“实际读到了书”之间断开。

### 2.2 商业书条目大多是浅层定位，不是内容级理解

当前 `work` 条目多数只有：

- 标题
- 作者
- 手写摘要
- 核心要点
- 适用场景

但缺少：

- 目录级结构
- 章节级证据
- 提取样本文本
- 可追溯的概念来源
- 更可靠的定位与比较依据

### 2.3 通用层与项目层一度混在一起

虽然已经做过第一次拆分，但整体架构仍然需要明确：

- 通用知识库只放 general 内容
- 项目应用层只放 project overlay

### 2.4 门户已经偏离“知识库”定位

当前门户同时承担：

- 阅读器
- 搜索器
- prompt 复制器
- 项目工作台
- blocker 流程工具

这让“知识库”本体不够安静，也不够清楚。

### 2.5 缺少书籍解析中间层

当前从原始书籍到最终卡片，中间缺了一层稳定的“解析工件层”。

必须补上的中间产物包括：

- 元数据提取
- 目录/章节映射
- 样本文本提取
- 提取质量报告
- 匹配状态与人工覆写位

## 3. 重构原则

### 3.1 知识优先，不是工具优先

门户、按钮、工作流都只是知识的壳。

重构后必须保证：

- 没有复杂工作流，知识库本体仍然成立
- 不打开门户，文件系统层也能被 AI 和人类直接使用

### 3.2 证据优先，不是印象优先

每本书的定位、摘要、适用场景、衍生卡片，都应尽量能追溯到：

- 书籍目录
- 提取样本文本
- 章节结构
- 相关开放材料

### 3.3 通用层与项目层分离

`knowledge/50-game-design-masters-kb/` 只保留通用游戏设计知识。

项目专属内容必须进入独立 overlay，例如：

- `project-knowledge/<project-slug>/`

### 3.4 私有书源允许参与分析，但不把知识库重新做成盗版镜像站

重构后的处理原则：

- 允许使用你本地提供的书进行私有解析
- 不在卡片里长段复刻商业书正文
- 以元数据、结构、摘要、概念、目录、适用场景、比较和衍生卡片为主

### 3.5 先补管线，再补内容

先解决：

1. 发现书
2. 匹配书
3. 解析书
4. 记录证据

再解决：

5. 重写 works
6. 重写 notes
7. 重写 cards
8. 重写 portal 入口

## 4. 目标架构

## 4.1 四层结构

### 第一层：来源层

- `raw/open-web/`
- `raw/official-metadata/`
- `raw/private-library/`

### 第二层：解析工件层

用于承接用户提供书籍的结构化提取结果：

- `raw/private-library/manifest.json`
- `raw/private-library/extracted/*.json`
- `raw/private-library/extract-manifest.json`

### 第三层：标准化知识层

- `normalized/works/`
- `normalized/cards/`
- `normalized/packs/`

### 第四层：索引与展示层

- `indexes/`
- `reports/`
- `kb-portal/`

## 4.2 新增的核心中间产物

### Private Library Manifest

记录所有从 `knowledge/` 根目录发现的私有书源文件。

字段至少包括：

- `file_name`
- `relative_path`
- `extension`
- `size_bytes`
- `sha256`
- `cleaned_name`
- `matched_work_id`
- `match_strategy`
- `match_score`
- `candidate_work_ids`
- `duplicate_group`

### Extracted Artifact

记录对单本私有书的提取结果。

字段至少包括：

- `source_relative_path`
- `format`
- `metadata`
- `toc`
- `sample_sections`
- `preview_text`
- `extraction_status`
- `warnings`

### Knowledge Positioning

每个 `work` 的定位不再只是一句“适用场景”，而应新增多维定位：

- `knowledge_domains`
- `purposes`
- `reading_modes`
- `value_types`
- `knowledge_lifecycle`

这些维度来自 `rebuild_instruction.md` 的思路，但收敛到当前游戏设计知识库范围内使用。

## 5. 数据模型扩展

## 5.1 Work 扩展字段

在现有 `work` 基础上逐步扩展：

- `usage_relevance`
- `knowledge_domains`
- `purposes`
- `reading_modes`
- `value_types`
- `knowledge_lifecycle`
- `has_private_source`
- `private_source_count`
- `extracted_artifact_ids`

## 5.2 Card 扩展方向

不是一次性加新表，而是逐步增加更有价值的 card 类型：

- `book_positioning_note`
- `chapter_map_note`
- `evidence_note`
- `comparison_note`
- `concept_seed_note`

V2 第一阶段不要求全部落地，但 schema 和命名需要先定下来。

## 6. 新的处理流水线

## 6.1 Phase 0：冻结与审计

目标：

- 记录当前版本问题
- 确认哪些内容要保留，哪些要重写

输出：

- 本 spec
- 初始缺陷列表

## 6.2 Phase 1：私有书源发现与匹配

脚本：

- `kb-tools/discover-private-books.mjs`

任务：

- 扫描 `knowledge/` 根目录中的 `pdf / epub / txt / md`
- 清洗脏文件名
- 尝试匹配到已有 `work`
- 产出私有书源 manifest
- 输出匹配/未匹配/重复情况

验收：

- 不再出现“书在仓库里，但系统完全不知道”的情况

## 6.3 Phase 2：书籍解析中间层

脚本：

- `kb-tools/extract-private-book-artifacts.mjs`
- `kb-tools/extract_private_book_artifacts.py`

任务：

- 对匹配到的 `pdf / epub` 提取：
  - 元数据
  - 目录或近似章节结构
  - 样本文本
  - 预览正文
- 写入 `raw/private-library/extracted/`

验收：

- 对每本导入书至少能产出一份结构化工件

## 6.4 Phase 3：定位层重写

任务：

- 将 `works.json` 的浅层定位升级为多维定位
- 把“这本书适合谁、解决什么问题、在知识生命周期中扮演什么角色”写清楚

验收：

- 核心商业书的 `work` 不再只是三行摘要

## 6.5 Phase 4：基于书本体重写高价值 cards / notes

优先级：

1. `The Art of Game Design`
2. `Game Design Workshop`
3. `Game Mechanics`
4. `Game Feel`
5. `A Theory of Fun`
6. `Characteristics of Games`
7. `Level Up`

任务：

- 基于目录和样本文本重写 `works`
- 重写对应 `notes`
- 修补相关 `prompt/checklist` 的依据层

验收：

- 至少一批核心卡片能明确看出“读过书本体之后的升级”

## 6.6 Phase 5：知识优先的门户收敛

任务：

- 保留工作台能力
- 但让默认首页和默认浏览流回到：
  - works
  - cards
  - packs
  - search
  - filters

工作台能力改为次级入口。

## 6.7 Phase 6：校验与审计

任务：

- 完整构建
- 校验结构
- 更新报告
- 列出仍需人工补的书、未匹配条目和低质量提取

## 7. 本轮重构的最低成功标准

本轮被视为成功，至少要满足：

1. 根目录书籍被系统发现并进入 manifest。
2. 至少一批书被成功匹配到现有 `works`。
3. 至少一批 `pdf / epub` 被提取出结构化工件。
4. 缺失材料报告不再错误地把已放入仓库的书全部当成“待提供”。
5. 通用知识库继续保持 general 优先。
6. 项目专属内容继续留在 `project-knowledge/`。

## 8. 本轮执行顺序

本次执行严格按以下顺序进行：

1. 写入本 spec
2. 建立私有书源发现脚本
3. 改造 ingest 流程，接入发现结果
4. 建立书籍解析脚本
5. 接入完整构建流水线
6. 生成新的审计与状态报告
7. 再开始重写内容层

## 9. 风险与取舍

### 风险 1：书籍来源文件名脏

取舍：

- 允许启发式匹配
- 保留未匹配列表
- 不强行瞎认

### 风险 2：PDF / EPUB 提取质量不稳定

取舍：

- V2 先追求“可提取、可审计、可复查”
- 不追求一次到位的全文结构化

### 风险 3：内容重写量很大

取舍：

- 先重写核心主干书
- 再向外围扩张

### 风险 4：门户继续过重

取舍：

- 本轮先稳住底层数据层和知识层
- 门户收敛放在后续阶段，但必须写入 spec

## 10. 备注

`knowledge/rebuild_instruction.md` 提供的是一个更大的“读书操作系统”方向。

本次重构不会直接把当前仓库改造成完整 BookOS，但会吸收其中三个最关键的思想：

1. 每本书都是一个活的知识对象
2. 私有读书输入必须进入自动化管线
3. messy 输入必须逐步转成结构化知识

对当前仓库而言，这样的收敛是现实且正确的。
