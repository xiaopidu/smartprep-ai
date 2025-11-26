# Phase 0 Research: UI美化重设计与收藏功能

**Date**: 2025-11-26  
**Status**: ✅ 完成

## 研究任务清单

本阶段针对 Technical Context 中需要澄清的技术问题进行研究。

---

## 1. CSS渐变方案研究

### 研究问题
暖色渐变主题（橙色到粉色）在 React + Tailwind 环境下的最佳实现方式

### 决策
采用 CSS 线性渐变 + Tailwind 自定义配置

### 理由
1. **原生CSS支持好**：`linear-gradient` 在所有现代浏览器中支持良好
2. **性能优秀**：GPU 加速渲染，不影响帧率
3. **易于维护**：可通过 CSS 变量或 Tailwind 配置统一管理

### 具体方案

```css
/* 主背景渐变 */
.bg-warm-gradient {
  background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 25%, #FCD34D 50%, #FB923C 75%, #F472B6 100%);
}

/* 卡片悬停渐变 */
.card-hover-gradient {
  background: linear-gradient(135deg, #FFF7ED 0%, #FFF1F2 100%);
}

/* 按钮渐变 */
.btn-warm-gradient {
  background: linear-gradient(90deg, #F97316 0%, #EC4899 100%);
}
```

### 色彩规范

| 用途 | 颜色代码 | 说明 |
|------|----------|------|
| 主渐变起点 | `#F97316` (orange-500) | 橙色 |
| 主渐变终点 | `#EC4899` (pink-500) | 粉色 |
| 背景浅色 | `#FFF7ED` (orange-50) | 浅橙背景 |
| 背景浅粉 | `#FFF1F2` (rose-50) | 浅粉背景 |
| 收藏按钮 | `#F472B6` (pink-400) | 粉色收藏 |
| 错题标记 | `#EF4444` (red-500) | 红色错题 |

### 替代方案（已否决）
- **Tailwind动态渐变**: 需要额外插件配置，增加构建复杂度
- **SVG背景**: 文件体积大，不够灵活

---

## 2. 虚拟滚动库选型

### 研究问题
当收藏题目超过 50 条时，如何保证列表滚动流畅（60fps）

### 决策
采用 **react-window** 库

### 理由

| 库名称 | 包大小 | Star数 | 优势 | 劣势 |
|--------|--------|--------|------|------|
| react-window | 6.4KB | 16k+ | 轻量、现代API、性能好 | 功能相对简单 |
| react-virtualized | 28KB | 26k+ | 功能丰富、文档完善 | 体积大、API复杂 |
| 自定义实现 | 0KB | - | 无依赖 | 开发成本高、bug风险 |

**选择 react-window 的关键因素**：
1. 包体积仅 6.4KB gzipped，适合刷题应用
2. VariableSizeList 组件支持动态高度项
3. 与 React 18/19 兼容良好
4. 学习曲线低，API 简洁

### 实现示例

```tsx
import { VariableSizeList as List } from 'react-window';

const FavoritesList: React.FC<{ items: Favorite[] }> = ({ items }) => {
  const getItemSize = (index: number) => {
    // 根据题目内容长度动态计算高度
    return items[index].hasNote ? 120 : 80;
  };

  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={getItemSize}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          <FavoriteItem favorite={items[index]} />
        </div>
      )}
    </List>
  );
};
```

### 性能阈值
- **0-50条**：普通渲染，无需虚拟化
- **50-200条**：启用虚拟滚动
- **200+条**：虚拟滚动 + 分页加载（每页50条）

### 替代方案（已否决）
- **react-virtualized**: 功能过于丰富，包体积过大
- **自定义IntersectionObserver方案**: 开发成本高，容易引入bug

---

## 3. localStorage容量评估

### 研究问题
收藏 + 笔记数据在 localStorage 中的存储需求和限制

### 决策
采用 JSON 序列化存储，设置警告阈值

### 理由

#### 存储需求估算

