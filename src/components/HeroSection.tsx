import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Lottie } from 'lottie-react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HERO_ROLES } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';
import { SplitTextReveal } from './SplitTextReveal';

interface HeroSectionProps {
  ready: boolean;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ ready, onNavigate }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 40, active: false });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
    }, 2800);
    return () => window.clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x: xPct, y: yPct, active: true });

    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x: normX * 22, y: normY * 22 });
  };

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({ ...prev, active: false }));
    setParallax({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-white pt-24 pb-8 text-black"
    >
      {/* Subtle architectural background grid */}
      <div
        aria-hidden="true"
        className="bg-architectural-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_35%,transparent_100%)]"
      />

      {/* Mouse-following subtle monochrome ambient aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: spotlight.active ? 1 : 0.45,
          background: `radial-gradient(640px circle at ${spotlight.x}% ${spotlight.y}%, rgba(0,0,0,0.045), transparent 60%)`,
        }}
      />

      {/* Main split hero container */}
      <div className="relative z-10 mx-auto my-auto grid w-full max-w-[1360px] grid-cols-1 items-center gap-12 px-6 py-12 sm:px-10 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:py-16">
        {/* Left editorial typography column */}
        <div className="lg:col-span-7">
          {/* Clean unboxed availability status indicator */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 flex flex-wrap items-center gap-3 text-xs tracking-wide text-neutral-600"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <rect
                x="5"
                y="0.7"
                width="6"
                height="6"
                transform="rotate(45 5 0.7)"
                stroke="#000000"
                strokeWidth="1.2"
              />
              <circle cx="5" cy="5" r="1.4" fill="#000000" />
            </svg>
            <span className="font-medium text-black">Available for select opportunities</span>
            <span aria-hidden="true" className="text-neutral-400">
              ·
            </span>
            <span className="text-neutral-500">India &amp; Remote</span>
          </motion.div>

          {/* Staggered main heading */}
          <SplitTextReveal
            text="Hi, I'm Kashi Chourey."
            as="h1"
            mode="words"
            delay={ready ? 0.1 : 0}
            stagger={0.075}
            className="font-display text-[clamp(2.65rem,6vw,5.4rem)] font-bold leading-[1.02] tracking-[-0.035em] text-black"
          />

          {/* Subheading + Rotating role showcase */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 space-y-3"
          >
            <p className="font-display text-base font-medium tracking-tight text-neutral-800 sm:text-lg">
              Software Engineer <span className="mx-2 text-neutral-300">|</span> Flutter Developer{' '}
              <span className="mx-2 text-neutral-300">|</span> Creative Problem Solver
            </p>

            {/* Rotating focused craft line */}
            <div className="flex items-center gap-3 text-sm text-neutral-600">
              <span className="h-[1px] w-7 bg-black/40" aria-hidden="true" />
              <span className="text-neutral-500">Currently crafting as</span>
              <div className="relative h-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={HERO_ROLES[roleIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                    className="block font-mono text-sm font-medium text-black"
                  >
                    {HERO_ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-[58ch] text-base leading-relaxed text-neutral-600 sm:text-lg"
          >
            I build digital products, scalable applications, and meaningful web experiences that
            combine technology with thoughtful design.
          </motion.p>

          {/* Primary & secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              onClick={() => onNavigate('projects')}
              cursorLabel="Explore"
              className="group inline-flex items-center gap-3 bg-black px-7 py-4 font-display text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <span>Explore My Work</span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </MagneticButton>

            <MagneticButton
              onClick={() => onNavigate('contact')}
              cursorLabel="Connect"
              className="group inline-flex items-center gap-3 border border-black/25 bg-transparent px-7 py-4 font-display text-sm font-medium text-black whitespace-nowrap shrink-0 transition-colors duration-200 hover:border-black hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <span>Let&apos;s Connect</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right visual focal column — Architectural Profile Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="relative flex items-center justify-center lg:col-span-5"
        >
          {/* Refined shadow pedestal that breathes with the levitation */}
          <motion.div
            aria-hidden="true"
            animate={{
              scale: [0.85, 1, 0.85],
              opacity: [0.35, 0.6, 0.35],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="pointer-events-none absolute -bottom-6 h-8 w-3/4 rounded-full bg-black/15 blur-xl"
          />

          <div
            className="group relative flex aspect-[4/5] w-full max-w-[380px] overflow-hidden border border-black/15 bg-white p-3 shadow-xl transition-all duration-500 hover:border-black/40 hover:shadow-2xl"
            style={{
              transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0) rotateX(${-parallax.y * 0.4}deg) rotateY(${parallax.x * 0.4}deg)`,
              transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Corner architectural registration marks */}
            <span aria-hidden="true" className="absolute left-2.5 top-2.5 z-20 h-3 w-3 border-l-2 border-t-2 border-black/60 transition-transform duration-300 group-hover:scale-110" />
            <span aria-hidden="true" className="absolute right-2.5 top-2.5 z-20 h-3 w-3 border-r-2 border-t-2 border-black/60 transition-transform duration-300 group-hover:scale-110" />
            <span aria-hidden="true" className="absolute bottom-2.5 left-2.5 z-20 h-3 w-3 border-b-2 border-l-2 border-black/60 transition-transform duration-300 group-hover:scale-110" />
            <span aria-hidden="true" className="absolute bottom-2.5 right-2.5 z-20 h-3 w-3 border-b-2 border-r-2 border-black/60 transition-transform duration-300 group-hover:scale-110" />

            <div className="relative h-full w-full overflow-hidden rounded-[2px] border border-black/10 bg-neutral-900">
              <img
                src="/src/assets/images/profile_kashi_chourey.jpg"
                alt="Kashi Chourey — Software Engineer & Flutter Developer"
                className="h-full w-full object-cover object-top contrast-[1.05] saturate-[1.08] transition-all duration-700 ease-out group-hover:scale-[1.04]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-75"
              />

              <div className="absolute top-3 left-3 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/65 px-3 py-1 font-mono text-[10px] text-white backdrop-blur-md shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-medium tracking-wide">Active Studio Setup</span>
              </div>

              {/* Quiet monochrome caption at frame bottom */}
              <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between font-mono text-[11px] text-white">
                <span className="font-semibold tracking-wide">Workstation &amp; Craft</span>
                <span className="text-white/80 tabular">Indore · Worldwide</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom full-width editorial rail with animated scroll indicator */}
      <div className="relative z-10 mx-auto w-full max-w-[1360px] border-t border-black/10 px-6 pt-6 sm:px-10 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500">
            <span>Flutter &amp; Dart</span>
            <span aria-hidden="true">·</span>
            <span>React &amp; TypeScript</span>
            <span aria-hidden="true">·</span>
            <span>Node.js &amp; REST Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Product Design Craft</span>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('about')}
            className="group inline-flex items-center gap-3 text-xs text-neutral-600 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black"
          >
            <span>Scroll to explore</span>
            <span className="relative flex h-8 w-[1px] overflow-hidden bg-black/15" aria-hidden="true">
              <span className="animate-scroll-line block h-full w-full bg-black" />
            </span>
            <ArrowDown
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
