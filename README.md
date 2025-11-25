# HCIA-AI V4.0 智能刷题系统

<div align="center">

[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4.1-purple)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-green)](https://nodejs.org/)

**专为华为HCIA-AI V4.0认证考试设计的智能刷题解决方案**

</div>

## 📋 项目概述

本项目是一个完整的HCIA-AI V4.0认证考试备考系统，包含：

- **📚 完整题库**: 涵盖HCIA-AI V4.0所有8个章节的考试题目
- **🤖 智能刷题应用**: 基于React + TypeScript的现代化Web应用
- **📖 学习资料**: 官方培训教材、实验手册和版本说明
- **🔧 实用工具**: 题目转换和数据处理脚本

## 🏗️ 项目结构

```
HCIA_4.0_smartprep_ai/
smartprep-ai/                 # 智能刷题应用
    ├── components/               # React组件
    │   ├── ChapterCard.tsx       # 章节卡片组件
    │   └── QuestionCard.tsx      # 题目卡片组件
    ├── services/                 # 服务层
    │   ├── chapterQuestions/     # 章节题目数据
    │   ├── deepseekService.ts    # DeepSeek AI服务
    │   ├── geminiService.ts      # Gemini AI服务
    │   └── handbookQuestionsService.ts # 题库服务
    ├── convert_correct_answers.py # 答案转换脚本
    ├── App.tsx                   # 主应用组件
    ├── index.tsx                 # 应用入口
    └── package.json              # 项目配置
```

## 🚀 快速开始

### 环境要求

- Node.js 16.0 或更高版本
- npm 或 yarn 包管理器

### 安装和运行

1. **进入应用目录**
```bash
cd smartprep-ai
```

2. **安装依赖**
```bash
npm install
```

3. **启动开发服务器**
```bash
npm run dev
```

4. **打开浏览器访问**
```
http://localhost:3000
```

### 构建生产版本

```bash
npm run build
npm run preview
```

## 📚 题库内容

本项目包含HCIA-AI V4.0认证考试的完整题库，涵盖以下8个章节：

### 第1部分：人工智能概览
- 人工智能基本概念
- AI发展历程和现状
- 主要AI技术领域

### 第2部分：机器学习详解
- 机器学习基础理论
- 监督学习算法
- 无监督学习算法
- 强化学习原理

### 第3部分：深度学习基础
- 神经网络基本原理
- 激活函数和损失函数
- 反向传播算法
- 优化方法

### 第4部分：卷积神经网络CNN
- CNN基本结构
- 卷积层、池化层原理
- 经典CNN模型
- CNN应用场景

### 第5部分：循环神经网络RNN
- RNN基本结构
- LSTM和GRU网络
- 序列数据处理
- RNN应用场景

### 第6部分：Transformer与大模型
- Transformer架构原理
- 注意力机制
- 预训练语言模型
- 大模型应用

### 第7部分：AI开发框架
- TensorFlow框架
- PyTorch框架
- 华为MindSpore
- 框架对比和选择

### 第8部分：华为AI解决方案
- 华为AI全栈解决方案
- ModelArts平台
- HiLens平台
- 华为云AI服务

## 🔧 技术特性

### 前端技术栈
- **框架**: React 19.2.0 + TypeScript
- **构建工具**: Vite 6.4.1
- **样式**: 现代化CSS设计
- **图标**: Lucide React

### AI服务集成
- **DeepSeek API**: 支持智能题目解析
- **Gemini API**: 多模态AI能力
- **LangChain**: AI服务链式调用

### 数据管理
- **本地存储**: 浏览器localStorage
- **题目缓存**: 智能缓存机制
- **进度跟踪**: 实时学习进度

## 🎯 核心功能

### 智能刷题
- 按章节分类练习
- 多种题型支持（单选、多选、判断）
- 实时答题反馈
- 错题自动记录

### 学习管理
- 学习进度可视化
- 章节完成度统计
- 答题历史记录
- 个性化学习路径

### 题目管理
- 题目搜索和筛选
- 难度分级
- 知识点标签
- 题目收藏功能

## 🛠️ 开发工具

### 题目转换脚本
项目提供 `convert_correct_answers.py` 脚本，用于：
- 格式化题目数据
- 转换答案格式
- 批量处理题库文件

### 服务测试
使用 `testHandbookService.ts` 测试题库服务功能。

## 📖 学习资料

### 官方文档
- `handbooks/HCIA-AI V4.0 培训教材.pdf` - 完整培训教材
- `handbooks/HCIA-AI V4.0 实验手册.pdf` - 实践操作指南
- `handbooks/HCIA-AI V4.0 版本说明.pdf` - 版本更新信息

### 内容分析
- `handbooks/教材内容分析.md` - 教材结构分析
- 各章节题库文件 - 针对性练习题目

## 🤝 贡献指南

欢迎为项目贡献代码或题目！

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/新功能`)
3. 提交更改 (`git commit -m '添加新功能'`)
4. 推送到分支 (`git push origin feature/新功能`)
5. 创建Pull Request

### 题目贡献规范
- 确保题目准确性
- 提供详细解析
- 标注知识点标签
- 验证答案正确性

## 📄 许可证

本项目基于 MIT 许可证开源。

## 🙏 致谢

- 感谢华为技术有限公司提供的HCIA-AI V4.0认证考试资料
- 感谢React和Vite社区提供的优秀开发工具
- 感谢所有为项目贡献题目和代码的开发者

## 📞 联系我们

如有问题或建议，请通过以下方式联系：

- 提交 Issue 报告问题
- 发送邮件至项目维护者
- 参与项目讨论和改进

---

<div align="center">

**祝您备考顺利，考试成功！🎓**

</div>