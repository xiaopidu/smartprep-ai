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
