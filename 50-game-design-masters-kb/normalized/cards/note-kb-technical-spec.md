# 游戏设计知识库技术规格书

## 1. 文档目的

本文定义一个可在当前仓库内实现的、本地优先、合法合规的“游戏设计知识库系统”。

系统目标不是简单下载 PDF，而是构建一套可持续运行的研究与检索基础设施，使你能：

- 从网上抓取合法可获取的游戏设计书籍、文章、课程和研究素材。
- 对受版权保护的商业书只抓官方元数据、目录、摘要和购买入口。
- 接收你后续手动提供的正版电子书或导出笔记。
- 按“开发阶段大类 + 输出物子类”组织知识，而不是按岗位头衔。
- 在本地静态页面中完成浏览、过滤、检索、阅读和缺失材料盘点。

本文是后续实现阶段的唯一技术依据。你回复 `build` 后，后续实现必须严格按本 spec 落地。

---

## 2. 产品目标

### 2.1 核心目标

构建一个面向游戏设计研究与 prompt 生产的本地知识库，服务以下工作流：

1. 收集来源
2. 归档原始材料
3. 标准化元数据
4. 提炼知识卡片
5. 映射到开发阶段分类
6. 提供搜索与阅读入口
7. 输出“还缺哪些正版材料”的清单

### 2.2 成功标准

- V1 能稳定抓取开放许可或允许本地归档的来源。
- V1 能索引受版权保护书籍的官方信息，但不非法保存全文。
- V1 能接收你手动补充的正版电子书，并纳入统一索引。
- V1 能按你给定的 8 个大类组织知识，并默认优先展示 6 个母类。
- V1 能生成一份机器可读的知识库索引和一份人类可读的缺失材料清单。
- V1 不依赖 Python、不依赖数据库服务、不依赖外部后端。

---

## 3. 非目标

以下内容明确不做：

- 不破解 DRM。
- 不下载盗版商业书。
- 不抓取版权状态不明确的第三方 PDF 镜像站。
- 不做云端账号系统。
- 不做在线协作编辑。
- 不做向量数据库或 LLM 服务端。
- 不做图像 OCR 作为 V1 必选功能。

---

## 4. 设计原则

### 4.1 合法优先

所有源按权限分级：

- 可抓全文并本地保存
- 只抓官方元数据
- 只保留外链
- 必须等待用户提供正版文件

### 4.2 本地优先

所有数据、索引、页面都在仓库内生成，可离线浏览。

### 4.3 结构优先于囤积

先建立统一 schema、分类法、来源注册表，再扩大采集量。

### 4.4 实现约束清晰

V1 只使用：

- Node.js 内置能力
- HTML / CSS / 原生 JS
- JSON / Markdown / 本地文件系统

### 4.5 面向任务而不是头衔

第一层按开发阶段大类组织。

第二层按输出物子类组织。

第三层用主题标签承接低频但风格强的内容。

---

## 5. V1 信息架构

## 5.1 分类总览

知识库 schema 支持 8 个一级大类。

门户默认优先展示 6 个母类。

### 一级大类

1. 立项与方向
2. 核心玩法与系统设计
3. 数值与经济设计
4. 内容与叙事
5. 美术、UI、体验表达
6. 开发实现
7. 测试、验收与审计
8. 运营与发布

### V1 默认主展示的 6 个母类

1. 立项与方向
2. 核心玩法与系统设计
3. 数值与经济设计
4. 开发实现
5. 测试、验收与审计
6. 美术、UI、体验表达

### V1 次级展示类

- 内容与叙事
- 运营与发布

这两个类在 schema 中完整存在，但 UI 默认收纳到“扩展分类”区域。

## 5.2 二级分类：输出物子类

二级分类不是岗位，不是学科，而是你真正会点开的交付物。

### 立项与方向

- 游戏方向收敛
- 核心玩法判断
- 玩家画像与目标市场
- 平台适配判断
- 竞品拆解
- 风险预判
- MVP 范围裁剪
- 游戏总监视角评审

### 核心玩法与系统设计

- 核心循环设计
- 单机制原型设计
- 战斗系统设计
- 关卡机制设计
- 生存/成长/资源循环设计
- 失败条件与胜利条件设计
- 难度曲线设计
- 新手引导设计
- Meta progression 设计

### 数值与经济设计

- 数值框架设计
- 战斗数值平衡
- 资源产出消耗设计
- 经济系统设计
- 货币系统设计
- 成长曲线设计
- 掉落与奖励设计
- 商业化数值评估

