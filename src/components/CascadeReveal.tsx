"use client";

import { useEffect, useState } from "react";

export function CascadeReveal({
  children,
  delay = 0,
  ready = true,
}: {
  children: React.ReactNode;
  delay?: number;
  ready?: boolean;
}) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const timer = setTimeout(() => setRevealed(true), delay);
    return () => clearTimeout(timer);
  }, [ready, delay]);

  return (
    <div
      className={`cascade-section${revealed ? " revealed" : ""}`}
      style={{ animationDelay: revealed ? "0ms" : undefined }}
    >
      {children}
    </div>
  );
}
