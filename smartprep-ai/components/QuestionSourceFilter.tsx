import React from 'react';
import { Library, BookOpen, Brain } from 'lucide-react';
import { DropdownMenu, DropdownItem, DropdownDivider } from './DropdownMenu';

interface QuestionSourceFilterProps {
  /** 是否包含默认题库 */
  includeDefault: boolean;
  /** 是否包含 AI 模拟题 */
  includeAI: boolean;
  /** 切换默认题库 */
  onToggleDefault: (checked: boolean) => void;
  /** 切换 AI 模拟题 */
  onToggleAI: (checked: boolean) => void;
  /** 是否显示 AI 选项（仅 AI 模拟章节显示） */
  showAIOption?: boolean;
  /** 自定义类名 */
  className?: string;
}

/**
 * 题库来源下拉菜单
 * 
 * 功能:
 * - 默认题库开关
 * - AI 模拟题开关
 * - 单选/多选切换模式
 */
export function QuestionSourceFilter({
  includeDefault,
  includeAI,
  onToggleDefault,
  onToggleAI,
  showAIOption = true,
  className = '',
}: QuestionSourceFilterProps) {
  // 获取当前激活的来源描述
  const getActiveLabel = () => {
    if (includeDefault && includeAI) return '全部';
    if (includeDefault) return '默认';
    if (includeAI) return 'AI';
    return '无';
  };

  return (
    <DropdownMenu
      trigger={
        <span className="flex items-center gap-1.5">
          <Library className="w-4 h-4" />
          <span>题库</span>
          <span className="ml-1 px-1.5 py-0.5 text-xs bg-orange-100 text-orange-700 rounded-full">
            {getActiveLabel()}
          </span>
        </span>
      }
      className={className}
    >
      <div className="py-1">
        {/* 默认题库选项 */}
        <button
          type="button"
          onClick={() => onToggleDefault(!includeDefault)}
          className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left
            ${includeDefault ? 'bg-orange-50 text-orange-700' : 'text-gray-700 hover:bg-orange-50'}
            transition-colors duration-150`}
        >
          <BookOpen className="w-4 h-4 flex-shrink-0" />
          <span className="flex-1">默认题库</span>
          <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
            ${includeDefault ? 'border-orange-500 bg-orange-500' : 'border-gray-300'}`}
          >
            {includeDefault && (
              <span className="w-2 h-2 bg-white rounded-full" />
            )}
          </span>
        </button>

        {/* AI 模拟题选项 */}
        {showAIOption && (
          <button
            type="button"
            onClick={() => onToggleAI(!includeAI)}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left
              ${includeAI ? 'bg-orange-50 text-orange-700' : 'text-gray-700 hover:bg-orange-50'}
              transition-colors duration-150`}
          >
            <Brain className="w-4 h-4 flex-shrink-0" />
            <span className="flex-1">AI 模拟题</span>
            <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
              ${includeAI ? 'border-orange-500 bg-orange-500' : 'border-gray-300'}`}
            >
              {includeAI && (
                <span className="w-2 h-2 bg-white rounded-full" />
              )}
            </span>
          </button>
        )}
      </div>
    </DropdownMenu>
  );
}

export default QuestionSourceFilter;
