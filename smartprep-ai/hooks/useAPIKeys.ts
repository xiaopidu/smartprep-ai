import { useState, useCallback, useEffect } from 'react';
import { STORAGE_KEYS } from '../types';

type APIProvider = 'deepseek' | 'gemini';
type ConnectionStatus = 'idle' | 'testing' | 'success' | 'error';

interface APIKeyState {
  key: string;
  status: ConnectionStatus;
  errorMessage?: string;
}

interface UseAPIKeysReturn {
  /** DeepSeek API Key 状态 */
  deepseek: APIKeyState;
  /** Gemini API Key 状态 */
  gemini: APIKeyState;
  /** 设置 DeepSeek API Key */
  setDeepseekKey: (key: string) => void;
  /** 设置 Gemini API Key */
  setGeminiKey: (key: string) => void;
  /** 测试 DeepSeek 连接 */
  testDeepseek: () => Promise<boolean>;
  /** 测试 Gemini 连接 */
  testGemini: () => Promise<boolean>;
  /** 保存所有 API Keys 到 localStorage */
  saveKeys: () => void;
  /** 是否有未保存的更改 */
  hasUnsavedChanges: boolean;
  /** 重置为已保存的值 */
  resetToSaved: () => void;
}

/**
 * 从 localStorage 获取 API Key，如果没有则回退到环境变量
 */
function getStoredAPIKey(provider: APIProvider): string {
  const storageKey = provider === 'deepseek' 
    ? STORAGE_KEYS.DEEPSEEK_API_KEY 
    : STORAGE_KEYS.GEMINI_API_KEY;
  
  try {
    const storedKey = localStorage.getItem(storageKey);
    if (storedKey) return storedKey;
  } catch {
    // localStorage 不可用（隐私模式）
    console.warn('localStorage 不可用，API Key 将无法持久保存');
  }
  
  // 回退到环境变量
  if (provider === 'deepseek') {
    return import.meta.env.VITE_DEEPSEEK_API_KEY || '';
  }
  return import.meta.env.VITE_GEMINI_API_KEY || '';
}

/**
 * 测试 DeepSeek API 连接
 */
async function testDeepseekConnection(apiKey: string): Promise<{ success: boolean; error?: string }> {
  if (!apiKey || apiKey.trim() === '') {
    return { success: false, error: '请输入 API Key' };
  }
  
  try {
    const response = await fetch('https://api.deepseek.com/v1/models', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      return { success: true };
    }
    
    if (response.status === 401) {
      return { success: false, error: 'API Key 无效或已过期' };
    }
    
    if (response.status === 429) {
      return { success: false, error: '请求过于频繁，请稍后再试' };
    }
    
    return { success: false, error: `连接失败 (${response.status})` };
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return { success: false, error: '网络连接失败，请检查网络' };
    }
    return { success: false, error: '连接测试失败' };
  }
}

/**
 * 测试 Gemini API 连接
 */
async function testGeminiConnection(apiKey: string): Promise<{ success: boolean; error?: string }> {
  if (!apiKey || apiKey.trim() === '') {
    return { success: false, error: '请输入 API Key' };
  }
  
  try {
    // Gemini API 验证端点
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    
    if (response.ok) {
      return { success: true };
    }
    
    if (response.status === 400 || response.status === 403) {
      return { success: false, error: 'API Key 无效或权限不足' };
    }
    
    return { success: false, error: `连接失败 (${response.status})` };
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return { success: false, error: '网络连接失败，请检查网络' };
    }
    return { success: false, error: '连接测试失败' };
  }
}

/**
 * API Keys 管理 Hook
 * 
 * 功能:
 * - 读取: localStorage > 环境变量
 * - 写入: localStorage
 * - 测试连接: 调用各 API 的验证端点
 */
