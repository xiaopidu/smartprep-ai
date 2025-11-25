import React, { useState, useEffect, useMemo } from 'react';
import { CHAPTERS, Question, UserProgress, QuestionType } from './types';
import { STATIC_QUESTIONS, getChapterQuestions, isGeneratedQuestion } from './services/staticQuestions';
import { generateQuestionsForChapter } from './services/deepseekServiceLangchain';
import { AIGenerationPanel } from './components/AIGenerationPanel';
import { APIStatusIndicator } from './components/APIStatusIndicator';
import { ChapterCard } from './components/ChapterCard';
import { QuestionCard } from './components/QuestionCard';
import { LayoutDashboard, BookOpen, AlertOctagon, Sparkles, Loader2, ArrowLeft, RefreshCw, Eye, Edit3, Filter, Brain, Plus, Settings, Trash2 } from 'lucide-react';

// 扩展Window接口以包含testAPIKey函数
declare global {
  interface Window {
    testAPIKey: () => Promise<{ success: boolean; data?: any; error?: any; status?: number }>;
  }
}

// 保留模拟数据作为最后的后备方案
const MOCK_QUESTIONS: Question[] = [];

// --- Custom Hook for Store ---
function useQuizStore() {
  const [questions, setQuestions] = useState<Question[]>(() => {
    const saved = localStorage.getItem('sp_questions');
    return saved ? JSON.parse(saved) : []; // 初始为空数组，等待预加载
  });

  const [progress, setProgress] = useState<Record<string, UserProgress>>(() => {
    const saved = localStorage.getItem('sp_progress');
    // 如果没有保存的进度，返回空对象，确保新浏览器中错题集为空
    if (!saved) {
      return {};
    }
    
    // 解析保存的进度数据
    const parsedProgress = JSON.parse(saved);
    
    // 检查是否有有效的进度数据
    if (typeof parsedProgress === 'object' && parsedProgress !== null) {
      return parsedProgress;
    }
    
    // 如果数据格式不正确，返回空对象
    return {};
  });

  useEffect(() => {
    localStorage.setItem('sp_questions', JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    localStorage.setItem('sp_progress', JSON.stringify(progress));
  }, [progress]);

  const addQuestions = (newQuestions: Question[]) => {
    setQuestions(prev => {
        // Prevent duplicates by ID
        const existingIds = new Set(prev.map(q => q.id));
        const filtered = newQuestions.filter(q => !existingIds.has(q.id));
        return [...prev, ...filtered];
    });
  };

  const submitAnswer = (questionId: string, answer: string | string[], isCorrect: boolean) => {
    setProgress(prev => {
      const current = prev[questionId] || { 
        questionId, 
        mistakeCount: 0, 
        userAnswer: null, 
        lastAttemptedAt: 0, 
        isCorrect: false 
      };

      return {
        ...prev,
        [questionId]: {
          ...current,
          userAnswer: answer,
          isCorrect,
          mistakeCount: isCorrect ? current.mistakeCount : current.mistakeCount + 1,
          lastAttemptedAt: Date.now()
        }
      };
    });
  };

  const resetChapterProgress = (chapterId: number) => {
    setProgress(prev => {
        const next = { ...prev };
        let hasChanges = false;

        // Find all questions in this chapter and reset their progress
        questions.forEach(q => {
          if (q.chapterId === chapterId) {
             const currentProgress = next[q.id];
             // If there is an answer, clear it.
             if (currentProgress && currentProgress.userAnswer !== null) {
                next[q.id] = {
                   ...currentProgress,
                   userAnswer: null,
                   isCorrect: false,
                   lastAttemptedAt: 0
                   // Preserve mistakeCount for history
                };
                hasChanges = true;
             }
          }
        });
        
        return hasChanges ? next : prev;
    });
  };

  const resetAllProgress = () => {
    setProgress({});
    localStorage.removeItem('sp_progress');
  };

  return { questions, progress, addQuestions, submitAnswer, resetChapterProgress, resetAllProgress, setQuestions };
}

// --- Main Components ---

const SidebarItem = ({ icon: Icon, label, active, onClick, count }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center justify-between p-3 rounded-lg mb-1 transition-colors ${
      active ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-50'
    }`}
  >
    <div className="flex items-center gap-3">
      <Icon className={`w-5 h-5 ${active ? 'text-blue-600' : 'text-slate-400'}`} />
      <span>{label}</span>
    </div>
    {count !== undefined && count > 0 && (
      <span className={`text-xs px-2 py-0.5 rounded-full ${active ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
        {count}
      </span>
    )}
  </button>
);

