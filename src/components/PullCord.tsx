"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const CORD_REST_Y = 48;
const PULL_THRESHOLD = 65;
const HANDLE_SIZE = 28;

function playSound(type: "pull" | "snap") {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === "pull") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.08);
    } else {
      osc.type = "sine";
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.12);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(1200, ctx.currentTime + 0.03);
      osc2.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.1);
      gain2.gain.setValueAtTime(0.04, ctx.currentTime + 0.03);
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc2.start(ctx.currentTime + 0.03);
      osc2.stop(ctx.currentTime + 0.15);
    }

    setTimeout(() => ctx.close(), 300);
  } catch {}
}

export function PullCord() {
  const { toggle } = useTheme();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animFrame = useRef(0);
  const dragging = useRef(false);
  const cooldown = useRef(false);
  const triggered = useRef(false);
  const pullSoundPlayed = useRef(false);

  const pos = useRef({ x: 0, y: CORD_REST_Y });
  const vel = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: CORD_REST_Y });
  const hasMoved = useRef(false);

  const [rp, setRp] = useState({ x: 0, y: CORD_REST_Y });
  const [isDragging, setIsDragging] = useState(false);
  const [pastThreshold, setPastThreshold] = useState(false);

  const animate = useCallback(() => {
    const p = pos.current;
    const v = vel.current;
    const t = targetPos.current;

    if (dragging.current) {
      // While dragging: lerp toward target for fluid, responsive feel
      const lerp = 0.35;
      p.x += (t.x - p.x) * lerp;
      p.y += (t.y - p.y) * lerp;
      v.x = (t.x - p.x) * lerp;
      v.y = (t.y - p.y) * lerp;
    } else {
      // Spring physics for snap-back with overshoot
      const stiffness = 0.08;
      const damping = 0.82;

      const dx = t.x - p.x;
      const dy = t.y - p.y;

      v.x = (v.x + dx * stiffness) * damping;
      v.y = (v.y + dy * stiffness) * damping;

      p.x += v.x;
      p.y += v.y;
    }

    setRp({ x: p.x, y: p.y });

    const dx = targetPos.current.x - p.x;
    const dy = targetPos.current.y - p.y;
    const speed = Math.sqrt(v.x * v.x + v.y * v.y);
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (speed > 0.05 || dist > 0.3 || dragging.current) {
      animFrame.current = requestAnimationFrame(animate);
    } else {
      p.x = t.x;
      p.y = t.y;
      v.x = 0;
      v.y = 0;
      setRp({ x: t.x, y: t.y });
    }
  }, []);

  const startAnim = useCallback(() => {
    cancelAnimationFrame(animFrame.current);
    animFrame.current = requestAnimationFrame(animate);
  }, [animate]);

  useEffect(() => {
    return () => cancelAnimationFrame(animFrame.current);
  }, []);

  const anchorRef = useRef({ x: 0, y: 0 });

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (cooldown.current) return;
      e.preventDefault();
      (e.target as HTMLElement).setPointerCapture(e.pointerId);

      const wrapper = wrapperRef.current;
      if (wrapper) {
        const rect = wrapper.getBoundingClientRect();
        anchorRef.current = {
          x: rect.left + rect.width / 2,
          y: rect.top,
        };
      }

      dragging.current = true;
      triggered.current = false;
      pullSoundPlayed.current = false;
      hasMoved.current = false;
      setIsDragging(true);
      setPastThreshold(false);
      startAnim();
    },
    [startAnim]
  );

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;

    const anchor = anchorRef.current;
    const dx = e.clientX - anchor.x;
    const dy = Math.max(CORD_REST_Y * 0.4, e.clientY - anchor.y);

    targetPos.current = { x: dx, y: dy };

    const pullDist = Math.sqrt(
      dx * dx + (dy - CORD_REST_Y) * (dy - CORD_REST_Y)
    );

    if (pullDist > 5) hasMoved.current = true;

    const past = pullDist >= PULL_THRESHOLD;
    setPastThreshold(past);

    if (past && !triggered.current) {
      triggered.current = true;
    }

    if (pullDist > 20 && !pullSoundPlayed.current) {
      pullSoundPlayed.current = true;
      playSound("pull");
    }
  }, []);

  const onPointerUp = useCallback(() => {
    if (!dragging.current) return;
    dragging.current = false;
    setIsDragging(false);
    setPastThreshold(false);

    targetPos.current = { x: 0, y: CORD_REST_Y };

    if (triggered.current || !hasMoved.current) {
      cooldown.current = true;
      playSound("snap");
      if (hasMoved.current) {
        vel.current.x += (0 - pos.current.x) * 0.2;
        vel.current.y += (CORD_REST_Y - pos.current.y) * 0.2;
      } else {
        // Tap: simulate a quick pull-and-snap
        pos.current = { x: 0, y: CORD_REST_Y + 40 };
        vel.current = { x: 0, y: -8 };
      }
      setTimeout(() => toggle(), 80);
      setTimeout(() => {
        cooldown.current = false;
      }, 500);
    }

    startAnim();
  }, [toggle, startAnim]);

  useEffect(() => {
    const handler = () => {
      if (dragging.current) {
        dragging.current = false;
        setIsDragging(false);
        setPastThreshold(false);
        targetPos.current = { x: 0, y: CORD_REST_Y };
        startAnim();
      }
    };
    window.addEventListener("pointercancel", handler);
    return () => window.removeEventListener("pointercancel", handler);
  }, [startAnim]);

  const hx = rp.x;
  const hy = rp.y;

  // Bezier control point: creates a natural sag/curve
  const sag = Math.sqrt(hx * hx + (hy - CORD_REST_Y) * (hy - CORD_REST_Y)) * 0.15;
  const cpX = hx * 0.55;
  const cpY = hy * 0.35 + sag;

  const svgW = 240;
  const svgH = 220;
  const ox = svgW / 2;

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "fixed",
        top: 0,
        right: "clamp(24px, 5vw, 60px)",
        zIndex: 100,
        pointerEvents: "none",
        userSelect: "none",
        width: svgW,
        height: svgH,
        marginRight: -(svgW / 2) + HANDLE_SIZE / 2,
      }}
    >
      <svg
        width={svgW}
        height={svgH}
        style={{ overflow: "visible", position: "absolute", top: 0, left: 0 }}
      >
        <path
          d={`M ${ox},0 Q ${ox + cpX},${cpY} ${ox + hx},${hy}`}
          fill="none"
          stroke="var(--color-text-soft)"
          strokeWidth="1.5"
          opacity={pastThreshold ? 0.7 : 0.35}
          strokeLinecap="round"
        />
      </svg>

      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        role="button"
        tabIndex={0}
        aria-label="Pull to toggle light/dark mode"
        style={{
          position: "absolute",
          left: ox + hx - HANDLE_SIZE / 2,
          top: hy,
          pointerEvents: "auto",
          cursor: isDragging ? "grabbing" : "grab",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: HANDLE_SIZE,
          height: HANDLE_SIZE,
          borderRadius: "50%",
          border: `1.5px solid ${pastThreshold ? "var(--color-text-sub)" : "var(--color-stroke-soft)"}`,
          backgroundColor: "var(--color-bg-white)",
          color: pastThreshold ? "var(--color-text-sub)" : "var(--color-text-soft)",
          boxShadow: pastThreshold
            ? "0 4px 16px rgba(0,0,0,0.12)"
            : "0 2px 8px rgba(0,0,0,0.06)",
          transition: "border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
          touchAction: "none",
          willChange: "transform",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </div>
    </div>
  );
}
