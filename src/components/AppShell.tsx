"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { Preloader } from "./Preloader";

const AppReadyContext = createContext(false);
export function useAppReady() { return useContext(AppReadyContext); }

// Runs before paint on the client, falls back to useEffect on the server so
// Next doesn't warn about useLayoutEffect during SSR.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const SEEN_KEY = "tp_intro_seen";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  // On repeat visits within the same session, skip the intro entirely — and do
  // it before the browser paints so the preloader never flashes.
  useIsomorphicLayoutEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}
    if (seen) {
      setLoading(false);
      setReady(true);
    }
  }, []);

  const handleFinish = useCallback(() => {
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {}
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
