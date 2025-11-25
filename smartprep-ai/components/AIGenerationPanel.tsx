import React, { useState } from 'react';
import { Brain, X, Plus, Minus } from 'lucide-react';

interface AIGenerationPanelProps {
  chapterId: number;
  onGenerate: (params: {
    chapterId: number;
    questionTypes: string[];
    questionCounts: Record<string, number>;
    totalQuestions: number;
  }) => void;
  onCancel: () => void;
  isGenerating?: boolean;
}

const CHAPTERS = [
  { id: 1, title: "人工智能概览" },
  { id: 2, title: "机器学习详解" },
  { id: 3, title: "深度学习基础" },
  { id: 4, title: "卷积神经网络CNN" },
  { id: 5, title: "循环神经网络RNN" },
  { id: 6, title: "Transformer与大模型" },
  { id: 7, title: "AI开发框架" },
  { id: 8, title: "华为AI解决方案" }
];

const QUESTION_TYPES = [
  { value: 'SINGLE', label: '单选题', defaultCount: 2 },
  { value: 'MULTIPLE', label: '多选题', defaultCount: 1 },
  { value: 'TRUE_FALSE', label: '判断题', defaultCount: 1 },
  { value: 'FILL_BLANK', label: '填空题', defaultCount: 1 }
];

export const AIGenerationPanel: React.FC<AIGenerationPanelProps> = ({
  chapterId = 1,  // 默认为第一章而不是第九章
  onGenerate,
  onCancel,
  isGenerating = false
}) => {
  const [selectedChapter, setSelectedChapter] = useState<number>(chapterId);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['SINGLE', 'MULTIPLE', 'TRUE_FALSE', 'FILL_BLANK']);
  const [questionCounts, setQuestionCounts] = useState<Record<string, number>>({
    'SINGLE': 2,
    'MULTIPLE': 1,
    'TRUE_FALSE': 1,
    'FILL_BLANK': 1
  });

  const toggleQuestionType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const updateQuestionCount = (type: string, delta: number) => {
    const currentCount = questionCounts[type] || 0;
    const newCount = Math.max(0, currentCount + delta);
    setQuestionCounts({
      ...questionCounts,
      [type]: newCount
    });
  };

  const getTotalQuestions = () => {
    return selectedTypes.reduce((total, type) => total + (questionCounts[type] || 0), 0);
  };

  const handleGenerate = () => {
    if (getTotalQuestions() === 0) {
      alert('请至少选择一种题型并设置题目数量');
      return;
    }

    onGenerate({
      chapterId: selectedChapter,
      questionTypes: selectedTypes,
      questionCounts,
      totalQuestions: getTotalQuestions()
    });
  };



  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800">AI智能生题</h3>
              <p className="text-sm text-slate-500">自定义生成个性化题目</p>
            </div>
          </div>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* 章节选择 */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">
              选择章节
            </label>
            <select
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(Number(e.target.value))}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {CHAPTERS.map(chapter => (
                <option key={chapter.id} value={chapter.id}>
                  {chapter.title}
                </option>
              ))}
            </select>
          </div>

          {/* 题型选择 */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">
              选择题型
            </label>
            <div className="grid grid-cols-2 gap-2">
              {QUESTION_TYPES.map(type => (
                <div key={type.value} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`type-${type.value}`}
                    checked={selectedTypes.includes(type.value)}
                    onChange={() => toggleQuestionType(type.value)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={`type-${type.value}`} className="text-sm text-slate-700">
                    {type.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* 题目数量设置 */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">
              题目数量设置
            </label>
            <div className="space-y-3">
              {QUESTION_TYPES.map(type => (
                <div key={type.value} className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">{type.label}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuestionCount(type.value, -1)}
                      disabled={!selectedTypes.includes(type.value) || (questionCounts[type.value] || 0) <= 0}
                      className="p-1 rounded-full hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">
                      {selectedTypes.includes(type.value) ? (questionCounts[type.value] || 0) : 0}
                    </span>
                    <button
                      onClick={() => updateQuestionCount(type.value, 1)}
                      disabled={!selectedTypes.includes(type.value)}
                      className="p-1 rounded-full hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 统计信息 */}
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">总题目数</span>
              <span className="text-lg font-semibold text-blue-600">{getTotalQuestions()}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-slate-600">已选题型</span>
              <span className="text-sm text-slate-700">{selectedTypes.length} 种</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-200">
          <button
            onClick={handleGenerate}
            disabled={isGenerating || getTotalQuestions() === 0}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                生成中...
              </>
            ) : (
              <>
                <Brain className="w-5 h-5" />
                开始生成题目
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};