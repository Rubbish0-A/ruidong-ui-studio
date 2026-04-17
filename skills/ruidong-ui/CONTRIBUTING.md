# 贡献新风格

想往这个仓库里加入新的睿动 UI/UX 风格？按下面的步骤做。

## 风格命名规则

格式：`<来源标识>-<主气质标识>`，全小写，连字符。

示例：
- `smartsolu-linear` —— SmartSolu 项目 + Linear 气质
- `easy-pm-raycast` —— EasyPM 项目 + Raycast 气质
- `dark-cyber-neo` —— 纯抽象主题（非来自具体项目）

命名必须能让同事一看就知道「这是什么气质」，不要起玄学名字（例如 `moonlight`、`zenith`）。

## 目录结构

新建 `styles/<your-style-id>/`，**必须提供**以下文件：

```
styles/<your-style-id>/
├── README.md                 ← 一句话叙事 + 适用/不适用场景
├── QUICKREF.md               ← 一页纸速查（~30 行，Claude 激活时首选加载）
├── PHILOSOPHY.md             ← 叙事主线、绝不做的事、状态规则、动效规则
├── TOKENS.md                 ← 色彩 / 字体 / 阴影 / 圆角 / 间距的完整令牌
├── components/               ← 按组件类别拆分（每文件 <80 行，Claude 按需读）
│   ├── README.md             ← 组件清单表
│   ├── buttons.md
│   ├── cards.md
│   ├── inputs.md
│   ├── overlay.md            ← 顶栏 + 弹窗 + Toast
│   ├── sidebar.md
│   └── misc.md               ← 徽章 + 空状态 + 页面骨架
├── tailwind.config.js        ← 可直接复制到用户项目的 Tailwind 配置
├── fonts.html                ← 字体 <link> + body font-family 片段
└── examples/
    ├── app-skeleton.tsx      ← 主容器示例
    ├── button-set.tsx        ← 所有按钮变体
    └── card-set.tsx          ← 所有卡片变体
```

**可选**提供：
- `examples/form.tsx` — 表单示例
- `examples/modal.tsx` — 弹窗示例
- `preview.png` — 风格预览图（纳入 README.md 首屏）

## PHILOSOPHY.md 必答问题

在新风格的 PHILOSOPHY.md 中，必须正面回答下列 6 个问题。不要模糊化。

1. **一句话叙事**：这个风格传达什么气质？（例："冷静、聪明、轻盈的专业工作台。"）
2. **三个学习源**：主骨架学谁？细节质感学谁？浮层交互学谁？
3. **五条设计原则**：用户打开页面时，这个风格要做对什么事？
4. **绝不做的事**：≥6 条具体红线（非空话）。
5. **四层层级系统**：Base / Surface / Raised / Overlay 在这个风格下具体怎么表达？
6. **适用和不适用场景**：哪类产品用、哪类产品不要用。

## QUICKREF.md 必备内容

给 Claude 快速加载用的一页纸（~30 行），必须包含：

- 一句话叙事
- 4 个最常触碰的 token（不是完整表，只有最常用的）
- 3 个最高频组件的完整 class 串
- 字体声明
- 四层层级速记
- 一张"需要更多细节时去哪"的路标表

目的：让 Claude 处理 80% 的简单请求不必加载 TOKENS + COMPONENTS 全量文件。

## TOKENS.md 完整性要求

至少要有：

- 至少 1 个主内容区色系（Base / Surface / Text / Border）
- 至少 1 个强调色（Accent）及其 soft / hover / bright 变体
- 功能色（Success / Warning / Error）
- 字体族声明 + 禁用字体列表
- 字号字重矩阵（至少 6 种角色）
- 阴影（至少 Surface / Raised / Float / Overlay 四级）
- 圆角（至少 4 个档位）
- 间距（8pt 基础）
- 动效 keyframes（至少 fadeIn / slideIn / scaleIn）

## 更新父 skill 索引

把新风格加到 `skill/ruidong-ui/SKILL.md` 的"当前已收录的风格"表中：

```markdown
| `your-style-id` | 一句话叙事 | 来源 | 气质关键词 |
```

**同时更新 `description` 的触发短语**（frontmatter 第一行）。新风格如果引入了新的关键气质词（比如 "Raycast 同款"），加进去帮助用户触发。

顺便更新仓库根的 `README.md` 里的同一张表。

## 不得违反

- ❌ 新风格的 PHILOSOPHY.md 不得与 `PRINCIPLES.md`（跨风格共通元原则）冲突。若有新想法需要放宽某条共通原则，先改 PRINCIPLES.md 再加风格。
- ❌ 不得使用 Inter 字体（见 [PRINCIPLES.md §4](PRINCIPLES.md#4-字体底线typography-floor)）
- ❌ 不得给同一风格同时提供多套配色（要多套就是多个风格）
- ❌ 不得省略本文件列出的任何必备文件

## 提交流程

```bash
git checkout -b add-<your-style-id>
# ... 写文件 ...
git add styles/<your-style-id> skill/ruidong-ui/SKILL.md README.md
git commit -m "feat: add <your-style-id> style"
git push -u origin add-<your-style-id>
# 然后在 Git 平台上开 Pull Request
```

Reviewer 至少包括：
- 一位有睿动前端生产经验的同事
- （理想）原 `smartsolu-linear` 作者

## 版本化

每次风格变更（除了纯 typo 修复）都在风格目录的 README.md 头部维护 CHANGELOG：

```markdown
## 版本

- **v1.1**（2026-05-01）：改了阴影层级
- **v1.0**（2026-04-17）：初版
```
