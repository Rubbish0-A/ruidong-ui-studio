/**
 * bold-vivid · nordic · 卡片组合示例
 *
 * 展示：标准卡 · 高亮卡（accent 边框） · 横向卡（图标+文字）· 数据卡
 * 前置：已引入 nordic 子主题的 CSS 变量（themes/nordic/TOKENS.md 里的 :root）
 *       已引入 fonts.html 里的 nordic 字体 <link>
 *       已引入 bold-vivid/tailwind.config.js
 */

import { useEffect } from 'react';

const features = [
  {
    icon: '◈',
    title: '多模态理解',
    desc: '文字、图片、文档一并处理，无需预处理流水线。',
  },
  {
    icon: '⬡',
    title: '编排式工作流',
    desc: '可视化拖拽连接多个智能体，复杂任务自动分解。',
  },
  {
    icon: '◎',
    title: '企业级安全',
    desc: '数据不出域，支持私有化部署，通过等保三级认证。',
  },
];

export default function NordicCardSet() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.animate-enter');
    els.forEach(el => el.classList.add('is-visible'));
  }, []);

  return (
    <section className="py-24 px-6 bg-base">
      <div className="max-w-5xl mx-auto">

        {/* 节标题 */}
        <div className="mb-16 text-center">
          <span
            className="animate-enter stagger-1 inline-block mb-4
              text-accent font-body font-semibold text-xs tracking-widest uppercase"
          >
            核心能力
          </span>
          <h2
            className="animate-enter stagger-2 font-display font-black text-foreground
              tracking-tight leading-[1.1]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            专为企业场景打造
          </h2>
        </div>

        {/* 高亮卡（顶部 accent 色条 + accent 文字） */}
        <div
          className="animate-enter stagger-3 relative overflow-hidden
            bg-surface border border-accent/40 rounded-2xl p-8 mb-6 shadow-glow"
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />
          <div className="max-w-xl">
            <span className="text-accent font-body font-semibold text-xs tracking-widest uppercase mb-3 block">
              主推功能
            </span>
            <h3
              className="font-display font-black text-foreground tracking-tight mb-3"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
            >
              一站式智能体广场
            </h3>
            <p className="font-body text-muted leading-relaxed"
              style={{ fontWeight: 200, fontSize: '1rem' }}>
              内置数十个行业场景模板，开箱即用。支持团队协作管理，权限精细到单个智能体。
            </p>
          </div>
        </div>

        {/* 横向卡列表 */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`animate-enter stagger-${i + 4}
                flex gap-4 items-start
                bg-surface border border-edge rounded-xl p-5
                transition-all duration-fast ease-out
                hover:border-edge-strong hover:-translate-y-0.5 hover:shadow-glow`}
            >
              {/* 图标区 */}
              <div
                className="flex-shrink-0 w-10 h-10
                  flex items-center justify-center
                  bg-accent/10 text-accent rounded-lg
                  font-display text-lg"
              >
                {f.icon}
              </div>
              <div>
                <h4
                  className="font-display font-bold text-foreground mb-1"
                  style={{ fontSize: '1rem' }}
                >
                  {f.title}
                </h4>
                <p className="font-body text-muted text-sm leading-relaxed" style={{ fontWeight: 200 }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 数据卡行 */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: '200+', label: '内置模板', sub: '持续更新' },
            { value: '50ms', label: '首 token 延迟', sub: '流式输出' },
            { value: 'SOC 2', label: '安全认证', sub: '等保三级' },
          ].map((d, i) => (
            <div
              key={d.label}
              className={`animate-enter stagger-${i + 7}
                bg-surface border border-edge rounded-xl p-6
                text-center
                transition-all duration-fast ease-out
                hover:border-edge-strong`}
            >
              <div
                className="font-display font-black text-accent mb-1"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
              >
                {d.value}
              </div>
              <div className="font-body text-foreground text-sm font-semibold mb-0.5">
                {d.label}
              </div>
              <div className="font-body text-muted text-xs" style={{ fontWeight: 200 }}>
                {d.sub}
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
  1. 在 index.html <head> 里引入 fonts.html 的 nordic 字体 <link>
  2. 在 global.css 或 index.css 里引入 themes/nordic/TOKENS.md 里的 :root 变量
  3. 在 global.css 里加入 misc.md 里的 .animate-enter / .stagger-* 工具类
  4. 确保 tailwind.config.js 已替换为 bold-vivid/tailwind.config.js

  调整子主题
  ─────────────────────────────────────
  将 :root 里的 CSS 变量换成其他子主题（如 vaporwave），
  不改任何 JSX / className，视觉立刻切换为蒸汽波风格。
*/
