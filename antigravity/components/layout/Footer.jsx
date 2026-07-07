'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Instagram, Dribbble, Linkedin, Twitter, ArrowUpRight, Mail, MapPin } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const SOCIALS = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Dribbble, label: 'Dribbble', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter / X', href: '#' },
];

export default function Footer() {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const columnsRef = useRef([]);
  const dividerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 92%' },
        }
      );
      gsap.fromTo(
        columnsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 88%' },
        }
      );
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1, duration: 1.2, ease: 'expo.out',
          scrollTrigger: { trigger: dividerRef.current, start: 'top 95%' },
        }
      );
    },
    { scope: containerRef }
  );

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    let x = 0, raf;
    const speed = 0.4;
    const totalW = el.scrollWidth / 2;
    const tick = () => {
      x -= speed;
      if (Math.abs(x) >= totalW) x = 0;
      el.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const addToRefs = (el) => {
    if (el && !columnsRef.current.includes(el)) columnsRef.current.push(el);
  };

  return (
    <footer
      ref={containerRef}
      className="relative mt-32 overflow-hidden bg-[var(--void-1)]"
      style={{ color: 'var(--text-primary)' }}
    >
      {/* Top gradient bridge */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 -translate-y-full"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--void-1))' }}
      />

      {/* Ambient decorative blurs */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, rgba(80,70,229,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, rgba(0,196,170,0.3) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      {/* ── MARQUEE STRIP ── */}
      <div className="relative w-full overflow-hidden border-y py-4" style={{ borderColor: 'rgba(10,9,20,0.06)' }}>
        <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center">
              {[
                'Creative Direction', 'Visual Architecture', 'Interface Design',
                'Motion & Interaction', 'Brand Identity', '3D Experiences',
                'UI Engineering', 'Design Systems',
              ].map((word) => (
                <span key={word} className="mx-6 flex items-center gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--text-dim)' }}>
                    {word}
                  </span>
                  <span style={{ color: 'rgba(10,9,20,0.12)' }} className="text-[8px]">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 pt-20 pb-0">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">

          {/* Col 1: Brand */}
          <div ref={addToRefs} className="md:col-span-5 flex flex-col gap-8">
            <Link href="/" className="group relative inline-flex w-fit">
              <span
                className="font-display text-[64px] font-extrabold leading-none text-[var(--text-primary)]"
                style={{ letterSpacing: '-0.04em' }}
              >
                AG
              </span>
              <span
                className="absolute inset-0 -z-10 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20"
                style={{ background: 'var(--accent-primary)', transform: 'scale(1.6)' }}
              />
            </Link>

            <p className="font-body max-w-[300px] text-[15px] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
              Creative Director & Visual Architect — crafting interfaces that live between
              imagination and obsession.
            </p>

            {/* Email pill */}
            <a
              href="mailto:akcoder1102004@gmail.com"
              className="group inline-flex w-fit items-center gap-3 rounded-full border px-5 py-3 transition-all duration-300"
              style={{ borderColor: 'rgba(10,9,20,0.10)', background: 'rgba(10,9,20,0.03)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(80,70,229,0.3)';
                e.currentTarget.style.background = 'rgba(80,70,229,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10,9,20,0.10)';
                e.currentTarget.style.background = 'rgba(10,9,20,0.03)';
              }}
            >
              <Mail size={14} style={{ color: 'var(--text-dim)' }} />
              <span className="font-mono text-[12px] transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                akcoder1102004@gmail.com
              </span>
              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: 'var(--text-dim)' }}
              />
            </a>

            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin size={13} style={{ color: 'var(--text-dim)' }} />
              <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
                Mumbai, India
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div ref={addToRefs} className="md:col-span-3 flex flex-col gap-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: 'var(--text-dim)' }}>
              Navigation
            </span>
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex w-fit items-center gap-2 py-1.5 text-[15px] transition-all duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <span className="h-[1px] w-0 transition-all duration-300 group-hover:w-4" style={{ background: 'var(--accent-primary)' }} />
                  <span className="font-body">{label}</span>
                  <ArrowUpRight size={11} className="opacity-0 transition-all duration-300 group-hover:opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Status */}
          <div ref={addToRefs} className="md:col-span-4 flex flex-col gap-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: 'var(--text-dim)' }}>
              Status
            </span>

            <div
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{ border: '1px solid rgba(10,9,20,0.06)', background: 'rgba(10,9,20,0.02)' }}
            >
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: '#16a34a' }} />
                  <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#16a34a' }} />
                </span>
                <span className="font-mono text-[11px] tracking-wide" style={{ color: '#16a34a' }}>
                  Available for work
                </span>
              </div>
              <p className="font-body text-[13px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Open to new opportunities in Q3 2025. Let&apos;s build something extraordinary together.
              </p>
              <a
                href="/contact"
                className="group mt-1 inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-widest transition-colors duration-300"
                style={{ color: 'var(--accent-primary)' }}
              >
                Start a conversation
                <ArrowUpRight size={11} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300"
                  style={{ border: '1px solid rgba(10,9,20,0.08)', color: 'var(--text-dim)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(80,70,229,0.3)';
                    e.currentTarget.style.color = 'var(--accent-primary)';
                    e.currentTarget.style.background = 'rgba(80,70,229,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(10,9,20,0.08)';
                    e.currentTarget.style.color = 'var(--text-dim)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM ROW ── */}
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 mt-16">
        <div
          ref={dividerRef}
          className="w-full"
          style={{ height: '1px', background: 'rgba(10,9,20,0.06)' }}
        />

        {/* Copyright + Privacy/Terms row */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 pb-4 md:flex-row">
          <p className="font-mono text-[11px]" style={{ color: 'var(--text-dim)' }}>
            © 2025 Alex Guivera . Crafted with obsession.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 hover:text-[var(--text-primary)]" style={{ color: 'var(--text-dim)' }}>
              Privacy
            </Link>
            <span style={{ color: 'rgba(10,9,20,0.10)' }}>·</span>
            <Link href="/terms" className="font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 hover:text-[var(--text-primary)]" style={{ color: 'var(--text-dim)' }}>
              Terms
            </Link>
            <span style={{ color: 'rgba(10,9,20,0.10)' }}>·</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300"
              style={{ border: '1px solid rgba(10,9,20,0.08)', color: 'var(--text-dim)' }}
              aria-label="Scroll to top"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(80,70,229,0.3)';
                e.currentTarget.style.color = 'var(--accent-primary)';
                e.currentTarget.style.background = 'rgba(80,70,229,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10,9,20,0.08)';
                e.currentTarget.style.color = 'var(--text-dim)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 10V2M2 6l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          TheFutureDevs LOGO — Full-width watermark stamp at the base.
          On white theme: no invert, use multiply blend mode so the 
          dark logo naturally tints into the near-white footer.
      ══════════════════════════════════════════════════════════════ */}
  

    </footer>
  );
}
