#!/usr/bin/env bash
# install.sh —— ruidong-ui-studio Mac/Linux 安装脚本
#
# 把 skill/ruidong-ui/ 拷贝到 ~/.claude/skills/ruidong-ui/
# 若目标已存在，先备份到 ruidong-ui.backup.<timestamp>，再覆盖。
#
# 使用：
#   bash install.sh

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE="$REPO_ROOT/skills/ruidong-ui"
SKILLS_DIR="$HOME/.claude/skills"
BACKUPS_DIR="$HOME/.claude/ruidong-ui-backups"
TARGET="$SKILLS_DIR/ruidong-ui"

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[0;33m'; NC='\033[0m'

if [[ ! -d "$SOURCE" ]]; then
  echo -e "${RED}[ERROR] 找不到源目录: $SOURCE${NC}"
  echo -e "${RED}       请确认你在 ruidong-ui-studio 仓库根目录执行本脚本。${NC}"
  exit 1
fi

# 确保 ~/.claude/skills/ 存在
if [[ ! -d "$SKILLS_DIR" ]]; then
  echo "[INFO] 创建目录: $SKILLS_DIR"
  mkdir -p "$SKILLS_DIR"
fi

# 若目标已存在 → 备份到外部目录
# （备份必须放在 ~/.claude/skills/ 之外，否则 skill loader 会把它当成独立 skill 加载）
if [[ -d "$TARGET" ]]; then
  mkdir -p "$BACKUPS_DIR"
  TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
  BACKUP="$BACKUPS_DIR/ruidong-ui.$TIMESTAMP"
  echo -e "${YELLOW}[INFO] 旧版本存在，备份到: $BACKUP${NC}"
  mv "$TARGET" "$BACKUP"
fi

# 拷贝
echo "[INFO] 安装 ruidong-ui skill ..."
cp -R "$SOURCE" "$TARGET"

# 验证关键文件
if [[ ! -f "$TARGET/SKILL.md" ]]; then
  echo -e "${RED}[ERROR] 安装失败：SKILL.md 未找到${NC}"
  exit 1
fi

echo
echo -e "${GREEN}[OK] 安装成功！${NC}"
echo
echo "安装位置: $TARGET"
echo
echo "下一步："
echo "  1. 打开或重启 Claude Code"
echo "  2. 在任意睿动智能体项目内试试： /ruidong-ui"
echo "  3. Claude 会列出可用风格让你选"
echo
echo "若要升级：cd 到本仓库 → git pull → 再次执行本脚本。"
