"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { Preloader } from "./Preloader";

const AppReadyContext = createContext(false);
export function useAppReady() { return useContext(AppReadyContext); }

export function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  const handleFinish = useCallback(() => {
    setLoading(false);
    setTimeout(() => setReady(true), 50);
  }, []);

  return (
    <AppReadyContext.Provider value={ready}>
      {loading && <Preloader onFinish={handleFinish} />}
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        {children}
      </div>
    </AppReadyContext.Provider>
  );
}