### 内容与叙事

- 世界观设定
- 剧情主线设计
- 支线任务设计
- 角色设定
- 对话写作
- 任务文本设计
- 叙事结构评审
- 内容生成约束

### 美术、UI、体验表达

- 游戏美术方向
- HUD / UI 结构设计
- 视觉风格统一
- 场景与角色资产规格
- 动效与打击感表达
- 技术美术规范
- 可读性与可访问性评审
- 玩家体验流畅度评审

### 开发实现

- 技术方案 spec
- 原型实现 prompt
- 客户端开发
- 工具链开发
- 存档/状态机/输入系统
- 性能优化
- 重构与 cleanup
- bug 修复

### 测试、验收与审计

- 玩法验收
- 版本验收
- 平衡性验收
- 新手体验验收
- UI / 可用性验收
- Bug triage
- 回归测试检查单
- 项目状态审计

### 运营与发布

- 发布前检查
- 商店页文案
- 分享传播机制设计
- 评分/排行榜机制
- 留存优化
- 活动策划
- 社群传播点设计
- 更新路线图

## 5.3 第三层：主题标签

第三层用来承接低频但风格强的主题，不做主入口。

主题标签示例：

- 世界观
- 对话
- 美术风格
- 商业化
- 打击感
- 新手引导
- MMO
- 生存
- Roguelite
- 卡牌
- 经济循环
- 叙事结构
- UI 可读性

---

## 6. 资源类型

V1 支持以下资源类型：

- 书籍
- 书籍章节
- 论文
- 博客文章
- 课程页面
- 课程 PDF
- 演讲或讲稿
- 设计模板
- 检查单
- Prompt 模板
- 知识卡片
- 内部笔记

V1 不把“美术素材站抓图”作为主目标。

这里的“素材”限定为研究材料和设计参考物，不是游戏生产资产库。

---

## 7. 合法性与抓取策略

## 7.1 抓取政策枚举

每个来源必须声明 `acquisition_policy`：

- `open_fulltext_fetch`
- `open_metadata_fetch`
- `official_metadata_only`
- `external_link_only`
- `user_supplied_fulltext`
- `manual_review`

## 7.2 各政策含义

### `open_fulltext_fetch`

允许抓取并在仓库中保存全文或原始文件。

适用：

- CC 许可课程材料
- 作者授权 PDF
- MIT OCW 课程 PDF

### `open_metadata_fetch`

允许抓元数据、摘要、目录或公开页面，但不一定保存整本文件。

适用：

- 开放访问书目页
- 官方目录页

### `official_metadata_only`

只抓官方元数据，不保存全文。

适用：

- 商业书出版页
- 出版社样章页
- 官方介绍页

### `external_link_only`

只保留链接和人工摘要，不抓文件。

适用：

- 对方明确不允许再托管
- 页面复杂且版权边界易混淆

### `user_supplied_fulltext`

系统可以接收本地文件，但必须由用户手动提供。

适用：

- 你已购买的电子书
- 你自己导出的笔记、批注、目录

### `manual_review`

默认不自动抓取，等人工判定。

## 7.3 V1 明确允许抓取并本地保存的来源

- `Game Design Concepts`
- MIT OCW 游戏设计课程 PDF
- Richard Bartle 官方授权 PDF / DOCX
- MDA 论文官方 PDF

## 7.4 V1 只抓官方元数据的来源

- Schell Games / Routledge 上的 `The Art of Game Design`
- MIT Press 商业书页
- Routledge 商业书页
- InformIT / Pearson 商业书页
- Wiley 商业书页

## 7.5 V1 只保留外链的来源

- `Game AI Pro`

原因：

- 官方站点允许个人下载
- 但页面明确禁止其他站点重新分发或托管
- 仓库存档会构成再托管风险

---

## 8. V1 来源清单

## 8.1 开放全文来源

### `Game Design Concepts`

- 类型：课程 / 博客
- 用途：设计基础、迭代、原型、平衡、叙事
- 官方站点：<https://gamedesignconcepts.wordpress.com/>
- 许可页：<https://gamedesignconcepts.wordpress.com/about/>
- 抓取方式：HTML 页面抓取 + 本地快照

### MIT OpenCourseWare

- 类型：课程 / PDF
- 用途：作业样例、规则写作、原型、Playtest
- 官方站点：
  - <https://ocw.mit.edu/courses/cms-608-game-design-spring-2014/>
  - <https://ocw.mit.edu/courses/cms-301-introduction-to-game-design-methods-spring-2016/>
  - <https://ocw.mit.edu/courses/cms-608-game-design-fall-2010/>
