"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ImageLightbox } from "@/components/ImageLightbox";

interface ImageGalleryProps {
  images: string[];
  captions?: string[];
  title: string;
}

export function ImageGallery({ images, captions, title }: ImageGalleryProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // --- Drag-to-scroll ---
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const hasMoved = useRef(false);
  // Suppresses the nudge / interaction hints once the user takes over.
  const interacted = useRef(false);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    isDragging.current = true;
    hasMoved.current = false;
    startX.current = e.pageX - el.offsetLeft;
    startScroll.current = el.scrollLeft;
    el.style.cursor = "grabbing";
  }, []);

  const endDrag = useCallback(() => {
    isDragging.current = false;
    if (scrollerRef.current) scrollerRef.current.style.cursor = "grab";
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = scrollerRef.current;
    if (!isDragging.current || !el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(x - startX.current) > 5) {
      hasMoved.current = true;
      interacted.current = true;
    }
    el.scrollLeft = startScroll.current - walk;
  }, []);

  const handleClickCapture = useCallback((e: React.MouseEvent) => {
    if (hasMoved.current) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, []);

  // --- Active dot tracking ---
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const center = el.scrollLeft + el.clientWidth / 2;
      const items = Array.from(el.querySelectorAll<HTMLElement>("[data-slide]"));
      let closest = 0;
      let min = Infinity;
      items.forEach((item, i) => {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const d = Math.abs(itemCenter - center);
        if (d < min) {
          min = d;
          closest = i;
        }
      });
      setActive(closest);
    };
    const onScroll = () => {
      interacted.current = true;
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // --- One-time "nudge" hint when scrolled into view ---
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || images.length < 2) return;
    if (typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let done = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || done || interacted.current) return;
          done = true;
          observer.disconnect();
          // Peek forward, then settle back to hint that the row scrolls.
          el.scrollTo({ left: 44, behavior: "smooth" });
          window.setTimeout(() => {
            if (!interacted.current) el.scrollTo({ left: 0, behavior: "smooth" });
          }, 600);
        });
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [images.length]);

  const scrollToIndex = useCallback((i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    interacted.current = true;
    const item = el.querySelectorAll<HTMLElement>("[data-slide]")[i];
    if (item) {
      el.scrollTo({ left: item.offsetLeft, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="-mr-5 md:-mr-6">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-5 overflow-x-auto pb-1 pr-5 md:pr-6"
        style={{ cursor: "grab" }}
        onMouseDown={handleMouseDown}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onMouseMove={handleMouseMove}
        onClickCapture={handleClickCapture}
      >
        {images.map((img, i) => (
          <div key={i} data-slide className="shrink-0 flex flex-col gap-2">
            <ImageLightbox src={img} alt={`${title} ${i + 1}`} images={images} startIndex={i}>
              <div className="w-[75vw] md:w-[460px] overflow-hidden rounded-lg">
                <Image
                  src={img}
                  alt={`${title} ${i + 1}`}
                  width={1400}
                  height={1000}
                  quality={95}
                  className="w-full h-auto pointer-events-none"
                />
              </div>
            </ImageLightbox>
            {captions && captions[i] && (
              <p className="text-sm text-text-sub text-center leading-[24px] tracking-[0.01em]">
                {captions[i]}
              </p>
            )}
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center items-center gap-1.5 mt-3 mr-5 md:mr-6">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === active}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-4 bg-text-soft" : "w-1.5 bg-stroke-soft hover:bg-text-soft/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
