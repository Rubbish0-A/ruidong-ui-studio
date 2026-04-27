# bold-vivid · 卡片组件

## 标准内容卡

最常用的卡片，适合功能介绍、内容展示。

```tsx
<div className="
  bg-surface border border-edge
  rounded-xl p-6
  shadow-card
  transition-all duration-fast ease-out
  hover:-translate-y-1 hover:border-edge-strong hover:shadow-glow
">
  <h3 className="font-display font-black text-foreground text-xl tracking-tight mb-2">
    卡片标题
  </h3>
  <p className="font-body text-muted text-sm leading-relaxed">
    卡片描述文字，使用 text-muted 保持次级视觉权重。
  </p>
</div>
```

## 高亮卡（带 accent 边框）

用于展示重点功能或当前选中状态。

```tsx
<div className="
  bg-surface border border-accent/50
  rounded-xl p-6
  shadow-glow
  relative overflow-hidden
">
  {/* 顶部 accent 色条 */}
  <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />

  <h3 className="font-display font-black text-accent text-xl tracking-tight mb-2">
    重点功能
  </h3>
  <p className="font-body text-muted text-sm leading-relaxed">
    高亮卡通过 accent 边框和顶部色条建立视觉重点。
  </p>
</div>
```

## 渐变背景卡

用于 Hero 区域的特性卡，视觉冲击力更强。

```tsx
<div className="
  bg-gradient-card border border-accent/20
  rounded-xl p-6
  relative overflow-hidden
">
  {/* 背景光晕（可选） */}
  <div className="
    absolute -top-10 -right-10 w-40 h-40
    bg-accent/20 rounded-full blur-3xl pointer-events-none
  " />

  <div className="relative">
    <span className="
      inline-block mb-3
      text-accent font-body font-semibold text-xs tracking-widest uppercase
    ">
      特色功能
    </span>
    <h3 className="font-display font-black text-foreground text-2xl tracking-tight mb-2">
      功能名称
    </h3>
    <p className="font-body text-muted text-sm leading-relaxed">
      详细描述。
    </p>
  </div>
</div>
```

## 横向卡（图标 + 文字）

适用于功能列表、特性对比。

```tsx
<div className="
  flex items-start gap-4
  bg-surface border border-edge
  rounded-xl p-5
  transition-all duration-fast ease-out
  hover:border-edge-strong
">
  {/* 图标区域 */}
  <div className="
    flex-shrink-0 w-10 h-10
    flex items-center justify-center
    bg-accent/10 text-accent
    rounded-lg
  ">
    <svg className="w-5 h-5" .../>
  </div>

  <div>
    <h4 className="font-display font-bold text-foreground text-base mb-1">
      功能名称
    </h4>
    <p className="font-body text-muted text-sm leading-relaxed">
      简短描述一行即可。
    </p>
  </div>
</div>
```

## 注意事项

- `shadow-card` 和 `shadow-glow` 的具体值在各子主题的 TOKENS.md 里定义
- cyberpunk / vaporwave 子主题的 `shadow-glow` 会有光晕效果；nordic / brutalist 较克制
- 渐变背景卡（`bg-gradient-card`）在非深色主题（如 brutalist 浅色版）中需酌情调整
