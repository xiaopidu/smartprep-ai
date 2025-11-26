import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, AlertCircle, Brain } from 'lucide-react';
import { Question, QuestionType, UserProgress } from '../types';
import FavoriteButton from './FavoriteButton';
import BadgeStack from './BadgeStack';
import NoteEditor from './NoteEditor';

interface QuestionCardProps {
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

export const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  progress, 
  mistakeCount, 
  showAnswer = false,
  onAnswer,
  isFavorite = false,
  onToggleFavorite,
  noteContent = '',
  onSaveNote,
  onDeleteNote,
  useGridLayout = true,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | string[] | null>(null);
  const [textAnswer, setTextAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isNoteExpanded, setIsNoteExpanded] = useState(false);
  
  // Reset local state when question changes or progress is reset
  useEffect(() => {
    // Check if there is a valid answer in the progress
    const hasAnswer = progress?.userAnswer !== null && progress?.userAnswer !== undefined;
    
    setIsSubmitted(hasAnswer);

    if (hasAnswer) {
      if (question.type === QuestionType.FILL_BLANK) {
        setTextAnswer(progress!.userAnswer as string);
      } else {
        setSelectedOption(progress!.userAnswer);
      }
    } else {
      // Explicitly reset local state if no answer exists (e.g. after reset chapter)
      // This is crucial for the "Reset Chapter" feature to work visually
      setSelectedOption(question.type === QuestionType.MULTIPLE ? [] : null);
      setTextAnswer('');
    }
  }, [question, progress?.userAnswer]); 
  // We depend specifically on progress.userAnswer to detect reset changes

  const handleSingleSelection = (option: string) => {
    if (isSubmitted || showAnswer) return;
    setSelectedOption(option);
  };

  const handleMultiSelection = (option: string) => {
    if (isSubmitted || showAnswer) return;
    const current = (selectedOption as string[]) || [];
    if (current.includes(option)) {
      setSelectedOption(current.filter(o => o !== option));
    } else {
      setSelectedOption([...current, option]);
    }
  };

  const handleSubmit = () => {
    if (isSubmitted || showAnswer) return;
    
    let isCorrect = false;
    let finalAnswer: string | string[] | null = null;

    if (question.type === QuestionType.SINGLE) {
      // Convert selected option text to option letter (A, B, C, D)
      const selectedOptionText = selectedOption as string;
      const index = question.options?.indexOf(selectedOptionText);
      const selectedLetter = index !== undefined && index >= 0 ? String.fromCharCode(65 + index) : null;
      
      isCorrect = selectedLetter === question.correctAnswer;
      finalAnswer = selectedOption;
    } else if (question.type === QuestionType.TRUE_FALSE) {
      isCorrect = selectedOption === question.correctAnswer;
      finalAnswer = selectedOption;
    } else if (question.type === QuestionType.MULTIPLE) {
      // Convert selected option texts to option letters (A, B, C, D)
      const selectedOptions = selectedOption as string[];
      const selectedLetters = selectedOptions.map(option => {
        const index = question.options?.indexOf(option);
        return index !== undefined && index >= 0 ? String.fromCharCode(65 + index) : null;
      }).filter(Boolean) as string[];
      
      const selected = selectedLetters.sort();
      const correct = (question.correctAnswer as string[]).sort();
      isCorrect = JSON.stringify(selected) === JSON.stringify(correct);
      finalAnswer = selectedOption;
    } else if (question.type === QuestionType.FILL_BLANK) {
      const normalizedInput = textAnswer.trim().toLowerCase();
      const normalizedCorrect = (question.correctAnswer as string).trim().toLowerCase();
      isCorrect = normalizedInput === normalizedCorrect;
      finalAnswer = textAnswer;
    }

    setIsSubmitted(true);
    if (finalAnswer !== null) {
      onAnswer(question.id, finalAnswer, isCorrect);
    }
  };

  // Determine if we are in a "Result View" state (either submitted or Recite mode)
  const isResultState = isSubmitted || showAnswer;