- 抓取方式：课程页解析 + PDF 直链下载

### Richard Bartle

- 类型：作者站 / 授权书籍
- 用途：在线世界、玩家类型、身份与社交系统
- 官方站点：
  - <https://mud.co.uk/dvw/>
  - <https://mud.co.uk/richard/papers.htm>
- 抓取方式：PDF / DOCX 直链下载

### MDA

- 类型：论文
- 用途：Mechanics / Dynamics / Aesthetics 分析框架
- 官方 PDF：<https://users.cs.northwestern.edu/~hunicke/MDA.pdf>
- 抓取方式：PDF 直链下载

## 8.2 官方元数据来源

### 商业书官方页面

- `The Art of Game Design`
  - <https://schellgames.com/art-of-game-design>
  - <https://www.routledge.com/link/link/p/book/9781138632059>
- `Rules of Play`
  - <https://mitpress.mit.edu/9780262240451/rules-of-play>
- `Characteristics of Games`
  - <https://mitpress.mit.edu/9780262542692/characteristics-of-games/>
- `Game Design Workshop`
  - <https://www.routledge.com/Game-Design-Workshop-A-Playcentric-Approach-to-Creating-Innovative-Games/Fullerton/p/book/9781032607009>
- `Game Feel`
  - <https://www.routledge.com/Game-Feel-A-Game-Designers-Guide-to-Virtual-Sensation/Swink/p/book/9780123743282>
- `Game Mechanics: Advanced Game Design`
  - <https://www.informit.com/store/product.aspx?isbn=9780132946681>
- `Advanced Game Design: A Systems Approach`
  - <https://www.informit.com/store/advanced-game-design-a-systems-approach-9780134668246>
- `A Theory of Fun for Game Design`
  - <https://www.theoryoffun.com/>
- `Level Up! The Guide to Great Video Game Design`
  - <https://newsroom.wiley.com/press-releases/press-release-details/2014/Level-Up-The-Guide-to-Great-Video-Game-Design/default.aspx>
- `The Rule Book`
  - <https://mitpress.mit.edu/9780262377539/the-rule-book/>

---

## 9. 数据模型

V1 不使用数据库。

所有内容使用 JSON + Markdown + 原始文件落盘。

## 9.1 实体类型

### Source

定义外部来源站点与抓取策略。

字段：

- `id`
- `name`
- `base_url`
- `source_type`
- `acquisition_policy`
- `allowed_file_types`
- `rate_limit_ms`
- `notes`

### Work

表示一本书、一门课、一篇论文或一个材料集合。

字段：

- `id`
- `title`
- `authors`
- `year`
- `kind`
- `canonical_url`
- `publisher_or_source`
- `language`
- `license`
- `access_mode`
- `summary`
- `topics`
- `keywords`

### Resource

表示某个具体页面、PDF、HTML 快照、样章、用户文件或外链。

字段：

- `id`
- `work_id`
- `resource_kind`
- `source_id`
- `remote_url`
- `local_path`
- `mime_type`
- `fetch_status`
- `checksum`
- `fetched_at`
- `last_modified`

### Knowledge Card

这是知识库的核心阅读对象。

字段：

- `id`
- `title`
- `work_id`
- `card_kind`
- `phase_group`
- `deliverable_type`
- `theme_tags`
- `summary`
- `key_points`
- `usage_relevance`
- `recommended_for`
- `related_cards`
- `source_refs`
- `availability`

### Material Request

表示系统识别出的缺失材料。

字段：

- `id`
- `title`
- `author`
- `priority`
- `reason`
- `preferred_format`
- `official_links`
- `status`

## 9.2 枚举字段

### `kind`

- `book`
- `paper`
- `article`
- `course`
- `talk`
- `template`
- `checklist`
- `prompt_pack`
- `note`

### `card_kind`

- `source_overview`
- `concept_card`
- `reading_note`
- `prompt_template`
- `checklist`
- `spec_template`
- `example_case`
- `book_entry`

### `availability`

- `downloaded_open`
- `metadata_only`
- `external_only`
- `user_file_needed`

---

## 10. 文件结构

实现必须使用以下目录结构：

