import React, { useState, useCallback } from 'react';
import { Settings, X, Eye, EyeOff, Link, CheckCircle, AlertCircle, Loader2, Key } from 'lucide-react';
import { useAPIKeys } from '../hooks/useAPIKeys';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

type ConnectionStatus = 'idle' | 'testing' | 'success' | 'error';

interface APIKeyInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onTest: () => Promise<boolean>;
  status: ConnectionStatus;
  errorMessage?: string;
  placeholder?: string;
}

/**
 * API Key 输入组件
 * 
 * 功能:
 * - 密码显示/隐藏切换
 * - 状态指示（idle/testing/success/error）
 * - 测试连接按钮
 */
function APIKeyInput({
  label,
  value,
  onChange,
  onTest,
  status,
  errorMessage,
  placeholder = 'sk-xxxx...',
}: APIKeyInputProps) {
  const [showKey, setShowKey] = useState(false);
  const [isTesting, setIsTesting] = useState(false);

  const handleTest = useCallback(async () => {
    setIsTesting(true);
    await onTest();
    setIsTesting(false);
  }, [onTest]);

  const renderStatusIcon = () => {
    switch (status) {
      case 'testing':
        return <Loader2 className="w-4 h-4 text-orange-500 animate-spin" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'testing':
        return '测试中...';
      case 'success':
        return '连接成功';
      case 'error':
        return errorMessage || '连接失败';
      default:
        return value ? '' : '未配置';
    }
  };

  const statusTextColor = {
    idle: value ? 'text-gray-400' : 'text-amber-500',
    testing: 'text-orange-500',
    success: 'text-green-600',
    error: 'text-red-500',
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      
      <div className="relative">
        <input
          type={showKey ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2.5 pr-12 rounded-lg border border-orange-200
            bg-white text-gray-900 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent
            transition-all duration-200"
        />
        
        {/* 显示/隐藏按钮 */}
        <button
          type="button"
          onClick={() => setShowKey(!showKey)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1
            text-gray-400 hover:text-gray-600 transition-colors"
          title={showKey ? '隐藏' : '显示'}
        >
          {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>

      {/* 状态和测试按钮 */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handleTest}
          disabled={isTesting || !value}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm
            bg-orange-50 text-orange-700 rounded-lg
            hover:bg-orange-100 disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors duration-200"
        >
          <Link className="w-3.5 h-3.5" />
          测试连接
        </button>

        <div className={`flex items-center gap-1.5 text-sm ${statusTextColor[status]}`}>
          {renderStatusIcon()}
          <span>{getStatusText()}</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 设置面板组件
 * 
 * 功能:
 * - API Key 配置（DeepSeek、Gemini）
 * - 测试连接
 * - 保存到 localStorage
 */
export function SettingsPanel({ isOpen, onClose }: SettingsPanelProps) {
  const {
    deepseek,
    gemini,
    setDeepseekKey,
    setGeminiKey,
    testDeepseek,
    testGemini,
    saveKeys,
    hasUnsavedChanges,
    resetToSaved,
  } = useAPIKeys();

  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = useCallback(() => {
    setIsSaving(true);
    saveKeys();
    setIsSaving(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  }, [saveKeys]);

  const handleClose = useCallback(() => {
    if (hasUnsavedChanges) {
      if (window.confirm('有未保存的更改，确定要关闭吗？')) {
        resetToSaved();
        onClose();
      }
    } else {
      onClose();
    }
  }, [hasUnsavedChanges, resetToSaved, onClose]);

  if (!isOpen) return null;

  return (
    <div className="settings-panel-overlay fixed inset-0 z-50 flex items-center justify-center">
      {/* 背景遮罩 */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* 面板内容 */}
      <div className="settings-panel relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4
        animate-fade-in overflow-hidden">
        
        {/* 头部 */}
        <header className="flex items-center justify-between px-6 py-4 
          bg-gradient-to-r from-orange-50 to-pink-50 border-b border-orange-100">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-semibold text-gray-800">设置</h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 
              hover:bg-white/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* 内容 */}
        <div className="p-6 space-y-6">
          {/* API 密钥配置区域 */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Key className="w-4 h-4 text-orange-500" />
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                API 密钥配置
              </h3>
            </div>

            <div className="space-y-5">
              {/* DeepSeek API Key */}
              <APIKeyInput
                label="DeepSeek API Key"
                value={deepseek.key}
                onChange={setDeepseekKey}
                onTest={testDeepseek}
                status={deepseek.status}
                errorMessage={deepseek.errorMessage}
                placeholder="sk-xxxx..."
              />

              {/* Gemini API Key */}
              <APIKeyInput
                label="Gemini API Key"
                value={gemini.key}
                onChange={setGeminiKey}
                onTest={testGemini}
                status={gemini.status}
                errorMessage={gemini.errorMessage}
                placeholder="AIza..."
              />
            </div>
          </section>

          {/* 提示信息 */}
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-xs text-amber-700 leading-relaxed">
              💡 <strong>提示：</strong>API Key 仅保存在本地浏览器中，不会上传到任何服务器。
              清除浏览器数据会导致 API Key 丢失。
            </p>
          </div>
        </div>

        {/* 底部操作栏 */}
        <footer className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className={`text-sm ${hasUnsavedChanges ? 'text-amber-600' : 'text-gray-400'}`}>
              {hasUnsavedChanges && '● 有未保存的更改'}
            </span>
            
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className={`px-5 py-2 rounded-lg font-medium text-sm
                transition-all duration-200
                ${saveSuccess 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-md'
                }
                disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {saveSuccess ? '✓ 已保存' : '保存设置'}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default SettingsPanel;
