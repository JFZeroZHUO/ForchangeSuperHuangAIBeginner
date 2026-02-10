import { CodeBlock } from "@/components/ui/CodeBlock";
import { Gamepad2, Image, Grid3X3 } from "lucide-react";
import { CompletionCheckbox } from "@/components/CompletionCheckbox";

export default function FirstSitePage() {
  return (
    <div className="space-y-10 max-w-4xl pb-10">
      <div>
        <h1>开发第一个网页</h1>
        
        <div className="mt-8 mb-10">
          <h2 className="text-xl font-bold text-black mb-8 flex items-center gap-3 pb-4 border-b border-zinc-100">
            <span className="text-2xl">🐣</span> 基础概念：什么是网页？
          </h2>
          
          <div className="space-y-8">
            <div className="space-y-4">

              <p className="text-base leading-relaxed text-zinc-600 pl-8">
                网页就是<span className="font-bold text-blue-600 bg-blue-50 px-1 rounded">运行在浏览器里的程序界面</span>（俗称“网站”）。
              </p>
              <ul className="space-y-3 text-base text-zinc-600 pl-8">
                <li className="flex gap-2 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-zinc-300 rounded-full shrink-0"></span>
                  <span><span className="font-bold text-black">它的形式</span>：当你打开 Chrome 或 Edge 浏览器，输入网址后，屏幕上显示出来的那个包含文字、图片、按钮的<span className="font-bold text-black">交互画面</span>，就是网页。</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-zinc-300 rounded-full shrink-0"></span>
                  <span><span className="font-bold text-black">它的构成</span>：网页的背后是一组<span className="font-bold text-black">代码文件</span>。浏览器负责读取这些代码，并把它们“翻译”成你能看到的画面。</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-base text-zinc-600 pl-1">
                这些你熟悉的国民级应用，本质上都是<span className="font-bold text-black">网页</span>：
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
                <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white border border-zinc-200 flex items-center gap-3 hover:bg-orange-50 hover:border-orange-200 transition-colors">
                  <span className="w-2 h-2 bg-blue-500 rounded-full shrink-0"></span>
                  <span className="text-sm text-zinc-600"><span className="font-bold text-black">百度</span> (baidu.com)：最基础的搜索网页。</span>
                </a>
                <a href="https://www.taobao.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white border border-zinc-200 flex items-center gap-3 hover:bg-orange-50 hover:border-orange-200 transition-colors">
                  <span className="w-2 h-2 bg-orange-500 rounded-full shrink-0"></span>
                  <span className="text-sm text-zinc-600"><span className="font-bold text-black">淘宝</span> (taobao.com)：复杂的电商交易网页网站。</span>
                </a>
                <a href="https://www.4399.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white border border-zinc-200 flex items-center gap-3 hover:bg-orange-50 hover:border-orange-200 transition-colors">
                  <span className="w-2 h-2 bg-green-500 rounded-full shrink-0"></span>
                  <span className="text-sm text-zinc-600"><span className="font-bold text-black">4399</span> (4399.com)：经典的<span className="font-bold text-black">网页小游戏</span>集合。</span>
                </a>
                <a href="https://ai-edu.aigcfun.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white border border-zinc-200 flex items-center gap-3 hover:bg-orange-50 hover:border-orange-200 transition-colors">
                  <span className="w-2 h-2 bg-purple-500 rounded-full shrink-0"></span>
                  <span className="text-sm text-zinc-600"><span className="font-bold text-black">风变 AI</span> (ai-edu.aigcfun.com)：AI 生产力工具。</span>
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-6 mb-8">
          <h2 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
            <span className="text-2xl">🎯</span> 任务目标
          </h2>
          <p className="text-lg text-muted-foreground">
            你可以随便设计网页，比如你自己的<span className="font-bold text-blue-600">博客网站</span>、<span className="font-bold text-purple-600">网页计算器</span>、<span className="font-bold text-pink-600">动态爱心网页</span>等等，可以自由发挥。
            <br/>
            或者，也可以从以下三个任务中选择一个，开始你的编程之旅。
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-border bg-card p-6 space-y-4 hover:border-primary/50 transition-colors cursor-pointer group hover:shadow-lg">
          <div className="p-3 w-fit rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
            <Image className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg m-0 group-hover:text-primary">图片字幕生成器</h3>
          <p className="text-sm text-muted-foreground m-0">上传图片，自动识别内容并生成电影字幕感的文字。</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 space-y-4 hover:border-primary/50 transition-colors cursor-pointer group hover:shadow-lg">
          <div className="p-3 w-fit rounded-lg bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400">
            <Gamepad2 className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg m-0 group-hover:text-primary">摸鱼小游戏</h3>
          <p className="text-sm text-muted-foreground m-0">经典的贪吃蛇或打砖块，上班摸鱼必备。</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 space-y-4 hover:border-primary/50 transition-colors cursor-pointer group hover:shadow-lg">
          <div className="p-3 w-fit rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
            <Grid3X3 className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg m-0 group-hover:text-primary">朋友圈分析性格</h3>
          <p className="text-sm text-muted-foreground m-0">接入AI大模型，帮你通过朋友圈，分析你的客户偏好性格特点等等</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>📚</span> 核心教学参考文档
        </h2>
        
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
              《如何开发一个网页？并让网页接入AI大模型？》
            </h3>
            
            <div className="pt-2">
              <a 
                href="https://forchangesz.feishu.cn/wiki/T5fBwZ473ihrWrkSW5pcEkaTnuh?from=from_copylink" 
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 !text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-600/20 group-hover:translate-x-1 animate-pulse"
              >
                点击查看教程文档
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 mt-12">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>🚩</span> 本关任务打卡
        </h2>
        <div className="rounded-xl p-6">
          <p className="font-medium text-black mb-4">
            请完成以下动作：
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold">1</span>
              <span className="font-bold text-black">AI生成一个网页！</span>
            </li>
          </ul>
          
          <CompletionCheckbox label="任务打卡：我已成功开发第一个网页！" />
        </div>
      </div>
    </div>
  );
}
