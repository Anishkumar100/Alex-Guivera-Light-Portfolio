'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Utility for auto-resizing textarea
const AutoResizeTextarea = ({ value, onChange, placeholder, id }) => {
  return (
    <div className="relative w-full">
      <textarea
        id={id}
        value={value}
        onChange={(e) => {
          e.target.style.height = 'auto';
          e.target.style.height = e.target.scrollHeight + 'px';
          onChange(e);
        }}
        placeholder={placeholder}
        rows={1}
        className="w-full resize-none border-b border-[rgba(10,9,20,0.1)] bg-transparent py-4 font-body text-[1.125rem] text-[var(--text-primary)] transition-colors duration-300 placeholder:text-text-dim focus:border-white focus:outline-none md:text-[1.25rem]"
      />
    </div>
  );
};

// Custom minimal floating label input
const MinimalInput = ({ id, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border-b border-[rgba(10,9,20,0.1)] bg-transparent py-4 font-body text-[1.125rem] text-[var(--text-primary)] transition-colors duration-300 placeholder:text-text-dim focus:border-white focus:outline-none md:text-[1.25rem]"
      />
    </div>
  );
};

// Pill selection group
const PillGroup = ({ label, options, selected, onChange }) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-mono text-[11px] uppercase tracking-widest text-text-secondary">{label}</span>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-all duration-300 md:px-6 md:py-2.5 md:text-[12px] ${selected === opt //check this
              ? 'border-white bg-[rgba(80,70,229,0.06)] text-[var(--text-primary)]'
              : 'border-[rgba(10,9,20,0.08)] text-text-dim hover:border-[rgba(10,9,20,0.1)] hover:text-[var(--text-primary)]'
              }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    timeline: '',
    budget: '',
    details: ''
  });

  const [formState, setFormState] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return; // Simple validation prevention

    setFormState('loading');

    // Build mailto link with form data
    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTimeline: ${formData.timeline}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.details}`
    );

    // Open mail client
    window.open(`mailto:akcoder1102004@gmail.com?subject=${subject}&body=${body}`, '_self');

    setTimeout(() => {
      setFormState('success');
      setTimeout(() => {
        setFormData({ name: '', email: '', timeline: '', budget: '', details: '' });
        setFormState('idle');
      }, 3000);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("akcoder1102004@gmail.com");
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center pt-32 pb-20 px-4 sm:px-6 md:px-12">

      {/* Minimal Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(10,9,20,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(10,9,20,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_10%,transparent_100%)] opacity-30" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">

        {/* Left Column: Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-start"
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-secondary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-secondary"></span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-text-dim">
              Accepting Projects for Q4
            </span>
          </div>

          <h1 className="mb-8 font-display text-[clamp(2.5rem,6vw,6rem)] font-extrabold leading-[1] tracking-tight text-[var(--text-primary)]">
            Let's build <br />
            <span className="text-text-secondary">something.</span>
          </h1>

          <p className="mb-16 max-w-md font-body text-[1.125rem] font-light leading-relaxed text-text-secondary">
            No endless sales pipelines. You speak directly with the design engineers building your product. Drop us a brief, and we'll get back to you within 24 hours.
          </p>

          <div className="mt-auto flex flex-col gap-10">
            <div>
              <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">Direct Email</span>
              <button
                onClick={handleCopyEmail}
                className="group flex items-center gap-4 text-left font-display text-[1.25rem] font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--text-primary)]/60 md:text-[1.5rem]"
              >
                akcoder1102004@gmail.com
                <span className="font-mono text-[10px] uppercase tracking-widest text-text-dim opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  (Copy)
                </span>
              </button>
            </div>

            <div>
              <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">Socials</span>
              <div className="flex gap-6">
                {['X / Twitter', 'LinkedIn', 'Dribbble'].map((social) => (
                  <a key={social} href="#" className="font-body text-[1rem] text-[var(--text-primary)] transition-colors hover:text-accent-primary">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[rgba(10,9,20,0.05)]">
              <span className="font-mono text-[11px] text-text-dim uppercase tracking-[0.1em]">
                Based in New York // EST (GMT-5)
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: The Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex w-full flex-col justify-center"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 rounded-[var(--radius-xl)] bg-void-1 p-6 shadow-2xl border border-[rgba(10,9,20,0.03)] md:gap-10 md:p-12">

            <div className="flex flex-col gap-8 md:flex-row md:gap-6">
              <MinimalInput
                id="name"
                placeholder="What's your name?"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
              <MinimalInput
                id="email"
                type="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <PillGroup
              label="Estimated Timeline"
              options={["ASAP", "1-3 Months", "3+ Months"]}
              selected={formData.timeline}
              onChange={v => setFormData({ ...formData, timeline: v })}
            />

            <PillGroup
              label="Project Budget (USD)"
              options={["$10k-$25k", "$25k-$50k", "$50k+"]}
              selected={formData.budget}
              onChange={v => setFormData({ ...formData, budget: v })}
            />

            <div className="pt-2">
              <AutoResizeTextarea
                id="details"
                placeholder="Tell us about your project..."
                value={formData.details}
                onChange={e => setFormData({ ...formData, details: e.target.value })}
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                disabled={formState !== 'idle' || !formData.name || !formData.email}
                className="group relative flex w-full items-center justify-center overflow-hidden rounded-full border border-[rgba(10,9,20,0.1)] bg-[rgba(10,9,20,0.03)] py-5 font-mono text-[12px] uppercase tracking-widest text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-[rgba(10,9,20,0.1)] disabled:hover:bg-[rgba(10,9,20,0.03)] disabled:hover:text-[var(--text-primary)]"
              >
                <AnimatePresence mode="wait">
                  {formState === 'idle' && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      Initialize Link
                    </motion.span>
                  )}
                  {formState === 'loading' && (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 text-accent-primary group-hover:text-void"
                    >
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-25" />
                        <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor" />
                      </svg>
                      Transmitting...
                    </motion.span>
                  )}
                  {formState === 'success' && (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-accent-secondary group-hover:text-void"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Message Received
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
