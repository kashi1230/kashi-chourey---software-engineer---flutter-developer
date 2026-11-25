import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lottie } from 'lottie-react';
import { ArrowUp, ArrowUpRight, Check, Copy, Mail, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';
import { contactSignalLottie } from '../data/lottieAnimations';
import { MagneticButton } from './MagneticButton';
import { SplitTextReveal } from './SplitTextReveal';

interface ContactSectionProps {
  onBackToTop: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onBackToTop }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback for restricted clipboard environments
      const mailto = `mailto:${CONTACT_INFO.email}`;
      window.location.href = mailto;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please complete your name, email address, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');
    window.setTimeout(() => {
      setStatus('sent');
    }, 650);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setStatus('idle');
    setErrorMsg('');
  };

  return (
    <footer
      id="contact"
      className="relative border-t border-black/10 bg-white pt-24 pb-12 text-black sm:pt-32 lg:pt-36"
    >
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-12">
        {/* Section kicker */}
        <p className="mb-4 font-mono text-xs text-neutral-500 tabular">06 · Contact</p>

        {/* Main 2-column contact layout */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16">
          {/* Left column: Heading, Lottie visual, and direct channels */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <SplitTextReveal
                text="Have an idea? Let's build something extraordinary."
                as="h2"
                mode="words"
                triggerOnView
                className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-[3.35rem]"
              />

              <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
                Open to full-time software engineering roles, Flutter product builds, and select freelance collaborations.
              </p>

              {/* Direct contact channels */}
              <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
                {/* Email row with copy action */}
                <div className="flex flex-wrap items-center justify-between gap-4 py-5">
                  <div>
                    <span className="block font-mono text-[11px] text-neutral-500">Email</span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="editorial-underline mt-1 inline-flex items-center gap-2 font-display text-base font-medium text-black sm:text-lg"
                    >
                      <Mail className="h-4 w-4 text-neutral-500" aria-hidden="true" />
                      <span>{CONTACT_INFO.email}</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 border border-black/20 px-3.5 py-2 text-xs text-neutral-700 whitespace-nowrap shrink-0 transition-colors hover:border-black hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-black" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 transition-colors hover:text-black"
                >
                  <div>
                    <span className="block font-mono text-[11px] text-neutral-500">LinkedIn</span>
                    <span className="mt-1 block font-display text-base font-medium text-neutral-800 transition-colors group-hover:text-black sm:text-lg">
                      linkedin.com/in/kashi-chourey-865501261
                    </span>
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 text-neutral-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
                    aria-hidden="true"
                  />
                </a>

                {/* GitHub */}
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 transition-colors hover:text-black"
                >
                  <div>
                    <span className="block font-mono text-[11px] text-neutral-500">GitHub</span>
                    <span className="mt-1 block font-display text-base font-medium text-neutral-800 transition-colors group-hover:text-black sm:text-lg">
                      github.com/kashi1230
                    </span>
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 text-neutral-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            {/* Custom Contact Lottie Signal Widget */}
            <div className="mt-10 flex items-center gap-5">
              <div className="h-20 w-20 shrink-0 border border-black/12 bg-[#FAFAFA] p-1">
                <Lottie
                  src={contactSignalLottie}
                  loop
                  autoplay
                  aria-hidden="true"
                  className="h-full w-full"
                />
              </div>
              <div className="text-xs leading-relaxed text-neutral-500">
                <p className="font-medium text-black">{CONTACT_INFO.location}</p>
                <p className="mt-0.5">Typical response time within 24 hours.</p>
              </div>
            </div>
          </div>

          {/* Right column: Minimalist editorial contact form */}
          <div className="lg:col-span-6">
            <div className="border border-black/12 bg-[#FAFAFA] p-7 sm:p-10">
              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[380px] flex-col items-start justify-center space-y-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-black bg-black text-white">
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-black">
                    Message Received
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-neutral-600">
                    Thank you, {name}. Your note has been prepared—I&apos;ll review the details and follow up at{' '}
                    <span className="font-medium text-black">{email}</span> shortly.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href={`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
                        subject || `Portfolio Inquiry from ${name}`
                      )}&body=${encodeURIComponent(`Hi Kashi,\n\n${message}\n\n— ${name} (${email})`)}`}
                      className="inline-flex items-center gap-2 bg-black px-5 py-3 font-display text-xs font-semibold text-white transition-colors hover:bg-neutral-800"
                    >
                      <span>Open in Mail App</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="editorial-underline text-xs text-neutral-600 hover:text-black"
                    >
                      Send another message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-7">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs text-neutral-600"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Mercer"
                      className="mt-2 w-full border-b border-black/20 bg-transparent pb-3 text-sm text-black placeholder:text-neutral-400 transition-colors focus:border-black focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs text-neutral-600"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="mt-2 w-full border-b border-black/20 bg-transparent pb-3 text-sm text-black placeholder:text-neutral-400 transition-colors focus:border-black focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block font-mono text-xs text-neutral-600"
                    >
                      Project Type (Optional)
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Flutter App, Full-Stack Platform, Engineering Role"
                      className="mt-2 w-full border-b border-black/20 bg-transparent pb-3 text-sm text-black placeholder:text-neutral-400 transition-colors focus:border-black focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-xs text-neutral-600"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about what you're building, timeline, and goals..."
                      className="mt-2 w-full resize-none border-b border-black/20 bg-transparent pb-3 text-sm text-black placeholder:text-neutral-400 transition-colors focus:border-black focus:outline-none"
                    />
                  </div>

                  {errorMsg && (
                    <p role="alert" className="text-xs font-medium text-black underline underline-offset-4">
                      {errorMsg}
                    </p>
                  )}

                  <div className="pt-2">
                    <MagneticButton
                      type="submit"
                      disabled={status === 'submitting'}
                      cursorLabel="Send"
                      className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden bg-black px-7 py-4 font-display text-sm font-semibold text-white transition-colors duration-200 hover:bg-neutral-800 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAFA] sm:w-auto"
                    >
                      <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                      <Send
                        className={`h-4 w-4 transition-transform duration-300 ${
                          status === 'submitting'
                            ? 'translate-x-1 -translate-y-1'
                            : 'group-hover:translate-x-1 group-hover:-translate-y-0.5'
                        }`}
                        aria-hidden="true"
                      />
                    </MagneticButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Clean minimal footer */}
        <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-black/10 pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/images/kashi_logo.png"
              alt="KC Logo"
              className="h-6 w-auto mix-blend-multiply object-contain"
            />
            <p className="text-xs text-neutral-600">
              Designed &amp; Developed by <span className="font-medium text-black">Kashi Chourey</span>.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-500">
            <span className="font-mono tabular">© {new Date().getFullYear()}</span>
            <button
              type="button"
              onClick={onBackToTop}
              className="editorial-underline inline-flex items-center gap-1.5 text-neutral-700 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
