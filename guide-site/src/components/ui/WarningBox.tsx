import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export function WarningBox({ title, children, className }: { title?: string, children: React.ReactNode, className?: string }) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl border border-orange-200/80 bg-gradient-to-br from-orange-50 via-orange-50/50 to-transparent p-5",
      "dark:border-orange-500/30 dark:from-orange-950/40 dark:via-orange-950/20 dark:to-transparent",
      "before:absolute before:inset-0 before:bg-gradient-to-br before:from-orange-500/10 before:to-transparent before:pointer-events-none",
      className
    )}>
      <div className="relative flex items-start gap-4">
        <div className="p-2.5 rounded-xl bg-orange-100 dark:bg-orange-900/40 shadow-sm shrink-0 ring-1 ring-orange-200/50 dark:ring-orange-500/20">
          <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" strokeWidth={2.5} />
        </div>
        <div className="text-sm text-orange-950 dark:text-orange-100/90 pt-1.5">
          {title && <h5 className="mb-2 font-bold tracking-tight text-orange-800 dark:text-orange-200 text-base">{title}</h5>}
          <div className="[&_p]:leading-relaxed font-medium opacity-90 text-orange-900/80 dark:text-orange-100/80">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
