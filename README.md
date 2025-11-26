<div align="center">

# 🎓 SmartPrep AI

### HCIA-AI V4.0 智能刷题系统

<p>
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.4.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

**专为华为 HCIA-AI V4.0 认证考试设计的现代化智能刷题解决方案**

[🚀 快速开始](#-快速开始) •
[✨ 功能特性](#-功能特性) •
[📚 题库内容](#-题库内容) •
[🛠️ 技术栈](#️-技术栈)

</div>

---

## 📖 项目简介

SmartPrep AI 是一款基于 React + TypeScript 构建的现代化 Web 应用，旨在帮助用户高效备考华为 HCIA-AI V4.0 认证考试。系统提供完整的题库、智能刷题、收藏管理、笔记记录等功能。

### 🎯 核心亮点

| 特性 | 描述 |
|------|------|
| 📱 **响应式设计** | 完美适配桌面端和移动端 |
| 🎨 **暖色渐变主题** | 现代化 UI 设计，减少视觉疲劳 |
| ⭐ **收藏与笔记** | 支持题目收藏和个人笔记 |
| 📊 **进度追踪** | 实时记录学习进度和错题 |
| 🔄 **离线可用** | 本地存储，无需联网也能刷题 |

---

## 🚀 快速开始

### 环境要求

- **Node.js** 16.0+
- **npm** 或 **yarn** 或 **pnpm**

### 安装步骤

```bash
# 1. 克隆仓库
git clone https://github.com/xiaopidu/smartprep-ai.git
cd smartprep-ai

# 2. 进入应用目录
cd smartprep-ai

# 3. 安装依赖
npm install

# 4. 启动开发服务器
npm run dev
```

访问 **http://localhost:3000** 即可开始使用！

### 构建生产版本

```bash
npm run build    # 构建
npm run preview  # 预览
```

---

## ✨ 功能特性

### 📝 智能刷题

- **章节练习** - 8 大章节分类练习
- **多种题型** - 单选、多选、判断题
- **即时反馈** - 答题后立即显示正确答案和解析
- **双列布局** - 选项一行两个，减少滚动

### ⭐ 收藏管理

- **一键收藏** - 点击爱心快速收藏题目
- **收藏夹** - 统一管理所有收藏题目
- **章节筛选** - 按章节查看收藏
- **虚拟滚动** - 大量题目流畅浏览

### 📒 笔记功能

- **题目笔记** - 为每道题添加个人笔记
- **实时保存** - 自动保存到本地
- **快速查看** - 支持展开/收起

### 📊 学习追踪

- **错题本** - 自动记录错题
- **进度统计** - 可视化学习进度
- **数据持久化** - 刷新不丢失

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
├── Vite 6.4.1        # 构建工具
├── Lucide React      # 图标库
├── react-window      # 虚拟滚动
└── localStorage      # 数据持久化
```

### 项目结构

```
smartprep-ai/
├── 📁 components/       # React 组件
│   ├── QuestionCard     # 题目卡片
│   ├── ChapterCard      # 章节卡片
│   ├── FavoritesPanel   # 收藏面板
│   ├── NoteEditor       # 笔记编辑器
│   └── ...
├── 📁 hooks/            # 自定义 Hooks
│   ├── useFavorites     # 收藏管理
│   └── useNotes         # 笔记管理
├── 📁 services/         # 服务层
│   └── chapterQuestions # 题库数据
├── 📁 styles/           # 样式配置
├── 📄 App.tsx           # 主应用
└── 📄 types.ts          # 类型定义
```

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