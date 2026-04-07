'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[10%] w-80 h-80 bg-accent opacity-[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-60 h-60 bg-accent opacity-[0.03] rounded-full blur-3xl" />
      </div>

      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent bg-accentLight px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot inline-block" />
                Digital Design Studio
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark leading-[1.08] tracking-tight">
              Design That{' '}
              <span className="text-accent">Converts.</span>
              <br />
              Brands That Last.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#555555] max-w-lg leading-relaxed">
              We craft UI/UX experiences, brand identities, and social media systems that help ambitious businesses stand out and grow — without the guesswork.
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm text-muted">
              Trusted by founders, agencies, and growing brands across Morocco and beyond.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Button variant="filled" href="#work" size="lg">
                View My Work
                <Icon name="arrow-right" className="w-4 h-4" />
              </Button>
              <Button variant="ghost" href="#contact" size="lg">
                Start a Project
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {['YB', 'SI', 'MO'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-accentLight border-2 border-white flex items-center justify-center text-[10px] font-bold text-accent"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="star" className="w-3.5 h-3.5 text-[#F5A623]" />
                  ))}
                </div>
                <span className="text-xs text-muted">30+ happy clients</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Device Mockup */}
          <motion.div
            className="relative flex items-center justify-center min-h-[400px] lg:min-h-[520px]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Laptop Frame */}
            <div className="absolute right-4 top-8 w-[340px] sm:w-[380px] rounded-2xl bg-[#F5F5F7] border border-[#EEEEEE] shadow-lg overflow-hidden"
              style={{ transform: 'rotate(-3deg)' }}>
              <div className="flex items-center gap-1.5 px-4 py-3 bg-white border-b border-[#EEEEEE]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28CA41]" />
              </div>
              <div className="h-52 bg-gradient-to-br from-accentLight via-white to-[#F0EBF9] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent mx-auto mb-3 flex items-center justify-center">
                    <Icon name="monitor" className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-xs text-muted font-medium">UI/UX Design</div>
                </div>
              </div>
            </div>

            {/* Phone Frame */}
            <div className="relative z-10 w-[200px] sm:w-[240px] rounded-[32px] bg-[#F5F5F7] border border-[#EEEEEE] shadow-2xl overflow-hidden"
              style={{ transform: 'rotate(6deg)', marginTop: '40px' }}>
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-16 h-1.5 bg-[#DDDDDD] rounded-full" />
              </div>
              <div className="h-80 bg-gradient-to-b from-accentLight to-white flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="w-12 h-12 rounded-xl bg-accent mx-auto mb-2 flex items-center justify-center">
                    <Icon name="diamond" className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs text-muted font-medium">Brand Identity</div>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 bg-accentLight rounded-full" />
                    <div className="h-2 bg-accentLight rounded-full w-3/4 mx-auto" />
                    <div className="h-2 bg-accentLight rounded-full w-1/2 mx-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Available Badge */}
            <div className="absolute top-4 left-0 lg:-left-4 bg-white border border-[#EEEEEE] rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2.5 animate-float z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse-dot" />
              <span className="text-sm font-semibold text-dark">Available for Projects</span>
            </div>

            {/* Floating Stats Badge */}
            <div className="absolute bottom-4 right-0 lg:-right-4 bg-white border border-[#EEEEEE] rounded-xl px-4 py-2.5 shadow-lg animate-float-delayed z-20">
              <div className="text-lg font-bold text-dark leading-none">30+</div>
              <div className="text-xs text-muted mt-0.5">Projects Delivered</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