```text
founder-of-the-north/
  kb-tools/
    sync-open-sources.mjs
    sync-official-metadata.mjs
    ingest-user-files.mjs
    normalize-library.mjs
    build-kb-index.mjs
    build-kb-portal-data.mjs
    report-missing-materials.mjs
    validate-kb.mjs

  kb-portal/
    index.html
    styles.css
    app.js
    data.js
    content.js

  knowledge/
    50-game-design-masters-kb/
      README.md
      catalog/
      notes/
      registry/
        sources.json
        works.json
        material-requests.json
        taxonomy.json
      incoming/
        user-supplied/
      raw/
        open-web/
        official-metadata/
      normalized/
        works/
        cards/
      indexes/
        library-index.json
        search-index.json
      reports/
        missing-materials.md
        source-audit.md
```

说明：

- `kb-tools/` 放 Node 脚本。
- `kb-portal/` 放独立静态门户，不改现有 `docs-portal/`。
- `registry/` 放来源注册表与分类法。
- `incoming/user-supplied/` 放你手工提供的正版文件。
- `raw/` 保存原始抓取结果。
- `normalized/` 保存标准化后的结构化内容。
- `indexes/` 保存门户所需 JSON。
- `reports/` 保存自动生成的人类可读报告。

---

## 11. 抓取与处理流水线

## 11.1 步骤 1：建立来源注册表

输入：

- 固定 JSON 清单

输出：

- `registry/sources.json`
- `registry/works.json`
- `registry/taxonomy.json`

要求：

- 每个来源必须声明抓取政策
- 每个作品必须声明可用性和官方入口

## 11.2 步骤 2：抓取开放全文来源

脚本：

- `kb-tools/sync-open-sources.mjs`

功能：

- 拉取允许本地保存的 HTML / PDF / DOCX
- 保存到 `raw/open-web/`
- 记录抓取时间、URL、大小、checksum

约束：

- 严格按白名单来源抓取
- 默认 1 请求串行，带最小延迟
- 不实现站点递归爬虫
- 只抓注册表中显式列出的 URL

## 11.3 步骤 3：抓取官方元数据

脚本：

- `kb-tools/sync-official-metadata.mjs`

功能：

- 抓取官方书籍页标题、作者、摘要、目录、ISBN、出版信息、购买页
- 保存到 `raw/official-metadata/`

约束：

- 不下载商业书全文
- 不保存超过页面允许范围的受版权内容

## 11.4 步骤 4：接收用户文件

脚本：

- `kb-tools/ingest-user-files.mjs`

输入目录：

- `knowledge/50-game-design-masters-kb/incoming/user-supplied/`

支持格式：

- `.pdf`
- `.epub`
- `.md`
- `.txt`
- `.json`

V1 约束：

- 优先支持文本型 PDF、EPUB、Markdown、TXT
- 不强制支持图片扫描 PDF 的 OCR

文件命名规范：

`Author - Title (Edition, Year).ext`

若无法标准命名，可允许配套 sidecar：

`Author - Title.meta.json`

## 11.5 步骤 5：标准化

脚本：

- `kb-tools/normalize-library.mjs`

功能：

- 为所有 Work 生成统一 JSON
- 为所有资源生成统一索引项
- 为重点来源生成知识卡片

输出：

- `normalized/works/*.json`
- `normalized/cards/*.md`
- `normalized/cards/*.json`

标准化要求：

- 生成统一 slug
- 去重 canonical URL
- 统一作者数组格式
- 统一许可证与可用性枚举
- 自动补全 phase group 与 deliverable type

## 11.6 步骤 6：建立索引

脚本：

- `kb-tools/build-kb-index.mjs`

输出：

- `indexes/library-index.json`
- `indexes/search-index.json`

V1 搜索策略：

- 不使用向量
- 不使用第三方搜索库
- 使用预拼接的 `search_text`
- 前端使用大小写无关子串匹配
- 中文搜索使用直接子串匹配

## 11.7 步骤 7：生成门户数据

脚本：

- `kb-tools/build-kb-portal-data.mjs`

输出：

- `kb-portal/data.js`
- `kb-portal/content.js`

要求：

- `data.js` 存放列表页数据与 taxonomy
- `content.js` 存放卡片正文与摘要

## 11.8 步骤 8：生成缺失材料报告

脚本：

- `kb-tools/report-missing-materials.mjs`

输出：

- `reports/missing-materials.md`
- `registry/material-requests.json`

要求：

- 报告必须按优先级排序
- 必须说明为什么需要这本书
- 必须说明建议你提供的文件格式

## 11.9 步骤 9：校验

