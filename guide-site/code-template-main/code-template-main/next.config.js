/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    // 启用服务器组件优化
  },
 
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  // 优化构建
  swcMinify: true,
  // 减少启动时间
  onDemandEntries: {
    // 页面在内存中保持的时间
    maxInactiveAge: 25 * 1000,
    // 同时保持的页面数量
    pagesBufferLength: 2,
  },
  // 优化图片加载
  images: {
    unoptimized: true
  },
  basePath: basePath(),

};

function basePath() {
  if (process.env.CI_PROJECT_NAMESPACE === undefined) {
    return '';
  }
  return `/${process.env.CI_PROJECT_NAMESPACE}/${process.env.CI_APP_NAME}`.trim();
}


console.log(nextConfig);

module.exports = nextConfig;
