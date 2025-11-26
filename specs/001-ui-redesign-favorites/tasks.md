# Tasks: UI美化重设计与收藏功能

**Input**: Design documents from `/specs/001-ui-redesign-favorites/`  
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, contracts/ ✅

**Tests**: 暂无测试框架配置，本次不生成测试任务

**Organization**: 任务按用户故事分组，支持独立实现和测试每个故事

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: 可并行执行（不同文件，无依赖）
- **[Story]**: 任务所属用户故事（US1, US2, US3, US4, US5）
- 所有文件路径均为相对于 `smartprep-ai/` 目录

---

## Phase 1: Setup (项目基础设施)

**Purpose**: 安装依赖，创建新目录结构

- [X] T001 安装 react-window 依赖：`npm install react-window && npm install -D @types/react-window` in smartprep-ai/
- [X] T002 [P] 创建 hooks/ 目录结构 in smartprep-ai/hooks/
- [X] T003 [P] 创建 styles/ 目录结构 in smartprep-ai/styles/

---

## Phase 2: Foundational (基础类型与服务)

**Purpose**: 核心类型定义和共享服务，所有用户故事的前置依赖

**⚠️ 关键**: 此阶段完成后才能开始任何用户故事

- [X] T004 在 smartprep-ai/types.ts 中添加 Favorite, FavoriteList, QuestionNote, NoteList 类型定义
- [X] T005 在 smartprep-ai/types.ts 中添加 STORAGE_KEYS 常量（sp_favorites, sp_notes）
- [X] T006 [P] 创建 smartprep-ai/styles/theme.ts 定义暖色渐变主题配置（色彩常量）
- [X] T007 [P] 创建 smartprep-ai/hooks/useFavorites.ts 实现收藏管理 Hook（addFavorite, removeFavorite, toggleFavorite, isFavorite, getAllFavorites, count）
- [X] T008 [P] 创建 smartprep-ai/hooks/useNotes.ts 实现笔记管理 Hook（saveNote, deleteNote, getNote, hasNote, count）

**Checkpoint**: 基础设施就绪 - 用户故事实现可以开始

---

## Phase 3: User Story 1 - 题目选项双列布局优化 (Priority: P1) 🎯 MVP

**Goal**: 将题目选项从单列改为双列网格布局，减少页面滚动，提升刷题效率

**Independent Test**: 打开任意章节的题目，验证选项是否正确显示为两列布局，移动端（<768px）回落为单列

### Implementation for User Story 1

- [X] T009 [US1] 在 smartprep-ai/index.css 中添加 .options-grid 双列网格布局样式（CSS Grid, gap: 12px）
- [X] T010 [US1] 在 smartprep-ai/index.css 中添加响应式媒体查询（@media max-width: 768px 回落单列）
- [X] T011 [US1] 修改 smartprep-ai/components/QuestionCard.tsx 选项区域使用 options-grid 类名替换 space-y-3
- [X] T012 [US1] 调整 smartprep-ai/components/QuestionCard.tsx 选项按钮样式适配双列布局（min-height, word-break）

**Checkpoint**: 此时 User Story 1 应完全可用并可独立测试

---

## Phase 4: User Story 2 - 收藏功能实现 (Priority: P1)

**Goal**: 实现题目收藏、收藏夹导航、笔记编辑功能

**Independent Test**: 点击收藏按钮验证状态变化，打开收藏夹验证题目列表，添加笔记验证保存

### Implementation for User Story 2

