'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 40);
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${isScrolled
            ? 'py-3 bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border-b border-[rgba(10,9,20,0.08)] shadow-[var(--shadow-md)]'
            : 'py-6 bg-transparent'
          }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(10,9,20,0.08)] bg-[rgba(10,9,20,0.03)] transition-all duration-300 group-hover:border-[rgba(10,9,20,0.15)] group-hover:bg-[rgba(10,9,20,0.06)]">
            <span className="font-display text-[14px] font-extrabold text-[var(--accent-primary)] tracking-tight">AG</span>
          </div>
          <span className="hidden sm:block font-display text-[14px] font-bold text-[var(--text-secondary)] tracking-wider uppercase">
            Alex Guivera
          </span>
        </Link>

        {/* Desktop Links — Centered */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-[rgba(10,9,20,0.06)] bg-[rgba(255,255,255,0.60)] px-2 py-1.5 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative px-4 py-1.5 font-body text-[13px] font-medium tracking-wide rounded-full transition-colors duration-300 ${isActive ? 'text-[var(--accent-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-[rgba(80,70,229,0.08)] border border-[rgba(80,70,229,0.12)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Right side — CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:block">
            <button className="group relative overflow-hidden rounded-full border-2 border-[var(--accent-primary)] bg-transparent px-5 py-2 font-body text-[13px] font-semibold text-[var(--accent-primary)] transition-all duration-300 hover:bg-[var(--accent-primary)] hover:text-white hover:shadow-[var(--shadow-accent)]">
              <span className="relative z-10">Let's Talk</span>
            </button>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="relative z-[101] flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="h-[1.5px] w-5 bg-[var(--text-primary)] rounded-full origin-center"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="h-[1.5px] w-5 bg-[var(--text-primary)] rounded-full"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="h-[1.5px] w-5 bg-[var(--text-primary)] rounded-full origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[95] flex flex-col items-center justify-center bg-[rgba(248,247,255,0.98)] backdrop-blur-xl"
          >
            <div className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-display text-[2.5rem] sm:text-[3rem] font-bold tracking-tight transition-colors ${isActive ? 'text-[var(--accent-primary)]' : 'text-[var(--text-dim)] hover:text-[var(--text-primary)]'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="rounded-full bg-[var(--accent-primary)] px-8 py-3 font-display text-[1rem] font-bold text-white shadow-[var(--shadow-accent)]">
                  Let's Talk
                </button>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 font-mono text-[11px] text-[var(--text-dim)] tracking-widest uppercase"
            >
              hello@antigravity.io
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
