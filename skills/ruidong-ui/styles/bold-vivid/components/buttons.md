# bold-vivid · 按钮组件

## 主 CTA 按钮

强调色底色，用于页面最重要的单一操作。

```tsx
<button className="
  px-8 py-4
  bg-accent text-base
  font-display font-black tracking-tight
  rounded-lg
  transition-all duration-fast ease-out
  hover:-translate-y-0.5 hover:shadow-glow
  active:scale-[0.97]
  focus:outline-none focus:ring-2 focus:ring-accent/40
  disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0
">
  开始使用
</button>
```

## 次级按钮

边框样式，权重低于 CTA，用于"了解更多"等次要操作。

```tsx
<button className="
  px-6 py-3
  bg-transparent text-accent border border-accent
  font-body font-semibold text-sm tracking-wide
  rounded-lg
  transition-all duration-fast ease-out
  hover:bg-accent/10 hover:border-accent-2
  active:scale-[0.97]
  focus:outline-none focus:ring-2 focus:ring-accent/30
">
  了解更多
</button>
```

## 幽灵按钮

极淡，用于不需要强调的操作（取消、返回等）。

```tsx
<button className="
  px-5 py-2.5
  bg-transparent text-muted border border-edge
  font-body font-normal text-sm
  rounded-lg
  transition-all duration-fast ease-out
  hover:text-foreground hover:border-edge-strong
  active:scale-[0.98]
">
  取消
</button>
```

## 图标按钮

正方形，只有图标，用于工具栏或卡片内操作。

```tsx
<button className="
  w-10 h-10
  flex items-center justify-center
  bg-surface text-muted border border-edge
  rounded-lg
  transition-all duration-fast ease-out
  hover:text-foreground hover:border-edge-strong hover:bg-accent/5
  active:scale-[0.95]
  focus:outline-none focus:ring-2 focus:ring-accent/30
">
  <svg .../>
</button>
```

## 注意事项

- 每个页面只有 1 个主 CTA 按钮（视觉焦点唯一原则）
- CTA 按钮的 `bg-accent` 对应子主题的 `--accent-1`，确保引入了正确的 CSS 变量文件
- `font-display font-black` 在 brutalist 子主题下效果最强（Bebas Neue 900w）
