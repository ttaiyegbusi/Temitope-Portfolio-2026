"use client";

import { useEffect, useRef, useState } from "react";

const TARGET = "Temitope Aiyegbusi";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>{}[]~/\\|+=^";
const DURATION = 2800;
const CURSOR_CHAR = "▌";

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function playTick(ctx: AudioContext) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.frequency.value = 4000 + Math.random() * 2000;
  osc.type = "sine";
  gain.gain.setValueAtTime(0.03, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.04);
}

export function Preloader({ onFinish }: { onFinish: () => void }) {
  const [chars, setChars] = useState<string[]>(() =>
    TARGET.split("").map((ch) =>
      ch === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]
    )
  );
  const [cursorPos, setCursorPos] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "decoded" | "exiting">("loading");

  const frameRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const lockedRef = useRef<boolean[]>(TARGET.split("").map((ch) => ch === " "));
  const lastLockCount = useRef(0);
  const audioRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    try {
      audioRef.current = new AudioContext();
    } catch {}

    startRef.current = performance.now();

    function tick(now: number) {
      const elapsed = now - startRef.current;
      const rawT = Math.min(elapsed / DURATION, 1);
      const t = easeInOutCubic(rawT);

      setProgress(Math.round(t * 100));

      const targetChars = TARGET.split("");
      const lockCount = Math.floor(t * targetChars.length);
      const cursorIndex = Math.min(lockCount, targetChars.length - 1);

      if (lockCount > lastLockCount.current && audioRef.current) {
        for (let i = lastLockCount.current; i < lockCount; i++) {
          if (targetChars[i] !== " ") {
            playTick(audioRef.current);
          }
        }
        lastLockCount.current = lockCount;
      }

      for (let i = 0; i < targetChars.length; i++) {
        if (i < lockCount) lockedRef.current[i] = true;
      }

      const result = targetChars.map((ch, i) => {
        if (ch === " ") return " ";
        if (lockedRef.current[i]) return ch;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      });

      setChars(result);
      setCursorPos(rawT < 1 ? cursorIndex : -1);

      if (rawT < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setChars(TARGET.split(""));
        setProgress(100);
        setCursorPos(-1);
        setPhase("exiting");
        setTimeout(onFinish, 600);
      }
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frameRef.current);
      if (audioRef.current) audioRef.current.close();
    };
  }, [onFinish]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-bg)",
        opacity: phase === "exiting" ? 0 : 1,
        transform: phase === "exiting" ? "translateY(-3%) scale(1.02)" : "translateY(0) scale(1)",
        transition: phase === "exiting"
          ? "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
          : "none",
        pointerEvents: phase === "exiting" ? "none" : "auto",
      }}
    >
      {/* Film grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontFamily: "var(--font-sans), system-ui, sans-serif",
          fontSize: "clamp(16px, 2vw, 20px)",
          fontWeight: 400,
          color: "var(--color-text-strong)",
          letterSpacing: "0.01em",
          whiteSpace: "pre",
        }}
      >
        <span>{chars.join("")}</span>
        {cursorPos >= 0 && (
          <span
            style={{
              display: "inline-block",
              marginLeft: 1,
              color: "var(--color-text-strong)",
              opacity: 0.6,
              animation: "cursor-blink 0.6s steps(2) infinite",
              fontSize: "0.85em",
            }}
          >
            {CURSOR_CHAR}
          </span>
        )}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "clamp(24px, 4vh, 48px)",
          right: "clamp(24px, 4vw, 48px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono), ui-monospace, monospace",
            fontSize: 13,
            fontWeight: 400,
            color: "var(--color-text-soft)",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {progress}%
        </span>
        <div
          style={{
            width: "clamp(100px, 15vw, 160px)",
            height: 1,
            backgroundColor: "var(--color-stroke-soft)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: `${progress}%`,
              backgroundColor: "var(--color-text-strong)",
              transition: "width 0.15s ease-out",
            }}
          />
        </div>
      </div>
    </div>
  );
}
