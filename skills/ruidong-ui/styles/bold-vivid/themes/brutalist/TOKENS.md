# bold-vivid · brutalist 子主题 Token

> 野兽派气质：高对比 + 粗边框 + 原始有力。90 年代印刷美学，拒绝装饰主义。  
> 字体：Bebas Neue（极度压缩全大写）+ DM Sans（简洁可读）

## CSS 变量定义

```css
:root {
  /* 背景层（浅色基调，与其他子主题的深色不同） */
  --bg-primary:   #f2f0eb;   /* 米白，有纸张质感 */
  --bg-secondary: #ffffff;
  --bg-overlay:   rgba(242, 240, 235, 0.95);

  /* 强调色（高对比，原色风格） */
  --accent-1:     #e63022;   /* 野兽派红，主 CTA */
  --accent-2:     #1a1a1a;   /* 极黑，次级 */
  --accent-3:     #f5a623;   /* 警示黄，可选第三强调 */

  /* 文字 */
  --text-primary:   #1a1a1a;
  --text-secondary: #4a4a4a;
  --text-muted:     #888888;

  /* 边框（粗边框是野兽派特征） */
  --border-default: #1a1a1a;   /* 纯黑，3px solid */
  --border-strong:  #e63022;   /* 红色强调边框 */

  /* 渐变（极简，接近无渐变） */
  --gradient-hero: none;
  --gradient-card: none;

  /* 阴影（野兽派用 offset shadow，不用 blur） */
  --shadow-card:  4px 4px 0 #1a1a1a;
  --shadow-glow:  6px 6px 0 #e63022;
  --shadow-inner: inset 0 0 0 2px #1a1a1a;

  /* 字体 */
  --font-display: 'Bebas Neue', 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif;
  --font-body:    'DM Sans',    'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif;

  /* 字重 */
  --weight-thin:  200;
  --weight-bold:  700;
  --weight-black: 900;

  /* 动效（野兽派动效克制，快速直接） */
  --ease-out:       cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast:  150ms;
  --duration-base:  300ms;
  --duration-slow:  500ms;
}
```

## 颜色说明

| Token | 值 | 用途 |
|---|---|---|
| `--bg-primary` | `#f2f0eb` | 米白底（纸张质感） |
| `--bg-secondary` | `#ffffff` | 纯白卡片 |
| `--accent-1` | `#e63022` | 野兽派红，主按钮 |
| `--accent-2` | `#1a1a1a` | 极黑，文字 / 粗线条 |
| `--border-default` | `#1a1a1a` | 纯黑边框（标配 3px solid） |

## 野兽派特有用法

```css
/* 粗边框（野兽派标志） */
border: 3px solid var(--border-default);

/* offset 阴影代替 box-shadow */
box-shadow: var(--shadow-card);   /* 4px 4px 0 #1a1a1a */

/* hover 时 offset 变色 */
hover: box-shadow: var(--shadow-glow);  /* 6px 6px 0 #e63022 */
```

## 字体

- **Display（标题）**：Bebas Neue — 全大写，极度压缩，适合大字号冲击
- **Body（正文）**：DM Sans 200w — 轻体与粗标题形成极端对比

## 字号字重矩阵

| 角色 | font-size | font-weight | 备注 |
|---|---|---|---|
| 大标题 | `clamp(4rem, 10vw, 8rem)` | Bebas Neue（无字重） | 全大写，不设 font-weight |
| 节标题 | `text-4xl` | Bebas Neue | |
| 卡片标题 | `text-2xl` | Bebas Neue | |
| 正文 | `text-base` | 200 | DM Sans |
| 辅助信息 | `text-sm` | 200 | DM Sans |

## 圆角（野兽派：接近直角）

| 场景 | class |
|---|---|
| 按钮 / 输入框 | `rounded` / `rounded-sm`（4px 以内） |
| 卡片 | `rounded-none`（直角）或 `rounded`（4px） |
| 徽章 | `rounded-none`（矩形标签） |

## 功能色

| 状态 | 颜色 |
|---|---|
| 成功 | `#16a34a`（green-600） |
| 警告 | `#f5a623`（与 accent-3 相同） |
| 错误 | `#e63022`（与 accent-1 相同，加强） |
