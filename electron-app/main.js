const { app, BrowserWindow, shell, Menu } = require('electron');
const path = require('path');

// 保持对window对象的全局引用，避免JavaScript对象被垃圾回收时窗口自动关闭
let mainWindow;

function createWindow() {
  // 隐藏菜单栏
  Menu.setApplicationMenu(null);
  
  // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1024,
    minHeight: 768,
    title: 'SmartPrep AI - 智能刷题助手',
    icon: path.join(__dirname, 'icons', 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    // 美化窗口
    backgroundColor: '#fff7ed',
    show: false, // 先隐藏，等加载完成后显示
    autoHideMenuBar: true, // 隐藏菜单栏
  });

  // 加载本地构建的网页
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  mainWindow.loadFile(indexPath);

  // 窗口准备好后显示
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // 在外部浏览器中打开链接
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  // 处理导航到外部链接
  mainWindow.webContents.on('will-navigate', (event, url) => {
    // 如果不是本地文件，在外部浏览器打开
    if (!url.startsWith('file://')) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  // 窗口关闭时的处理
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Electron 完成初始化后创建窗口
app.whenReady().then(() => {
  createWindow();

  // macOS 特殊处理：点击 dock 图标时重新创建窗口
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 所有窗口关闭时退出应用（macOS 除外）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// 安全性设置
app.on('web-contents-created', (event, contents) => {
  contents.on('will-attach-webview', (event, webPreferences, params) => {
    // 禁用 webview
    event.preventDefault();
  });
});
