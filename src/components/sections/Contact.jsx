'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { meta } from '@/data/meta';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const initialForm = { name: '', email: '', projectType: '', budget: '', message: '' };

function Field({ id, label, type = 'text', as = 'input', options, value, error, onChange }) {
  return (
    <div className={`floating-label-group${error ? ' has-error' : ''}`}>
      {as === 'input' && (
        <input
          id={id}
          type={type}
          placeholder=" "
          value={value}
          onChange={onChange}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
        />
      )}
      {as === 'select' && (
        <select
          id={id}
          value={value}
          onChange={onChange}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
        >
          <option value="" />
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      )}
      {as === 'textarea' && (
        <textarea
          id={id}
          rows={5}
          placeholder=" "
          value={value}
          onChange={onChange}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
        />
      )}
      <label htmlFor={id}>{label}</label>
      {error && (
        <p id={`${id}-error`} className="error-message" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const setField = (id) => (ev) => {
    setForm((f) => ({ ...f, [id]: ev.target.value }));
    setErrors((e) => ({ ...e, [id]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.projectType) e.projectType = 'Please select a project type';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
  };

  const waLink = `https://wa.me/${meta.whatsappNumber.replace(/\D/g, '')}?text=Hi%2C%20I'd%20like%20to%20discuss%20a%20project`;

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left column */}
          <motion.div
            className="w-full lg:w-[48%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-accent block mb-3"
            >
              Get in Touch
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-dark mb-5 leading-tight"
            >
              Let&apos;s talk about your project.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-[15px] text-[#555] leading-relaxed mb-8">
              Have a project in mind? Send us a message and we&apos;ll get back to you within 24 hours.
              No sales pitch — just an honest conversation about what you need.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accentLight flex items-center justify-center flex-shrink-0">
                  <Icon name="mail" className="w-4 h-4 text-accent" />
                </div>
                <a
                  href={`mailto:${meta.email}`}
                  className="text-sm font-medium text-dark hover:text-accent transition-colors"
                >
                  {meta.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accentLight flex items-center justify-center flex-shrink-0">
                  <Icon name="whatsapp" className="w-4 h-4 text-accent" />
                </div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-dark hover:text-accent transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accentLight flex items-center justify-center flex-shrink-0">
                  <Icon name="location-pin" className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm font-medium text-dark">{meta.location}</span>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              {Object.entries(meta.socialLinks).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 rounded-full bg-[#F5F5F7] flex items-center justify-center text-muted hover:text-accent hover:bg-accentLight hover:scale-110 transition-all duration-200"
                >
                  <Icon name={name} className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — Form */}
          <motion.div
            className="w-full lg:w-[52%]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white border border-[#EEEEEE] rounded-[20px] p-8 md:p-10 shadow-sm">
              {success ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Icon name="checkmark" className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">Message sent!</h3>
                  <p className="text-[#666] text-sm">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <Field id="name" label="Your Name" value={form.name} error={errors.name} onChange={setField('name')} />
                  <Field id="email" label="Email Address" type="email" value={form.email} error={errors.email} onChange={setField('email')} />
                  <Field
                    id="projectType"
                    label="Project Type"
                    as="select"
                    value={form.projectType}
                    error={errors.projectType}
                    onChange={setField('projectType')}
                    options={['UI/UX Design', 'Brand Identity', 'Social Media Design', 'Motion Design', 'Presentation Design', 'Other']}
                  />
                  <Field
                    id="budget"
                    label="Budget Range"
                    as="select"
                    value={form.budget}
                    error={errors.budget}
                    onChange={setField('budget')}
                    options={['Under $500', '$500 – $1,500', '$1,500 – $5,000', '$5,000+']}
                  />
                  <Field
                    id="message"
                    label="Tell us about your project"
                    as="textarea"
                    value={form.message}
                    error={errors.message}
                    onChange={setField('message')}
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent text-white font-semibold text-sm py-4 rounded-btn hover:bg-accentDark transition-colors duration-150 disabled:opacity-60 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message →'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
