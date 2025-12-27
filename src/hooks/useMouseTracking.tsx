import { useState, useEffect, useCallback, RefObject } from 'react';

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

export const useMouseTracking = (containerRef?: RefObject<HTMLElement>) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  const updatePosition = useCallback((e: MouseEvent) => {
    if (containerRef?.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({
        x,
        y,
        normalizedX: (x / rect.width - 0.5) * 2,
        normalizedY: (y / rect.height - 0.5) * 2,
      });
    } else {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
        normalizedX: (e.clientX / window.innerWidth - 0.5) * 2,
        normalizedY: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    }
  }, [containerRef]);

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, [updatePosition]);

  return mousePosition;
};

export const useParallax = (strength: number = 20) => {
  const mouse = useMouseTracking();
  
  return {
    x: mouse.normalizedX * strength,
    y: mouse.normalizedY * strength,
  };
};
