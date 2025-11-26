import React from 'react';
import { BookOpen, BarChart2 } from 'lucide-react';
import { Chapter } from '../types';

interface ChapterCardProps {
  chapter: Chapter;
  totalQuestions: number;
  completedQuestions: number;
  onClick: () => void;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({ 
  chapter, 
  totalQuestions, 
  completedQuestions,
  onClick 
}) => {
  const progress = totalQuestions > 0 ? Math.round((completedQuestions / totalQuestions) * 100) : 0;

  return (
    <div 
      onClick={onClick}
      className="chapter-card-hover bg-white rounded-xl shadow-sm p-6 cursor-pointer group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="bg-orange-50 p-3 rounded-lg group-hover:bg-orange-100 transition-colors">
          <BookOpen className="w-6 h-6 text-orange-500" />
        </div>
        <span className="text-xs font-semibold px-2 py-1 bg-pink-50 text-pink-600 rounded-full">
          {totalQuestions} 题
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-slate-800 mb-2">{chapter.title}</h3>
      <p className="text-slate-500 text-sm mb-4 line-clamp-2">{chapter.description}</p>
      
      <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2">
        <div 
          className="chapter-progress-bar transition-all duration-300" 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="flex justify-between items-center text-xs text-slate-400">
        <div className="flex items-center gap-1">
          <BarChart2 className="w-3 h-3" />
          <span>进度: {progress}%</span>
        </div>
        <span>已完成 {completedQuestions}/{totalQuestions}</span>
      </div>
    </div>
  );
};
