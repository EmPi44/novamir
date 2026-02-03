import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

interface RingParticlesCanvasProps {
  ringRadius?: number;
  ringThickness?: number;
  particleCount?: number;
  particleRows?: number;
  particleSize?: number;
  particleColor?: string;
  particleMinAlpha?: number;
  particleMaxAlpha?: number;
  seed?: number;
  className?: string;
}

export interface RingParticlesCanvasHandle {
  setPointerPosition: (x: number, y: number) => void;
  resetPointerPosition: () => void;
}

// Simple seeded PRNG (Lehmer / Park-Miller)
function createRNG(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function parseHexColor(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ];
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

interface Particle {
  angle: number;
  radialFraction: number;
  alpha: number;
}

export const RingParticlesCanvas = forwardRef<RingParticlesCanvasHandle, RingParticlesCanvasProps>(
  (
    {
      ringRadius = 100,
      ringThickness = 600,
      particleCount = 80,
      particleRows = 25,
      particleSize = 1.4,
      particleColor = '#121317',
      particleMinAlpha = 0.08,
      particleMaxAlpha = 0.8,
      seed = 200,
      className,
    },
    ref,
  ) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerTarget = useRef({ x: 50, y: 50 });
    const pointerCurrent = useRef({ x: 50, y: 50 });

    useImperativeHandle(ref, () => ({
      setPointerPosition(x: number, y: number) {
        pointerTarget.current = { x, y };
      },
      resetPointerPosition() {
        pointerTarget.current = { x: 50, y: 50 };
      },
    }));

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Check reduced motion preference
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      let reducedMotion = motionQuery.matches;
      const onMotionChange = (e: MediaQueryListEvent) => {
        reducedMotion = e.matches;
      };
      motionQuery.addEventListener('change', onMotionChange);

      // Generate particles once
      const rng = createRNG(seed);
      const particles: Particle[] = [];

      for (let row = 0; row < particleRows; row++) {
        const rowFraction = particleRows > 1 ? row / (particleRows - 1) : 0.5;
        const perRow = Math.ceil(particleCount / particleRows);
        for (let i = 0; i < perRow; i++) {
          const angle = rng() * Math.PI * 2;
          // Alpha: strongest at center of ring band, fading toward edges
          const distFromCenter = Math.abs(rowFraction - 0.5) * 2; // 0=center, 1=edge
          const alpha =
            particleMinAlpha +
            (particleMaxAlpha - particleMinAlpha) * (1 - distFromCenter * distFromCenter);
          particles.push({ angle, radialFraction: rowFraction, alpha });
        }
      }

      const [colorR, colorG, colorB] = parseHexColor(particleColor);

      // Canvas sizing
      let dpr = window.devicePixelRatio || 1;
      let width = 0;
      let height = 0;

      function resize() {
        if (!canvas) return;
        dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      const observer = new ResizeObserver(resize);
      observer.observe(canvas);
      resize();

      // Animation state
      let rafId: number;
      let startTime: number | null = null;
      let lastTime: number | null = null;

      // Reset pointer current to center
      pointerCurrent.current = { x: 50, y: 50 };

      function draw(timestamp: number) {
        if (!ctx) return;

        if (startTime === null) startTime = timestamp;
        const dt = lastTime !== null ? (timestamp - lastTime) / 1000 : 0.016;
        lastTime = timestamp;

        const elapsed = timestamp - startTime;

        // Lerp pointer position (exponential smoothing, ~1.2s CSS transition feel)
        const lerpFactor = 1 - Math.exp(-dt * 3);
        pointerCurrent.current.x +=
          (pointerTarget.current.x - pointerCurrent.current.x) * lerpFactor;
        pointerCurrent.current.y +=
          (pointerTarget.current.y - pointerCurrent.current.y) * lerpFactor;

        // Animation tick: 0→1 over 20s, repeating (drives particle rotation)
        const animationTick = reducedMotion ? 0 : (elapsed % 20000) / 20000;

        // Ring radius: oscillate between 150 and 250 over 40s (20s each direction)
        let currentRadius: number;
        if (reducedMotion) {
          currentRadius = ringRadius;
        } else {
          const radiusCycle = (elapsed % 40000) / 40000;
          const radiusT =
            radiusCycle < 0.5
              ? easeInOut(radiusCycle * 2)
              : easeInOut(1 - (radiusCycle - 0.5) * 2);
          currentRadius = 150 + 100 * radiusT;
        }

        // Canvas center from pointer position (percentage → pixels)
        const centerX = (pointerCurrent.current.x / 100) * width;
        const centerY = (pointerCurrent.current.y / 100) * height;

        // Clear and draw
        ctx.save();
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, width, height);

        for (const p of particles) {
          const adjustedAngle = p.angle + animationTick * Math.PI * 2;
          const radialOffset = p.radialFraction * ringThickness;
          const r = currentRadius + radialOffset;
          const x = centerX + Math.cos(adjustedAngle) * r;
          const y = centerY + Math.sin(adjustedAngle) * r;

          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = `rgb(${colorR},${colorG},${colorB})`;
          ctx.beginPath();
          ctx.arc(x, y, particleSize, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        if (!reducedMotion) {
          rafId = requestAnimationFrame(draw);
        }
      }

      rafId = requestAnimationFrame(draw);

      return () => {
        cancelAnimationFrame(rafId);
        observer.disconnect();
        motionQuery.removeEventListener('change', onMotionChange);
      };
    }, [
      ringRadius,
      ringThickness,
      particleCount,
      particleRows,
      particleSize,
      particleColor,
      particleMinAlpha,
      particleMaxAlpha,
      seed,
    ]);

    return (
      <canvas
        ref={canvasRef}
        className={className}
        style={{ pointerEvents: 'none' }}
      />
    );
  },
);

RingParticlesCanvas.displayName = 'RingParticlesCanvas';