- [X] T013 [P] [US2] 创建 smartprep-ai/components/FavoriteButton.tsx 收藏按钮组件（Heart图标，实心/空心状态，动画效果）
- [X] T014 [P] [US2] 创建 smartprep-ai/components/BadgeStack.tsx 叠层徽章组件（错题红色 + 收藏粉色）
- [X] T015 [P] [US2] 创建 smartprep-ai/components/NoteEditor.tsx 笔记编辑器组件（展开/收起状态切换按钮，保存/删除功能，placeholder提示文案）
- [X] T016 [US2] 创建 smartprep-ai/components/FavoritesPanel.tsx 收藏夹面板组件（列表显示，筛选功能）
- [X] T017 [US2] 创建 smartprep-ai/components/VirtualScrollList.tsx 虚拟滚动列表组件（基于 react-window，50+ 条目启用）
- [X] T018 [US2] 修改 smartprep-ai/components/QuestionCard.tsx 添加 FavoriteButton 和 NoteEditor 集成
- [X] T019 [US2] 修改 smartprep-ai/components/QuestionCard.tsx 添加 BadgeStack 显示错题和收藏状态
- [X] T020 [US2] 修改 smartprep-ai/App.tsx 集成 useFavorites Hook 管理收藏状态
- [X] T021 [US2] 修改 smartprep-ai/App.tsx 集成 useNotes Hook 管理笔记状态
- [X] T022 [US2] 修改 smartprep-ai/App.tsx 左侧导航添加"收藏夹"入口（位于错题集下方，学习中心分组）
- [X] T023 [US2] 修改 smartprep-ai/App.tsx 添加收藏夹视图路由处理（使用 FavoritesPanel 组件）
- [X] T024 [US2] 修改 smartprep-ai/App.tsx 收藏夹导航项显示数量 badge

**Checkpoint**: 此时 User Story 1 和 2 都应完全可用并可独立测试

---

## Phase 5: User Story 3 - 左侧导航排版优化 (Priority: P2)

**Goal**: 优化左侧导航为紧凑单列布局，8个章节无需滚动可完全显示

**Independent Test**: 打开应用，验证左侧导航不滚动情况下能显示所有8个章节

### Implementation for User Story 3

- [X] T025 [US3] 在 smartprep-ai/index.css 中添加 .nav-compact 导航项紧凑样式（减小 padding, line-height）
- [X] T026 [US3] 修改 smartprep-ai/App.tsx 左侧导航章节项应用 nav-compact 样式
- [X] T027 [US3] 修改 smartprep-ai/App.tsx 左侧导航添加分组标题样式（章节练习、学习中心）
- [X] T028 [US3] 在 smartprep-ai/index.css 中添加导航项悬停效果样式（背景色渐变变化）

**Checkpoint**: 此时 User Story 1、2、3 都应完全可用

---

## Phase 6: User Story 4 - 顶部区域排版优化 (Priority: P2)

**Goal**: 整理顶部工具栏控件，水平对齐，间距统一

**Independent Test**: 进入任意章节页面，验证顶部控件整齐对齐，间距均匀

### Implementation for User Story 4

- [X] T029 [US4] 在 smartprep-ai/index.css 中添加 .toolbar-container 工具栏容器样式（flexbox, gap, align-items）
- [X] T030 [US4] 修改 smartprep-ai/App.tsx 章节练习页面顶部区域应用 toolbar-container 样式
- [X] T031 [US4] 修改 smartprep-ai/App.tsx 错题集页面顶部区域控件分组布局优化
- [X] T032 [US4] 在 smartprep-ai/index.css 中添加响应式工具栏样式（窄屏自动换行）

**Checkpoint**: 此时 User Story 1、2、3、4 都应完全可用

---

## Phase 7: User Story 5 - 整体配色方案优化 (Priority: P3)

**Goal**: 引入暖色渐变配色方案，提升视觉层次感

**Independent Test**: 打开应用各页面，验证背景渐变效果，章节卡片配色，正确/错误反馈颜色

### Implementation for User Story 5

- [X] T033 [US5] 在 smartprep-ai/index.css 中添加 .bg-warm-gradient 主背景渐变样式（橙→粉）
- [X] T034 [P] [US5] 在 smartprep-ai/index.css 中添加 .btn-warm-gradient 按钮渐变样式
- [X] T035 [P] [US5] 在 smartprep-ai/index.css 中添加收藏按钮动画效果 .favorite-pulse
- [X] T036 [US5] 修改 smartprep-ai/App.tsx 应用主背景渐变样式
- [X] T037 [US5] 修改 smartprep-ai/components/ChapterCard.tsx 添加章节主题色点缀
- [X] T038 [US5] 修改 smartprep-ai/components/QuestionCard.tsx 优化正确/错误反馈颜色（绿色/红色更鲜明）

**Checkpoint**: 所有用户故事现在都应独立可用

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: 跨故事优化和最终验收