脚本：

- `kb-tools/validate-kb.mjs`

校验内容：

- JSON schema 是否完整
- 引用的本地文件是否存在
- taxonomy 值是否合法
- 重复 slug 检查
- 缺失 summary 检查
- 链接可用性仅做格式校验，不做强制联网校验

---

## 12. 门户功能规格

门户是一个独立静态页面应用，路径为 `kb-portal/index.html`。

## 12.1 页面结构

### 左侧

- 一级分类导航
- 二级输出物过滤
- 来源类型过滤
- 可用性过滤
- 搜索框

### 中间

- 卡片列表
- 卡片摘要
- 排序选项

### 右侧

- 详情阅读区
- 元数据面板
- 相关条目
- 官方入口
- 本地文件打开链接

## 12.2 必须支持的过滤器

- 一级分类
- 二级输出物
- 资源类型
- 可用性
- 来源
- 是否已本地下载
- 是否需要用户补充

## 12.3 必须支持的列表模式

- 所有条目
- 仅开放全文
- 仅商业书元数据
- 仅用户待补材料
- 仅 prompt / checklist / spec 类卡片

## 12.4 条目详情页必须展示

- 标题
- 作者
- 年份
- 一级分类
- 二级输出物
- 摘要
- 核心要点
- 适用场景
- 获取方式
- 官方链接
- 本地文件链接
- 相关条目

## 12.5 门户视觉约束

- 不复用现有 `docs-portal` 的项目文档 taxonomy
- 视觉可借鉴现有 portal 的阅读优先布局
- 必须清晰区分“已下载全文”和“只有官方入口”

---

## 13. 初始内容策略

V1 初始内容分 4 层：

### 层 1：已下载开放材料

- `Game Design Concepts`
- MIT OCW
- Richard Bartle
- MDA

### 层 2：商业书官方条目

- 仅元数据
- 仅官方链接
- 仅短摘要

### 层 3：知识卡片

每本核心书或课程至少要有一张 `book_entry` 或 `source_overview` 卡片。

### 层 4：Prompt 导向卡片

针对 6 个母类，每个类至少要有 1 组导向卡片：

- 立项与方向
- 核心玩法与系统设计
- 数值与经济设计
- 开发实现
- 测试、验收与审计
- 美术、UI、体验表达

这些导向卡片先是知识入口，不在 V1 强制生成完整 prompt 文本库。

---

## 14. 需要你后续获取并提供的材料

下列材料如果能提供正版电子版，知识库质量会明显提升。

优先级定义：

- P0：强烈建议第一时间提供
- P1：建议第二批提供
- P2：可选

## 14.1 P0 必要材料

### `The Art of Game Design: A Book of Lenses`

- 作者：Jesse Schell
- 原因：这是“立项与方向”和“核心玩法判断”的最高价值主干书之一
- 期望格式：DRM-free EPUB / 文本型 PDF / 你自己的阅读笔记导出
- 官方入口：
  - <https://schellgames.com/art-of-game-design>
  - <https://www.routledge.com/link/link/p/book/9781138632059>

### `Game Design Workshop`

- 作者：Tracy Fullerton
- 原因：这是“原型、试玩、迭代”最重要的流程书
- 期望格式：EPUB / 文本型 PDF
- 官方入口：
  - <https://www.routledge.com/Game-Design-Workshop-A-Playcentric-Approach-to-Creating-Innovative-Games/Fullerton/p/book/9781032607009>

### `Game Mechanics: Advanced Game Design`

- 作者：Ernest Adams, Joris Dormans
- 原因：这是“数值与经济设计”以及系统建模的核心书
- 期望格式：EPUB / 文本型 PDF
- 官方入口：
  - <https://www.informit.com/store/product.aspx?isbn=9780132946681>

### `Game Feel`

- 作者：Steve Swink
- 原因：这是“打击感、动效反馈、控制响应”的主干书
- 期望格式：EPUB / 文本型 PDF
- 官方入口：
  - <https://www.routledge.com/Game-Feel-A-Game-Designers-Guide-to-Virtual-Sensation/Swink/p/book/9780123743282>

### `Rules of Play`

- 作者：Katie Salen Tekinbaş, Eric Zimmerman
- 原因：这是“规则、系统、意义”语言体系的核心书
- 期望格式：EPUB / 文本型 PDF
- 官方入口：
  - <https://mitpress.mit.edu/9780262240451/rules-of-play>

## 14.2 P1 高价值材料

### `Characteristics of Games`

