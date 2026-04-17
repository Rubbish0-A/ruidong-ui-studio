# 卡片

## 标准卡片（Surface 层）

信息展示的默认容器。实心白底 + 极淡描边 + 双层柔和阴影。

```tsx
<div className="bg-white rounded-xl shadow-surface border border-edge p-6">
  <h3 className="text-sm font-bold text-ink mb-2">客户画像</h3>
  <p className="text-sm text-ink-secondary leading-relaxed">...</p>
</div>
```

## 可交互卡片（hover 微浮）

当卡片可点击进入详情时用。轻微上浮 + 阴影加深 + 描边变深，暗示"这里可以点"。

```tsx
<div className="bg-white rounded-xl shadow-surface border border-edge p-6
                hover:shadow-hover hover:-translate-y-0.5 hover:border-edge-strong
                transition-all duration-200 cursor-pointer">
  ...
</div>
```

## 选中态卡片

列表里的单选项（如模板选择、方案选项）。选中后用 accent 边框 + 浅强调底 + ring，避免只靠背景色变化（不够明确）。

```tsx
<div className={`bg-white rounded-xl border p-6 transition-all duration-150 cursor-pointer ${
  isSelected
    ? 'border-accent bg-accent-soft ring-1 ring-accent shadow-raised'
    : 'border-edge shadow-surface hover:shadow-hover hover:-translate-y-0.5'
}`}>
  ...
</div>
```

## 建议卡片（带左侧严重度彩条）

诊断场景专用：左侧 1px 彩条颜色直接表达"严重 / 警告 / 信息"。比放个图标占面积小、识别快。

```tsx
<div className="relative bg-white rounded-xl border border-edge shadow-surface
                hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200
                overflow-hidden">
  <div className={`absolute left-0 top-0 bottom-0 w-1 ${
    severity === 'critical' ? 'bg-red-500'   :
    severity === 'warning'  ? 'bg-amber-500' :
                              'bg-accent'
  }`} />
  <div className="p-5 pl-6">
    <div className="flex items-start gap-3">
      <h4 className="flex-1 text-sm font-bold text-ink">{title}</h4>
      {weight !== undefined && (
        <span className="text-[11px] font-bold text-ink-tertiary">{weight}%</span>
      )}
    </div>
    <p className="mt-2 text-sm text-ink-secondary leading-relaxed">{description}</p>
  </div>
</div>
```
