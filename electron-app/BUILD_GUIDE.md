# SmartPrep AI 桌面应用构建指南

## 项目结构

```
electron-app/
├── main.js          # Electron 主进程
├── preload.js       # 预加载脚本
├── package.json     # Electron 应用配置
├── dist/            # 从主项目复制的构建文件
├── icons/           # 应用图标
│   ├── icon.ico     # Windows 图标 (256x256)
│   └── icon.icns    # macOS 图标
└── release/         # 打包后的安装程序
```

## 构建步骤

### 1. 构建 Web 应用
```bash
cd smartprep-ai
npm run build
```

### 2. 复制构建文件到 Electron 目录
```bash
# Windows PowerShell
Copy-Item -Path "dist" -Destination "electron-app/dist" -Recurse -Force
```

### 3. 安装 Electron 依赖
```bash
cd electron-app
npm install
```

### 4. 打包应用

#### Windows:
```bash
npm run build:win
```

#### macOS:
```bash
npm run build:mac
```

#### 全平台:
```bash
npm run build:all
```

## 输出文件

打包完成后，安装程序将在 `electron-app/release` 目录中：

- **Windows**: 
  - `SmartPrep AI Setup 1.0.0.exe` (NSIS 安装程序)
  - `SmartPrep AI 1.0.0.exe` (便携版)
  
- **macOS**:
  - `SmartPrep AI-1.0.0.dmg` (x64)
  - `SmartPrep AI-1.0.0-arm64.dmg` (Apple Silicon)

## 图标要求

### Windows (icon.ico)
- 推荐尺寸: 256x256 像素
- 可包含多种尺寸: 16, 32, 48, 64, 128, 256

### macOS (icon.icns)
- 需要包含多种尺寸: 16, 32, 64, 128, 256, 512, 1024
- 可使用在线工具转换 PNG 为 ICNS

## 注意事项

1. 在 Windows 上构建 macOS 版本需要额外配置
2. 在 macOS 上构建 Windows 版本需要安装 Wine
3. 建议在对应平台上构建该平台的安装程序
4. 首次运行可能需要允许网络访问（API 调用）
