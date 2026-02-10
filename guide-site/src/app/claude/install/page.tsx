import { CodeBlock } from "@/components/ui/CodeBlock";
import { WarningBox } from "@/components/ui/WarningBox";
import { Smartphone, Battery, ToggleRight, Terminal, User, Bot, Briefcase, Coffee, ExternalLink, Zap } from "lucide-react";
import { CompletionCheckbox } from "@/components/CompletionCheckbox";

export default function ClaudeInstallPage() {
  return (
    <div className="space-y-10 max-w-4xl pb-10">
      <div>
        <h1>Claude Code 是什么？</h1>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
          首先，目前市面上最强的编程模型，是 <span className="font-bold text-purple-600">Claude 模型</span>；
          <br />
          而 <span className="font-bold text-purple-600">Claude Code</span> 就是 Claude 模型公司推出的官方 AI 编程工具！
        </p>
        <div className="mt-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
           你可以把它理解为：这是一个住在你电脑终端里的<span className="font-bold text-primary">“全自动编程机器人”</span>。
        </div>
      </div>

      {/* 1. 核心对比 */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>⚔️</span> Cursor/Trae 和 Claude Code 核心对比
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Point 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-100 text-zinc-600 text-sm">1</span>
              读代码的方式（脑子不同）
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 p-4 rounded-lg bg-gradient-to-r from-blue-100 to-transparent dark:from-blue-900/30">
                <div className="font-bold text-blue-600">Cursor/Trae：“查字典”模式</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">它只读和你问题相关的那几段代码，速度快，但容易漏看。</p>
              </div>
              <div className="space-y-2 p-4 rounded-lg bg-gradient-to-r from-purple-100 to-transparent dark:from-purple-900/30">
                <div className="font-bold text-purple-600">Claude Code：“通读”模式</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">它会把相关文件从头到尾读一遍，甚至主动去翻看其他文件，理解更透彻。</p>
              </div>
            </div>
          </div>

          {/* Point 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-100 text-zinc-600 text-sm">2</span>
              你的参与度（手感不同）
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 p-4 rounded-lg bg-gradient-to-r from-blue-100 to-transparent dark:from-blue-900/30">
                <div className="font-bold text-blue-600">Cursor/Trae：你是机长，它是副驾</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">你依然要看着代码编辑器，它帮你写，你来确认。</p>
              </div>
              <div className="space-y-2 p-4 rounded-lg bg-gradient-to-r from-purple-100 to-transparent dark:from-purple-900/30">
                <div className="font-bold text-purple-600">Claude Code：你是老板，它是员工</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">你只管下命令，它在后台干活，干完汇报结果，你不需要盯着过程。</p>
              </div>
            </div>
          </div>

          {/* Point 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-100 text-zinc-600 text-sm">3</span>
              遇到报错时（性格不同）
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 p-4 rounded-lg bg-gradient-to-r from-blue-100 to-transparent dark:from-blue-900/30">
                <div className="font-bold text-blue-600">Cursor/Trae：比较被动</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">改完代码就收工，能不能跑通需要你去试。</p>
              </div>
              <div className="space-y-2 p-4 rounded-lg bg-gradient-to-r from-purple-100 to-transparent dark:from-purple-900/30">
                <div className="font-bold text-purple-600">Claude Code：非常主动</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">改完代码它会自己跑一下，发现报错自己修，直到跑通为止。</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Guide */}
        <div>
           <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
             <span>🎯</span> 一句话选择指南：
           </h3>
           <div className="space-y-3">
             <p className="text-sm text-zinc-700">
               👉 如果你是 AI 编程新手 <span className="font-bold text-blue-600">→ 选 Cursor/Trae</span>。
             </p>
             <p className="text-sm text-zinc-700">
               👉 如果你面对一堆看不懂的烂代码，或者想修一个复杂的 Bug，想找个人替你全自动干完 <span className="font-bold text-purple-600">→ 选 Claude Code</span>。
             </p>
           </div>
        </div>
      </div>

      {/* 核心教学文档 */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>📚</span> 核心教学参考文档
        </h2>
        
        <div className="my-6 p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="text-6xl">📖</span>
          </div>
          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-2 text-purple-700 font-bold text-lg">
              <span className="flex h-2 w-2 rounded-full bg-pink-500 animate-pulse"></span>
              保姆级入门教程
            </div>
            <h3 className="text-xl font-bold text-slate-900 m-0 border-none pb-0">
              最先进的编程工具 Claude Code 保姆级入门
            </h3>
            <div className="pt-2">
              <a 
                href="https://forchangesz.feishu.cn/wiki/AbsEw9BrEiROVzkelv8cTelInfd" 
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 !text-white rounded-lg font-medium transition-colors shadow-lg shadow-purple-600/20 group-hover:translate-x-1"
              >
                点击查看飞书文档
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 补充认识：三者关系 */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>🧩</span> 补充认识：ClaudeCode、ccswitch 和 API 之间的关系
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
           {/* API */}
           <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl border border-blue-100 bg-blue-50/30">
             <div className="p-4 rounded-full bg-blue-100 text-blue-600">
               <Battery className="h-8 w-8" />
             </div>
             <h3 className="font-bold text-lg">大模型编程 API</h3>
             <p className="text-xs font-bold bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full">相当于 SIM 卡“流量/话费”</p>
             <p className="text-sm text-muted-foreground text-left w-full mt-2">
               它是被消耗的东西，你需要花钱买它。Claude Code 写代码，实际上都在消耗 API 的额度。
             </p>
           </div>

           {/* CC Switch */}
           <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl border border-green-100 bg-green-50/30">
             <div className="p-4 rounded-full bg-green-100 text-green-600">
               <ToggleRight className="h-8 w-8" />
             </div>
             <h3 className="font-bold text-lg">cc switch</h3>
             <p className="text-xs font-bold bg-green-200 text-green-800 px-2 py-0.5 rounded-full">相当于“切换SIM卡”的中间插件</p>
             <p className="text-sm text-muted-foreground text-left w-full mt-2">
               它是 ClaudeCode 用来切换不同 API 接口的中间插件。它不提供 API，它是用来切换 API 供应商的。
             </p>
           </div>

           {/* Claude Code */}
           <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl border border-purple-100 bg-purple-50/30">
             <div className="p-4 rounded-full bg-purple-100 text-purple-600">
               <Smartphone className="h-8 w-8" />
             </div>
             <h3 className="font-bold text-lg">Claude Code</h3>
             <p className="text-xs font-bold bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full">相当于“智能手机”</p>
             <p className="text-sm text-muted-foreground text-left w-full mt-2">
               它是你安装在电脑上的工具软件。API 空有智慧但无法直接操作，你需要这个“超级助手软件”来调用 API 帮你干活。
             </p>
           </div>
        </div>

        <div className="p-6 rounded-xl bg-yellow-50 border border-yellow-200 space-y-3">
           <h3 className="font-bold text-lg text-yellow-800">🤔 如何获取大模型的 API？</h3>
           <p className="text-sm text-yellow-900">
             安装好 Claude Code 和 ccswitch 后，上哪去整 API？<br/>
             一般去淘宝找 Claude Code 的 API 来购买。也可以试试云雾 API：
           </p>
           <a 
             href="https://forchangesz.feishu.cn/wiki/Dt1EwTXlxipZEXkRtVBcTO7zncg" 
             target="_blank"
             className="inline-flex items-center gap-1 text-yellow-700 hover:text-yellow-900 font-bold underline"
           >
             云雾 API 教学文档 <ExternalLink className="h-3 w-3" />
           </a>
        </div>
      </div>

      {/* 本关任务打卡 */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>🚩</span> 本关任务打卡
        </h2>
          <p className="font-medium text-black mb-4">
            请完成以下动作：
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3 text-black">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold text-xs">1</span>
              <span>安装好 Claude Code</span>
            </li>
            <li className="flex items-center gap-3 text-black">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold text-xs">2</span>
              <span>安装 ccswitch 并接入 API</span>
            </li>
            <li className="flex items-center gap-3 text-black">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold text-xs">3</span>
              <span>成功使用 Claude Code 进行对话/编程</span>
            </li>
          </ul>

          <CompletionCheckbox label="任务打卡：我已成功安装并使用 Claude Code！" />
      </div>
    </div>
  );
}