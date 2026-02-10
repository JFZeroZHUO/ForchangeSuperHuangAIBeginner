import { CodeBlock } from "@/components/ui/CodeBlock";
import { CompletionCheckbox } from "@/components/CompletionCheckbox";
import { Terminal, Database, Search, FileOutput, Lightbulb, Zap, Rocket, ExternalLink, BookOpen, Coffee, Key, Shield } from "lucide-react";

export default function AutomationPage() {
  return (
    <div className="space-y-12 max-w-4xl pb-10">
      {/* 1. 引言 */}
      <div className="space-y-6">
        <h1>使用 Claude Skills，全自动完成从微博热搜提取产品创意</h1>
        
        <div className="space-y-2">
              <h2 className="text-xl font-bold m-0 border-0 pb-0 flex items-center gap-3">
                <Coffee className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                震撼开场：一杯咖啡的时间
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                只需输入一个斜杠指令 <span className="font-mono bg-muted px-1.5 py-0.5 rounded font-bold">/analyze</span>，
                AI 就会自动抓取微博热搜前 15 名、全网搜索相关新闻、自动分析其“有趣”和“有用”程度，
                并最终生成一份精美的 HTML 产品创意分析报告。
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white dark:bg-blue-500 text-sm font-medium">
                  <Rocket className="h-3.5 w-3.5" /> 全程自动化，你只需要喝杯咖啡等结果
                </span>
              </div>
            </div>
      </div>

      {/* 2. 什么是 Claude Code Skills */}
      <div className="space-y-8">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>🧩</span> 什么是 Claude Code Skills？
        </h2>

          <div>
            <p className="text-indigo-800 dark:text-indigo-200 leading-relaxed">
              <span className="font-bold">核心定义：</span>Skills 就是给 Claude Code 这个“AI 员工”发的<span className="font-bold text-blue-600 dark:text-blue-400 mx-1">《标准操作手册》（SOP）</span>，
              或者说是给它装的一个“专用 APP”。
            </p>
          </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="flex items-center gap-2 text-zinc-500 font-bold">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-200 text-zinc-600 text-xs">❌</span>
              没有 Skills (Prompt)
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              像教保姆做饭，每次都要在旁边啰嗦一遍流程（累，且一次性）。
            </p>
          </div>

          <div className="p-5 rounded-xl border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800 space-y-3">
            <div className="flex items-center gap-2 text-green-700 font-bold">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-200 text-green-700 text-xs">✅</span>
              有了 Skills
            </div>
            <p className="text-sm text-green-800 dark:text-green-200 leading-relaxed">
              直接给保姆一本《西红柿炒蛋标准制作指南》，下次只要喊一句菜名，她就自动按标准做好了。
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-border bg-card">
          <p className="text-sm text-muted-foreground">
            <span className="font-bold text-foreground">本质：</span>
            它将复杂的“一连串动作”（抓数据、分析、写文件等）打包成简单的<span className="font-bold text-primary mx-1">“一句话指令”</span>，让 AI 能够持久化地掌握这项技能。
          </p>
        </div>
      </div>

      {/* 3. 为什么大家都在吹爆 Skills */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>🔥</span> 为什么大家都在吹爆 Skills？
        </h2>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-4 rounded-xl border border-orange-100 bg-orange-50/50 dark:bg-orange-900/20 dark:border-orange-800 hover:shadow-md transition-all">
            <h3 className="font-bold text-base mb-2 flex items-center gap-2">
              <div className="p-2 w-fit rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400">
                <Zap className="h-5 w-5" />
              </div>
              极简开发，极高上限
            </h3>
            <p className="text-sm text-muted-foreground">
              “用口喷（自然语言）来让它把执行流程自动化”。非程序员也能创造复杂的自动化工具。
            </p>
          </div>

          <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/50 dark:bg-blue-900/20 dark:border-blue-800 hover:shadow-md transition-all">
            <h3 className="font-bold text-base mb-2 flex items-center gap-2">
              <div className="p-2 w-fit rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
                <Lightbulb className="h-5 w-5" />
              </div>
              思维的转变
            </h3>
            <p className="text-sm text-muted-foreground">
              不只是告诉 AI “做什么”，而是教会了 AI “如何判断”。把人类的专业判断逻辑变成了 AI 的执行逻辑。
            </p>
          </div>

          <div className="p-4 rounded-xl border border-purple-100 bg-purple-50/50 dark:bg-purple-900/20 dark:border-purple-800 hover:shadow-md transition-all">
            <h3 className="font-bold text-base mb-2 flex items-center gap-2">
              <div className="p-2 w-fit rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400">
                <Rocket className="h-5 w-5" />
              </div>
              效率革命
            </h3>
            <p className="text-sm text-muted-foreground">
              解决了传统 AI 对话“效率低、易出错”的问题。半天的人工工作变成了 10 分钟的自动运行。
            </p>
          </div>

          <div className="p-4 rounded-xl border border-pink-100 bg-pink-50/50 dark:bg-pink-900/20 dark:border-pink-800 hover:shadow-md transition-all">
            <h3 className="font-bold text-base mb-2 flex items-center gap-2">
              <div className="p-2 w-fit rounded-lg bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-400">
                <Shield className="h-5 w-5" />
              </div>
              最佳平衡点
            </h3>
            <p className="text-sm text-muted-foreground">
              找到了“简单交互”与“复杂能力”的最佳平衡点，是让 AI 成为“懂你的专属助手”的最佳路径。
            </p>
          </div>
        </div>
      </div>

      {/* 4. 核心教学文档/资源链接 */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>📚</span> 核心教学文档与资源
        </h2>
        
        <div className="space-y-4">
          <div className="space-y-3 p-6 rounded-xl border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
            <div className="flex items-center gap-2 font-bold text-lg">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              核心教学文档
            </div>
            <h3 className="text-xl font-bold m-0 border-none pb-0">
              《详细图文教程：手把手教你创建 Skills》
            </h3>
            <div className="pt-2">
              <a 
                href="https://forchangesz.feishu.cn/wiki/EpRrwqGpEipSRukgwXKcEAqinRf" 
                target="_blank" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 !text-white rounded-lg font-medium transition-colors shadow-lg shadow-green-600/20"
              >
                前往学习 <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 5. 本关卡任务 */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>🚩</span> 本关卡任务
        </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">1</span>
                核心任务
              </h3>
              <div className="pl-8 space-y-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">复现微博热搜分析 Skill</span>：
                  按照教程步骤，注册 API，编写提示词，让 Claude Code 生成一个能自动抓取微博热搜、进行联网搜索分析、并生成 HTML 报告的 Skill。
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">自主创新（可选）</span>：
                  在掌握了 Skills 的原理后，尝试自己新建一个属于自己的 Skill。
                </p>
              </div>
            </div>


          </div>
          
          <div className="mt-8">
            <CompletionCheckbox label="任务打卡：我已成功创建并运行微博热搜分析 Skill！" />
          </div>
      </div>
    </div>
  );
}