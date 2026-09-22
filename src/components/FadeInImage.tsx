"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

/**
 * Next/Image with a pulsing skeleton behind it that fades out once the image
 * loads. The parent element must be `position: relative`.
 */
export function FadeInImage({ className = "", ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-stroke-soft/50" />
      )}
      <Image
        {...props}
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
