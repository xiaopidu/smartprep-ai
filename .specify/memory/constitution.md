<!--
================================================================================
SYNC IMPACT REPORT
================================================================================
Version change: N/A → 1.0.0 (Initial creation)

Modified principles: N/A (Initial creation)

Added sections:
  - Core Principles (6 principles)
  - Technology Stack
  - Development Workflow
  - Governance

Removed sections: N/A

Templates requiring updates:
  ✅ plan-template.md - Compatible, no changes needed
  ✅ spec-template.md - Compatible, no changes needed
  ✅ tasks-template.md - Compatible, no changes needed

Follow-up TODOs: None
================================================================================
-->

# SmartPrep-AI 智能刷题系统 Constitution

## 项目概述

**SmartPrep-AI** 是专为华为 HCIA-AI V4.0 认证考试设计的智能刷题解决方案。本项目基于 React + TypeScript 构建，集成 AI 服务提供智能题目解析和学习辅助功能。

## Core Principles

### I. 语言要求 (Language Requirements) - 不可协商

- **所有回复必须使用简体中文**
- 所有文档、代码注释、用户交互内容都必须使用简体中文
- 技术术语可保留英文原文，但必须附带中文解释
- Git commit message 使用中文描述
- 错误提示和用户反馈信息必须是中文

**原因**: 本项目面向华为 HCIA-AI 认证备考的中国用户群体，确保用户体验的一致性和可理解性。

### II. 组件化设计 (Component-First)

- 每个功能模块必须作为独立的 React 组件实现
- 组件必须具备清晰的职责边界（单一职责原则）
- 组件必须包含完整的 TypeScript 类型定义
- 复用逻辑通过自定义 Hooks 抽取到 `hooks/` 目录

**原因**: 保证代码可维护性和可测试性，便于功能迭代和团队协作。

### III. 类型安全 (Type Safety)

- 所有代码必须使用 TypeScript 编写
- 禁止使用 `any` 类型（除非有充分的技术理由并注释说明）
- 所有接口和类型定义集中在 `types.ts` 或对应模块的类型文件中
- AI 服务响应必须有完整的类型定义

**原因**: TypeScript 类型系统确保编译时捕获错误，提升代码质量和开发效率。

### IV. 题库数据完整性 (Data Integrity)

- 所有题目数据必须包含完整字段：题目内容、选项、正确答案、解析
- 题目必须按章节分类存储在 `services/chapterQuestions/` 目录下
- 答案格式必须统一（单选、多选、判断题有明确的格式规范）
- 任何题库修改必须经过验证脚本校验

**原因**: 题库是核心资产，数据完整性直接影响用户学习效果和考试准备质量。

### V. AI 服务隔离 (AI Service Isolation)

- AI 服务调用必须封装在 `services/` 目录下的独立服务模块中
- 必须支持多种 AI 服务提供商（DeepSeek、Gemini 等）的切换
- AI 调用必须有错误处理和降级机制
- API 密钥必须通过环境变量配置，禁止硬编码

**原因**: 隔离 AI 服务依赖，便于更换服务提供商，保护敏感凭证安全。

### VI. 用户体验优先 (UX First)

- 页面加载和交互响应必须流畅（目标：首屏加载 < 2秒）
- 所有用户操作必须有即时反馈（加载状态、成功/失败提示）
- 学习进度必须可靠持久化到 localStorage
- 移动端适配必须优先考虑（响应式设计）

**原因**: 刷题应用的用户体验直接影响学习效率和用户留存。

## Technology Stack

### 技术栈要求

| 类别 | 技术 | 版本要求 |
|------|------|----------|
| 前端框架 | React | ^19.2.0 |
| 编程语言 | TypeScript | ~5.8.2 |
| 构建工具 | Vite | ^6.2.0 |
| 运行环境 | Node.js | >= 16.0 |
| AI 集成 | LangChain | ^1.1.0 |
| 图标库 | Lucide React | ^0.554.0 |

### 目录结构规范

```
smartprep-ai/
├── components/          # React 组件
├── services/            # 服务层（AI 服务、题库服务）
│   └── chapterQuestions/  # 章节题目数据
├── utils/               # 工具函数
├── types.ts             # 全局类型定义
├── App.tsx              # 主应用组件
└── index.tsx            # 应用入口
```

## Development Workflow

### 开发流程规范

1. **功能开发**：先创建 feature 分支 (`feature/功能名称`)
2. **代码审查**：所有更改必须通过 Pull Request 合并
3. **类型检查**：提交前必须通过 `tsc --noEmit` 检查
4. **构建验证**：合并前必须通过 `npm run build`

### 提交规范

- 使用中文描述提交内容
- 格式：`<类型>: <描述>`
- 类型包括：`功能`、`修复`、`文档`、`重构`、`样式`、`测试`

**示例**：
- `功能: 添加章节进度统计功能`
- `修复: 修复多选题答案验证逻辑`
- `文档: 更新 API 配置指南`

## Governance

### 宪法执行

- 本宪法优先于所有其他开发实践和惯例
- 所有代码审查必须验证是否符合宪法原则
- 违反宪法的代码必须在合并前修正

### 修订流程

1. 提出修订建议并说明理由
2. 记录修订内容和影响范围
3. 更新相关模板文件以保持一致性
4. 更新版本号（遵循语义化版本）

### 版本规则

- **MAJOR**: 删除或重新定义核心原则
- **MINOR**: 添加新原则或实质性扩展现有指导
- **PATCH**: 澄清、措辞修正、非语义性改进

**Version**: 1.0.0 | **Ratified**: 2025-11-26 | **Last Amended**: 2025-11-26
