# SmartPrep AI 桌面应用构建脚本
# 用法: .\build-desktop.ps1 [-Platform <win|mac|all>]

param(
    [ValidateSet("win", "mac", "all")]
    [string]$Platform = "win"
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  SmartPrep AI 桌面应用构建脚本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$ErrorActionPreference = "Stop"
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Split-Path -Parent $scriptPath
$electronAppPath = Join-Path $projectRoot "electron-app"

# 切换到项目根目录
Set-Location $projectRoot

Write-Host "[1/5] 构建 Web 应用..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "构建失败!" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Web 应用构建完成" -ForegroundColor Green
Write-Host ""

Write-Host "[2/5] 复制构建文件到 Electron 目录..." -ForegroundColor Yellow
$distSource = Join-Path $projectRoot "dist"
$distDest = Join-Path $electronAppPath "dist"

if (Test-Path $distDest) {
    Remove-Item -Path $distDest -Recurse -Force
}
Copy-Item -Path $distSource -Destination $distDest -Recurse
Write-Host "✓ 构建文件复制完成" -ForegroundColor Green
Write-Host ""

Write-Host "[3/5] 安装 Electron 依赖..." -ForegroundColor Yellow
Set-Location $electronAppPath
if (-not (Test-Path "node_modules")) {
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "依赖安装失败!" -ForegroundColor Red
        exit 1
    }
}
Write-Host "✓ 依赖安装完成" -ForegroundColor Green
Write-Host ""

Write-Host "[4/5] 检查图标文件..." -ForegroundColor Yellow
$iconsPath = Join-Path $electronAppPath "icons"
if (-not (Test-Path $iconsPath)) {
    New-Item -ItemType Directory -Path $iconsPath -Force | Out-Null
    Write-Host "⚠ 已创建 icons 目录，请添加 icon.ico 和 icon.icns 文件" -ForegroundColor Yellow
} else {
    Write-Host "✓ 图标目录存在" -ForegroundColor Green
}
Write-Host ""

Write-Host "[5/5] 打包桌面应用..." -ForegroundColor Yellow
switch ($Platform) {
    "win" {
        Write-Host "正在打包 Windows 版本..." -ForegroundColor Cyan
        npm run build:win
    }
    "mac" {
        Write-Host "正在打包 macOS 版本..." -ForegroundColor Cyan
        npm run build:mac
    }
    "all" {
        Write-Host "正在打包所有平台版本..." -ForegroundColor Cyan
        npm run build:all
    }
}

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  ✓ 构建完成!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "安装程序位置: $electronAppPath\release" -ForegroundColor Cyan
    
    $releasePath = Join-Path $electronAppPath "release"
    if (Test-Path $releasePath) {
        Write-Host ""
        Write-Host "生成的文件:" -ForegroundColor Yellow
        Get-ChildItem -Path $releasePath -File | ForEach-Object {
            Write-Host "  - $($_.Name)" -ForegroundColor White
        }
    }
} else {
    Write-Host "打包失败!" -ForegroundColor Red
    exit 1
}

Set-Location $projectRoot
