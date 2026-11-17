"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; cyan: boolean };

export function HeroField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const nodes: Node[] = Array.from({ length: 36 }, (_, index) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00016,
      vy: (Math.random() - 0.5) * 0.00016,
      cyan: index % 7 === 0,
    }));

    let frame = 0;
    let visible = true;
    let stopped = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, canvas.clientWidth * dpr);
      canvas.height = Math.max(1, canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);
      if (!reduce) {
        for (const node of nodes) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0.02 || node.x > 0.98) node.vx *= -1;
          if (node.y < 0.02 || node.y > 0.98) node.vy *= -1;
        }
      }
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = (nodes[i].x - nodes[j].x) * width;
          const dy = (nodes[i].y - nodes[j].y) * height;
          const distance = Math.hypot(dx, dy);
          if (distance > 128) continue;
          const alpha = (1 - distance / 128) * 0.28;
          ctx.strokeStyle = `rgba(199,205,214,${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x * width, nodes[i].y * height);
          ctx.lineTo(nodes[j].x * width, nodes[j].y * height);
          ctx.stroke();
        }
      }
      for (const node of nodes) {
        ctx.fillStyle = node.cyan ? "rgba(0,213,255,0.85)" : "rgba(199,205,214,0.75)";
        ctx.beginPath();
        ctx.arc(node.x * width, node.y * height, node.cyan ? 1.7 : 1.15, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = () => {
      if (stopped) return;
      if (visible && !document.hidden) draw();
      frame = window.requestAnimationFrame(tick);
    };

    resize();
    draw();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    const seen = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    seen.observe(canvas);
    if (!reduce) frame = window.requestAnimationFrame(tick);

    return () => {
      stopped = true;
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      seen.disconnect();
    };
  }, [reduce]);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden />;
}
