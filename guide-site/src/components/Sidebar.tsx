"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { docsConfig } from "@/config/docs";
import { useProgress } from "@/contexts/ProgressContext";
import { Circle, CheckCircle2 } from "lucide-react";

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  const { isCompleted } = useProgress();

  return (
    <div className={cn("pb-12 h-full overflow-y-auto bg-background/95", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-8">
            {docsConfig.map((group, i) => (
              <div key={i}>
                <h3 className="mb-2 px-2 text-xs font-bold uppercase tracking-wider text-muted-foreground/70 font-mono">
                  {group.title}
                </h3>
                <div className="space-y-1">
                  {group.items.map((item, j) => {
                    const isActive = pathname === item.href;
                    const completed = isCompleted(item.href);
                    
                    return (
                      <Link
                        key={j}
                        href={item.href}
                        className={cn(
                          "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 border border-transparent",
                          isActive 
                            ? "bg-primary/10 text-primary border-primary/20" 
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                        )}
                      >
                        <div className="shrink-0">
                          {completed ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          ) : (
                            <Circle className={cn(
                              "h-4 w-4", 
                              isActive ? "text-primary fill-primary/20" : "text-muted-foreground/40"
                            )} />
                          )}
                        </div>
                        <span className="truncate">{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
