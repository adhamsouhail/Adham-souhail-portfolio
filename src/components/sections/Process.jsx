'use client';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { processSteps } from '@/data/process';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Process() {
  return (
    <section id="process" className="section-padding bg-[#F5F5F7]">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={item}>
          <SectionHeader
            eyebrow="How We Work"
            headline="A process built for clarity and speed."
            subheadline="No surprises, no scope creep. Just a clear path from kickoff to delivery."
            align="center"
          />
        </motion.div>

        {/* Desktop horizontal / Mobile vertical */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
        >
          {/* Dashed connector - desktop */}
          <div className="hidden lg:block absolute top-6 left-[calc(12.5%)] right-[calc(12.5%)] h-px border-t-2 border-dashed border-accent/30 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {processSteps.map((step) => (
              <motion.div key={step.stepNumber} variants={item} className="flex flex-col lg:items-center lg:text-center">
                {/* Mobile connector */}
                <div className="flex lg:block items-start gap-5 lg:gap-0">
                  <div className="flex flex-col items-center lg:items-center">
                    <div className="w-12 h-12 rounded-full bg-accent text-white text-lg font-bold flex items-center justify-center flex-shrink-0 relative z-10">
                      {step.stepNumber}
                    </div>
                    {/* Mobile vertical connector */}
                    <div className="lg:hidden w-px flex-1 bg-accent/20 mt-2 min-h-[16px]" />
                  </div>

                  <div className="lg:mt-6 pb-6 lg:pb-0">
                    <h3 className="text-lg font-bold text-dark mb-2">{step.title}</h3>
                    <p className="text-sm text-[#666] leading-[1.7]">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="text-center text-[13px] text-[#999] italic mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Most projects delivered within 7–14 business days.
        </motion.p>
      </div>
    </section>
  );
}
