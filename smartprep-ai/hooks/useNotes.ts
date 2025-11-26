/**
 * useNotes Hook
 * 
 * 管理题目笔记，提供增删查改功能
 * 数据持久化到 localStorage
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { QuestionNote, NoteList, STORAGE_KEYS } from '../types';

/**
 * useNotes Hook 返回类型
 */
export interface UseNotesReturn {
  /** 笔记列表 */
  notes: NoteList;
  
  /** 保存笔记（新增或更新） */
  saveNote: (questionId: string, content: string) => void;
  
  /** 删除笔记 */
  deleteNote: (questionId: string) => void;
  
  /** 获取笔记内容 */
  getNote: (questionId: string) => QuestionNote | null;
  
  /** 检查是否有笔记 */
  hasNote: (questionId: string) => boolean;
  
  /** 有笔记的题目数量 */
  count: number;
}

/**
 * 笔记管理 Hook
 * 
 * @example
 * ```tsx
 * const { notes, saveNote, deleteNote, getNote, hasNote, count } = useNotes();
 * 
 * // 保存笔记
 * saveNote(question.id, '这道题的关键是理解...');
 * 
 * // 获取笔记
 * const note = getNote(question.id);
 * ```
 */
export function useNotes(): UseNotesReturn {
  // 从 localStorage 初始化笔记列表
  const [notes, setNotes] = useState<NoteList>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.NOTES);
      if (saved) {
        const parsed = JSON.parse(saved);
        // 验证数据格式
        if (typeof parsed === 'object' && parsed !== null) {
          return parsed;
        }
      }
    } catch (error) {
      console.error('读取笔记数据失败:', error);
    }
    return {};
  });

  // 持久化到 localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
    } catch (error) {
      console.error('保存笔记数据失败:', error);
    }
  }, [notes]);

  // 保存笔记（新增或更新）
  const saveNote = useCallback((questionId: string, content: string) => {
    // 如果内容为空，视为删除
    const trimmedContent = content.trim();
    if (!trimmedContent) {
      setNotes(prev => {
        const next = { ...prev };
        delete next[questionId];
        return next;
      });
      return;
    }

    setNotes(prev => ({
      ...prev,
      [questionId]: {
        questionId,
        content: trimmedContent,
        updatedAt: Date.now(),
      },
    }));
  }, []);

  // 删除笔记
  const deleteNote = useCallback((questionId: string) => {
    setNotes(prev => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  }, []);

  // 获取笔记内容
  const getNote = useCallback((questionId: string): QuestionNote | null => {
    return notes[questionId] || null;
  }, [notes]);

  // 检查是否有笔记
  const hasNote = useCallback((questionId: string): boolean => {
    const note = notes[questionId];
    return Boolean(note && note.content.trim());
  }, [notes]);

  // 有笔记的题目数量
  const count = useMemo(() => {
    return Object.values(notes).filter(n => n.content.trim()).length;
  }, [notes]);

  return {
    notes,
    saveNote,
    deleteNote,
    getNote,
    hasNote,
    count,
  };
}

export default useNotes;
