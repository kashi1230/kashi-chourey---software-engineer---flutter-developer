import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { SplitTextReveal } from './SplitTextReveal';

export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 75%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  const scaleY = smoothProgress;
  const beaconTop = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative border-t border-black/10 bg-white py-24 text-black sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-black/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-mono text-xs text-neutral-500 tabular">
              04 · Experience &amp; Education
            </p>
            <SplitTextReveal
              text="Path of Craft."
              as="h2"
              mode="words"
              triggerOnView
              className="font-display text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl"
            />
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-600">
            Professional software engineering roles, independent product builds, and computer science foundations.
          </p>
        </div>

        {/* Architectural vertical timeline with Spring-reactive Ink Spine */}
        <div ref={timelineRef} className="relative pl-12 sm:pl-16 lg:pl-20">
          {/* Background track + active spring spine + precision beacon */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-6 left-3 top-6 w-[2px] sm:left-5"
          >
            {/* Background architectural hairline */}
            <div className="absolute inset-y-0 left-0 w-[2px] bg-neutral-200" />

            {/* Smooth spring-drawn carbon spine */}
            <motion.div
              style={{ scaleY, transformOrigin: 'top' }}
              className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-black via-neutral-900 to-black"
            />

            {/* Precision stylus beacon sliding at the exact drawing tip */}
            <motion.div
              style={{ top: beaconTop }}
              className="absolute -left-[5px] -top-1.5 flex h-3.5 w-3.5 items-center justify-center -translate-y-1/2"
            >
              <span className="absolute h-4 w-4 rounded-full bg-black/15 animate-ping" />
              <span className="relative flex h-2.5 w-2.5 items-center justify-center rounded-full border border-black bg-white shadow-xs">
                <span className="h-1 w-1 rounded-full bg-black" />
              </span>
            </motion.div>
          </div>

          <div className="divide-y divide-black/10">
            {EXPERIENCES.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative py-10 first:pt-2 last:pb-2 sm:py-12"
              >
                {/* Architectural index dial node on the spine */}
                <div
                  aria-hidden="true"
                  className="absolute -left-[35px] top-11 flex h-7 w-7 items-center justify-center rounded-full border border-black/20 bg-white font-mono text-[10px] font-semibold text-neutral-600 shadow-xs transition-all duration-300 group-hover:scale-115 group-hover:border-black group-hover:bg-black group-hover:text-white group-hover:shadow-md sm:-left-[47px] sm:top-13"
                >
                  <span className="relative z-10">0{idx + 1}</span>
                  <span className="absolute inset-0 rounded-full bg-black/10 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
                  {/* Left date & org metadata */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-2.5 font-mono text-xs text-neutral-500 tabular">
                      <span className="font-medium text-black">{item.period}</span>
                      <span aria-hidden="true" className="text-neutral-300">
                        ·
                      </span>
                      <span>{item.type}</span>
                    </div>

                    <div className="mt-3 flex items-start gap-3.5">
                      {item.logo && (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-black/10 bg-white p-1.5 shadow-xs">
                          <img
                            src={item.logo}
                            alt={`${item.organization} logo`}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="font-display text-xl font-bold tracking-tight text-black sm:text-2xl">
                          {item.role}
                        </h3>
                        {item.websiteUrl ? (
                          <a
                            href={item.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/org mt-1 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-neutral-700 transition-colors hover:text-black"
                          >
                            <span>{item.organization}</span>
                            <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 transition-transform duration-200 group-hover/org:-translate-y-0.5 group-hover/org:translate-x-0.5 group-hover/org:text-black" />
                          </a>
                        ) : (
                          <p className="mt-1 font-display text-sm font-medium text-neutral-600">
                            {item.organization}
                          </p>
                        )}
                      </div>
                    </div>

                    {item.location && (
                      <p className="mt-2.5 font-mono text-xs text-neutral-400">
                        {item.location}
                      </p>
                    )}

                    {item.websiteUrl && (
                      <div className="mt-3.5 flex flex-wrap items-center gap-2">
                        <a
                          href={item.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-neutral-50 px-3 py-1 font-mono text-[11px] font-medium text-neutral-700 transition-colors hover:border-black hover:bg-black hover:text-white"
                        >
                          <span>Visit Website</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Right narrative & key impact bullets */}
                  <div className="space-y-5 lg:col-span-8">
                    <p className="max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
                      {item.summary}
                    </p>

                    <ul className="space-y-2.5 pt-1">
                      {item.deliverables.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-relaxed text-neutral-600"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-[1px] w-3.5 shrink-0 bg-neutral-400 transition-colors duration-200 group-hover:bg-black"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
