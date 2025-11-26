import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownMenuProps {
  /** 触发按钮内容 */
  trigger: React.ReactNode;
  /** 下拉菜单内容 */
  children: React.ReactNode;
  /** 对齐方式 */
  align?: 'left' | 'right';
  /** 自定义类名 */
  className?: string;
  /** 触发按钮类名 */
  triggerClassName?: string;
  /** 是否显示下拉箭头 */
  showArrow?: boolean;
}

/**
 * 通用下拉菜单组件
 * 
 * 功能:
 * - 点击触发按钮展开/收起
 * - 点击外部自动关闭
 * - 支持 Escape 键关闭
 * - 动画过渡效果
 */
export function DropdownMenu({
  trigger,
  children,
  align = 'left',
  className = '',
  triggerClassName = '',
  showArrow = true,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // 点击外部关闭
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  // Escape 键关闭
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClickOutside, handleKeyDown]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div ref={containerRef} className={`dropdown-container relative ${className}`}>
      {/* 触发按钮 */}
      <button
        type="button"
        onClick={toggleMenu}
        className={`dropdown-trigger flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium
          bg-white border border-orange-200 text-amber-900 
          hover:bg-orange-50 hover:border-orange-300
          transition-all duration-200 ${triggerClassName}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
        {showArrow && (
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          />
        )}
      </button>

      {/* 下拉面板 */}
      {isOpen && (
        <div
          ref={menuRef}
          className={`dropdown-panel absolute z-50 mt-2 bg-white rounded-xl shadow-lg
            border border-orange-100 py-2 min-w-[180px]
            animate-fade-in
            ${align === 'right' ? 'right-0' : 'left-0'}`}
          role="menu"
        >
          {children}
        </div>
      )}
    </div>
  );
}

/**
 * 下拉菜单项组件
 */
interface DropdownItemProps {
  /** 点击回调 */
  onClick?: () => void;
  /** 是否选中 */
  selected?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 图标 */
  icon?: React.ReactNode;
  /** 子内容 */
  children: React.ReactNode;
  /** 自定义类名 */
  className?: string;
}

export function DropdownItem({
  onClick,
  selected = false,
  disabled = false,
  icon,
  children,
  className = '',
}: DropdownItemProps) {
  return (
    <button
      type="button"
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`dropdown-item w-full flex items-center gap-2 px-4 py-2 text-sm text-left
        ${selected ? 'bg-orange-50 text-orange-700' : 'text-gray-700'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-50 hover:text-orange-700'}
        transition-colors duration-150 ${className}`}
      role="menuitem"
    >
      {icon && <span className="w-4 h-4 flex-shrink-0">{icon}</span>}
      <span className="flex-1">{children}</span>
      {selected && (
        <span className="text-orange-500 text-xs">✓</span>
      )}
    </button>
  );
}

/**
 * 下拉菜单复选框项
 */
interface DropdownCheckboxProps {
  /** 是否选中 */
  checked: boolean;
  /** 变更回调 */
  onChange: (checked: boolean) => void;
  /** 标签 */
  label: string;
  /** 图标 */
  icon?: React.ReactNode;
  /** 自定义类名 */
  className?: string;
}

export function DropdownCheckbox({
  checked,
  onChange,
  label,
  icon,
  className = '',
}: DropdownCheckboxProps) {
  return (
    <label
      className={`dropdown-checkbox w-full flex items-center gap-2 px-4 py-2 text-sm
        text-gray-700 hover:bg-orange-50 cursor-pointer
        transition-colors duration-150 ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 rounded border-orange-300 text-orange-500 
          focus:ring-orange-500 focus:ring-offset-0"
      />
      {icon && <span className="w-4 h-4 flex-shrink-0">{icon}</span>}
      <span className="flex-1">{label}</span>
    </label>
  );
}

/**
 * 下拉菜单分隔线
 */
export function DropdownDivider() {
  return <div className="dropdown-divider my-1 border-t border-orange-100" />;
}

export default DropdownMenu;
