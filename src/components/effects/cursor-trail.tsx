
'use client';

import { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  const trailsRef = useRef<Array<{ x: number; y: number; size: number; alpha: number; color: string }>>([]);

  useEffect(() => {
    const canvas = document.getElementById('cursor-trail-canvas') as HTMLCanvasElement | null;
    if (!canvas) {
        console.warn('Cursor trail canvas not found');
        return;
    }
    canvasRef.current = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasDimensions();

    const handleMouseMove = (e: MouseEvent) => {
      trailsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        size: 10, // Initial size
        alpha: 1, // Initial opacity
        color: Math.random() > 0.5 ? 'rgba(0, 188, 212, 0.5)' : 'rgba(26, 35, 126, 0.3)', // Teal and Deep Blue with transparency
      });
      if (trailsRef.current.length > 25) trailsRef.current.shift(); // Limit trail length
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animateTrail = () => {
      if (!canvasRef.current || !ctx) return;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      trailsRef.current.forEach((trail, index) => {
        ctx.beginPath();
        ctx.arc(trail.x, trail.y, trail.size, 0, Math.PI * 2);
        ctx.fillStyle = trail.color;
        ctx.globalAlpha = trail.alpha;
        ctx.fill();
        trail.size *= 0.94; // Shrink rate
        trail.alpha *= 0.93; // Fade rate
        if (trail.alpha < 0.05) { // Remove when almost invisible
          trailsRef.current.splice(index, 1);
        }
      });
      animationFrameIdRef.current = requestAnimationFrame(animateTrail);
    };
    animateTrail();

    const handleResize = () => {
      setCanvasDimensions();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      trailsRef.current = []; // Clear trails on unmount
    };
  }, []);

  return <canvas id="cursor-trail-canvas" className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]" />;
};

export default CursorTrail;
