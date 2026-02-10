import Link from "next/link";
import { Download, Check } from "lucide-react";
import { CompletionCheckbox } from "@/components/CompletionCheckbox";

export default function IDESetupPage() {
  return (
    <div className="space-y-6 max-w-4xl pb-10">
      <div>
        <h1>IDE 选择：Trae vs Cursor</h1>
        <section className="mb-6">
          <div className="py-6 border-b border-slate-100 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-0 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
              🚀 AI 编程：IDE的核心超能力
            </h2>
            
            <div className="space-y-0">
              <div className="p-1 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors rounded-xl">
                <h3 className="text-base font-bold !text-black dark:text-gray-100 opacity-100 mb-[-5px]">
                  ⚡️ 极速构建：说出你的需求
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-tight">
                  告别死记硬背语法。只需一句中文指令：“写个贪吃蛇网页小游戏”，它瞬间生成几百行完美代码，开箱即用。
                </p>
              </div>

              <div className="p-1 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors rounded-xl">
                <h3 className="text-base font-bold !text-black dark:text-gray-100 opacity-100 mb-[-5px]">
                  🗣️ 自然交互：听得懂“人话”的超级翻译官
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-tight">
                  无需查阅枯燥文档。直接下令：“把背景调暗点”、“解释这段逻辑”，它吭哧吭哧干活，你优哉游哉喝茶。
                </p>
              </div>

              <div className="p-1 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors rounded-xl">
                <h3 className="text-base font-bold !text-black dark:text-gray-100 opacity-100 mb-[-5px]">
                  🧠 全局大脑：拥有“上帝视角”的项目专家
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-tight">
                  它拥有过目不忘的记忆力。瞬间读取项目里几千个文件，比你更懂业务逻辑，新写代码完美融入，不冲突。
                </p>
              </div>

              <div className="p-1 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors rounded-xl">
                <h3 className="text-base font-bold !text-black dark:text-gray-100 opacity-100 mb-[-5px]">
                  🛡️ 智能排障：未卜先知的“金牌维修工”
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-tight">
                  代码还没运行，它已发现隐患：“第10行缺个参数，我已帮你补全。”
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
          主流 IDE 推荐
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
        <div className="p-6 rounded-2xl border border-blue-200 bg-blue-50/50 dark:bg-blue-950/20 dark:border-blue-800/50 flex flex-col shadow-sm relative overflow-hidden group">
          <div className="space-y-4 flex-1">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-900 dark:text-blue-300">
              新手推荐
            </div>
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mt-0 border-0 pb-0">Trae-cn 国内版</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              无需翻墙。免费，但只支持国产大模型，例如豆包大模型、deepseek等。新手入门可尝试。
            </p>
          </div>
          <div className="pt-6 mt-auto space-y-3">
            <a 
              href="https://www.trae.ai/" 
              target="_blank"
              className="inline-flex items-center justify-center w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 tracking-wide !text-white"
            >
              <Download className="mr-2 h-4 w-4 stroke-[3]" /> 官网下载
            </a>
            <a 
              href="https://forchangesz.feishu.cn/wiki/R1PEwUPKXiyTsZk8bUYcZ21onXg" 
              target="_blank"
              className="inline-flex items-center justify-center w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all tracking-wide !text-white group/btn"
            >
               安装教程
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-purple-200 bg-purple-50/50 dark:bg-purple-950/20 dark:border-purple-800/50 flex flex-col shadow-sm relative overflow-hidden group">
           <div className="space-y-4 flex-1">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-700 dark:border-purple-800 dark:bg-purple-900 dark:text-purple-300">
              强烈推荐
            </div>
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mt-0 border-0 pb-0">Trae 国际版</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              需要翻墙。支持gemini等国际优秀大模型来进行AI编程。价格相对cursor会便宜一些。
            </p>
          </div>
          <div className="pt-6 mt-auto space-y-3">
            <a 
              href="https://www.trae.ai/" 
              target="_blank"
              className="inline-flex items-center justify-center w-full rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-purple-600/20 hover:bg-purple-500 hover:shadow-purple-600/30 hover:-translate-y-0.5 transition-all tracking-wide !text-white"
            >
              <Download className="mr-2 h-4 w-4 stroke-[3]" /> 官网下载
            </a>
            <a 
              href="https://forchangesz.feishu.cn/wiki/YYCawmgL8ihAzlkkLI1c9dnNnBD" 
              target="_blank"
              className="inline-flex items-center justify-center w-full rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-purple-600/20 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:shadow-purple-600/30 hover:-translate-y-0.5 transition-all tracking-wide !text-white group/btn"
            >
               安装教程
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-border bg-card flex flex-col shadow-sm relative overflow-hidden group opacity-80 hover:opacity-100 transition-opacity">
          <div className="space-y-4 flex-1">
             <div className="inline-flex items-center rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
              暂不推荐
            </div>
            <h3 className="text-xl font-bold mt-0 border-0 pb-0">Cursor</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              需要翻墙。支持超强的claude模型，虽然强大但需要银行卡支付比较麻烦，且价格昂贵
            </p>
          </div>
          <div className="pt-6 mt-auto space-y-3">
            <a 
              href="https://www.cursor.com/" 
              target="_blank"
              className="inline-flex items-center justify-center w-full rounded-xl bg-slate-200 dark:bg-slate-800 px-4 py-2.5 text-sm font-bold text-slate-900 dark:text-slate-100 shadow-sm hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all tracking-wide !text-slate-900 dark:!text-slate-100"
            >
              <Download className="mr-2 h-4 w-4 stroke-[3]" /> 官网下载
            </a>
            <a 
              href="https://forchangesz.feishu.cn/wiki/KJb3wUMO9i8mg7k008lciP0qnrh" 
              target="_blank"
              className="inline-flex items-center justify-center w-full rounded-xl bg-slate-800 dark:bg-slate-700 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-600/20 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-600 hover:shadow-slate-600/30 hover:-translate-y-0.5 transition-all tracking-wide !text-white group/btn"
            >
               安装教程
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="space-y-6 mt-12">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>🚩</span> 本关任务打卡
        </h2>
        <div className="rounded-xl p-6">
          <p className="font-medium text-black dark:text-white mb-4">
            请完成以下动作：
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold">1</span>
              <span className="font-bold text-black">安装任一 IDE（Trae 或 Cursor）</span>
            </li>
          </ul>
          
          <CompletionCheckbox label="任务打卡：我已成功安装IDE！" />
        </div>
      </div>
    </div>
  );
}
