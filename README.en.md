<div align="center">

# ruidong-ui-studio

[简体中文](./README.md) · **English**

### A reusable UI/UX style library that makes every Ruidong AI agent look like it was designed by the same team.

A [Claude Code](https://docs.claude.com/en/docs/claude-code/overview) plugin. Install it once, and Claude will generate frontend code following a **battle-tested visual language** for every new agent project — no more starting from zero on colors, fonts, and components.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Claude Code Plugin](https://img.shields.io/badge/Claude%20Code-Plugin-d97757.svg)](https://docs.claude.com/en/docs/claude-code/plugins)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](./CHANGELOG.md)
[![Styles](https://img.shields.io/badge/styles-1%20curated-5e6ad2.svg)](#-available-styles)

</div>

---

## The Problem

Every new AI agent project inside our team starts with the same conversation:

- What font? What primary color? Should the sidebar be dark or light?
- Card shadows? Corner radius? Hover behavior?
- How do we get Claude to generate code that actually matches our other products?

**These questions already have answers** — they're just scattered across dozens of `tailwind.config.js` files in different repos, never archived, never reusable.

`ruidong-ui-studio` captures those answers as a Claude Code plugin. **Install once; every future Ruidong agent project inherits the same visual language.**

---

## 🎨 Design Feel at a Glance

> **A calm, intelligent, lightweight professional workbench.**

The currently curated style, [`smartsolu-linear`](skills/ruidong-ui/styles/smartsolu-linear/), fuses three industry references:

| Learning from | Used for |
|---|---|
| **Notion**'s skeleton | Information architecture, reading comfort, card layouts, whitespace |
| **Linear**'s craft | Subtle shadows, refined gradients, state transitions, dark sidebar |
| **Raycast**'s overlays | Glassmorphism, floating panels, lightweight feel |

Color tokens kept minimal:

```
bg-canvas      #f7f8fc    Page background (subtle blue-gray, not pure white)
text-ink       #1a1d2e    Primary text (near-black, not pure black)
bg-accent      #5e6ad2    The only accent color (Linear indigo-violet)
border-edge    #e6e9f0    Whisper-thin border
```

Typography: **Plus Jakarta Sans** (Latin) + **Noto Sans SC** (Chinese).
Inter is explicitly banned — real user feedback: "too harsh".

---

## ⚡ Quick Start

**Prerequisite**: [Claude Code](https://docs.claude.com/en/docs/claude-code/overview) installed.

```bash
# 1. Clone the repo
git clone https://github.com/Rubbish0-A/ruidong-ui-studio.git

# 2. Register as a local marketplace (inside Claude Code)
/plugin marketplace add /path/to/ruidong-ui-studio

# 3. Install
/plugin install ruidong-ui@ruidong-ui-studio

# 4. Restart Claude Code
```

Then, inside **any** Ruidong agent project, just say:

> "Give me a sidebar in the Ruidong style."
>
> "I need a primary button that matches our UI conventions."
>
> "Scaffold a new agent project using the SmartSolu aesthetic."

Claude auto-activates the `ruidong-ui` skill and generates code that follows the spec.

---

## How It Works

This isn't "one giant document Claude reads in full" — it's a **lazily-loaded layered knowledge base**:

```
Layer 1: Skill activates  → Reads SKILL.md (~70 lines) + QUICKREF.md (~45 lines)
                          → Covers 80% of simple requests (button, card, Toast)

Layer 2: Needs a specific component → Reads components/buttons.md, sidebar.md, ...
                                    → Each file <90 lines

Layer 3: Needs full philosophy → Reads PHILOSOPHY.md, TOKENS.md, full examples
```

**Why this split?** Because context is scarce. Shoving 700 lines in at once eats a huge chunk of the usable window. This structure saves ~90% of context for simple requests, and an extra `Read` call for complex ones is well worth it.

---

## 🧩 Available Styles

| Style ID | One-liner | Source | Status |
|---|---|---|---|
| [`smartsolu-linear`](skills/ruidong-ui/styles/smartsolu-linear/) | A calm, intelligent, lightweight professional workbench. Notion skeleton + Linear craft + Raycast overlays. | SmartSoluExpert v1.6.0 (our in-house AI solution architect tool) | Stable |

See [CONTRIBUTING](skills/ruidong-ui/CONTRIBUTING.md) for how to add more styles.

---

## Project Structure

```
ruidong-ui-studio/
├── .claude-plugin/                 Plugin manifest (Claude Code native)
│   ├── plugin.json
│   └── marketplace.json
├── skills/
│   └── ruidong-ui/                 The core skill
│       ├── SKILL.md                Entry: pick a style + workflow
│       ├── PRINCIPLES.md           Cross-style meta-principles (hard floor)
│       ├── CONTRIBUTING.md         How to add new styles
│       └── styles/
│           └── smartsolu-linear/
│               ├── QUICKREF.md     One-page cheatsheet (Claude loads first)
│               ├── PHILOSOPHY.md   Three-source narrative, hard don'ts
│               ├── TOKENS.md       Full color/type/shadow/radius tokens
│               ├── components/     Split by category
│               │   ├── buttons.md
│               │   ├── cards.md
│               │   ├── inputs.md
│               │   ├── overlay.md  Header + modals + Toast
│               │   ├── sidebar.md
│               │   └── misc.md
│               ├── tailwind.config.js
│               ├── fonts.html
│               └── examples/       Full .tsx samples
├── evals/                          Trigger-eval baseline (for maintainers)
├── install.ps1 / install.sh        Fallback install scripts (non-Claude-Code environments)
├── CHANGELOG.md
└── LICENSE
```

---

## Design Philosophy: What We Don't Do

[`PRINCIPLES.md`](skills/ruidong-ui/PRINCIPLES.md) defines the hard floor across all styles. A few you'll feel:

- **Never use Inter** — real user feedback: "Inter is too harsh". Ruidong needs warmer, more geometric type.
- **No glassmorphism in main content areas** — glass effects belong only to the Overlay layer (header, modals, Toast, dropdowns).
- **≤ 1 visual focal point per screen** — multiple foci break the "calm workbench" feel.
- **Only one accent color product-wide** — 85%+ of the canvas is carried by neutrals.
- **Motion ≤ 400ms** — animation is "state changes feel natural", not "look, an animation".

These aren't decorative suggestions. Each is written into SKILL.md, and Claude enforces them when generating code.

---

## 🧭 Roadmap

**Near term** (extending this plugin)

- [ ] Add more styles (naming convention `<source>-<vibe>`, see [CONTRIBUTING](skills/ruidong-ui/CONTRIBUTING.md))
- [ ] Add "composite scenario recipes": full login pages, admin dashboards, chat interfaces — "one-shot" code samples
- [ ] Add `/ruidong-new-agent` slash command: scaffold a new agent project in one keystroke
- [ ] Add `/ruidong-ui-audit` slash command: check an existing project against the spec

**Mid term** (marketplace expansion)

- [ ] Standalone plugin: `ruidong-agent-sdk` (Ruidong API integration conventions)
- [ ] Standalone plugin: `ruidong-deploy` (Ruidong platform deployment workflows)

---

## 🤝 Contributing

Want to add a new style? See [CONTRIBUTING](skills/ruidong-ui/CONTRIBUTING.md).

Every new style must include:

- `QUICKREF.md` (cheatsheet)
- `PHILOSOPHY.md` (narrative + hard don'ts)
- `TOKENS.md` (full tokens)
- `components/` (split component snippets)
- `tailwind.config.js` + `fonts.html` (copy-pasteable config)
- `examples/` (full samples)

PRs welcome. Issues welcome too (even "this wording is unclear" counts).

---

## Scope

**Good fit**

- Starting a new Ruidong agent project and needing a UI foundation
- Client-delivery products that need a unified visual identity
- React + Tailwind frontend projects (the current style is tuned for this stack)

**Not a good fit**

- Consumer-facing entertainment/social products (the current style is deliberately restrained)
- Pure marketing / single-page promo sites (this is workbench aesthetics, not hero-headline aesthetics)
- Kids' / education apps that need bright, vivid palettes

---

## License

[MIT](./LICENSE) © 2026 [Andy Chen](https://github.com/Rubbish0-A) / Ruidong AI

---

## Credits

- Style inspiration from [Linear](https://linear.app) / [Notion](https://notion.so) / [Raycast](https://raycast.com) — three product teams with deep understanding of "refined but restrained"
- Built on [Claude Code](https://docs.claude.com/en/docs/claude-code/overview) and [Anthropic Agent Skills](https://docs.claude.com/en/docs/claude-code/agent-skills)
- The first curated style is abstracted from our production project **SmartSoluExpert v1.6.0** — aesthetic judgment forged through rounds of real client use

<div align="center">

**Make every Ruidong AI agent look like it was designed by the same team.**

[Quick install ↑](#-quick-start) · [View the style →](skills/ruidong-ui/styles/smartsolu-linear/) · [Contributing guide →](skills/ruidong-ui/CONTRIBUTING.md)

</div>
