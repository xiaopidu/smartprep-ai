# 功能规格说明：API 前端配置与工具栏重设计

**版本**: 1.1  
**日期**: 2025-11-26  
**状态**: 已完成  
**分支**: `002-api-settings-toolbar-redesign`

---

## 1. 概述

### 1.1 背景

当前 SmartPrep AI 应用存在两个用户体验问题：

1. **API 密钥配置不便**：DeepSeek 和 Gemini 的 API Key 需要在代码 `.env` 文件中配置，普通用户无法在不了解代码的情况下使用 AI 功能。
2. **工具栏布局杂乱**：顶部工具栏按钮过多（题型筛选、做题/背诵模式、错题开关、AI 模拟题开关、生成按钮等），视觉上显得拥挤，配色与主界面暖色调不协调。

### 1.2 目标

- 提供前端可视化的 API Key 配置入口，用户无需修改代码即可配置 AI 服务
- 重新设计工具栏布局，将功能按钮合理分组，使用下拉菜单减少视觉噪音
- 确保新设计与主界面暖色渐变主题保持一致

### 1.3 非目标

- 不涉及后端 API 代理（API Key 仍直接从前端调用）
- 不改变现有 AI 生成逻辑
- 不新增 AI 服务商

---

## 2. 用户故事

### US1: API Key 前端配置（P0 - 必须）

> 作为用户，我希望在应用界面中配置 DeepSeek 和 Gemini 的 API Key，这样我无需了解代码细节就能使用 AI 功能。

**验收标准**：
- [x] 左侧边栏「API 设置」入口可打开设置面板
- [x] 设置面板包含 DeepSeek API Key 和 Gemini API Key 两个输入框
- [x] API Key 以密码形式显示（可切换可见性）
- [x] 保存后 API Key 存储到 localStorage
- [x] 应用启动时优先从 localStorage 读取，若无则回退到环境变量
- [x] 提供「测试连接」按钮验证 API Key 有效性
- [x] 配置成功后显示绿色状态，失败显示红色提示

### US2: 工具栏下拉菜单整合（P1 - 重要）

> 作为用户，我希望顶部工具栏更简洁，将相关功能整合到下拉菜单中，减少视觉干扰。

**验收标准**：
- [x] 「题型筛选」整合为一个下拉菜单按钮，点击展开 4 个题型勾选项
- [x] 「题库来源」整合为一个下拉菜单，包含「默认题库」和「AI 模拟题」开关
- [x] 「更多操作」下拉菜单包含：只做错题、重刷本章、自定义 AI 生成
- [x] 保留「做题/背诵」模式切换作为主要操作（不放入下拉）
- [x] 下拉菜单点击外部自动关闭

### US3: 工具栏配色优化（P2 - 优化）

> 作为用户，我希望工具栏配色与主界面暖色调一致，视觉上更和谐。

**验收标准**：
- [x] 工具栏背景使用白色半透明 + 橙色边框（圆角设计）
- [x] 按钮使用暖色系（橙色、粉色渐变）
- [x] 下拉菜单使用白底 + 暖色边框
- [x] 激活状态使用橙色高亮
- [x] hover 状态使用柔和渐变过渡
- [x] 移除了 APIStatusIndicator 组件（视觉效果不佳）

### US4: AI 智能助手 Chatbox（P1 - 重要）

> 作为用户，我希望在做题时能随时向 AI 提问，获得题目相关的帮助和解释。

**验收标准**：
- [x] 做题页面右侧显示 AI Chatbox，可通过工具栏按钮切换显示/隐藏
- [x] Chatbox 使用已配置的 DeepSeek API Key（deepseek-chat 模型）
- [x] 支持实时对话，显示用户消息和 AI 回复
- [x] AI 回复具有当前题目上下文，能针对性回答
- [x] 提供快捷问题按钮（如"解释这道题"、"举个例子"等）
- [x] 展开/收起动画流畅美观（slide-in 效果）
- [x] 工具栏切换按钮有激活状态指示
- [x] 输入框支持回车发送
- [x] 正确处理 API 错误和网络异常

---

## 3. 功能详细设计

### 3.1 API Key 配置模块

#### 3.1.1 数据存储