export default function App() {
  const { questions, progress, addQuestions, submitAnswer, resetChapterProgress, resetAllProgress, setQuestions } = useQuizStore();
  const [currentView, setCurrentView] = useState<'dashboard' | 'chapter' | 'mistakes' | 'official' | 'ai'>('dashboard');
  const [activeChapterId, setActiveChapterId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true); // 全局加载状态
  
  // 清理了之前的测试函数
  
  // 处理重置所有进度并重置会话开始时间
  const handleResetAllProgressNew = () => {
    console.log('handleResetAllProgressNew 被调用 - 时间戳:', Date.now());
    const userConfirmed = confirm('确定要清除所有答题记录吗？这将清空所有章节的答题记录和错题统计。');
    console.log('用户确认结果:', userConfirmed, '- 时间戳:', Date.now());
    if (userConfirmed) {
      console.log('用户确认清除，执行 resetAllProgress - 时间戳:', Date.now());
      resetAllProgress();
      setSessionStartTime(Date.now());
      alert('所有答题记录已清除！');
    } else {
      console.log('用户取消清除，不执行任何操作 - 时间戳:', Date.now());
    }
  };

  // 处理URL参数，支持直接导航到特定章节
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const chapterId = urlParams.get('chapter');
    
    if (chapterId) {
      const id = parseInt(chapterId);
      if (!isNaN(id) && id > 0 && id <= CHAPTERS.length) {
        console.log(`通过URL参数导航到章节 ${id}`);
        setActiveChapterId(id);
        setCurrentView('chapter');
        setOnlyMistakes(false);
        setStudyMode('practice');
        setSessionStartTime(Date.now());
      }
    }
  }, []);
  
  // AI生成题目相关状态
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState<Question[]>([]);
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [showAIQuestions, setShowAIQuestions] = useState(false);
  
  // 控制是否显示AI模拟题
  const [includeAIQuestions, setIncludeAIQuestions] = useState(false);
  
  // 控制是否显示默认题库
  const [includeDefaultQuestions, setIncludeDefaultQuestions] = useState(true);
  
  // 控制错题集中是否显示默认题库
  const [mistakesIncludeDefault, setMistakesIncludeDefault] = useState(true);
  
  // 控制错题集中是否显示AI模拟题
  const [mistakesIncludeAI, setMistakesIncludeAI] = useState(true);
  
  // 官方题库视图状态
  const [showOfficialQuestions, setShowOfficialQuestions] = useState(false);
  
  // 'practice' = Redo/Do questions (default)
  // 'recite' = Show answers (memorize)
  const [studyMode, setStudyMode] = useState<'practice' | 'recite'>('practice');
  const [onlyMistakes, setOnlyMistakes] = useState(false);
  
  // Session tracking for "Redo" functionality
  // When a user enters a practice session (especially for mistakes), we want to show questions as "unanswered"
  // until they answer them *in this session*.
  const [sessionStartTime, setSessionStartTime] = useState(Date.now());
  
  // 题型勾选状态管理
  const [selectedQuestionTypes, setSelectedQuestionTypes] = useState<Record<QuestionType, boolean>>({
    [QuestionType.SINGLE]: true,
    [QuestionType.MULTIPLE]: true,
    [QuestionType.TRUE_FALSE]: true,
    [QuestionType.FILL_BLANK]: true
  });
  
  // 预加载所有题目
  useEffect(() => {
    const preloadAllQuestions = async () => {
      setIsLoading(true);
      
      try {
        // 直接使用预定义的静态题目数据
        console.log(`成功加载所有题目，共 ${STATIC_QUESTIONS.length} 道题目`);
        setQuestions(STATIC_QUESTIONS);
      } catch (error) {
        console.error('预加载题目时发生错误:', error);
        // 使用模拟数据作为后备
        setQuestions(MOCK_QUESTIONS);
      } finally {
        // 延迟设置isLoading为false，确保加载体验
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };
    
    // 延迟执行预加载，让页面先渲染
    setTimeout(preloadAllQuestions, 100);
  }, []);

  // Computed Data
  const mistakeQuestions = useMemo(() => {
    let allQuestions: Question[] = [];
    
    // 根据错题集的开关设置来合并题目
    if (mistakesIncludeDefault) {
      allQuestions = [...allQuestions, ...questions];
    }
    
    if (mistakesIncludeAI) {
      allQuestions = [...allQuestions, ...generatedQuestions];
    }
    
    return allQuestions.filter(q => {
      const p = progress[q.id];
      return p && p.mistakeCount > 0;
    });
  }, [questions, progress, generatedQuestions, mistakesIncludeDefault, mistakesIncludeAI]);

  // 检查是否为AI模拟题章节（现在所有章节都可以使用AI生成功能）
  const isAISimulationChapter = activeChapterId && activeChapterId >= 1 && activeChapterId <= 8;

  const activeQuestions = useMemo(() => {
    if (currentView === 'mistakes') return mistakeQuestions;
    if (currentView === 'official') return questions; // 官方题库显示所有题目
    if (currentView === 'ai') return generatedQuestions; // AI模拟题显示AI生成的题目
    
    if (activeChapterId) {
        let qs: Question[] = [];
        
        // 如果用户选择包含默认题库
        if (includeDefaultQuestions) {
            qs = questions.filter(q => q.chapterId === activeChapterId);
        }
        
        // 如果用户选择包含AI模拟题，并且当前章节有AI生成的题目
        if (includeAIQuestions && isAISimulationChapter && generatedQuestions.length > 0) {
            // 合并默认题目和AI生成的题目
            const aiQuestionsForChapter = generatedQuestions.filter(q => q.chapterId === activeChapterId);
            qs = [...qs, ...aiQuestionsForChapter];
        }
        
        // 按题型筛选
        qs = qs.filter(q => selectedQuestionTypes[q.type]);
        
        if (onlyMistakes) {
            qs = qs.filter(q => {
                const p = progress[q.id];
                return p && p.mistakeCount > 0;
            });
        }
        return qs;
    }
    return [];
  }, [questions, activeChapterId, currentView, mistakeQuestions, onlyMistakes, progress, selectedQuestionTypes, isAISimulationChapter, generatedQuestions, includeAIQuestions, includeDefaultQuestions]);



  const getChapterStats = (chapterId: number) => {
    const chapterQuestions = questions.filter(q => q.chapterId === chapterId);
    const completed = chapterQuestions.filter(q => progress[q.id]?.userAnswer).length;
    return { total: chapterQuestions.length, completed };
  };

  // AI生成题目函数 - 打开参数面板
  const handleOpenAIPanel = () => {
    setShowAIPanel(true);
  };

  // 处理官方题库视图
  const handleShowOfficialQuestions = () => {
    setShowOfficialQuestions(true);
    setShowAIQuestions(false);
    setCurrentView('official');
    setActiveChapterId(null);
  };

  // 处理AI模拟题视图
  const handleShowAIQuestions = () => {
    setShowAIQuestions(true);
    setShowOfficialQuestions(false);
    setCurrentView('ai');
    setActiveChapterId(null);
  };

  // AI生成题目函数 - 使用自定义参数
  const handleGenerateQuestionsWithParams = async (params: {
    chapterId: number;
    questionTypes: string[];
    questionCounts: Record<string, number>;
    totalQuestions: number;
  }) => {
    setIsGeneratingQuestions(true);
    setShowAIPanel(false);
    
    try {
      // 检查API密钥是否配置
      console.log('检查API密钥:', import.meta.env.VITE_DEEPSEEK_API_KEY);
      if (!import.meta.env.VITE_DEEPSEEK_API_KEY) {
        throw new Error('API密钥未配置。请在.env文件中设置有效的VITE_DEEPSEEK_API_KEY');
      }
      
      if (import.meta.env.VITE_DEEPSEEK_API_KEY === 'your_deepseek_api_key_here' || import.meta.env.VITE_DEEPSEEK_API_KEY === 'PLACEHOLDER_API_KEY') {
        throw new Error('API密钥是占位符。请从https://platform.deepseek.com/获取有效的API密钥并替换.env文件中的占位符。');
      }
      
      // 使用generateQuestionsForChapter函数，参数格式已经兼容
      const aiQuestions = await generateQuestionsForChapter(params);
      setGeneratedQuestions(aiQuestions);
      
      // 不再将AI生成的题目添加到主题库中，只保留在generatedQuestions状态中
      // addQuestions(aiQuestions);
      
      alert(`成功生成 ${aiQuestions.length} 道AI模拟题！`);
    } catch (error) {
      console.error('生成AI题目时发生错误:', error);
      
      // 提供更详细的错误信息
      let errorMessage = '生成AI题目失败，请检查网络连接或API配置。';
      if (error instanceof Error) {
        if (error.message.includes('API key')) {
          errorMessage = 'API密钥配置错误：\n' + error.message + '\n\n请参考API_TROUBLESHOOTING.md文档进行配置。';
        } else if (error.message.includes('fetch')) {
          errorMessage = '网络连接错误：无法连接到AI服务。请检查网络连接并重试。';
        } else {
          errorMessage = '生成题目时发生错误：\n' + error.message;
        }
      }
      
      alert(errorMessage);
    } finally {
      setIsGeneratingQuestions(false);
    }
  };

  // 快速生成题目函数（保持向后兼容）
  const handleGenerateQuestions = async () => {
    if (!activeChapterId) return;
    
    setIsGeneratingQuestions(true);
    try {
      // 检查API密钥是否配置
      console.log('检查API密钥(快速生成):', import.meta.env.VITE_DEEPSEEK_API_KEY);
      if (!import.meta.env.VITE_DEEPSEEK_API_KEY) {
        throw new Error('API密钥未配置。请在.env文件中设置有效的VITE_DEEPSEEK_API_KEY');
      }
      
      if (import.meta.env.VITE_DEEPSEEK_API_KEY === 'your_deepseek_api_key_here' || import.meta.env.VITE_DEEPSEEK_API_KEY === 'PLACEHOLDER_API_KEY') {
        throw new Error('API密钥是占位符。请从https://platform.deepseek.com/获取有效的API密钥并替换.env文件中的占位符。');
      }
      
      // 构建正确的参数格式
      const params = {
        chapterId: activeChapterId,
        questionTypes: ['SINGLE', 'MULTIPLE', 'TRUE_FALSE', 'FILL_BLANK'],
        questionCounts: { SINGLE: 5, MULTIPLE: 3, TRUE_FALSE: 2, FILL_BLANK: 1 },
        totalQuestions: 11
      };
      const aiQuestions = await generateQuestionsForChapter(params);
      setGeneratedQuestions(aiQuestions);
      
      // 不再将AI生成的题目添加到主题库中，只保留在generatedQuestions状态中
      // addQuestions(aiQuestions);
      
      alert(`成功生成 ${aiQuestions.length} 道AI模拟题！`);
    } catch (error) {
      console.error('生成AI题目时发生错误:', error);
      
      // 提供更详细的错误信息
      let errorMessage = '生成AI题目失败，请检查网络连接或API配置。';
      if (error instanceof Error) {
        if (error.message.includes('API key')) {
          errorMessage = 'API密钥配置错误：\n' + error.message + '\n\n请参考API_TROUBLESHOOTING.md文档进行配置。';
        } else if (error.message.includes('fetch')) {
          errorMessage = '网络连接错误：无法连接到AI服务。请检查网络连接并重试。';
        } else {
          errorMessage = '生成题目时发生错误：\n' + error.message;
        }
      }
      
      alert(errorMessage);
    } finally {
      setIsGeneratingQuestions(false);
    }
  };

  const handleOpenChapter = (id: number) => {
    setActiveChapterId(id);
    setCurrentView('chapter');
    setOnlyMistakes(false);
    setStudyMode('practice');
    setSessionStartTime(Date.now()); // 重置会话
    // 切换章节时重置AI模拟题开关
    setIncludeAIQuestions(false);
    window.scrollTo(0, 0);
    
    // 检查该章节是否有题目
    const chapterQuestions = questions.filter(q => q.chapterId === id);
    if (chapterQuestions.length === 0 && !isLoading) {
      console.warn(`章节 ${id} 暂无预加载的题目`);
    }
  };

  const handleResetChapter = () => {
    if (!activeChapterId) return;

    // Check if there are actually any answers to reset in this chapter
    const hasAnswers = questions
        .filter(q => q.chapterId === activeChapterId)
        .some(q => progress[q.id]?.userAnswer !== null && progress[q.id]?.userAnswer !== undefined);

    if (!hasAnswers) {
        // If the user wants to "Reset" but hasn't done anything, we just ensure UI is in practice mode
        setStudyMode('practice');
        setSessionStartTime(Date.now());
        alert('本章节暂无做题记录，已为您切换到做题模式。');
        return;
    }

    if (confirm('确定要重刷本章吗？所有的做题记录将被清空，但错题统计会保留。')) {
        resetChapterProgress(activeChapterId);
        setStudyMode('practice'); 
        setSessionStartTime(Date.now());
        window.scrollTo(0, 0);
    }
  };

  const switchMode = (mode: 'practice' | 'recite') => {
      setStudyMode(mode);
      if (mode === 'practice') {
          // Reset session time when switching to practice to allow re-answering in Mistake view
          setSessionStartTime(Date.now());
      }
  };

  // Study Mode Toggle Component
  const StudyModeToggle = () => (
    <div className="bg-white p-1 rounded-lg border border-slate-200 shadow-sm flex">
        <button 
            onClick={() => switchMode('practice')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                studyMode === 'practice' ? 'bg-blue-100 text-blue-700' : 'text-slate-500 hover:bg-slate-50'
            }`}
        >
            <Edit3 className="w-4 h-4" /> {currentView === 'mistakes' ? '重做' : '做题'}
        </button>
        <button 
            onClick={() => switchMode('recite')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                studyMode === 'recite' ? 'bg-blue-100 text-blue-700' : 'text-slate-500 hover:bg-slate-50'
            }`}
        >
            <Eye className="w-4 h-4" /> 背诵
        </button>
    </div>
  );

  // 添加到全局作用域，方便在控制台测试
  window.testAPIKey = async () => {
    console.log('开始测试API密钥...');
    console.log('API密钥:', import.meta.env.VITE_DEEPSEEK_API_KEY);
    
    try {
      const response = await fetch('https://api.deepseek.com/v1/models', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('API连接成功:', data);
        return { success: true, data };
      } else {
        const errorData = await response.text();
        console.error('API连接失败:', response.status, errorData);
        return { success: false, error: errorData, status: response.status };
      }
    } catch (error) {
      console.error('API测试出错:', error);
      return { success: false, error: error.message };
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-900 font-sans">
      {/* 全局加载指示器 */}
      {isLoading && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
            <h3 className="text-xl font-medium text-slate-800 mb-2">正在加载题目...</h3>
            <p className="text-slate-500">预加载handbook题库中，这可能需要几秒钟时间</p>
          </div>
        </div>
      )}
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-2 text-blue-600">
            <Sparkles className="w-6 h-6" />
            <h1 className="text-xl font-bold tracking-tight">SmartPrep AI</h1>
          </div>
        </div>
        
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">学习中心</h2>
            <SidebarItem 
              icon={LayoutDashboard} 
              label="章节概览" 
              active={currentView === 'dashboard'} 
              onClick={() => setCurrentView('dashboard')} 
            />
            <SidebarItem 
              icon={AlertOctagon} 
              label="错题集" 
              active={currentView === 'mistakes'} 
              onClick={() => {
                  setCurrentView('mistakes');
                  setStudyMode('practice');
                  setSessionStartTime(Date.now());
              }} 
              count={mistakeQuestions.length}
            />
            <SidebarItem 
              icon={Trash2} 
              label="清除所有记录" 
              active={false} 
              onClick={handleResetAllProgressNew}
            />
          </div>

          {/* API测试组件已移除 */}

          <div>
             <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">章节列表</h2>
             {CHAPTERS.map(chapter => (
                 <SidebarItem
                    key={chapter.id}
                    icon={BookOpen}
                    label={chapter.title}
                    active={currentView === 'chapter' && activeChapterId === chapter.id}
                    onClick={() => handleOpenChapter(chapter.id)}
                 />
             ))}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 max-w-7xl mx-auto w-full">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between mb-6 bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 text-blue-600 font-bold">
                <Sparkles className="w-5 h-5" /> SmartPrep AI
            </div>
            <div className="flex gap-2">
                <button onClick={() => setCurrentView('dashboard')} className="p-2 bg-slate-100 rounded-lg"><LayoutDashboard className="w-5 h-5"/></button>
                <button onClick={() => {
                    setCurrentView('mistakes');
                    setStudyMode('practice');
                    setSessionStartTime(Date.now());
                }} className="p-2 bg-red-50 text-red-600 rounded-lg relative">
                    <AlertOctagon className="w-5 h-5"/>
                    {mistakeQuestions.length > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>}
                </button>
                <button onClick={handleResetAllProgressNew} className="p-2 bg-red-50 text-red-600 rounded-lg">
                    <Trash2 className="w-5 h-5"/>
                </button>
            </div>
        </div>

        {/* Dashboard View */}
        {currentView === 'dashboard' && (
          <div className="animate-fade-in">
             <div className="mb-8">
               <h1 className="text-3xl font-bold text-slate-800 mb-2">欢迎回来, 同学</h1>
               <p className="text-slate-500">选择一个章节开始练习，或者复习你的错题。</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {CHAPTERS.map(chapter => {
                 const stats = getChapterStats(chapter.id);
                 return (
                   <ChapterCard 
                      key={chapter.id} 
                      chapter={chapter} 
                      totalQuestions={stats.total}
                      completedQuestions={stats.completed}
                      onClick={() => handleOpenChapter(chapter.id)}
                   />
                 );
               })}
             </div>
          </div>
        )}

        {/* Question View (Chapter or Mistakes) */}
        {(currentView === 'chapter' || currentView === 'mistakes') && (
            <div className="animate-fade-in pb-20">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-8 sticky top-0 bg-slate-50/95 backdrop-blur-sm py-4 z-20 border-b border-slate-200/50 gap-4">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setCurrentView('dashboard')}
                            className="p-2 hover:bg-white rounded-full transition-colors border border-transparent hover:border-slate-200 hover:shadow-sm"
                        >
                            <ArrowLeft className="w-5 h-5 text-slate-600" />
                        </button>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800">
                                {currentView === 'mistakes' ? '错题集' : CHAPTERS.find(c => c.id === activeChapterId)?.title}
                            </h2>
                            <p className="text-sm text-slate-500">
                                {(() => {
                                    if (currentView === 'mistakes') {
                                        // 计算各类型错题数量
                                        const defaultMistakes = questions.filter(q => {
                                            const p = progress[q.id];
                                            return p && p.mistakeCount > 0;
                                        }).length;
                                        
                                        const aiMistakes = generatedQuestions.filter(q => {
                                            const p = progress[q.id];
                                            return p && p.mistakeCount > 0;
                                        }).length;
                                        
                                        // 根据开关状态显示不同的描述
                                        if (mistakesIncludeDefault && mistakesIncludeAI) {
                                            return `共 ${mistakeQuestions.length} 道需要复习的题目 (默认题库 ${defaultMistakes} 道 + AI模拟题 ${aiMistakes} 道)`;
                                        } else if (mistakesIncludeDefault) {
                                            return `共 ${mistakeQuestions.length} 道需要复习的题目 (仅默认题库)`;
                                        } else if (mistakesIncludeAI) {
                                            return `共 ${mistakeQuestions.length} 道需要复习的题目 (仅AI模拟题)`;
                                        } else {
                                            return `未选择任何题库`;
                                        }
                                    }
                                    
                                    if (activeQuestions.length === 0) {
                                        return '暂无题目';
                                    }
                                    
                                    if (isAISimulationChapter) {
                                        const officialCount = includeDefaultQuestions ? questions.filter(q => q.chapterId === activeChapterId).length : 0;
                                        const aiCount = includeAIQuestions ? generatedQuestions.filter(q => q.chapterId === activeChapterId).length : 0;
                                        return `本页 ${officialCount} 道默认题目 + ${aiCount} 道AI模拟题 = 共 ${activeQuestions.length} 道题目`;
                                    }
                                    
                                    return `本页 ${activeQuestions.length} 道题目`;
                                })()}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        {/* 题型筛选组件 */}
                        {currentView === 'chapter' && (
                            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2">
                                <Filter className="w-4 h-4 text-slate-500" />
                                <span className="text-sm font-medium text-slate-600">题型筛选:</span>
                                <div className="flex gap-2">
                                    {Object.entries(selectedQuestionTypes).map(([type, checked]) => (
                                        <label key={type} className="flex items-center gap-1 text-sm cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={checked}
                                                onChange={(e) => setSelectedQuestionTypes(prev => ({
                                                    ...prev,
                                                    [type]: e.target.checked
                                                }))}
                                                className="w-4 h-4 text-blue-600 bg-white border-slate-300 rounded focus:ring-blue-500 focus:ring-2"
                                            />
                                            <span className={`text-xs px-2 py-1 rounded ${
                                                type === QuestionType.SINGLE ? 'bg-blue-100 text-blue-700' :
                                                type === QuestionType.MULTIPLE ? 'bg-purple-100 text-purple-700' :
                                                type === QuestionType.TRUE_FALSE ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-green-100 text-green-700'
                                            }`}>
                                                {type === QuestionType.SINGLE ? '单选' :
                                                 type === QuestionType.MULTIPLE ? '多选' :
                                                 type === QuestionType.TRUE_FALSE ? '判断' : '填空'}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        <StudyModeToggle />

                        {/* 错题集的题库开关 */}
                        {currentView === 'mistakes' && (
                            <>
                                <div className="h-6 w-px bg-slate-300 mx-1 hidden md:block"></div>
                                
                                {/* 默认题库开关 */}
                                <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2">
                                    <BookOpen className="w-4 h-4 text-slate-500" />
                                    <span className="text-sm font-medium text-slate-600">默认题库:</span>
                                    <button
                                        onClick={() => setMistakesIncludeDefault(!mistakesIncludeDefault)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                            mistakesIncludeDefault ? 'bg-blue-600' : 'bg-slate-200'
                                        }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                                mistakesIncludeDefault ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                        />
                                    </button>
                                </div>
                                
                                {/* AI模拟题开关 */}
                                <div className="h-6 w-px bg-slate-300 mx-1 hidden md:block"></div>
                                <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2">
                                    <Brain className="w-4 h-4 text-slate-500" />
                                    <span className="text-sm font-medium text-slate-600">AI模拟题:</span>
                                    <button
                                        onClick={() => setMistakesIncludeAI(!mistakesIncludeAI)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                            mistakesIncludeAI ? 'bg-blue-600' : 'bg-slate-200'
                                        }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                                mistakesIncludeAI ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                        />
                                    </button>
                                </div>
                            </>
                        )}

                        {currentView === 'chapter' && (
                            <>
                                <div className="h-6 w-px bg-slate-300 mx-1 hidden md:block"></div>
                                <button
                                    onClick={() => setOnlyMistakes(!onlyMistakes)}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
                                        onlyMistakes ? 'bg-red-50 text-red-700 border-red-200' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                                    }`}
                                >
                                    <Filter className="w-4 h-4" />
                                    只做错题
                                </button>

                                <button
                                    onClick={handleResetChapter}
                                    className="flex items-center gap-2 px-3 py-2 bg-white text-slate-600 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors"
                                >
                                    <RefreshCw className="w-4 h-4" />
                                    重刷本章
                                </button>
                                
                                {/* 默认题库开关 */}
                                <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2">
                                    <BookOpen className="w-4 h-4 text-slate-500" />
                                    <span className="text-sm font-medium text-slate-600">默认题库:</span>
                                    <button
                                        onClick={() => {
                                            // 切换默认题库状态
                                            const newState = !includeDefaultQuestions;
                                            setIncludeDefaultQuestions(newState);
                                            
                                            // 如果关闭默认题库，不再自动关闭AI模拟题
                                            // 用户可以独立控制这两个开关
                                        }}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                            includeDefaultQuestions ? 'bg-blue-600' : 'bg-slate-200'
                                        }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                                includeDefaultQuestions ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                        />
                                    </button>
                                </div>
                                
                                {/* AI模拟题开关 */}
                                {isAISimulationChapter && (
                                    <>
                                        <div className="h-6 w-px bg-slate-300 mx-1 hidden md:block"></div>
                                        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2">
                                            <Brain className="w-4 h-4 text-slate-500" />
                                            <span className="text-sm font-medium text-slate-600">AI模拟题:</span>
                                            <button
                                                onClick={() => setIncludeAIQuestions(!includeAIQuestions)}
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                                    includeAIQuestions ? 'bg-blue-600' : 'bg-slate-200'
                                                }`}
                                            >
                                                <span
                                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                                        includeAIQuestions ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                                />
                                            </button>
                                        </div>
                                    </>
                                )}
                                
                                {/* AI模拟题章节显示生成题目按钮 */}
                                {isAISimulationChapter && (
                                    <>
                                        <div className="h-6 w-px bg-slate-300 mx-1 hidden md:block"></div>
                                        <button
                                            onClick={handleOpenAIPanel}
                                            className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white border border-blue-200 rounded-lg text-sm font-medium hover:from-green-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-md"
                                        >
                                            <Settings className="w-4 h-4" />
                                            自定义AI生成
                                        </button>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>

                <div className="space-y-8">
                    {/* AI模拟题章节的API状态指示器 */}
                    {isAISimulationChapter && (
                        <APIStatusIndicator />
                    )}
                    
                    {activeQuestions.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                            <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                {currentView === 'mistakes' ? <AlertOctagon className="w-8 h-8 text-slate-300" /> : 
                                 isAISimulationChapter ? <Brain className="w-8 h-8 text-slate-300" /> : <BookOpen className="w-8 h-8 text-slate-300" />}
                            </div>
                            <h3 className="text-lg font-medium text-slate-900 mb-2">
                                {currentView === 'mistakes' ? '没有符合条件的错题' : 
                                 isAISimulationChapter ? 'SmartPrep AI刷题小助手' : '列表为空'}
                            </h3>
                            <p className="text-slate-500 max-w-xs mx-auto mb-6">
                                {(() => {
                                    if (currentView === 'mistakes') {
                                        if (!mistakesIncludeDefault && !mistakesIncludeAI) {
                                            return '请开启"默认题库"或"AI模拟题"开关以显示错题！';
                                        }
                                        
                                        // 计算各类型错题数量
                                        const defaultMistakes = questions.filter(q => {
                                            const p = progress[q.id];
                                            return p && p.mistakeCount > 0;
                                        }).length;
                                        
                                        const aiMistakes = generatedQuestions.filter(q => {
                                            const p = progress[q.id];
                                            return p && p.mistakeCount > 0;
                                        }).length;
                                        
                                        if (mistakesIncludeDefault && mistakesIncludeAI && defaultMistakes === 0 && aiMistakes === 0) {
                                            return '你很棒，或者还没开始做题！';
                                        } else if (mistakesIncludeDefault && !mistakesIncludeAI && defaultMistakes === 0) {
                                            return '默认题库中没有错题，继续保持！';
                                        } else if (!mistakesIncludeDefault && mistakesIncludeAI && aiMistakes === 0) {
                                            return 'AI模拟题中没有错题，继续保持！';
                                        } else if (mistakesIncludeDefault && mistakesIncludeAI) {
                                            if (defaultMistakes === 0) return '默认题库中没有错题，但AI模拟题中有错题！';
                                            if (aiMistakes === 0) return 'AI模拟题中没有错题，但默认题库中有错题！';
                                        }
                                        
                                        return '你很棒，或者还没开始做题！';
                                    }
                                    
                                    if (onlyMistakes) {
                                        return '本章节没有错题，继续保持！';
                                    }
                                    
                                    if (!isAISimulationChapter) {
                                        return '正在加载题目，请稍候...';
                                    }
                                    
                                    if (!includeDefaultQuestions && !includeAIQuestions) {
                                        return '请开启"默认题库"或"AI模拟题"开关以显示题目！';
                                    }
                                    
                                    if (includeAIQuestions && generatedQuestions.filter(q => q.chapterId === activeChapterId).length === 0) {
                                        return '本章节暂无AI模拟题，请先点击"自定义AI生成"按钮生成题目！';
                                    }
                                    
                                    if (includeDefaultQuestions && questions.filter(q => q.chapterId === activeChapterId).length === 0) {
                                        return '本章节暂无默认题目，请开启"AI模拟题"开关或点击"自定义AI生成"按钮生成题目！';
                                    }
                                    
                                    return '正在加载题目，请稍候...';
                                })()}
                            </p>
                            {currentView === 'chapter' && onlyMistakes && (
                                <button
                                    onClick={() => setOnlyMistakes(false)}
                                    className="text-blue-600 font-medium hover:text-blue-700 hover:underline"
                                >
                                    查看所有题目
                                </button>
                            )}
                        </div>
                    ) : (
                        activeQuestions.map((q, idx) => {
                            // If in Recite mode ('recite'), we show the answer.
                            // If in Practice mode ('practice'), we only show answer if user has submitted it.
                            const showAnswer = studyMode === 'recite';
                            
                            let displayProgress = progress[q.id];

                            // Special logic for "Redo" in Mistake View or general "Redo"
                            // If we are in practice mode and the answer is old (older than session start),
                            // we mask it so the user can "redo" it.
                            if (currentView === 'mistakes' && studyMode === 'practice' && displayProgress) {
                                const lastAttempt = displayProgress.lastAttemptedAt || 0;
                                if (lastAttempt < sessionStartTime) {
                                    // Mask the answer to simulate a fresh question for this session
                                    displayProgress = {
                                        ...displayProgress,
                                        userAnswer: null,
                                        // We keep mistakeCount so they know it's a trouble spot
                                        isCorrect: false 
                                    };
                                }
                            }

                            // Key strategy: Force component remount when answer status changes, mode changes, or session changes.
                            // The 'displayProgress?.userAnswer' check ensures that once they answer in this session, the card updates.
                            const componentKey = `${q.id}-${displayProgress?.userAnswer ? 'answered' : 'fresh'}-${studyMode}-${sessionStartTime}`;

                            return (
                                <div key={`ai-question-wrapper-${idx}`} className="relative">
                                    <div className="absolute -left-3 md:-left-12 top-0 text-slate-300 font-bold text-4xl select-none -z-10 opacity-50">
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>
                                    <QuestionCard 
                                        key={componentKey}
                                        question={q} 
                                        progress={displayProgress}
                                        mistakeCount={displayProgress?.mistakeCount}
                                        showAnswer={showAnswer}
                                        onAnswer={submitAnswer}
                                    />
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        )}

        {/* Official Questions View */}
        {currentView === 'official' && (
            <div className="animate-fade-in pb-20">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-8 sticky top-0 bg-slate-50/95 backdrop-blur-sm py-4 z-20 border-b border-slate-200/50 gap-4">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setCurrentView('dashboard')}
                            className="p-2 hover:bg-white rounded-full transition-colors border border-transparent hover:border-slate-200 hover:shadow-sm"
                        >
                            <ArrowLeft className="w-5 h-5 text-slate-600" />
                        </button>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800">官方题库</h2>
                            <p className="text-sm text-slate-500">
                                共 {questions.length} 道默认题目
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <StudyModeToggle />
                        
                        <div className="h-6 w-px bg-slate-300 mx-1 hidden md:block"></div>
                        
                        <button
                            onClick={handleResetAllProgressNew}
                            className="flex items-center gap-2 px-3 py-2 bg-white text-slate-600 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors"
                        >
                            <Trash2 className="w-4 h-4" />
                            清除进度
                        </button>
                    </div>
                </div>

                <div className="space-y-8">
                    {questions.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                            <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="w-8 h-8 text-slate-300" />
                            </div>
                            <h3 className="text-lg font-medium text-slate-900 mb-2">暂无默认题目</h3>
                            <p className="text-slate-500 max-w-xs mx-auto">
                                正在加载官方题库，请稍候...
                            </p>
                        </div>
                    ) : (
                        questions.map((q, idx) => {
                            const showAnswer = studyMode === 'recite';
                            const displayProgress = progress[q.id];
                            const componentKey = `${q.id}-${displayProgress?.userAnswer ? 'answered' : 'fresh'}-${studyMode}`;

                            return (
                                <div key={`official-question-wrapper-${idx}`} className="relative">
                                    <div className="absolute -left-3 md:-left-12 top-0 text-slate-300 font-bold text-4xl select-none -z-10 opacity-50">
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>
                                    <QuestionCard 
                                        key={componentKey}
                                        question={q} 
                                        progress={displayProgress}
                                        mistakeCount={displayProgress?.mistakeCount}
                                        showAnswer={showAnswer}
                                        onAnswer={submitAnswer}
                                    />
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        )}

        {/* AI Questions View */}
        {currentView === 'ai' && (
            <div className="animate-fade-in pb-20">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-8 sticky top-0 bg-slate-50/95 backdrop-blur-sm py-4 z-20 border-b border-slate-200/50 gap-4">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setCurrentView('dashboard')}
                            className="p-2 hover:bg-white rounded-full transition-colors border border-transparent hover:border-slate-200 hover:shadow-sm"
                        >
                            <ArrowLeft className="w-5 h-5 text-slate-600" />
                        </button>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800">AI模拟题</h2>
                            <p className="text-sm text-slate-500">
                                共 {generatedQuestions.length} 道AI生成的题目
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <StudyModeToggle />
                        
                        <div className="h-6 w-px bg-slate-300 mx-1 hidden md:block"></div>
                        
                        <button
                            onClick={handleOpenAIPanel}
                            className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white border border-blue-200 rounded-lg text-sm font-medium hover:from-green-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-md"
                        >
                            <Brain className="w-4 h-4" />
                            生成更多题目
                        </button>
                    </div>
                </div>

                <div className="space-y-8">
                    <APIStatusIndicator />
                    
                    {generatedQuestions.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                            <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Brain className="w-8 h-8 text-slate-300" />
                            </div>
                            <h3 className="text-lg font-medium text-slate-900 mb-2">暂无AI模拟题</h3>
                            <p className="text-slate-500 max-w-xs mx-auto mb-6">
                                点击上方的"生成更多题目"按钮，开始生成个性化模拟题！
                            </p>
                            <button
                                onClick={handleOpenAIPanel}
                                className="text-blue-600 font-medium hover:text-blue-700 hover:underline"
                            >
                                生成AI模拟题
                            </button>
                        </div>
                    ) : (
                        generatedQuestions.map((q, idx) => {
                            const showAnswer = studyMode === 'recite';
                            const displayProgress = progress[q.id];
                            const componentKey = `${q.id}-${displayProgress?.userAnswer ? 'answered' : 'fresh'}-${studyMode}`;

                            return (
                                <div key={`ai-question-wrapper-${idx}`} className="relative">
                                    <div className="absolute -left-3 md:-left-12 top-0 text-slate-300 font-bold text-4xl select-none -z-10 opacity-50">
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>
                                    <QuestionCard 
                                        key={componentKey}
                                        question={q} 
                                        progress={displayProgress}
                                        mistakeCount={displayProgress?.mistakeCount}
                                        showAnswer={showAnswer}
                                        onAnswer={submitAnswer}
                                    />
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        )}

        {/* AI参数输入面板 */}
        {showAIPanel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <AIGenerationPanel
                chapterId={activeChapterId || 1}
                onGenerate={handleGenerateQuestionsWithParams}
                onCancel={() => setShowAIPanel(false)}
                isGenerating={isGeneratingQuestions}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}