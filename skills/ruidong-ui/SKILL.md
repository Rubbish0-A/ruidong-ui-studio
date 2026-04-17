---
name: ruidong-ui
description: Use this skill whenever building, designing, or styling any frontend UI for a Ruidong (睿动) AI agent project — even if the user doesn't explicitly say "睿动风格". Apply proactively when the user mentions designing a sidebar, dashboard, settings page, chat panel, Tailwind config, or any React/frontend UI for a new Ruidong agent, or says things like "睿动风格"、"睿动 UI"、"用睿动的样式"、"ruidong-ui"、"SmartSolu 同款"、"智能解决方案架构师同款"、"需要和睿动其他智能体保持视觉一致"、"跟智能体广场其他 app 保持一致"、or slashes /ruidong-ui. Contains a curated set of styles (currently smartsolu-linear — the polished Notion+Linear+Raycast workbench aesthetic); the skill helps pick one when not specified and then supplies Tailwind tokens, component snippets, and full example code so the agent's UI stays on brand without debating colors/fonts/components from scratch.
---

# Ruidong UI Studio

这个 skill 的作用是让 Claude 按睿动沉淀下来的某一套既定 UI/UX 风格生成前端界面代码，而不是每次新项目都从零讨论配色、字体、组件。所有风格都是基于真实睿动智能体（如 SmartSoluExpert）打磨出来的，带着团队经过多轮反馈验证的审美判断。

## 工作流程（三步）

### 第一步：确认用户要用哪套风格

当前已收录的风格：

| 风格 ID | 一句话叙事 | 来源 | 气质关键词 |
|---|---|---|---|
| `smartsolu-linear` | 冷静、聪明、轻盈的专业工作台 | SmartSoluExpert v1.6.0 | Notion 骨架 + Linear 质感 + Raycast 浮层；深色侧边栏 + 浅灰主内容区；Plus Jakarta Sans + Noto Sans SC |

选择逻辑：

- **用户已经明确指定风格**（例如 `/ruidong-ui smartsolu-linear`、"用 SmartSolu 同款"）：直接进入第二步。
- **用户没指定具体风格时**：
  - **仓库里只有 1 个风格（当前情况）**：默认选中它，在一句话告知即可（"目前风格库里只收录了 `smartsolu-linear`，按它来生成"），不要浪费一次 AskUserQuestion —— 没有别的选项时让用户点按钮是累赘。
  - **有 2 个及以上风格时**：用 AskUserQuestion 把表格呈现给用户让他选。不要替用户做主。
- **用户说的是自由形容词**（"简洁点"、"深色"、"专业"）：先按形容词筛选可能匹配的风格；若筛选后仍有多个，再用 AskUserQuestion 让他确认。

### 第二步：按需加载风格的设计上下文

**遵循 progressive disclosure：只读你下一步真正要用的文件，不要一口气把 700 行塞进上下文。**

分三档：

1. **激活后必读（约 30 行）**：`styles/<style-id>/QUICKREF.md` —— 一页纸速查卡，叙事主线 + 4 个核心 token + 3 个高频组件 class。读完这一页大部分"帮我写个按钮"、"给我一个卡片"类请求就能直接处理。
2. **需要具体组件时读**：`styles/<style-id>/components/<kind>.md` —— 按组件类别分文件（buttons / cards / inputs / overlay / sidebar / misc）。清单见 `components/README.md`。
3. **需要完整设计哲学或全 token 表时读**：
   - `PHILOSOPHY.md` —— 叙事主线、绝不做的事、状态规则、动效规则
   - `TOKENS.md` —— 色彩 / 字体 / 阴影 / 圆角 / 间距的完整令牌
   - `tailwind.config.js` + `fonts.html` —— 可直接复制到用户项目的配置片段
   - `examples/app-skeleton.tsx` —— 完整页面骨架，要搭整个应用时直接参考

用户问"为什么这样设计"、要做大的风格决策、或需要把配置复制到新项目时才去读 2/3 档。简单组件请求只读 QUICKREF + 对应的 `components/<kind>.md` 即可。

### 第三步：按用户项目状态落地

落地方式取决于对方项目的状态：

- **新建项目** → 给完整的 `index.html` + `tailwind.config.js` + `App.tsx` 起手模板，并简要解释每一块。
- **已有项目** → 先用 Read/Grep 检查对方的技术栈和现有样式系统，再以最小侵入方式注入（优先覆盖 Tailwind config、补充 CSS 变量；不要大规模重写现有组件）。
- **局部应用** → 只按请求的组件（如"给我一个符合睿动风的按钮"）生成片段，并附上最小化的前置配置。

## 输出约束与原因

下面这些约束不是摆设，都各自有理由。理解原因后可以在边缘情况灵活判断：

- **引用 token 名而非 hex 值**（例如 `bg-canvas` 而不是 `bg-[#f7f8fc]`）。原因：用户后续换色只需改 `tailwind.config.js` 一处；写死 hex 会让风格升级成本指数级增长。如果确实要新值，说明理由并提议是否加入 TOKENS.md。
- **一屏视觉重点 ≤ 1 个**。原因：这是 PHILOSOPHY.md 的底线规则；多焦点会破坏"冷静工作台"的气质，无论具体组件多精致。
- **含糊形容词先追问**。用户说"更高级"、"更大气"、"更科技感"时，先问指向哪个维度（字号？留白？色彩？字重？），再给方案。原因：模糊形容词做出来的东西用户大概率还会推翻一次 —— 预先对齐比返工便宜。
- **代码前/后加一段简短 Insight 说明决策**。原因：用户看不见你的推理过程，只看见代码；不解释 why，后续他想改一处就不知道是否会破坏整体一致性。

## 跨风格的共通元原则

无论加载哪套具体风格，共通的底线写在仓库根的 `PRINCIPLES.md`。具体风格告诉你"这个项目怎么写"，共通原则告诉你"无论怎么写都不能越的线"（例如：绝不用 Inter 字体、主内容区不用毛玻璃、动效时长上限 400ms）。

当用户在不同风格间切换或融合时，用 PRINCIPLES.md 做一致性裁决。

## 新增风格

详见仓库根的 `CONTRIBUTING.md`。每个新风格必须提供：`QUICKREF.md` + `PHILOSOPHY.md` + `TOKENS.md` + `components/` 目录 + `tailwind.config.js` + `fonts.html` + `examples/`。
