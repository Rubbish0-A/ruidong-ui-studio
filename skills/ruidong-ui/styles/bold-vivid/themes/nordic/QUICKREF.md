# bold-vivid · nordic · 快速参考

> 北欧简约：深灰底 + 衬线标题 + 冰霜蓝。Nord 调色板，冷雅克制。

## 四个最常触碰的 token

- `var(--bg-primary)` / `bg-base` — Nord 深灰蓝（`#2e3440`）
- `var(--accent-1)` / `bg-accent` — 冰霜蓝（`#88c0d0`），主强调
- `var(--text-primary)` / `text-foreground` — Nord 白（`#eceff4`）
- `var(--font-display)` — Playfair Display（衬线，literary 感）

## 字体

- 标题：**Playfair Display** · 900w · 衬线 · 高对比笔画
- 正文：**Source Sans 3** · 200w · 长文阅读友好
- 中文：Noto Serif SC（标题）/ Noto Sans SC（正文）fallback

## 三个最高频组件 class

**主 CTA 按钮**（冰霜蓝底，克制）：
```
px-7 py-3 bg-accent text-base font-body font-semibold text-sm tracking-wide rounded-lg
hover:-translate-y-0.5 hover:shadow-glow transition-all duration-fast ease-out
```

**内容卡片**（深灰底，微妙边框）：
```
bg-surface border border-edge rounded-xl p-6 shadow-card
hover:border-edge-strong transition-all duration-fast ease-out
```

**Hero 大标题**（Playfair 衬线冲击）：
```
font-display font-black text-foreground tracking-tight leading-[1.1]
clamp(2.5rem, 6vw, 4.5rem)（内联 style）
```

## 四层层级

- Base：`bg-base`（`#2e3440`）+ gradient-hero（顶部微光）
- Surface：`bg-surface`（`#3b4252`）+ `border-edge` + `shadow-card`
- Raised：`bg-surface` + `shadow-glow`（柔和蓝光）
- Overlay：`bg-overlay`（`rgba(46,52,64,0.94)`）+ `backdrop-blur-md`

## Nordic 特色

- **衬线标题**：`font-display`（Playfair Display）是区别于其他子主题的核心 DNA
- **克制渐变**：`--gradient-hero` 只在页面顶部有极淡的冰霜蓝光晕，其余区域无渐变
- **功能色用 Aurora 调色板**：成功 = Aurora 绿，错误 = Aurora 红，符合 Nord 主题
- **无强烈光晕**：`shadow-glow` 比 cyberpunk/vaporwave 克制得多，更接近 smartsolu-linear

## 需要完整 token 时

→ `themes/nordic/TOKENS.md`
