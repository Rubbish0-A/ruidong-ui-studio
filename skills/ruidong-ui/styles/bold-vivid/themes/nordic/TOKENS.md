# bold-vivid · nordic 子主题 Token

> 北欧简约气质：深灰底 + 衬线字体 + 冷雅单色。Aurora 北极光色点缀，冷静而有质感。  
> 字体：Playfair Display（衬线文学感）+ Source Sans 3（干净可读）

## CSS 变量定义

```css
:root {
  /* 背景层（Nord 调色板，深灰蓝） */
  --bg-primary:   #2e3440;   /* Nord 底色 */
  --bg-secondary: #3b4252;   /* 卡片底色 */
  --bg-overlay:   rgba(46, 52, 64, 0.94);

  /* 强调色（冷雅，北极光来源） */
  --accent-1:     #88c0d0;   /* 冰霜蓝，主强调 */
  --accent-2:     #bf616a;   /* Aurora 红，次级 */
  --accent-3:     #a3be8c;   /* Aurora 绿，成功 / 点缀 */

  /* 文字 */
  --text-primary:   #eceff4;   /* Nord 雪白 */
  --text-secondary: #d8dee9;   /* 次级 */
  --text-muted:     #8f99aa;

  /* 边框（微妙，体现克制） */
  --border-default: rgba(236, 239, 244, 0.10);
  --border-strong:  rgba(136, 192, 208, 0.35);

  /* 渐变（克制，北极光微光） */
  --gradient-hero: radial-gradient(
    ellipse at 50% 0%,
    rgba(136, 192, 208, 0.15) 0%,
    rgba(46, 52, 64, 1) 70%
  );
  --gradient-card: linear-gradient(
    180deg,
    rgba(136, 192, 208, 0.06) 0%,
    rgba(59, 66, 82, 1) 100%
  );

  /* 阴影（柔和，无霓虹光晕） */
  --shadow-card:  0 1px 3px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2);
  --shadow-glow:  0 2px 8px rgba(136,192,208,0.2), 0 8px 24px rgba(0,0,0,0.3);
  --shadow-inner: inset 0 1px 0 rgba(255,255,255,0.04);

  /* 字体 */
  --font-display: 'Playfair Display', 'Noto Serif SC', 'PingFang SC', 'Microsoft YaHei', serif;
  --font-body:    'Source Sans 3',    'PingFang SC',   'Microsoft YaHei', 'Noto Sans SC', sans-serif;

  /* 字重对比 */
  --weight-thin:  200;
  --weight-bold:  700;
  --weight-black: 900;

  /* 动效（平缓，nordic 克制节奏） */
  --ease-out:       cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --duration-fast:  250ms;
  --duration-base:  600ms;
  --duration-slow:  900ms;
}
```

## 颜色说明

| Token | 值 | 用途 |
|---|---|---|
| `--bg-primary` | `#2e3440` | Nord 深灰蓝底 |
| `--bg-secondary` | `#3b4252` | 卡片 / 内容区 |
| `--accent-1` | `#88c0d0` | 冰霜蓝，主强调（Frost Blue） |
| `--accent-2` | `#bf616a` | Aurora 红，危险 / 次级 |
| `--accent-3` | `#a3be8c` | Aurora 绿，成功 / 自然 |
| `--text-primary` | `#eceff4` | Nord Snow Storm 白 |

## 字体

- **Display（标题）**：Playfair Display — 高对比衬线，literary 气质，适合大字号
- **Body（正文）**：Source Sans 3 200–300w — 长文阅读友好，对比衬线标题

## 字号字重矩阵

| 角色 | font-size | font-weight | font-family |
|---|---|---|---|
| 大标题 | `clamp(2.5rem, 6vw, 4.5rem)` | 900 | display（Playfair Display） |
| 节标题 | `text-3xl` | 700 | display |
| 卡片标题 | `text-xl` | 700 | display |
| 正文 | `text-base` | 200 | body（Source Sans 3） |
| 辅助信息 | `text-sm` | 300 | body |
| 引言 | `text-lg` | 400 | display（斜体加成，italic） |

## 圆角（medium，不过于尖锐也不过于圆润）

| 场景 | class |
|---|---|
| 按钮 / 输入框 | `rounded-lg`（8px） |
| 卡片 | `rounded-xl`（12px） |
| 大面板 | `rounded-2xl`（16px） |
| 徽章 | `rounded`（4px，方一些符合气质） |

## 功能色

| 状态 | 颜色 |
|---|---|
| 成功 | `--accent-3`（`#a3be8c`，Aurora 绿） |
| 警告 | `#ebcb8b`（Nord amber） |
| 错误 | `--accent-2`（`#bf616a`，Aurora 红） |