  const getOptionStyle = (option: string) => {
    if (!isResultState) {
        if (question.type === QuestionType.MULTIPLE) {
            return (selectedOption as string[])?.includes(option)
            ? 'border-blue-500 bg-blue-50 text-blue-700'
            : 'border-slate-200 hover:border-blue-200 hover:bg-slate-50';
        }
      return selectedOption === option 
        ? 'border-blue-500 bg-blue-50 text-blue-700' 
        : 'border-slate-200 hover:border-blue-200 hover:bg-slate-50';
    }

    // Result State Styles
    let isCorrectAnswer = false;
    
    if (question.type === QuestionType.MULTIPLE) {
      // For multiple choice questions, convert option text to letter and check against correct answers
      const index = question.options?.indexOf(option);
      const optionLetter = index !== undefined && index >= 0 ? String.fromCharCode(65 + index) : null;
      isCorrectAnswer = optionLetter !== null && Array.isArray(question.correctAnswer) 
        ? question.correctAnswer.includes(optionLetter)
        : false;
    } else if (question.type === QuestionType.SINGLE) {
      // For single choice questions, convert option text to letter and check against correct answer
      const index = question.options?.indexOf(option);
      const optionLetter = index !== undefined && index >= 0 ? String.fromCharCode(65 + index) : null;
      isCorrectAnswer = optionLetter !== null && question.correctAnswer === optionLetter;
    } else {
      isCorrectAnswer = Array.isArray(question.correctAnswer) 
        ? question.correctAnswer.includes(option)
        : question.correctAnswer === option;
    }
    
    // In Recite Mode (showAnswer=true), we may not have a selectedOption if user hasn't answered yet.
    // If user has answered (isSubmitted=true), we show their selection logic.
    const isSelected = Array.isArray(selectedOption)
        ? selectedOption?.includes(option)
        : selectedOption === option;

    if (isCorrectAnswer) return 'border-green-500 bg-green-50 text-green-700 ring-1 ring-green-500';
    
    // Only show red for wrong selection if user actually submitted an answer
    if (isSubmitted && isSelected && !isCorrectAnswer) return 'border-red-500 bg-red-50 text-red-700';
    
    return 'border-slate-200 opacity-50';
  };

  const currentMistakeCount = mistakeCount ?? progress?.mistakeCount ?? 0;
  const hasNote = Boolean(noteContent?.trim());

