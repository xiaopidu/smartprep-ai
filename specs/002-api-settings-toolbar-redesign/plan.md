# 实施计划：API 前端配置与工具栏重设计

**版本**: 1.1  
**日期**: 2025-11-26  
**关联规格**: [spec.md](./spec.md)  
**分支**: `002-api-settings-toolbar-redesign`  
**状态**: ✅ 已完成

---

## 📋 计划概览

本计划将功能拆分为 5 个阶段，共 19 个任务，预计工时 2.5 天。

```
Phase 1: 基础设施 (3 tasks)
    ↓
Phase 2: API Key 配置模块 (5 tasks)
    ↓
Phase 3: 下拉菜单与工具栏重构 (5 tasks)
    ↓
Phase 4: 样式优化与验收 (3 tasks)
    ↓
Phase 5: AI Chatbox 智能助手 (3 tasks)
```

---

## 🚀 Phase 1: 基础设施

**目标**: 准备类型定义、Hooks 和通用组件

| ID | 任务 | 文件 | 依赖 | 可并行 |
|----|------|------|------|--------|
| T01 | 在 `types.ts` 中添加 API Key 相关的 `STORAGE_KEYS` 常量 | `types.ts` | - | ✅ |
| T02 | 创建 `hooks/useAPIKeys.ts` 管理 API Key 读写 | `hooks/useAPIKeys.ts` | T01 | - |
| T03 | 创建 `components/DropdownMenu.tsx` 通用下拉组件 | `components/DropdownMenu.tsx` | - | ✅ |

### T01 详细说明

```typescript
// 新增到 types.ts
export const STORAGE_KEYS = {
  // ... 现有的
  DEEPSEEK_API_KEY: 'sp_deepseek_api_key',
  GEMINI_API_KEY: 'sp_gemini_api_key',
} as const;
```

### T02 详细说明

```typescript
// hooks/useAPIKeys.ts
export function useAPIKeys() {
  // 读取: localStorage > 环境变量
  // 写入: localStorage
  // 测试连接: 调用各 API 的验证端点
  return {
    deepseekKey, setDeepseekKey,
    geminiKey, setGeminiKey,
    testDeepseek, testGemini,
    saveKeys,
  };
}
```

### T03 详细说明

```typescript
// components/DropdownMenu.tsx
interface DropdownMenuProps {
  trigger: React.ReactNode;      // 触发按钮
  children: React.ReactNode;     // 下拉内容
  align?: 'left' | 'right';      // 对齐方式
  className?: string;
}

// 功能：
// - 点击触发按钮展开/收起
// - 点击外部自动关闭
// - 支持 Escape 键关闭
// - 动画过渡效果
```

---

## 🔑 Phase 2: API Key 配置模块

**目标**: 实现设置面板和 API Key 管理功能

| ID | 任务 | 文件 | 依赖 | 可并行 |
|----|------|------|------|--------|
| T04 | 创建 `components/SettingsPanel.tsx` 设置面板框架 | `components/SettingsPanel.tsx` | T02 | - |
| T05 | 实现 API Key 输入组件（密码显示/隐藏、状态指示） | `components/SettingsPanel.tsx` | T04 | - |
| T06 | 实现「测试连接」功能 | `components/SettingsPanel.tsx` | T05 | - |
| T07 | 修改 `deepseekServiceLangchain.ts` 从 Hook 读取 API Key | `services/deepseekServiceLangchain.ts` | T02 | ✅ |
| T08 | 在 `App.tsx` 集成设置面板入口（左侧边栏添加设置按钮） | `App.tsx` | T04 | - |

### T04 详细说明

```tsx
// components/SettingsPanel.tsx
export function SettingsPanel({ isOpen, onClose }: SettingsPanelProps) {
  return (
    <div className="settings-panel-overlay">
      <div className="settings-panel">
        <header>⚙️ 设置 <button onClick={onClose}>×</button></header>
        <section>
          <h3>🔑 API 密钥配置</h3>
          {/* API Key 输入区域 */}
        </section>
        <footer>
          <button>保存设置</button>
        </footer>
      </div>
    </div>
  );
}
```

### T06 测试连接逻辑

```typescript
async function testDeepseekConnection(apiKey: string): Promise<boolean> {
  try {
    const response = await fetch('https://api.deepseek.com/v1/models', {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    return response.ok;
  } catch {
    return false;
  }
}
```

