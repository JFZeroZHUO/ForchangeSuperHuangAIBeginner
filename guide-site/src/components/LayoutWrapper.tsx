"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { RightSidebar } from "./RightSidebar";
import { Header } from "./Header";
import { cn } from "@/lib/utils";
import { ProgressProvider } from "@/contexts/ProgressContext";
import { usePathname } from "next/navigation";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <ProgressProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

        <div className="flex-1 container mx-auto flex items-start">
          {/* Mobile Menu Overlay */}
          {!isHomePage && (
            <div
              className={cn(
                "fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity backdrop-blur-sm",
                isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
          
          {/* Left Sidebar - 280px (Hidden on Home) */}
          {!isHomePage && (
            <aside
              className={cn(
                "fixed inset-y-0 left-0 z-50 w-[280px] bg-background border-r border-border transform transition-transform duration-200 md:translate-x-0 md:sticky md:top-14 md:h-[calc(100vh-3.5rem)]",
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              )}
            >
              <Sidebar />
            </aside>
          )}

          {/* Main Content */}
          <div className={cn("flex-1 flex min-w-0", isHomePage ? "justify-center" : "")}>
            <main 
              className={cn(
                "flex-1 min-w-0 px-4 md:px-8",
                isHomePage ? "max-w-5xl w-full py-4" : "max-w-4xl lg:px-12 mx-auto py-8"
              )}
            >
              {children}
            </main>

            {/* Right Sidebar - 200px (Hidden on Home) */}
            {!isHomePage && (
              <aside className="hidden xl:block w-[240px] shrink-0 border-l border-border/40">
                <RightSidebar />
              </aside>
            )}
          </div>
        </div>
      </div>
    </ProgressProvider>
  );
}