| 数据类型 | 单条大小估算 | 最大条数 | 总大小估算 |
|----------|--------------|----------|------------|
| Favorite | ~100 bytes | 200 | ~20 KB |
| QuestionNote | ~500 bytes (平均) | 200 | ~100 KB |
| 合计 | - | - | ~120 KB |

#### localStorage 限制

| 浏览器 | 限制 |
|--------|------|
| Chrome | 5 MB |
| Firefox | 10 MB |
| Safari | 5 MB |
| Edge | 5 MB |

**结论**：120KB << 5MB，完全在安全范围内

### 存储键规范

```typescript
// 已有键（保持兼容）
const STORAGE_KEYS = {
  QUESTIONS: 'sp_questions',      // 题库数据
  PROGRESS: 'sp_progress',        // 做题进度
  // 新增键
  FAVORITES: 'sp_favorites',      // 收藏列表
  NOTES: 'sp_notes',              // 笔记数据
};
```

### 数据结构设计

```typescript
// 收藏数据
interface FavoriteList {
  [questionId: string]: {
    questionId: string;
    favoriteAt: number;  // timestamp
    chapter: number;
  }
}

// 笔记数据
interface NoteList {
  [questionId: string]: {
    questionId: string;
    content: string;
    updatedAt: number;  // timestamp
  }
}
```

### 容量监控

```typescript
// 添加存储使用监控
function checkStorageUsage(): { used: number; limit: number; percentage: number } {
  let used = 0;
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      used += localStorage.getItem(key)?.length || 0;
    }
  }
  const limit = 5 * 1024 * 1024; // 5MB
  return {
    used,
    limit,
    percentage: (used / limit) * 100
  };
}
```

### 替代方案（已否决）
- **IndexedDB**: API复杂，对于 KB 级数据过度设计
- **云端存储**: 需要后端支持，违反"离线可用"约束

---

## 4. 双列布局响应式方案

### 研究问题
题目选项双列布局在不同屏幕尺寸下的适配策略

### 决策
采用 CSS Grid + 媒体查询

### 理由
1. **Grid布局**：天然支持等宽列布局
2. **响应式断点**：768px 以下回落为单列
3. **内容适配**：长文本自动换行不破坏布局

### 实现方案

```css
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

.option-item {
  min-height: 48px;
  padding: 12px 16px;
  word-break: break-word;
}
```

### 文字处理
- **字体大小**：桌面 16px，移动端 14px
- **行高**：1.5
- **最大行数**：不限制，自动换行

---

## 5. 收藏与错题并存显示方案

### 研究问题
当题目同时被标记为"错题"和"收藏"时，如何在UI上清晰展示

### 决策
采用叠层徽章显示

### 理由
1. **信息完整**：两种状态同时可见
2. **视觉区分**：红色错题 + 粉色收藏
3. **空间节约**：徽章体积小，不占用主内容区

### 实现方案

```tsx
// BadgeStack 组件
const BadgeStack: React.FC<{
  isMistake: boolean;
  isFavorite: boolean;
}> = ({ isMistake, isFavorite }) => (
  <div className="flex gap-1">
    {isMistake && (
      <span className="px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-700 flex items-center gap-1">
        <XCircle className="w-3 h-3" />
        错题
      </span>
    )}
    {isFavorite && (
      <span className="px-2 py-0.5 text-xs rounded-full bg-pink-100 text-pink-700 flex items-center gap-1">
        <Heart className="w-3 h-3" />
        收藏
      </span>
    )}
  </div>
);
```

### 位置规范
- 徽章显示在题目卡片顶部，题型标签右侧
- 多个徽章水平排列，间距 4px

---

## 研究结论汇总

| 技术点 | 决策 | 状态 |
|--------|------|------|
| CSS渐变 | 原生 CSS linear-gradient | ✅ 已确定 |
| 虚拟滚动 | react-window | ✅ 已确定 |
| 数据存储 | localStorage + JSON | ✅ 已确定 |
| 响应式布局 | CSS Grid + 768px断点 | ✅ 已确定 |
| 徽章显示 | 叠层徽章组件 | ✅ 已确定 |

**Phase 0 状态**: ✅ 全部 NEEDS CLARIFICATION 已解决，可进入 Phase 1
