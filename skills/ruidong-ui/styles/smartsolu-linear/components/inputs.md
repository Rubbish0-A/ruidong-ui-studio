# 输入框

## 常态输入

默认底色用 `surface-alt` 而非纯白，避免"输入框和卡片一样白"导致分不清层级。聚焦时底色翻白 + accent 边框 + 10% 透明度光晕（不暴力变色）。

```tsx
<input
  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-alt border border-edge
             text-sm text-ink placeholder:text-ink-tertiary
             focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/10
             focus:outline-none transition-all duration-150"
  placeholder="输入客户名称" />
```

## 大 Textarea（方案工坊类）

长文本输入用更大圆角 + 白底 + `shadow-surface`，和卡片齐平。放 `resize-none` 避免右下角拖拽破坏布局；滚动条用 `custom-scrollbar`（细 + 低饱和）。

```tsx
<textarea
  className="w-full px-4 py-3 rounded-xl bg-white border border-edge
             text-sm text-ink leading-relaxed placeholder:text-ink-tertiary
             focus:border-accent focus:ring-2 focus:ring-accent/10
             focus:outline-none shadow-surface transition-all duration-150
             resize-none custom-scrollbar"
  rows={8}
  placeholder="粘贴 PPT 内容或描述你的方案..." />
```

## 原则

- 不在输入区用毛玻璃（属于主内容区，玻璃效果只给浮层）
- 聚焦态用 ring-accent/10 光晕而非粗暴的 border 变色
- 禁用态用 `opacity-50 cursor-not-allowed`
