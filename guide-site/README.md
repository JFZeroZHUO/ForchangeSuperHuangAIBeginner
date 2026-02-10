# AI 编程新手入门指南 - 网页版

这是一个基于 Next.js 开发的 AI 编程新手入门教程网站。

## 🚀 项目简介

本项目旨在将《新手入门指南》PDF 转化为一个结构化的 Web 学习平台，解决新手“不知道从哪开始”、“环境配置难”、“报错不敢问”的痛点。

主要包含以下内容：
- **环境准备**：科学上网、IDE 选择 (Trae/Cursor)
- **入门实战**：开发第一个网页、环境五件套配置
- **高级进阶**：Claude Code 安装与使用、Vibe Coding 实战

## 🛠️ 本地开发

1. 进入项目目录：
   ```bash
   cd guide-site
   ```

2. 安装依赖：
   ```bash
   npm install
   # or
   yarn install
   ```

3. 启动开发服务器：
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 📦 Vercel 部署指南 (重要)

由于本项目是一个 Monorepo 结构（网站代码在 `guide-site` 子目录下），部署到 Vercel 时需要特别注意配置。

### 部署步骤：

1. **导入项目**：在 Vercel 中导入你的 GitHub 仓库。
2. **配置根目录 (Root Directory)**：
   - 在 Vercel 项目设置 (Settings) -> General 中。
   - 将 **Root Directory** 设置为 `guide-site`。
   - 点击 Save 保存。
3. **检查输出目录 (Output Directory)**：
   - 确保 **Output Directory** 为空（默认值），不要手动填写 `out` 或 `dist`。
4. **重新部署**：
   - 修改配置后，务必去 Deployments 页面点击 **Redeploy** 才能生效。

### 常见问题 (FAQ)

- **Q: 部署成功但访问显示 404？**
  - A: 99% 是因为 Root Directory 没设置对。请确保在 Vercel 设置里填入了 `guide-site`，并且**重新部署**了一次。

- **Q: 构建报错 "Type error: Cannot find module..."？**
  - A: 这是 TypeScript 类型检查错误。请确保所有引用的组件都存在。我们已经修复了 `CompletionCheckbox.tsx` 中的引用错误。

## 📚 学习资源

- [Next.js 文档](https://nextjs.org/docs)
- [Vercel 部署文档](https://vercel.com/docs)
