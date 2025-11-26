// preload.js - 在渲染进程中预加载的脚本
// 用于安全地暴露 Node.js 功能给渲染进程

const { contextBridge, ipcRenderer } = require('electron');

// 暴露安全的 API 给渲染进程
contextBridge.exposeInMainWorld('electronAPI', {
  // 获取平台信息
  platform: process.platform,
  
  // 获取版本信息
  versions: {
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron,
  },
  
  // 检测是否在 Electron 环境中运行
  isElectron: true,
});

// 日志输出
console.log('SmartPrep AI Desktop App 已加载');
console.log('Electron version:', process.versions.electron);
