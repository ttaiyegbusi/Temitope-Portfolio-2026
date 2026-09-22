"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  thumbnail?: string;
  mobileThumbnail?: string;
  video?: string;
  tags?: string[];
  index?: number;
  ready?: boolean;
  tilt?: boolean;
}

const MAX_TILT = 7; // degrees

export function ProjectCard({
  title,
  description,
  slug,
  thumbnail,
  mobileThumbnail,
  video,
  tags,
  index = 0,
  ready = true,
  tilt = false,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [rot, setRot] = useState({ rx: 0, ry: 0 });

  // --- One-by-one reveal on scroll ---
  const rootRef = useRef<HTMLAnchorElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const el = rootRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ready]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });
    if (tilt) {
      const px = x / rect.width - 0.5; // -0.5 .. 0.5
      const py = y / rect.height - 0.5;
      setRot({ rx: -py * MAX_TILT * 2, ry: px * MAX_TILT * 2 });
    }
  }

  function handleMouseEnter() {
    setVisible(true);
  }

  function handleMouseLeave() {
    setVisible(false);
    setRot({ rx: 0, ry: 0 });
  }

  return (
    <Link
      ref={rootRef}
      href={`/work/${slug}`}
      className={`group flex flex-col gap-2.5 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform] ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: revealed ? `${(index % 4) * 100}ms` : "0ms" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative bg-bg-white h-[290px] md:h-[300px] w-full rounded-lg overflow-hidden ${
          tilt ? "transition-transform duration-200 ease-out will-change-transform" : ""
        }`}
        style={
          tilt
            ? {
                transform: `perspective(900px) rotateX(${rot.rx}deg) rotateY(${rot.ry}deg)`,
                transformStyle: "preserve-3d",
              }
            : undefined
        }
      >
        {video && (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        )}
        {thumbnail && !video && (
          <>
            {mobileThumbnail && (
              <Image
                src={mobileThumbnail}
                alt={title}
                width={1050}
                height={810}
                quality={82}
                className="w-full h-full object-cover md:hidden"
              />
            )}
            <Image
              src={thumbnail}
              alt={title}
              width={800}
              height={600}
              quality={82}
              className={`w-full h-full object-cover ${mobileThumbnail ? "hidden md:block" : ""} ${
                tilt
                  ? `transition-transform duration-300 ease-out ${
                      visible ? "scale-[1.06]" : "scale-100"
                    }`
                  : ""
              }`}
            />
          </>
        )}
        <span
          className="pointer-events-none absolute whitespace-nowrap text-xs font-normal tracking-[0.01em] text-text-strong bg-bg-white rounded-md px-1.5 py-0.5 transition-opacity duration-200 -translate-x-1/2 -translate-y-1/2 hidden md:block"
          style={{
            left: pos.x,
            top: pos.y,
            opacity: visible ? 1 : 0,
          }}
        >
          View project
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5 text-sm font-normal text-text-soft">
          <span>{title}</span>
          {tags?.map((tag, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-text-soft inline-block" />
              <span>{tag}</span>
            </span>
          ))}
        </div>
        <p className="text-sm md:text-base font-normal text-black leading-snug">{description}</p>
      </div>
    </Link>
  );
}
