# bold-vivid · brutalist · 快速参考

> 野兽派：高对比粗边框，原始有力。米白底 + 极黑 + 野兽派红。

## 四个最常触碰的 token

- `var(--bg-primary)` / `bg-base` — 米白底（`#f2f0eb`）
- `var(--accent-1)` / `bg-accent` — 野兽派红（`#e63022`），主 CTA
- `var(--accent-2)` / `text-accent-2` — 极黑（`#1a1a1a`），线条 / 文字
- `var(--border-default)` / `border-edge` — 纯黑边框

## 字体

- 标题：**Bebas Neue** · 全大写 · 极度压缩 · 无字重（只有一个字重）
- 正文：**DM Sans** · 200w · 轻体
- 中文：Noto Sans SC fallback

## 三个最高频组件 class

**主 CTA 按钮**（红底黑框，offset shadow）：
```
px-8 py-4 bg-accent text-base font-display tracking-widest uppercase
border-2 border-accent-2 shadow-card
hover:shadow-glow hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-fast
```
*注：brutalist 用 `shadow-card`（`4px 4px 0 #1a1a1a`）而非 blur 阴影*

**内容卡片**（白底黑框，offset shadow）：
```
bg-surface border-2 border-edge rounded shadow-card p-6
hover:shadow-glow transition-all duration-fast ease-out
```

**Hero 大标题**（Bebas Neue 极大字）：
```
font-display text-foreground tracking-widest uppercase leading-none
clamp(4rem, 10vw, 8rem)（内联 style）
```

## 四层层级

- Base：`bg-base`（`#f2f0eb`）米白
- Surface：`bg-surface`（`#ffffff`）纯白 + `border-2 border-edge` + `shadow-card`
- Raised：`bg-surface` + `shadow-glow`（红色 offset）
- Overlay：`bg-overlay`（`rgba(242,240,235,0.95)`）

## 野兽派特色

- **粗边框**：统一用 `border-2`（2px）或 `border-[3px]`（3px solid），不用 `border`（1px）
- **Offset 阴影**：`shadow-card`（`4px 4px 0 #1a1a1a`），hover 变 `shadow-glow`（红色）
- **无渐变**：背景不加渐变，靠排版密度和边框建立结构感
- **全大写标题**：`uppercase tracking-widest` 是野兽派 CSS 标配

## 需要完整 token 时

→ `themes/brutalist/TOKENS.md`