---

## 🎛️ Phase 3: 下拉菜单与工具栏重构

**目标**: 整合工具栏按钮到下拉菜单，简化界面

| ID | 任务 | 文件 | 依赖 | 可并行 |
|----|------|------|------|--------|
| T09 | 创建「题型筛选」下拉菜单组件 | `components/QuestionTypeFilter.tsx` | T03 | - |
| T10 | 创建「题库来源」下拉菜单组件 | `components/QuestionSourceFilter.tsx` | T03 | ✅ |
| T11 | 创建「更多操作」下拉菜单组件 | `components/MoreActionsMenu.tsx` | T03 | ✅ |
| T12 | 重构 `App.tsx` 工具栏区域，替换为新的下拉组件 | `App.tsx` | T09, T10, T11 | - |
| T13 | 移动端工具栏适配（响应式折叠） | `App.tsx`, `index.css` | T12 | - |

### T09 详细说明

```tsx
// components/QuestionTypeFilter.tsx
export function QuestionTypeFilter({ 
  selectedTypes, 
  onToggle 
}: QuestionTypeFilterProps) {
  return (
    <DropdownMenu
      trigger={
        <button className="toolbar-btn">
          <ClipboardList /> 题型筛选 <ChevronDown />
        </button>
      }
    >
      <div className="p-2 space-y-1">
        {/* 4 个题型勾选项 */}
        <label><input type="checkbox" /> 单选题</label>
        {/* ... */}
      </div>
    </DropdownMenu>
  );
}
```

### T12 工具栏结构变更

**Before**:
```tsx
<div className="flex flex-wrap items-center gap-3">
  {/* 题型筛选 - 4个独立checkbox */}
  {/* 做题/背诵模式 */}
  {/* 默认题库开关 */}
  {/* AI模拟题开关 */}
  {/* 只做错题按钮 */}
  {/* 重刷本章按钮 */}
  {/* 自定义AI生成按钮 */}
</div>
```

**After**:
```tsx
<div className="toolbar-redesign flex items-center gap-3">
  <QuestionTypeFilter ... />     {/* 下拉 */}
  <StudyModeToggle ... />        {/* 保持 */}
  <QuestionSourceFilter ... />   {/* 下拉 */}
  <MoreActionsMenu ... />        {/* 下拉 */}
</div>
```

---

## 🎨 Phase 4: 样式优化与验收

**目标**: 统一配色、完成测试

| ID | 任务 | 文件 | 依赖 | 可并行 |
|----|------|------|------|--------|
| T14 | 在 `index.css` 添加下拉菜单和工具栏暖色样式 | `index.css` | T12 | - |
| T15 | 设置面板样式优化（与主题一致） | `index.css` | T08 | ✅ |
| T16 | 功能验收测试（API 配置 + 工具栏交互） | - | T14, T15 | - |

### T14 样式规范

```css
/* 工具栏重设计 */
.toolbar-redesign {
  background: rgba(255, 247, 237, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(251, 146, 60, 0.2);
}

/* 下拉触发按钮 */
.dropdown-trigger {
  @apply px-3 py-2 rounded-lg text-sm font-medium;
  @apply bg-white border border-orange-200;
  @apply text-amber-900 hover:bg-orange-50;
  @apply transition-all duration-200;
}

/* 下拉面板 */
.dropdown-panel {
  @apply absolute mt-2 bg-white rounded-xl shadow-lg;
  @apply border border-orange-100;
  @apply py-2 min-w-[180px];
  @apply animate-fade-in;
}

/* 激活按钮 */
.toolbar-btn-active {
  @apply bg-gradient-to-r from-orange-500 to-pink-500 text-white;
}
```

---

## 📊 任务依赖图

```
T01 ──┬──► T02 ──► T04 ──► T05 ──► T06
      │                              │
      │                              ▼
      │                             T08 ──► T15
      │
      └──► T07 (并行)

T03 ──┬──► T09 ──┐
      │          │
      ├──► T10 ──┼──► T12 ──► T13 ──► T14 ──► T16
      │          │
      └──► T11 ──┘
```

---

## ⏱️ 时间估算

