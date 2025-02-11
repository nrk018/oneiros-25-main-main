"use client";

import type React from "react";
import { useRef, useEffect, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

interface ParticleSystemProps {
  isRevealed: boolean;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ isRevealed }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  const createParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const particleCount = 200; // Reduced particle count for better performance
    const particles: Particle[] = [];

    const colors = ["#ffffff", "#eeeeee", "#cccccc", "#dddddd"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5, // Adjusted size range
        speedX: (Math.random() - 0.5) * 0.3, // Slightly reduced speed
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1, // Adjusted opacity range
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    particlesRef.current = particles;
  }, []);

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

      ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
      ctx.fill();

      // Interactive behavior: particles are gently attracted to the mouse position
      const dx = mousePositionRef.current.x - particle.x;
      const dy = mousePositionRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        // Increased interaction radius
        particle.x += dx * 0.005; // Reduced attraction strength for smoother movement
        particle.y += dy * 0.005;
      } else {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
      }

      // Wrap around screen edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Animate opacity
      if (isRevealed) {
        particle.opacity += (Math.random() - 0.5) * 0.01; // Reduced opacity change for subtler effect
        particle.opacity = Math.max(0.1, Math.min(0.5, particle.opacity)); // Adjusted opacity range
      }
    });

    animationFrameIdRef.current = requestAnimationFrame(drawParticles);
  }, [isRevealed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      createParticles();
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePositionRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [createParticles, drawParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        width: "100%",
        height: "100%",
        zIndex: 15,
      }}
    />
  );
};

export default ParticleSystem;
