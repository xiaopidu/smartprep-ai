import { QuestionType, Question } from "../types";
import fs from 'fs';
import path from 'path';

// 题库文件路径映射
const HANDBOOK_FILES: Record<number, string> = {
  1: "第1部分题库_人工智能概览.md",
  2: "第2部分题库_机器学习详解.md",
  3: "第3部分题库_深度学习基础.md",
  4: "第4部分题库_卷积神经网络CNN.md",
  5: "第5部分题库_循环神经网络RNN.md",
  6: "第6部分题库_Transformer与大模型.md",
  7: "第7部分题库_AI开发框架.md",
  8: "第8部分题库_华为AI解决方案.md"
};

/**
 * 从handbooks文件夹读取题库文件
 */
export const readHandbookQuestions = async (chapterId: number): Promise<Question[]> => {
  const filename = HANDBOOK_FILES[chapterId];
  if (!filename) {
    throw new Error(`未找到章节${chapterId}对应的题库文件`);
  }

  // 构建文件路径（注意：在浏览器环境中这需要适配）
  const filePath = path.join('/Users/by/git/HCIA4_0/handbooks', filename);
  
  try {
    // 在Node.js环境中使用fs读取文件
    const content = fs.readFileSync(filePath, 'utf-8');
    return parseHandbookContent(content, chapterId);
  } catch (error) {
    console.error(`读取题库文件失败: ${error}`);
    // 由于在浏览器环境中直接读取文件系统会受限
    // 这里可以返回一个空数组或抛出适当的错误
    return [];
  }
};

/**
 * 解析题库文件内容并转换为Question数组
 */
const parseHandbookContent = (content: string, chapterId: number): Question[] => {
  const questions: Question[] = [];
  const now = Date.now();
  let questionCount = 0;

  // 解析单选题
  const singleChoiceRegex = /(\d+)\.\s*\*\*([^\*]+)\*\*\s*\n\s*([A-Z]\. [^\n]+\n)+/g;
  let match;
  
  while ((match = singleChoiceRegex.exec(content)) !== null) {
    const questionNumber = match[1];
    const questionText = match[2].trim();
    
    // 提取选项
    const optionsText = match[0].substring(match[0].indexOf(questionText) + questionText.length);
    const options = [];
    let correctOption = '';
    
    const optionRegex = /([A-Z])\. ([^\n]+)/g;
    let optionMatch;
    
    while ((optionMatch = optionRegex.exec(optionsText)) !== null) {
      const optionLabel = optionMatch[1];
      const optionText = optionMatch[2].trim();
      options.push(optionText.replace('√', '')); // 移除正确答案标记
      if (optionText.includes('√')) {
        correctOption = optionLabel;
      }
    }
    
    questions.push({
      id: `ch${chapterId}_handbook_${now}_${questionCount++}`,
      chapterId: chapterId,
      type: QuestionType.SINGLE,
      content: questionText,
      options: options,
      correctAnswer: correctOption,
      explanation: ''
    });
  }

  // 解析多选题（简化版，实际可能需要更复杂的解析）
  const multipleChoiceRegex = /(\d+)\.\s*\*\*([^\*]+)\*\*\s*\n\s*([A-Z]\. [^\n]+\n)+/g;
  // 这里可以添加多选题的解析逻辑

  // 解析判断题
  const trueFalseRegex = /(\d+)\. ([^\n]+)\n\s*\*\*答案：([√×])\*\*/g;
  while ((match = trueFalseRegex.exec(content)) !== null) {
    questions.push({
      id: `ch${chapterId}_handbook_${now}_${questionCount++}`,
      chapterId: chapterId,
      type: QuestionType.TRUE_FALSE,
      content: match[2].trim(),
      options: [],
      correctAnswer: match[3] === '√' ? 'true' : 'false',
      explanation: ''
    });
  }

  // 解析填空题
  const fillBlankRegex = /(\d+)\. ([^\n]+)\n\s*\*\*答案：([^\*]+)\*\*/g;
  while ((match = fillBlankRegex.exec(content)) !== null) {
    questions.push({
      id: `ch${chapterId}_handbook_${now}_${questionCount++}`,
      chapterId: chapterId,
      type: QuestionType.FILL_BLANK,
      content: match[2].trim(),
      options: [],
      correctAnswer: match[3].trim(),
      explanation: ''
    });
  }

  return questions;
};

/**
 * 获取指定章节的题库问题
 */
export const getQuestionsFromHandbook = async (chapterId: number, limit?: number): Promise<Question[]> => {
  try {
    const allQuestions = await readHandbookQuestions(chapterId);
    // 如果指定了数量限制，则随机选择指定数量的题目
    if (limit && limit > 0 && limit < allQuestions.length) {
      // 简单的随机选择算法
      const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, limit);
    }
    return allQuestions;
  } catch (error) {
    console.error(`获取题库失败: ${error}`);
    return [];
  }
};