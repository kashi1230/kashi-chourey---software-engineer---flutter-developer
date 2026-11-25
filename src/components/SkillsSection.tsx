import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  SiFlutter,
  SiDart,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFirebase,
  SiAndroidstudio,
  SiPostman,
} from 'react-icons/si';
import { TbBrandVscode, TbApi, TbBolt, TbLayersIntersect } from 'react-icons/tb';
import { SKILLS, SkillCategory } from '../data/portfolioData';
import { SplitTextReveal } from './SplitTextReveal';
import { TiltCard } from './TiltCard';

type FilterTab = 'All' | SkillCategory;

const FILTER_TABS: FilterTab[] = ['All', 'Frontend', 'Backend', 'Tools'];

interface SkillIconConfig {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  brandColor: string;
  secondaryIcon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  secondaryColor?: string;
  brandLabel?: string;
}

const SKILL_ICONS: Record<string, SkillIconConfig> = {
  Flutter: { icon: SiFlutter, brandColor: '#02569B', brandLabel: 'Google Flutter' },
  Dart: { icon: SiDart, brandColor: '#0175C2', brandLabel: 'Dart Language' },
  React: { icon: SiReact, brandColor: '#61DAFB', brandLabel: 'React.js' },
  JavaScript: { icon: SiJavascript, brandColor: '#F7DF1E', brandLabel: 'JavaScript ESNext' },
  'HTML / CSS': {
    icon: SiHtml5,
    brandColor: '#E34F26',
    secondaryIcon: SiCss,
    secondaryColor: '#1572B6',
    brandLabel: 'HTML5 & CSS3',
  },
  'Node.js': { icon: SiNodedotjs, brandColor: '#5FA04E', brandLabel: 'Node.js Runtime' },
  PHP: { icon: SiPhp, brandColor: '#777BB4', brandLabel: 'PHP Engine' },
  'REST APIs': {
    icon: TbApi,
    brandColor: '#FF6C37',
    secondaryIcon: SiPostman,
    secondaryColor: '#FF6C37',
    brandLabel: 'RESTful API',
  },
  MySQL: { icon: SiMysql, brandColor: '#4479A1', brandLabel: 'MySQL Database' },
  MongoDB: { icon: SiMongodb, brandColor: '#47A248', brandLabel: 'MongoDB NoSQL' },
  'Git / GitHub': {
    icon: SiGit,
    brandColor: '#F05032',
    secondaryIcon: SiGithub,
    secondaryColor: '#181717',
    brandLabel: 'Git & GitHub',
  },
  Firebase: { icon: SiFirebase, brandColor: '#FFCA28', brandLabel: 'Google Firebase' },
  GetX: { icon: TbBolt, brandColor: '#8B5CF6', brandLabel: 'GetX Reactive State' },
  Provider: { icon: TbLayersIntersect, brandColor: '#02569B', brandLabel: 'Provider State Architecture' },
  'Android Studio': { icon: SiAndroidstudio, brandColor: '#3DDC84', brandLabel: 'Android Studio SDK' },
  'VS Code': { icon: TbBrandVscode, brandColor: '#007ACC', brandLabel: 'VS Code Editor' },
};

// Real brand technology icons rendered in their authentic official brand colors
const SkillGlyph: React.FC<{ name: string; category: SkillCategory }> = ({ name }) => {
  const item = SKILL_ICONS[name];
  if (!item) return null;
  const PrimaryIcon = item.icon;
  const SecondaryIcon = item.secondaryIcon;

  return (
    <div
      className="relative flex h-12 w-12 shrink-0 items-center justify-center border bg-neutral-50/80 p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-xs"
      style={{
        borderColor: `${item.brandColor}40`,
      }}
    >
      {SecondaryIcon ? (
        <div className="flex items-center gap-1">
          <PrimaryIcon
            className="h-5 w-5 transition-transform duration-300 group-hover:scale-105"
            style={{ color: item.brandColor }}
          />
          <SecondaryIcon
            className="h-4 w-4 transition-transform duration-300 group-hover:scale-105"
            style={{ color: item.secondaryColor || item.brandColor }}
          />
        </div>
      ) : (
        <PrimaryIcon
          className="h-6 w-6 transition-transform duration-300 group-hover:scale-105"
          style={{ color: item.brandColor }}
        />
      )}
    </div>
  );
};

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>('All');

  const filteredSkills = useMemo(() => {
    if (activeTab === 'All') return SKILLS;
    return SKILLS.filter((skill) => skill.category === activeTab);
  }, [activeTab]);

  return (
    <section
      id="skills"
      className="relative border-t border-black/10 bg-white py-24 text-black sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-12">
        {/* Header & functional interactive category filter control */}
        <div className="mb-14 flex flex-col justify-between gap-8 border-b border-black/10 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 font-mono text-xs text-neutral-500 tabular">
              02 · Skills &amp; Technologies
            </p>
            <SplitTextReveal
              text="Tools of the Craft."
              as="h2"
              mode="words"
              triggerOnView
              className="font-display text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl"
            />
          </div>

          {/* Interactive segmented filter tabs */}
          <div
            role="tablist"
            aria-label="Filter technologies by discipline"
            className="inline-flex flex-wrap items-center gap-1 border border-black/15 bg-[#F5F5F5] p-1"
          >
            {FILTER_TABS.map((tab) => {
              const isSelected = activeTab === tab;
              const count =
                tab === 'All'
                  ? SKILLS.length
                  : SKILLS.filter((s) => s.category === tab).length;
              return (
                <button
                  key={tab}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black ${
                    isSelected
                      ? 'bg-black text-white'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  <span>{tab}</span>
                  <span
                    className={`ml-1.5 font-mono text-[10px] tabular ${
                      isSelected ? 'text-neutral-400' : 'text-neutral-500'
                    }`}
                  >
                    {String(count).padStart(2, '0')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive monochrome 3D tilt grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(idx * 0.03, 0.25),
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <TiltCard
                  maxTilt={7}
                  className="group flex h-full flex-col justify-between border border-black/12 bg-white p-6 transition-colors duration-300 hover:border-black"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <SkillGlyph name={skill.name} category={skill.category} />
                      <span className="font-mono text-[11px] text-neutral-500">
                        {skill.category}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-black transition-colors duration-200">
                      {skill.name}
                    </h3>
                    <p className="mt-0.5 font-mono text-[11px] text-neutral-500">
                      {skill.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600 transition-colors duration-200 group-hover:text-neutral-900">
                      {skill.detail}
                    </p>
                  </div>

                  {/* Animated bottom accent bar in authentic brand color */}
                  <div className="mt-6 h-[2px] w-full overflow-hidden bg-black/10">
                    <div
                      className="h-full w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                      style={{
                        backgroundColor: SKILL_ICONS[skill.name]?.brandColor || '#000000',
                      }}
                    />
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
