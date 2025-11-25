import { createDeepSeekChat } from '../services/deepseekServiceLangchain';

export const validateAPIKey = async (): Promise<{ valid: boolean; message: string }> => {
  try {
    console.log('开始验证API密钥...');
    
    // 首先检查环境变量是否已加载
    const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
    console.log('API Key from env:', apiKey ? `${apiKey.substring(0, 8)}...` : 'undefined');
    
    if (!apiKey) {
      console.log('API密钥未设置');
      return { 
        valid: false, 
        message: "未找到API密钥，请确保.env文件中的VITE_DEEPSEEK_API_KEY已正确设置" 
      };
    }
    
    if (apiKey === 'your_deepseek_api_key_here' || apiKey === 'PLACEHOLDER_API_KEY') {
      console.log('API密钥是占位符');
      return { 
        valid: false, 
        message: "API密钥是占位符，请替换为有效的DeepSeek API密钥" 
      };
    }
    
    console.log('开始创建DeepSeek模型...');
    const model = createDeepSeekChat();
    
    console.log('开始发送测试请求...');
    // 发送一个简单的测试请求
    const result = await model.invoke([
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Say 'API key is working' in Chinese." }
    ]);
    
    console.log('API验证结果:', result);
    console.log('API验证成功');
    return { 
      valid: true, 
      message: "API密钥有效，可以正常使用" 
    };
  } catch (error) {
    console.error('API验证失败:', error);
    console.error('错误详情:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });
    
    let errorMessage = "API密钥验证失败";
    
    if (error instanceof Error) {
      if (error.message.includes("API Key is missing")) {
        errorMessage = "未找到API密钥，请在.env文件中设置VITE_DEEPSEEK_API_KEY";
      } else if (error.message.includes("placeholder")) {
        errorMessage = "API密钥是占位符，请替换为有效的DeepSeek API密钥";
      } else if (error.message.includes("401") || error.message.includes("unauthorized")) {
        errorMessage = "API密钥无效或已过期，请检查密钥是否正确";
      } else if (error.message.includes("fetch") || error.message.includes("network")) {
        errorMessage = "网络连接错误，请检查网络连接并重试";
      } else {
        errorMessage = `API验证错误: ${error.message}`;
      }
    }
    
    return { 
      valid: false, 
      message: errorMessage 
    };
  }
};

// 在浏览器控制台中运行 validateAPIKey() 来测试API密钥
(window as any).validateAPIKey = validateAPIKey;