- 作者：George Skaff Elias, Richard Garfield, K. Robert Gutschera
- 原因：适合建立形式化分析卡片
- 官方入口：
  - <https://mitpress.mit.edu/9780262542692/characteristics-of-games/>

### `A Theory of Fun for Game Design`

- 作者：Raph Koster
- 原因：适合“好玩、学习、掌握、重复感”分析
- 官方入口：
  - <https://www.theoryoffun.com/>

### `Level Up! The Guide to Great Video Game Design`

- 作者：Scott Rogers
- 原因：适合“设计文档、生产表达、关卡与流程”
- 官方入口：
  - <https://newsroom.wiley.com/press-releases/press-release-details/2014/Level-Up-The-Guide-to-Great-Video-Game-Design/default.aspx>

### `Challenges for Game Designers`

- 作者：Brenda Romero, Ian Schreiber
- 原因：适合把知识库扩展成训练型 prompt 库
- 期望格式：EPUB / 文本型 PDF / 你自己的题目摘录

## 14.3 P2 可选材料

### `Advanced Game Design: A Systems Approach`

- 作者：Michael Sellers
- 官方入口：
  - <https://www.informit.com/store/advanced-game-design-a-systems-approach-9780134668246>

### `The Aesthetic of Play`

- 作者：Brian Upton
- 官方入口：
  - <https://mitpress.mit.edu/9780262028516/the-aesthetic-of-play/>

### `Play Matters`

- 作者：Miguel Sicart
- 官方入口：
  - <https://mitpress.mit.edu/9780262534512/play-matters/>

### `The Rule Book`

- 作者：Jaakko Stenros, Markus Montola
- 说明：这是 MIT Press 开放获取书，可以先抓元数据与官方 OA 页，后续如需要再做更深卡片
- 官方入口：
  - <https://mitpress.mit.edu/9780262377539/the-rule-book/>

## 14.4 用户提供格式要求

推荐优先级如下：

1. EPUB
2. 文本型 PDF
3. 你自己的摘要 / 读书笔记 Markdown
4. 扫描 PDF 仅在没有其他版本时使用

如果某本书只有 DRM 平台版本，V1 不强求导入原文。你可以先提供：

- 目录
- 你手抄或导出的重点摘录
- 章节笔记

系统一样可以索引这些内容。

---

## 15. 实施阶段

## Phase 0：脚手架

- 建立目录结构
- 建立 taxonomy
- 建立来源注册表

## Phase 1：抓取器

- 完成开放来源抓取
- 完成商业书元数据抓取
- 完成用户文件接收

## Phase 2：标准化层

- 统一 Work / Resource / Card schema
- 生成 normalized JSON
- 生成卡片 Markdown

## Phase 3：索引与报告

- 生成 library index
- 生成 search index
- 生成 missing materials 报告

## Phase 4：门户

- 构建静态浏览器
- 接入 filters
- 接入详情阅读

## Phase 5：内容填充

- 为 6 个母类建立首批导向卡片
- 为核心书单建立条目
- 为开放来源生成入口卡片

---

## 16. 验收标准

系统被视为完成，必须同时满足：

1. 仓库中存在独立 `kb-portal/`，可直接打开浏览。
2. 仓库中存在独立 `kb-tools/`，所有脚本可由 Node 直接执行。
3. 能成功重建开放来源索引，不依赖手工编辑。
4. 能生成商业书元数据卡片，不下载商业书全文。
5. 能扫描 `incoming/user-supplied/` 并纳入索引。
6. 能按 8 类 schema 分类，且门户默认主展示 6 个母类。
7. 能生成 `missing-materials.md`。
8. 不修改现有 `docs-portal` 的逻辑与 taxonomy。

---

## 17. 后续扩展但不属于 V1

- 卡片级双向链接网络
- 阅读进度状态
- 引文高亮与片段引用
- OCR 接入
- 嵌入向量检索
- 自动 prompt 组合器
- 从知识卡片生成项目专用设计审查模板

---

## 18. 实现决策总结

这套系统在 V1 的关键取舍如下：

- 用文件系统，不用数据库
- 用 Node 原生能力，不用 Python
- 用静态门户，不用服务端
- 先做合法来源与用户提供材料的统一入口，不碰盗版抓取
- 先做 8 类 schema，默认突出 6 个母类
- 先做“知识入口 + 资料盘点”，再做完整 prompt 工厂

这就是后续 `build` 阶段必须遵守的实现边界。
