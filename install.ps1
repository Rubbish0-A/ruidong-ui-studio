# install.ps1 -- ruidong-ui-studio Windows installer
#
# Copies skill/ruidong-ui/ to $env:USERPROFILE\.claude\skills\ruidong-ui\
# If the target already exists, backs it up, then overwrites.
#
# Usage:
#   powershell -ExecutionPolicy Bypass -File install.ps1

$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$repoRoot   = Split-Path -Parent $MyInvocation.MyCommand.Path
$source     = Join-Path $repoRoot 'skills\ruidong-ui'
$skillsDir  = Join-Path $env:USERPROFILE '.claude\skills'
$backupsDir = Join-Path $env:USERPROFILE '.claude\ruidong-ui-backups'
$target     = Join-Path $skillsDir 'ruidong-ui'

if (-not (Test-Path $source)) {
    Write-Host "[ERROR] Source directory not found: $source" -ForegroundColor Red
    Write-Host "        Please run this script from the ruidong-ui-studio repo root." -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $skillsDir)) {
    Write-Host "[INFO] Creating directory: $skillsDir"
    New-Item -ItemType Directory -Path $skillsDir -Force | Out-Null
}

if (Test-Path $target) {
    # Backups go OUTSIDE .claude\skills so the skill loader doesn't pick them up
    # as separate skills (backups contain a valid SKILL.md with its own frontmatter).
    if (-not (Test-Path $backupsDir)) {
        New-Item -ItemType Directory -Path $backupsDir -Force | Out-Null
    }
    $timestamp = Get-Date -Format 'yyyyMMdd-HHmmss'
    $backup = Join-Path $backupsDir "ruidong-ui.$timestamp"
    Write-Host "[INFO] Existing install found, backing up to: $backup" -ForegroundColor Yellow
    Move-Item $target $backup
}

Write-Host "[INFO] Installing ruidong-ui skill ..."
Copy-Item -Path $source -Destination $target -Recurse -Force

$skillMd = Join-Path $target 'SKILL.md'
if (-not (Test-Path $skillMd)) {
    Write-Host "[ERROR] Install failed: SKILL.md not found in target" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "[OK] Installation successful!" -ForegroundColor Green
Write-Host ""
Write-Host "Installed at: $target"
Write-Host ""
Write-Host "Next steps:"
Write-Host "  1. Open or restart Claude Code"
Write-Host "  2. In any Ruidong agent project, try: /ruidong-ui"
Write-Host "  3. Claude will list available styles for you to pick"
Write-Host ""
Write-Host "To upgrade: cd to this repo, run 'git pull', then re-run this script."
