# Data Model: UI美化重设计与收藏功能

**Date**: 2025-11-26  
**Status**: ✅ 完成

## 概述

本文档定义收藏功能和笔记功能的数据模型，以及与现有类型系统的整合方案。

---

## 1. 新增类型定义

### 1.1 收藏记录（Favorite）

```typescript
/**
 * 单条收藏记录
 * 存储用户收藏的题目信息
 */
export interface Favorite {
  /** 题目唯一标识符，关联 Question.id */
  questionId: string;
  
  /** 收藏时间戳（毫秒），用于按时间排序 */
  favoriteAt: number;
  
  /** 所属章节ID，用于快速筛选，关联 Question.chapterId */
  chapter: number;
}

/**
 * 收藏列表
 * 使用对象形式存储，支持 O(1) 查询
 */
export interface FavoriteList {
  [questionId: string]: Favorite;
}
```

### 1.2 题目笔记（QuestionNote）

```typescript
/**
 * 单条笔记记录
 * 存储用户为题目添加的笔记
 */
export interface QuestionNote {
  /** 题目唯一标识符，关联 Question.id */
  questionId: string;
  
  /** 笔记内容，支持多行文本 */
  content: string;
  
  /** 最后更新时间戳（毫秒） */
  updatedAt: number;
}

/**
 * 笔记列表
 * 使用对象形式存储，支持 O(1) 查询
 */
export interface NoteList {
  [questionId: string]: QuestionNote;
}
```

### 1.3 存储键常量

```typescript
/**
 * localStorage 存储键定义
 * 所有键使用 sp_ 前缀保持一致性
 */
export const STORAGE_KEYS = {
  /** 题库数据（已有） */
  QUESTIONS: 'sp_questions',
  
  /** 做题进度（已有） */
  PROGRESS: 'sp_progress',
  
  /** 收藏列表（新增） */
  FAVORITES: 'sp_favorites',
  
  /** 笔记数据（新增） */
  NOTES: 'sp_notes',
} as const;
```

---

## 2. 现有类型关联

### 2.1 与 Question 的关系

```typescript
// 现有类型（保持不变）
export interface Question {
  id: string;           // <- Favorite.questionId 关联
  chapterId: number;    // <- Favorite.chapter 关联
  type: QuestionType;
  content: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  isAI?: boolean;
}
```

### 2.2 与 UserProgress 的关系

```typescript
// 现有类型（保持不变）
export interface UserProgress {
  questionId: string;   // 与 Favorite.questionId 共享同一标识
  userAnswer: string | string[] | null;
  isCorrect: boolean;
  mistakeCount: number; // 用于判断是否为"错题"
  lastAttemptedAt: number;
}
```

### 2.3 数据关联图

```
┌─────────────────────────────────────────────────────────────┐
│                         Question                            │
│  id ─────────────────────────────────────────────────┐     │
│  chapterId ──────────────────────────────────┐       │     │
│  type, content, options, correctAnswer...    │       │     │
└──────────────────────────────────────────────┼───────┼─────┘
                                               │       │
                    ┌──────────────────────────┘       │
                    │                                  │
                    ▼                                  ▼
┌───────────────────────────┐     ┌───────────────────────────┐
│      Favorite             │     │      QuestionNote         │
│  questionId ◄─────────────┼─────┼── questionId              │
│  chapter ◄────────────────┘     │   content                 │
│  favoriteAt                     │   updatedAt               │
└───────────────────────────┘     └───────────────────────────┘
                    │
                    │ 共享 questionId
                    ▼
┌───────────────────────────┐
│      UserProgress         │
│  questionId ◄─────────────┘
│  mistakeCount (>0 = 错题)
│  isCorrect, userAnswer...
└───────────────────────────┘
```

---

## 3. 状态判断逻辑

### 3.1 题目状态判断

```typescript
/**
 * 题目状态标识
 */
export interface QuestionStatus {
  /** 是否已收藏 */
  isFavorite: boolean;
  
  /** 是否为错题（mistakeCount > 0） */
  isMistake: boolean;
  
  /** 是否有笔记 */
  hasNote: boolean;
}

/**
 * 获取题目的综合状态
 */
function getQuestionStatus(
  questionId: string,
  favorites: FavoriteList,
  progress: Record<string, UserProgress>,
  notes: NoteList
): QuestionStatus {
  return {
    isFavorite: questionId in favorites,
    isMistake: (progress[questionId]?.mistakeCount ?? 0) > 0,
    hasNote: questionId in notes && notes[questionId].content.trim() !== '',
  };
}
```

---

## 4. localStorage 数据结构示例

### 4.1 sp_favorites

```json
{
  "ch1_q1": {
    "questionId": "ch1_q1",
    "favoriteAt": 1732636800000,
    "chapter": 1
  },
  "ch3_q5": {
    "questionId": "ch3_q5",
    "favoriteAt": 1732640400000,
    "chapter": 3
  }
}
```

