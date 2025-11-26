export enum QuestionType {
  SINGLE = 'SINGLE',
  MULTIPLE = 'MULTIPLE',
  TRUE_FALSE = 'TRUE_FALSE',
  FILL_BLANK = 'FILL_BLANK'
}

export interface Question {
  id: string;
  chapterId: number;
  type: QuestionType;
  content: string;
  options?: string[]; // For single/multi
  correctAnswer: string | string[]; // string for single/tf/fill, string[] for multi
  explanation: string;
  isAI?: boolean; // 标记是否为AI生成的题目
}

export interface UserProgress {
  questionId: string;
  userAnswer: string | string[] | null;
  isCorrect: boolean;
  mistakeCount: number;
  lastAttemptedAt: number;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
}

// ============================================================================
// 收藏与笔记功能类型定义
// ============================================================================

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

/**
 * 题目综合状态
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
 * localStorage 存储键定义
 * 所有键使用 sp_ 前缀保持一致性
 */
export const STORAGE_KEYS = {
  /** 题库数据 */
  QUESTIONS: 'sp_questions',
  
  /** 做题进度 */
  PROGRESS: 'sp_progress',
  
  /** 收藏列表 */
  FAVORITES: 'sp_favorites',
  
  /** 笔记数据 */
  NOTES: 'sp_notes',
  
  /** DeepSeek API Key */
  DEEPSEEK_API_KEY: 'sp_deepseek_api_key',
  
  /** Gemini API Key */
  GEMINI_API_KEY: 'sp_gemini_api_key',
} as const;

export const CHAPTERS: Chapter[] = [
  { id: 1, title: '第一章 人工智能概览', description: '本章涵盖了人工智能的基本概念、发展历程和应用场景。' },
  { id: 2, title: '第二章 机器学习详解', description: '本章涵盖了机器学习的基本原理、算法分类和应用方法。' },
  { id: 3, title: '第三章 深度学习基础', description: '本章涵盖了深度学习的基本概念、神经网络结构和训练方法。' },
  { id: 4, title: '第四章 卷积神经网络CNN', description: '本章涵盖了CNN的结构、原理和在计算机视觉中的应用。' },
  { id: 5, title: '第五章 循环神经网络RNN', description: '本章涵盖了RNN的结构、原理和在序列数据处理中的应用。' },
  { id: 6, title: '第六章 Transformer与大模型', description: '本章涵盖了Transformer架构和大模型的相关知识。' },
  { id: 7, title: '第七章 AI开发框架', description: '本章涵盖了主流AI开发框架的使用方法和最佳实践。' },
  { id: 8, title: '第八章 华为AI解决方案', description: '本章涵盖了华为AI解决方案的架构和应用场景。' }
];
