# bold-vivid · vaporwave 子主题 Token

> 蒸汽波气质：渐变紫粉 + 复古未来感。Y2K 美学，多色渐变背景，Recursive 可变字体。  
> 字体：Recursive（可变字体，300–900w）+ DM Sans（轻体正文）

## CSS 变量定义

```css
:root {
  /* 背景层（深紫黑，带渐变氛围） */
  --bg-primary:   #1a0033;
  --bg-secondary: #2d1b4e;
  --bg-overlay:   rgba(26, 0, 51, 0.90);

  /* 强调色（蒸汽波四色） */
  --accent-1:     #ff71ce;   /* 樱粉，主强调 */
  --accent-2:     #01cdfe;   /* 电青，次级高亮 */
  --accent-3:     #b967ff;   /* 紫色，辅助 */
  --accent-4:     #05ffa1;   /* 薄荷绿，状态色 */

  /* 文字 */
  --text-primary:   #fffb96;   /* 蒸汽波标志性淡黄文字 */
  --text-secondary: #c9b8e8;
  --text-muted:     #7a6a9a;

  /* 边框 */
  --border-default: rgba(255, 113, 206, 0.25);
  --border-strong:  rgba(1, 205, 254, 0.55);

  /* 渐变（蒸汽波的灵魂） */
  --gradient-hero: 
    radial-gradient(at 0% 0%,   rgba(255,113,206,0.4) 0, transparent 50%),
    radial-gradient(at 100% 0%,  rgba(1,205,254,0.4)   0, transparent 50%),
    radial-gradient(at 100% 100%,rgba(185,103,255,0.4)  0, transparent 50%),
    radial-gradient(at 0% 100%,  rgba(5,255,161,0.35)   0, transparent 50%),
    #1a0033;
  --gradient-card: linear-gradient(
    135deg,
    rgba(255,113,206,0.12) 0%,
    rgba(1,205,254,0.12)   100%
  );

  /* 阴影 */
  --shadow-card:  0 0 0 1px rgba(255,113,206,0.2), 0 8px 32px rgba(0,0,0,0.6);
  --shadow-glow:  0 0 30px rgba(255,113,206,0.45), 0 0 60px rgba(1,205,254,0.2);
  --shadow-inner: inset 0 1px 0 rgba(255,255,255,0.06);

  /* 字体 */
  --font-display: 'Recursive',  'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif;
  --font-body:    'DM Sans',    'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif;

  /* 字重（Recursive 是可变字体） */
  --weight-thin:  300;
  --weight-bold:  700;
  --weight-black: 900;

  /* 动效（慵懒，略慢于 cyberpunk） */
  --ease-out:       cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast:  350ms;
  --duration-base:  800ms;
  --duration-slow:  1200ms;
}
```

## 颜色说明

| Token | 值 | 用途 |
|---|---|---|
| `--bg-primary` | `#1a0033` | 深紫黑底 |
| `--bg-secondary` | `#2d1b4e` | 卡片底色（稍亮紫） |
| `--accent-1` | `#ff71ce` | 樱粉，主 CTA / 标题高亮 |
| `--accent-2` | `#01cdfe` | 电青，边框 / 次级按钮 |
| `--accent-3` | `#b967ff` | 紫色，装饰 / 第三层级 |
| `--accent-4` | `#05ffa1` | 薄荷绿，成功状态 / 点缀 |
| `--text-primary` | `#fffb96` | 淡黄文字（蒸汽波特征色） |

## 蒸汽波特有用法

```css
/* Mesh 渐变背景（background + --gradient-hero 的叠加形式） */
background: var(--gradient-hero);

/* 卡片发光描边 */
border: 1px solid var(--border-default);
box-shadow: var(--shadow-card);

/* 文字渐变（标题装饰） */
background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

## 字体

- **Display**：Recursive — 可变字体（300–900w），可实现字重动画效果
- **Body**：DM Sans 200w — 轻体，与高饱和配色形成平衡

## 字号字重矩阵

| 角色 | font-size | font-weight | 备注 |
|---|---|---|---|
| 大标题 | `clamp(3rem, 7vw, 5rem)` | 900 | Recursive 粗体 |
| 节标题 | `text-3xl` | 800 | |
| 卡片标题 | `text-xl` | 700 | |
| 正文 | `text-sm` | 200 | DM Sans，与标题对比 |
| 辅助信息 | `text-xs` | 300 | |

## 圆角（蒸汽波：圆润流畅）

| 场景 | class |
|---|---|
| 按钮 / 输入框 | `rounded-xl`（12px） |
| 卡片 | `rounded-2xl`（16px） |
| 大面板 | `rounded-3xl`（24px） |
| 徽章 | `rounded-full` |

## 功能色

| 状态 | 颜色 |
|---|---|
| 成功 | `--accent-4`（薄荷绿 `#05ffa1`） |
| 警告 | `#fbbf24`（amber-400） |
| 错误 | `#ff5c5c`（软红，避免刺眼） |
