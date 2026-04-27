# bold-vivid · 组件清单

> 所有组件文件使用语义 token class（如 `bg-accent`、`text-foreground`），不写具体颜色值。
> 切换子主题只需换 CSS 变量文件，这些组件代码不需要改动。

## 文件清单

| 文件 | 包含内容 |
|---|---|
| `buttons.md` | 主 CTA 按钮、次级按钮、幽灵按钮、图标按钮 |
| `cards.md` | 内容卡、功能卡、高亮卡（带 glow 效果）、横向卡 |
| `inputs.md` | 文本输入框、下拉选择、Checkbox、Switch |
| `overlay.md` | Modal 弹窗、Toast 通知、顶部导航栏、下拉菜单 |
| `misc.md` | 徽章 / Tag、空状态、入场动效工具类（stagger）、渐变背景层 |

## 使用原则

1. **按需读**：只有用到对应类型的组件才读对应文件
2. **不写 hex**：所有 class 引用 token 名，如需新颜色先提议加入 `themes/<subtheme>/TOKENS.md`
3. **中文内容**：`font-body` 已含中文 fallback，直接写中文文本即可
