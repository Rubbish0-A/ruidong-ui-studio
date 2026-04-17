# 按钮

## 主按钮（Primary）

用于页面最主要的动作（保存、提交、下一步）。一屏最多一个。

```tsx
<button className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium
                   shadow-surface hover:bg-accent-hover active:scale-[0.98]
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-150">
  保存方案
</button>
```

## 次按钮（Secondary）

用于平级动作（取消、返回）或一屏多个操作。

```tsx
<button className="px-4 py-2 rounded-lg bg-white border border-edge text-ink-secondary
                   text-sm font-medium hover:bg-surface-alt hover:border-edge-strong
                   active:scale-[0.98] transition-all duration-150">
  取消
</button>
```

## Ghost 按钮

嵌在表格、工具栏、卡片内的无感按钮。省视觉重量。

```tsx
<button className="px-3 py-1.5 rounded-lg text-ink-tertiary
                   hover:bg-surface-alt hover:text-ink-secondary
                   transition-colors duration-150">
  <TrashIcon className="w-4 h-4" />
</button>
```

## 危险按钮

删除、清空、不可逆操作。不用纯红底（过于张扬），用红边红字。

```tsx
<button className="px-4 py-2 rounded-lg bg-white border border-red-200 text-red-600
                   text-sm font-medium hover:bg-red-50 active:scale-[0.98]
                   transition-all duration-150">
  清空知识库
</button>
```

## 侧栏按钮（深色域专用）

左侧有选中态彩条，适配 Linear 深色面板。

```tsx
<button className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                    text-sm font-medium transition-all duration-150 group ${
  isActive
    ? 'bg-white/[0.08] text-sidebar-text'
    : 'text-sidebar-text-tertiary hover:bg-white/[0.05] hover:text-sidebar-text-secondary'
}`}>
  {isActive && (
    <div className="absolute left-0 top-1/2 -translate-y-1/2
                    w-0.5 h-5 bg-accent rounded-r-full" />
  )}
  <Icon className="w-[18px] h-[18px] shrink-0" />
  <span>方案工坊</span>
</button>
```