| Phase | 任务数 | 预估工时 | 可并行任务 |
|-------|--------|----------|------------|
| Phase 1 | 3 | 2 小时 | T01, T03 |
| Phase 2 | 5 | 4 小时 | T07 |
| Phase 3 | 5 | 5 小时 | T10, T11 |
| Phase 4 | 3 | 3 小时 | T15 |
| Phase 5 | 3 | 4 小时 | - |
| **合计** | **19** | **18 小时** | - |

**实际工期**: 约 2.5 个工作日（考虑并行）

---

## ✅ 验收清单

### 功能验收

- [x] 能在设置面板中配置 DeepSeek API Key
- [x] 能在设置面板中配置 Gemini API Key
- [x] 测试连接功能正常工作
- [x] API Key 刷新后保持
- [x] 题型筛选下拉菜单正常工作
- [x] 题库来源下拉菜单正常工作
- [x] 更多操作下拉菜单正常工作
- [x] 点击外部关闭下拉菜单
- [x] AI Chatbox 可通过工具栏切换显示/隐藏
- [x] AI Chatbox 使用 DeepSeek API 正常对话
- [x] AI Chatbox 具有当前题目上下文
- [x] AI Chatbox 快捷问题功能正常

### UI 验收

- [x] 工具栏配色与主题一致（白色圆角卡片 + 橙色边框）
- [x] 下拉菜单动画流畅
- [x] 移动端布局正确
- [x] 暖色 hover 效果正确
- [x] 移除了 APIStatusIndicator 组件
- [x] AI Chatbox 滑入/滑出动画流畅
- [x] AI Chatbox 配色与主题一致

### 兼容性验收

- [x] Chrome 最新版
- [ ] Safari 最新版（待测试）
- [ ] Firefox 最新版（待测试）
- [ ] 移动端 Safari/Chrome（待测试）

### 设计变更记录

1. **左侧边栏入口**：将「设置」改为「API 设置」，更明确
2. **移除顶部 API 设置按钮**：Dashboard 首页不再单独显示 API 设置按钮，保持界面简洁
3. **移除 APIStatusIndicator**：章节视图和 AI 模拟题视图中的 API 状态指示器已移除，因视觉效果不佳
4. **新增 AI Chatbox**：做题页面右侧新增 AI 智能助手聊天框，可通过工具栏按钮切换，使用 DeepSeek API

---

## 🚨 风险与缓解

| 风险 | 概率 | 影响 | 缓解措施 |
|------|------|------|----------|
| localStorage 隐私模式不可用 | 低 | 中 | 显示提示，会话级存储 |
| API 测试连接超时 | 中 | 低 | 添加超时处理和重试 |
| 下拉菜单层级冲突 | 低 | 中 | 使用 Portal 渲染 |
| AI 响应延迟 | 中 | 低 | 显示加载状态，友好提示 |

---

## 📁 交付物清单

### 新增文件

```
smartprep-ai/
├── components/
│   ├── SettingsPanel.tsx        # 设置面板
│   ├── DropdownMenu.tsx         # 通用下拉组件
│   ├── QuestionTypeFilter.tsx   # 题型筛选下拉
│   ├── QuestionSourceFilter.tsx # 题库来源下拉
│   ├── MoreActionsMenu.tsx      # 更多操作下拉
│   └── AIChatBox.tsx            # AI 智能助手聊天组件
└── hooks/
    └── useAPIKeys.ts            # API Key 管理
```

### 修改文件

```
smartprep-ai/
├── App.tsx                      # 集成设置面板、工具栏、AI Chatbox
├── types.ts                     # 添加 STORAGE_KEYS
├── index.css                    # 下拉菜单、工具栏、Chatbox 样式
└── services/
    └── deepseekServiceLangchain.ts  # API Key 读取逻辑
```

---

## 📝 执行命令

```bash
# 创建分支
git checkout -b 002-api-settings-toolbar-redesign

# 开发完成后
npm run build
npm run dev

# 提交
git add .
git commit -m "feat: API前端配置与工具栏重设计

- 新增设置面板支持前端配置 DeepSeek/Gemini API Key
- 新增通用下拉菜单组件
- 重构工具栏，将按钮整合为下拉菜单
- 优化配色与主界面暖色调一致"
```

---

**下一步**: 执行 `/speckit.tasks` 生成详细任务清单
