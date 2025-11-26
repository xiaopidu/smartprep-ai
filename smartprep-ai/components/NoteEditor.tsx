/**
 * NoteEditor 笔记编辑器组件
 * 
 * 支持为题目添加/编辑笔记，带展开/收起状态
 */

import React, { useState, useEffect, useRef } from 'react';
import { FileText, ChevronDown, ChevronUp, Save, Trash2, X } from 'lucide-react';

export interface NoteEditorProps {
  /** 题目ID */
  questionId: string;
  
  /** 当前笔记内容（如果已有） */
  initialContent?: string;
  
  /** 是否展开显示 */
  isExpanded: boolean;
  
  /** 切换展开/收起状态 */
  onToggleExpand: () => void;
  
  /** 保存笔记回调 */
  onSave: (questionId: string, content: string) => void;
  
  /** 删除笔记回调 */
  onDelete: (questionId: string) => void;
  
  /** 占位符文本 */
  placeholder?: string;
}

export const NoteEditor: React.FC<NoteEditorProps> = ({
  questionId,
  initialContent = '',
  isExpanded,
  onToggleExpand,
  onSave,
  onDelete,
  placeholder = '在这里记录你对这道题的理解、易错点、解题思路...',
}) => {
  const [content, setContent] = useState(initialContent);
  const [isDirty, setIsDirty] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 同步外部传入的内容
  useEffect(() => {
    setContent(initialContent);
    setIsDirty(false);
  }, [initialContent]);

  // 展开时自动聚焦
  useEffect(() => {
    if (isExpanded && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isExpanded]);

  // 内容变化处理
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setIsDirty(e.target.value !== initialContent);
  };

  // 保存笔记
  const handleSave = () => {
    onSave(questionId, content);
    setIsDirty(false);
  };

  // 删除笔记
  const handleDelete = () => {
    if (confirm('确定要删除这条笔记吗？')) {
      onDelete(questionId);
      setContent('');
      setIsDirty(false);
    }
  };

  // 取消编辑
  const handleCancel = () => {
    setContent(initialContent);
    setIsDirty(false);
    onToggleExpand();
  };

  const hasNote = initialContent.trim().length > 0;

  return (
    <div className="mt-4">
      {/* 切换按钮 */}
      <button
        onClick={onToggleExpand}
        className={`note-toggle-button ${hasNote ? 'has-note' : ''}`}
      >
        <FileText className="w-4 h-4" />
        <span>{hasNote ? '查看笔记' : '添加笔记'}</span>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {/* 展开的编辑器 */}
      {isExpanded && (
        <div className="note-editor mt-3 slide-up">
          <textarea
            ref={textareaRef}
            value={content}
            onChange={handleChange}
            placeholder={placeholder}
            rows={4}
            className="min-h-[100px]"
          />
          
          {/* 操作按钮 */}
          <div className="flex items-center justify-between px-3 py-2 bg-slate-50 border-t border-slate-100">
            <div className="text-xs text-slate-400">
              {content.length > 0 && `${content.length} 字`}
            </div>
            
            <div className="flex items-center gap-2">
              {/* 删除按钮（只在有已保存内容时显示） */}
              {hasNote && (
                <button
                  onClick={handleDelete}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs text-red-600 hover:bg-red-50 rounded-md transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  删除
                </button>
              )}
              
              {/* 取消按钮 */}
              <button
                onClick={handleCancel}
                className="flex items-center gap-1 px-3 py-1.5 text-xs text-slate-500 hover:bg-slate-100 rounded-md transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                取消
              </button>
              
              {/* 保存按钮 */}
              <button
                onClick={handleSave}
                disabled={!isDirty}
                className={`
                  flex items-center gap-1 px-3 py-1.5 text-xs rounded-md transition-colors
                  ${isDirty 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }
                `}
              >
                <Save className="w-3.5 h-3.5" />
                保存
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteEditor;
