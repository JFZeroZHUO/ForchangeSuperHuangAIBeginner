"use client";

import { CheckSquare, Square, ArrowRight } from "lucide-react";
import { useProgress } from "@/contexts/ProgressContext";
import { usePathname, useRouter } from "next/navigation";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";

export function CompletionCheckbox({ label = "任务打卡：开发出第一个网页！" }: { label?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isCompleted, markAsCompleted, markAsIncomplete } = useProgress();
  const completed = isCompleted(pathname);

  // Flatten the docs structure to find current index and next item
  const flatItems = docsConfig.flatMap(section => section.items);
  const currentIndex = flatItems.findIndex(item => item.href === pathname);
  const nextItem = currentIndex !== -1 && currentIndex < flatItems.length - 1 ? flatItems[currentIndex + 1] : null;

  const toggle = () => {
    if (completed) {
      markAsIncomplete(pathname);
    } else {
      markAsCompleted(pathname);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent toggling completion status
    if (nextItem) {
      router.push(nextItem.href);
    }
  };

  return (
    <div className="mt-8 pt-6 border-t border-green-200/50 dark:border-green-800/50">
      <div 
        onClick={toggle}
        className="flex items-center gap-3 cursor-pointer group p-4 rounded-lg bg-white/50 dark:bg-black/20 hover:bg-white/80 dark:hover:bg-black/40 transition-all border border-green-200 dark:border-green-800 shadow-sm"
      >
        <div className={`p-1 rounded transition-colors ${completed ? "text-green-500" : "text-muted-foreground group-hover:text-primary"}`}>
          {completed ? (
            <CheckSquare className="h-6 w-6" />
          ) : (
            <Square className="h-6 w-6" />
          )}
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-foreground m-0">
            {completed ? "已完成本章节" : "标记为已完成"}
          </h4>
          <p className="text-sm text-muted-foreground m-0 mt-1">
            {completed ? "太棒了！继续下一个挑战吧。" : label}
          </p>
        </div>

        {completed && nextItem && (
          <button
            onClick={handleNext}
            className="hidden sm:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 shadow-sm"
          >
            下一章
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Mobile only button */}
      {completed && nextItem && (
        <div className="sm:hidden mt-2 px-1">
           <button
            onClick={handleNext}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
          >
            继续学习下一章：{nextItem.title}
            <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      )}
    </div>
  );
}
