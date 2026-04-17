# smartsolu-linear · 设计令牌

> 所有 token 已在 `tailwind.config.js` 中定义。**代码里只引用 token 名称，不写 hex。**

## 色彩

### 浅色主内容区（Light Domain）

| Token | 值 | 用途 |
|---|---|---|
| `canvas` | `#f7f8fc` | 页面背景 |
| `surface-alt` | `#f1f3f9` | 次级表面（Header 按钮底色、小徽章） |
| `ink` | `#1a1d2e` | 主文字 |
| `ink-secondary` | `#4b5167` | 次级文字 / 正文 |
| `ink-tertiary` | `#8b91a5` | 占位符 / 辅助信息 |
| `accent` | `#5e6ad2` | 主强调色 · 主按钮 · 选中 · 关键链接（Linear 靛蓝紫） |
| `accent-soft` | `#edf0ff` | 强调色的浅背景变体 |
| `accent-hover` | `#4f5bc4` | 主按钮 hover 态 |
| `accent-bright` | `#7170ff` | 更亮的交互色（侧栏头像等） |
| `edge` | `#e6e9f0` | 默认描边 |
| `edge-strong` | `#cdd1dc` | 更显眼的描边 |

### 深色侧边栏（Dark Sidebar Domain）

| Token | 值 | 用途 |
|---|---|---|
| `sidebar` | `#0f1011` | 侧边栏背景（Linear Panel Dark） |
| `sidebar-deep` | `#08090a` | 更深的背景（特殊强调） |
| `sidebar-surface` | `#191a1b` | 侧边栏内的卡片底色 |
| `sidebar-hover` | `#28282c` | 侧边栏 hover |
| `sidebar-text` | `#f7f8f8` | 侧边栏主文字（非纯白） |
| `sidebar-text-secondary` | `#d0d6e0` | 侧边栏次级文字 |
| `sidebar-text-tertiary` | `#8a8f98` | 侧边栏辅助 |
| `sidebar-text-muted` | `#62666d` | 侧边栏最弱文字 |
| `sidebar-edge` | `rgba(255,255,255,0.08)` | 侧边栏默认边 |
| `sidebar-edge-subtle` | `rgba(255,255,255,0.05)` | 侧边栏最弱边 |

### 功能色（降饱和）

| 用途 | Tailwind |
|---|---|
| 成功 | `emerald-500 / 600` |
| 警告 | `amber-500 / 600` |
| 错误 | `red-500 / 600` |
| 信息 | `accent` |

### 遗留兼容（`primary` palette）

```
primary-50 ... primary-900 = 蓝色阶梯（从 #edf0ff 到 #1e3178）
```

仅保留给不好一次性切换的旧代码。**新代码一律用 `accent`，不要用 `primary`。**

---

## 字体

- **Latin**：`Plus Jakarta Sans`（Variable，200-800）
- **中文**：`Noto Sans SC`（400/500/600/700）
- **回落**：`-apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif`

**绝不使用 Inter。**

### 字号与字重

| 角色 | class | 备注 |
|---|---|---|
| 页面标题 | `text-xl font-bold text-ink tracking-tight` | 最重 |
| 模块标题 | `text-sm font-bold text-ink` | 小标题靠 weight 而非字号 |
| 正文 | `text-sm text-ink-secondary leading-relaxed` | |
| 辅助信息 | `text-xs text-ink-tertiary` | |
| 标签 / 徽章 | `text-[11px] font-bold` | |
| 侧栏按钮文字 | `text-sm font-medium` | |

### 字体高级特性（可选但推荐）

```css
body {
  letter-spacing: -0.011em;  /* 整体微紧 */
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
h1, h2, h3, h4, h5, h6 {
  letter-spacing: -0.025em;  /* 标题更紧 */
}
.tabular-nums { font-variant-numeric: tabular-nums; }
```

### 禁止

- ❌ 字号小于 `text-[10px]`
- ❌ 用 `slate-300` 或更浅做正文
- ❌ 正文行高小于 `leading-relaxed`（1.625）
- ❌ 一个页面内 > 5 种文字角色

---

## 阴影（多层柔和，重点在空气感不在黑度）

```js
'surface':    '0 1px 2px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)'
'raised':     '0 2px 4px rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)'
'float':      '0 4px 8px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)'
'overlay':    '0 8px 24px rgba(0,0,0,0.08), 0 16px 48px rgba(0,0,0,0.06)'
'hover':      '0 8px 16px rgba(0,0,0,0.06), 0 16px 32px rgba(0,0,0,0.08)'
'dark-ring':  'rgba(0,0,0,0.2) 0px 0px 0px 1px'
'dark-inset': 'rgba(0,0,0,0.2) 0px 0px 12px 0px inset'
```

用法：`shadow-surface`、`shadow-float`、`shadow-overlay` 等。

---

## 圆角（统一体系，不随机）

| Class | 值 | 用途 |
|---|---|---|
| `rounded-lg` | 8px | 按钮、标签、输入框 |
| `rounded-xl` | 12px | 卡片 |
| `rounded-2xl` | 16px | 大面板、卡片组 |
| `rounded-3xl` | 24px | 大浮层、命令面板 |
| `rounded-full` | 9999px | 徽章、头像、状态点 |

---

## 间距（8pt 基础）

```
4  / 8  / 12 / 16 / 24 / 32 / 48
```

规则：
- 卡片内边距：`p-5` (20px) 或 `p-6` (24px)
- 卡片间距：`gap-4` (16px) 或 `gap-5` (20px)
- 模块间距：`space-y-6` (24px) 或 `space-y-8` (32px)
- 页面内边距：`p-6` (24px)

---

## 动效关键帧（Tailwind 扩展）

```js
keyframes: {
  fadeIn:  { '0%': { opacity:'0', transform:'translateY(6px)' }, '100%': { opacity:'1', transform:'translateY(0)' } },
  slideIn: { '0%': { opacity:'0', transform:'translateX(16px)' }, '100%': { opacity:'1', transform:'translateX(0)' } },
  scaleIn: { '0%': { opacity:'0', transform:'scale(0.97)' }, '100%': { opacity:'1', transform:'scale(1)' } }
},
animation: {
  'fade-in':  'fadeIn 0.3s cubic-bezier(0.2,0,0,1) forwards',
  'slide-in': 'slideIn 0.3s cubic-bezier(0.2,0,0,1) forwards',
  'scale-in': 'scaleIn 0.2s cubic-bezier(0.2,0,0,1) forwards',
}
```

用法：`animate-fade-in`、`animate-slide-in`、`animate-scale-in`。

---

## 自定义滚动条

```css
.custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #cdd1dc; border-radius: 10px; }
.custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #b0b5c3; }
.custom-scrollbar { scrollbar-width: thin; scrollbar-color: #cdd1dc transparent; }
```

类名：`custom-scrollbar`（放在需要细滚动条的容器上）。
