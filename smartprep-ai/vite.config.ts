import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // 显式加载.env文件中的环境变量
    const env = loadEnv(mode, process.cwd());
    console.log('Environment variables loaded:', Object.keys(env));
    console.log('VITE_DEEPSEEK_API_KEY found:', !!env.VITE_DEEPSEEK_API_KEY);
    
    return {
      // 使用相对路径，以便 Electron 能正确加载资源
      base: './',
      server: {
        port: 3000,
        host: '0.0.0.0',
        fs: {
          // 允许访问项目根目录
          allow: ['..']
        }
      },
      plugins: [react()],
      // 确保VITE_前缀的环境变量正确传递给客户端
      // 注意：Vite会自动处理VITE_前缀的环境变量，这里只是为了确保
      define: {
        // 添加调试日志
        __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