### 4.2 sp_notes

```json
{
  "ch1_q1": {
    "questionId": "ch1_q1",
    "content": "这道题的关键点是理解监督学习与无监督学习的区别...",
    "updatedAt": 1732636900000
  },
  "ch2_q3": {
    "questionId": "ch2_q3",
    "content": "记住：决策树的分裂标准包括信息增益、基尼系数等",
    "updatedAt": 1732641000000
  }
}
```

---

## 5. 数据操作接口

### 5.1 收藏操作

```typescript
interface FavoritesOperations {
  /** 添加收藏 */
  addFavorite: (questionId: string, chapter: number) => void;
  
  /** 移除收藏 */
  removeFavorite: (questionId: string) => void;
  
  /** 切换收藏状态 */
  toggleFavorite: (questionId: string, chapter: number) => void;
  
  /** 检查是否已收藏 */
  isFavorite: (questionId: string) => boolean;
  
  /** 获取所有收藏 */
  getAllFavorites: () => Favorite[];
  
  /** 按章节筛选收藏 */
  getFavoritesByChapter: (chapterId: number) => Favorite[];
  
  /** 获取收藏总数 */
  getFavoritesCount: () => number;
}
```

### 5.2 笔记操作

```typescript
interface NotesOperations {
  /** 保存笔记（新增或更新） */
  saveNote: (questionId: string, content: string) => void;
  
  /** 删除笔记 */
  deleteNote: (questionId: string) => void;
  
  /** 获取笔记内容 */
  getNote: (questionId: string) => QuestionNote | null;
  
  /** 检查是否有笔记 */
  hasNote: (questionId: string) => boolean;
  
  /** 获取所有有笔记的题目ID列表 */
  getQuestionIdsWithNotes: () => string[];
}
```

---

## 6. 数据验证规则

### 6.1 收藏数据验证

```typescript
function validateFavorite(data: unknown): data is Favorite {
  if (typeof data !== 'object' || data === null) return false;
  const f = data as Record<string, unknown>;
  return (
    typeof f.questionId === 'string' &&
    f.questionId.length > 0 &&
    typeof f.favoriteAt === 'number' &&
    f.favoriteAt > 0 &&
    typeof f.chapter === 'number' &&
    f.chapter >= 1 && f.chapter <= 8
  );
}
```

### 6.2 笔记数据验证

```typescript
function validateNote(data: unknown): data is QuestionNote {
  if (typeof data !== 'object' || data === null) return false;
  const n = data as Record<string, unknown>;
  return (
    typeof n.questionId === 'string' &&
    n.questionId.length > 0 &&
    typeof n.content === 'string' &&
    typeof n.updatedAt === 'number' &&
    n.updatedAt > 0
  );
}
```

---

## 7. 导航结构调整

### 7.1 左侧导航数据模型

```typescript
/**
 * 导航项类型
 */
type NavItemType = 'dashboard' | 'chapter' | 'mistakes' | 'favorites' | 'ai' | 'settings';

/**
 * 导航项定义
 */
interface NavItem {
  id: string;
  type: NavItemType;
  label: string;
  icon: LucideIcon;
  badge?: number;  // 可选的数量徽章
  group?: string;  // 分组名称
}

/**
 * 导航结构定义
 */
const NAV_STRUCTURE: NavItem[] = [
  { id: 'dashboard', type: 'dashboard', label: '概览', icon: LayoutDashboard },
  
  // 章节组
  { id: 'ch1', type: 'chapter', label: '第一章', icon: BookOpen, group: '章节练习' },
  { id: 'ch2', type: 'chapter', label: '第二章', icon: BookOpen, group: '章节练习' },
  // ... 其他章节
  
  // 学习中心组
  { id: 'mistakes', type: 'mistakes', label: '错题集', icon: AlertOctagon, group: '学习中心' },
  { id: 'favorites', type: 'favorites', label: '收藏夹', icon: Heart, group: '学习中心' },
  
  // 其他
  { id: 'ai', type: 'ai', label: 'AI生成', icon: Sparkles },
  { id: 'settings', type: 'settings', label: '设置', icon: Settings },
];
```

---

## 8. 兼容性说明

### 8.1 向后兼容

- 现有 `sp_questions` 和 `sp_progress` 数据结构保持不变
- 新增 `sp_favorites` 和 `sp_notes` 键不会影响现有功能
- 升级后首次加载时，收藏列表和笔记列表为空

### 8.2 数据迁移

无需数据迁移，新功能使用独立存储键。

---

## Data Model 状态

✅ 所有实体定义完成  
✅ 与现有类型系统整合完成  
✅ 存储键规范确定  
✅ 操作接口定义完成

**可进入下一步**: 创建 contracts/ 组件接口定义
