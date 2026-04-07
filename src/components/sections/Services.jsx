'use client';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={item}>
          <SectionHeader
            eyebrow="What We Do"
            headline="Every service designed to grow your business."
            subheadline="From concept to conversion — we cover every visual touchpoint that matters."
            align="center"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={item}>
              <Card className="h-full">
                <div className="flex flex-col gap-4 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accentLight flex items-center justify-center">
                    <Icon name={service.icon} className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">{service.title}</h3>
                  <p className="text-sm font-semibold text-[#555]">{service.headline}</p>
                  <p className="text-[15px] text-[#666] leading-relaxed flex-1">{service.description}</p>
                  <a href="#work" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent mt-2">
                    {service.linkLabel}
                    <Icon name="arrow-right" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button variant="ghost" href="#contact" size="lg">
            Start a Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
