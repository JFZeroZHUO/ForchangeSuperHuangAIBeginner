import { 
  Terminal, 
  Code2, 
  Rocket, 
  AlertCircle, 
  Download, 
  Cpu,
  Globe,
  Settings
} from "lucide-react";

export const docsConfig = [
  {
    title: "第一阶段：环境准备",
    items: [
      { title: "突破限制：开启全球 AI 视野", href: "/setup/network", icon: Globe, description: "配置网络环境，访问 GitHub 和 Claude。" },
      { title: "神器对决：Trae vs Cursor 谁更强？", href: "/setup/ide", icon: Code2, description: "对比下载最适合新手的 AI 编辑器。" },
    ],
  },
  {
    title: "第二阶段：入门实战",
    items: [
      { title: "零基础首秀：10分钟上线你的网页", href: "/web-dev/first-site", icon: Terminal, description: "三个实战选题：字幕生成器、小游戏、五宫格。" },
      { title: "拒绝环境焦虑：一键搞定开发五件套", href: "/web-dev/tools", icon: Settings, description: "安装 Node.js, Git, Python 等基础工具。" },
      { title: "【选修】把海外网页，解析到国内", href: "/web-dev/domain-binding", icon: Globe, description: "无需备案，解决 Vercel 访问被墙/拦截问题。" },
    ],
  },
  {
    title: "第三阶段：高级进阶",
    items: [
      { title: "最强终端：让 Claude Code 替你写代码", href: "/claude/install", icon: Terminal, description: "安装 Claude 终端工具。" },
      { title: "vibe coding的提示词神器", href: "/claude/api", icon: Cpu, description: "配置国内中转 API 连接。" },
      { title: "效率爆炸：AI 自动编程实战揭秘", href: "/claude/automation", icon: Rocket, description: "让 AI 自动写代码、重构、写测试。" },
    ],
  },
  {
    title: "新手村结业·开启社团学习",
    items: [
      { title: "别再瞎问了：这样提问解决率 100%", href: "/appendix/questions", icon: AlertCircle, description: "如何高效提问解决报错。" },
      { title: "新手村结业：送你社团所有教学资料", href: "/appendix/resources", icon: Download, description: "常用工具官方下载链接。" },
    ],
  },
];
