import { useEffect, useState, useCallback, useRef } from "react";

interface ParallaxConfig {
  offset?: number;
  dampening?: number;
  maxOffset?: number;
}

export const useParallax = (config: ParallaxConfig = {}) => {
  const { offset = 0, dampening = 0.04, maxOffset = 50 } = config;
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number>();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      
      rafRef.current = requestAnimationFrame(() => {
        const currentY = window.scrollY;
        // Smooth interpolation
        lastScrollY.current += (currentY - lastScrollY.current) * 0.15;
        setScrollY(lastScrollY.current);
        rafRef.current = undefined;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const smoothParallax = useCallback(
    (factor: number) => {
      const adjusted = Math.max(0, scrollY - offset);
      return Math.tanh(adjusted * dampening * factor) * maxOffset;
    },
    [scrollY, offset, dampening, maxOffset]
  );

  const getParallaxStyle = useCallback(
    (
      xFactor: number,
      yFactor: number,
      rotationFactor: number = 0,
      scaleFactor: number = 0
    ) => {
      const x = smoothParallax(xFactor);
      const y = smoothParallax(yFactor);
      const adjusted = Math.max(0, scrollY - offset);
      const rotation = Math.tanh(adjusted * 0.0015) * rotationFactor * 8;
      const scale = 1 + Math.tanh(adjusted * 0.0008) * scaleFactor * 0.08;

      return {
        transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg) scale(${scale})`,
        transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      };
    },
    [smoothParallax, scrollY, offset]
  );

  const getContentParallax = useCallback(
    (factor: number = 0.03) => {
      const y = scrollY * factor;
      return {
        transform: `translateY(${y}px)`,
        transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      };
    },
    [scrollY]
  );

  return {
    scrollY,
    smoothParallax,
    getParallaxStyle,
    getContentParallax,
  };
};

export default useParallax;
