# Quick Start Guide: UI美化重设计与收藏功能

**Date**: 2025-11-26  
**Branch**: `001-ui-redesign-favorites`

## 概述

本指南帮助开发者快速理解和开始实现 UI 美化与收藏功能。

---

## 1. 开发环境准备

### 1.1 进入项目目录

```bash
cd e:\Project\Agent_Project\smartprep-ai\smartprep-ai
```

### 1.2 安装依赖

```bash
# 安装现有依赖
npm install

# 安装新依赖（虚拟滚动）
npm install react-window
npm install -D @types/react-window
```

### 1.3 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看应用。

---

## 2. 文件修改清单

### 2.1 需要修改的文件

| 文件 | 修改内容 |
|------|----------|
| `types.ts` | 添加 Favorite, QuestionNote 类型定义 |
| `App.tsx` | 添加收藏/笔记状态管理，导航优化 |
| `index.css` | 添加渐变背景、动画效果 |
| `components/QuestionCard.tsx` | 双列布局、收藏按钮、笔记入口 |
| `components/ChapterCard.tsx` | 配色方案调整 |

### 2.2 需要新增的文件

| 文件 | 功能说明 |
|------|----------|
| `components/FavoritesPanel.tsx` | 收藏夹面板 |
| `components/NoteEditor.tsx` | 笔记编辑器 |
| `components/VirtualScrollList.tsx` | 虚拟滚动列表 |
| `components/BadgeStack.tsx` | 叠层徽章 |
| `components/FavoriteButton.tsx` | 收藏按钮 |
| `hooks/useFavorites.ts` | 收藏管理 Hook |
| `hooks/useNotes.ts` | 笔记管理 Hook |
| `styles/theme.ts` | 主题配置 |
| `services/storageService.ts` | localStorage 封装 |

---

## 3. 快速实现步骤

### Step 1: 添加类型定义

在 `types.ts` 末尾添加：

```typescript
// 收藏相关类型
export interface Favorite {
  questionId: string;
  favoriteAt: number;
  chapter: number;
}

export interface FavoriteList {
  [questionId: string]: Favorite;
}

// 笔记相关类型
export interface QuestionNote {
  questionId: string;
  content: string;
  updatedAt: number;
}

export interface NoteList {
  [questionId: string]: QuestionNote;
}

// 存储键常量
export const STORAGE_KEYS = {
  QUESTIONS: 'sp_questions',
  PROGRESS: 'sp_progress',
  FAVORITES: 'sp_favorites',
  NOTES: 'sp_notes',
} as const;
```

### Step 2: 创建 useFavorites Hook

创建 `hooks/useFavorites.ts`：

```typescript
import { useState, useEffect, useCallback } from 'react';
import { Favorite, FavoriteList, STORAGE_KEYS } from '../types';

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteList>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = useCallback((questionId: string, chapter: number) => {
    setFavorites(prev => ({
      ...prev,
      [questionId]: {
        questionId,
        favoriteAt: Date.now(),
        chapter,
      }
    }));
  }, []);

  const removeFavorite = useCallback((questionId: string) => {
    setFavorites(prev => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  }, []);

  const toggleFavorite = useCallback((questionId: string, chapter: number) => {
    if (favorites[questionId]) {
      removeFavorite(questionId);
    } else {
      addFavorite(questionId, chapter);
    }
  }, [favorites, addFavorite, removeFavorite]);

  const isFavorite = useCallback((questionId: string) => {
    return questionId in favorites;
  }, [favorites]);

  const getAllFavorites = useCallback(() => {
    return Object.values(favorites).sort((a, b) => b.favoriteAt - a.favoriteAt);
  }, [favorites]);

  const count = Object.keys(favorites).length;

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    getAllFavorites,
    count,
  };
}
```

### Step 3: 添加渐变背景样式

在 `index.css` 添加：

```css
/* 暖色渐变背景 */
.bg-warm-gradient {
  background: linear-gradient(135deg, 
    #FFF7ED 0%,    /* orange-50 */
    #FFF1F2 50%,   /* rose-50 */
    #FEE2E2 100%   /* red-100 */
  );
}

/* 收藏按钮渐变 */
.btn-favorite-gradient {
  background: linear-gradient(90deg, #F97316 0%, #EC4899 100%);
}

/* 收藏按钮动画 */
.favorite-pulse {
  animation: favoritePulse 0.3s ease-out;
}

@keyframes favoritePulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

/* 双列选项布局 */
.options-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

@media (max-width: 768px) {
  .options-grid {
    grid-template-columns: 1fr;
  }
}
```

### Step 4: 修改 QuestionCard 选项布局

将选项区域从单列改为双列：

```tsx
{/* 修改前：单列布局 */}
<div className="space-y-3 mb-8">
  {options?.map((option, idx) => (
    <button key={idx} ...>
      {option}
    </button>
  ))}
</div>

{/* 修改后：双列布局 */}
<div className="options-grid mb-8">
  {options?.map((option, idx) => (
    <button key={idx} ...>
      {option}
    </button>
  ))}
</div>
```

### Step 5: 添加收藏按钮到题目卡片

在 QuestionCard 的标签区域添加收藏按钮：

```tsx
import { Heart } from 'lucide-react';

// 在 Header Tags 区域添加
<button
  onClick={() => onToggleFavorite?.(question.id)}
  className={`p-2 rounded-full transition-all ${
    isFavorite 
      ? 'text-pink-500 bg-pink-50' 
      : 'text-slate-400 hover:text-pink-400 hover:bg-pink-50'
  }`}
>
  <Heart 
    className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} 
  />
</button>
```

---

## 4. 测试验证清单

### 4.1 收藏功能测试

- [ ] 点击收藏按钮，按钮变为实心粉色
- [ ] 再次点击，取消收藏，按钮恢复空心
- [ ] 刷新页面，收藏状态保持
- [ ] 收藏夹栏目显示正确的题目数量badge

### 4.2 双列布局测试

- [ ] 桌面端：选项显示为2列
- [ ] 移动端（<768px）：选项显示为1列
- [ ] 长文本选项正确换行

### 4.3 配色测试

- [ ] 背景显示暖色渐变
- [ ] 按钮悬停有明显反馈
- [ ] 收藏和错题徽章颜色区分明确

---

## 5. 常见问题

### Q1: localStorage 数据如何清除？

在浏览器控制台执行：

```javascript
localStorage.removeItem('sp_favorites');
localStorage.removeItem('sp_notes');
```

### Q2: 如何查看当前收藏数据？

```javascript
JSON.parse(localStorage.getItem('sp_favorites'));
```

### Q3: 虚拟滚动何时生效？

当收藏题目超过 50 条时自动启用。

---

## 6. 参考文档

- [spec.md](./spec.md) - 功能规格说明
- [research.md](./research.md) - 技术研究结论
- [data-model.md](./data-model.md) - 数据模型定义
- [contracts/components.ts](./contracts/components.ts) - 组件接口定义

---

## Quick Start 状态

✅ 开发环境准备完成  
✅ 文件清单确定  
✅ 关键代码示例提供  
✅ 测试验证清单准备

**可开始**: 运行 `/speckit.tasks` 生成详细实现任务
