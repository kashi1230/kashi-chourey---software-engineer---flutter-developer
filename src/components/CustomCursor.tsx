import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [cursorMode, setCursorMode] = useState<'default' | 'hover' | 'label'>('default');
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReduced) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest('[data-cursor], a, button, input, textarea') as HTMLElement | null;

      if (interactive) {
        const label = interactive.getAttribute('data-cursor');
        if (label && label !== 'hover') {
          setCursorMode('label');
          setCursorText(label);
        } else {
          setCursorMode('hover');
          setCursorText('');
        }
      } else {
        setCursorMode('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const animate = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-white mix-blend-difference transition-opacity duration-200 ${
          visible && cursorMode !== 'label' ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: cursorMode === 'hover' ? '6px' : '5px',
          height: cursorMode === 'hover' ? '6px' : '5px',
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[9998] flex items-center justify-center rounded-full border transition-[width,height,background-color,border-color,opacity] duration-200 ease-out ${
          visible ? 'opacity-100' : 'opacity-0'
        } ${
          cursorMode === 'label'
            ? 'h-20 w-20 border-black bg-black text-white shadow-sm'
            : cursorMode === 'hover'
              ? 'h-11 w-11 border-white/80 bg-white/10 mix-blend-difference'
              : 'h-7 w-7 border-white/55 bg-transparent mix-blend-difference'
        }`}
      >
        {cursorMode === 'label' && (
          <span className="font-display text-[11px] font-semibold tracking-wide text-white">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};
