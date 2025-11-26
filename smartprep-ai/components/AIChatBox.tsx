import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, Send, X, Loader2, Bot, User, Trash2, Minimize2, Maximize2 } from 'lucide-react';
import { STORAGE_KEYS } from '../types';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

interface AIChatBoxProps {
  isOpen: boolean;
  onToggle: () => void;
  currentQuestion?: {
    content: string;
    options?: string[];
    type: string;
  };
}

/**
 * 获取 DeepSeek API Key
 */
function getDeepSeekAPIKey(): string | null {
  try {
    const storedKey = localStorage.getItem(STORAGE_KEYS.DEEPSEEK_API_KEY);
    if (storedKey && storedKey.trim() !== '') {
      return storedKey;
    }
  } catch {
    console.warn('localStorage 不可用');
  }
  
  // 回退到环境变量
  const envKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
  if (envKey && envKey !== 'your_deepseek_api_key_here' && envKey !== 'PLACEHOLDER_API_KEY') {
    return envKey;
  }
  
  return null;
}

/**
 * AI 聊天助手组件
 */
export function AIChatBox({ isOpen, onToggle, currentQuestion }: AIChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // 自动滚动到最新消息
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // 聚焦输入框
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // 发送消息到 DeepSeek API
  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const apiKey = getDeepSeekAPIKey();
    if (!apiKey) {
      setError('请先在「API 设置」中配置 DeepSeek API Key');
      return;
    }

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: input.trim(),
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      // 构建上下文消息
      const contextMessages = [];
      
      // 系统提示
      let systemPrompt = `你是 SmartPrep AI 的智能学习助手，专门帮助用户解答 HCIA 认证考试相关问题。
请用简洁、专业的方式回答问题。如果用户问的是关于当前题目的问题，请结合题目内容给出解答。
回答时请注意：
1. 使用中文回答
2. 解释要清晰易懂
3. 如果涉及技术概念，请举例说明
4. 如果用户答错了题目，帮助分析错误原因`;

      // 如果有当前题目上下文，添加到系统提示
      if (currentQuestion) {
        systemPrompt += `\n\n当前用户正在做的题目：
题目类型：${currentQuestion.type}
题目内容：${currentQuestion.content}`;
        if (currentQuestion.options && currentQuestion.options.length > 0) {
          systemPrompt += `\n选项：\n${currentQuestion.options.map((opt, i) => `${String.fromCharCode(65 + i)}. ${opt}`).join('\n')}`;
        }
      }

      contextMessages.push({ role: 'system', content: systemPrompt });

      // 添加历史消息（最近10条）
      const recentMessages = messages.slice(-10);
      recentMessages.forEach(msg => {
        contextMessages.push({
          role: msg.role,
          content: msg.content,
        });
      });

      // 添加当前用户消息
      contextMessages.push({ role: 'user', content: userMessage.content });

      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: contextMessages,
          temperature: 0.7,
          max_tokens: 1000,
          stream: false,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `API 请求失败 (${response.status})`);
      }

      const data = await response.json();
      const assistantContent = data.choices?.[0]?.message?.content || '抱歉，我无法生成回复。';

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: assistantContent,
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error('AI Chat Error:', err);
      setError(err instanceof Error ? err.message : '发送消息失败，请重试');
    } finally {
      setIsLoading(false);
    }
  };

  // 清空聊天记录
  const clearMessages = () => {
    setMessages([]);
    setError(null);
  };

  // 处理键盘事件
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // 快速问题
  const quickQuestions = [
    '请解释这道题的答案',
    '这个知识点是什么意思？',
    '有什么记忆技巧吗？',
  ];

  // 如果未打开，不渲染任何内容
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="chatbox-container w-80 lg:w-96 flex-shrink-0 h-[calc(100vh-2rem)] sticky top-4 transition-all duration-300 ease-in-out"
    >
      {/* 聊天面板 */}
      <div
        className="h-full bg-white border border-orange-100 shadow-xl flex flex-col rounded-2xl overflow-hidden"
      >
        {/* 头部 */}
        <header className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-orange-50 to-pink-50 border-b border-orange-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800">AI 学习助手</h3>
              <p className="text-xs text-gray-500">有问题随时问我</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={clearMessages}
              className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-white/50 rounded-lg transition-colors"
              title="清空聊天"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={onToggle}
              className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-white/50 rounded-lg transition-colors"
              title="关闭"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* 消息列表 */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-orange-400" />
              </div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">开始对话</h4>
              <p className="text-xs text-gray-500 mb-4">
                有任何疑问都可以问我，我会帮你解答！
              </p>
              
              {/* 快速问题 */}
              <div className="space-y-2">
                {quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => setInput(q)}
                    className="block w-full text-left px-3 py-2 text-xs bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-lg transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                      : 'bg-gradient-to-r from-orange-500 to-pink-500'
                  }`}
                >
                  {msg.role === 'user' ? (
                    <User className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <Bot className="w-3.5 h-3.5 text-white" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-blue-500 text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words">{msg.content}</p>
                </div>
              </div>
            ))
          )}
          
          {/* 加载指示器 */}
          {isLoading && (
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
                <Bot className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="bg-gray-100 px-3 py-2 rounded-xl rounded-bl-sm">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* 错误提示 */}
        {error && (
          <div className="px-4 py-2 bg-red-50 border-t border-red-100">
            <p className="text-xs text-red-600">{error}</p>
          </div>
        )}

        {/* 输入区域 */}
        <div className="p-3 border-t border-gray-100 bg-gray-50">
          <div className="flex gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="输入你的问题..."
              className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              rows={1}
              style={{ minHeight: '40px', maxHeight: '100px' }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="px-3 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIChatBox;
