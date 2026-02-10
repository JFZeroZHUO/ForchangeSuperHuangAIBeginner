"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Github, Search, Menu } from "lucide-react";
import Link from "next/link";
import { SearchDialog } from "./SearchDialog";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Header({ 
  onMenuClick 
}: { 
  onMenuClick?: () => void 
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4 md:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden p-2 -ml-2 hover:bg-muted rounded-md"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="text-primary text-2xl">⚡</span>
            <span className="hidden sm:inline-block">风变AI产品黄叔AI编程社团</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end">
          <div className="w-full max-w-sm hidden md:block">
            <SearchDialog />
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
