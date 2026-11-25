import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDone(true);
      onComplete();
      return;
    }

    const duration = 900;
    const start = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const raw = Math.min(1, elapsed / duration);
      // Smooth easeOutExpo curve
      const eased = raw === 1 ? 1 : 1 - Math.pow(2, -10 * raw);
      setCount(Math.round(eased * 100));

      if (raw < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          onComplete();
        }, 160);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-white px-6 py-8 sm:px-12 sm:py-10"
          aria-label="Loading portfolio"
        >
          <div className="flex items-center justify-between text-xs text-neutral-500">
            <div className="flex items-center gap-2.5">
              <img
                src="/src/assets/images/kashi_logo.png"
                alt="KC Logo"
                className="h-6 w-auto mix-blend-multiply object-contain"
              />
              <span className="font-display font-semibold tracking-tight text-black">Kashi Chourey</span>
            </div>
            <span className="font-mono tabular">Portfolio</span>
          </div>

          <div className="my-auto">
            <div className="mb-5 flex items-end justify-between">
              <span className="font-display text-sm text-neutral-500">Crafting digital precision</span>
              <span className="font-mono text-5xl font-medium tracking-tighter text-black tabular sm:text-7xl">
                {String(count).padStart(2, '0')}
              </span>
            </div>
            <div className="h-[1px] w-full overflow-hidden bg-black/10">
              <div
                className="h-full origin-left bg-black transition-transform duration-75"
                style={{ transform: `scaleX(${count / 100})` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-neutral-500">
            <span>Software Engineer · Flutter Developer</span>
            <button
              type="button"
              onClick={() => {
                setDone(true);
                onComplete();
              }}
              className="editorial-underline text-neutral-600 hover:text-black"
            >
              Skip
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
