# smartsolu-linear

**叙事主线：冷静、聪明、轻盈的专业工作台。**

来源：SmartSoluExpert v1.6.0 的生产风格，经由数轮真实客户使用 + 用户明确审美反馈打磨而来。

## 气质关键词

Notion 骨架 · Linear 质感 · Raycast 浮层 · 深色侧边栏 + 浅灰主内容区 · Plus Jakarta Sans + Noto Sans SC

## 适用场景

- 面向专业用户（售前、分析师、咨询、工程）的工作台类产品
- 多模块应用（侧边栏 + 主内容 + 顶栏的结构）
- 需要传达"靠谱、精密、不打扰"气质的交付类产品

## 不适用场景

- 面向消费者的娱乐 / 社交类产品（本风格过于克制）
- 纯展示型 / 单页营销网站（本风格是工作台气质，不是 hero 大字体气质）
- 需要明亮活泼色彩的儿童 / 教育类产品

## 技术栈前提

- React + Tailwind（必须）
- Tailwind 可通过 CDN 或本地编译加载
- 字体使用 Google Fonts（若需离线，自行替换为本地 woff2）

## 文件一览

- `QUICKREF.md` — 一页纸速查（Claude 激活时首选加载的 30 行卡片）
- `PHILOSOPHY.md` — 三源融合的叙事，以及什么绝对不做
- `TOKENS.md` — 色彩 / 字体 / 阴影 / 圆角 / 间距的完整令牌
- `components/` — 按钮、卡片、输入框、浮层、侧栏、杂项 —— 按组件类别拆分的小文件，Claude 按需读
- `tailwind.config.js` — 可直接复制的 Tailwind 配置
- `fonts.html` — 字体加载标签 + body font-family 片段
- `examples/` — 实际组件代码样例
