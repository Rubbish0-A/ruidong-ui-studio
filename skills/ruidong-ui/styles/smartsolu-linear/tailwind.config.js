// smartsolu-linear · Tailwind 配置
//
// 使用方式：
//   1. CDN 场景（<script src="https://cdn.tailwindcss.com"></script>）：把下面 `tailwind.config = {...}` 整段嵌入 index.html。
//   2. 本地构建场景（tailwind.config.js）：把下面 module.exports 的 theme.extend 合并到你的配置里。
//
// 无论哪种场景，都必须同时加载 fonts.html 提供的 <link> 与 body font-family。

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}', './App.tsx', './pages/**/*.{tsx,ts}', './components/**/*.{tsx,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Noto Sans SC"', '-apple-system', 'BlinkMacSystemFont', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
      },
      colors: {
        // 浅色主内容区 tokens
        canvas: '#f7f8fc',
        'surface-alt': '#f1f3f9',
        ink: { DEFAULT: '#1a1d2e', secondary: '#4b5167', tertiary: '#8b91a5' },
        accent: { DEFAULT: '#5e6ad2', soft: '#edf0ff', hover: '#4f5bc4', bright: '#7170ff' },
        edge: { DEFAULT: '#e6e9f0', strong: '#cdd1dc' },
        // 深色侧边栏 tokens（Linear 风格）
        sidebar: {
          DEFAULT: '#0f1011',
          deep: '#08090a',
          surface: '#191a1b',
          hover: '#28282c',
        },
        'sidebar-text': {
          DEFAULT: '#f7f8f8',
          secondary: '#d0d6e0',
          tertiary: '#8a8f98',
          muted: '#62666d',
        },
        'sidebar-edge': {
          DEFAULT: 'rgba(255,255,255,0.08)',
          subtle: 'rgba(255,255,255,0.05)',
        },
      },
      boxShadow: {
        surface: '0 1px 2px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)',
        raised: '0 2px 4px rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)',
        float: '0 4px 8px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
        overlay: '0 8px 24px rgba(0,0,0,0.08), 0 16px 48px rgba(0,0,0,0.06)',
        hover: '0 8px 16px rgba(0,0,0,0.06), 0 16px 32px rgba(0,0,0,0.08)',
        'dark-ring': 'rgba(0,0,0,0.2) 0px 0px 0px 1px',
        'dark-inset': 'rgba(0,0,0,0.2) 0px 0px 12px 0px inset',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.2,0,0,1) forwards',
        'slide-in': 'slideIn 0.3s cubic-bezier(0.2,0,0,1) forwards',
        'scale-in': 'scaleIn 0.2s cubic-bezier(0.2,0,0,1) forwards',
      },
    },
  },
};
