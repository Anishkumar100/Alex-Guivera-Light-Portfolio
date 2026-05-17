'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const FAQS = [
  {
    question: "Do you take on short-term freelance work or just long-term projects?",
    answer: "My focus is entirely on comprehensive, high-impact projects. I don't do hourly freelance work or isolated minor updates. I partner with founders and teams to build brand ecosystems from the ground up or execute massive overhauls."
  },
  {
    question: "What is your typical turnaround time?",
    answer: "For a standard Brand Identity and UI/UX project, my timeline is strictly locked at 30 days. No scope creep, no endless revisions. We move fast, with precision and absolute intentionality."
  },
  {
    question: "Do you develop the websites you design?",
    answer: "Yes. I am a hybrid designer-engineer. If the project requires a digital presence, I not only architect the visuals but also build the high-performance Next.js/WebGL frontend to ensure zero drop-off in execution."
  },
  {
    question: "Why don't you use templates or UI kits?",
    answer: "Because templates are the enemy of distinction. If your digital presence looks like your competitors, you are already losing. I build bespoke systems rooted in your specific strategic requirements."
  },
  {
    question: "What does the payment structure look like?",
    answer: "A 50% retainer is required to lock in your project schedule. The remaining 50% is due immediately prior to the final handoff and code repository transfer."
  }
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-[rgba(255,255,255,0.05)]">
      <button
        onClick={onClick}
        className="group flex w-full items-center justify-between py-8 text-left transition-colors"
      >
        <h3 className={`font-display text-[1.25rem] md:text-[1.5rem] font-bold tracking-tight transition-colors duration-300 group-hover:text-white ${isOpen ? 'text-accent-secondary' : 'text-text-primary'}`}>
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${isOpen ? 'border-accent-secondary text-accent-secondary' : 'border-[rgba(255,255,255,0.1)] text-text-dim group-hover:border-[rgba(255,255,255,0.3)] group-hover:text-white'}`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pb-8 pr-8 md:pr-16">
              <p className="font-body text-[1.125rem] font-light leading-relaxed text-text-secondary">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative w-full py-32">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-6 md:flex-row md:gap-24 md:px-12">
        
        {/* Left Side: Header */}
        <div className="flex w-full flex-col md:w-1/3">
          <span className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-accent-secondary">
            Clear the Air
          </span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight text-white">
            FAQ
          </h2>
          <p className="mt-6 font-body text-[1.125rem] font-light text-text-secondary">
            No vague answers. Just the exact parameters of how I operate.
          </p>
        </div>

        {/* Right Side: Accordions */}
        <div className="flex w-full flex-col md:w-2/3">
          <div className="flex flex-col border-t border-[rgba(255,255,255,0.05)]">
            {FAQS.map((faq, idx) => (
              <FAQItem 
                key={idx} 
                faq={faq} 
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