  return (
    <div className="question-card-enhanced bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 max-w-3xl mx-auto">
      {/* 收藏按钮 - 右上角 */}
      {onToggleFavorite && (
        <div className="favorite-button-container">
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={() => onToggleFavorite(question.id)}
          />
        </div>
      )}

      {/* Header Tags with BadgeStack */}
      <div className="flex flex-wrap items-center gap-2 mb-6 pr-14">
        <span className={`px-3 py-1 rounded-full text-xs font-medium 
          ${question.type === QuestionType.SINGLE ? 'bg-indigo-100 text-indigo-700' : 
            question.type === QuestionType.MULTIPLE ? 'bg-purple-100 text-purple-700' :
            question.type === QuestionType.TRUE_FALSE ? 'bg-orange-100 text-orange-700' :
            'bg-teal-100 text-teal-700'}`}>
          {question.type === QuestionType.SINGLE && '单选题'}
          {question.type === QuestionType.MULTIPLE && '多选题'}
          {question.type === QuestionType.TRUE_FALSE && '判断题'}
          {question.type === QuestionType.FILL_BLANK && '填空题'}
        </span>
        {question.isAI && (
          <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200">
            <Brain className="w-3 h-3" />
            AI生成
          </span>
        )}
        {/* 使用 BadgeStack 显示状态 */}
        <BadgeStack
          isMistake={currentMistakeCount > 0}
          isFavorite={isFavorite}
          hasNote={hasNote}
          mistakeCount={currentMistakeCount}
        />
      </div>

      {/* Question Content */}
      <h2 className="text-xl font-medium text-slate-800 mb-8 leading-relaxed">
        {question.content}
      </h2>

      {/* Options Area - 使用双列网格布局 */}
      <div className={`mb-8 ${useGridLayout && (question.type === QuestionType.SINGLE || question.type === QuestionType.MULTIPLE) ? 'options-grid' : 'space-y-3'}`}>
        {(question.type === QuestionType.SINGLE || question.type === QuestionType.MULTIPLE) && question.options?.map((option, idx) => (
          <button
            key={idx}
            onClick={() => question.type === QuestionType.SINGLE ? handleSingleSelection(option) : handleMultiSelection(option)}
            disabled={isResultState}
            className={`option-button w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${getOptionStyle(option)}`}
          >
             <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                ${getOptionStyle(option).includes('border-blue') || getOptionStyle(option).includes('border-green') ? 'border-current' : 'border-slate-300'}
             `}>
                {(Array.isArray(selectedOption) ? selectedOption?.includes(option) : selectedOption === option) && (
                    <div className="w-2.5 h-2.5 rounded-full bg-current" />
                )}
             </div>
             {option}
          </button>
        ))}

        {question.type === QuestionType.TRUE_FALSE && (
           <div className="grid grid-cols-2 gap-4">
              {['正确', '错误'].map((val) => (
                  <button
                    key={val}
                    onClick={() => handleSingleSelection(val === '正确' ? 'true' : 'false')}
                    disabled={isResultState}
                    className={`p-4 rounded-xl border-2 text-center transition-all ${getOptionStyle(val === '正确' ? 'true' : 'false')}`}
                  >
                    {val}
                  </button>
              ))}
           </div>
        )}

        {question.type === QuestionType.FILL_BLANK && (
            <div>
                <input 
                    type="text" 
                    value={textAnswer}
                    onChange={(e) => setTextAnswer(e.target.value)}
                    disabled={isResultState}
                    placeholder="请输入答案..."
                    className={`w-full p-4 rounded-xl border-2 outline-none transition-all ${
                        isResultState 
                        ? ((isSubmitted && progress?.isCorrect) || (showAnswer && !isSubmitted) ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')
                        : 'border-slate-200 focus:border-blue-500 focus:bg-white bg-slate-50'
                    }`}
                />
            </div>
        )}
      </div>

      {/* Footer / Feedback */}
      <div className="flex items-center justify-between min-h-[60px]">
        {!isResultState ? (
             <button 
                onClick={handleSubmit}
                disabled={(!selectedOption || (Array.isArray(selectedOption) && selectedOption.length === 0)) && !textAnswer}
                className="ml-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-200"
             >
                提交答案
             </button>
        ) : (
            <div className={`flex-1 rounded-xl p-4 ${progress?.isCorrect || showAnswer ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                <div className="flex items-center gap-2 font-bold mb-2">
                    {isSubmitted ? (
                        progress?.isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />
                    ) : (
                        <CheckCircle2 className="w-5 h-5" />
                    )}
                    <span>
                        {isSubmitted 
                            ? (progress?.isCorrect ? '回答正确！' : '回答错误')
                            : '参考答案与解析'
                        }
                    </span>
                </div>
                <div className="text-sm opacity-90">
                    <span className="font-semibold block mb-1 text-xs uppercase tracking-wider opacity-70">解析</span>
                    {question.explanation}
                </div>
                {(!progress?.isCorrect || !isSubmitted) && (
                    <div className="mt-2 text-sm">
                        <span className="font-semibold">正确答案: </span> 
                        {Array.isArray(question.correctAnswer) ? question.correctAnswer.join(', ') : question.correctAnswer}
                    </div>
                )}
            </div>
        )}
      </div>

      {/* 笔记编辑器 */}
      {onSaveNote && onDeleteNote && (
        <NoteEditor
          questionId={question.id}
          initialContent={noteContent}
          isExpanded={isNoteExpanded}
          onToggleExpand={() => setIsNoteExpanded(!isNoteExpanded)}
          onSave={onSaveNote}
          onDelete={onDeleteNote}
        />
      )}
    </div>
  );
};