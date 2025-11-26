/**
 * FavoritesPanel 收藏夹面板组件
 * 
 * 显示用户所有收藏的题目列表
 */

import React, { useState, useMemo } from 'react';
import { Heart, BookOpen, ChevronRight, Filter, AlertCircle, FileText } from 'lucide-react';
import { Question, UserProgress, Favorite, FavoriteList, NoteList, CHAPTERS } from '../types';
import VirtualScrollList from './VirtualScrollList';

export interface FavoritesPanelProps {
  /** 收藏列表数据 */
  favorites: FavoriteList;
  
  /** 题目数据，用于显示题目内容 */
  questions: Question[];
  
  /** 做题进度，用于显示错题状态 */
  progress: Record<string, UserProgress>;
  
  /** 笔记数据，用于显示笔记标识 */
  notes: NoteList;
  
  /** 当用户点击题目时的回调 */
  onQuestionClick: (questionId: string, chapterId: number) => void;
  
  /** 当用户取消收藏时的回调 */
  onRemoveFavorite: (questionId: string) => void;
}

export const FavoritesPanel: React.FC<FavoritesPanelProps> = ({
  favorites,
  questions,
  progress,
  notes,
  onQuestionClick,
  onRemoveFavorite,
}) => {
  // 章节筛选
  const [filterChapter, setFilterChapter] = useState<number | null>(null);

  // 获取收藏的题目列表（带完整信息）
  const favoriteQuestions = useMemo(() => {
    const favoritesList = Object.values(favorites).sort((a, b) => b.favoriteAt - a.favoriteAt);
    
    return favoritesList
      .map(fav => {
        const question = questions.find(q => q.id === fav.questionId);
        if (!question) return null;
        
        const questionProgress = progress[fav.questionId];
        const questionNote = notes[fav.questionId];
        
        return {
          ...fav,
          question,
          isMistake: questionProgress?.mistakeCount > 0,
          mistakeCount: questionProgress?.mistakeCount || 0,
          hasNote: Boolean(questionNote?.content?.trim()),
        };
      })
      .filter(item => item !== null)
      .filter(item => filterChapter === null || item!.chapter === filterChapter) as Array<{
        questionId: string;
        favoriteAt: number;
        chapter: number;
        question: Question;
        isMistake: boolean;
        mistakeCount: number;
        hasNote: boolean;
      }>;
  }, [favorites, questions, progress, notes, filterChapter]);

  // 按章节统计收藏数量
  const chapterStats = useMemo(() => {
    const stats: Record<number, number> = {};
    Object.values(favorites).forEach(fav => {
      stats[fav.chapter] = (stats[fav.chapter] || 0) + 1;
    });
    return stats;
  }, [favorites]);

  const totalCount = Object.keys(favorites).length;

  // 渲染单个收藏项
  const renderFavoriteItem = (item: typeof favoriteQuestions[0], index: number) => (
    <div
      key={item.questionId}
      className="p-4 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors cursor-pointer"
      onClick={() => onQuestionClick(item.questionId, item.chapter)}
    >
      <div className="flex items-start gap-3">
        {/* 序号 */}
        <span className="text-slate-400 text-sm font-medium min-w-[24px]">
          {index + 1}.
        </span>
        
        <div className="flex-1 min-w-0">
          {/* 题目内容（截断显示） */}
          <p className="text-slate-800 text-sm line-clamp-2 mb-2">
            {item.question.content}
          </p>
          
          {/* 标签行 */}
          <div className="flex flex-wrap items-center gap-2">
            {/* 章节标签 */}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-600">
              <BookOpen className="w-3 h-3" />
              第{item.chapter}章
            </span>
            
            {/* 错题标签 */}
            {item.isMistake && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs badge-mistake">
                <AlertCircle className="w-3 h-3" />
                错{item.mistakeCount}次
              </span>
            )}
            
            {/* 笔记标签 */}
            {item.hasNote && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs badge-note">
                <FileText className="w-3 h-3" />
                笔记
              </span>
            )}
          </div>
        </div>
        
        {/* 右侧操作 */}
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemoveFavorite(item.questionId);
            }}
            className="p-1.5 text-pink-400 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-colors"
            title="取消收藏"
          >
            <Heart className="w-4 h-4 fill-current" />
          </button>
          <ChevronRight className="w-4 h-4 text-slate-300" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="favorites-panel">
      {/* 头部 */}
      <div className="favorites-panel-header">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
          <h2 className="text-lg font-semibold text-slate-800">收藏夹</h2>
          <span className="text-sm text-slate-500">({totalCount})</span>
        </div>
        
        {/* 章节筛选 */}
        {totalCount > 0 && (
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={filterChapter ?? ''}
              onChange={(e) => setFilterChapter(e.target.value ? Number(e.target.value) : null)}
              className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-200"
            >
              <option value="">全部章节</option>
              {CHAPTERS.map(chapter => (
                <option key={chapter.id} value={chapter.id}>
                  {chapter.title} ({chapterStats[chapter.id] || 0})
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* 内容区域 */}
      {totalCount === 0 ? (
        <div className="favorites-panel-empty">
          <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-pink-300" />
          </div>
          <h3 className="text-lg font-medium text-slate-800 mb-2">暂无收藏</h3>
          <p className="text-slate-500 text-sm max-w-xs">
            在做题时点击题目右上角的心形按钮，即可将题目添加到收藏夹
          </p>
        </div>
      ) : favoriteQuestions.length === 0 ? (
        <div className="favorites-panel-empty">
          <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4">
            <Filter className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="text-lg font-medium text-slate-800 mb-2">无匹配结果</h3>
          <p className="text-slate-500 text-sm">
            当前筛选条件下没有收藏的题目
          </p>
          <button
            onClick={() => setFilterChapter(null)}
            className="mt-4 text-pink-600 font-medium hover:text-pink-700"
          >
            清除筛选
          </button>
        </div>
      ) : (
        <VirtualScrollList
          items={favoriteQuestions}
          height={500}
          itemHeight={100}
          renderItem={renderFavoriteItem}
          virtualizationThreshold={50}
        />
      )}
    </div>
  );
};

export default FavoritesPanel;
