"use client";

import { useState, Fragment } from "react";
import { 
  CheckCircle2, 
  Clock, 
  FileText, 
  RotateCw, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp,
  GraduationCap,
  Rocket,
  Zap,
  Brain,
  MonitorPlay,
  Search,
  BookOpen,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---

type Status = "ready" | "pending" | "writing" | "updating";

interface CourseItem {
  id: string;
  title: string;
  description?: string;
  status: Status;
  link?: string;
  linkText?: string;
}

interface CoursePart {
  id: string;
  title: string;
  items: CourseItem[];
}

interface CourseStage {
  id: string;
  title: string;
  description: string;
  color: "blue" | "violet" | "emerald" | "amber" | "slate";
  icon: any;
  parts: CoursePart[];
}

// --- Data (Based on Excel) ---

const COURSE_STAGES: CourseStage[] = [
  {
    id: "stage1",
    title: "基础入门阶段",
    description: "从零开始，掌握AI编程的核心工具与思维",
    color: "blue",
    icon: Rocket,
    parts: [
      {
        id: "part1",
        title: "Part 1：光速入门",
        items: [
          { id: "1.1", title: "快速上手：工具开发与微信小游戏", description: "从零开始，1小时内完成你的第一个工具开发与微信小游戏上线。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/Nndpw4zstiNpeKkA42KclGHanwc" },
          { id: "1.2", title: "基础四件套+第一个网站部署", description: "掌握HTML/CSS/JS基础，并成功部署你的第一个个人网站。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/FoUYwTrRjiP1oSkxrMAcCBSGnBd" },
          { id: "1.3", title: "多维表格创建专属博客网站", description: "利用飞书多维表格作为CMS，快速搭建动态内容的个人博客。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/Sk9qwDj3qifN5ekWpDMclieynge" },
          { id: "1.4", title: "Github开源软件快速开发", description: "学习开源精神，利用Github Copilot快速参与或创建开源项目。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/A71jwOqMCiZvOikqYTrcSVt0n7b" },
        ]
      },
      {
        id: "part2",
        title: "Part 2：必备技能",
        items: [
          { id: "2.1", title: "购买并使用自己的域名", description: "拥有互联网上的个人品牌标识，全流程演示域名购买与解析。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/Tl9wwwVhyiqQB4kAjGncBw3HnQf" },
          { id: "2.2", title: "注册开发并上线微信小程序", description: "打通移动端流量入口，完成微信小程序的注册、开发与审核上线。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/V7VAwcChJiamC2kxq6JcJQnon8e" },
          { id: "2.3", title: "全新的AI编程开发流程 (Vibe Coding)", description: "掌握Next.js + Vercel + AI的高效开发范式，提升10倍效率。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/Qab2wzDwmiQrhKkqjUDcSvw9nCe" },
          { id: "2.4", title: "数据库：接入Supabase", description: "搞定后端！接入Supabase实现用户登录注册与积分系统。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/Houhwsok0ijYGvk3l2nccdB8nRd" },
          { id: "2.5", title: "接入国内支付（微信、支付宝）", description: "商业化闭环！在项目中集成微信支付与支付宝，实现收款功能。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/Houhwsok0ijYGvk3l2nccdB8nRd" },
          { id: "2.6", title: "接入海外支付（Creem）", description: "出海必备！接入Creem支付，轻松赚取美金。", status: "updating", link: "#" },
        ]
      }
    ]
  },
  {
    id: "stage2",
    title: "实战项目阶段",
    description: "真实场景驱动，从自动化到全栈开发",
    color: "violet",
    icon: Zap,
    parts: [
      {
        id: "part3",
        title: "Part 3：MCP实战",
        items: [
          { id: "3.1", title: "MCP：一键生成小红书多图", description: "利用Model Context Protocol，打造自动化生成小红书爆款图文的工具。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/ZThmwzCLEitPCykwARwcMN2AnNg" },
        ]
      },
      {
        id: "part4",
        title: "Part 4：n8n自动化",
        items: [
          { id: "4.1", title: "全自动化抓取公众号内容（上）", description: "解放双手！搭建n8n工作流，自动监控并抓取指定公众号文章。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/Ta24wxwgciMbpWkjO65cLYz5nfg" },
          { id: "4.2", title: "全自动化改写并发布（下）", description: "内容流水线！自动利用AI改写抓取的内容并分发到不同平台。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/K9IpwH5x3iZBOnkPmqTculGEnOc" },
          { id: "4.3", title: "定时获取招聘职位推送到飞书", description: "求职助手！定时抓取招聘网站信息，第一时间推送到你的飞书。", status: "pending", link: "#" },
        ]
      },
      {
        id: "part5",
        title: "Part 5：Claude Code + Skills",
        items: [
          { id: "5.1", title: "最先进编程工具Claude Code入门", description: "驾驭最强AI编程助手，Claude Code保姆级教程，体验下一代编程范式。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/AbsEw9BrEiROVzkelv8cTelInfd" },
          { id: "5.2", title: "CC自己接模型、解决登录问题", description: "突破限制！教你如何让Claude Code接入国内模型并解决登录难题。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/AbsEw9BrEiROVzkelv8cTelInfd" },
          { id: "5.3", title: "加餐：接入云雾API与Nano Banana", description: "降低成本！使用第三方高性价比API接入Claude Code，实战高级功能。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/Dt1EwTXlxipZEXkRtVBcTO7zncg" },
          { id: "5.4", title: "使用Claude Code开发个人网站", description: "极速建站！完全依赖Claude Code的能力，从零构建功能完备的个人网站。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/Pg5pwD98aiRE1tkak2ac3hrZnkb" },
          { id: "5.5", title: "Claude Skills：提取微博热搜创意", description: "创意永不枯竭！利用Skills全自动监控微博热搜，智能提炼爆款创意。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/EpRrwqGpEipSRukgwXKcEAqinRf" },
          { id: "5.6", title: "用Git、Github管理Skills版本", description: "像管理代码一样管理你的AI技能，使用Git版本控制让Skills开发更专业。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/MD3EwMayniIxVyk7M6hcqEQ4nuc" },
          { id: "5.7", title: "使用Claude Code分析微信聊天记录", description: "数据挖掘！用代码分析微信聊天数据，发现隐藏在对话中的规律与价值。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/VYsMw0jVaiaJ6NkukVLcqtwWnwb" },
          { id: "5.8", title: "一个提示词，生成你的专属Skills", description: "魔法咒语！仅需一个Prompt，让AI自动为你编写定制化的Claude Skills。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/YlgawaCuHiSspokxLC0cZuYbn5f" },
          { id: "5.9", title: "串讲：做一个自动更新的网站", description: "融会贯通！综合运用所学，搭建一个内容自动更新、无需维护的自动化网站。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/EMkRwmXWaiDgU1kxxEhcgceTnac" },
          { id: "5.10", title: "AI访谈：生成匹配你文风的短文", description: "数字分身！让AI通过访谈学习你的风格，自动生成原汁原味的个性化文章。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/A4KmwOFI7ivXnGkdjq8chD6znYd" },
          { id: "5.11", title: "Claude Skills一键发布到公众号", description: "运营效率翻倍！打通最后的一公里，实现从内容生成到公众号后台一键直达。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/ZMlkwBzjniIPJhk1eJNc21bZnZc" },
          { id: "5.12", title: "用Claude Skill全自动生成专属播客", description: "声音的魔法！全流程自动化生成属于你的播客内容，从文案到音频一气呵成。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/260105_Podcast" },
          { id: "5.13", title: "全自动解读论文生成网站和PDF", description: "学术神器！自动抓取并深度解读前沿论文，生成精美网站报告与PDF摘要。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/260107_Paper" },
          { id: "5.14", title: "Claude Agent SDK本地定时运行", description: "本地化部署！使用Agent SDK让你的Skills在本地电脑上稳定、定时自动运行。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/GKOYwjfeIizRkrk7ryocZgslnLg" },
          { id: "5.15", title: "Github Actions免费全自动定时运行", description: "云端白嫖！利用Github Actions实现Skills的云端免费托管与定时触发。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/Aoo6wwxPIix6srkMDaxcJyncnkf" },
          { id: "5.16", title: "油猴脚本自动化抓取数据", description: "浏览器黑科技！编写油猴脚本，轻松抓取商户后台与视频平台的隐秘数据。", status: "pending", link: "#" },
          { id: "5.17", title: "几个好的Skills，下载即用", description: "精选工具箱！整理收集一系列高质量、开箱即用的Skills，提升你的开发效率。", status: "pending", link: "#" },
        ]
      },
      {
        id: "part6",
        title: "Part 6：Antigravity",
        items: [
          { id: "6.1", title: "Google Antigravity特点介绍", description: "探索Google重磅推出的Antigravity，解析其颠覆性的技术特点与应用前景。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/AErHwhI8DiSKiskgYUxc1sy9ndc" },
          { id: "6.2", title: "AntiGravity升级Nano Banana Pro", description: "强强联合！利用Antigravity技术全面升级Nano Banana Pro，性能大幅跃升。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/PSmDworcfi1wlakXL3DcH8vPnEb" },
          { id: "6.3", title: "申请Gemini 3会员使用Antigravity", description: "抢先体验！手把手教你申请Gemini 3会员资格，第一时间解锁新功能。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/I20lwjkR8im7RhkcF3BcOwysn4G" },
          { id: "6.4", title: "一个提示词，生成你的专属Skill！", description: "极简开发！再次见证提示词的魔力，用自然语言生成专属于你的强大Skill。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/YlgawaCuHiSspokxLC0cZuYbn5f" },
        ]
      },
      {
        id: "part7",
        title: "Part 7：拓展项目",
        items: [
          { id: "7.1", title: "电子宠物 (Windows exe)", description: "桌面新宠！开发一个在Windows桌面上互动的电子宠物，重温复古乐趣。", status: "pending", link: "#" },
          { id: "7.2", title: "多语言文学作品展示", description: "文化出海！构建一个支持多语言切换的文学作品展示平台，体验国际化开发。", status: "pending", link: "#" },
          { id: "7.3", title: "开发iOS App", description: "移动端进阶！跨越平台限制，从零开始探索iOS应用的开发与上架流程。", status: "writing", link: "#" },
          { id: "7.4", title: "ShipAny模版快速开发", description: "唯快不破！使用ShipAny模版，以光速构建并验证你的SaaS产品想法。", status: "updating", link: "#" },
        ]
      }
    ]
  },
  {
    id: "stage3",
    title: "新工具新技术",
    description: "紧跟技术前沿，掌握最新AI生产力",
    color: "emerald",
    icon: MonitorPlay,
    parts: [
      {
        id: "part8",
        title: "Part 8：新模型/工具",
        items: [
          { id: "8.1", title: "豆包1.6 flash视觉模型", description: "视觉新体验！探索豆包1.6 flash视觉模型的强大能力，解锁图像处理新玩法。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/Houhwsok0ijYGvk3l2nccdB8nRd" },
          { id: "8.2", title: "SeeDream 4.0小红书生成", description: "图像生成王者！体验国产最强SeeDream 4.0模型，一键生成小红书风格精美配图。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/Houhwsok0ijYGvk3l2nccdB8nRd" },
          { id: "8.3", title: "Trickle.so：网页开发新可能", description: "可视化开发新秀！使用Trickle.so革新网页开发流程，让创意快速落地。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/Houhwsok0ijYGvk3l2nccdB8nRd" },
          { id: "8.4", title: "基于Web的手势识别应用", description: "交互黑科技！在浏览器中实现流畅的手势识别，打造酷炫的Web交互体验。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/Houhwsok0ijYGvk3l2nccdB8nRd" },
        ]
      }
    ]
  },
  {
    id: "stage4",
    title: "认知与进阶",
    description: "提升认知维度，探索AI变现之路",
    color: "amber",
    icon: Brain,
    parts: [
      {
        id: "part9",
        title: "Part 9：认知与启程",
        items: [
          { id: "9.1", title: "AI应用赏析", description: "开阔眼界！深度拆解全球优秀AI应用案例，学习顶级产品的设计思路。", status: "updating", link: "#" },
          { id: "9.2", title: "乐高积木思维做AI产品", description: "模块化思维！像搭乐高一样构建AI产品，实现功能的灵活复用与快速迭代。", status: "updating", link: "#" },
          { id: "9.3", title: "如何找到好的API/idea", description: "发现金矿！掌握挖掘优质API与独特产品Idea的方法论，赢在起跑线。", status: "updating", link: "#" },
          { id: "9.4", title: "如何挖掘需求", description: "读懂用户！深入洞察用户痛点与真实需求，做用户真正愿意买单的产品。", status: "updating", link: "#" },
          { id: "9.5", title: "从idea到产品的完整流程", description: "全链路闭环！复盘从一个灵感到产品落地、运营推广的完整生命周期。", status: "updating", link: "#" },
        ]
      },
      {
        id: "part10",
        title: "Part 10：进阶变现",
        items: [
          { id: "10.1", title: "双月黑客松比赛", description: "实战练兵！参与高强度的黑客松比赛，与顶尖高手切磋，加速能力跃迁。", status: "updating", link: "#" },
          { id: "10.2", title: "AI编程搞钱直播安排", description: "财富风向标！每周四晚8点直播加餐，分享最新的AI编程搞钱路子与实战复盘。", status: "updating", link: "#" },
          { id: "10.3", title: "AI Coding写作小组", description: "抱团成长！加入写作小组，输出倒逼输入，打造个人技术影响力。", status: "updating", link: "#" },
        ]
      },
      {
        id: "part11",
        title: "Part 11：搞钱直播实战",
        items: [
          { id: "实战01", title: "Jackey：23岁零基础淘宝月入五六千", description: "淘宝淘金！揭秘23岁零基础小白如何在淘宝通过AI编程实现副业月入数千。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/Houhwsok0ijYGvk3l2nccdB8nRd" },
          { id: "实战02", title: "李香君：30岁裸辞靠N8N赚5位数", description: "裸辞逆袭！30岁大厂员工裸辞后，如何靠一条N8N工作流在YouTube实现月入过万。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/Houhwsok0ijYGvk3l2nccdB8nRd" },
          { id: "实战03", title: "黄叔：职场稳定收入是毒药", description: "认知觉醒！黄叔深度复盘3年AI转型之路，揭露“稳定收入”背后的陷阱与真实账单。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/Houhwsok0ijYGvk3l2nccdB8nRd" },
          { id: "实战04", title: "超级峰：200万用户小程序的AI探索", description: "大佬转型！拥有200万用户的小程序开发者，如何通过AI编程探索新的增长曲线。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/ZEoNwpmXJiSJnKk5LxTcRsbYnUR" },
          { id: "实战05", title: "孟健：程序员卖80万册、裸辞AI出海", description: "出海实战！畅销书作者、资深程序员裸辞做AI出海产品的实战心法与避坑指南。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/ECCmw6mGqivUJQkHuEAc7faGnbh" },
          { id: "实战06", title: "李默：用Claude Agent SDK自动化营销", description: "降维打击！技术大佬手把手教你用Agent SDK实现“无感运行”的自动化营销黑科技。", status: "ready", link: "https://forchangesz.feishu.cn/wiki/SCs8wQjpMinDaRkgiDRc6FrSnSg" },
        ]
      },
      {
        id: "part12",
        title: "Part 12：AI自媒体",
        items: [
          { id: "12.1", title: "ListenHub多种用法", description: "流量密码！掌握ListenHub的多种高阶用法，精准捕捉全网热点与流量趋势。", status: "updating", link: "https://forchangesz.feishu.cn/wiki/UDygwOc50iINIXkMCpJcAqiMnLe" },
          { id: "12.2", title: "使用Youmind创作内容", description: "创作提效！利用Youmind工具辅助内容创作，让你的观点与灵感井喷式爆发。", status: "updating", link: "https://forchangesz.feishu.cn/wiki/JXfcwV6z0inTgRk6eIhc8uySnLd" },
        ]
      }
    ]
  }
];

const FOOTER_VIDEOS = [
  { title: "大模型API调用+弹幕生成器网页", link: "https://forchangesz.feishu.cn/wiki/VmmawoXTEiU4fQkFULwcXpodned" },
  { title: "公开课资料链接2", link: "https://forchangesz.feishu.cn/wiki/OockwmMM3iciB1k7M1xcfBk2n9g" },
  { title: "公开课资料链接3", link: "https://forchangesz.feishu.cn/wiki/ZCMdwhWp6iPeR3k5QuncIvfBnnx" },
];

// --- Components ---

function StatusBadge({ status }: { status: Status }) {
  if (status === "ready") return null;

  const config = {
    ready: { icon: CheckCircle2, text: "已就绪", className: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400" },
    pending: { icon: Clock, text: "待更新", className: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400" },
    writing: { icon: FileText, text: "撰写中", className: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400" },
    updating: { icon: RotateCw, text: "更新中", className: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400" },
  };

  const { icon: Icon, text, className } = config[status];

  return (
    <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide", className)}>
      <Icon className="h-3.5 w-3.5" />
      {text}
    </span>
  );
}

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-slate-900/90 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-700/50">
        <div className="bg-yellow-500/20 p-2 rounded-full">
          <AlertCircle className="h-5 w-5 text-yellow-500" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-sm">温馨提示</span>
          <span className="text-slate-300 text-xs">{message}</span>
        </div>
        <button onClick={onClose} className="ml-2 text-slate-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full">
          <span className="sr-only">Close</span>
          ×
        </button>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  const [expandedStages, setExpandedStages] = useState<Record<string, boolean>>({
    "stage1": true,
    "stage2": true,
    "stage3": true,
    "stage4": true,
  });
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleStage = (id: string) => {
    setExpandedStages(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCompletion = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setCompletedItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleLinkClick = (e: React.MouseEvent, item: CourseItem) => {
    // Deprecated: No longer needed as non-ready items are rendered as divs
  };

  const getThemeStyles = (color: CourseStage["color"]) => {
    const styles = {
      blue: {
        bg: "bg-blue-50 dark:bg-blue-950/30",
        border: "border-blue-100 dark:border-blue-900/50",
        text: "text-blue-900 dark:text-blue-100",
        iconBg: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-600 dark:text-blue-400",
        cardHover: "hover:border-blue-300 dark:hover:border-blue-700",
      },
      violet: {
        bg: "bg-violet-50 dark:bg-violet-950/30",
        border: "border-violet-100 dark:border-violet-900/50",
        text: "text-violet-900 dark:text-violet-100",
        iconBg: "bg-violet-100 dark:bg-violet-900",
        iconColor: "text-violet-600 dark:text-violet-400",
        cardHover: "hover:border-violet-300 dark:hover:border-violet-700",
      },
      emerald: {
        bg: "bg-emerald-50 dark:bg-emerald-950/30",
        border: "border-emerald-100 dark:border-emerald-900/50",
        text: "text-emerald-900 dark:text-emerald-100",
        iconBg: "bg-emerald-100 dark:bg-emerald-900",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        cardHover: "hover:border-emerald-300 dark:hover:border-emerald-700",
      },
      amber: {
        bg: "bg-amber-50 dark:bg-amber-950/30",
        border: "border-amber-100 dark:border-amber-900/50",
        text: "text-amber-900 dark:text-amber-100",
        iconBg: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-600 dark:text-amber-400",
        cardHover: "hover:border-amber-300 dark:hover:border-amber-700",
      },
      slate: {
        bg: "bg-slate-50 dark:bg-slate-900/50",
        border: "border-slate-200 dark:border-slate-800",
        text: "text-slate-900 dark:text-slate-100",
        iconBg: "bg-slate-100 dark:bg-slate-800",
        iconColor: "text-slate-600 dark:text-slate-400",
        cardHover: "hover:border-slate-400 dark:hover:border-slate-600",
      }
    };
    return styles[color];
  };

  return (
    <>
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}

      {/* Hero Header */}
      <div className="text-center space-y-4 py-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
          AI编程实战课程表
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          风变AI产品黄叔AI编程社团
        </p>

        <div className="mx-auto max-w-fit mt-6 px-5 py-2.5 rounded-2xl bg-amber-50 border border-amber-100 text-amber-800 dark:bg-amber-900/20 dark:border-amber-800/50 dark:text-amber-200 flex items-center gap-2.5 text-sm font-medium shadow-sm hover:shadow-md transition-all">
          <Zap className="h-4 w-4 fill-amber-500 text-amber-500" />
          <span>社团课程是独立的，可任意选择你喜欢的课程，点进去学习</span>
        </div>
      </div>

      {/* Course Stages */}
      <div className="space-y-4">
        {COURSE_STAGES.map((stage) => {
          const theme = getThemeStyles(stage.color);
          const Icon = stage.icon;
          const isExpanded = expandedStages[stage.id];

          return (
            <div key={stage.id} className="py-2">
              <div 
                className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 sm:gap-x-6 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => toggleStage(stage.id)}
              >
                <div className={cn("p-3 sm:p-4 rounded-2xl shadow-sm self-center", theme.iconBg)}>
                  <Icon className={cn("h-8 w-8 sm:h-10 sm:w-10", theme.iconColor)} />
                </div>
                <div className="self-center">
                  <h2 className={cn("text-2xl sm:text-3xl font-bold tracking-tight", theme.text)}>
                    {stage.title}
                  </h2>
                  <p className={cn("mt-1 text-sm sm:text-base opacity-80 font-medium", theme.text)}>
                    {stage.description}
                  </p>
                </div>
                <div className={cn("ml-auto p-2 rounded-full transition-transform duration-300", theme.iconBg, isExpanded ? "rotate-180" : "")}>
                  <ChevronDown className={cn("h-6 w-6", theme.iconColor)} />
                </div>
              </div>

              {/* Stage Content */}
              {isExpanded && stage.parts.map((part, index) => (
                <Fragment key={part.id}>
                  <h3 
                    className={cn(
                      "text-lg font-bold uppercase tracking-wider opacity-90 cursor-default", 
                      theme.text,
                      index === 0 ? "mt-6 sm:mt-8" : "mt-10"
                    )}
                  >
                    {part.title}
                  </h3>
                  
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 cursor-default">
                    {part.items.map((item) => {
                      const isReady = item.status === "ready";
                      const isCompleted = completedItems.has(item.id);
                      
                      return (
                        <div
                          key={item.id}
                          className={cn(
                            "group relative flex flex-col p-5 rounded-2xl border shadow-sm transition-all duration-300",
                            isCompleted 
                              ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800" 
                              : "bg-white dark:bg-slate-900 border-transparent",
                            isReady 
                              ? cn("hover:shadow-lg hover:-translate-y-1 cursor-pointer", !isCompleted && theme.cardHover) 
                              : "opacity-70 grayscale-[0.5] cursor-default"
                          )}
                        >
                          {isReady && (
                            <a 
                              href={item.link} 
                              target="_blank" 
                              className="absolute inset-0 z-0"
                              aria-label={`跳转到 ${item.title}`}
                            />
                          )}

                          <div className="flex items-start justify-between mb-3 relative z-10 pointer-events-none">
                            <span className={cn(
                              "font-mono text-xs font-bold px-2 py-1 rounded-lg transition-colors",
                              isCompleted 
                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400" 
                                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                            )}>
                              {item.id}
                            </span>
                            <div className="flex items-center gap-2">
                              <StatusBadge status={item.status} />
                              {isReady && (
                                <button
                                  onClick={(e) => toggleCompletion(e, item.id)}
                                  className={cn(
                                    "flex items-center gap-1.5 px-2 py-1 rounded-lg transition-all duration-200 border pointer-events-auto",
                                    isCompleted 
                                      ? "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-400 dark:border-emerald-800" 
                                      : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:text-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700 dark:hover:bg-slate-700"
                                  )}
                                  title={isCompleted ? "标记为未完成" : "标记为已完成"}
                                >
                                  <div className={cn(
                                    "w-4 h-4 rounded border flex items-center justify-center transition-colors",
                                    isCompleted ? "bg-emerald-500 border-emerald-500" : "border-slate-400"
                                  )}>
                                    {isCompleted && <CheckCircle2 className="h-3 w-3 text-white" />}
                                  </div>
                                  <span className="text-[10px] font-medium">
                                    {isCompleted ? "已完成" : "是否完成"}
                                  </span>
                                </button>
                              )}
                            </div>
                          </div>
                          
                          <h4 className={cn(
                            "text-base font-bold mb-2 line-clamp-2 leading-tight transition-colors relative z-10 pointer-events-none",
                            isReady && !isCompleted && "group-hover:text-blue-600 dark:group-hover:text-blue-400 text-slate-900 dark:text-slate-100",
                            !isReady && "text-slate-900 dark:text-slate-100",
                            isCompleted && "text-emerald-800 dark:text-white"
                          )}>
                            {item.title}
                          </h4>
                          
                          {item.description && (
                            <p className={cn(
                              "text-sm min-h-[4.5em] line-clamp-3 mb-4 flex-1 leading-relaxed relative z-10 pointer-events-none transition-colors",
                              isCompleted ? "text-emerald-700/80 dark:text-emerald-200/70" : "text-slate-500 dark:text-slate-400"
                            )}>
                              {item.description}
                            </p>
                          )}
                          
                          <div className="mt-auto flex items-center justify-between pt-4 border-t relative z-10 pointer-events-none transition-colors border-slate-100 dark:border-slate-800">
                            <span className={cn(
                              "text-xs font-medium transition-colors flex items-center gap-1",
                              !isCompleted && "text-slate-400",
                              isReady && !isCompleted && "group-hover:text-slate-600 dark:group-hover:text-slate-300",
                              isCompleted && "text-emerald-600 dark:text-emerald-400"
                            )}>
                              {item.status === "ready" ? "立即学习" : "敬请期待"}
                            </span>
                            <ExternalLink className={cn(
                              "h-4 w-4 transition-colors",
                              !isCompleted && "text-slate-300",
                              isReady && !isCompleted && "group-hover:text-blue-500",
                              isCompleted && "text-emerald-400 dark:text-emerald-500"
                            )} />
                          </div>
                        </div>
                      );
                    })}
                        </div>
                      </Fragment>
                  ))}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-20 py-10 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-slate-500 dark:text-slate-400 font-medium">
          风变AI产品黄叔AI编程社团
        </p>
      </div>
    </>
  );
}
