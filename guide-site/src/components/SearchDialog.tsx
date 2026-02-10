"use client";

import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { docsConfig } from "@/config/docs";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Handle Cmd+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Filter items
  const filteredItems = query
    ? docsConfig.flatMap((group) =>
        group.items.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
        ).map(item => ({ ...item, group: group.title }))
      )
    : [];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-500 border rounded-md bg-white dark:bg-slate-900 hover:border-slate-400 transition-colors"
      >
        <Search className="h-4 w-4" />
        <span className="flex-1 text-left">搜索文档...</span>
        <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-slate-100 px-1.5 font-mono text-[10px] font-medium text-slate-500 opacity-100 dark:bg-slate-800">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-950 rounded-lg shadow-2xl border overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center border-b px-3">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <input
                className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="输入关键词搜索..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {query === "" ? (
                <p className="text-sm text-slate-500 p-4 text-center">输入关键词查找文档...</p>
              ) : filteredItems.length === 0 ? (
                <p className="text-sm text-slate-500 p-4 text-center">未找到相关结果</p>
              ) : (
                <div className="space-y-1">
                  {filteredItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={i}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 dark:bg-slate-900 border">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <div className="text-sm font-medium truncate">{item.title}</div>
                          <div className="text-xs text-slate-500 truncate">{item.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
