# bold-vivid · 设计哲学

> 跨风格的通用底线（字体、层级、Token 纪律、可访问性）统一写在 `skills/ruidong-ui/PRINCIPLES.md`，本文件只记录 bold-vivid 风格族自己的叙事和规则。

## 一句话叙事

**强识别度、反平庸——每个界面都应有独特的视觉记忆点。**

这不是"漂亮"，是"记得住"。用户看过一百个 AI 产品后，bold-vivid 的界面应该还能被想起来。

## 反"AI 平庸美学"宣言

以下是现在互联网上充斥的"AI 平庸美学"特征，bold-vivid 的存在就是要打破它们：

❌ Inter 字体（每个 AI 产品都在用）  
❌ 400/500/600 字重（安全但无力）  
❌ 紫蓝渐变背景（已成 AI 产品的通用背景）  
❌ 纯白 / 浅灰底色（毫无个性）  
❌ 零入场动效（静态截图和真实交互没有区别）  
❌ 一个强调色（通常是 `#6366f1`）  

## 四维设计体系

bold-vivid 的所有视觉决策围绕四个维度展开：

### 1. 字重（Typography）
- **走极端**：100–200 vs 800–900，而非安全的 400/600
- 通过**字重对比**而非字号差异建立层级
- 每个子主题指定一套 display font + body font，字体对本身就是主题 DNA

### 2. 颜色（Color）
- **来自文化参照**：赛博朋克电影、北欧建筑、Y2K 美学——不是"选一个好看的颜色"
- 2–4 个强调色，有明确层级分工（primary / secondary / 可选 tertiary）
- 用 CSS 变量系统，切换子主题只换 `:root` 里的变量值

### 3. 动效（Motion）
- **优先入场编排**，而非散乱的 hover 微交互
- 用 stagger delay（每个元素延迟 0.1s）引导视线从上到下
- 关键动效曲线：`cubic-bezier(0.16, 1, 0.3, 1)`（快速减速，有冲劲）

### 4. 背景（Background）
- **渐变 + 纹理层叠**，而非平铺单色
- 常用：radial-gradient 聚光效果 + SVG 噪点 / 网格纹理叠加
- 背景本身就是主题个性的一部分

## 五条设计原则

1. **一秒钟内建立主题印象**：配色 + 字体组合要足够独特，让用户一眼知道"这不是同款 AI"
2. **颜色为内容服务，不为美观服务**：accent-1 用于最重要的操作，accent-2 用于次级标注，不互换
3. **动效是叙事手段**：入场顺序 = 信息优先级，先看什么由 stagger 控制
4. **背景是空间感的来源**：渐变和纹理创造深度，减少对阴影的依赖
5. **子主题内部必须一致**：选了 cyberpunk 就所有页面都是 cyberpunk，不混用其他主题的 token

## 绝不做的事（bold-vivid 专属红线）

- ❌ 使用 Inter 字体（全局禁止，在这里再强调一次）
- ❌ 字重只用 400/500/600（走极端或不用）
- ❌ 无主题感的紫蓝渐变（那是"AI 平庸美学"的标志）
- ❌ 纯白或浅灰底色（bold-vivid 的底色是深色主题化底色）
- ❌ 完全无入场动效（至少要有 Hero 区的 stagger 序列）
- ❌ 同一页面混用两个子主题的颜色
- ❌ 把 bold-vivid 用在需要长时间工作的管理后台（视觉强度不适合）

## 四层层级在 bold-vivid 里的实现

（定义见 `PRINCIPLES.md §3`；下表是 bold-vivid 的通用实现方向，各子主题有自己的具体值）

| 层级 | 背景 | 效果 |
|---|---|---|
| Base | `var(--bg-primary)`（深色 + 渐变 overlay） | 可叠加渐变 / 纹理 |
| Surface | `var(--bg-secondary)` | `shadow-card`（可含微光晕效果） |
| Raised | `var(--bg-secondary)` + 更强阴影 | `shadow-glow` 或描边高亮 |
| Overlay | 深色半透明 + 模糊 | `var(--bg-overlay)` backdrop-blur |

## 适用场景

✅ Landing page · 产品官网 · 营销活动页  
✅ 作品集 · 个人品牌站  
✅ 技术型产品的展示页（不是操作台）  
✅ 视觉冲击力优先于操作效率的场景  

## 不适用场景

❌ 长时间高频操作的管理后台（用 `smartsolu-linear`）  
❌ 需要大量表单填写的配置界面  
❌ 老年用户为主的产品（低对比度和复杂动效影响可用性）  

## 状态规则（bold-vivid 通用，子主题具体值见各 TOKENS.md）

| 状态 | 视觉表现 |
|---|---|
| default | 主题底色 + 边框 `var(--border-default)` |
| hover | 边框变 `var(--border-strong)` + 轻微上浮 `-translate-y-0.5` |
| active | `scale-[0.97]` + 边框加强 |
| focus | `ring-2 ring-accent/30` |
| disabled | `opacity-40 cursor-not-allowed`，不改颜色 |