- [X] T039 [P] 运行 quickstart.md 验证清单，确认所有功能点
- [X] T040 [P] 检查所有中文文案是否符合 P1-语言规范
- [X] T041 代码清理：移除未使用的导入和变量
- [X] T042 性能验证：收藏50+条目时虚拟滚动正常工作
- [X] T043 响应式验证：768px断点下所有布局正确回落
- [X] T044 持久化验证：刷新页面后收藏和笔记数据保持

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: 无依赖 - 可立即开始
- **Foundational (Phase 2)**: 依赖 Setup 完成 - 阻塞所有用户故事
- **User Stories (Phase 3-7)**: 所有依赖 Foundational 完成
  - P1 故事优先（US1, US2）
  - P2 故事次之（US3, US4）
  - P3 故事最后（US5）
- **Polish (Phase 8)**: 依赖所有用户故事完成

### User Story Dependencies

- **User Story 1 (P1)**: Foundational 完成后可开始 - 无其他故事依赖
- **User Story 2 (P1)**: Foundational 完成后可开始 - 可与 US1 并行
- **User Story 3 (P2)**: Foundational 完成后可开始 - 可与 US1/US2 并行
- **User Story 4 (P2)**: Foundational 完成后可开始 - 可与其他故事并行
- **User Story 5 (P3)**: Foundational 完成后可开始 - 建议在 US1-4 之后，避免样式冲突

### Within Each User Story

- 样式定义优先于组件修改
- 新组件创建优先于现有组件修改
- 核心功能优先于集成
- 故事完成后再进入下一优先级

### Parallel Opportunities

```bash
# Phase 2 可并行任务:
T006, T007, T008

# User Story 2 可并行任务:
T013, T014, T015

# User Story 5 可并行任务:
T034, T035

# Polish 可并行任务:
T039, T040
```

---

## Parallel Example: User Story 2

```bash
# 并行启动所有新组件创建:
Task: T013 "创建 FavoriteButton.tsx"
Task: T014 "创建 BadgeStack.tsx"
Task: T015 "创建 NoteEditor.tsx"

# 等待上述完成后，按序执行集成任务:
Task: T016 "创建 FavoritesPanel.tsx" (依赖 T014)
Task: T017 "创建 VirtualScrollList.tsx"
Task: T018-T024 "修改现有组件和 App.tsx 集成"
```

---

## Implementation Strategy

### MVP First (User Story 1 + 2)

1. 完成 Phase 1: Setup
2. 完成 Phase 2: Foundational (关键 - 阻塞所有故事)
3. 完成 Phase 3: User Story 1 (双列布局)
4. 完成 Phase 4: User Story 2 (收藏功能)
5. **停止并验证**: 独立测试 US1 和 US2
6. 可部署/演示 MVP

### Incremental Delivery

1. Setup + Foundational → 基础就绪
2. 添加 User Story 1 → 测试 → 发布 (布局优化)
3. 添加 User Story 2 → 测试 → 发布 (收藏功能 MVP!)
4. 添加 User Story 3 + 4 → 测试 → 发布 (导航优化)
5. 添加 User Story 5 → 测试 → 发布 (配色美化)
6. 每个故事独立增值，不破坏之前功能

---

## Summary

| 统计项 | 数值 |
|--------|------|
| 总任务数 | 44 |
| Phase 1 (Setup) | 3 |
| Phase 2 (Foundational) | 5 |
| User Story 1 任务数 | 4 |
| User Story 2 任务数 | 12 |
| User Story 3 任务数 | 4 |
| User Story 4 任务数 | 4 |
| User Story 5 任务数 | 6 |
| Phase 8 (Polish) | 6 |
| 可并行任务数 | 13 |
| MVP 范围 (US1 + US2) | 24 tasks |

---

## Notes

- [P] 任务 = 不同文件，无依赖关系
- [Story] 标签将任务映射到特定用户故事，便于追踪
- 每个用户故事应独立完成和测试
- 每个任务或逻辑组完成后提交
- 在任何 Checkpoint 停止验证故事独立性
- 避免：模糊任务、同文件冲突、破坏独立性的跨故事依赖