export function useAPIKeys(): UseAPIKeysReturn {
  // 保存的值（localStorage 中的值）
  const [savedDeepseekKey, setSavedDeepseekKey] = useState(() => getStoredAPIKey('deepseek'));
  const [savedGeminiKey, setSavedGeminiKey] = useState(() => getStoredAPIKey('gemini'));
  
  // 当前编辑的值
  const [deepseekKey, setDeepseekKey] = useState(savedDeepseekKey);
  const [geminiKey, setGeminiKey] = useState(savedGeminiKey);
  
  // 连接状态
  const [deepseekStatus, setDeepseekStatus] = useState<ConnectionStatus>('idle');
  const [geminiStatus, setGeminiStatus] = useState<ConnectionStatus>('idle');
  
  // 错误信息
  const [deepseekError, setDeepseekError] = useState<string>();
  const [geminiError, setGeminiError] = useState<string>();

  // 检查是否有未保存的更改
  const hasUnsavedChanges = deepseekKey !== savedDeepseekKey || geminiKey !== savedGeminiKey;

  // 初始化时检查已保存的 Key 状态
  useEffect(() => {
    if (savedDeepseekKey) {
      setDeepseekStatus('success');
    }
    if (savedGeminiKey) {
      setGeminiStatus('success');
    }
  }, []);

  // 测试 DeepSeek 连接
  const testDeepseek = useCallback(async (): Promise<boolean> => {
    setDeepseekStatus('testing');
    setDeepseekError(undefined);
    
    const result = await testDeepseekConnection(deepseekKey);
    
    if (result.success) {
      setDeepseekStatus('success');
      return true;
    } else {
      setDeepseekStatus('error');
      setDeepseekError(result.error);
      return false;
    }
  }, [deepseekKey]);

  // 测试 Gemini 连接
  const testGemini = useCallback(async (): Promise<boolean> => {
    setGeminiStatus('testing');
    setGeminiError(undefined);
    
    const result = await testGeminiConnection(geminiKey);
    
    if (result.success) {
      setGeminiStatus('success');
      return true;
    } else {
      setGeminiStatus('error');
      setGeminiError(result.error);
      return false;
    }
  }, [geminiKey]);

  // 保存 Keys 到 localStorage
  const saveKeys = useCallback(() => {
    try {
      if (deepseekKey) {
        localStorage.setItem(STORAGE_KEYS.DEEPSEEK_API_KEY, deepseekKey);
      } else {
        localStorage.removeItem(STORAGE_KEYS.DEEPSEEK_API_KEY);
      }
      
      if (geminiKey) {
        localStorage.setItem(STORAGE_KEYS.GEMINI_API_KEY, geminiKey);
      } else {
        localStorage.removeItem(STORAGE_KEYS.GEMINI_API_KEY);
      }
      
      setSavedDeepseekKey(deepseekKey);
      setSavedGeminiKey(geminiKey);
    } catch {
      console.warn('无法保存到 localStorage');
    }
  }, [deepseekKey, geminiKey]);

  // 重置为已保存的值
  const resetToSaved = useCallback(() => {
    setDeepseekKey(savedDeepseekKey);
    setGeminiKey(savedGeminiKey);
    setDeepseekStatus(savedDeepseekKey ? 'success' : 'idle');
    setGeminiStatus(savedGeminiKey ? 'success' : 'idle');
    setDeepseekError(undefined);
    setGeminiError(undefined);
  }, [savedDeepseekKey, savedGeminiKey]);

  // 更新 key 时重置状态
  const handleSetDeepseekKey = useCallback((key: string) => {
    setDeepseekKey(key);
    setDeepseekStatus('idle');
    setDeepseekError(undefined);
  }, []);

  const handleSetGeminiKey = useCallback((key: string) => {
    setGeminiKey(key);
    setGeminiStatus('idle');
    setGeminiError(undefined);
  }, []);

  return {
    deepseek: {
      key: deepseekKey,
      status: deepseekStatus,
      errorMessage: deepseekError,
    },
    gemini: {
      key: geminiKey,
      status: geminiStatus,
      errorMessage: geminiError,
    },
    setDeepseekKey: handleSetDeepseekKey,
    setGeminiKey: handleSetGeminiKey,
    testDeepseek,
    testGemini,
    saveKeys,
    hasUnsavedChanges,
    resetToSaved,
  };
}

/**
 * 获取当前有效的 API Key（供服务层使用）
 * 优先从 localStorage 读取，回退到环境变量
 */
export function getAPIKey(provider: APIProvider): string {
  return getStoredAPIKey(provider);
}

export default useAPIKeys;
