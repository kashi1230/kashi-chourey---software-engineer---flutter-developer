import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let current = '';
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= scrollPosition) {
          current = link.id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${
          scrolled
            ? 'border-b border-black/10 bg-white/85 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between gap-8 px-6 sm:px-10 lg:px-12">
          {/* Zone 1: Single brand logo mark + wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="flex items-center gap-2.5 font-display text-base font-semibold tracking-tight text-black whitespace-nowrap shrink-0 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black"
          >
            <img
              src="/src/assets/images/kashi_logo.png"
              alt="KC - Kashi Chourey Logo"
              className="h-7 w-auto mix-blend-multiply object-contain transition-transform duration-300 hover:scale-105"
            />
            <span>Kashi Chourey</span>
          </a>

          {/* Zone 2: 5 concise single-line text links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-8 text-sm text-neutral-500"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`editorial-underline whitespace-nowrap shrink-0 py-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black ${
                    isActive ? 'font-medium text-black' : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action (desktop) / menu toggle (mobile) */}
          <div className="flex items-center shrink-0">
            <div className="hidden md:block">
              <MagneticButton
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                strength={0.22}
                className="inline-flex items-center gap-2 border border-black bg-black px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </MagneticButton>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 items-center justify-center border border-black/15 text-black transition-colors hover:border-black md:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen monochrome navigation overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-white px-6 pb-10 pt-24 md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col divide-y divide-black/10 border-y border-black/10">
              {NAV_LINKS.map((link, idx) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="flex items-baseline justify-between py-5 font-display text-2xl font-semibold tracking-tight text-black transition-colors hover:text-neutral-600"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-neutral-500 tabular">0{idx + 1}</span>
                </a>
              ))}
            </nav>

            <div className="space-y-4">
              <button
                type="button"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="flex w-full items-center justify-center gap-2 bg-black px-6 py-4 font-display text-sm font-semibold text-white"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <p className="text-center text-xs text-neutral-500">
                kashichourey284@gmail.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
