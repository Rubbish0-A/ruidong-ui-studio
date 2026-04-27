# bold-vivid · 杂项组件（徽章 / 空状态 / 动效工具类 / 背景层）

## 徽章 / Tag

```tsx
{/* 主题色徽章 */}
<span className="
  inline-flex items-center gap-1.5 px-3 py-1
  bg-accent/10 text-accent border border-accent/30
  font-body font-semibold text-xs tracking-wide uppercase
  rounded-full
">
  NEW
</span>

{/* 中性徽章 */}
<span className="
  inline-flex items-center gap-1.5 px-3 py-1
  bg-surface text-muted border border-edge
  font-body text-xs
  rounded-full
">
  标签文字
</span>
```

## 空状态

```tsx
<div className="
  flex flex-col items-center justify-center
  py-20 text-center
">
  <div className="
    w-16 h-16 mb-6
    flex items-center justify-center
    bg-surface border border-edge rounded-2xl
  ">
    <svg className="w-8 h-8 text-muted" .../>
  </div>
  <h3 className="font-display font-bold text-foreground text-lg mb-2">
    暂无内容
  </h3>
  <p className="font-body text-muted text-sm max-w-xs">
    描述文字，引导用户下一步操作。
  </p>
</div>
```

## 入场动效工具类（stagger 序列）

将以下 CSS 添加到全局样式文件，或通过 Tailwind 的 `@layer utilities` 注册：

```css
/* 元素默认隐藏，等待动效触发 */
.animate-enter {
  opacity: 0;
}

/* 入场动效：向上淡入 */
.animate-enter.is-visible {
  animation: fadeInUp var(--duration-base, 0.8s) var(--ease-out, cubic-bezier(0.16, 1, 0.3, 1)) forwards;
}

/* Stagger 延迟（每级 0.1s） */
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }

/* 尊重系统减少动效设置 */
@media (prefers-reduced-motion: reduce) {
  .animate-enter,
  .animate-enter.is-visible {
    animation: none;
    opacity: 1;
  }
}
```

**使用方式（React）**：

```tsx
useEffect(() => {
  const els = document.querySelectorAll<HTMLElement>('.animate-enter');
  els.forEach(el => el.classList.add('is-visible'));
}, []);

// 或用 IntersectionObserver 实现滚动触发
```

**在 JSX 里用**：

```tsx
<h1 className="animate-enter stagger-1 font-display font-black text-foreground ...">
  标题
</h1>
<p className="animate-enter stagger-2 font-body text-muted ...">
  副标题
</p>
<button className="animate-enter stagger-3 ...">
  CTA
</button>
```

## 渐变背景层

用于 Hero 区域，叠加在 `bg-base` 上：

```tsx
{/* 包裹层：bg-base 是基础色，伪元素加渐变 */}
<section className="relative overflow-hidden bg-base">
  {/* 主渐变光晕（CSS 变量，子主题控制颜色） */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{ background: 'var(--gradient-hero)' }}
  />

  {/* 网格纹理叠加（可选，增加质感） */}
  <div
    className="absolute inset-0 opacity-[0.03] pointer-events-none"
    style={{
      backgroundImage: `
        linear-gradient(var(--border-default) 1px, transparent 1px),
        linear-gradient(90deg, var(--border-default) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
    }}
  />

  {/* 实际内容 */}
  <div className="relative z-10">
    ...
  </div>
</section>
```

## 滚动条样式

```css
.custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: var(--border-strong);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: var(--accent-1);
}
.custom-scrollbar { scrollbar-width: thin; scrollbar-color: var(--border-strong) transparent; }
```
