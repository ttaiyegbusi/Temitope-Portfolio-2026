"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface TocItem {
  id: string;
  label: string;
  level?: 1 | 2;
}

export function MobileScrollbar({ items }: { items: TocItem[] }) {
  const [activeLabel, setActiveLabel] = useState(items[0]?.label ?? "");
  const [visible, setVisible] = useState(false);
  const [thumbActive, setThumbActive] = useState(false);
  const [thumbTop, setThumbTop] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>(null);
  const dragging = useRef(false);

  const topLevelItems = items.filter((item) => !item.level);

  const updateThumbPosition = useCallback(() => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) return;
    const pct = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
    setThumbTop(pct * 100);
  }, []);

  const updateActiveSection = useCallback(() => {
    const viewportMid = window.innerHeight * 0.3;
    let current = items[0]?.label ?? "";

    for (const item of topLevelItems) {
      const el = document.getElementById(item.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportMid) {
          current = item.label;
        }
      }
    }

    setActiveLabel(current);
  }, [items, topLevelItems]);

  const showScrollbar = useCallback(() => {
    setVisible(true);
    setThumbActive(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (!dragging.current) {
        setThumbActive(false);
        setTimeout(() => setVisible(false), 400);
      }
    }, 1200);
  }, []);

  useEffect(() => {
    function onScroll() {
      updateThumbPosition();
      updateActiveSection();
      showScrollbar();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    updateThumbPosition();
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [updateThumbPosition, updateActiveSection, showScrollbar]);

  const scrollToPercent = useCallback(
    (pct: number) => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({ top: pct * scrollHeight });
      updateActiveSection();
    },
    [updateActiveSection]
  );

  function handleTouchStart(e: React.TouchEvent) {
    e.preventDefault();
    dragging.current = true;
    setThumbActive(true);
    setVisible(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    handleTouchAt(e.touches[0]);
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (!dragging.current) return;
    e.preventDefault();
    handleTouchAt(e.touches[0]);
  }

  function handleTouchEnd() {
    dragging.current = false;
    hideTimer.current = setTimeout(() => {
      setThumbActive(false);
      setTimeout(() => setVisible(false), 400);
    }, 1200);
  }

  function handleTouchAt(touch: React.Touch) {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const y = touch.clientY - rect.top;
    const pct = Math.min(Math.max(y / rect.height, 0), 1);
    setThumbTop(pct * 100);
    scrollToPercent(pct);
  }

  return (
    <div
      ref={trackRef}
      className="fixed right-[6px] top-[100px] bottom-[100px] z-[1000] flex justify-end md:hidden"
      style={{
        width: 56,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(12px)",
        transition:
          "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: visible ? "auto" : "none",
        touchAction: "none",
        userSelect: "none",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="absolute right-0 flex items-center gap-2"
        style={{
          top: `${thumbTop}%`,
          transform: "translateY(-50%)",
          height: 56,
        }}
      >
        {/* Pill */}
        <div
          className="whitespace-nowrap rounded-full bg-bg-white text-sm font-medium text-text-strong shadow-sm"
          style={{
            opacity: thumbActive ? 1 : 0,
            transform: thumbActive
              ? "translate(0) scale(1)"
              : "translate(10px) scale(0.9)",
            transition:
              "opacity 0.15s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
            height: 32,
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          {activeLabel}
        </div>

        {/* Bar */}
        <div
          className="rounded-[10px]"
          style={{
            width: 5,
            height: 28,
            backgroundColor: "#8d8d8d",
            transition: "transform 0.2s",
            transform: thumbActive ? "scaleY(1.2)" : "scaleY(1)",
          }}
        />
      </div>
    </div>
  );
}
