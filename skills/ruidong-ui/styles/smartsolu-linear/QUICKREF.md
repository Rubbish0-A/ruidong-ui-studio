# smartsolu-linear · 快速参考（一页纸）

> 这份文件是 Claude 激活 skill 后的**第一站**。读完这一页，就能判断一次普通请求要怎么处理，不必一开始就加载 TOKENS / COMPONENTS。

## 一句话叙事

**冷静、聪明、轻盈的专业工作台。** Notion 骨架 + Linear 质感 + Raycast 浮层。

## 四个最常触碰的 token（记住这四个就能写 80% 的界面）

- `bg-canvas` — 页面底色（浅灰微蓝，非纯白）
- `text-ink` — 主文字（深色 #1a1d2e，非纯黑）
- `bg-accent` / `text-accent` — 唯一强调色（靛蓝紫 #5e6ad2，只用于主按钮、选中、链接）
- `border-edge` — 默认极淡描边（#e6e9f0）

## 三个最常用组件的 class（直接抄）

**主按钮**：`px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium shadow-surface hover:bg-accent-hover active:scale-[0.98] transition-all duration-150`

**卡片**：`bg-white rounded-xl shadow-surface border border-edge p-6`

**侧栏项（深色域）**：`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-text-tertiary hover:bg-white/5 hover:text-sidebar-text-secondary transition-all duration-150`

## 字体

Plus Jakarta Sans（英文）+ Noto Sans SC（中文）。**绝不用 Inter**。

## 四层层级速记

- Base = 页面（`bg-canvas`，无阴影）
- Surface = 内容卡片（`bg-white shadow-surface border-edge`）
- Raised = 悬浮卡片（`shadow-float`）
- Overlay = 顶栏/弹窗/Toast（**唯一可用毛玻璃**：`bg-white/80 backdrop-blur-xl`）

## 需要更多细节时去哪

| 需求 | 读哪个文件 |
|---|---|
| 为什么这样设计、哪些坚决不做 | `PHILOSOPHY.md` |
| 完整色彩/字体/阴影/圆角 token 表 | `TOKENS.md` |
| 具体组件的完整 tsx 片段 | `components/<kind>.md`（见 `components/README.md` 清单） |
| 复制一份 Tailwind 配置到用户项目 | `tailwind.config.js` |
| 字体 `<link>` 和 body font-family | `fonts.html` |
| 完整的 React 页面骨架示例 | `examples/app-skeleton.tsx` |

**按需加载，不要一次全读。**
