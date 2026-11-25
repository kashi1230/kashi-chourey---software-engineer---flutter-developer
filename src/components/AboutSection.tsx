import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lottie } from 'lottie-react';
import { aboutArchitectureLottie } from '../data/lottieAnimations';
import { SplitTextReveal } from './SplitTextReveal';

const CORE_CAPABILITIES = [
  {
    index: '01',
    title: 'Cross-Platform Mobile Craft',
    detail:
      'Building fluid Flutter & Dart applications engineered for smooth 60fps interactions, resilient state, and clean native feel.',
  },
  {
    index: '02',
    title: 'Scalable Backend Systems',
    detail:
      'Designing predictable REST APIs and transactional databases with Node.js, PHP, MySQL, MongoDB, and Firebase.',
  },
  {
    index: '03',
    title: 'Modern Web Experiences',
    detail:
      'Translating product ideas into editorial-grade React interfaces where typography, clarity, and intentional motion guide the user.',
  },
];

export const AboutSection: React.FC = () => {
  const [activeView, setActiveView] = useState<'code' | 'terminal'>('code');

  return (
    <section
      id="about"
      className="relative border-t border-black/10 bg-[#FAFAFA] py-24 text-black sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-12">
        {/* Section index & editorial header */}
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-black/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-mono text-xs text-neutral-500 tabular">01 · About Me</p>
            <SplitTextReveal
              text="Beyond the Code."
              as="h2"
              mode="words"
              triggerOnView
              className="font-display text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl"
            />
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-600">
            Engineering complete digital products—from refined user interfaces to reliable data layers.
          </p>
        </div>

        {/* Editorial 2-column asymmetric spread */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left column: Realistic Interactive Engineering Console + Architecture Lottie */}
          <div className="space-y-8 lg:col-span-5">
            <div className="overflow-hidden border border-black/15 bg-[#141414] shadow-xs">
              {/* macOS style window header with interactive view tabs */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#1E1E1E] px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                  <span className="ml-2 font-mono text-[11px] text-neutral-400">
                    kashi@studio-macbook
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {(['code', 'terminal'] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveView(tab)}
                      className={`px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase transition-colors ${
                        activeView === tab
                          ? 'bg-white/15 text-white font-medium'
                          : 'text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      {tab === 'code' ? 'Dart Engine' : 'Live Terminal'}
                    </button>
                  ))}
                </div>
              </div>

              {/* View 1: Realistic Clean Architecture Code */}
              {activeView === 'code' && (
                <div className="aspect-[4/3] w-full overflow-auto bg-[#121212] p-5 font-mono text-[11.5px] leading-relaxed text-neutral-300">
                  <div className="text-neutral-500">// lib/core/kashi_architecture.dart</div>
                  <div className="mt-2 text-purple-400">
                    class <span className="text-yellow-300">KashiChourey</span> <span className="text-purple-400">implements</span> <span className="text-cyan-300">SoftwareEngineer</span> {'{'}
                  </div>
                  <div className="pl-4 text-neutral-400">
                    final <span className="text-cyan-300">List&lt;Technology&gt;</span> stack = [
                  </div>
                  <div className="pl-8 text-emerald-300">&apos;Flutter&apos;, &apos;Dart&apos;, &apos;React&apos;, &apos;Node.js&apos;, &apos;MySQL&apos;</div>
                  <div className="pl-4 text-neutral-400">];</div>
                  <div className="mt-2 pl-4 text-purple-400">
                    <span className="text-cyan-300">Future&lt;Release&gt;</span> <span className="text-yellow-300">buildProduct</span>() async {'{'}
                  </div>
                  <div className="pl-8 text-neutral-300">
                    final ui = <span className="text-cyan-300">FlutterEngine</span>.render(target: <span className="text-emerald-300">&apos;60fps&apos;</span>);
                  </div>
                  <div className="pl-8 text-neutral-300">
                    final api = <span className="text-cyan-300">NodeREST</span>.connect(db: <span className="text-emerald-300">&apos;MySQL/Mongo&apos;</span>);
                  </div>
                  <div className="pl-8 text-purple-400">return <span className="text-cyan-300">ProductionRelease</span>.ship(ui, api);</div>
                  <div className="pl-4 text-purple-400">{'}'}</div>
                  <div className="text-purple-400">{'}'}</div>
                </div>
              )}

              {/* View 2: Realistic Terminal Shell */}
              {activeView === 'terminal' && (
                <div className="aspect-[4/3] w-full overflow-auto bg-[#0C0C0C] p-5 font-mono text-[11px] leading-relaxed text-emerald-400">
                  <div className="text-neutral-400">kashi@mbp:~/projects$ <span className="text-white">flutter doctor -v</span></div>
                  <div className="text-neutral-400">[✓] Flutter (Channel stable, 3.29.0 on macOS)</div>
                  <div className="text-neutral-400">[✓] Android toolchain - develop for Android devices</div>
                  <div className="text-neutral-400">[✓] Xcode - develop for iOS and macOS</div>
                  <div className="text-neutral-400">[✓] Chrome - develop for the web</div>
                  <div className="text-neutral-400">[✓] VS Code (version 1.96.2)</div>
                  <div className="mt-2 text-neutral-400">kashi@mbp:~/projects$ <span className="text-white">flutter build appbundle --release</span></div>
                  <div className="text-emerald-400">✓ Built build/app/outputs/bundle/release/app-release.aab (18.4MB)</div>
                  <div className="text-emerald-300">✓ Ready for Google Play Store Deployment</div>
                  <div className="mt-1 flex items-center gap-1.5 text-neutral-400">
                    <span>kashi@mbp:~/projects$</span>
                    <span className="h-3 w-1.5 bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              )}
            </div>

            {/* Custom About Lottie illustration paired with concise summary */}
            <div className="flex items-center gap-6 border border-black/10 bg-white p-6">
              <div className="h-24 w-24 shrink-0">
                <Lottie
                  src={aboutArchitectureLottie}
                  loop
                  autoplay
                  aria-hidden="true"
                  className="h-full w-full"
                />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display text-sm font-semibold text-black">
                  Architecture Meets Aesthetics
                </h3>
                <p className="text-xs leading-relaxed text-neutral-600">
                  Every product begins with clear systems thinking—pairing maintainable codebases with calm, deliberate interfaces.
                </p>
              </div>
            </div>
          </div>

          {/* Right column: Lead manifesto + 3 capabilities + core stack overview */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <p className="font-display text-xl font-normal leading-relaxed text-black sm:text-2xl sm:leading-[1.45]">
                I&apos;m a software engineer passionate about transforming ideas into functional,
                scalable, and visually engaging digital products. From mobile applications to
                backend systems and modern websites, I enjoy building complete digital experiences.
              </p>
              <p className="text-base leading-relaxed text-neutral-600">
                Whether shipping cross-platform Flutter products for retail fintech and urban
                mobility or designing streamlined operational dashboards in React and Node.js, I
                focus on clarity, speed, and longevity. Good engineering should disappear into
                effortless usability.
              </p>
            </motion.div>

            {/* Hairline-divided capability list */}
            <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
              {CORE_CAPABILITIES.map((item, idx) => (
                <motion.div
                  key={item.index}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:gap-4"
                >
                  <span className="font-mono text-xs text-neutral-500 tabular sm:col-span-2">
                    {item.index}
                  </span>
                  <h3 className="font-display text-base font-semibold text-black sm:col-span-4">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600 sm:col-span-6">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Clean unboxed technology line */}
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-neutral-600">
              <span className="font-mono text-black">Core Stack:</span>
              <span>Flutter</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>Dart</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>React</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>Node.js</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>PHP</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>Firebase</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>MySQL &amp; MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
