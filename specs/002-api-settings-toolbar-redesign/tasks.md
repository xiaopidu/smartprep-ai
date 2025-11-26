````markdown
# Tasks: API 前端配置与工具栏重设计

**Input**: Design documents from `/specs/002-api-settings-toolbar-redesign/`  
**Prerequisites**: plan.md ✅, spec.md ✅

**Tests**: 暂无测试框架配置，本次不生成测试任务

**Organization**: 任务按阶段分组，按依赖顺序执行

**Status**: ✅ 所有任务已完成

## Format: `[ID] [P?] [Phase] Description`

- **[P]**: 可并行执行（不同文件，无依赖）
- **[Phase]**: 任务所属阶段（P1=基础设施, P2=API配置, P3=工具栏, P4=样式, P5=AI助手）
- 所有文件路径均为相对于 `smartprep-ai/` 目录

---

## Phase 1: 基础设施 (Foundation)

**Purpose**: 准备类型定义、Hooks 和通用组件

- [X] T01 [P] [P1] 在 `types.ts` 中添加 `DEEPSEEK_API_KEY` 和 `GEMINI_API_KEY` 到 STORAGE_KEYS
- [X] T02 [P1] 创建 `hooks/useAPIKeys.ts` 管理 API Key 读写（依赖 T01）
- [X] T03 [P] [P1] 创建 `components/DropdownMenu.tsx` 通用下拉组件

**Checkpoint**: 基础设施就绪 - 可以开始 Phase 2 和 Phase 3

---

## Phase 2: API Key 配置模块 (US1)

**Purpose**: 实现设置面板和 API Key 管理功能

**Goal**: 用户可在前端界面配置 API Key，无需修改代码

- [X] T04 [P2] 创建 `components/SettingsPanel.tsx` 设置面板框架（依赖 T02）
- [X] T05 [P2] 实现 API Key 输入组件：密码显示/隐藏、状态指示（依赖 T04）
- [X] T06 [P2] 实现「测试连接」功能（依赖 T05）
- [X] T07 [P] [P2] 修改 `services/deepseekServiceLangchain.ts` 支持从 localStorage 读取 API Key（依赖 T02）
- [X] T08 [P2] 在 `App.tsx` 左侧边栏添加设置入口，集成 SettingsPanel（依赖 T04）

**Checkpoint**: API Key 配置功能可用

---

## Phase 3: 下拉菜单与工具栏重构 (US2)

**Purpose**: 整合工具栏按钮到下拉菜单，简化界面

**Goal**: 工具栏更简洁，相关功能整合到下拉菜单

- [X] T09 [P3] 创建 `components/QuestionTypeFilter.tsx` 题型筛选下拉菜单（依赖 T03）
- [X] T10 [P] [P3] 创建 `components/QuestionSourceFilter.tsx` 题库来源下拉菜单（依赖 T03）
- [X] T11 [P] [P3] 创建 `components/MoreActionsMenu.tsx` 更多操作下拉菜单（依赖 T03）
- [X] T12 [P3] 重构 `App.tsx` 工具栏区域，替换为新的下拉组件（依赖 T09, T10, T11）
- [X] T13 [P3] 移动端工具栏适配，响应式折叠布局（依赖 T12）

**Checkpoint**: 工具栏重构完成

---

## Phase 4: 样式优化与验收 (US3)

**Purpose**: 统一配色、完成测试

**Goal**: 工具栏配色与主界面暖色调一致

- [X] T14 [P4] 在 `index.css` 添加下拉菜单和工具栏暖色样式（依赖 T12）
- [X] T15 [P] [P4] 在 `index.css` 添加设置面板样式（依赖 T08）
- [X] T16 [P4] 功能验收测试：API 配置 + 工具栏交互（依赖 T14, T15）

**Checkpoint**: 所有功能验收通过

---

## Phase 5: AI Chatbox 智能助手 (US4)

**Purpose**: 在做题页面提供 AI 智能助手功能

**Goal**: 用户可在做题时随时向 AI 提问获得帮助

- [X] T17 [P5] 创建 `components/AIChatBox.tsx` AI 聊天组件（依赖 T02）
- [X] T18 [P5] 在 `App.tsx` 集成 AIChatBox，添加工具栏切换按钮（依赖 T17）
- [X] T19 [P5] 在 `index.css` 添加 AI Chatbox 相关样式（依赖 T18）

**Checkpoint**: AI 智能助手功能完成

---

## Dependencies & Execution Order

### Phase Dependencies

```
T01 ──┬──► T02 ──► T04 ──► T05 ──► T06
      │                              │
      │                              ▼
      │                             T08 ──► T15
      │                              │
      │                              ▼
      │                             T17 ──► T18 ──► T19
      │
      └──► T07 (并行)

T03 ──┬──► T09 ──┐
      │          │
      ├──► T10 ──┼──► T12 ──► T13 ──► T14 ──► T16
      │          │
      └──► T11 ──┘
```

### Parallel Opportunities

```bash
# Phase 1 可并行任务:
T01, T03

# Phase 2 可并行任务:
T07 (与 T04-T06 并行)

# Phase 3 可并行任务:
T10, T11 (与 T09 并行)

# Phase 4 可并行任务:
T15 (与 T14 并行)
```

---

## Summary

| 统计项 | 数值 |
|--------|------|
| 总任务数 | 19 |
| 已完成 | 19 ✅ |
| Phase 1 (基础设施) | 3 ✅ |
| Phase 2 (API配置) | 5 ✅ |
| Phase 3 (工具栏重构) | 5 ✅ |
| Phase 4 (样式优化) | 3 ✅ |
| Phase 5 (AI智能助手) | 3 ✅ |

---

## Notes

- [P] 任务 = 不同文件，无依赖关系
- [Phase] 标签标识任务所属阶段
- API Key 存储在 localStorage，优先于环境变量

## 设计变更记录

1. **左侧边栏入口**：将「设置」改为「API 设置」
2. **移除顶部 API 设置按钮**：Dashboard 首页不再单独显示 API 设置按钮
3. **移除 APIStatusIndicator**：章节视图和 AI 模拟题视图中的 API 状态指示器已移除
4. **新增 AI Chatbox**：做题页面右侧新增 AI 智能助手，使用 DeepSeek API (deepseek-chat 模型)

````
