'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const checks = [
  'Strategy before aesthetics',
  'Research-driven design',
  'Business outcome focus',
  'Fast, structured delivery',
];

const metricTiles = [
  { value: '30+', label: 'Projects Completed' },
  { value: '3×', label: 'Avg. Client Growth' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          {/* Left — Portrait */}
          <motion.div
            className="w-full lg:w-[44%] relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="relative max-w-[380px] mx-auto lg:mx-0">
              {/* Shadow duplicate */}
              <div className="absolute inset-0 rounded-[20px] bg-accentLight border border-accentLight translate-x-4 translate-y-4 -z-10" />

              {/* Main portrait */}
              <div className="relative rounded-[20px] bg-accentLight aspect-[3/4] max-w-[380px] overflow-hidden border border-[#E0DAFF]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#EDE9FC] to-[#D4CCFF] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                      <Icon name="diamond" className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-[#5A37EC]">Pro Healthy</p>
                    <p className="text-xs text-[#7B6DC8] mt-1">Digital Designer</p>
                  </div>
                </div>

                {/* Accent square */}
                <div className="absolute top-4 right-4 w-5 h-5 bg-accent rounded-sm" />
              </div>

              {/* Location badge */}
              <div className="absolute -bottom-4 left-4 bg-white border border-[#EEEEEE] rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2">
                <Icon name="location-pin" className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-dark">Morocco — Open to Remote</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            className="w-full lg:w-[56%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              About the Studio
            </motion.span>

            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-5 leading-tight max-w-[480px]">
              Design with purpose. Built to perform.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-[15px] text-[#555] leading-relaxed mb-4">
              Pro Healthy is a digital design studio focused on one thing: creating visual systems that actually work. We don&apos;t just make things look good — we make them perform. Every project starts with a strategic brief and ends with measurable results you can see in your metrics.
            </motion.p>

            <motion.p variants={fadeUp} className="text-[15px] text-[#555] leading-relaxed mb-8">
              Based in Morocco and working with clients worldwide, we&apos;ve helped startups, agencies, and established brands build identities and experiences that grow with them. Our process is fast, structured, and transparent — because your time and budget matter as much as the final design.
            </motion.p>

            {/* Checklist */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 mb-8">
              {checks.map((check) => (
                <div key={check} className="flex items-center gap-2">
                  <Icon name="checkmark" className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-[#333]">{check}</span>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-10">
              <Button variant="ghost" href="#" size="md">Download CV</Button>
              <a href="#work" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                View Full Portfolio
                <Icon name="arrow-right" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Metric Tiles */}
            <motion.div variants={fadeUp} className="flex gap-4">
              {metricTiles.map((tile) => (
                <div key={tile.label} className="bg-[#F5F5F7] rounded-xl px-7 py-5">
                  <div className="text-[28px] font-bold text-dark leading-none">{tile.value}</div>
                  <div className="text-xs text-muted mt-1">{tile.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
