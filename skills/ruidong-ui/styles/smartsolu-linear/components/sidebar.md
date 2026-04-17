# 侧边栏（深色 Linear Panel）

深色侧栏 + 浅色主内容区的对比，是这个风格的标志。侧栏用 `bg-sidebar` (#0f1011，Linear Panel Dark) 而非纯黑 —— 纯黑会让眼睛疲劳。

## 完整结构

```tsx
<aside className={`${isOpen ? 'w-60' : 'w-16'} bg-sidebar flex flex-col shrink-0
                   transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]
                   border-r border-sidebar-edge-subtle`}>
  {/* Logo 区 */}
  <div className="h-14 flex items-center px-4 shrink-0">
    <div className="flex items-center gap-2.5 cursor-pointer w-full overflow-hidden">
      <div className="w-8 h-8 min-w-[2rem] bg-accent rounded-lg flex items-center justify-center
                      ring-1 ring-white/10">
        <AIIcon className="w-4 h-4 text-white" />
      </div>
      {isOpen && (
        <div className="flex flex-col whitespace-nowrap">
          <span className="text-sm font-semibold text-white tracking-tight">SmartSolu</span>
          <span className="text-xs text-sidebar-text-muted -mt-0.5">Expert</span>
        </div>
      )}
    </div>
  </div>

  {/* 菜单 */}
  <nav className="flex-1 py-4 px-2.5 space-y-0.5 overflow-y-auto overflow-x-hidden custom-scrollbar">
    {isOpen && (
      <div className="text-xs font-medium text-sidebar-text-muted px-3 mb-2 tracking-wide">
        工作台
      </div>
    )}
    {/* SidebarItem 按钮见 components/buttons.md 的"侧栏按钮"章节 */}

    <div className="my-4 border-t border-sidebar-edge-subtle mx-2" />

    {isOpen && (
      <div className="text-xs font-medium text-sidebar-text-muted px-3 mb-2 tracking-wide">
        系统
      </div>
    )}
    {/* 更多 SidebarItem */}
  </nav>

  {/* 底部状态卡 */}
  <div className="p-3 shrink-0">
    <div className={`bg-white/[0.03] rounded-lg p-2.5 border border-sidebar-edge
                     flex items-center gap-2.5 transition-all ${!isOpen ? 'justify-center p-2' : ''}`}>
      <div className="w-7 h-7 rounded-full bg-accent-bright flex items-center justify-center shrink-0
                      ring-1 ring-white/10">
        <AIIcon className="w-3.5 h-3.5 text-white" />
      </div>
      {isOpen && (
        <div className="min-w-0">
          <p className="text-xs font-medium text-sidebar-text-secondary truncate">睿动AI</p>
          <p className="text-xs text-sidebar-text-muted truncate">Qwen Max</p>
        </div>
      )}
    </div>
  </div>
</aside>
```

## 关键点

- **宽度两档**：展开 `w-60`（240px），收起 `w-16`（64px）
- **transition 用 Linear 缓动曲线**：`cubic-bezier(0.2,0,0,1)`（自然减速）
- **收起时用 `justify-center`** 让图标居中，避免左对齐看起来歪斜
- **文字用 `overflow-hidden` + `whitespace-nowrap`**，避免收起动画期间文字折行抖动
- **Logo 的 accent 底块用 `ring-1 ring-white/10`** 而非 border，ring 不占空间、更贴合深色
