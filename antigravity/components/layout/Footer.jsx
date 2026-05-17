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
      className="relative mt-32 overflow-hidden bg-[#080808]"
      style={{ color: '#e8e8e8' }}
    >
      {/* Top gradient bridge */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 -translate-y-full"
        style={{ background: 'linear-gradient(to bottom, transparent, #080808)' }}
      />

      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      {/* ── MARQUEE STRIP ── */}
      <div className="relative w-full overflow-hidden border-y border-white/[0.06] py-4">
        <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center">
              {[
                'Creative Direction', 'Visual Architecture', 'Interface Design',
                'Motion & Interaction', 'Brand Identity', '3D Experiences',
                'UI Engineering', 'Design Systems',
              ].map((word) => (
                <span key={word} className="mx-6 flex items-center gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.25)' }}>
                    {word}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.12)' }} className="text-[8px]">✦</span>
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
                className="font-display text-[64px] font-extrabold leading-none text-white"
                style={{ letterSpacing: '-0.04em' }}
              >
                AG
              </span>
              <span
                className="absolute inset-0 -z-10 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30"
                style={{ background: '#ffffff', transform: 'scale(1.6)' }}
              />
            </Link>

            <p className="font-body max-w-[300px] text-[15px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.42)' }}>
              Creative Director & Visual Architect — crafting interfaces that live between
              imagination and obsession.
            </p>

            {/* Email pill */}
            <a
              href="mailto:akcoder1102004@gmail.com"
              className="group inline-flex w-fit items-center gap-3 rounded-full border px-5 py-3 transition-all duration-300"
              style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              }}
            >
              <Mail size={14} style={{ color: 'rgba(255,255,255,0.5)' }} />
              <span className="font-mono text-[12px] text-white/60 transition-colors duration-300 group-hover:text-white">
                akcoder1102004@gmail.com
              </span>
              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              />
            </a>

            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin size={13} style={{ color: 'rgba(255,255,255,0.25)' }} />
              <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.25)' }}>
                Mumbai, India
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div ref={addToRefs} className="md:col-span-3 flex flex-col gap-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Navigation
            </span>
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex w-fit items-center gap-2 py-1.5 text-[15px] transition-all duration-300"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; }}
                >
                  <span className="h-[1px] w-0 transition-all duration-300 group-hover:w-4" style={{ background: 'rgba(255,255,255,0.6)' }} />
                  <span className="font-body">{label}</span>
                  <ArrowUpRight size={11} className="opacity-0 transition-all duration-300 group-hover:opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Status */}
          <div ref={addToRefs} className="md:col-span-4 flex flex-col gap-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Status
            </span>

            <div
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: '#4ade80' }} />
                  <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#4ade80' }} />
                </span>
                <span className="font-mono text-[11px] tracking-wide" style={{ color: '#4ade80' }}>
                  Available for work
                </span>
              </div>
              <p className="font-body text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Open to new opportunities in Q3 2025. Let&apos;s build something extraordinary together.
              </p>
              <a
                href="/contact"
                className="group mt-1 inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-white/50 transition-colors duration-300 hover:text-white"
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
                  style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.35)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.35)';
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
          style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }}
        />

        {/* Copyright + Privacy/Terms row */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 pb-4 md:flex-row">
          <p className="font-mono text-[11px]" style={{ color: 'rgba(255,255,255,0.18)' }}>
            © 2025 Alex Guivera . Crafted with obsession.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 hover:text-white" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Privacy
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
            <Link href="/terms" className="font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 hover:text-white" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Terms
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.35)' }}
              aria-label="Scroll to top"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.35)';
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
          The logo sits edge-to-edge, rendered LARGE so it reads like
          a brand stamp. White silhouette blending into the dark footer.
          - brightness(0) invert(1)  → forces pure white regardless of
            the original logo colour (works for any PNG/SVG/JPG)
          - mix-blend-mode: overlay  → the white blends with the dark
            background naturally — brighter where lighter, invisible
            where matching the bg, creating that "etched into" effect
          - mask-image gradient       → fades the logo out at top and
            sides so it melts into the footer seamlessly
      ══════════════════════════════════════════════════════════════ */}
      <a
        href="https://thefuturedevs.in"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="A template by TheFutureDevs"
        className="group relative block w-full overflow-hidden"
        style={{ marginTop: '8px' }}
      >
        {/* "A template by" label — centered above the logo */}
        <p
          className="text-center font-mono text-[9px] uppercase tracking-[0.3em] pb-3 transition-colors duration-500"
          style={{ color: 'rgba(255,255,255,0.12)' }}
        >
          A template by
        </p>

        {/* The logo image */}
        <div
          className="relative w-full flex items-end justify-center transition-all duration-700 group-hover:opacity-100"
          style={{
            // Fade the top and sides of the whole block into the bg
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 35%, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 35%, black 80%, transparent 100%)',
            opacity: 0.55,
          }}
        >
          <img
            src="/logo.png"
            alt="TheFutureDevs"
            width={900}
            height={200}
            className="w-full max-w-[900px] h-auto object-contain object-center transition-all duration-700"
            style={{
              // Strip all original colour → white silhouette
              filter: 'invert(1)',
              // Overlay blend mode: white on near-black (#080808) renders as
              // a visible-but-integrated tone — exactly the blended stamp look
              mixBlendMode: 'overlay',
              // Generous padding bottom so the gradient mask clips the bottom
              paddingBottom: '2rem',
            }}
            onError={(e) => {
              // Fallback: giant wordmark if logo.png is absent
              e.currentTarget.style.display = 'none';
              const fb = e.currentTarget.nextElementSibling;
              if (fb) fb.style.display = 'flex';
            }}
          />

          {/* Wordmark fallback */}
          <div
            className="w-full items-center justify-center pb-8"
            style={{
              display: 'none',
              filter: 'brightness(0) invert(1)',
              mixBlendMode: 'overlay',
            }}
          >
            <span
              className="font-display font-extrabold text-white select-none"
              style={{ fontSize: 'clamp(48px, 10vw, 140px)', letterSpacing: '-0.04em', lineHeight: 1 }}
            >
              TheFutureDevs
            </span>
          </div>
        </div>
      </a>

    </footer>
  );
}