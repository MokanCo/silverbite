"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; cyan: boolean };

export function NeuralField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !parent || !ctx) return;

    const nodes: Node[] = Array.from({ length: 34 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00012,
      vy: (Math.random() - 0.5) * 0.00012,
      cyan: Math.random() > 0.84,
    }));

    let visible = true;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
    };

    const draw = () => {
      if (!visible || document.hidden) return;
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0.02 || node.x > 0.98) node.vx *= -1;
        if (node.y < 0.02 || node.y > 0.98) node.vy *= -1;
      }
      const reach = Math.min(width, height) * 0.2;
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = (a.x - b.x) * width;
          const dy = (a.y - b.y) * height;
          const distance = Math.hypot(dx, dy);
          if (distance > reach) continue;
          const alpha = (1 - distance / reach) * 0.22;
          ctx.strokeStyle = `rgba(199,205,214,${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x * width, a.y * height);
          ctx.lineTo(b.x * width, b.y * height);
          ctx.stroke();
        }
      }
      for (const node of nodes) {
        ctx.beginPath();
        ctx.fillStyle = node.cyan ? "rgba(0,213,255,0.8)" : "rgba(244,246,248,0.72)";
        ctx.arc(node.x * width, node.y * height, node.cyan ? 2.4 : 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let raf = 0;
    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(parent);
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    visibility.observe(canvas);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      visibility.disconnect();
    };
  }, [reduce]);

  if (reduce) return null;

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden />;
}
