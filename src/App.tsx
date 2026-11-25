import { useCallback, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'motion/react';
import { Preloader } from './components/Preloader';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';
import { NotFoundPage } from './components/NotFoundPage';

gsap.registerPlugin(ScrollTrigger);

function isHomePath(pathname: string): boolean {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  return normalized === '/' || normalized === '/index.html';
}

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [isNotFound, setIsNotFound] = useState(() => !isHomePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setIsNotFound(!isHomePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Initialize Lenis smooth scroll synchronized with GSAP ScrollTrigger
  useEffect(() => {
    if (isNotFound) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [isNotFound]);

  const handleNavigate = useCallback((sectionId: string) => {
    if (sectionId === 'hero') {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const target = document.getElementById(sectionId);
    if (!target) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -64, duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleGoHome = useCallback(() => {
    window.history.pushState({}, '', '/');
    setIsNotFound(false);
    window.scrollTo({ top: 0 });
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
    // Refresh ScrollTrigger measurements after curtain lifts
    window.setTimeout(() => ScrollTrigger.refresh(), 120);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-black">
      {/* Subtle full-viewport film grain texture */}
      <div aria-hidden="true" className="grain-overlay fixed inset-0 z-[80]" />

      <AnimatePresence mode="wait">
        {isNotFound ? (
          <motion.div
            key="not-found"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <NotFoundPage onGoHome={handleGoHome} />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Preloader onComplete={handlePreloaderComplete} />
            <ScrollProgress />
            <Navbar onNavigate={handleNavigate} />

            <main>
              <HeroSection ready={preloaderDone} onNavigate={handleNavigate} />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection onNavigateContact={() => handleNavigate('contact')} />
              <ExperienceSection />
              <PhilosophySection />
            </main>

            <ContactSection onBackToTop={() => handleNavigate('hero')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
