"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export function CodeBlock({ code, language = "bash", title }: { code: string; language?: string; title?: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-border/50 bg-[#1e1e1e] text-slate-50 overflow-hidden my-6 shadow-xl shadow-black/10">
      <div className="flex items-center justify-between px-4 py-3 bg-[#1e1e1e] border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
          </div>
          {title && <span className="text-xs text-slate-400 font-medium ml-2">{title}</span>}
        </div>
        <div className="flex items-center gap-2">
          {!title && (
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono px-2">
              <Terminal className="h-3 w-3" />
              {language}
            </div>
          )}
          <button
            onClick={copyToClipboard}
            className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-slate-400 hover:text-slate-100"
            aria-label="Copy code"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
      <div className="p-5 overflow-x-auto">
        <pre className="text-[13px] font-mono leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
