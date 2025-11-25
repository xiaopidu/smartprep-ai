import { QuestionType, Question } from "../types";
import { ChatOpenAI } from "@langchain/openai";

// 定义环境变量接口
declare global {
  interface ImportMetaEnv {
    readonly VITE_DEEPSEEK_API_KEY?: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

// 创建ChatOpenAI实例，配置为使用DeepSeek API
export const createDeepSeekChat = () => {
  // Vite会自动加载.env文件中的VITE_前缀的环境变量
  const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
  
  console.log('API Key check:', apiKey ? `${apiKey.substring(0, 8)}...` : 'undefined');
  
  if (!apiKey) {
    throw new Error("DeepSeek API Key is missing in VITE_DEEPSEEK_API_KEY environment variable.");
  }
  
  if (apiKey === 'your_deepseek_api_key_here' || apiKey === 'PLACEHOLDER_API_KEY') {
    throw new Error("DeepSeek API Key is a placeholder. Please replace it with a valid API key from https://platform.deepseek.com/");
  }

  return new ChatOpenAI({
    model: "deepseek-chat",
    apiKey: apiKey,
    temperature: 0.7,
    maxTokens: 2000,
    configuration: {
      baseURL: "https://api.deepseek.com/v1",
      apiKey: apiKey // 确保API密钥在配置中也设置
    }
  });
};

// 创建系统提示模板 - 采用HCIA风格
const SYSTEM_TEMPLATE = `你是一名专业的HCIA认证考试题目生成专家。
你的任务是根据提供的章节信息，生成高质量的HCIA认证考试题目，输出为JSON格式。
确保题目内容准确、专业，符合HCIA认证的要求和难度水平。
语言必须是中文（简体）。
严格按照请求的JSON格式输出，只返回JSON数组，不要包含其他文本。`;

// 不使用模板变量，而是在函数内部直接创建格式化的提示

// 扩展的生成函数，支持自定义参数
interface GenerationParams {
  chapterId: number;
  questionTypes: string[];
  questionCounts: Record<string, number>;
  totalQuestions: number;
}

export const generateQuestionsForChapter = async (params: GenerationParams): Promise<Question[]> => {
  console.log("[LangChain] Attempting to generate questions with params:", params);
  
  try {
    // 1. 创建DeepSeek聊天实例
    const model = createDeepSeekChat();
    console.log("[LangChain] DeepSeek chat model initialized");
    
    // 2. 根据章节ID获取对应的章节标题
    const getChapterTitle = (id: number): string => {
      const chapterMap: Record<number, string> = {
        1: "人工智能概览",
        2: "机器学习详解",
        3: "深度学习基础",
        4: "卷积神经网络CNN",
        5: "循环神经网络RNN",
        6: "Transformer与大模型",
        7: "AI开发框架",
        8: "华为AI解决方案"
      };
      return chapterMap[id] || `第${id}章`;
    };
    
    const chapterTitle = getChapterTitle(params.chapterId);
    
    // 3. 构建题型描述
    const typeDescriptions = params.questionTypes.map(type => {
      const count = params.questionCounts[type] || 0;
      switch (type) {
        case 'SINGLE': return `${count}道单选题`;
        case 'MULTIPLE': return `${count}道多选题`;
        case 'TRUE_FALSE': return `${count}道判断题`;
        case 'FILL_BLANK': return `${count}道填空题`;
        default: return '';
      }
    }).filter(desc => desc !== '');
    
    // 4. 创建HCIA风格的用户提示，包含自定义参数
    const userPrompt = `请为HCIA认证考试的第${params.chapterId}章《${chapterTitle}》生成${params.totalQuestions}道高质量题目。
题目要求如下：
${typeDescriptions.map(desc => `- ${desc}`).join('\n')}

题目内容必须严格围绕《${chapterTitle}》的核心知识点，符合HCIA认证考试的难度和深度要求。
确保题目既有理论性又有实用性，能够有效检验考生对该章节内容的掌握程度。

重要格式要求：
1. 单选题和判断题的正确答案必须使用字母格式：A、B、C、D（单选题）或true/false（判断题）
2. 多选题的正确答案必须使用字母数组格式：["A", "B", "C", "D"]
3. 填空题的正确答案使用文本字符串

请按照以下JSON格式输出，每道题目必须包含"isAI"字段并设置为true：
[
  {
    "type": "SINGLE", "MULTIPLE", "TRUE_FALSE", 或 "FILL_BLANK",
    "content": "题目内容",
    "options": ["选项A", "选项B", ...],
    "correctAnswer": "单选题使用A/B/C/D，判断题使用true/false，填空题使用文本答案",
    "correctAnswerMulti": ["多选题使用字母数组，如A,B,C,D"],
    "explanation": "答案解析说明",
    "isAI": true
  }
]`;
    
    // 4. 不使用模板，直接发送消息
    const messages = [
      { role: "system" as const, content: SYSTEM_TEMPLATE },
      { role: "user" as const, content: userPrompt }
    ];
    
    // 5. 直接调用模型
    const result = await model.invoke(messages);
    console.log("[LangChain] Model execution completed");
    
    // 链执行完成的日志已在前面输出
    console.log("[LangChain] Raw result:", result);
    
    // 5. 处理结果 - 从模型响应中提取内容
    let rawContent = '';
    if (typeof result === 'object') {
      if (result.content) {
        // 处理content可能是字符串或数组的情况
        if (Array.isArray(result.content)) {
          // 如果是数组，尝试将其内容合并为字符串
          rawContent = result.content.map(item => 
            typeof item === 'object' ? (item.text || '') : String(item)
          ).join('');
        } else {
          rawContent = String(result.content);
        }
      } else {
        rawContent = String(result).trim();
      }
    } else {
      rawContent = String(result).trim();
    }
    
    // 清理可能的JSON包装
    const jsonMatch = rawContent.match(/\[.*\]/s);
    if (jsonMatch) {
      rawContent = jsonMatch[0];
      console.log("[LangChain] Extracted JSON content:", rawContent);
    }
    
    // 6. 解析JSON
    let rawData;
    try {
      rawData = JSON.parse(rawContent);
      console.log("[LangChain] Parsed JSON data successfully");
    } catch (parseError) {
      console.error("[LangChain] Failed to parse JSON:", parseError);
      console.error("[LangChain] Problematic content:", rawContent);
      throw new Error(`Failed to parse API response as JSON: ${parseError.message}`);
    }
    
    // 7. 映射到内部结构
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const questions: Question[] = rawData.map((item: any, index: number) => {
      let answer: string | string[] = "";
      let questionType: QuestionType = QuestionType.SINGLE; // 默认类型
      
      // 确定问题类型
      switch (item.type?.toUpperCase()) {
        case 'MULTIPLE':
        case 'MULTIPLE_CHOICE':
          questionType = QuestionType.MULTIPLE;
          // 对于多选题，确保答案是字母数组
          if (Array.isArray(item.correctAnswerMulti)) {
            answer = item.correctAnswerMulti;
          } else if (Array.isArray(item.correctAnswer)) {
            answer = item.correctAnswer;
          } else {
            // 如果AI返回的是选项文本数组，转换为字母数组
            const textAnswers = Array.isArray(item.correctAnswer) ? item.correctAnswer : [item.correctAnswer];
            answer = textAnswers.map((text: string) => {
              const idx = item.options?.indexOf(text);
              return idx !== undefined && idx >= 0 ? String.fromCharCode(65 + idx) : text;
            });
          }
          break;
        case 'TRUE_FALSE':
        case 'BOOLEAN':
          questionType = QuestionType.TRUE_FALSE;
          // 判断题答案应该是true/false字符串
          answer = item.correctAnswer === 'true' || item.correctAnswer === true ? 'true' : 
                   item.correctAnswer === 'false' || item.correctAnswer === false ? 'false' : 
                   item.correctAnswer;
          break;
        case 'FILL_BLANK':
        case 'FILL_IN_THE_BLANK':
          questionType = QuestionType.FILL_BLANK;
          answer = item.correctAnswer || "";
          break;
        default:
          questionType = QuestionType.SINGLE;
          // 对于单选题，确保答案是字母
          if (typeof item.correctAnswer === 'string' && /^[ABCD]$/.test(item.correctAnswer)) {
            // 已经是字母格式，直接使用
            answer = item.correctAnswer;
          } else {
            // 如果是选项文本，转换为对应的字母
            const idx = item.options?.indexOf(item.correctAnswer);
            answer = idx !== undefined && idx >= 0 ? String.fromCharCode(65 + idx) : item.correctAnswer;
          }
      }

      return {
        id: `ch${params.chapterId}_gen_${Date.now()}_${index}`,
        chapterId: params.chapterId,
        type: questionType,
        content: item.content || `Question ${index + 1}`,
        options: item.options || [],
        correctAnswer: answer,
        explanation: item.explanation || "",
        isAI: true // 添加AI标记
      };
    });
    
    console.log("[LangChain] Questions mapped to internal structure successfully");
    return questions;

  } catch (error) {
    console.error("[LangChain] Error in generateQuestionsForChapter:", error);
    // 提供更详细的错误信息
    if (error instanceof Error) {
      if (error.message.includes("API Key") || error.message.includes("401") || error.message.includes("unauthorized")) {
        throw new Error(`DeepSeek API密钥问题: ${error.message}`);
      }
      throw error;
    }
    throw new Error(`Unexpected error: ${String(error)}`);
  }
};
