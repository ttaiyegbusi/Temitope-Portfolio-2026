"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

interface ImageLightboxProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  images?: string[];
  startIndex?: number;
}

export function ImageLightbox({
  src,
  alt,
  children,
  images,
  startIndex = 0,
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(startIndex);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const touchDelta = useRef(0);
  const swiped = useRef(false);

  const gallery = images && images.length > 1 ? images : null;
  const currentSrc = gallery ? gallery[index] : src;

  const close = useCallback(() => setOpen(false), []);

  const prev = useCallback(() => {
    if (gallery) setIndex((i) => (i > 0 ? i - 1 : gallery.length - 1));
  }, [gallery]);

  const next = useCallback(() => {
    if (gallery) setIndex((i) => (i < gallery.length - 1 ? i + 1 : 0));
  }, [gallery]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  const handleOpen = useCallback(() => {
    setIndex(startIndex);
    setOpen(true);
  }, [startIndex]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    touchDelta.current = 0;
    swiped.current = false;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStart.current) return;
    touchDelta.current = e.touches[0].clientX - touchStart.current.x;
    if (Math.abs(touchDelta.current) > 10) {
      e.preventDefault();
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!gallery || !touchStart.current) return;
    const threshold = 50;
    if (touchDelta.current > threshold) {
      prev();
      swiped.current = true;
    } else if (touchDelta.current < -threshold) {
      next();
      swiped.current = true;
    }
    touchStart.current = null;
    touchDelta.current = 0;
  }, [gallery, prev, next]);

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (swiped.current) {
      swiped.current = false;
      return;
    }
    close();
  }, [close]);

  return (
    <>
      <div onClick={handleOpen} className="cursor-zoom-in">
        {children}
      </div>
      {open &&
        typeof document !== "undefined" &&
        createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm select-none"
          onClick={handleOverlayClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: "pan-y" }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors z-20"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          {gallery && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors backdrop-blur-sm"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors backdrop-blur-sm"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                    className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/40"}`}
                  />
                ))}
              </div>
            </>
          )}

          <div
            className="max-w-[95vw] max-h-[90vh] relative z-10"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={currentSrc}
              alt={alt}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg pointer-events-none"
              draggable={false}
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
