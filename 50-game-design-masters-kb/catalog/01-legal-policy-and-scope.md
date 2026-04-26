# 法律边界与收录范围

这个知识库按“能不能合法归档到仓库”分成两层。

## 第一层：已本地归档

这些材料已经下载到仓库里，因为它们明确允许公开访问，并且授权边界清晰。

### `Game Design Concepts`

- 作者：Ian Schreiber
- 本地目录：`raw/open-web/game-design-concepts/`
- 权利说明：课程站点 `About` 页面明确写明采用 `Creative Commons Attribution 3.0 United States License`
- 许可含义：
  - 可以分享、复制、传播
  - 可以改写
  - 必须署名 `Game Design Concepts by Ian Schreiber`
- 官方说明页：
  - <https://gamedesignconcepts.wordpress.com/about/>

### MIT OpenCourseWare 游戏设计课程材料

- 本地目录：
  - `raw/open-web/mit-ocw-2010/`
  - `raw/open-web/mit-ocw-2014/`
  - `raw/open-web/mit-ocw-2016/`
- 权利说明：MIT OCW 页面标注 `Creative Commons BY-NC-SA 4.0`
- 许可含义：
  - 可以分享和改编
  - 需要署名
  - 不可商用
  - 衍生内容必须采用相同许可
- 官方站点：
  - <https://ocw.mit.edu/courses/cms-608-game-design-spring-2014/>
  - <https://ocw.mit.edu/courses/cms-301-introduction-to-game-design-methods-spring-2016/>
  - <https://ocw.mit.edu/courses/cms-608-game-design-fall-2010/>

### `Designing Virtual Worlds`

- 作者：Richard A. Bartle
- 本地目录：`raw/open-web/richard-bartle/`
- 权利说明：作者页面明确说明此书以 `CC BY-NC-ND 4.0` 发布
- 许可含义：
  - 可以分享
  - 需要署名
  - 不可商用
  - 不可改编
- 官方页面：
  - <https://mud.co.uk/richard/papers.htm>

### `MDA: A Formal Approach to Game Design and Game Research`

- 作者：Robin Hunicke, Marc LeBlanc, Robert Zubek
- 本地目录：`raw/open-web/mda/`
- 权利说明：当前版本来自作者长期公开提供的官方 PDF 链接
- 收录原则：
  - 仅保留官方公开 PDF
  - 不从第三方镜像站抓取副本
- 官方页面：
  - <https://users.cs.northwestern.edu/~hunicke/MDA.pdf>

## 第二层：只保留官方入口，不镜像全文

这类材料很重要，但我没有把它们下载进仓库。

### 受版权保护的商业书

典型例子：

- `The Art of Game Design`
- `Rules of Play`
- `Game Design Workshop`
- `Game Feel`
- `Game Mechanics: Advanced Game Design`

处理原则：

- 记录官方购买页、预览页、出版社页
- 写阅读用途和适合解决的问题
- 不下载、不镜像、不导入不明来源 PDF

### 允许在线下载但不允许再托管的材料

典型例子：

- `Game AI Pro`

原因：

- 站点明确允许用户下载
- 但也明确写明内容不能被其他站点重新分发或托管
- 把原文放进代码仓库会造成再托管风险

因此我只把它保留在“在线资源入口”层，不把文件存进本仓库。

## 这个知识库的边界

它现在是一个“合法可分享版本”的设计库，不是“把所有你想看的书都塞进仓库”的版本。

如果你后续能提供：

- 你自己购买的正版电子书
- 作者授权的内部分发材料
- 只在本机私有目录保存、不进 Git 的本地文档

我可以继续做第二阶段整理：

- 全文检索
- 标签体系
- 笔记卡片
- 与具体项目设计文档交叉引用
