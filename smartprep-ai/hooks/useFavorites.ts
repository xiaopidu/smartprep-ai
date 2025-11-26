/**
 * useFavorites Hook
 * 
 * 管理题目收藏状态，提供增删查改功能
 * 数据持久化到 localStorage
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Favorite, FavoriteList, STORAGE_KEYS } from '../types';

/**
 * useFavorites Hook 返回类型
 */
export interface UseFavoritesReturn {
  /** 收藏列表 */
  favorites: FavoriteList;
  
  /** 添加收藏 */
  addFavorite: (questionId: string, chapter: number) => void;
  
  /** 移除收藏 */
  removeFavorite: (questionId: string) => void;
  
  /** 切换收藏状态 */
  toggleFavorite: (questionId: string, chapter: number) => void;
  
  /** 检查是否已收藏 */
  isFavorite: (questionId: string) => boolean;
  
  /** 获取所有收藏数组 */
  getAllFavorites: () => Favorite[];
  
  /** 按章节筛选收藏 */
  getFavoritesByChapter: (chapterId: number) => Favorite[];
  
  /** 收藏总数 */
  count: number;
}

/**
 * 收藏管理 Hook
 * 
 * @example
 * ```tsx
 * const { favorites, toggleFavorite, isFavorite, count } = useFavorites();
 * 
 * // 切换收藏状态
 * <button onClick={() => toggleFavorite(question.id, question.chapterId)}>
 *   {isFavorite(question.id) ? '取消收藏' : '收藏'}
 * </button>
 * ```
 */
export function useFavorites(): UseFavoritesReturn {
  // 从 localStorage 初始化收藏列表
  const [favorites, setFavorites] = useState<FavoriteList>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      if (saved) {
        const parsed = JSON.parse(saved);
        // 验证数据格式
        if (typeof parsed === 'object' && parsed !== null) {
          return parsed;
        }
      }
    } catch (error) {
      console.error('读取收藏数据失败:', error);
    }
    return {};
  });

  // 持久化到 localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    } catch (error) {
      console.error('保存收藏数据失败:', error);
    }
  }, [favorites]);

  // 添加收藏
  const addFavorite = useCallback((questionId: string, chapter: number) => {
    setFavorites(prev => ({
      ...prev,
      [questionId]: {
        questionId,
        chapter,
        favoriteAt: Date.now(),
      },
    }));
  }, []);

  // 移除收藏
  const removeFavorite = useCallback((questionId: string) => {
    setFavorites(prev => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  }, []);

  // 切换收藏状态
  const toggleFavorite = useCallback((questionId: string, chapter: number) => {
    setFavorites(prev => {
      if (questionId in prev) {
        // 已收藏，取消收藏
        const next = { ...prev };
        delete next[questionId];
        return next;
      } else {
        // 未收藏，添加收藏
        return {
          ...prev,
          [questionId]: {
            questionId,
            chapter,
            favoriteAt: Date.now(),
          },
        };
      }
    });
  }, []);

  // 检查是否已收藏
  const isFavorite = useCallback((questionId: string): boolean => {
    return questionId in favorites;
  }, [favorites]);

  // 获取所有收藏数组（按收藏时间倒序）
  const getAllFavorites = useCallback((): Favorite[] => {
    return Object.values(favorites).sort((a, b) => b.favoriteAt - a.favoriteAt);
  }, [favorites]);

  // 按章节筛选收藏
  const getFavoritesByChapter = useCallback((chapterId: number): Favorite[] => {
    return Object.values(favorites)
      .filter(f => f.chapter === chapterId)
      .sort((a, b) => b.favoriteAt - a.favoriteAt);
  }, [favorites]);

  // 收藏总数
  const count = useMemo(() => Object.keys(favorites).length, [favorites]);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    getAllFavorites,
    getFavoritesByChapter,
    count,
  };
}

export default useFavorites;
