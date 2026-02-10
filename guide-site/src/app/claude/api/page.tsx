import { CompletionCheckbox } from "@/components/CompletionCheckbox";
import { Hammer, Sparkles, User, Bot, Check, X, Layers, Lightbulb, BookOpen, ExternalLink, MessageSquare, ArrowRight, BrickWall } from "lucide-react";

export default function VibeCodingPage() {
  return (
    <div className="space-y-12 max-w-4xl pb-10">
      {/* 1. 引言 */}
      <div className="space-y-6">
        <h1>一套提示词覆盖大部分 Vibe Coding 场景</h1>
        
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
            许多人在使用 AI 编程（Vibe Coding）时产生的恐惧感——即不知道如何开始，或者在项目变复杂后，修改一个功能导致其他功能报错的混乱局面。
          </p>
          
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
            <Lightbulb className="h-5 w-5 shrink-0 mt-0.5 text-amber-600" />
            <p className="font-medium">
              黄叔通过总结实践经验，<span className="bg-amber-200/60 px-1 rounded mx-0.5 font-bold text-amber-800">提供了一套标准化的提示词流程</span>来降低这些痛点。
            </p>
          </div>
        </div>
      </div>

      {/* 2. 什么是 Vibe Coding */}
      <div className="space-y-8">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>✨</span> 什么是 Vibe Coding?（通俗解释）
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 以前编程 */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 flex items-center justify-center">
                <Hammer className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold m-0 flex items-center">以前编程</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              你需要懂每一行代码的逻辑，小心翼翼地像<span className="font-bold bg-zinc-200 dark:bg-zinc-800 px-1 rounded mx-1 text-zinc-900 dark:text-zinc-100 inline-flex items-center gap-1"><BrickWall className="w-3 h-3" /> 砌砖一样盖房子</span>。
            </p>
          </div>

          {/* 现在 Vibe Coding */}
          <div className="p-6 rounded-2xl bg-purple-50 border border-purple-200 dark:bg-purple-900/20 dark:border-purple-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold m-0 text-purple-900 dark:text-purple-100">现在 (Vibe Coding)</h3>
            </div>
            <p className="text-sm text-purple-800 dark:text-purple-200 leading-relaxed">
              有了强大的 AI，编程变成了一种<span className="font-bold bg-purple-600 text-white px-1 rounded mx-1">“凭感觉”</span>的过程。
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <p className="text-sm"><span className="font-bold">你不写代码</span>：你只用英语或中文告诉 AI 你的想法。</p>
        </div>
        <div className="flex items-start gap-3">
          <p className="text-sm"><span className="font-bold">你不读代码</span>：AI 写完后，你甚至懒得看它写的代码对不对。</p>
        </div>
        <div className="flex items-start gap-3">
          <p className="text-sm">
            <span className="font-bold">你只看结果</span>：你直接运行程序。
            如果运行起来<span className="text-green-600 font-bold mx-1">“感觉对了”</span>（功能正常、界面好看），这事就完了；
            如果<span className="text-red-600 font-bold mx-1">“感觉不对”</span>（报错了、丑了），你就让 AI 再改改。
          </p>
        </div>
      </div>

      {/* 3. 为什么叫 Vibe */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>🎨</span> 为什么叫 "Vibe" (氛围/感觉)？
        </h2>
        
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <User className="h-6 w-6 text-pink-500 shrink-0 mt-1" />
            <div>
              <p className="font-medium text-foreground">在这种模式下，你更像是一个<span className="font-bold">艺术总监或产品经理</span>，而不是程序员。</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Sparkles className="h-6 w-6 text-purple-500 shrink-0 mt-1" />
            <div>
              <p className="font-medium text-foreground">你关注的是产品的 <span className="font-bold text-purple-600">Vibe（调性、感觉、效果）</span>。</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Layers className="h-6 w-6 text-blue-500 shrink-0 mt-1" />
            <div>
              <p className="font-medium text-foreground">你不再纠结于 for 循环怎么写、变量名怎么起这些技术细节。</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. 典型场景 */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>💬</span> 一个典型的 Vibe Coding 场景
        </h2>

        <div className="space-y-4 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
          {/* User */}
          <div className="flex gap-3 flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
              <User className="h-5 w-5 text-slate-600" />
            </div>
            <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
              <p className="text-sm">“给这个网页加一个登录框，要那种赛博朋克风格的。”</p>
            </div>
          </div>

          {/* AI */}
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
              <Bot className="h-5 w-5 text-purple-600" />
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%] italic">
              <p className="text-xs">（生成了 100 行代码...）</p>
            </div>
          </div>

          {/* User */}
          <div className="flex gap-3 flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
              <User className="h-5 w-5 text-slate-600" />
            </div>
            <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
              <p className="text-sm">（根本不看代码，直接点运行）<br/>“嗯...颜色太暗了，亮一点，再加点霓虹灯效果。”</p>
            </div>
          </div>

          {/* AI */}
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
              <Bot className="h-5 w-5 text-purple-600" />
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%] italic">
              <p className="text-xs">（修改了代码...）</p>
            </div>
          </div>

          {/* User */}
          <div className="flex gap-3 flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
              <User className="h-5 w-5 text-slate-600" />
            </div>
            <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
              <p className="text-sm">（刷新网页）“哎，这个 Vibe（感觉） 对了！收工。”</p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl border-l-4 border-purple-500">
          <h3 className="font-bold text-lg text-pink-500 dark:text-pink-400 mb-2 m-0 border-0 pb-0">总结 Vibe Coding：</h3>
          <p className="text-sm text-purple-800 dark:text-purple-200 leading-relaxed">
            抛弃对代码细节的掌控欲，完全信任 AI，用自然语言来编程，用直觉来验收。<br/>
            这也正是我们这门课想带你进入的状态——<span className="font-bold">你负责想象，AI 负责实现。</span>
          </p>
        </div>
      </div>

      {/* 5. 流程价值 */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>🛡️</span> 标准提示词流程对 Vibe Coding 的价值
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 rounded-xl border border-border bg-card hover:shadow-md transition-shadow">
            <div className="mb-3 p-2 w-fit rounded-lg bg-green-100 text-green-600">
               <ArrowRight className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-base mb-2">消除“起步难”</h3>
            <p className="text-sm text-muted-foreground">提供了一套“刚开始的时候”使用的提示词，小白即使只有一个模糊的想法，AI 也能引导其完善产品愿景。</p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card hover:shadow-md transition-shadow">
             <div className="mb-3 p-2 w-fit rounded-lg bg-blue-100 text-blue-600">
               <Layers className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-base mb-2">降低“维护难”</h3>
            <p className="text-sm text-muted-foreground">通过“先文档后代码”的策略，避免了小白在修改代码时引发的连锁 Bug 反应。</p>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card hover:shadow-md transition-shadow">
             <div className="mb-3 p-2 w-fit rounded-lg bg-orange-100 text-orange-600">
               <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-base mb-2">提供标准化 SOP</h3>
            <p className="text-sm text-muted-foreground">让 AI 扮演首席产品设计师、逻辑侦探、版本规划师等角色，提升代码下限。</p>
          </div>
        </div>
      </div>

      {/* 6. 核心文档 */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>📚</span> 核心教学参考文档
        </h2>
        
        <div className="my-6 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="text-6xl">📝</span>
          </div>
          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-lg">
              <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
              必看文档
            </div>
            <h3 className="text-xl font-bold text-slate-900 m-0 border-none pb-0">
              《一套提示词覆盖大部分 Vibe Coding 场景》
            </h3>
            <div className="pt-2">
              <a 
                href="https://forchangesz.feishu.cn/wiki/Qab2wzDwmiQrhKkqjUDcSvw9nCe" 
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 !text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-600/20 group-hover:translate-x-1"
              >
                点击查看飞书文档
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 7. 任务打卡 */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>🚩</span> 本章节打卡任务
        </h2>
          <p className="font-medium text-foreground mb-4">
            核心作业：
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold text-xs mt-0.5">🚀</span>
              <span className="text-foreground">请你运用文档中提供的这套“提示词”，完成一次产品的开发（从0到1）。</span>
            </li>
          </ul>
          
          <CompletionCheckbox label="任务打卡：我已完成产品开发并体验了 Vibe Coding！" />
      </div>
    </div>
  );
}