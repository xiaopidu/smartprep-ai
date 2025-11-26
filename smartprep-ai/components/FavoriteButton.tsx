/**
 * FavoriteButton 收藏按钮组件
 * 
 * 可复用的收藏切换按钮，带动画效果
 */

import React, { useState } from 'react';
import { Heart } from 'lucide-react';

export interface FavoriteButtonProps {
  /** 当前是否已收藏 */
  isFavorite: boolean;
  
  /** 点击切换收藏状态 */
  onToggle: () => void;
  
  /** 按钮尺寸 */
  size?: 'sm' | 'md' | 'lg';
  
  /** 是否显示动画 */
  animated?: boolean;
  
  /** 是否禁用 */
  disabled?: boolean;
}

const sizeMap = {
  sm: { button: 'w-8 h-8', icon: 'w-4 h-4' },
  md: { button: 'w-10 h-10', icon: 'w-5 h-5' },
  lg: { button: 'w-12 h-12', icon: 'w-6 h-6' },
};

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  onToggle,
  size = 'md',
  animated = true,
  disabled = false,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 防止事件冒泡
    
    if (disabled) return;
    
    if (animated) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);
    }
    
    onToggle();
  };

  const { button: buttonSize, icon: iconSize } = sizeMap[size];

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        ${buttonSize}
        flex items-center justify-center
        rounded-full
        transition-all duration-200
        ${isFavorite 
          ? 'bg-pink-100 text-pink-500 hover:bg-pink-200' 
          : 'bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-500'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${isAnimating ? 'favorite-pulse' : ''}
        focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2
      `}
      aria-label={isFavorite ? '取消收藏' : '添加收藏'}
      title={isFavorite ? '取消收藏' : '添加收藏'}
    >
      <Heart 
        className={`
          ${iconSize}
          transition-all duration-200
          ${isFavorite ? 'fill-current' : ''}
        `}
      />
    </button>
  );
};

export default FavoriteButton;
