/**
 * Component Contracts: UI美化重设计与收藏功能
 * 
 * 本文件定义所有新增和修改组件的 Props 接口
 * 作为组件实现的契约文档
 * 
 * @date 2025-11-26
 */

import { LucideIcon } from 'lucide-react';
import { Question, UserProgress, QuestionType } from '../../smartprep-ai/types';

// ============================================================================
// 数据类型定义
// ============================================================================

/**
 * 单条收藏记录
 */
export interface Favorite {
  questionId: string;
  favoriteAt: number;
  chapter: number;
}

/**
 * 收藏列表（对象形式）
 */
export interface FavoriteList {
  [questionId: string]: Favorite;
}

/**
 * 单条笔记记录
 */
export interface QuestionNote {
  questionId: string;
  content: string;
  updatedAt: number;
}

/**
 * 笔记列表（对象形式）
 */
export interface NoteList {
  [questionId: string]: QuestionNote;
}

/**
 * 题目综合状态
 */
export interface QuestionStatus {
  isFavorite: boolean;
  isMistake: boolean;
  hasNote: boolean;
}

// ============================================================================
// 新增组件接口
// ============================================================================

/**
 * 收藏夹面板组件
 * 显示用户所有收藏的题目列表
 */
export interface FavoritesPanelProps {
  /** 收藏列表数据 */
  favorites: FavoriteList;
  
  /** 题目数据，用于显示题目内容 */
  questions: Question[];
  
  /** 做题进度，用于显示错题状态 */
  progress: Record<string, UserProgress>;
  
  /** 笔记数据，用于显示笔记标识 */
  notes: NoteList;
  
  /** 当用户点击题目时的回调 */
  onQuestionClick: (questionId: string) => void;
  
  /** 当用户取消收藏时的回调 */
  onRemoveFavorite: (questionId: string) => void;
  
  /** 可选：按章节筛选 */
  filterChapter?: number;
}

/**
 * 笔记编辑器组件
 * 支持为题目添加/编辑笔记
 */
export interface NoteEditorProps {
  /** 题目ID */
  questionId: string;
  
  /** 当前笔记内容（如果已有） */
  initialContent?: string;
  
  /** 是否展开显示 */
  isExpanded: boolean;
  
  /** 切换展开/收起状态 */
  onToggleExpand: () => void;
  
  /** 保存笔记回调 */
  onSave: (questionId: string, content: string) => void;
  
  /** 删除笔记回调 */
  onDelete: (questionId: string) => void;
  
  /** 可选：占位符文本 */
  placeholder?: string;
}

/**
 * 虚拟滚动列表组件
 * 用于渲染大量收藏题目
 */
export interface VirtualScrollListProps<T> {
  /** 列表数据 */
  items: T[];
  
  /** 列表高度（像素） */
  height: number;
  
  /** 获取单个项目高度的函数 */
  getItemSize: (index: number) => number;
  
  /** 渲染单个项目的函数 */
  renderItem: (item: T, index: number, style: React.CSSProperties) => React.ReactNode;
  
  /** 可选：空状态显示内容 */
  emptyContent?: React.ReactNode;
  
  /** 可选：虚拟化阈值（默认50） */
  virtualizationThreshold?: number;
}

/**
 * 叠层徽章组件
 * 显示题目的错题和收藏状态
 */
export interface BadgeStackProps {
  /** 是否为错题 */
  isMistake: boolean;
  
  /** 是否已收藏 */
  isFavorite: boolean;
  
  /** 可选：是否有笔记 */
  hasNote?: boolean;
  
  /** 可选：额外的CSS类名 */
  className?: string;
}

/**
 * 收藏按钮组件
 * 可复用的收藏切换按钮
 */
export interface FavoriteButtonProps {
  /** 当前是否已收藏 */
  isFavorite: boolean;
  
  /** 点击切换收藏状态 */
  onToggle: () => void;
  
  /** 可选：按钮尺寸 */
  size?: 'sm' | 'md' | 'lg';
  
  /** 可选：是否显示动画 */
  animated?: boolean;
  
  /** 可选：是否禁用 */
  disabled?: boolean;
}

