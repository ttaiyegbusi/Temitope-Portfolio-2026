"use client";

import { useEffect, useState } from "react";

const SIZE = 18;
const STROKE = 2;

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const content = document.querySelector<HTMLElement>("[data-case-content]");
    const hero = document.querySelector<HTMLElement>("[data-case-hero]");
    if (!content) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // Content-based progress: 0 at the top of the reading content,
      // 1 when the bottom of the content reaches the bottom of the viewport.
      const rect = content.getBoundingClientRect();
      const contentTop = rect.top + scrollY;
      const contentHeight = content.offsetHeight;
      const scrollable = Math.max(1, contentHeight - vh);
      const p = Math.min(1, Math.max(0, (scrollY - contentTop) / scrollable));
      setProgress(p);

      // Fade in once the reader scrolls past the hero image.
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom + scrollY;
        // Offset for the sticky header height so it reveals as the hero leaves.
        setVisible(scrollY + 96 > heroBottom);
      } else {
        setVisible(scrollY > 240);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const r = (SIZE - STROKE) / 2;
  const circ = 2 * Math.PI * r;

  return (
    <div
      className="shrink-0 overflow-hidden transition-all duration-300 ease-out"
      style={{
        width: visible ? SIZE : 0,
        marginRight: visible ? 8 : 0,
        opacity: visible ? 1 : 0,
      }}
      aria-hidden={!visible}
    >
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="block -rotate-90"
      >
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE}
          className="text-stroke-soft"
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          className="text-text-strong"
          strokeDasharray={circ}
          strokeDashoffset={circ * (1 - progress)}
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
        />
      </svg>
    </div>
  );
}
