'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { meta } from '@/data/meta';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function CallToAction() {
  const waLink = `https://wa.me/${meta.whatsappNumber.replace(/\D/g, '')}?text=Hi%2C%20I'd%20like%20to%20discuss%20a%20project`;

  return (
    <section className="relative overflow-hidden bg-accent py-24 md:py-28">
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white opacity-[0.04]" />
      <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-white opacity-[0.04]" />

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-[680px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 block mb-4"
          >
            Ready to Begin?
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.1] mb-5"
          >
            Let&apos;s build something you&apos;re proud of.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-[19px] text-white/80 max-w-[560px] mx-auto leading-relaxed mb-10"
          >
            Whether you&apos;re starting from scratch or leveling up an existing brand — we&apos;re ready
            to help you design for growth.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-6"
          >
            <Button variant="white" href="#contact" size="lg">
              Start a Project
            </Button>
            <Button
              variant="whiteGhost"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Message on WhatsApp
            </Button>
          </motion.div>

          <motion.p variants={fadeUp} className="text-sm text-white/60">
            Fast response · No long contracts · Let&apos;s just talk.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
