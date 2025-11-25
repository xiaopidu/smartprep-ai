import { Question, QuestionType } from '../types';
import chapter1Questions from './chapterQuestions/chapter1Questions';
import chapter2Questions from './chapterQuestions/chapter2Questions';
import chapter3Questions from './chapterQuestions/chapter3Questions';
import chapter4Questions from './chapterQuestions/chapter4Questions';
import chapter5Questions from './chapterQuestions/chapter5Questions';
import chapter6Questions from './chapterQuestions/chapter6Questions';
import chapter7Questions from './chapterQuestions/chapter7Questions';
import chapter8Questions from './chapterQuestions/chapter8Questions';

// 预加载的标准题库题目 - 从按章节拆分的题库文件合并而来
export const STATIC_QUESTIONS: Question[] = [
  ...chapter1Questions,
  ...chapter2Questions,
  ...chapter3Questions,
  ...chapter4Questions,
  ...chapter5Questions,
  ...chapter6Questions,
  ...chapter7Questions,
  ...chapter8Questions
];

// 工具函数：获取指定章节的题目
export const getChapterQuestions = (chapterId: number, includeGenerated: boolean = false): Question[] => {
  let questions = STATIC_QUESTIONS.filter(q => 
    q.chapterId === chapterId && 
    (includeGenerated || !q.id.includes('_generated_'))
  );
  
  return questions;
};

// 工具函数：检查题目是否为AI生成
export const isGeneratedQuestion = (questionId: string): boolean => {
  return questionId.includes('_generated_');
};
