/**
 * VirtualScrollList 虚拟滚动列表组件
 * 
 * 基于 react-window v2 实现，50+ 条目时启用虚拟化
 */

import React, { CSSProperties, ReactElement, useMemo } from 'react';
import { List, RowComponentProps } from 'react-window';

export interface VirtualScrollListProps<T> {
  /** 列表数据 */
  items: T[];
  
  /** 列表高度（像素） */
  height: number;
  
  /** 单个项目高度（像素） */
  itemHeight: number;
  
  /** 渲染单个项目的函数 */
  renderItem: (item: T, index: number) => React.ReactNode;
  
  /** 空状态显示内容 */
  emptyContent?: React.ReactNode;
  
  /** 虚拟化阈值（默认50） */
  virtualizationThreshold?: number;
  
  /** 额外的容器类名 */
  className?: string;
}

// react-window v2 的 rowProps 类型
interface ListRowProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

// Row 组件类型 - 符合 react-window v2 API
function Row<T>({ 
  index, 
  style, 
  items, 
  renderItem 
}: RowComponentProps<ListRowProps<T>>): ReactElement {
  return (
    <div style={style}>
      {renderItem(items[index], index)}
    </div>
  );
}

export function VirtualScrollList<T>({
  items,
  height,
  itemHeight,
  renderItem,
  emptyContent,
  virtualizationThreshold = 50,
  className = '',
}: VirtualScrollListProps<T>): React.ReactElement {
  // rowProps 需要稳定引用
  const rowProps = useMemo(() => ({
    items,
    renderItem,
  }), [items, renderItem]);

  // 空状态
  if (items.length === 0) {
    return (
      <div className={`${className}`}>
        {emptyContent || (
          <div className="text-center py-12 text-slate-500">
            暂无数据
          </div>
        )}
      </div>
    );
  }

  // 项目数量少于阈值时，使用普通列表
  if (items.length < virtualizationThreshold) {
    return (
      <div className={`${className} overflow-auto`} style={{ maxHeight: height }}>
        {items.map((item, index) => (
          <div key={index}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    );
  }

  // 使用 react-window v2 虚拟滚动
  return (
    <div className={`virtual-scroll-container ${className}`}>
      <List
        rowComponent={Row as (props: RowComponentProps<ListRowProps<T>>) => ReactElement}
        rowCount={items.length}
        rowHeight={itemHeight}
        rowProps={rowProps}
        style={{ height }}
      />
    </div>
  );
}

export default VirtualScrollList;