// ============================================================================
// 修改组件接口（扩展现有Props）
// ============================================================================

/**
 * QuestionCard 扩展属性
 * 在现有基础上添加收藏和笔记相关功能
 */
export interface QuestionCardExtendedProps {
  /** 现有属性 */
  question: Question;
  progress?: UserProgress;
  mistakeCount?: number;
  showAnswer?: boolean;
  onAnswer: (questionId: string, answer: string | string[], isCorrect: boolean) => void;
  
  /** 新增：是否已收藏 */
  isFavorite?: boolean;
  
  /** 新增：切换收藏状态 */
  onToggleFavorite?: (questionId: string) => void;
  
  /** 新增：当前笔记内容 */
  noteContent?: string;
  
  /** 新增：保存笔记 */
  onSaveNote?: (questionId: string, content: string) => void;
  
  /** 新增：删除笔记 */
  onDeleteNote?: (questionId: string) => void;
  
  /** 新增：是否使用双列布局（默认true） */
  useGridLayout?: boolean;
}

// ============================================================================
// Hook 接口定义
// ============================================================================

/**
 * useFavorites Hook 返回类型
 */
export interface UseFavoritesReturn {
  /** 收藏列表 */
  favorites: FavoriteList;
  
  /** 添加收藏 */
  addFavorite: (questionId: string, chapter: number) => void;
  
  /** 移除收藏 */
  removeFavorite: (questionId: string) => void;
  
  /** 切换收藏状态 */
  toggleFavorite: (questionId: string, chapter: number) => void;
  
  /** 检查是否已收藏 */
  isFavorite: (questionId: string) => boolean;
  
  /** 获取所有收藏数组 */
  getAllFavorites: () => Favorite[];
  
  /** 按章节筛选 */
  getFavoritesByChapter: (chapterId: number) => Favorite[];
  
  /** 收藏总数 */
  count: number;
}

/**
 * useNotes Hook 返回类型
 */
export interface UseNotesReturn {
  /** 笔记列表 */
  notes: NoteList;
  
  /** 保存笔记 */
  saveNote: (questionId: string, content: string) => void;
  
  /** 删除笔记 */
  deleteNote: (questionId: string) => void;
  
  /** 获取笔记 */
  getNote: (questionId: string) => QuestionNote | null;
  
  /** 检查是否有笔记 */
  hasNote: (questionId: string) => boolean;
  
  /** 有笔记的题目数量 */
  count: number;
}

// ============================================================================
// 主题配置接口
// ============================================================================

/**
 * 渐变色配置
 */
export interface GradientConfig {
  /** 渐变起点颜色 */
  from: string;
  
  /** 渐变终点颜色 */
  to: string;
  
  /** 渐变角度（度） */
  angle?: number;
  
  /** 可选的中间色 */
  via?: string;
}

/**
 * 主题配置
 */
export interface ThemeConfig {
  /** 主渐变（背景） */
  primaryGradient: GradientConfig;
  
  /** 按钮渐变 */
  buttonGradient: GradientConfig;
  
  /** 卡片悬停渐变 */
  cardHoverGradient: GradientConfig;
  
  /** 收藏颜色 */
  favoriteColor: string;
  
  /** 错题颜色 */
  mistakeColor: string;
  
  /** 笔记颜色 */
  noteColor: string;
}

// ============================================================================
// 导航相关接口
// ============================================================================

/**
 * 导航项类型
 */
export type NavItemType = 
  | 'dashboard' 
  | 'chapter' 
  | 'mistakes' 
  | 'favorites' 
  | 'ai' 
  | 'settings';

/**
 * 导航项定义
 */
export interface NavItem {
  id: string;
  type: NavItemType;
  label: string;
  icon: LucideIcon;
  badge?: number;
  group?: string;
}

/**
 * 导航面板属性
 */
export interface NavPanelProps {
  /** 导航项列表 */
  items: NavItem[];
  
  /** 当前激活项ID */
  activeId: string;
  
  /** 切换导航项 */
  onNavigate: (id: string) => void;
  
  /** 是否使用紧凑模式 */
  compact?: boolean;
}