```typescript
// localStorage 键名
const STORAGE_KEYS = {
  DEEPSEEK_API_KEY: 'sp_deepseek_api_key',
  GEMINI_API_KEY: 'sp_gemini_api_key',
};

// 读取优先级：localStorage > 环境变量
function getAPIKey(provider: 'deepseek' | 'gemini'): string | null {
  const storageKey = provider === 'deepseek' 
    ? STORAGE_KEYS.DEEPSEEK_API_KEY 
    : STORAGE_KEYS.GEMINI_API_KEY;
  
  const storedKey = localStorage.getItem(storageKey);
  if (storedKey) return storedKey;
  
  // 回退到环境变量
  return provider === 'deepseek' 
    ? import.meta.env.VITE_DEEPSEEK_API_KEY 
    : import.meta.env.VITE_GEMINI_API_KEY;
}
```

#### 3.1.2 设置面板 UI

```
┌─────────────────────────────────────────────┐
│  ⚙️ 设置                              [×]  │
├─────────────────────────────────────────────┤
│                                             │
│  🔑 API 密钥配置                            │
│  ─────────────────────────────────────────  │
│                                             │
│  DeepSeek API Key                           │
│  ┌───────────────────────────────────┐ 👁️  │
│  │ sk-xxxx••••••••••••••••           │      │
│  └───────────────────────────────────┘      │
│  [测试连接]  ✅ 连接成功                    │
│                                             │
│  Gemini API Key                             │
│  ┌───────────────────────────────────┐ 👁️  │
│  │ AIza••••••••••••••••              │      │
│  └───────────────────────────────────┘      │
│  [测试连接]  ⚠️ 未配置                      │
│                                             │
│  ─────────────────────────────────────────  │
│  💡 提示：API Key 仅保存在本地浏览器中，    │
│     不会上传到任何服务器。                  │
│                                             │
│              [保存设置]                     │
│                                             │
└─────────────────────────────────────────────┘
```

#### 3.1.3 组件接口

```typescript
interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface APIKeyInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onTest: () => Promise<boolean>;
  status: 'idle' | 'testing' | 'success' | 'error';
  errorMessage?: string;
}
```

### 3.2 工具栏重设计

#### 3.2.1 布局对比

**Before（当前）**:
```
[← 返回] [标题] | [单选☑][多选☑][判断☑][填空☑] | [做题][背诵] | [默认题库:开关][AI模拟题:开关] | [只做错题][重刷本章][自定义AI生成]
```

**After（重设计后）**:
```
[← 返回] [标题] | [📋 题型筛选 ▾] | [做题][背诵] | [📚 题库 ▾] | [⚙️ 更多 ▾]
```

#### 3.2.2 下拉菜单结构

**题型筛选下拉**:
```
┌────────────────────┐
│ ☑ 单选题           │
│ ☑ 多选题           │
│ ☑ 判断题           │
│ ☑ 填空题           │
├────────────────────┤
│ [全选] [全不选]    │
└────────────────────┘
```

**题库下拉**:
```
┌────────────────────┐
│ 📖 默认题库   [●]  │
│ 🤖 AI 模拟题  [○]  │
└────────────────────┘
```

**更多操作下拉**:
```
┌────────────────────┐
│ 🎯 只做错题        │
│ 🔄 重刷本章        │
├────────────────────┤
│ ✨ 自定义AI生成    │
└────────────────────┘
```

#### 3.2.3 组件接口

```typescript
interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'left' | 'right';
}

interface ToolbarProps {
  currentView: 'chapter' | 'mistakes';
  // ... 其他现有 props
}
```

### 3.3 配色方案

```css
/* 工具栏容器 */
.toolbar-redesign {
  background: rgba(255, 247, 237, 0.95); /* orange-50 半透明 */
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(251, 146, 60, 0.2); /* orange-400 */
}

/* 下拉触发按钮 */
.dropdown-trigger {
  background: white;
  border: 1px solid rgba(251, 146, 60, 0.3);
  color: #78350f; /* amber-900 */
}

.dropdown-trigger:hover {
  background: linear-gradient(135deg, #fff7ed 0%, #fff1f2 100%);
  border-color: rgba(251, 146, 60, 0.5);
}

/* 下拉菜单面板 */
.dropdown-panel {
  background: white;
  border: 1px solid rgba(251, 146, 60, 0.2);
  box-shadow: 0 4px 12px rgba(251, 146, 60, 0.15);
}

/* 激活状态 */
.toolbar-button-active {
  background: linear-gradient(135deg, #f97316 0%, #ec4899 100%);
  color: white;
}
```

---

## 4. 技术约束

### 4.1 兼容性要求

