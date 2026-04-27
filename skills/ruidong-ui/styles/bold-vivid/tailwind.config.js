/**
 * bold-vivid · Tailwind CSS 配置
 *
 * 使用 CSS 变量桥接方案：token 名映射到 CSS 变量。
 * 使用前提：在 HTML 的 <head> 或 CSS 入口里引入对应子主题的变量文件
 * （见 themes/<subtheme>/TOKENS.md 里的 :root 定义）。
 *
 * 切换子主题只需换 :root 里的 CSS 变量值，Tailwind class 不用改。
 *
 * 用法示例：
 *   bg-base        → var(--bg-primary)
 *   text-foreground → var(--text-primary)
 *   bg-accent       → var(--accent-1)，主 CTA 按钮
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        /* 背景层 */
        base:       'var(--bg-primary)',
        surface:    'var(--bg-secondary)',
        overlay:    'var(--bg-overlay)',

        /* 强调色（2–4 个，子主题决定是否有 accent-3 / accent-4） */
        accent:     'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3, transparent)',

        /* 文字 */
        foreground: 'var(--text-primary)',
        muted:      'var(--text-secondary)',
        faint:      'var(--text-muted)',

        /* 边框 */
        edge:         'var(--border-default)',
        'edge-strong': 'var(--border-strong)',
      },

      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },

      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
      },

      boxShadow: {
        card:  'var(--shadow-card)',
        glow:  'var(--shadow-glow)',
        inner: 'var(--shadow-inner, inset 0 1px 0 rgba(255,255,255,0.05))',
      },

      transitionTimingFunction: {
        'ease-out': 'var(--ease-out)',
      },

      transitionDuration: {
        fast: 'var(--duration-fast, 300ms)',
        base: 'var(--duration-base, 600ms)',
        slow: 'var(--duration-slow, 900ms)',
      },

      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
      },

      animation: {
        'fade-in-up':   'fadeInUp  var(--duration-base, 0.8s) var(--ease-out, cubic-bezier(0.16,1,0.3,1)) forwards',
        'fade-in-left': 'fadeInLeft var(--duration-base, 0.6s) var(--ease-out, cubic-bezier(0.16,1,0.3,1)) forwards',
        'scale-in':     'scaleIn   var(--duration-fast, 0.5s) var(--ease-out, cubic-bezier(0.16,1,0.3,1)) forwards',
        'glow-pulse':   'glowPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
