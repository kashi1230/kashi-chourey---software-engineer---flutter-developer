import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATEMENT_WORDS = [
  'Good',
  'software',
  "doesn't",
  'just',
  'work.',
  'It',
  'creates',
  'experiences.',
];

const PRINCIPLES = [
  {
    index: '01',
    title: 'Clarity First',
    text: 'Strip away decorative noise until every pixel and line of code earns its place.',
  },
  {
    index: '02',
    title: 'Built to Scale',
    text: 'Pair clean modular architectures with predictable state so products evolve cleanly.',
  },
  {
    index: '03',
    title: 'Intentional Motion',
    text: 'Use micro-interactions to communicate state, establish hierarchy, and feel tactile.',
  },
];

export const PhilosophySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const parallaxStripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Scrubbed word luminance reveal from subtle grey to pure crisp black
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.philosophy-word');
        gsap.fromTo(
          words,
          { opacity: 0.16, y: 14 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 72%',
              end: 'center 48%',
              scrub: 0.5,
            },
          }
        );
      }

      // Subtle vertical parallax on the lower principles row
      if (parallaxStripRef.current) {
        gsap.fromTo(
          parallaxStripRef.current,
          { y: 24 },
          {
            y: -16,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-white/10 bg-black py-28 text-white sm:py-36 lg:py-44"
    >
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-12">
        <div className="mb-10 flex items-center justify-between border-b border-white/15 pb-6">
          <p className="font-mono text-xs text-neutral-400 tabular">
            05 · Development Philosophy
          </p>
          <span className="font-mono text-xs text-neutral-500">Craft &amp; Intention</span>
        </div>

        {/* Oversized bold editorial statement */}
        <h2
          ref={headlineRef}
          className="max-w-5xl font-display text-[clamp(2.5rem,6.5vw,6.2rem)] font-bold leading-[1.03] tracking-[-0.035em] text-white"
        >
          {STATEMENT_WORDS.map((word, idx) => (
            <span
              key={`${word}-${idx}`}
              className="philosophy-word mr-[0.25em] inline-block will-change-transform"
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Subtle parallax editorial principles strip */}
        <div
          ref={parallaxStripRef}
          className="mt-20 grid grid-cols-1 gap-8 border-t border-white/15 pt-10 md:grid-cols-3 lg:gap-12"
        >
          {PRINCIPLES.map((principle) => (
            <div key={principle.index} className="space-y-2.5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-neutral-500 tabular">
                  {principle.index}
                </span>
                <h3 className="font-display text-base font-semibold text-white">
                  {principle.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-neutral-400">{principle.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
