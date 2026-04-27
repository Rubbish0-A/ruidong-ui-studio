# Changelog

本文档记录 `ruidong-ui-studio` 的每次发布改动。遵循 [Semantic Versioning](https://semver.org/)。

## [1.1.0] — 2026-04-27

### ✨ 新增风格：bold-vivid（含 4 个子主题）

新增高冲击力风格 `bold-vivid`，反"AI 平庸美学"，适合 Landing page / 营销站 / 作品集。

**4 个子主题，选一即用：**
- **cyberpunk** — 深蓝黑底 + 霓虹粉红/青蓝，Space Grotesk 900w，Blade Runner 美学
- **brutalist** — 米白底 + 极黑粗边框 + 野兽派红，Bebas Neue 全大写，offset 阴影
- **vaporwave** — 深紫底 + 四色 mesh 渐变 + 淡黄文字，Recursive 可变字体，Y2K 美学
- **nordic** — Nord 深灰蓝底 + 冰霜蓝 + Aurora 功能色，Playfair Display 衬线标题

**关键技术决策：**
- CSS 变量桥接方案：切换子主题只需换 `:root` 变量文件，Tailwind class 不用改
- `components/` 使用语义 token class（`bg-accent`/`text-foreground`），跨子主题通用

### 🔒 一致性机制强化

- **`ruidong-ui.config.json`**：新建项目时生成主题锁定文件，防止同一项目多次生成 UI 时跑偏
- **SKILL.md** 新增 MUST/MUST NOT 硬约束（不得写 raw hex、不得用 Inter、不得混用主题）
- **第四步自查 checklist**：Claude 每次输出代码前主动核查 token 一致性

### 🏗 架构调整

- **PRINCIPLES.md** 重构为两层：全局品牌底线 + 风格族附加原则，`bold-vivid` 的多色/强动效规则不再与全局约束冲突
- **CONTRIBUTING.md** 新增子主题架构规范（`themes/` 子目录），修复路径拼写错误（`skill/` → `skills/`）
- **plugin.json** 版本升至 1.1.0，描述更新

### 文件变更

- 新建 21 个文件（`styles/bold-vivid/` 完整风格目录）
- 修改 3 个文件（PRINCIPLES.md · CONTRIBUTING.md · SKILL.md）

---

## [1.0.1] — 2026-04-17

### 🧹 重构（无功能变化）

经 skill-creator 官方审计 + Codex 独立复审后的文档职责精简。零行为改动，仅提升可维护性。

- **PHILOSOPHY.md** 瘦身：顶部加入硬性底线摘要（3 条红线 + 锚点短链到 PRINCIPLES），删除与 PRINCIPLES 重复的信息密度分级、绝不做清单、层级定义
- **tailwind.config.js** 删除 legacy `primary` palette（50-900 蓝色阶梯）—— grep 验证零引用，对新项目是纯负担
- **TOKENS.md** 删除对应「遗留兼容」说明段
- **CONTRIBUTING.md** 的 Inter 禁用条目改为带锚点的 PRINCIPLES §4 短链引用

### 价值

- 同一规则的"真相源"数量从多份收敛到 PRINCIPLES 单源
- 下次改跨风格规则（如字体、层级、动效）只需改 PRINCIPLES 一处，其他文件短链自动跟随
- 默认加载路径（SKILL.md + QUICKREF.md）token 开销**不变**
- 净减 17 行内容

---

## [1.0.0] — 2026-04-17

### 🎉 首发

首个可用版本。作为 Claude Code plugin 发布。

### 收录的风格

- **smartsolu-linear** — 冷静、聪明、轻盈的专业工作台。Notion 骨架 + Linear 质感 + Raycast 浮层。来源：SmartSoluExpert v1.6.0 生产风格。

### 功能

- 父 skill + `styles/` 子目录架构，支持未来持续收录新风格
- Progressive disclosure：`QUICKREF.md` 速查 → `components/` 按需读 → 完整文档按需补充
- Claude Code plugin 原生支持：`/plugin install ruidong-ui@ruidong-ui-studio`
- 备选 shell 脚本安装（非 Claude Code 环境用）
- 触发 eval 基线（`evals/trigger_eval_draft.json`），供未来多风格时做回归测试

### 设计原则（跨风格通用，见 `skills/ruidong-ui/PRINCIPLES.md`）

- 禁用 Inter 字体（来自真实用户审美反馈）
- 主内容区禁用毛玻璃（保留给 Overlay 层）
- 单一主强调色（避免花哨）
- 动效 150–300ms（快速但可感知）
- 一屏视觉重点 ≤ 1 个

---

未来版本会按 `MAJOR.MINOR.PATCH` 递增：
- PATCH：修 bug、修文档漂移、补触发词
- MINOR：新增风格、新增 components 条目
- MAJOR：架构变更、删除已废弃风格、破坏性重命名
