import React from 'react';
import { motion } from 'motion/react';

interface SplitTextRevealProps {
  text: string;
  className?: string;
  mode?: 'words' | 'chars';
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  triggerOnView?: boolean;
}

export const SplitTextReveal: React.FC<SplitTextRevealProps> = ({
  text,
  className = '',
  mode = 'words',
  delay = 0,
  stagger = 0.045,
  as: Tag = 'h1',
  triggerOnView = false,
}) => {
  const tokens = mode === 'chars' ? text.split('') : text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: '115%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.72,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        className="inline-flex flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate={triggerOnView ? undefined : 'visible'}
        whileInView={triggerOnView ? 'visible' : undefined}
        viewport={{ once: true, amount: 0.2 }}
        aria-hidden="true"
      >
        {tokens.map((token, idx) => (
          <span
            key={`${token}-${idx}`}
            className="inline-block overflow-hidden align-bottom"
            style={{
              marginRight: mode === 'words' && idx < tokens.length - 1 ? '0.28em' : undefined,
            }}
          >
            <motion.span variants={itemVariants} className="inline-block will-change-transform">
              {token === ' ' ? '\u00A0' : token}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};
