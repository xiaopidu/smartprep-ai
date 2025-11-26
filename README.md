<div align="center">

# 🎓 SmartPrep AI

### HCIA-AI V4.0 智能刷题系统

<p>
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.4.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Electron-28-47848F?style=for-the-badge&logo=electron&logoColor=white" alt="Electron" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

**专为华为 HCIA-AI V4.0 认证考试设计的现代化智能刷题解决方案**

[📥 下载应用](#-下载应用) •
[🚀 快速开始](#-快速开始) •
[✨ 功能特性](#-功能特性) •
[📚 题库内容](#-题库内容)

</div>

---

## 📥 下载应用

### 桌面客户端 (推荐)

从 [Releases](https://github.com/SpongeBaby-124/smartprep-ai/releases) 页面下载最新版本：

| 平台 | 下载 | 说明 |
|------|------|------|
| **Windows** | `SmartPrep-AI-x.x.x-Windows-x64.zip` | 解压后运行 `SmartPrep AI.exe` |
| **macOS (Intel)** | `SmartPrep-AI-x.x.x-macOS-x64.zip` | 解压后双击运行 |
| **macOS (Apple Silicon)** | `SmartPrep-AI-x.x.x-macOS-arm64.zip` | M1/M2/M3 芯片 Mac |

### 使用说明

1. **下载** - 从 Releases 页面下载对应平台的安装包
2. **解压** - 解压下载的 ZIP 文件
3. **运行** - 
   - Windows: 双击 `SmartPrep AI.exe`
   - macOS: 双击 `SmartPrep AI.app`
4. **开始刷题** - 应用启动后即可开始使用

> ⚠️ **macOS 用户注意**: 首次打开可能提示"无法验证开发者"，请前往 `系统偏好设置 > 安全性与隐私 > 通用`，点击"仍要打开"。

---

## 📖 项目简介

SmartPrep AI 是一款基于 React + TypeScript 构建的现代化应用，旨在帮助用户高效备考华为 HCIA-AI V4.0 认证考试。系统提供完整的题库、智能刷题、AI 助手、收藏管理、错题本等功能。

### 🎯 核心亮点

| 特性 | 描述 |
|------|------|
| 📱 **跨平台支持** | 支持 Windows、macOS 桌面客户端 |
| 🤖 **AI 智能助手** | 集成 DeepSeek AI，智能答疑解惑 |
| 🎨 **暖色渐变主题** | 现代化 UI 设计，减少视觉疲劳 |
| ⭐ **收藏与错题** | 支持题目收藏和错题本功能 |
| 📊 **进度追踪** | 实时记录学习进度 |
| 🔄 **离线可用** | 本地存储，无需联网也能刷题 |

---

## 🚀 快速开始

### 方式一：使用桌面客户端（推荐）

直接从 [Releases](https://github.com/SpongeBaby-124/smartprep-ai/releases) 下载，无需安装任何开发环境。

### 方式二：本地开发

#### 环境要求

- **Node.js** 18.0+
- **npm** 或 **yarn** 或 **pnpm**

#### 安装步骤

```bash
# 1. 克隆仓库
git clone https://github.com/SpongeBaby-124/smartprep-ai.git
cd smartprep-ai

# 2. 进入应用目录
cd smartprep-ai

# 3. 安装依赖
npm install

# 4. 启动开发服务器
npm run dev
```

访问 **http://localhost:3000** 即可开始使用！

#### 构建生产版本

```bash
npm run build    # 构建
npm run preview  # 预览
```

#### 构建桌面应用

```bash
# 1. 构建 Web 应用
cd smartprep-ai
npm run build

# 2. 复制到 Electron 目录
cp -r dist ../electron-app/

# 3. 打包桌面应用
cd ../electron-app
npm install
npm run pack:win   # Windows
npm run pack:mac   # macOS
```

---

## ✨ 功能特性

### 📝 智能刷题

- **章节练习** - 8 大章节分类练习
- **多种题型** - 单选、多选、判断题
- **即时反馈** - 答题后立即显示正确答案和解析
- **双列布局** - 选项一行两个，减少滚动

### 🤖 AI 智能助手

- **DeepSeek AI** - 集成先进的 AI 模型
- **智能答疑** - 针对题目进行智能解答
- **上下文理解** - 理解题目内容提供精准帮助
- **自定义 API** - 支持配置自己的 API Key

### ⭐ 收藏管理

- **一键收藏** - 点击爱心快速收藏题目
- **收藏夹** - 统一管理所有收藏题目
- **章节筛选** - 按章节查看收藏
- **虚拟滚动** - 大量题目流畅浏览

### 📕 错题本

- **自动记录** - 答错的题目自动收录
- **重复练习** - 专项突破薄弱环节
- **清除记录** - 支持清空错题记录

---

## 📚 题库内容

覆盖 HCIA-AI V4.0 认证考试全部 **8 个章节**：

| 章节 | 内容 |
|------|------|
| **第 1 章** | 人工智能概览 |
| **第 2 章** | 机器学习详解 |
| **第 3 章** | 深度学习基础 |
| **第 4 章** | 卷积神经网络 CNN |
| **第 5 章** | 循环神经网络 RNN |
| **第 6 章** | Transformer 与大模型 |
| **第 7 章** | AI 开发框架 |
| **第 8 章** | 华为 AI 解决方案 |

---

## 🛠️ 技术栈

### 前端框架

```
React 19.2.0 + TypeScript 5.8.2
├── Vite 6.4.1           # 构建工具
├── Electron 28          # 桌面应用框架
├── LangChain            # AI 集成
├── Lucide React         # 图标库
├── react-window         # 虚拟滚动
└── localStorage         # 数据持久化
```

### 项目结构

```
smartprep-ai/
├── 📁 smartprep-ai/        # Web 应用源码
│   ├── 📁 components/      # React 组件
│   │   ├── QuestionCard    # 题目卡片
│   │   ├── ChapterCard     # 章节卡片
│   │   ├── AIChatBox       # AI 助手
│   │   └── ...
│   ├── 📁 services/        # 服务层
│   │   ├── deepseekService # DeepSeek AI 服务
│   │   └── chapterQuestions # 题库数据
│   ├── 📄 App.tsx          # 主应用
│   └── 📄 types.ts         # 类型定义
├── 📁 electron-app/        # Electron 桌面应用
│   ├── main.js             # 主进程
│   ├── preload.js          # 预加载脚本
│   └── package.json        # Electron 配置
└── 📁 .github/workflows/   # CI/CD 配置
```

---

## 🔧 配置 AI 助手

要使用 AI 智能助手功能，需要配置 DeepSeek API Key：

1. 访问 [DeepSeek 官网](https://platform.deepseek.com/) 注册账号
2. 获取 API Key
3. 在应用中点击右上角设置图标
4. 输入 API Key 并保存

---

## 🤝 贡献指南

欢迎贡献代码和题目！

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/新功能`)
3. 提交更改 (`git commit -m 'feat: 添加新功能'`)
4. 推送分支 (`git push origin feature/新功能`)
5. 创建 Pull Request

---

## 📄 许可证

本项目基于 [MIT License](./LICENSE) 开源。

---

<div align="center">

**Made with ❤️ for HCIA-AI Learners**

祝您备考顺利，考试成功！🎓

</div>