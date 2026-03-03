# Netlify 部署指南

## 问题排查

如果部署后页面显示空白，请检查以下几点：

### 1. 构建配置

确保 Netlify 的构建设置如下：
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18.x 或更高

### 2. 环境变量

通常不需要环境变量，但如果需要可以添加：
- `NODE_VERSION=18` (在 Netlify 设置中)

### 3. 部署步骤

#### 方法一：通过 Git 连接（推荐）

1. 将代码推送到 GitHub/GitLab/Bitbucket
2. 在 Netlify 中点击 "New site from Git"
3. 选择你的仓库
4. Netlify 会自动检测 `netlify.toml` 配置
5. 点击 "Deploy site"

#### 方法二：手动拖拽部署

1. 在本地运行构建：
   ```bash
   npm install
   npm run build
   ```
2. 将 `dist` 文件夹拖拽到 Netlify 的部署区域

### 4. 常见问题

#### 问题：页面显示空白
**解决方案**：
- 检查浏览器控制台是否有错误
- 确保 `netlify.toml` 文件在项目根目录
- 确保 `public/_redirects` 文件存在

#### 问题：404 错误
**解决方案**：
- 确保 `_redirects` 文件配置正确
- 检查 `netlify.toml` 中的重定向规则

#### 问题：样式不显示
**解决方案**：
- 确保 Tailwind CSS 构建正确
- 检查 `dist` 文件夹中是否有 CSS 文件

### 5. 验证部署

部署成功后，你应该能看到：
- 登录界面正常显示
- 所有样式正确加载
- 页面可以正常交互

### 6. 检查构建日志

在 Netlify 的部署日志中，应该看到：
```
✓ built in XXXms
```

如果看到错误，请检查：
- Node.js 版本是否兼容
- 所有依赖是否正确安装
- 构建命令是否正确

## 快速修复

如果仍然无法显示，尝试：

1. **清除 Netlify 缓存**：
   - 在 Netlify 设置中清除构建缓存
   - 重新部署

2. **检查文件路径**：
   - 确保所有文件路径使用相对路径
   - 检查 `index.html` 中的脚本路径

3. **本地测试构建**：
   ```bash
   npm run build
   npm run preview
   ```
   如果本地预览正常，问题可能在 Netlify 配置

## 联系支持

如果问题仍然存在，请提供：
- Netlify 构建日志
- 浏览器控制台错误信息
- 部署的 URL

