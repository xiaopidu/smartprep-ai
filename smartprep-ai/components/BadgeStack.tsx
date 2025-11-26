/**
 * BadgeStack 叠层徽章组件
 * 
 * 显示题目的错题和收藏状态
 */

import React from 'react';
import { AlertCircle, Heart, FileText } from 'lucide-react';

export interface BadgeStackProps {
  /** 是否为错题 */
  isMistake: boolean;
  
  /** 是否已收藏 */
  isFavorite: boolean;
  
  /** 是否有笔记 */
  hasNote?: boolean;
  
  /** 错题次数 */
  mistakeCount?: number;
  
  /** 额外的CSS类名 */
  className?: string;
}

export const BadgeStack: React.FC<BadgeStackProps> = ({
  isMistake,
  isFavorite,
  hasNote = false,
  mistakeCount = 0,
  className = '',
}) => {
  // 如果没有任何状态，不渲染
  if (!isMistake && !isFavorite && !hasNote) {
    return null;
  }

  return (
    <div className={`badge-stack ${className}`}>
      {/* 错题徽章 */}
      {isMistake && (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium badge-mistake">
          <AlertCircle className="w-3 h-3" />
          {mistakeCount > 0 ? `错${mistakeCount}次` : '错题'}
        </span>
      )}
      
      {/* 收藏徽章 */}
      {isFavorite && (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium badge-favorite">
          <Heart className="w-3 h-3 fill-current" />
          已收藏
        </span>
      )}
      
      {/* 笔记徽章 */}
      {hasNote && (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium badge-note">
          <FileText className="w-3 h-3" />
          有笔记
        </span>
      )}
    </div>
  );
};

export default BadgeStack;
