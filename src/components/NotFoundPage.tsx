import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface NotFoundPageProps {
  onGoHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onGoHome }) => {
  return (
    <main className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-white px-6 py-10 text-black sm:px-12">
      <div
        aria-hidden="true"
        className="bg-architectural-grid pointer-events-none absolute inset-0 opacity-70"
      />

      <div className="relative z-10 flex items-center justify-between border-b border-black/10 pb-6">
        <button
          type="button"
          onClick={onGoHome}
          className="font-display text-base font-semibold tracking-tight text-black"
        >
          Kashi Chourey
        </button>
        <span className="font-mono text-xs text-neutral-500">Route Not Found</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto my-auto max-w-2xl py-16 text-center"
      >
        <p className="font-mono text-xs text-neutral-500">Error</p>
        <h1 className="mt-2 font-mono text-[clamp(5.5rem,18vw,13rem)] font-medium leading-none tracking-tighter text-black tabular">
          404
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-neutral-600">
          The page you are looking for does not exist or has been moved. Return to the main portfolio to explore Kashi Chourey&apos;s work.
        </p>

        <div className="mt-10">
          <MagneticButton
            onClick={onGoHome}
            className="inline-flex items-center gap-3 bg-black px-7 py-4 font-display text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Return to Portfolio</span>
          </MagneticButton>
        </div>
      </motion.div>

      <div className="relative z-10 flex items-center justify-between border-t border-black/10 pt-6 text-xs text-neutral-500">
        <span>Designed &amp; Developed by Kashi Chourey.</span>
        <span className="font-mono tabular">404</span>
      </div>
    </main>
  );
};
