"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ProgressContextType = {
  completedChapters: string[];
  markAsCompleted: (chapterId: string) => void;
  markAsIncomplete: (chapterId: string) => void;
  isCompleted: (chapterId: string) => boolean;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedChapters, setCompletedChapters] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("guide-progress");
    if (saved) {
      setCompletedChapters(JSON.parse(saved));
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("guide-progress", JSON.stringify(completedChapters));
    }
  }, [completedChapters, mounted]);

  const markAsCompleted = (chapterId: string) => {
    if (!completedChapters.includes(chapterId)) {
      setCompletedChapters((prev) => [...prev, chapterId]);
    }
  };

  const markAsIncomplete = (chapterId: string) => {
    setCompletedChapters((prev) => prev.filter((id) => id !== chapterId));
  };

  const isCompleted = (chapterId: string) => {
    return completedChapters.includes(chapterId);
  };

  return (
    <ProgressContext.Provider value={{ completedChapters, markAsCompleted, markAsIncomplete, isCompleted }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}
