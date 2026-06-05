"use client";
import { useEffect, useRef } from "react";

export function AuroraBackground({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.parentElement!.offsetWidth;
      canvas.height = canvas.parentElement!.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.002;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < 3; i++) {
        const hue = (time * 30 + i * 120) % 360;
        const x = w / 2 + Math.sin(time * 0.7 + i * 2) * w * 0.35;
        const y = h * 0.3 + Math.cos(time * 0.5 + i) * h * 0.25;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, Math.max(w, h) * 0.6);
        grad.addColorStop(0, `hsla(${hue}, 80%, 65%, 0.3)`);
        grad.addColorStop(0.5, `hsla(${hue + 60}, 70%, 55%, 0.1)`);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
