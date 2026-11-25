import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Check, ExternalLink, Play, X } from 'lucide-react';
import { SiGoogleplay } from 'react-icons/si';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';
import { SplitTextReveal } from './SplitTextReveal';

gsap.registerPlugin(ScrollTrigger);

interface ProjectsSectionProps {
  onNavigateContact: () => void;
}

const ProjectImageFrame: React.FC<{
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}> = ({ project, onSelect }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      data-cursor="View Case"
      aria-label={`Inspect ${project.name} case study`}
      className="project-media-reveal group relative block aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden border border-black/15 bg-neutral-100 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
    >
      {project.id === 'share0wheels' && project.screenshot ? (
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-[#072422] via-[#0B302D] to-[#041413] p-4 sm:p-8 text-white sm:flex-row sm:items-center">
          {/* Subtle grid texture overlay */}
          <div className="pointer-events-none absolute inset-0 bg-architectural-grid opacity-15" />

          {/* Left/Top info badge with official logo */}
          <div className="relative z-10 flex w-full flex-row items-center justify-between gap-3 sm:max-w-[54%] sm:flex-col sm:items-start sm:justify-start sm:space-y-3">
            <div className="flex items-center gap-2.5 sm:gap-3">
              {project.logo && (
                <img
                  src={project.logo}
                  alt={`${project.name} Logo`}
                  className="h-9 w-9 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl border border-white/20 bg-white p-1 sm:p-1.5 shadow-md object-contain shrink-0"
                />
              )}
              <div>
                <span className="font-display text-base sm:text-xl font-bold tracking-tight text-white">
                  {project.name}
                </span>
                <span className="block font-mono text-[9px] sm:text-[10px] text-emerald-400">
                  Google Play Verified
                </span>
              </div>
            </div>

            <p className="hidden sm:block text-xs leading-relaxed text-neutral-300 line-clamp-2 sm:line-clamp-3">
              {project.description}
            </p>

            <div className="flex items-center gap-2 pt-0 sm:pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 sm:px-3 py-1 font-mono text-[9px] sm:text-[10px] text-emerald-300 backdrop-blur-xs">
                <SiGoogleplay className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-400" />
                <span>Play Store App</span>
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] text-neutral-400">
                Flutter · 60fps
              </span>
            </div>
          </div>

          {/* Center on mobile / Right on desktop: Realistic Phone mockup */}
          <div className="relative z-10 flex h-[190px] sm:h-[125%] w-auto sm:w-[42%] max-w-[170px] sm:max-w-[210px] aspect-[471/1024] items-center justify-center -rotate-1 sm:-rotate-2 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 mx-auto sm:mx-0 my-auto sm:my-0 pb-5 sm:pb-0">
            <div className="relative h-full w-full overflow-hidden rounded-[18px] sm:rounded-[22px] border-[2.5px] sm:border-[3px] border-neutral-700/80 bg-black shadow-2xl">
              <img
                src={project.screenshot}
                alt={project.imageAlt}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      ) : project.id === 'co-agent' && project.screenshot ? (
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-[#1E1B4B] via-[#2E1065] to-[#0F172A] p-4 sm:p-8 text-white sm:flex-row sm:items-center">
          {/* Subtle grid texture overlay */}
          <div className="pointer-events-none absolute inset-0 bg-architectural-grid opacity-15" />

          {/* Left/Top info badge with official logo */}
          <div className="relative z-10 flex w-full flex-row items-center justify-between gap-3 sm:max-w-[54%] sm:flex-col sm:items-start sm:justify-start sm:space-y-3">
            <div className="flex items-center gap-2.5 sm:gap-3">
              {project.logo && (
                <img
                  src={project.logo}
                  alt={`${project.name} Logo`}
                  className="h-9 w-9 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl border border-white/20 bg-white/10 p-1 sm:p-1.5 shadow-md object-contain shrink-0 backdrop-blur-xs"
                />
              )}
              <div>
                <span className="font-display text-base sm:text-xl font-bold tracking-tight text-white">
                  {project.name}
                </span>
                <span className="block font-mono text-[9px] sm:text-[10px] text-purple-300">
                  AI &amp; Automation
                </span>
              </div>
            </div>

            <p className="hidden sm:block text-xs leading-relaxed text-neutral-300 line-clamp-2 sm:line-clamp-3">
              {project.description}
            </p>

            <div className="flex items-center gap-2 pt-0 sm:pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-500/20 px-2.5 sm:px-3 py-1 font-mono text-[9px] sm:text-[10px] text-purple-200 backdrop-blur-xs">
                <span>Marketing &amp; Sales</span>
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] text-neutral-400">
                Auto-Reply &amp; Campaigns
              </span>
            </div>
          </div>

          {/* Center on mobile / Right on desktop: Realistic Phone mockup */}
          <div className="relative z-10 flex h-[190px] sm:h-[125%] w-auto sm:w-[42%] max-w-[170px] sm:max-w-[210px] aspect-[471/1024] items-center justify-center rotate-1 sm:rotate-2 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 mx-auto sm:mx-0 my-auto sm:my-0 pb-5 sm:pb-0">
            <div className="relative h-full w-full overflow-hidden rounded-[18px] sm:rounded-[22px] border-[2.5px] sm:border-[3px] border-neutral-700/80 bg-black shadow-2xl">
              <img
                src={project.screenshot}
                alt={project.imageAlt}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      ) : project.id === 'hfinpro' && project.screenshot ? (
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0B2545] via-[#0F3460] to-[#061527] p-4 sm:p-8 text-white sm:flex-row sm:items-center">
          {/* Subtle grid texture overlay */}
          <div className="pointer-events-none absolute inset-0 bg-architectural-grid opacity-15" />

          {/* Left/Top info badge with official logo */}
          <div className="relative z-10 flex w-full flex-row items-center justify-between gap-3 sm:max-w-[54%] sm:flex-col sm:items-start sm:justify-start sm:space-y-3">
            <div className="flex items-center gap-2.5 sm:gap-3">
              {project.logo && (
                <img
                  src={project.logo}
                  alt={`${project.name} Logo`}
                  className="h-9 w-9 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl border border-white/20 bg-[#165BAA] p-1 sm:p-1.5 shadow-md object-contain shrink-0"
                />
              )}
              <div>
                <span className="font-display text-base sm:text-xl font-bold tracking-tight text-white">
                  {project.name}
                </span>
                <span className="block font-mono text-[9px] sm:text-[10px] text-blue-300">
                  Google Play Verified
                </span>
              </div>
            </div>

            <p className="hidden sm:block text-xs leading-relaxed text-neutral-300 line-clamp-2 sm:line-clamp-3">
              {project.description}
            </p>

            <div className="flex items-center gap-2 pt-0 sm:pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/20 px-2.5 sm:px-3 py-1 font-mono text-[9px] sm:text-[10px] text-blue-200 backdrop-blur-xs">
                <SiGoogleplay className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-blue-300" />
                <span>Play Store App</span>
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] text-neutral-400">
                Fintech &amp; MDM
              </span>
            </div>
          </div>

          {/* Center on mobile / Right on desktop: Realistic Phone mockup */}
          <div className="relative z-10 flex h-[190px] sm:h-[125%] w-auto sm:w-[42%] max-w-[170px] sm:max-w-[210px] aspect-[576/1024] items-center justify-center -rotate-1 sm:-rotate-2 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 mx-auto sm:mx-0 my-auto sm:my-0 pb-5 sm:pb-0">
            <div className="relative h-full w-full overflow-hidden rounded-[18px] sm:rounded-[22px] border-[2.5px] sm:border-[3px] border-neutral-700/80 bg-black shadow-2xl">
              <img
                src={project.screenshot}
                alt={project.imageAlt}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      ) : !imgError ? (
        <img
          src={project.image}
          alt={project.imageAlt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setImgError(true)}
          className="project-parallax-img h-full w-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-neutral-100 p-10 text-center">
          <span className="font-mono text-xs text-neutral-500">{project.index}</span>
          <span className="mt-2 font-display text-2xl font-bold text-black">{project.name}</span>
          <span className="mt-1 text-sm text-neutral-600">{project.tagline}</span>
        </div>
      )}

      {/* Measured contrast scrim on bottom edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-45"
      />

      {/* Corner editorial caption */}
      <div className="pointer-events-none absolute bottom-3 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 z-20 flex items-center justify-between text-[11px] sm:text-xs text-white">
        <span className="font-mono tabular">{project.index} / 03</span>
        <span className="inline-flex items-center gap-1.5 font-display font-medium opacity-95 transition-transform duration-300 group-hover:translate-x-0.5">
          <span>Inspect Case Study</span>
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </div>
    </button>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onNavigateContact }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const frames = gsap.utils.toArray<HTMLElement>('.project-media-reveal');
      frames.forEach((frame) => {
        const img = frame.querySelector('.project-parallax-img');
        if (!img) return;
        gsap.fromTo(
          img,
          { yPercent: -5, scale: 1.07 },
          {
            yPercent: 5,
            scale: 1.01,
            ease: 'none',
            scrollTrigger: {
              trigger: frame,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative border-t border-black/10 bg-[#FAFAFA] pb-24 text-black sm:pb-32 lg:pb-36"
    >
      {/* Subtle monochrome editorial marquee divider */}
      <div
        aria-hidden="true"
        className="overflow-hidden border-b border-black/10 bg-white py-4"
      >
        <div className="animate-marquee flex items-center gap-8 font-mono text-xs tracking-wider text-neutral-500">
          {Array.from({ length: 8 }).map((_, idx) => (
            <span key={idx} className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-black">Selected Works</span>
              <span>·</span>
              <span>Mobile Applications</span>
              <span>·</span>
              <span>Automation Systems</span>
              <span>·</span>
              <span>Fintech Platforms</span>
              <span>·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1360px] px-6 pt-20 sm:px-10 sm:pt-28 lg:px-12">
        {/* Section header */}
        <div className="mb-20 flex flex-col justify-between gap-6 border-b border-black/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-mono text-xs text-neutral-500 tabular">
              03 · Featured Projects
            </p>
            <SplitTextReveal
              text="Selected Works."
              as="h2"
              mode="words"
              triggerOnView
              className="font-display text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl"
            />
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-600">
            Commercial products engineered for real-world scale—bridging mobile fluidness, backend reliability, and disciplined UI craft.
          </p>
        </div>

        {/* Alternating editorial showcase rows */}
        <div className="space-y-24 lg:space-y-36">
          {PROJECTS.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14"
              >
                {/* Visual preview column */}
                <div
                  className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <ProjectImageFrame
                    project={project}
                    onSelect={setSelectedProject}
                  />
                </div>

                {/* Editorial narrative column */}
                <div
                  className={`flex flex-col justify-between lg:col-span-5 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    {/* Quiet unboxed metadata line */}
                    <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-neutral-500 tabular">
                      <span className="font-medium text-black">{project.index}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.role}</span>
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      {project.logo && (
                        <img
                          src={project.logo}
                          alt={`${project.name} Logo`}
                          className="h-10 w-10 rounded-xl border border-black/10 bg-white p-1 shadow-xs object-contain"
                        />
                      )}
                      <h3 className="font-display text-3xl font-bold tracking-tight text-black sm:text-4xl">
                        {project.name}
                      </h3>
                    </div>

                    <p className="mt-2 font-display text-base font-medium text-neutral-800">
                      {project.tagline}
                    </p>

                    <p className="mt-5 text-sm leading-relaxed text-neutral-600 sm:text-base">
                      {project.description}
                    </p>

                    {/* Clean unboxed technology stack line */}
                    <div className="mt-7 border-t border-black/10 pt-5">
                      <p className="mb-2 font-mono text-[11px] text-neutral-500">
                        Technology Stack
                      </p>
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-neutral-700">
                        {project.stack.map((tech, techIdx) => (
                          <React.Fragment key={tech}>
                            <span>{tech}</span>
                            {techIdx < project.stack.length - 1 && (
                              <span aria-hidden="true" className="text-neutral-300">
                                ·
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Magnetic CTA row */}
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <MagneticButton
                      onClick={() => setSelectedProject(project)}
                      cursorLabel="Open"
                      className="group inline-flex items-center gap-3 border border-black bg-black px-6 py-3.5 font-display text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAFA]"
                    >
                      <span>View Project</span>
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </MagneticButton>

                    {project.videoUrl && (
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 px-5 py-3.5 font-display text-xs font-semibold text-blue-700 transition-colors hover:bg-blue-600 hover:text-white"
                      >
                        <Play className="h-3.5 w-3.5 fill-current" />
                        <span>Watch Video Demo</span>
                      </button>
                    )}

                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-black/20 bg-white px-5 py-3.5 font-display text-xs font-medium text-black transition-all hover:border-black hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                      >
                        <SiGoogleplay className="h-4 w-4 text-[#0086F0]" />
                        <span>Google Play</span>
                        <ExternalLink className="h-3 w-3 text-neutral-400" aria-hidden="true" />
                      </a>
                    )}

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="editorial-underline inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 transition-colors hover:text-black"
                      >
                        <span>GitHub Profile</span>
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Interactive Case Study Modal / Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-black/20 bg-white text-black shadow-2xl"
            >
              {/* Modal sticky top header */}
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-white/95 px-6 py-4 backdrop-blur sm:px-8">
                <div className="flex items-center gap-3 font-mono text-xs text-neutral-500 tabular">
                  <span className="font-medium text-black">{selectedProject.index}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.year}</span>
                  <span aria-hidden="true">·</span>
                  <span className="hidden sm:inline">{selectedProject.role}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="flex h-10 w-10 items-center justify-center border border-black/15 text-neutral-700 transition-colors hover:border-black hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* High-resolution project preview */}
              <div className="h-[270px] sm:h-auto sm:aspect-[16/9] w-full overflow-hidden border-b border-black/10 bg-neutral-100">
                {selectedProject.id === 'co-agent' && selectedProject.screenshot ? (
                  <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1E1B4B] via-[#2E1065] to-[#0F172A] p-4 sm:p-8">
                    <div className="flex h-full items-center justify-center gap-6 sm:gap-14">
                      <div className="hidden sm:flex flex-col items-start gap-3 text-white">
                        {selectedProject.logo && (
                          <img
                            src={selectedProject.logo}
                            alt="Logo"
                            className="h-16 w-16 rounded-2xl border border-white/20 bg-white/10 p-2 shadow-lg object-contain backdrop-blur-xs"
                          />
                        )}
                        <span className="font-display text-2xl font-bold">{selectedProject.name}</span>
                        <span className="font-mono text-xs text-purple-300">Automated Marketing &amp; Sales</span>
                      </div>
                      <div className="h-full max-h-[220px] sm:max-h-[300px] aspect-[471/1024] overflow-hidden rounded-[18px] sm:rounded-[20px] border-[2.5px] sm:border-[3px] border-neutral-700 bg-black shadow-2xl">
                        <img
                          src={selectedProject.screenshot}
                          alt={selectedProject.imageAlt}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                ) : selectedProject.id === 'share0wheels' && selectedProject.screenshot ? (
                  <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-[#072422] via-[#0B302D] to-[#041413] p-4 sm:p-8">
                    <div className="flex h-full items-center justify-center gap-6 sm:gap-14">
                      <div className="hidden sm:flex flex-col items-start gap-3 text-white">
                        {selectedProject.logo && (
                          <img
                            src={selectedProject.logo}
                            alt="Logo"
                            className="h-16 w-16 rounded-2xl border border-white/20 bg-white p-2 shadow-lg object-contain"
                          />
                        )}
                        <span className="font-display text-2xl font-bold">{selectedProject.name}</span>
                        <span className="font-mono text-xs text-emerald-400">Available on Google Play</span>
                      </div>
                      <div className="h-full max-h-[220px] sm:max-h-[300px] aspect-[471/1024] overflow-hidden rounded-[18px] sm:rounded-[20px] border-[2.5px] sm:border-[3px] border-neutral-700 bg-black shadow-2xl">
                        <img
                          src={selectedProject.screenshot}
                          alt={selectedProject.imageAlt}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                ) : selectedProject.id === 'hfinpro' && selectedProject.screenshot ? (
                  <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0B2545] via-[#0F3460] to-[#061527] p-4 sm:p-8">
                    <div className="flex h-full items-center justify-center gap-6 sm:gap-14">
                      <div className="hidden sm:flex flex-col items-start gap-3 text-white">
                        {selectedProject.logo && (
                          <img
                            src={selectedProject.logo}
                            alt="Logo"
                            className="h-16 w-16 rounded-2xl border border-white/20 bg-[#165BAA] p-2 shadow-lg object-contain"
                          />
                        )}
                        <span className="font-display text-2xl font-bold">{selectedProject.name}</span>
                        <span className="font-mono text-xs text-blue-300">Available on Google Play</span>
                      </div>
                      <div className="h-full max-h-[220px] sm:max-h-[300px] aspect-[576/1024] overflow-hidden rounded-[18px] sm:rounded-[20px] border-[2.5px] sm:border-[3px] border-neutral-700 bg-black shadow-2xl">
                        <img
                          src={selectedProject.screenshot}
                          alt={selectedProject.imageAlt}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.imageAlt}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover grayscale"
                  />
                )}
              </div>

              {/* Case study details */}
              <div className="space-y-8 p-6 sm:p-10">
                <div>
                  <div className="flex items-center gap-3">
                    {selectedProject.logo && (
                      <img
                        src={selectedProject.logo}
                        alt={`${selectedProject.name} Logo`}
                        className="h-10 w-10 rounded-xl border border-black/10 bg-white p-1 object-contain shadow-xs shrink-0"
                      />
                    )}
                    <h3
                      id="project-modal-title"
                      className="font-display text-3xl font-bold tracking-tight text-black sm:text-4xl"
                    >
                      {selectedProject.name}
                    </h3>
                  </div>
                  <p className="mt-2 font-display text-base font-medium text-neutral-800">
                    {selectedProject.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {selectedProject.overview}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 border-y border-black/10 py-8 md:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-xs text-neutral-500">The Challenge</h4>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs text-neutral-500">Engineering Solution</h4>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-neutral-500">Key Deliverables</h4>
                  <ul className="mt-4 space-y-3">
                    {selectedProject.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-relaxed text-neutral-700"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-black"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-mono text-xs text-neutral-500">Application Screenshots</h4>
                      <span className="font-mono text-[10px] text-neutral-400">Scroll to explore →</span>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scrollbar-thin">
                      {selectedProject.screenshots.map((screen, sIdx) => (
                        <div
                          key={sIdx}
                          className="relative h-[290px] aspect-[471/1024] shrink-0 overflow-hidden rounded-[20px] border-2 border-neutral-300 bg-neutral-900 shadow-lg snap-start transition-transform hover:scale-[1.02]"
                        >
                          <img
                            src={screen}
                            alt={`${selectedProject.name} screen ${sIdx + 1}`}
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col justify-between gap-6 border-t border-black/10 pt-6 sm:flex-row sm:items-center">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs text-neutral-600">
                    {selectedProject.stack.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {idx < selectedProject.stack.length - 1 && (
                          <span aria-hidden="true" className="text-neutral-300">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {selectedProject.playStoreUrl && (
                      <a
                        href={selectedProject.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#01875F] px-5 py-3 font-display text-xs font-semibold text-white whitespace-nowrap transition-colors hover:bg-[#016f4e]"
                      >
                        <SiGoogleplay className="h-4 w-4" />
                        <span>Get on Google Play</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedProject(null);
                        onNavigateContact();
                      }}
                      className="inline-flex items-center justify-center gap-2 bg-black px-5 py-3 font-display text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-neutral-800"
                    >
                      <span>Discuss a Similar Build</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
