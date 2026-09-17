"use client";

import { useRef, useState, useCallback, useEffect } from "react";

export function VideoPlayer({ src }: { src: string }) {
  const [expanded, setExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const expandedVideoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const open = useCallback(() => {
    setExpanded(true);
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    setExpanded(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    if (expanded && expandedVideoRef.current && videoRef.current) {
      expandedVideoRef.current.currentTime = videoRef.current.currentTime;
      expandedVideoRef.current.play().catch(() => {});
    }
  }, [expanded]);

  useEffect(() => {
    if (!expanded) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [expanded, close]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <>
      <div
        ref={containerRef}
        className="relative rounded-lg overflow-hidden cursor-pointer"
        onClick={open}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full rounded-lg"
        />
        <span
          className="pointer-events-none absolute whitespace-nowrap text-sm font-medium text-text-strong bg-bg-white border border-stroke-soft rounded-full px-5 py-2.5 shadow-sm transition-opacity duration-200 -translate-x-1/2 -translate-y-1/2 hidden md:block"
          style={{
            left: pos.x,
            top: pos.y,
            opacity: hovered ? 1 : 0,
          }}
        >
          Expand
        </span>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 animate-lightbox-in"
          onClick={close}
        >
          <div
            className="relative w-[90vw] max-w-[1200px] animate-lightbox-scale shadow-2xl rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={expandedVideoRef}
              src={src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-xl"
            />
            <button
              onClick={close}
              className="absolute -top-10 right-0 text-text-soft hover:text-text-strong transition-colors text-sm"
            >
              Press Esc or click outside to close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
