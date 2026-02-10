import { CodeBlock } from "@/components/ui/CodeBlock";
import { CheckCircle2, ExternalLink, Terminal, AlertCircle, Globe, Shield, Lock, FileCode, Flag, Server } from "lucide-react";
import { CompletionCheckbox } from "@/components/CompletionCheckbox";

export default function DomainBindingPage() {
  return (
    <div className="space-y-10 max-w-4xl pb-10">
      {/* Header */}
      <div>
        <h1>【选修】把海外网页，解析到国内</h1>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-zinc-600">
          <p>
            上一章已经在 Vercel 海外服务器部署网页了，为什么不直接部署到国内服务器呢？
          </p>
          <div className="p-4 bg-blue-50 text-blue-800 rounded-xl border border-blue-100">
             之所以课程安排让你先部署到 Vercel，是为了保护你的<span className="font-bold">“编程自信心”</span>。
          </div>
        </div>
      </div>

      {/* 1. 最大的拦路虎：ICP 备案 */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>🐯</span> 最大的拦路虎：ICP 备案（劝退级）
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* 国内部署 */}
          <div className="p-6 rounded-xl border border-red-200 bg-red-50/50 space-y-4">
            <div className="flex items-center gap-2 text-red-700 font-bold text-lg">
               <Server className="h-5 w-5" />
               国内部署（阿里云/腾讯云）
            </div>
            <div className="text-sm text-zinc-600 space-y-2">
               <p>根据中国法律法规，使用国内大陆服务器开办网站，<span className="font-bold text-red-600">必须进行 ICP 备案</span>。</p>
               <div className="p-3 bg-white rounded-lg border border-red-100 text-xs text-zinc-500">
                 <span className="font-bold text-black">流程：</span>实名认证 → 上传身份证 → 人脸核身 → 填写详细用途声明 → 等待管局审核（7~20 天）。
               </div>
               <p className="italic text-zinc-500">
                 “想象一下：你刚兴致勃勃写好代码，结果被告知‘先去填表，等半个月审批下来才能让别人看’。这盆冷水泼下来，90% 的人直接就放弃了。”
               </p>
            </div>
          </div>

          {/* Vercel 部署 */}
          <div className="p-6 rounded-xl border border-green-200 bg-green-50/50 space-y-4">
            <div className="flex items-center gap-2 text-green-700 font-bold text-lg">
               <Globe className="h-5 w-5" />
               Vercel 部署
            </div>
            <div className="text-sm text-zinc-600 space-y-2">
               <p>服务器在国外，<span className="font-bold text-green-600">不需要备案</span>。</p>
               <div className="p-3 bg-white rounded-lg border border-green-100 text-xs text-zinc-500">
                 <span className="font-bold text-black">流程：</span>代码一推，30秒后全球可见。
               </div>
               <p className="font-medium text-green-800">
                 这对新手来说至关重要：你需要的是立刻、马上看到自己的成果，而不是去走行政流程。
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 为什么还要解析到国内域名 */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>🤔</span> 那为什么还要解析到国内的域名呢？
        </h2>
        
        <div className="space-y-3">
           <div className="p-4 rounded-xl border border-orange-200 bg-orange-50">
              <div>
                 <h3 className="font-bold text-orange-800 text-lg mb-2 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-orange-600 shrink-0" />
                    核心原因：为了“防屏蔽”
                 </h3>
                 <p className="text-zinc-700 mb-3">
                   <span className="font-bold">现状：</span>Vercel 分配给你的默认网址（以 .vercel.app 结尾）是公共的。因为用的人太多，鱼龙混杂，<span className="bg-yellow-200 px-1 font-bold text-black">这个后缀经常被国内网络防火墙屏蔽或者是被微信拦截</span>。
                 </p>
                 <p className="text-zinc-700">
                   <span className="font-bold">后果：</span>你发给朋友的 xxx.vercel.app 链接，朋友在中国这边的网络下经常打不开，或者需要“梯子”（科学上网）才能看。
                </p>
              </div>
           </div>

           <div className="p-4 rounded-xl border border-blue-200 bg-blue-50">
              <div>
                 <h3 className="font-bold text-blue-800 text-lg mb-2 flex items-center gap-2">
                    <Lock className="h-6 w-6 text-blue-600 shrink-0" />
                    解决办法：绑定自己的域名
                 </h3>
                 <p className="text-zinc-700 mb-3">
                   你买一个自己的域名（比如 wodeai.com），把它绑定到 Vercel 上。因为这个域名是你独享的，它是“干净”的。
                 </p>
                 <div className="p-3 bg-white/60 rounded-lg border border-blue-100 text-blue-900 font-medium">
                    绑定后，国内用户通常就能直接打开你的 Vercel 网页了，不需要梯子。
                 </div>
                 <p className="text-xs text-blue-600/80 mt-2">
                   （这是一种“卡BUG”式的低成本方案：用国外的免费服务器 + 自己的域名 = 国内能访问）。
                 </p>
              </div>
           </div>
        </div>
      </div>

      {/* 3. 核心教学参考文档 */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>📚</span> 核心教学参考文档
        </h2>
        
        <div className="my-6 p-6 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="text-6xl">📖</span>
          </div>
          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-2 text-indigo-700 font-bold text-lg">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
              保姆级图文教程
            </div>
            <h3 className="text-xl font-bold text-slate-900 m-0 border-none pb-0">
              如何获得自己的国内域名 & 把网站绑定到你自己的域名上
            </h3>
            <div className="pt-2">
              <a 
                href="https://forchangesz.feishu.cn/wiki/Tl9wwwVhyiqQB4kAjGncBw3HnQf" 
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 !text-white rounded-lg font-medium transition-colors shadow-lg shadow-indigo-600/20 group-hover:translate-x-1"
              >
                点击查看飞书文档
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 本关任务打卡 */}
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span>🚩</span> 本关任务打卡
        </h2>
        <div className="rounded-xl p-6 border border-zinc-200 bg-white shadow-sm">
          <p className="font-medium text-black mb-4">
            请完成以下动作：
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3 text-black">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold text-xs">1</span>
              <span>将你 Vercel 上的网页解析到国内域名上</span>
            </li>
            <li className="flex items-center gap-3 text-black">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold text-xs">2</span>
              <span>把新的国内域名链接发到入门基础群里</span>
            </li>
          </ul>

          <CompletionCheckbox label="任务打卡：我已成功绑定域名并分享！" />
        </div>
      </div>
    </div>
  );
}
