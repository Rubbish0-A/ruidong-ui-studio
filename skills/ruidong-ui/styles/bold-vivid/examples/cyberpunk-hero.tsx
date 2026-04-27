/**
 * bold-vivid · cyberpunk · Hero 区段示例
 *
 * 展示：stagger 入场序列 · 渐变背景层 · 网格纹理 · 主 CTA 按钮
 * 前置：已引入 cyberpunk 子主题的 CSS 变量（themes/cyberpunk/TOKENS.md 里的 :root）
 *       已引入 fonts.html 里的 cyberpunk 字体 <link>
 *       已引入 bold-vivid/tailwind.config.js
 */

import { useEffect } from 'react';

export default function CyberpunkHero() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.animate-enter');
    els.forEach(el => el.classList.add('is-visible'));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base">

      {/* 渐变光晕层（radial，粉+青） */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--gradient-hero)' }}
      />

      {/* 网格纹理叠加 */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--border-default) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-default) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* 主内容 */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* 标签 */}
        <span
          className="animate-enter stagger-1 inline-flex items-center gap-2 px-4 py-1.5 mb-8
            bg-accent/10 text-accent border border-accent/30
            font-body font-semibold text-xs tracking-widest uppercase rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-glow-pulse" />
          睿动 AI 平台
        </span>

        {/* 主标题：Space Grotesk 900w */}
        <h1
          className="animate-enter stagger-2 font-display font-black text-foreground
            tracking-[-0.04em] leading-none mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
        >
          让智能体{' '}
          <span className="text-accent">无处不在</span>
        </h1>

        {/* 副标题 */}
        <p
          className="animate-enter stagger-3 font-body text-muted leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 300 }}
        >
          睿动 AI 为企业提供端到端的智能体部署与编排能力，让每一个业务场景都能用上 AI。
        </p>

        {/* CTA 按钮组 */}
        <div className="animate-enter stagger-4 flex items-center justify-center gap-4 flex-wrap">
          <button
            className="px-8 py-4 bg-accent text-base font-display font-black tracking-tight
              rounded-lg transition-all duration-fast ease-out
              hover:-translate-y-0.5 hover:shadow-glow active:scale-[0.97]
              focus:outline-none focus:ring-2 focus:ring-accent/40"
          >
            立即开始
          </button>

          <button
            className="px-6 py-4 bg-transparent text-accent-2 border border-edge
              font-body font-normal text-sm tracking-wide
              rounded-lg transition-all duration-fast ease-out
              hover:border-edge-strong hover:text-foreground"
          >
            查看演示 →
          </button>
        </div>

        {/* 数据指标行 */}
        <div
          className="animate-enter stagger-5 mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto
            pt-8 border-t border-edge"
        >
          {[
            { value: '10,000+', label: '企业客户' },
            { value: '99.9%', label: '服务可用性' },
            { value: '<100ms', label: '平均响应' },
          ].map(item => (
            <div key={item.label} className="text-center">
              <div className="font-display font-black text-accent text-2xl mb-1">
                {item.value}
              </div>
              <div className="font-body text-muted text-xs">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
  使用说明
  ─────────────────────────────────────
  1. 在 index.html <head> 里引入 fonts.html 的 cyberpunk 字体 <link>
  2. 在 global.css 或 index.css 里引入 themes/cyberpunk/TOKENS.md 里的 :root 变量
  3. 在 global.css 里加入 misc.md 里的 .animate-enter / .stagger-* 动效工具类
  4. 确保 tailwind.config.js 已替换为 bold-vivid/tailwind.config.js

  prefers-reduced-motion 降级
  ─────────────────────────────────────
  misc.md 里的 @media (prefers-reduced-motion: reduce) 会自动禁用 stagger 动效，
  不需要额外处理。
*/
