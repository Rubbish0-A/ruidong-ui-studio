# bold-vivid · cyberpunk 子主题 Token

> 赛博朋克气质：暗底 + 霓虹双色，Blade Runner 美学。  
> 字体：Space Grotesk（几何粗体）+ DM Mono（技术等宽感）

## CSS 变量定义（复制到 :root 或全局 CSS）

```css
:root {
  /* 背景层 */
  --bg-primary:   #0a0e27;
  --bg-secondary: #141826;
  --bg-overlay:   rgba(10, 14, 39, 0.88);

  /* 强调色 */
  --accent-1:     #ff2e97;   /* 霓虹粉红，主 CTA */
  --accent-2:     #00d9ff;   /* 青蓝，次级高亮 */
  --accent-3:     #ffd700;   /* 金色，可选第三强调 */

  /* 文字 */
  --text-primary:   #e4f1ff;
  --text-secondary: #8b9dc3;
  --text-muted:     #4a5577;

  /* 边框 */
  --border-default: rgba(0, 217, 255, 0.18);
  --border-strong:  rgba(0, 217, 255, 0.45);

  /* 渐变 */
  --gradient-hero: radial-gradient(
    circle at 20% 50%,
    rgba(255, 46, 151, 0.28) 0%,
    rgba(0, 217, 255, 0.16) 50%,
    rgba(10, 14, 39, 1) 100%
  );
  --gradient-card: linear-gradient(
    135deg,
    rgba(255, 46, 151, 0.08) 0%,
    rgba(0, 217, 255, 0.08) 100%
  );

  /* 阴影 */
  --shadow-card:  0 0 0 1px rgba(0,217,255,0.12), 0 4px 24px rgba(0,0,0,0.5);
  --shadow-glow:  0 0 24px rgba(255, 46, 151, 0.35), 0 4px 16px rgba(0,0,0,0.4);
  --shadow-inner: inset 0 1px 0 rgba(255,255,255,0.04);

  /* 字体 */
  --font-display: 'Space Grotesk', 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif;
  --font-body:    'DM Mono',        'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', monospace;

  /* 字重极端对比 */
  --weight-thin:  300;
  --weight-bold:  700;
  --weight-black: 900;

  /* 动效 */
  --ease-out:       cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast:  300ms;
  --duration-base:  700ms;
  --duration-slow:  1000ms;
}
```

## 颜色说明

| Token | 值 | 用途 |
|---|---|---|
| `--bg-primary` | `#0a0e27` | 页面底色（深蓝黑） |
| `--bg-secondary` | `#141826` | 卡片底色 |
| `--accent-1` | `#ff2e97` | 霓虹粉红，主按钮 / 关键高亮 |
| `--accent-2` | `#00d9ff` | 青蓝，边框高亮 / 次级交互 |
| `--accent-3` | `#ffd700` | 金色，可用于状态点或特殊标注 |
| `--text-primary` | `#e4f1ff` | 主文字（冷白） |
| `--text-secondary` | `#8b9dc3` | 次级文字 |

## 字体

- **Display（标题）**：Space Grotesk — 几何感强，900w 打标题冲击力大
- **Body（正文）**：DM Mono — 等宽字体增强技术气质

## 字号字重矩阵

| 角色 | font-size | font-weight | font-family |
|---|---|---|---|
| 大标题 | `clamp(3rem, 8vw, 6rem)` | 900 | display |
| 节标题 | `text-3xl` | 900 | display |
| 卡片标题 | `text-xl` | 700 | display |
| 正文 | `text-sm` | 300 | body |
| 辅助信息 | `text-xs` | 300 | body |
| 标签 / Tag | `text-xs` | 700 | body（或 display）|

## 阴影

| Token | 效果 |
|---|---|
| `--shadow-card` | 1px 青蓝描边 + 深黑阴影（卡片悬浮感） |
| `--shadow-glow` | 霓虹粉红光晕（hover 和 CTA 按钮） |

## 圆角

| 场景 | class |
|---|---|
| 按钮 / 输入框 | `rounded-lg`（8px） |
| 卡片 | `rounded-xl`（12px） |
| 大面板 | `rounded-2xl`（16px） |
| 徽章 | `rounded-full` |

## 功能色（降饱和，符合主题深色背景）

| 状态 | CSS 颜色 |
|---|---|
| 成功 | `#10b981`（emerald-500，与青蓝 accent 区分） |
| 警告 | `#f59e0b`（amber-400，近金色 accent-3）|
| 错误 | `#ef4444`（red-500） |
