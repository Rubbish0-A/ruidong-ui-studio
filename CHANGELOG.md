# Changelog

本文档记录 `ruidong-ui-studio` 的每次发布改动。遵循 [Semantic Versioning](https://semver.org/)。

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
