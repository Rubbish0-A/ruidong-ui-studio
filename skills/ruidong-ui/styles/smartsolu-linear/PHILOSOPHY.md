# smartsolu-linear · 设计哲学

> 这份文档记录 **smartsolu-linear 独特的叙事和实现细节**。跨风格的通用底线（字体、层级、色彩、动效、信息密度、协作约束）统一写在 [PRINCIPLES.md](../../PRINCIPLES.md)，本地不再重复。

## 硬性底线摘要（记住这 3 条即可，详细见 PRINCIPLES）

- ❌ 禁 Inter 字体 · 用 Plus Jakarta Sans + Noto Sans SC → [PRINCIPLES §4](../../PRINCIPLES.md#4-字体底线typography-floor)
- ❌ 主内容区禁毛玻璃，只在 Overlay 层用 → [PRINCIPLES §3](../../PRINCIPLES.md#3-层级系统depth-system)
- ❌ 一屏视觉重点 ≤ 1 个 → [PRINCIPLES §2](../../PRINCIPLES.md#2-绝不做的事non-negotiable-donts)

---

## 叙事主线

**冷静、聪明、轻盈的专业工作台。**

所有设计决策都要先通过这句话的过滤器。看起来高级但不属于这个气质的设计 —— 不要。

## 风格主次（三源融合，不平均混合）

| 学 | 用于 |
|---|---|
| **主骨架学 Notion** | 信息组织、阅读舒适度、卡片布局、留白 |
| **细节质感学 Linear** | 精致阴影、微妙渐变、状态过渡、深色侧边栏 |
| **浮层交互学 Raycast** | 毛玻璃、悬浮层、轻盈感 |

**规则**：主内容区稳定实心（Notion），表面质感精致（Linear），**只有浮层才用玻璃效果**（Raycast）。

## 五条设计原则

1. 界面先保证秩序和呼吸感，再讨论装饰细节
2. 深度只通过有限的层级系统表达，不靠特效堆砌
3. 色彩只服务于重点、状态和品牌识别
4. 所有交互反馈都应快速、克制、连续
5. 排版优先建立信息优先级，其次才是风格气质

---

## 四层层级 · 本风格的具体实现

（层级定义见 PRINCIPLES §3；下表是 smartsolu-linear 的具体取值）

| 层级 | 背景 | 阴影 | 描边 |
|---|---|---|---|
| Base | `bg-canvas` (#f7f8fc) | 无 | 无 |
| Surface | `bg-white` | `shadow-surface`（双层） | `border border-edge` (#e6e9f0) |
| Raised | `bg-white` | `shadow-float`（三层） | `border border-edge-strong` (#cdd1dc) |
| Overlay | `bg-white/80` | `shadow-overlay` | `border border-edge/60`（**可毛玻璃**） |

**深色侧边栏例外**：采用 Linear 深色面板（`bg-sidebar` #0f1011 + 半透明白色边框），与主内容区形成强对比。这是 smartsolu-linear 的标志之一。

---

## 状态规则（本风格专有）

| 状态 | 视觉表现 |
|---|---|
| default | 实心白底 + 极淡描边 + 双层柔和阴影 |
| hover | 描边变色（accent-soft） + 阴影加深 + 轻微上浮（`-translate-y-0.5`） |
| active | `scale-[0.98]` + 阴影收缩 |
| focus | `ring-2 ring-accent/10` + `border-accent` |
| selected | `border-accent` + `bg-accent-soft` + `ring-1` |
| disabled | `opacity-50` + `cursor-not-allowed` |
| loading | 骨架屏或柔和脉冲（`animate-pulse`），不用粗暴 spinner |

## 动效场景表（本风格专有）

| 类型 | 时长 | 用途 |
|---|---|---|
| hover 反馈 | 150ms ease | 按钮/卡片/链接悬停 |
| 面板展开 | 200ms ease | 下拉菜单、历史面板、Tab 切换 |
| 弹窗出入 | 300ms `cubic-bezier(0.2,0,0,1)` | Modal、命令面板 |

（总则 ≤ 400ms、`cubic-bezier(0.2,0,0,1)` 缓动见 PRINCIPLES §6）
