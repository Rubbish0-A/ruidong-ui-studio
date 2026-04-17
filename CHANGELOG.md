# Changelog

本文档记录 `ruidong-ui-studio` 的每次发布改动。遵循 [Semantic Versioning](https://semver.org/)。

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
