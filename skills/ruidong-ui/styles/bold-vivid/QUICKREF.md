# bold-vivid · 快速参考（一页纸）

> Claude 激活 bold-vivid 后的**第一站**。选定子主题后读对应的 `themes/<subtheme>/QUICKREF.md`。

## 一句话叙事

**强识别度、反平庸——每个界面都应有独特的视觉记忆点。**  
反"AI 平庸美学"：拒绝 Inter 字体、紫蓝渐变、平白背景、零动效。

## 子主题选择（用户未指定时展示此表）

| 子主题 | 一句话 | 触发词 |
|---|---|---|
| `cyberpunk` | 暗底霓虹，科技感强烈 | 赛博朋克、科技感、霓虹 |
| `brutalist` | 高对比粗边框，原始有力 | 野兽派、粗犷、开发者风 |
| `vaporwave` | 渐变紫粉，复古未来感 | 蒸汽波、渐变、复古 |
| `nordic` | 深灰衬线，冷雅克制 | 北欧、极简、文档风 |

## 核心 CSS 变量（所有子主题共用名称，值因主题而异）

```css
var(--bg-primary)    /* 页面底色 */
var(--accent-1)      /* 主强调色 */
var(--accent-2)      /* 次强调色 */
var(--text-primary)  /* 主文字 */
var(--font-display)  /* 标题字体 */
var(--font-body)     /* 正文字体 */
```

## 核心 Tailwind 语义 class（对应 tailwind.config.js 桥接）

| CSS 变量 | Tailwind class |
|---|---|
| `--bg-primary` | `bg-base` |
| `--bg-secondary` | `bg-surface` |
| `--accent-1` | `bg-accent` / `text-accent` / `border-accent` |
| `--accent-2` | `bg-accent-2` / `text-accent-2` |
| `--text-primary` | `text-foreground` |
| `--text-secondary` | `text-muted` |
| `--border-default` | `border-edge` |

## 三个最高频组件（直接抄，切换子主题时 class 不变）

**主 CTA 按钮**：
```
px-8 py-4 bg-accent text-base font-display font-black tracking-tight rounded-lg transition-transform duration-fast hover:-translate-y-0.5 active:scale-[0.98]
```

**内容卡片**：
```
bg-surface border border-edge rounded-xl p-6 shadow-card
```

**Hero 标题**：
```
font-display font-black text-foreground tracking-tight leading-none
```

## 字体声明（子主题各有自己的字体对，见 themes/<subtheme>/QUICKREF.md）

- ❌ **绝不用 Inter**
- ✅ 各子主题声明：display font（极端字重）+ body font（可读性）+ 中文 Noto Sans SC

## 四层层级速记（与全局一致）

- Base = 页面底色（`bg-base`，深色调）
- Surface = 内容卡（`bg-surface` + `shadow-card`）
- Raised = 悬浮卡（`shadow-glow` 或更强阴影）
- Overlay = 弹窗（允许模糊背景叠加）

## 动效节奏

- 基础过渡：`duration-fast`（0.3s），`ease-out`
- 入场序列：`animate-fade-in-up` + `stagger-1/2/3/4/5`（0.1s 梯度延迟）
- 重要：`@media (prefers-reduced-motion: reduce)` 时降级为无动画

## 需要更多细节时去哪

| 需求 | 读哪个文件 |
|---|---|
| 当前子主题的完整配色 / 字体 token | `themes/<subtheme>/TOKENS.md` |
| 子主题速查（30 行） | `themes/<subtheme>/QUICKREF.md` |
| bold-vivid 设计哲学和禁区 | `PHILOSOPHY.md` |
| 具体组件 tsx 片段 | `components/<kind>.md` |
| Tailwind 配置复制 | `tailwind.config.js` |
| 字体 link 代码 | `fonts.html` |
| 完整示例 | `examples/` |
