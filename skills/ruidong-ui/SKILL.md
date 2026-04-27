---
name: ruidong-ui
description: Use this skill whenever building, designing, or styling any frontend UI for a Ruidong (睿动) AI agent project — even if the user doesn't explicitly say "睿动风格". Apply proactively when the user mentions designing a sidebar, dashboard, settings page, chat panel, Tailwind config, or any React/frontend UI for a new Ruidong agent, or says things like "睿动风格"、"睿动 UI"、"用睿动的样式"、"ruidong-ui"、"SmartSolu 同款"、"智能解决方案架构师同款"、"需要和睿动其他智能体保持视觉一致"、"跟智能体广场其他 app 保持一致"、"bold-vivid 风格"、"赛博朋克风格"、"北欧简约风"、"蒸汽波风格"、or slashes /ruidong-ui. Contains a curated set of styles (smartsolu-linear — the polished Notion+Linear+Raycast workbench aesthetic; bold-vivid — high-impact themed aesthetics with 4 sub-themes); the skill helps pick one when not specified and then supplies tokens, component snippets, and full example code so the agent's UI stays on brand without debating colors/fonts/components from scratch.
---

# Ruidong UI Studio

这个 skill 的作用是让 Claude 按睿动沉淀下来的某一套既定 UI/UX 风格生成前端界面代码，而不是每次新项目都从零讨论配色、字体、组件。所有风格都是基于真实睿动智能体打磨出来的，带着团队经过多轮反馈验证的审美判断。

## 工作流程（四步）

### 第一步：确认用户要用哪套风格

当前已收录的风格：

| 风格 ID | 一句话叙事 | 来源 | 气质关键词 |
|---|---|---|---|
| `smartsolu-linear` | 冷静、聪明、轻盈的专业工作台 | SmartSoluExpert v1.6.0 | Notion 骨架 + Linear 质感 + Raycast 浮层；深色侧边栏 + 浅灰主内容区；Plus Jakarta Sans + Noto Sans SC |
| `bold-vivid` | 强识别度、反平庸、每个界面都有独特视觉记忆点 | distinctive-frontend + 睿动调优 | 4 个子主题（cyberpunk / brutalist / vaporwave / nordic）；极端字重对比；多强调色；编排式入场动效 |

选择逻辑：

- **用户已明确指定风格**（`/ruidong-ui smartsolu-linear`、"bold-vivid cyberpunk 主题"）：直接进入第二步。
- **用户没指定具体风格**：用 AskUserQuestion 把表格呈现给用户让他选。
- **选了 bold-vivid 但未指定子主题**：再用 AskUserQuestion 展示 4 个子主题的一句话描述让他选（见 `styles/bold-vivid/QUICKREF.md`）。
- **用户说的是自由形容词**（"高级点"、"有冲击力"、"深色"）：先按形容词匹配，若仍有多个候选再用 AskUserQuestion 确认。

### 第二步：按需加载风格的设计上下文

**遵循 progressive disclosure：只读你下一步真正要用的文件。**

分三档：

1. **激活后必读（约 30 行）**：`styles/<style-id>/QUICKREF.md` — 速查卡，读完这一页大部分简单请求就能直接处理。
2. **需要具体组件时读**：`styles/<style-id>/components/<kind>.md` — 按组件类别分文件。
3. **需要完整 token 或哲学时读**：
   - 单配色风格：`PHILOSOPHY.md` + `TOKENS.md` + `tailwind.config.js` + `fonts.html`
   - 子主题风格（bold-vivid）：`PHILOSOPHY.md` + `themes/<subtheme>/TOKENS.md` + `tailwind.config.js` + `fonts.html`

简单组件请求只读 QUICKREF + 对应的 `components/<kind>.md` 即可。

### 第三步：按用户项目状态落地

落地方式取决于对方项目的状态：

- **新建项目** →
  1. 给完整的起手模板（`index.html` / `tailwind.config.js` / `App.tsx`）
  2. **在项目根生成 `ruidong-ui.config.json`**，内容如下：
     ```json
     {
       "style": "<style-id>",
       "subtheme": "<subtheme-id 或 null>",
       "version": "1.1.0"
     }
     ```
     这个文件锁定该项目的主题，后续每次改 UI 都先读它确认再生成。

- **已有项目** →
  1. 先检查项目根是否有 `ruidong-ui.config.json`；有则按其 style/subtheme 生成，无则询问用户
  2. 以最小侵入方式注入（优先覆盖 Tailwind config / 补充 CSS 变量；不大规模重写现有组件）

- **局部应用** → 只按请求的组件生成片段，附上最小化的前置配置。

### 第四步：生成前自查

每次输出代码前，对照以下 checklist：

- [ ] 所有颜色引用 token 名而非 hex（`bg-accent` 而非 `bg-[#5e6ad2]`）
- [ ] 所有字体引用风格指定字体，没有出现 Inter
- [ ] 字重在该风格允许的范围内
- [ ] 同一文件里没有混用两套 style 或 subtheme 的 token
- [ ] 如果项目有 `ruidong-ui.config.json`，生成的代码与其 style/subtheme 一致

**任何一条不满足 → 先修正再输出，不要输出后再提醒。**

## 输出约束（MUST / MUST NOT）

**MUST：**
- 引用 token 名而非 hex 值（`bg-accent` 不要 `bg-[#5e6ad2]`）
- 生成代码前先检查项目根是否有 `ruidong-ui.config.json`，有则严格按 style/subtheme 生成
- 新建项目时生成 `ruidong-ui.config.json` 到项目根
- 含糊形容词（"更高级"、"更大气"）先追问指向哪个维度，再给方案

**MUST NOT：**
- 在组件代码里写 raw hex / rgb / rgba 值
- 使用 Inter 字体
- 同一项目混用两个不同的 style 或 subtheme
- 不告知决策就自行切换主题

**代码前/后加一段简短 Insight 说明决策**，让用户知道为什么这样取 token、为什么选这个组件结构。

## 跨风格的共通元原则

无论加载哪套具体风格，共通的底线写在 `skills/ruidong-ui/PRINCIPLES.md`。具体风格告诉你"这个项目怎么写"，共通原则告诉你"无论怎么写都不能越的线"。

## 新增风格

详见 `skills/ruidong-ui/CONTRIBUTING.md`。
