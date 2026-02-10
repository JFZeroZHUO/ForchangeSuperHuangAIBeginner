"use client";

import { AlertCircle, X, Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ErrorHelper() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const errorTemplate = `【问题描述】我在 [操作步骤] 时报错
【环境信息】Windows 11, Node v18
【已尝试方案】[你尝试过什么]
【报错截图】(请附上截图)`;

  const copyTemplate = async () => {
    await navigator.clipboard.writeText(errorTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 mt-6 text-sm font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/30 dark:text-amber-500 rounded-md border border-amber-200 dark:border-amber-900 transition-colors"
      >
        <AlertCircle className="h-4 w-4" />
        报错求助
      </button>

      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div 
        className={cn(
          "fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out p-6 flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold mt-0 border-0 mb-0">报错提问助手</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-muted rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground mt-0 mb-2 uppercase tracking-wider">Step 1: 问 AI</h3>
            <div className="p-4 bg-muted rounded-lg text-sm">
              <p className="mt-0">遇到报错，先截图或复制错误信息，直接发给 AI：</p>
              <div className="mt-3 p-3 bg-background border border-border rounded font-mono text-xs">
                我正在运行这个命令，但是报错了：<br/>
                [粘贴报错信息]<br/>
                请告诉我原因和解决方法。
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground mt-0 mb-2 uppercase tracking-wider">Step 2: 问教练/群友</h3>
            <p className="text-sm text-muted-foreground mt-0">如果 AI 解决不了，请使用以下模板提问，方便大家帮你：</p>
            
            <div className="relative mt-2">
              <div className="absolute right-2 top-2">
                <button
                  onClick={copyTemplate}
                  className="p-1.5 hover:bg-muted rounded-md text-muted-foreground transition-colors"
                  title="复制模板"
                >
                  {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
              <textarea 
                className="w-full h-40 p-3 text-sm font-mono bg-muted/50 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
                readOnly
                value={errorTemplate}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            我知道了
          </button>
        </div>
      </div>
    </>
  );
}