- API Key 存储使用 localStorage，需处理浏览器隐私模式
- 下拉菜单需支持键盘导航（Tab、Enter、Escape）
- 移动端下拉菜单需适配触摸操作

### 4.2 安全考量

- API Key 存储在 localStorage 中，仅客户端可访问
- 密码输入框默认隐藏内容
- 不在控制台或网络请求中暴露完整 API Key

### 4.3 性能要求

- 下拉菜单使用 `React.memo` 避免不必要重渲染
- 设置面板使用懒加载（仅在打开时渲染）

---

## 5. 边界情况

| 场景 | 处理方式 |
|------|----------|
| localStorage 不可用（隐私模式） | 显示警告提示，每次会话需重新输入 |
| API Key 格式错误 | 前端基础格式校验 + 后端连接测试 |
| 网络超时 | 测试连接显示超时错误，允许重试 |
| 同时配置多个 API Key | 每个服务独立测试和保存 |
| 清除浏览器数据 | API Key 丢失，需重新配置（提示用户备份） |

---

## 6. 依赖关系

### 6.1 文件依赖

| 新增/修改文件 | 依赖 | 说明 |
|---------------|------|------|
| `components/SettingsPanel.tsx` | 新增 | 设置面板组件 |
| `components/DropdownMenu.tsx` | 新增 | 通用下拉菜单组件 |
| `components/Toolbar.tsx` | 新增 | 重构后的工具栏组件 |
| `components/AIChatBox.tsx` | 新增 | AI 智能助手聊天组件 |
| `hooks/useAPIKeys.ts` | 新增 | API Key 管理 Hook |
| `services/deepseekServiceLangchain.ts` | 修改 | 读取 API Key 逻辑 |
| `App.tsx` | 修改 | 集成设置面板、新工具栏和 AI Chatbox |
| `index.css` | 修改 | 添加下拉菜单、工具栏和 Chatbox 样式 |
| `types.ts` | 修改 | 添加 STORAGE_KEYS 常量 |

### 6.2 第三方依赖

无新增依赖，使用现有：
- `lucide-react` - 图标
- React 内置 Hooks

---

## 7. 验收测试用例

### TC1: API Key 配置流程

1. 点击左侧边栏「设置」图标
2. 输入 DeepSeek API Key
3. 点击「测试连接」
4. 验证显示「连接成功」
5. 点击「保存设置」
6. 刷新页面
7. 重新打开设置，验证 API Key 已保存

### TC2: 工具栏下拉菜单

1. 进入任意章节
2. 点击「题型筛选」下拉
3. 取消勾选「判断题」
4. 验证题目列表中不再显示判断题
5. 点击页面其他区域
6. 验证下拉菜单关闭

### TC3: 配色一致性

1. 在不同页面验证工具栏背景色
2. 验证下拉菜单 hover 效果
3. 验证激活按钮的渐变色
4. 验证移动端适配

---

## 8. 里程碑

| 阶段 | 内容 | 预估工时 |
|------|------|----------|
| Phase 1 | API Key 配置模块 | 0.5 天 |
| Phase 2 | 下拉菜单组件 | 0.5 天 |
| Phase 3 | 工具栏重构 | 0.5 天 |
| Phase 4 | 配色优化 + 测试 | 0.5 天 |
| Phase 5 | AI Chatbox 智能助手 | 0.5 天 |

**总计**: 2.5 天

---

## 附录

### A. 设计参考

- 主题色：`#f97316`（orange-500）、`#ec4899`（pink-500）
- 渐变：`linear-gradient(135deg, #fff7ed, #fff1f2, #fee2e2)`
- 圆角：`8px`（按钮）、`12px`（面板）

### B. 图标使用

| 功能 | 图标 | Lucide 名称 |
|------|------|-------------|
| 设置 | ⚙️ | `Settings` |
| 题型筛选 | 📋 | `ClipboardList` |
| 题库 | 📚 | `Library` |
| 更多 | ⋯ | `MoreHorizontal` |
| 眼睛（显示密码） | 👁️ | `Eye` / `EyeOff` |
| 测试连接 | 🔗 | `Link` |
| AI 助手 | 💬 | `MessageCircle` |
| 发送消息 | ➤ | `Send` |
| 机器人 | 🤖 | `Bot` |
| 用户 | 👤 | `User` |
| 闪电 | ⚡ | `Zap` |
| 灯泡 | 💡 | `Lightbulb` |
| 书本 | 📖 | `BookOpen` |
