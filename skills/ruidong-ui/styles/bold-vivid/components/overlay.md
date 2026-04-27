# bold-vivid · 浮层组件

> Overlay 层是唯一允许毛玻璃效果的层（见 PRINCIPLES.md §3）。

## 顶部导航栏

固定顶部，半透明深色背景 + 模糊。

```tsx
<nav className="
  fixed top-0 left-0 right-0 z-50
  h-16
  flex items-center justify-between px-8
  bg-overlay backdrop-blur-xl
  border-b border-edge/50
">
  {/* Logo */}
  <span className="font-display font-black text-foreground text-lg tracking-tight">
    LOGO
  </span>

  {/* 导航链接 */}
  <div className="hidden md:flex items-center gap-8">
    {['产品', '定价', '关于'].map(item => (
      <a key={item} href="#" className="
        font-body text-muted text-sm
        transition-colors duration-fast
        hover:text-foreground
      ">
        {item}
      </a>
    ))}
  </div>

  {/* CTA */}
  <button className="
    px-5 py-2 bg-accent text-base
    font-display font-bold text-sm tracking-tight
    rounded-lg
    transition-all duration-fast ease-out
    hover:-translate-y-0.5 hover:shadow-glow
  ">
    开始使用
  </button>
</nav>
```

## Modal 弹窗

半透明遮罩 + 弹出面板，支持 prefers-reduced-motion。

```tsx
{/* 遮罩 */}
<div className="
  fixed inset-0 z-40
  bg-base/80 backdrop-blur-sm
  animate-fade-in-up
  @media(prefers-reduced-motion:reduce):animate-none
" onClick={onClose} />

{/* 弹窗主体 */}
<div className="
  fixed left-1/2 top-1/2 z-50
  w-full max-w-lg
  -translate-x-1/2 -translate-y-1/2
  bg-surface border border-edge
  rounded-2xl p-8
  shadow-glow
  animate-scale-in
  @media(prefers-reduced-motion:reduce):animate-none
">
  <h2 className="font-display font-black text-foreground text-2xl tracking-tight mb-4">
    弹窗标题
  </h2>
  <p className="font-body text-muted text-sm leading-relaxed mb-6">
    弹窗内容描述。
  </p>
  <div className="flex gap-3 justify-end">
    <button onClick={onClose} className="px-5 py-2 text-muted font-body text-sm hover:text-foreground transition-colors">
      取消
    </button>
    <button className="px-6 py-2.5 bg-accent text-base font-display font-bold text-sm rounded-lg hover:shadow-glow transition-all duration-fast">
      确认
    </button>
  </div>
</div>
```

## Toast 通知

右下角吐司，3 类型：成功 / 警告 / 错误。

```tsx
{/* 容器 */}
<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
  {/* 成功 */}
  <div className="
    flex items-center gap-3
    px-4 py-3
    bg-surface border border-edge
    rounded-xl shadow-glow
    animate-fade-in-up
    min-w-[240px]
  ">
    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
    <span className="font-body text-foreground text-sm">操作已成功</span>
  </div>
</div>
```

## 注意事项

- `bg-overlay` 对应 `var(--bg-overlay)`，各子主题定义不同的不透明度（cyberpunk 更透、nordic 更实）
- 动效在 `prefers-reduced-motion` 时必须降级，Modal 和 Toast 尤其要注意
- 顶部导航栏的高度 16（64px）是 bold-vivid 的建议值，业务可按需调整
