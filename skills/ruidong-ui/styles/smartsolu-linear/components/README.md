# components/ 清单

把原来 COMPONENTS.md 的 353 行拆成了按组件类别的小文件。Claude 用到什么再读什么，避免一次把 700 行挤进上下文。

| 文件 | 包含 |
|---|---|
| `buttons.md` | 主按钮 / 次按钮 / Ghost / 危险按钮 / 侧栏按钮 |
| `cards.md` | 标准卡片 / 可交互卡片 / 选中态卡片 / 建议卡片（带左侧彩条） |
| `inputs.md` | 常态输入框 / Textarea |
| `overlay.md` | 顶栏（Header）/ 模态弹窗 / Toast 通知 |
| `sidebar.md` | 深色侧边栏完整结构（Logo + 菜单 + 底部状态卡） |
| `misc.md` | 徽章 / 中性标签 / 强调标签 / 空状态 / 页面骨架 |

## 读取建议

- 只需要一个按钮？读 `buttons.md`（约 40 行）。
- 要做完整侧栏？读 `sidebar.md` + `buttons.md` 里的"侧栏按钮"章节。
- 要做空状态？读 `misc.md`。
- 要搭整个应用骨架？读 `../examples/app-skeleton.tsx`（已经把主要组件拼好了）。

所有片段都假设 `tailwind.config.js` 按 `../TOKENS.md` 配好了；token 名字相同，肉眼可辨。
