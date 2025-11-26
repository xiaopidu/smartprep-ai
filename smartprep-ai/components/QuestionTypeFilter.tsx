import React from 'react';
import { ClipboardList } from 'lucide-react';
import { DropdownMenu, DropdownCheckbox, DropdownDivider } from './DropdownMenu';
import { QuestionType } from '../types';

interface QuestionTypeFilterProps {
  /** 当前选中的题型 */
  selectedTypes: Record<QuestionType, boolean>;
  /** 切换题型选中状态 */
  onToggle: (type: QuestionType, checked: boolean) => void;
  /** 自定义类名 */
  className?: string;
}

const QUESTION_TYPE_LABELS: Record<QuestionType, string> = {
  [QuestionType.SINGLE]: '单选题',
  [QuestionType.MULTIPLE]: '多选题',
  [QuestionType.TRUE_FALSE]: '判断题',
  [QuestionType.FILL_BLANK]: '填空题',
};

const QUESTION_TYPE_ORDER: QuestionType[] = [
  QuestionType.SINGLE,
  QuestionType.MULTIPLE,
  QuestionType.TRUE_FALSE,
  QuestionType.FILL_BLANK,
];

/**
 * 题型筛选下拉菜单
 * 
 * 功能:
 * - 4 个题型勾选项
 * - 全选/全不选按钮
 * - 暖色主题样式
 */
export function QuestionTypeFilter({
  selectedTypes,
  onToggle,
  className = '',
}: QuestionTypeFilterProps) {
  const allSelected = Object.values(selectedTypes).every(v => v);
  const noneSelected = Object.values(selectedTypes).every(v => !v);
  
  // 获取选中数量
  const selectedCount = Object.values(selectedTypes).filter(v => v).length;

  const handleSelectAll = () => {
    QUESTION_TYPE_ORDER.forEach(type => onToggle(type, true));
  };

  const handleSelectNone = () => {
    QUESTION_TYPE_ORDER.forEach(type => onToggle(type, false));
  };

  return (
    <DropdownMenu
      trigger={
        <span className="flex items-center gap-1.5">
          <ClipboardList className="w-4 h-4" />
          <span>题型筛选</span>
          {!allSelected && selectedCount > 0 && (
            <span className="ml-1 px-1.5 py-0.5 text-xs bg-orange-100 text-orange-700 rounded-full">
              {selectedCount}
            </span>
          )}
        </span>
      }
      className={className}
    >
      <div className="py-1">
        {QUESTION_TYPE_ORDER.map(type => (
          <DropdownCheckbox
            key={type}
            checked={selectedTypes[type]}
            onChange={(checked) => onToggle(type, checked)}
            label={QUESTION_TYPE_LABELS[type]}
          />
        ))}
        
        <DropdownDivider />
        
        <div className="flex items-center justify-center gap-2 px-4 py-2">
          <button
            type="button"
            onClick={handleSelectAll}
            disabled={allSelected}
            className="px-3 py-1 text-xs font-medium rounded-md
              bg-orange-50 text-orange-700 hover:bg-orange-100
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-colors"
          >
            全选
          </button>
          <button
            type="button"
            onClick={handleSelectNone}
            disabled={noneSelected}
            className="px-3 py-1 text-xs font-medium rounded-md
              bg-gray-50 text-gray-600 hover:bg-gray-100
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-colors"
          >
            全不选
          </button>
        </div>
      </div>
    </DropdownMenu>
  );
}

export default QuestionTypeFilter;
