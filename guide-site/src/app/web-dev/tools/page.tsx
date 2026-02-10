import { CodeBlock } from "@/components/ui/CodeBlock";
import { CheckCircle2, ExternalLink, Terminal, AlertCircle, GitBranch, Github, Server, FileCode, Flag, Globe } from "lucide-react";
import { CompletionCheckbox } from "@/components/CompletionCheckbox";

export default function ToolsPage() {
  return (
    <div className="space-y-10 max-w-4xl pb-10">
      {/* Header */}
      <div>
        <h1>把你的网页发布到互联网</h1>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-zinc-600">
          <p>
            首先我们要明白一个概念：上一章我们做的网页，还只是躺在你电脑里的<span className="font-bold text-black">“本地文件”，没法发给朋友玩。</span>
          </p>
          <p>
            <span className="font-bold text-black">要想让它变成一个人人都能访问的网址链接</span>，我们需要在电脑上安装一套专业的工具，把它发布到<span className="font-bold text-blue-600">vercel海外服务器</span>上。
          </p>
        </div>
      </div>

      {/* 1. 为什么要先懂这一步？ */}
      <div>
        <div className="space-y-4 text-base leading-relaxed text-zinc-600">
          <div className="mb-8">
            <h2 className="flex items-center gap-2 text-xl font-bold text-black mb-4">
              <Globe className="h-6 w-6 text-blue-600" />
              前置需知：一眼识 Vercel
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg text-black mb-2">1. Vercel 是什么？</h3>
                <p className="pl-4 border-l-2 border-blue-500 bg-blue-50/50 p-2 rounded-r-lg">
                  Vercel 是一个全球化的网站托管平台。
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-black mb-2">2. 它能干什么？</h3>
                <div className="space-y-3 pl-4">
                  <p>它的功能非常单一且核心：把你的“代码文件”变成一个“公网链接”。</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><span className="font-bold text-black">输入</span>：你开发好的网页代码。</li>
                    <li><span className="font-bold text-black">处理</span>：Vercel 会自动在它的服务器上运行这些代码。</li>
                    <li><span className="font-bold text-black">输出</span>：它给你一个以 .vercel.app 结尾的网址。</li>
                    <li><span className="font-bold text-black">结果</span>：海外网友，在浏览器输入这个网址，就能访问你做的网页。</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-black mb-2">3. 有什么好处？（为什么选它）</h3>
                <p className="mb-3 pl-4">对于新手来说，它有三大核心优势：</p>
                <div className="grid gap-3 pl-4 md:grid-cols-3">
                  <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                    <div className="font-bold text-green-700 mb-1">💰 完全免费</div>
                    <div className="text-sm text-green-800">只要你不做大型商业项目，个人使用一分钱都不用花。</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="font-bold text-purple-700 mb-1">🤖 无需运维</div>
                    <div className="text-sm text-purple-800">不需要购买服务器、配置 Linux。你只管写代码，服务器的事全自动处理。</div>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                    <div className="font-bold text-orange-700 mb-1">⚡ 即刻上线</div>
                    <div className="text-sm text-orange-800">海外服务器，无需 ICP 备案（省去 15-20 天等待），上传即刻可见。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* 2. 准备工作 */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>📚</span> 核心教学参考文档
        </h2>
        
        <div className="p-4 bg-red-500 text-white rounded-lg flex items-start gap-3 shadow-sm">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-white" />
          <span className="text-sm font-medium text-white">前提：此步骤需要网络环境畅通（需科学上网）</span>
        </div>

        {/* 必看教程链接 */}
        <div className="my-6 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="text-6xl">📚</span>
          </div>
          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-lg">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              必看教程
            </div>
            <h3 className="text-xl font-bold text-slate-900 m-0 border-none pb-0">
              五件套安装包+上线第一个网站保姆级指南
            </h3>
            <div className="pt-2">
              <a 
                href="#" 
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 !text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-600/20 group-hover:translate-x-1 animate-pulse"
              >
                点击查看教程文档
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-black dark:text-white mt-8 mb-4">
          必备五件套清单
        </h3>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          请跟着教程，确保你的电脑里装好了以下 5 个东西（教程里有详细下载地址）：
        </p>

        <div className="grid gap-4 md:grid-cols-2">
           {/* Terminal */}
           <div className="p-4 rounded-xl border border-border bg-card flex items-start gap-3 hover:border-primary/50 transition-colors">
             <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
               <Terminal className="h-5 w-5" />
             </div>
             <div>
               <h4 className="font-bold text-base">Terminal (终端)</h4>
               <p className="text-sm text-muted-foreground mt-1">电脑自带的“黑框框”，用来给电脑发号施令的指挥官。</p>
             </div>
           </div>
           {/* Node.js */}
           <div className="p-4 rounded-xl border border-border bg-card flex items-start gap-3 hover:border-primary/50 transition-colors">
             <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600">
               <Server className="h-5 w-5" />
             </div>
             <div>
               <h4 className="font-bold text-base">Node.js</h4>
               <p className="text-sm text-muted-foreground mt-1">网页代码的运行环境，相当于汽车的“发动机”。</p>
             </div>
           </div>
           {/* Python */}
           <div className="p-4 rounded-xl border border-border bg-card flex items-start gap-3 hover:border-primary/50 transition-colors">
             <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600">
               <FileCode className="h-5 w-5" />
             </div>
             <div>
               <h4 className="font-bold text-base">Python</h4>
               <p className="text-sm text-muted-foreground mt-1">AI 编程必备语言包，后续进阶的核心基石。</p>
             </div>
           </div>
           {/* Git */}
           <div className="p-4 rounded-xl border border-border bg-card flex items-start gap-3 hover:border-primary/50 transition-colors">
             <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600">
               <GitBranch className="h-5 w-5" />
             </div>
             <div>
               <h4 className="font-bold text-base">Git</h4>
               <p className="text-sm text-muted-foreground mt-1">用来传输和管理代码的“传送门”。</p>
             </div>
           </div>
           {/* Github */}
           <div className="p-4 rounded-xl border border-border bg-card flex items-start gap-3 md:col-span-2 hover:border-primary/50 transition-colors">
             <div className="p-2 rounded-lg bg-zinc-800 text-white">
               <Github className="h-5 w-5" />
             </div>
             <div>
               <h4 className="font-bold text-base">Github</h4>
               <p className="text-sm text-muted-foreground mt-1">去注册个账号，这是你的“云端代码仓库”，用来存放你的作品。</p>
             </div>
           </div>
        </div>
      </div>


      {/* 4. 温馨提示 */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>❤️</span> 【温馨提示：遇到报错怎么办？】
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>如果在安装或运行中遇到红色的报错代码，<span className="font-bold text-red-600">千万不要自己死磕！</span></p>
          <p>大家都没系统学过计算机，遇到问题很正常。请一定要学会利用你手边最强的资源——<span className="font-bold text-primary">AI</span>。</p>
          
          <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
            <p className="font-bold text-black dark:text-white mb-2">正确姿势：</p>
            <p>把报错的画面截图，直接发给 Trae/ChatGPT/Claude，问它：</p>
            <p className="mt-2 font-mono text-sm bg-white dark:bg-zinc-900 p-2 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
              “我遇到了这个报错，这是什么原因？请告诉我怎么解决？”
            </p>
          </div>
          
        </div>
      </div>

      {/* 本关任务打卡 */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>🚩</span> 本关任务打卡
        </h2>
        <div className="rounded-xl p-6">
          <p className="font-medium text-green-800 dark:text-green-200 mb-4">
            请完成以下动作，并将结果发到群里：
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-black">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-200 dark:bg-green-800 text-green-700 dark:text-green-300 font-bold text-xs">1</span>
              <span><span className="font-bold">晒仓库</span>：把你的 Github 项目链接 发群里。</span>
            </li>
            <li className="flex items-center gap-3 text-black">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-200 dark:bg-green-800 text-green-700 dark:text-green-300 font-bold text-xs">2</span>
              <span><span className="font-bold">晒作品</span>：将项目部署到海外服务器 Vercel 上，生成一个 vercel.app 后缀的网址，把这个网页链接发群里，让大家点开看看！</span>
            </li>
          </ul>

          <CompletionCheckbox label="任务打卡：我已完成五件套安装并发布作品！" />
        </div>
      </div>
    </div>
  );
}
