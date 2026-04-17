# 杂项组件

## 徽章 / 标签

### 状态徽章

带圆点 + 浅底 + 浓色字。圆点用填充色、字用深色同色系。

```tsx
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full
                 bg-emerald-50 text-emerald-700 text-[11px] font-bold">
  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
  已连接
</span>
```

### 中性标签（Pill）

文档标签、分类 —— 用 `surface-alt` 底 + `edge` 边，不抢主内容的视觉。

```tsx
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full
                 bg-surface-alt border border-edge
                 text-ink-secondary text-[11px] font-medium">
  #数字化转型
</span>
```

### 强调标签（NEW / HOT）

用 accent 的 soft 底 + 实色字。保留给真正需要拉注意力的场景。

```tsx
<span className="inline-flex items-center px-2 py-0.5 rounded
                 bg-accent-soft text-accent text-[11px] font-bold">
  NEW
</span>
```

---

## 空状态

三段式结构：图标容器 + 标题 + 描述 + CTA。图标容器用 `rounded-2xl bg-surface-alt` 圆角方形底（比纯图标更有存在感，又不会像一张残缺的卡片）。

```tsx
<div className="flex flex-col items-center justify-center py-16 px-6 text-center">
  <div className="w-16 h-16 rounded-2xl bg-surface-alt flex items-center justify-center mb-4">
    <KnowledgeIcon className="w-7 h-7 text-ink-tertiary" />
  </div>
  <h3 className="text-sm font-bold text-ink mb-1">还没有知识文件</h3>
  <p className="text-xs text-ink-tertiary mb-5 max-w-sm">
    上传你的行业资料、案例、模板，让 AI 理解你的领域
  </p>
  <button className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium
                     shadow-surface hover:bg-accent-hover active:scale-[0.98]
                     transition-all duration-150">
    上传文件
  </button>
</div>
```

---

## 页面骨架（Base + Sidebar + Main）

```tsx
<div className="flex h-screen w-screen overflow-hidden bg-canvas font-sans text-ink antialiased
                selection:bg-accent-soft selection:text-ink">
  {/* 深色侧栏 */}
  <Sidebar />

  {/* 浅色主内容 */}
  <div className="flex-1 flex flex-col min-w-0 h-full relative">
    <Header />
    <main className="flex-1 overflow-hidden relative bg-canvas p-6">
      {/* 页面内容 */}
    </main>
  </div>
</div>
```

完整可运行示例看 `../examples/app-skeleton.tsx`。

## 全局 selection 色

根容器加 `selection:bg-accent-soft selection:text-ink`，选中文本时底色用 accent 的 soft 变体 —— 系统默认的深蓝选中色会和 accent 冲突。
