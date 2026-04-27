# bold-vivid · cyberpunk · 快速参考

> 赛博朋克：暗底 + 霓虹双色。Blade Runner 美学。

## 四个最常触碰的 token

- `var(--bg-primary)` / `bg-base` — 深蓝黑底色（`#0a0e27`）
- `var(--accent-1)` / `bg-accent` — 霓虹粉红（`#ff2e97`），主 CTA
- `var(--accent-2)` / `text-accent-2` — 青蓝（`#00d9ff`），边框 / 高亮
- `var(--text-primary)` / `text-foreground` — 冷白文字（`#e4f1ff`）

## 字体

- 标题：**Space Grotesk** · 900w · 紧字距
- 正文：**DM Mono** · 300w · 技术等宽感
- 中文：Noto Sans SC fallback

## 三个最高频组件 class

**主 CTA 按钮**（霓虹粉红，hover 时光晕）：
```
px-8 py-4 bg-accent text-base font-display font-black tracking-tight rounded-lg
hover:-translate-y-0.5 hover:shadow-glow transition-all duration-fast ease-out
```

**内容卡片**（青蓝边框，深底）：
```
bg-surface border border-edge rounded-xl p-6 shadow-card
hover:border-edge-strong hover:-translate-y-1 transition-all duration-fast ease-out
```

**Hero 大标题**（极粗，冷白）：
```
font-display font-black text-foreground tracking-[-0.04em] leading-none
clamp(3rem, 8vw, 6rem)（用 style 或 text-[clamp(...)]）
```

## 四层层级

- Base：`bg-base`（`#0a0e27`）+ gradient-hero 光晕叠加
- Surface：`bg-surface`（`#141826`）+ `shadow-card`
- Raised：`bg-surface` + `shadow-glow`（粉红光晕）
- Overlay：`bg-overlay`（`rgba(10,14,39,0.88)`）+ `backdrop-blur-xl`

## 特色效果

- 背景光晕：用 `bg-gradient-hero`（放射状渐变，粉+青）叠在 `bg-base` 上
- 网格纹理：用 `border-default` 做 50px 网格叠加，opacity-[0.03]
- 按钮光晕：`shadow-glow`（`0 0 24px rgba(255,46,151,0.35)`）

## 需要完整 token 时

→ `themes/cyberpunk/TOKENS.md`
