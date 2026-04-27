# bold-vivid · 输入组件

## 文本输入框

```tsx
<div className="flex flex-col gap-1.5">
  <label className="font-body font-semibold text-foreground text-sm">
    标签名称
  </label>
  <input
    type="text"
    placeholder="占位符文字"
    className="
      w-full px-4 py-3
      bg-surface text-foreground
      border border-edge
      rounded-lg
      font-body text-sm
      placeholder:text-faint
      transition-all duration-fast ease-out
      hover:border-edge-strong
      focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20
    "
  />
  <span className="text-faint text-xs font-body">辅助说明文字（可选）</span>
</div>
```

## 下拉选择

```tsx
<select className="
  w-full px-4 py-3
  bg-surface text-foreground
  border border-edge
  rounded-lg
  font-body text-sm
  cursor-pointer
  transition-all duration-fast ease-out
  hover:border-edge-strong
  focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20
  appearance-none
">
  <option value="">请选择...</option>
  <option value="a">选项 A</option>
</select>
```

## Checkbox

```tsx
<label className="flex items-center gap-3 cursor-pointer group">
  <input
    type="checkbox"
    className="
      w-4 h-4
      bg-surface border border-edge
      rounded
      accent-[var(--accent-1)]
      cursor-pointer
      transition-all duration-fast
    "
  />
  <span className="font-body text-sm text-muted group-hover:text-foreground transition-colors duration-fast">
    选项文字
  </span>
</label>
```

## Toggle Switch

```tsx
function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`
        relative inline-flex w-11 h-6 rounded-full
        transition-colors duration-fast ease-out
        focus:outline-none focus:ring-2 focus:ring-accent/30
        ${checked ? 'bg-accent' : 'bg-edge-strong'}
      `}
    >
      <span className={`
        absolute top-0.5 left-0.5
        w-5 h-5 rounded-full bg-base
        shadow-inner
        transition-transform duration-fast ease-out
        ${checked ? 'translate-x-5' : 'translate-x-0'}
      `} />
    </button>
  );
}
```

## 注意事项

- 输入框的 `bg-surface` 在深色子主题下为深色底，注意 placeholder 颜色对比度
- focus 状态的 `ring-2 ring-accent/20` 利用 CSS 变量，切换子主题后自动匹配主题色
- bold-vivid 的表单不适合作为页面主要内容（视觉强度与表单填写体验不匹配），更适合 Landing page 上的简单邮件订阅、联系表单
