"use client";

import { useEffect, useState } from "react";
import { ErrorHelper } from "./ErrorHelper";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function RightSidebar({ className }: { className?: string }) {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    // Reset headings and active state when path changes
    setHeadings([]);
    setActiveId("");

    // Simple way to get headings from the main content
    // We assume the main content is inside a container, but for now querying document is fine
    // as long as we filter correctly. 
    // Ideally, we'd scope this to the main content ref.
    const elements = Array.from(document.querySelectorAll("h2, h3"))
      .filter((el) => {
        // Exclude headings in sidebar or modals if possible
        // For simplicity, we just take all H2/H3 in the document body 
        // that are likely part of the article.
        // A better way is to look for a specific container class.
        return el.closest("main");
      })
      .map((element) => {
        if (!element.id) {
          element.id = element.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
        }
        return {
          id: element.id,
          text: element.textContent || "",
          level: Number(element.tagName.substring(1)),
        };
      });

    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    elements.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]); // Re-run when path changes

  return (
    <div className={cn("py-6 pl-4 flex flex-col h-[calc(100vh-3.5rem)] sticky top-14", className)}>
      <div className="flex-1 overflow-y-auto pr-4">
        {headings.length > 0 && (
          <>
            <h4 className="mb-4 text-sm font-semibold text-foreground">本页目录</h4>
            <div className="space-y-2 text-sm">
              {headings.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className={cn(
                    "block transition-colors hover:text-primary line-clamp-1",
                    heading.level === 3 ? "pl-4" : "",
                    activeId === heading.id
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(heading.id)?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setActiveId(heading.id);
                  }}
                >
                  {heading.text}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="mt-auto pb-8 pr-4">
        <ErrorHelper />
      </div>
    </div>
  );
}
