"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  depth: number;
  r: number;
  speed: number;
  phase: number;
  twinkle: number;
};

type ShootingStar = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
};

const TAU = Math.PI * 2;

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let stars: Star[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let last = performance.now();
    let t = 0;
    let shoot: ShootingStar | null = null;
    let shootTimer = 4 + Math.random() * 5;
    const pointer = { x: -1e4, y: -1e4 };

    const seed = () => {
      const count = Math.min(650, Math.round((w * h) / 4500));
      stars = Array.from({ length: count }, () => {
        const depth = 0.25 + Math.random() * 0.75;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          depth,
          r: depth * 1.25,
          speed: depth * 5,
          phase: Math.random() * TAU,
          twinkle: 0.4 + Math.random() * 1.4,
        };
      });
    };

    const drawFrame = (dt: number, animate: boolean) => {
      t += dt;
      ctx.clearRect(0, 0, w, h);

      const near: Star[] = [];
      for (const s of stars) {
        if (animate) {
          s.x -= s.speed * dt;
          if (s.x < -3) {
            s.x = w + 3;
            s.y = Math.random() * h;
          }
        }
        const alpha = animate
          ? (0.3 + 0.45 * (0.5 + 0.5 * Math.sin(t * s.twinkle + s.phase))) *
            s.depth
          : 0.55 * s.depth;
        ctx.fillStyle = `rgba(210,224,255,${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, TAU);
        ctx.fill();

        const dx = s.x - pointer.x;
        const dy = s.y - pointer.y;
        if (dx * dx + dy * dy < 130 * 130) near.push(s);
      }

      // constellation lines between stars near the cursor
      ctx.lineWidth = 0.7;
      for (let i = 0; i < near.length; i++) {
        for (let j = i + 1; j < near.length; j++) {
          const a = near[i];
          const b = near[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 95) {
            const alpha = 0.2 * (1 - d / 95);
            ctx.strokeStyle = `rgba(150,180,255,${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      if (!animate) return;

      shootTimer -= dt;
      if (shootTimer <= 0 && !shoot) {
        shoot = {
          x: w * (0.3 + Math.random() * 0.6),
          y: -10,
          vx: -(160 + Math.random() * 120),
          vy: 190 + Math.random() * 90,
          life: 1,
        };
        shootTimer = 6 + Math.random() * 8;
      }
      if (shoot) {
        shoot.x += shoot.vx * dt;
        shoot.y += shoot.vy * dt;
        shoot.life -= dt * 0.9;
        if (shoot.life > 0) {
          const grad = ctx.createLinearGradient(
            shoot.x,
            shoot.y,
            shoot.x - shoot.vx * 0.24,
            shoot.y - shoot.vy * 0.24,
          );
          grad.addColorStop(0, `rgba(240,246,255,${(0.85 * shoot.life).toFixed(3)})`);
          grad.addColorStop(1, "rgba(240,246,255,0)");
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(shoot.x, shoot.y);
          ctx.lineTo(shoot.x - shoot.vx * 0.24, shoot.y - shoot.vy * 0.24);
          ctx.stroke();
        } else {
          shoot = null;
        }
      }
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      // paint immediately so the sky is never blank before the first
      // animation frame (or ever, under prefers-reduced-motion)
      drawFrame(0, false);
    };

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      if (reduced) drawFrame(0, false);
    };

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      drawFrame(dt, true);
      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    if (!reduced) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_bottom,#080d1c,#111a33)]"
    />
  );
}
