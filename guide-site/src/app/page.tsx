import Link from "next/link";
import { ArrowRight, Terminal, Zap, Shield, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 py-8 max-w-6xl mx-auto w-full px-4">
      {/* Hero Section - Minimalist Header */}
      <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-2 border-b border-border/40">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            AI编程 | 入门基础手册
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl">
            零基础入门 AI 编程，从环境配置到自动化实战的全流程指南。
            先让 AI 写一份说明书，再让它动手写代码。
          </p>
        </div>
        <div className="flex-shrink-0">
          <Link 
            href="/setup/network" 
            className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border-2 border-primary text-primary hover:bg-primary/5 h-10 px-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            开始新手村任务 <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Stage Cards - 3 Column Grid */}
      <section className="grid md:grid-cols-3 gap-6">
        {/* Stage 1 */}
        <Link href="/setup/network" className="group relative rounded-xl border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-x-1 overflow-hidden flex flex-col border-l-[6px] border-l-blue-500">
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 w-fit rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">第一阶段：环境准备</h3>
            </div>
            <p className="text-muted-foreground text-sm flex-1 leading-relaxed mb-2">
              工欲善其事，必先利其器。本阶段目标是搭建稳固的开发地基。
            </p>
            <div className="mt-2 pt-2 border-t border-border/50">
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500" /> 科学上网指引</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500" /> IDE 选择与安装</li>
              </ul>
            </div>
          </div>
        </Link>

        {/* Stage 2 */}
        <Link href="/web-dev/first-site" className="group relative rounded-xl border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-x-1 overflow-hidden flex flex-col border-l-[6px] border-l-green-500">
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 w-fit rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                <Terminal className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold group-hover:text-green-600 transition-colors">第二阶段：入门实战</h3>
            </div>
            <p className="text-muted-foreground text-sm flex-1 leading-relaxed mb-2">
              亲手开发第一个网页，掌握 Node.js/Git 五件套，一键上线。
            </p>
            <div className="mt-2 pt-2 border-t border-border/50">
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> 开发第一个网页</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> 环境五件套配置</li>

              </ul>
            </div>
          </div>
        </Link>

        {/* Stage 3 */}
        <Link href="/claude/install" className="group relative rounded-xl border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-x-1 overflow-hidden flex flex-col border-l-[6px] border-l-purple-500">
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 w-fit rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/40 transition-colors">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold group-hover:text-purple-600 transition-colors">第三阶段：高级进阶</h3>
            </div>
            <p className="text-muted-foreground text-sm flex-1 leading-relaxed mb-2">
              解锁 Claude Code 终端神器，配置 API，体验全自动化编程。
            </p>
            <div className="mt-2 pt-2 border-t border-border/50">
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-purple-500" /> Claude Code 安装</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-purple-500" /> API 与中转配置</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-purple-500" /> 自动化实战案例</li>
              </ul>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
