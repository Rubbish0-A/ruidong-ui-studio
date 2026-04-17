# 浮层（Overlay 层 · 唯一可用毛玻璃）

Overlay 是这个风格里**唯一**可以用 `backdrop-blur` 的层级。包括：顶栏、弹窗、Toast、下拉菜单。其他地方都是实心白或实心深色。

## 顶栏（Header）

固定在主内容区顶部，用 80% 白 + 模糊，让它悬浮在下方内容上但又不完全遮挡。底部描边用 `shadow-[0_1px_0_...]` 画一根发丝线，比边框更轻。

```tsx
<header className="h-14 bg-white/80 backdrop-blur-xl
                   shadow-[0_1px_0_rgba(0,0,0,0.04)]
                   flex items-center justify-between px-6 shrink-0 z-10 sticky top-0">
  <div className="flex items-center gap-3">
    <button className="p-1.5 hover:bg-surface-alt rounded-lg text-ink-tertiary
                       transition-colors duration-150">
      <SlidersIcon className="w-4 h-4" />
    </button>
    <h1 className="text-base font-semibold text-ink tracking-tight">
      方案工坊
    </h1>
  </div>
  <div className="flex items-center gap-2.5">
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-alt
                    text-ink-secondary rounded-lg border border-edge">
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      <span className="text-xs font-medium">睿动AI · Qwen Max</span>
    </div>
  </div>
</header>
```

## 模态弹窗

遮罩用 `bg-ink/20 backdrop-blur-sm`（不是纯黑 50% —— 太重），弹窗本体 95% 白 + 强模糊。圆角给 `rounded-3xl`（24px）—— 弹窗是最大的浮层，圆角可以最夸张。

```tsx
{/* 遮罩 */}
<div className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm animate-fade-in" />

{/* 弹窗 */}
<div className="fixed inset-0 z-50 flex items-center justify-center p-4
                pointer-events-none animate-scale-in">
  <div className="pointer-events-auto bg-white/95 backdrop-blur-xl
                  rounded-3xl shadow-overlay border border-edge/60
                  max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col">
    <header className="flex items-center justify-between p-6 border-b border-edge">
      <h2 className="text-lg font-bold text-ink tracking-tight">对比诊断结果</h2>
      <button className="p-1.5 hover:bg-surface-alt rounded-lg text-ink-tertiary">
        <CloseIcon className="w-4 h-4" />
      </button>
    </header>
    <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
      {/* content */}
    </div>
  </div>
</div>
```

## Toast 通知

右上角堆叠，`animate-slide-in` 从右滑入。`pointer-events-none` 在外层容器、`pointer-events-auto` 在单条上 —— 这样用户点击 Toast 之间的空白不会误触下方 UI。

容器放置：
```tsx
<div className="fixed top-5 right-5 z-50 flex flex-col gap-2.5 pointer-events-none">
```

单条 Toast：
```tsx
<div className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl
                 shadow-float border text-sm font-medium animate-slide-in backdrop-blur-lg ${
  type === 'success' ? 'bg-white/90 border-emerald-200/60 text-emerald-800' :
  type === 'error'   ? 'bg-white/90 border-red-200/60 text-red-800' :
                       'bg-sidebar/90 border-sidebar-edge text-sidebar-text'
}`}>
  {type === 'success' && <SuccessIcon className="w-4 h-4 text-emerald-500 shrink-0" />}
  {type === 'error'   && <AlertIcon   className="w-4 h-4 text-red-500     shrink-0" />}
  {type === 'info'    && <AIIcon      className="w-4 h-4 text-accent      shrink-0" />}
  {message}
</div>
```

Info 型 Toast 用深色底（`bg-sidebar/90`），和成功/错误区分开 —— 三种 Toast 一眼识别类别。
