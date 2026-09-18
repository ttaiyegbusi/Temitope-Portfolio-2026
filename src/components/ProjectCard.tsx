"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  thumbnail?: string;
  video?: string;
}

export function ProjectCard({
  title,
  description,
  slug,
  thumbnail,
  video,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  function handleMouseEnter() {
    setVisible(true);
  }

  function handleMouseLeave() {
    setVisible(false);
  }

  return (
    <Link href={`/work/${slug}`} className="group flex flex-col gap-2.5">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative bg-bg-white aspect-square md:aspect-auto md:h-[300px] w-full rounded-lg overflow-hidden"
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
          <Image
            src={thumbnail}
            alt={title}
            width={390}
            height={300}
            className="w-full h-full object-cover"
          />
        )}
        <span
          className="pointer-events-none absolute whitespace-nowrap text-sm font-medium text-text-strong bg-bg-white border border-stroke-soft rounded-full px-5 py-2.5 shadow-sm transition-opacity duration-200 -translate-x-1/2 -translate-y-1/2 hidden md:block"
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
        <h3 className="text-base font-normal text-text-soft">{title}</h3>
        <p className="text-lg font-normal text-black">{description}</p>
      </div>
    </Link>
  );
}
