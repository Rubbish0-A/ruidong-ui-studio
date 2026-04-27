# bold-vivid · vaporwave · 快速参考

> 蒸汽波：渐变紫粉，复古未来感。深紫底 + 四色渐变 + 淡黄文字。

## 四个最常触碰的 token

- `var(--bg-primary)` / `bg-base` — 深紫黑（`#1a0033`）
- `var(--accent-1)` / `bg-accent` — 樱粉（`#ff71ce`），主 CTA / 标题高亮
- `var(--accent-2)` / `text-accent-2` — 电青（`#01cdfe`），边框 / 次级
- `var(--text-primary)` / `text-foreground` — 淡黄（`#fffb96`），蒸汽波特征文字色

## 字体

- 标题：**Recursive** · 900w（可变字体）· 有复古未来感
- 正文：**DM Sans** · 200w
- 中文：Noto Sans SC fallback

## 三个最高频组件 class

**主 CTA 按钮**（樱粉底，圆润）：
```
px-8 py-4 bg-accent text-base font-display font-black tracking-tight rounded-xl
hover:-translate-y-0.5 hover:shadow-glow transition-all duration-fast ease-out
```

**内容卡片**（渐变背景 + 樱粉边框）：
```
bg-gradient-card border border-edge rounded-2xl p-6 shadow-card
hover:border-edge-strong hover:-translate-y-1 transition-all duration-fast ease-out
```

**标题渐变文字**（signature vaporwave 效果）：
```tsx
<h1 style={{
  background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}} className="font-display font-black tracking-tight leading-none">
  标题
</h1>
```

## 四层层级

- Base：`bg-base`（`#1a0033`）+ gradient-hero（四色 mesh 渐变）
- Surface：`bg-surface`（`#2d1b4e`）+ `border-edge` + `shadow-card`
- Raised：`bg-surface` + `shadow-glow`（樱粉光晕）
- Overlay：`bg-overlay`（`rgba(26,0,51,0.90)`）+ `backdrop-blur-xl`

## 蒸汽波特色

- **Mesh 渐变背景**：用 `--gradient-hero`（四色 radial-gradient 叠加）
- **淡黄文字**：`--text-primary: #fffb96`，是蒸汽波最标志性的文字色
- **标题渐变**：accent-1 → accent-2 线性渐变裁剪到文字
- **圆润卡片**：`rounded-2xl / rounded-3xl`，无直角

## 需要完整 token 时

→ `themes/vaporwave/TOKENS.md`
