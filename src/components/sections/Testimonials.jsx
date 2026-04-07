'use client';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { testimonials } from '@/data/testimonials';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={item}>
          <SectionHeader
            eyebrow="Client Stories"
            headline="Results our clients love to talk about."
            subheadline="Don't take our word for it. Here's what happens when design meets strategy."
            align="center"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
        >
          {testimonials.map((t) => (
            <motion.div key={t.id} variants={item}>
              <Card className="h-full relative overflow-hidden">
                {/* Decorative quote mark */}
                <div className="absolute -top-2 -left-2 text-[72px] leading-none text-accent opacity-10 font-serif select-none pointer-events-none">
                  &ldquo;
                </div>

                <div className="relative flex flex-col h-full gap-4">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Icon key={i} name="star" className="w-4 h-4 text-[#F5A623]" />
                    ))}
                  </div>

                  {/* Body */}
                  <p className="text-[15px] text-[#444] leading-[1.8] flex-1">{t.body}</p>

                  {/* Divider */}
                  <div className="w-full h-px bg-[#F0F0F0]" />

                  {/* Client */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accentLight border-2 border-white shadow-sm flex items-center justify-center text-sm font-bold text-accent flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark">{t.clientName}</p>
                      <p className="text-xs text-muted">{t.clientRole}, {t.clientCompany}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg font-semibold text-dark mb-6">Ready to be the next success story?</p>
          <Button variant="filled" href="#contact" size="lg">Start a Project</Button>
        </motion.div>
      </div>
    </section>
  );
}
