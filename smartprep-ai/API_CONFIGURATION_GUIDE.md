# DeepSeek API 配置指南

本指南将帮助您完成从零开始配置 DeepSeek API 的全过程，让您的智能刷题应用能够正常使用 AI 生成功能。

## 步骤一：创建环境变量文件

1. 在项目根目录下创建 `.env` 文件（如果尚不存在）
2. 在文件中添加以下内容：

```env
# DeepSeek API配置
VITE_DEEPSEEK_API_KEY=your_deepseek_api_key_here

# Gemini API配置（可选）
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

> **注意**：`.env` 文件已包含在 `.gitignore` 中，不会被提交到代码仓库，确保您的 API 密钥安全。

## 步骤二：获取 DeepSeek API 密钥

1. **访问 DeepSeek 官网**
   - 打开浏览器，访问 [https://platform.deepseek.com/](https://platform.deepseek.com/)

2. **注册账号**
   - 点击右上角的"注册"按钮
   - 填写邮箱、密码等信息完成注册
   - 验证邮箱地址

3. **登录账号**
   - 使用注册的邮箱和密码登录

4. **创建 API 密钥**
   - 登录后进入控制台/仪表板
   - 找到"API密钥"或"API Keys"选项
   - 点击"创建新密钥"或"Generate New Key"
   - 为密钥设置一个描述性名称（如"智能刷题应用"）
   - 系统将生成一个以"sk-"开头的密钥

5. **复制 API 密钥**
   - 立即复制生成的密钥（某些平台只显示一次）
   - 妥善保存密钥，不要分享给他人

## 步骤三：配置 API 密钥

1. **打开 `.env` 文件**
   - 在项目根目录中找到 `.env` 文件
   - 使用文本编辑器打开

2. **替换占位符**
   - 将 `your_deepseek_api_key_here` 替换为您在步骤二中获取的实际 API 密钥
   - 确保没有多余的空格或换行符

   示例：
   ```env
   # 替换前
   VITE_DEEPSEEK_API_KEY=your_deepseek_api_key_here
   
   # 替换后（请使用您自己的密钥）
   VITE_DEEPSEEK_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

3. **保存文件**

## 步骤四：验证配置

1. **重启开发服务器**
   - 如果服务器正在运行，按 `Ctrl+C` 停止
   - 重新运行：`npm run dev`

2. **检查 API 状态**
   - 打开应用后，进入"AI模拟题"章节
   - 查看顶部的"DeepSeek API状态"指示器：
     - 🔵 蓝色旋转：正在验证
     - 🟢 绿色对勾：API配置正确
     - 🔴 红色叉号：API配置有问题

3. **测试功能**
   - 点击"快速生成题目"按钮
   - 如果配置正确，应该能成功生成题目并显示在页面上

## 步骤五：高级验证（可选）

在浏览器控制台中运行以下命令进行详细测试：

```javascript
// 测试API密钥是否有效
validateAPIKey().then(result => console.log(result));

// 检查环境变量是否正确加载
console.log(import.meta.env.VITE_DEEPSEEK_API_KEY);
```

## 常见问题解决

### 问题1：API状态显示"API密钥是占位符"
**原因**：使用的是占位符而非实际API密钥
**解决**：确认已将 `.env` 文件中的占位符替换为真实API密钥

### 问题2：API状态显示"未找到API密钥"
**原因**：`.env` 文件未正确创建或读取
**解决**：
1. 确认 `.env` 文件位于项目根目录
2. 确认文件名正确（不是 ".env.txt" 或其他变体）
3. 重启开发服务器

### 问题3：API状态显示"网络连接错误"
**原因**：无法连接到DeepSeek API服务
**解决**：
1. 检查网络连接
2. 确认能访问 api.deepseek.com
3. 检查防火墙设置

### 问题4：点击"快速生成"显示"生成AI题目失败"
**原因**：API密钥无效或已过期
**解决**：
1. 确认API密钥正确复制（没有多余的空格或特殊字符）
2. 登录DeepSeek平台检查密钥状态
3. 如需要，生成新的API密钥

## 安全提示

- **不要**将包含真实API密钥的`.env`文件提交到Git仓库
- **不要**在代码中硬编码API密钥
- **定期**更换API密钥以确保安全
- **不要**在公共场所或不安全的网络环境中使用API密钥

## 技术支持

如果问题仍未解决，请检查：
1. 浏览器控制台的错误信息
2. 开发服务器终端的日志
3. API密钥是否正确复制（没有多余的空格或特殊字符）

## 相关链接

- [DeepSeek API 官方文档](https://platform.deepseek.com/docs)
- [项目仓库](https://github.com/your-username/smartprep-ai)
- [问题反馈](https://github.com/your-username/smartprep-ai/issues)