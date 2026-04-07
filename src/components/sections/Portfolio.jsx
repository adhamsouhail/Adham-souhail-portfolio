'use client';
import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import { projects } from '@/data/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const pillIcons = { problem: 'warning', solution: 'lightning', result: 'chart' };
const pillColors = {
  problem: 'text-orange-600 bg-orange-50 border-orange-200',
  solution: 'text-blue-600 bg-blue-50 border-blue-200',
  result: 'text-green-600 bg-green-50 border-green-200',
};

export default function Portfolio() {
  return (
    <section id="work" className="section-padding bg-white">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
          <SectionHeader
            eyebrow="Selected Work"
            headline="Projects that moved the needle."
            subheadline="Real clients, real results. Here's how we solve design problems that matter."
            align="center"
          />
        </motion.div>

        <div className="divide-y divide-[#F0F0F0]">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const rotation = isEven ? 'rotate-[-2deg]' : 'rotate-[2deg]';

            return (
              <motion.div
                key={project.id}
                className="py-16 first:pt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}>
                  {/* Image Area */}
                  <div className="w-full lg:w-1/2">
                    <div className={`rounded-2xl overflow-hidden border border-[#EEEEEE] shadow-sm ${rotation}`}>
                      <img
                        src={project.imageSlot}
                        alt={project.title}
                        className="w-full h-72 md:h-80 object-cover"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden h-72 md:h-80 bg-[#F5F5F7] items-center justify-center">
                        <div className="text-center p-8">
                          <div
                            className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                            style={{ backgroundColor: project.accentColor + '20' }}
                          >
                            <Icon name="grid" className="w-10 h-10" style={{ color: project.accentColor }} />
                          </div>
                          <p className="text-sm text-muted font-medium">{project.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text Area */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-8' : 'lg:pr-8'}`}>
                    <Badge label={project.category} className="mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4 leading-tight">{project.title}</h3>

                    {/* PSR Pills */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {['problem', 'solution', 'result'].map((key) => (
                        <div key={key} className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border ${pillColors[key]}`}>
                          <Icon name={pillIcons[key]} className="w-3.5 h-3.5" />
                          {project[key]}
                        </div>
                      ))}
                    </div>

                    <p className="text-[15px] text-[#555] leading-relaxed mb-6">{project.description}</p>

                    <a href={`#${project.id}`} className="group inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                      View Full Case Study
                      <Icon name="arrow-right" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <motion.div
          className="mt-16 bg-[#F5F5F7] rounded-2xl py-16 px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-dark mb-3">Your project could be next.</h3>
          <p className="text-[#666] mb-8 max-w-md mx-auto">Let&apos;s build something you&apos;re proud to show off.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="filled" href="#contact" size="lg">Start a Project</Button>
            <Button variant="ghost" href="#contact" size="lg">Message Us</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
