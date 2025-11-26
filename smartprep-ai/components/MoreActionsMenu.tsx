import React from 'react';
import { MoreHorizontal, Target, RefreshCw, Sparkles, Settings } from 'lucide-react';
import { DropdownMenu, DropdownItem, DropdownDivider } from './DropdownMenu';

interface MoreActionsMenuProps {
  /** 是否只做错题 */
  onlyMistakes: boolean;
  /** 切换只做错题 */
  onToggleMistakes: () => void;
  /** 重刷本章 */
  onResetChapter: () => void;
  /** 自定义 AI 生成 */
  onCustomAIGenerate: () => void;
  /** 是否显示 AI 生成选项 */
  showAIOption?: boolean;
  /** 是否正在生成 AI 题目 */
  isGenerating?: boolean;
  /** 自定义类名 */
  className?: string;
}

/**
 * 更多操作下拉菜单
 * 
 * 功能:
 * - 只做错题切换
 * - 重刷本章
 * - 自定义 AI 生成（可选）
 */
export function MoreActionsMenu({
  onlyMistakes,
  onToggleMistakes,
  onResetChapter,
  onCustomAIGenerate,
  showAIOption = true,
  isGenerating = false,
  className = '',
}: MoreActionsMenuProps) {
  return (
    <DropdownMenu
      trigger={
        <span className="flex items-center gap-1.5">
          <MoreHorizontal className="w-4 h-4" />
          <span>更多</span>
        </span>
      }
      align="right"
      className={className}
    >
      <div className="py-1">
        {/* 只做错题 */}
        <DropdownItem
          onClick={onToggleMistakes}
          selected={onlyMistakes}
          icon={<Target className="w-4 h-4" />}
        >
          只做错题
        </DropdownItem>

        {/* 重刷本章 */}
        <DropdownItem
          onClick={onResetChapter}
          icon={<RefreshCw className="w-4 h-4" />}
        >
          重刷本章
        </DropdownItem>

        {/* AI 生成选项 */}
        {showAIOption && (
          <>
            <DropdownDivider />
            <DropdownItem
              onClick={onCustomAIGenerate}
              disabled={isGenerating}
              icon={<Sparkles className="w-4 h-4" />}
              className={isGenerating ? 'opacity-50' : ''}
            >
              {isGenerating ? '生成中...' : '自定义 AI 生成'}
            </DropdownItem>
          </>
        )}
      </div>
    </DropdownMenu>
  );
}

export default MoreActionsMenu;
