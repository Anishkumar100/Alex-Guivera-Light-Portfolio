# ANTIGRAVITY — Designer Portfolio: Complete Build Specification



## 0. NORTH STAR

You are building `ANTIGRAVITY` — a 6-page dark designer portfolio website that feels like it was made by the best creative studio on the planet. Every element must feel intentional, every animation must feel earned. The aesthetic is: **deep void darkness, electric accents, typographic brutalism, and physics-defying motion**. When someone opens this site, their jaw drops. That is the only acceptable outcome.

---

## 1. TECH STACK (EXACT, NON-NEGOTIABLE)

```
Framework:        Next.js 14+ (App Router, JavaScript with .jsx files — NO TypeScript)
Styling:          Tailwind CSS v3 + CSS Variables
Animations:       Framer Motion (motion/react) + GSAP + GSAP ScrollTrigger
Components:       shadcn/ui (base) + Aceternity UI + React Bits
3D Background:    Three.js (as shown in the provided DottedSurface component)
Fonts:            next/font (Google Fonts + local)
Icons:            Lucide React
Smooth Scroll:    Lenis
Page Trans:       Framer Motion AnimatePresence
Cursor:           Custom (React Bits BlobCursor or SplashCursor)
```

### Install commands:
```bash
npx create-next-app@latest antigravity --javascript --tailwind --app --no-src-dir
npx shadcn@latest init
npx shadcn@latest add @react-bits/Aurora-JS-TW
npx shadcn@latest add @react-bits/BlurText-JS-TW
npx shadcn@latest add @react-bits/SplitText-JS-TW
npx shadcn@latest add @react-bits/GradientText-JS-TW
npx shadcn@latest add @react-bits/AnimatedContent-JS-TW
npx shadcn@latest add @react-bits/TiltedCard-JS-TW
npx shadcn@latest add @react-bits/Antigravity-JS-TW
npx shadcn@latest add @react-bits/MagnetLines-JS-TW
npm install motion gsap @gsap/react lenis three
npm install lucide-react
```

> **Important:** All files use `.jsx` extension. No `.ts` or `.tsx` files anywhere in the project. Do not install or configure TypeScript. Remove `tsconfig.json` if auto-generated.

---

## 2. DESIGN TOKENS

### 2.1 Color System

```css
/* globals.css */
:root {
  /* Core Void */
  --void:        #050507;
  --void-1:      #090910;
  --void-2:      #0f0f18;
  --void-3:      #16161f;

  /* Accent — Electric Indigo → Acid Cyan gradient system */
  --accent-primary:   #6C63FF;   /* electric indigo */
  --accent-secondary: #00F5D4;   /* acid cyan       */
  --accent-hot:       #FF3CAC;   /* magenta burst   */
  --accent-warm:      #FFB703;   /* solar amber     */

  /* Typography */
  --text-primary:     #F0EEF8;   /* off-white with blue tint */
  --text-secondary:   #8B8BA7;   /* muted lavender-gray      */
  --text-dim:         #3D3D52;   /* very dim, barely visible */

  /* Surfaces */
  --surface-glass:    rgba(255,255,255,0.03);
  --surface-card:     rgba(255,255,255,0.05);
  --border-subtle:    rgba(255,255,255,0.06);
  --border-glow:      rgba(108, 99, 255, 0.3);

  /* Glow effects */
  --glow-primary:     0 0 60px rgba(108,99,255,0.25), 0 0 120px rgba(108,99,255,0.1);
  --glow-secondary:   0 0 60px rgba(0,245,212,0.2),  0 0 120px rgba(0,245,212,0.08);
  --glow-hot:         0 0 60px rgba(255,60,172,0.2),  0 0 120px rgba(255,60,172,0.08);
}
```

### 2.2 Typography

```css
/* Font stack — install via next/font */

/* Display: Syne (heavy, geometric, award-winning) */
--font-display: 'Syne', sans-serif;         /* weights: 700, 800 */

/* Body: DM Sans (clean, modern, humanist) */
--font-body: 'DM Sans', sans-serif;         /* weights: 300, 400, 500 */

/* Mono / Label: JetBrains Mono */
--font-mono: 'JetBrains Mono', monospace;   /* weight: 400 */

/* Accent Headlines: Space Grotesk — use SPARINGLY, only for giant numbers/labels */
--font-accent: 'Space Grotesk', sans-serif; /* weight: 700 */
```

```css
/* Type Scale */
--text-xs:    0.75rem;    /* 12px — labels, captions */
--text-sm:    0.875rem;   /* 14px — body small */
--text-base:  1rem;       /* 16px — body */
--text-lg:    1.125rem;   /* 18px */
--text-xl:    1.25rem;    /* 20px */
--text-2xl:   1.5rem;     /* 24px */
--text-3xl:   1.875rem;   /* 30px */
--text-4xl:   2.25rem;    /* 36px */
--text-5xl:   3rem;       /* 48px */
--text-6xl:   3.75rem;    /* 60px */
--text-7xl:   4.5rem;     /* 72px — section headers */
--text-8xl:   6rem;       /* 96px — hero text */
--text-9xl:   8rem;       /* 128px — display / giant text */
--text-display: clamp(5rem, 12vw, 12rem); /* fluid hero */
```

### 2.3 Spacing & Layout

```css
/* Use 8-point grid exclusively */
--space-1:   0.5rem;    /* 8px */
--space-2:   1rem;      /* 16px */
--space-3:   1.5rem;    /* 24px */
--space-4:   2rem;      /* 32px */
--space-6:   3rem;      /* 48px */
--space-8:   4rem;      /* 64px */
--space-12:  6rem;      /* 96px */
--space-16:  8rem;      /* 128px */
--space-24: 12rem;      /* 192px */

/* Sections: min 100vh, padding top/bottom var(--space-16) on desktop */
--section-padding: clamp(4rem, 8vw, 8rem);

/* Container: max 1400px, px-6 on mobile, px-12 on desktop */
--container-max: 1400px;

/* Border radius */
--radius-sm:  4px;
--radius-md:  8px;
--radius-lg:  16px;
--radius-xl:  24px;
--radius-full: 9999px;
```

---

## 3. GLOBAL SYSTEMS

### 3.1 Custom Cursor

Use React Bits `SplashCursor` on desktop. On mobile, disable entirely.

```jsx
// components/cursor/SplashCursor.jsx
// Copy from: npx shadcn@latest add @react-bits/SplashCursor-JS-TW
// Color: var(--accent-primary)
// Size: 40px idle, 60px hover
// Mix-blend-mode: difference on dark, normal elsewhere
```

### 3.2 Lenis Smooth Scroll

```jsx
// app/providers/LenisProvider.jsx
'use client';
import Lenis from 'lenis';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

### 3.3 Page Transition System

```jsx
// components/transitions/PageTransition.jsx
'use client';
import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';

const variants = {
  initial: { opacity: 0, y: 20, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  },
  exit: { opacity: 0, y: -20, filter: 'blur(8px)',
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  },
};

// Also: black overlay wipe that slides across screen (GSAP clip-path)
// Duration: 0.8s in, 0.8s out per navigation event
```

### 3.4 The DottedSurface Background

Use the exact `DottedSurface` component from the provided code as the global background layer on every page. Place it in the root layout.

```jsx
// app/layout.jsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <DottedSurface />       {/* fixed, -z-10, full viewport */}
        <SplashCursor />        {/* global custom cursor */}
        <Navbar />
        <LenisProvider>
          <PageTransition>
            {children}
          </PageTransition>
        </LenisProvider>
        <Footer />
      </body>
    </html>
  );
}
```

Modify DottedSurface dot colors:
- Dark: `rgba(108, 99, 255, 0.4)` — glowing indigo dots
- Wave amplitude: increase to 80, speed: 0.08
- Particle size: 6px, opacity: 0.6

### 3.5 Magnetic Button System

Every primary CTA uses a magnetic hover effect:

```jsx
// components/ui/MagneticButton.jsx
// On mouse proximity (within 80px), element follows cursor with spring physics
// Framer Motion: useMotionValue x/y + spring (stiffness:150, damping:15)
// Scale: 1.05 on hover, border glows with box-shadow var(--glow-primary)
```

### 3.6 GSAP ScrollTrigger Presets

Define these reusable reveal animations:

```js
// lib/gsap-presets.js
export const revealFromBottom = {
  from: { y: 80, opacity: 0, filter: 'blur(4px)' },
  to: { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out' },
};

export const revealFromLeft = {
  from: { x: -60, opacity: 0 },
  to: { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
};

export const staggerChildren = (stagger = 0.12) => ({
  from: { y: 60, opacity: 0 },
  to: { y: 0, opacity: 1, stagger, duration: 0.7, ease: 'power2.out' },
});
```

---

## 4. NAVBAR

**Style:** Floating pill, centered, backdrop-blur, appears on scroll past 60px, hides on scroll down, shows on scroll up.

```
Position:     Fixed, centered horizontally, top: 1.5rem, z-index: 100
Width:        auto (wraps content), max-width: 700px
Background:   rgba(9,9,16,0.8) + backdrop-filter: blur(24px) saturate(180%)
Border:       1px solid var(--border-subtle)
Border-radius: var(--radius-full)
Padding:      0.5rem 1.5rem
Shadow:       var(--glow-primary) at 30% opacity

Links:        Home | About | Services | Projects | Contact
Font:         var(--font-body), 14px, weight 500, letter-spacing: 0.04em
Active state: text-[var(--accent-secondary)] + small dot indicator below

CTA Button:   "Let's Talk" — gradient border, text glow on hover
Logo:         Left of links — "AG" in Syne 800, color: var(--accent-primary)

Mobile:       Hamburger (3 lines → X morph via Framer Motion)
              Full-screen overlay menu with staggered link reveals
              Background: var(--void) 98% opacity
```

**Behavior:**
- Entry animation: slide down from -60px on mount, opacity 0→1, duration 0.6s
- Scroll behavior: `useScroll` + `useMotionValueEvent` to detect direction
- Active link: uses `usePathname()` from next/navigation

---

## 5. FOOTER

```
Background:   var(--void-1) with top gradient fade from transparent
Height:       400px
Layout:       3-column grid (logo+tagline | nav links | contact info)

Bottom row:   "© 2025 [Designer Name]. Crafted with obsession."
              Right: Social icons (Instagram, Behance, Dribbble, LinkedIn)
              Font: JetBrains Mono, 12px, var(--text-dim)

Easter egg:   Hovering the logo triggers a tiny ReactBits Aurora burst
Animation:    Footer slides up via ScrollTrigger when it enters viewport
              Each column: staggered reveal, 0.1s apart
```

---

## 6. PAGE STRUCTURE

Each page has exactly 8 content sections (excluding Navbar and Footer). Below is the full specification.

---

## 7. HOME PAGE (`/`)

### Section 1 — HERO: "Gravity Defied"

**Concept:** Giant kinetic typography. The word **"DESIGN"** floats in enormous text, letter by letter, using ReactBits Antigravity effect. Letters fall and bounce with simulated physics on page load.

```
Layout:       Full viewport (100vh), centered
Background:   DottedSurface (global) + Aceternity SpotlightNew pointing from top-left

Main headline:
  - "DESIGN THAT" — Syne 800, clamp(4rem, 10vw, 9rem), var(--text-primary)
  - "DEFIES GRAVITY" — same size, but each word in:
      "DEFIES" → var(--accent-primary)
      "GRAVITY" → var(--accent-secondary)
  - ReactBits SplitText on "DEFIES GRAVITY": chars animate in with blur + y-translate

Subtitle:
  "Creative Director & Visual Architect — crafting interfaces
   that live between imagination and obsession."
  Font: DM Sans 300, clamp(1rem, 2vw, 1.25rem), var(--text-secondary)
  ReactBits BlurText animation: word by word, 80ms delay

CTAs:
  Left: MagneticButton "View Work →"  (gradient bg: accent-primary→accent-secondary)
  Right: MagneticButton "About Me"    (ghost, border: var(--border-glow))

Bottom-left:  Vertical text "SCROLL TO EXPLORE" in JetBrains Mono 11px,
              with animated arrow bouncing downward

Bottom-right: Floating availability badge
              "● Available for Projects" — green pulse dot, glass card

Scroll indicator: Aceternity TracingBeam starts here, runs through page
```

**Animations:**
1. Page load: black overlay splits vertically (clip-path), reveals hero
2. Letters of "DEFIES GRAVITY" use ReactBits SplitText with stagger 40ms
3. Antigravity effect active on hero section — dots respond to cursor
4. Subtle parallax: headline moves at 0.2× scroll speed (GSAP ScrollTrigger)

---

### Section 2 — MARQUEE: Skills Tape

**Concept:** Infinitely scrolling horizontal ticker tape with skill tags. Two rows: top scrolls right, bottom scrolls left.

```
Height:       120px, overflow hidden
Background:   var(--void-2), full bleed edge-to-edge
Border:       top + bottom: 1px solid var(--border-subtle)

Row 1 (→): Brand Identity · Motion Design · UI/UX · Art Direction
           3D Visualization · Typography · Product Design · Prototyping
Row 2 (←): Figma · After Effects · Blender · Cinema 4D
           Framer · Webflow · React · Next.js

Style: Each item = pill shape, var(--surface-glass), 1px border var(--border-subtle)
       Font: Syne 700, 1rem, var(--text-secondary), letter-spacing 0.08em
       On hover: background glows to var(--accent-primary) 20%, text → white

Speed: Row 1: 40s loop, Row 2: 50s loop (Framer Motion x translate animation)
Pause on hover: both rows
```

---

### Section 3 — SELECTED WORK PREVIEW: "What I've Made"

**Concept:** 3 featured projects as giant, tilted, overlapping cards. ReactBits TiltedCard with Aceternity 3D Card Effect hybrid.

```
Layout:       Asymmetric — 2/3 left large card + 2 stacked right cards
Background:   Clean void with subtle Aceternity Grid and Dot Background overlay

Card 1 (large):
  Size:       600×420px
  Content:    Project thumbnail (dark placeholder with color overlay)
              Project name in Syne 800, 2rem, on hover → large 4rem
  Hover:      ReactBits TiltedCard rotate ±12deg + Aceternity Card Spotlight

Card 2 + 3 (small, stacked right):
  Size:       380×260px each, slight gap

Each card:
  Badge:      Year + Category in JetBrains Mono 11px
  CTA:        "View Project →" slides up from bottom on hover (clip-path reveal)
  Overlay:    Dark gradient + accent color tint on hover

Section header:
  "SELECTED" — JetBrains Mono, 11px, var(--accent-secondary), tracking-widest
  "WORK" — Syne 800, clamp(4rem, 8vw, 7rem), var(--text-primary), single line
  Aceternity LampEffect wraps "WORK"

CTA at bottom: MagneticButton "See All Projects →"

Animation:
  - Cards: staggered entrance from y:100, opacity:0 via GSAP ScrollTrigger
  - Parallax: each card moves at different vertical speed on scroll
  - Card 1 rotates slightly on scroll (GSAP rotation)
```

---

### Section 4 — PHILOSOPHY: "The Belief System"

**Concept:** Full-screen horizontal scroll section. 4 belief cards. User scrolls down, content moves horizontally (GSAP pinned horizontal scroll).

```
Behavior:
  Pin section for 400vh of scroll distance
  Horizontal movement: 0% → -300% (4 panels)
  Progress bar: thin line at top, fills with var(--accent-primary) as user scrolls

Panel layout: 100vw × 100vh each, flex center

Panel 1: "FORM"
  Giant number "01" — Syne 800, 15rem, var(--text-dim)
  Headline: "Form Follows Feeling" — Syne 700, 3.5rem, var(--text-primary)
  Body: 2-3 sentences of philosophy text
  Visual: ReactBits MagnetLines on right side

Panel 2: "CRAFT"
  Giant "02" + headline "Obsession Over Output"
  Visual: Animated grid that reacts to scroll position

Panel 3: "SPACE"
  Giant "03" + headline "Silence Has Weight"
  Visual: Aceternity WavyBackground

Panel 4: "IMPACT"
  Giant "04" + headline "Beauty That Converts"
  Visual: Aceternity Background Beams

Background: Each panel has unique subtle gradient
  P1: void → indigo tint  |  P2: void → cyan tint
  P3: pure void            |  P4: void → magenta tint
```

---

### Section 5 — STATS & CREDIBILITY: "By the Numbers"

**Concept:** Large numeric counters that animate up when in view. Minimal, impactful.

```
Layout:       4 stats in a row, full-bleed, centered

Stat items:   ReactBits CountUp for all numbers

  "127+"    → Projects Delivered
  "8+"      → Years of Practice
  "40+"     → Happy Clients
  "3×"      → Awwwards Honored

Number style: Syne 800, clamp(3.5rem, 7vw, 6rem), var(--accent-primary)
Label style:  DM Sans 400, 1rem, var(--text-secondary)
Separator:    Thin vertical lines between stats

Background:   ReactBits Aurora — colorStops: ["#6C63FF20","#00F5D420","#FF3CAC10"]
              Amplitude: 0.6, Speed: 0.3, Blend: 0.3

Entrance:     Numbers blur-in, then count up simultaneously
              Aceternity Sparkles scattered around the numbers
```

---

### Section 6 — PROCESS SNAPSHOT: "How I Work"

**Concept:** Vertical timeline with alternating left/right content. Each step has a ReactBits AnimatedContent entrance.

```
Layout:       Centered vertical line, content alternates L/R
Line style:   2px dashed var(--border-subtle), 
              active segment fills with var(--accent-primary) via ScrollTrigger

Steps (4):
  ① Discovery  — "I listen before I look. Every brief is a conversation."
  ② Strategy   — "Decisions made in data. Vision executed in instinct."
  ③ Craft       — "Pixel by pixel. Frame by frame. Until it's inevitable."
  ④ Launch      — "Not just delivered — detonated."

Each step:
  Dot:        Circle 16px, border 2px var(--accent-primary), glows on active
  Number:     JetBrains Mono, var(--accent-secondary), 11px, tracking-widest
  Headline:   Syne 700, 2rem
  Body:       DM Sans 300, 1.125rem, var(--text-secondary), max-width 400px
  Visual:     Alternating side — abstract geometric SVG shape

Animation:
  ScrollTrigger scrub: timeline line draws itself
  Each item reveals as it enters viewport (ReactBits AnimatedContent)
```

---

### Section 7 — TESTIMONIALS: "What They Say"

**Concept:** Aceternity Infinite Moving Cards — testimonials slide continuously.

```
Background:   var(--void-1) + Aceternity Grid and Dot Background

Card structure:
  Size:       380×200px (approx)
  Style:      var(--surface-card), border var(--border-subtle)
              border-radius: var(--radius-lg)
  Quote:      DM Sans 400, 1.1rem, italic, var(--text-primary)
  Author:     Syne 600, 0.9rem, var(--accent-secondary)
  Role:       JetBrains Mono, 0.75rem, var(--text-secondary)
  Rating:     5 amber star icons

Two rows:
  Top row:    6 cards, left→right direction, speed: 40s
  Bottom row: 6 cards, right→left direction, speed: 55s
  Gap:        24px between cards

Section header:
  "CLIENT LOVE" — JetBrains Mono label + Syne 800 display headline
  Aceternity LampEffect on header

Pause on hover: yes, both rows
```

---

### Section 8 — CTA CLOSER: "Let's Begin"

**Concept:** Full-viewport dark outro with a single massive CTA. ReactBits Antigravity fills the section — clicking the button causes a gravity "explosion."

```
Height:       100vh
Background:   Pure var(--void) — darkest point of the page
              ReactBits Antigravity component fills entire section
              Dot color: var(--accent-primary) at 30% opacity

Center content:
  Eyebrow:    "READY WHEN YOU ARE" — JetBrains Mono, 12px, var(--text-dim)
  Headline:   "Start Something" — Syne 800, var(--text-display), var(--text-primary)
              "Extraordinary." — same size, GradientText accent-primary→accent-secondary
  Subtext:    "One email. One conversation. One project that changes everything."
              DM Sans 300, 1.25rem, var(--text-secondary)

  CTA:        Large MagneticButton "Let's Collaborate →"
              Size: 64px height, 280px width, border-radius: var(--radius-full)
              Background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))
              Font: Syne 700, 1.125rem
              On hover: scale 1.08, box-shadow: var(--glow-primary)

  Below CTA:  "or email directly: hello@designer.com"
              JetBrains Mono, 13px, var(--text-secondary)
              On hover: underline + accent color

On CTA click: ReactBits Antigravity gravity inversion (all dots fly outward)
```

---

## 8. ABOUT PAGE (`/about`)

### Section 1 — IDENTITY HERO: "The Person Behind the Pixels"

```
Layout:       Split — 55% text left, 45% image right
Height:       100vh

Left side:
  Label:      "ABOUT ME" — JetBrains Mono, var(--accent-secondary)
  Name:       Designer's name — Syne 800, clamp(3.5rem, 7vw, 6rem)
  Title:      "Creative Director. Visual Architect. Obsessive." 
              DM Sans 300, 1.5rem, italic
  Bio:        3-4 paragraphs. DM Sans 400, 1.1rem, var(--text-secondary)
              ReactBits BlurText per paragraph, stagger on scroll

  Quote box:  Left border 3px var(--accent-primary), pl-6
              "Design is not what it looks like. Design is how it makes people feel — 
               and I refuse to make people feel nothing."
              Syne 600 italic, 1.3rem

Right side:
  Portrait:   Aceternity 3D Card Effect wrapping the image
              Image: dark-toned, high-contrast portrait
              On hover: tilts ±8deg, subtle glow on border
              Border-radius: var(--radius-xl)
              Floating badge: "Open to Work" pill, top-right corner
              Background behind image: Aceternity Spotlight radial
```

---

### Section 2 — ORIGIN STORY: "The Journey"

```
Concept:    Horizontal scrolling timeline (same pin technique as Home S4)
Pin:        300vh of scroll

Timeline points: 2017, 2019, 2021, 2023, 2025 (Present)
Each point:
  Left:      Year in Syne 800, 6rem, var(--text-dim)
  Right:     Milestone card — glass surface, event description, city, client logos
  Animation: GSAP scrub, each card fades in as timeline moves past it

Background: Aceternity Aurora Background, very subtle, purple-blue tint
```

---

### Section 3 — SKILLS MATRIX: "Weapons of Choice"

```
Layout:       3-column grid
Background:   Grid and Dot Background (Aceternity)

Category 1: DESIGN TOOLS
  Figma, Framer, Adobe Suite, Sketch, Spline, Blender
  Each tool: icon + name + animated progress bar (not percentage, just elegant fill)
  Bar color: gradient var(--accent-primary)→var(--accent-secondary)

Category 2: DEVELOPMENT
  React, Next.js, Three.js, GSAP, Framer Motion, CSS/Tailwind
  Same display pattern

Category 3: DISCIPLINES
  Brand Identity · Motion Design · 3D/Spatial
  UI/UX Design · Art Direction · Creative Strategy
  Display as pills in var(--surface-card) with hover glow

Section header: Aceternity LampEffect + ReactBits SplitText
Animation: each row staggers in via ScrollTrigger
```

---

### Section 4 — PHILOSOPHY DEEP DIVE: "What I Believe"

```
Full bleed section, ReactBits Aurora background
3 belief cards in row, Aceternity WobbleCard on hover

Card 1: "LESS, MORE POWERFUL"
Card 2: "EMOTION OVER INSTRUCTION"
Card 3: "OBSESSION IS A FEATURE"

Each card: glass morphism, icon (Lucide), headline Syne 700 1.5rem, body DM Sans
On hover: WobbleCard effect (Aceternity), border glow
```

---

### Section 5 — AWARDS & RECOGNITION

```
Layout:       Alternating full-width rows
Background:   var(--void-2)

Award items:
  Left:       Award name — Syne 800, 2rem
  Center:     Thin separator line
  Right:      Year + Organization — JetBrains Mono

On hover each row: background lightens to var(--surface-glass), 
                   left-border appears in var(--accent-primary)

Awards:
  Awwwards SOTD · 2023
  CSS Design Awards · 2022
  Behance Featured · 2021
  Communication Arts · 2024
  Red Dot Design Award · 2023

Animation: GSAP stagger, each row slides in from alternating sides
```

---

### Section 6 — WORK PROCESS: "Inside the Studio"

```
Concept:     Bento grid layout showing "a day in the studio" vignettes
Grid:        Masonry-style, 5 cells of varying sizes

Cell 1 (large, 2×2): "Current obsession" — a scrolling list of current inspirations
Cell 2 (1×1):        Tools I use daily (icon grid, animated)
Cell 3 (1×2):        "Listening to" — music taste widget (dark, minimal)
Cell 4 (2×1):        Quote from a designer hero, italic Syne
Cell 5 (1×1):        Location + timezone ("Mumbai, GMT+5:30") with animated globe

Background of grid cells: var(--surface-card)
Border: var(--border-subtle), border-radius: var(--radius-lg)
```

---

### Section 7 — CLIENTS & COLLABORATORS

```
Logo grid:   6×2 logos, monochrome white, low opacity (30%)
             On hover: opacity 100%, subtle glow
Infinite scroll marquee (Aceternity Infinite Moving Cards behavior)
Label:       "TRUSTED BY" in JetBrains Mono
```

---

### Section 8 — ABOUT PAGE CTA

```
Same structure as Home Section 8 but variant:
Headline:    "Let's Build Something" / "Together."
CTA:         "Start a Conversation"
Background:  Soft ReactBits Aurora instead of Antigravity
Secondary:   Download CV button (ghost style)
```

---

## 9. SERVICES PAGE (`/services`)

### Section 1 — SERVICES HERO

```
Height:       100vh
Background:   Aceternity Background Beams With Collision

Headline:     "What I" (small, muted) — "OFFER" (giant, Syne 800, 10rem)
              ReactBits SplitText per character, drops in with gravity
Subtext:      "Not a menu. A commitment."
              DM Sans 300, 1.25rem

Visual:       Aceternity Tracing Beam runs from hero down the full page
```

---

### Section 2 — SERVICE CARDS: Core Offerings

```
Layout:       3 large cards, full-width each, stack vertically
              On desktop: 3-column grid

Card 1: BRAND IDENTITY
  Icon:       Abstract geometric logo mark (SVG, animated)
  Headline:   "Brand Identity" — Syne 800, 2.5rem
  Tagline:    "From idea to icon." — italic, var(--accent-secondary)
  Body:       3-4 sentences describing scope
  Deliverables: pill list — Logo, Type System, Color Palette, Guidelines
  Price tag:  "Starting at $X,XXX" — JetBrains Mono, var(--accent-primary)
  CTA:        "Inquire →" — ghost button

Card 2: UI/UX DESIGN (highlighted — most popular)
  Same structure. Accent: var(--accent-secondary) on this card
  Badge: "MOST REQUESTED" pill, top-right corner

Card 3: MOTION & 3D
  Same structure. Accent: var(--accent-hot)

Card hover: Aceternity Card Spotlight effect
Card entrance: Framer Motion stagger, each card slides up
```

---

### Section 3 — PROCESS EXPANDED: "How It Unfolds"

```
6-step accordion. Each step expands on click.
Step number: Syne 800, 5rem, var(--text-dim)
Step title:  Syne 700, 1.5rem
Step body:   DM Sans, detailed description, bullet points

Accordion animation: Framer Motion layoutId, smooth height transition
Active: left border 3px var(--accent-primary), number glows
```

---

### Section 4 — COMPARISON: "DIY vs. Working With Me"

```
Concept:     Two-column table. Raw, editorial, slightly provocative.
Left:        "Doing it yourself" — frustrations, generic results
Right:       "Working with me" — outcomes, precision, ROI
Style:       Monochrome left, accent color right
Animation:   Columns reveal left→right via clip-path on scroll
```

---

### Section 5 — ADD-ON SERVICES

```
Grid:        4 cards, 2×2 on desktop, 1×4 on mobile
Services:    Brand Strategy Consultation · Design System Audit
             Animation & Micro-interactions · Photography Art Direction
Cards:       Compact, glass surface, icon + title + one-liner + price
Hover:       ReactBits TiltedCard effect
```

---

### Section 6 — TIMELINE & DELIVERY

```
Horizontal bar timeline
Phases:      Brief (Day 1) → Discovery (Days 2-5) → Design (Days 6-20)
             → Review (Days 21-25) → Launch (Day 30)
Style:       GSAP animated bar fills on scroll
Color:       var(--accent-primary) fills from left as user scrolls
```

---

### Section 7 — FAQ

```
Accordion component (shadcn/ui Accordion, styled dark)
5-7 common questions
Each item: border-bottom var(--border-subtle)
Chevron: rotates 180° on open (Framer Motion)
Active state: question text turns var(--accent-secondary)
```

---

### Section 8 — SERVICES CTA

```
Aceternity Spotlight background
Headline: "Let's Talk About Your Project"
Two CTAs: "Book a Discovery Call" + "View Pricing Guide"
Stats:    Quick 3-stat bar (127 projects · 100% on-time · 5★ avg rating)
```

---

## 10. PROJECTS PAGE (`/projects`)

### Section 1 — PROJECTS HERO

```
Height:       70vh (shorter than other pages)
Background:   ReactBits DotField or MagnetLines

Headline:     "PROJECTS" — Syne 800, clamp(5rem, 12vw, 10rem), full width
              Letters slightly overlapping edges of viewport (overflow hidden)
Counter:      "— 24 Works" in JetBrains Mono, var(--accent-secondary)

Filter bar:   Below headline
Filters:      All | Branding | UI/UX | Motion | 3D | Print
Style:        Pill buttons, ghost → filled on active
              Click: Framer Motion layoutId animated underline slides
              Results count updates with ReactBits CountUp
```

---

### Section 2 — PROJECT GRID

```
Layout:       Masonry grid (CSS columns + Framer Motion layout animations)
Columns:      3 on desktop, 2 on tablet, 1 on mobile

Item sizes:   Randomized heights: tall (500px), medium (350px), short (250px)
              Alternating to create organic masonry rhythm

Each card:
  Image:       Project thumbnail, object-cover, border-radius: var(--radius-lg)
  Overlay:     Dark gradient (transparent → 80% void) on bottom half
  Info:        Project name Syne 700, category JetBrains Mono
  Hover:       - Image scales 1.05
               - Overlay lightens
               - "View →" pill appears from bottom (clip-path reveal)
               - Card border glows var(--accent-primary)
  Aceternity direction-aware hover

Filter animation: Framer Motion AnimatePresence — filtered items scale-out fade-out
                  New items: staggered scale-in from 0.85 → 1

Infinite scroll: Load 9 initially, "Load More" reveals next 9
```

---

### Section 3 — FEATURED PROJECT SPOTLIGHT

```
Large, edge-to-edge section. One project highlighted.
Background:   Aceternity Spotlight centered on project
Layout:       Left: project info, Right: large image
Image:        Has Aceternity GlareCard effect

Project info: Category label + Name + Year + Description + 3 outcome stats
CTA:          "Deep Dive →" link to individual project page
```

---

### Sections 4–8 — ADDITIONAL CONTENT

```
Section 4: CREATIVE PROCESS BEHIND PROJECTS
  Accordion: 3 types of work (Brand, Digital, Motion) with process description

Section 5: ARCHIVE GRID
  Smaller projects: text-only grid, 4 columns
  Name | Year | Category | "↗" link

Section 6: COLLABORATIONS & PRESS
  Logos of brands worked with, editorial-style layout

Section 7: PROJECT STATS
  Total projects: CountUp | Industries served | Countries reached

Section 8: PROJECTS CTA
  "Have a project in mind?" — standard CTA pattern
  Links to Contact page
```

---

## 11. CONTACT PAGE (`/contact`)

### Section 1 — CONTACT HERO

```
Height:       80vh
Background:   ReactBits Antigravity — dots gravitate toward cursor

Headline:     "Let's" — small/muted, then
              "TALK." — Syne 800, display size, var(--accent-primary) glow text
              Text-shadow: 0 0 80px var(--accent-primary)

Subtext:      "No forms that feel like tax returns. Just a conversation."

Split:        Left 50%: headline + subtext + quick-contact info
              Right 50%: The contact form
```

---

### Section 2 — CONTACT FORM

```
Form fields: (styled dark, minimal)
  Name:    Full-width input
  Email:   Full-width input
  Service: Custom select — styled dropdown (shadcn select, dark)
  Budget:  Slider component (shadcn slider, styled)
  Message: Textarea, resizable

Field style:
  Background:   transparent
  Border-bottom: 1px solid var(--border-subtle) (underline style, not box)
  On focus:     border-color: var(--accent-primary), label floats up (float label)
  Font:         DM Sans 400, 1rem

Submit button: Full-width MagneticButton "Send it →"
               Loading state: spinner + "Sending..."
               Success state: Framer Motion checkmark reveal + confetti (canvas-confetti)

Floating labels: Labels animate up (Framer Motion y: 0 → -24px) on focus/filled
```

---

### Sections 3–8 — Additional Contact Content

```
Section 3: QUICK CONTACT INFO
  Email:    hello@designer.com (click to copy, toast notification)
  Phone:    +91 XXXX XXXX (formatted)
  Location: Mumbai, India (click → Google Maps in new tab)
  Hours:    Mon–Fri, 9AM–7PM IST

  Each item: hover → left-shift 8px + accent color (Framer Motion)

Section 4: SOCIAL PROOF MINI
  "Or find me on" → social grid with hover animations

Section 5: BOOKING WIDGET
  "Book a 30-min discovery call" → Calendly embed (styled dark)

Section 6: FAQ (Contact-specific)
  "How long does a project take?" / "Do you work internationally?" etc.

Section 7: AVAILABILITY STATUS
  Large visual: Calendar-style showing available project slots
  "Currently booking for Q3 2025"
  Aceternity Background Ripple Effect

Section 8: OFFICE/STUDIO VIGNETTE
  Full-width dark image (studio/workspace)
  Overlay: "Based in Mumbai. Working globally."
  ReactBits PixelTrail on hover over image
```

---

## 12. INDIVIDUAL PROJECT PAGE (`/projects/[slug]`)

### Section 1 — PROJECT HERO

```
Height:       100vh
Background:   Full-bleed project hero image
              Dark overlay: linear-gradient(to bottom, transparent 40%, var(--void) 100%)
              Aceternity Spotlight on image

Bottom content (absolute positioned):
  Category:   JetBrains Mono, 11px, var(--accent-secondary)
  Name:       Syne 800, clamp(3rem, 8vw, 7rem), white
  Tags:       Pill badges — Brand Identity · Typography · Print
  Year:       Right-aligned — JetBrains Mono, var(--text-dim)

Scroll indicator: Aceternity TracingBeam begins here
```

---

### Section 2 — PROJECT META

```
4-column stat bar:
  Client   | Industry  | Duration  | Role
  DM Sans + Syne 700 values
  Separator: vertical lines
Background: var(--void-2), 80px padding
```

---

### Section 3 — OVERVIEW & CHALLENGE

```
Layout:       Split 60/40
Left:         Challenge description — Syne 700 2rem header + DM Sans body
Right:        "The Solution" — card with border-left var(--accent-primary)
              Solution stated in 1-2 powerful sentences

ReactBits AnimatedContent: reveals on scroll
```

---

### Section 4 — FULL PROJECT IMAGE GALLERY

```
Layout:       Editorial — full-width images mixed with 2-col grids
Image 1:      Full bleed (100vw) — Aceternity ParallaxScroll
Images 2-3:   Side by side, 50% each
Image 4:      Full bleed
Images 5-6:   Asymmetric — 65% / 35%

Each image:   On hover — Aceternity GlareCard or LensComponent
              Loading:  Blur-up placeholder → sharp (next/image)

Captions:     JetBrains Mono, 11px, var(--text-dim), below each image
```

---

### Section 5 — PROCESS DOCUMENTATION

```
4-step visual walkthrough specific to this project
Timeline with screenshots/mockups
Same GSAP timeline animation as other process sections
```

---

### Section 6 — RESULTS & OUTCOMES

```
3 outcome cards:
  Big metric: CountUp number
  Description: what it means
  Icon: relevant Lucide icon
Background: ReactBits Aurora
```

---

### Section 7 — MORE PROJECTS

```
"Next projects" — horizontal scroll of 3 related project cards
ReactBits TiltedCard for each
Label: "You might also like →"
```

---

### Section 8 — PROJECT CTA

```
"Liked this project? Let's make yours."
MagneticButton "Start Your Project →"
Link back to Contact page
Background: Aceternity Background Beams
```

---

## 13. ANIMATION CHOREOGRAPHY GUIDE

### Page Load Sequence (all pages):
```
0ms:     Black overlay visible (z-50, bg-black)
0–400ms: Navbar slides in from top
400ms:   Overlay begins split (clip-path: left half slides left, right half right)
400–800ms: Hero content fades in (opacity 0→1, y: 20→0)
800ms+:  Staggered reveals for subtitle, CTAs, badges
```

### Scroll Animations:
```
GSAP ScrollTrigger: start "top 85%" end "top 30%"
Default: fromTo y:60 opacity:0 → y:0 opacity:1, duration:0.8
Headings: y:80 + blur(4px) → y:0 blur(0px)
Cards: scale:0.95 opacity:0 → scale:1 opacity:1
Stagger: 0.12s between siblings
```

### Micro-interactions:
```
All links:      underline draws left→right on hover (clip-path / background-size)
All buttons:    scale(1.03) on hover, scale(0.97) on press
All cards:      border-color transitions to glow on hover (0.3s ease)
Navigation:     active indicator slides smoothly between items (layoutId)
Form inputs:    label float animation (Framer Motion y: 0 → -24px scale: 0.85)
Image loads:    blur placeholder (next/image) → sharp reveal
```

---

## 14. RESPONSIVE BREAKPOINTS

```
Mobile:   < 640px   (sm)
Tablet:   640–1024px (md)
Desktop:  1024–1280px (lg)
Wide:     > 1280px  (xl, 2xl)

Mobile adjustments:
  - DottedSurface: hide on < 640px (performance)
  - Hero text: clamp floors to 2.5rem min
  - Horizontal scroll sections: convert to vertical accordion
  - Custom cursor: hidden
  - Card grids: single column
  - Navbar: hamburger → fullscreen overlay
  - Marquee: single row only
```

---

## 15. PERFORMANCE REQUIREMENTS

```
Images:         next/image everywhere. WebP format. Blur placeholders.
Fonts:          next/font with display: swap. Preload display + body.
Three.js:       Dynamic import + Suspense. Only on client.
GSAP:           Import only used plugins.
Lenis:          Only initialize on client (useEffect).
ReactBits:      Copy-paste model — only include components used.
Code splitting: Each page is its own chunk (App Router default).
Target:         LCP < 2.5s, CLS < 0.1, FID < 100ms
```

---

## 16. FILE & FOLDER STRUCTURE

```
antigravity/
├── app/
│   ├── layout.jsx                    # Root layout: Lenis, Cursor, Navbar, Footer
│   ├── globals.css                   # All CSS variables, reset, base styles
│   ├── page.jsx                      # Home
│   ├── about/page.jsx
│   ├── services/page.jsx
│   ├── projects/
│   │   ├── page.jsx                  # Projects grid
│   │   └── [slug]/page.jsx           # Individual project
│   └── contact/page.jsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── ui/                           # shadcn + custom primitives
│   │   ├── MagneticButton.jsx
│   │   ├── GlowCard.jsx
│   │   ├── DottedSurface.jsx         # (provided by user — use as-is, modify colors)
│   │   └── [shadcn components]
│   ├── sections/                     # Page sections as components
│   │   ├── home/
│   │   ├── about/
│   │   ├── services/
│   │   ├── projects/
│   │   └── contact/
│   ├── animations/                   # React Bits + Aceternity components
│   │   ├── Aurora.jsx
│   │   ├── SplitText.jsx
│   │   ├── BlurText.jsx
│   │   ├── TiltedCard.jsx
│   │   ├── Antigravity.jsx
│   │   └── [others]
│   ├── cursor/
│   │   └── SplashCursor.jsx
│   └── transitions/
│       └── PageTransition.jsx
│
├── lib/
│   ├── gsap-presets.js               # GSAP animation presets (pure JS)
│   ├── fonts.js                      # next/font config
│   └── utils.js                      # cn() etc
│
├── public/
│   ├── fonts/                        # Local fonts if any
│   └── images/
│       └── projects/                 # Project thumbnails
│
└── tailwind.config.js                # Extend with CSS var colors (NO .ts extension)
```

> **Note:** Every file in this project uses `.jsx` or `.js`. There are no `.ts` or `.tsx` files. `tailwind.config.js` not `.ts`. `next.config.js` not `.ts`. `jsconfig.json` instead of `tsconfig.json`.

---

## 17. TAILWIND CONFIG EXTENSION

```js
// tailwind.config.js  ← .js not .ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: 'var(--void)',
        'void-1': 'var(--void-1)',
        'void-2': 'var(--void-2)',
        'void-3': 'var(--void-3)',
        accent: {
          primary:   'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          hot:       'var(--accent-hot)',
          warm:      'var(--accent-warm)',
        },
      },
      fontFamily: {
        display: 'var(--font-display)',
        body:    'var(--font-body)',
        mono:    'var(--font-mono)',
        accent:  'var(--font-accent)',
      },
      boxShadow: {
        'glow-primary':   'var(--glow-primary)',
        'glow-secondary': 'var(--glow-secondary)',
        'glow-hot':       'var(--glow-hot)',
      },
      animation: {
        'marquee-right': 'marquee-right 40s linear infinite',
        'marquee-left':  'marquee-left 50s linear infinite',
      },
      keyframes: {
        'marquee-right': {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-left': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
};
```

---

## 18. REACT BITS COMPONENT REFERENCE

| Component         | Page/Section              | Effect                              |
|-------------------|---------------------------|-------------------------------------|
| `Antigravity`     | Home Hero, Home S8, Contact | Gravity-reactive dots              |
| `Aurora`          | Home Stats, About S4        | Flowing gradient background         |
| `MagnetLines`     | Home Philosophy P1          | Field lines react to cursor         |
| `BlurText`        | Home Hero subtitle, About   | Words blur-in staggered             |
| `SplitText`       | Home Hero, Services Hero    | Per-char dramatic reveals           |
| `GradientText`    | Home S8 headline            | Animated gradient sweep             |
| `TiltedCard`      | Projects, Services addons   | 3D perspective tilt on hover        |
| `AnimatedContent` | About Journey, Process      | Scroll-triggered entrance wrapper   |
| `CountUp`         | Home Stats, Project results | Animated number increment           |
| `DotField`        | Projects Hero               | Interactive particle field          |
| `PixelTrail`      | Contact image               | Pixel trail cursor effect           |
| `SplashCursor`    | Global                      | Fluid splash cursor                 |

---

## 19. ACETERNITY UI COMPONENT REFERENCE

| Component                    | Page/Section              | Effect                               |
|------------------------------|---------------------------|--------------------------------------|
| `SpotlightNew`               | Home Hero                 | Moving light spotlight               |
| `LampEffect`                 | Section headers           | Glowing lamp under headings          |
| `TracingBeam`                | Home, Project page        | Vertical beam follows scroll         |
| `BackgroundBeams`            | Home Philosophy P4, S8    | Animated SVG beams                   |
| `BackgroundBeamsWithCollision`| Services Hero            | Exploding beams                      |
| `3DCardEffect`               | About portrait, Featured  | CSS perspective 3D tilt              |
| `GlareCard`                  | Project detail images     | Glare shine on hover                 |
| `CardSpotlight`              | Service cards             | Spotlight follows cursor on card     |
| `WobbleCard`                 | Services comparisons      | Elastic wobble on hover              |
| `InfiniteMovingCards`        | Testimonials              | Auto-scrolling card loop             |
| `DirectionAwareHover`        | Project grid cards        | Content slides from hover direction  |
| `AuroraBackground`           | About hero alt             | Flowing color gradient bg            |
| `WavyBackground`             | Philosophy section         | CSS wave animation                   |
| `GridAndDotBackgrounds`      | Skills, Services           | Subtle grid/dot overlay              |
| `HeroParallax`               | Projects featured         | Parallax image rows                  |
| `ParallaxScroll`             | Project detail images     | Scroll-driven parallax images        |
| `TextGenerateEffect`         | About bio                 | Text appears character by character  |
| `TypewriterEffect`           | Contact hero              | Typing animation                     |
| `BackgroundRipple`           | Contact availability      | Ripple wave animation                |
| `Sparkles`                   | Stats section             | Particle sparkle overlay             |
| `FloatingDock`               | Mobile nav alternative    | macOS dock-style navigation          |

---

## 20. GOLDEN RULES — DO NOT VIOLATE

1. **Never use white backgrounds.** Every surface is dark: `--void`, `--void-1`, `--void-2`, or glass.
2. **Never use Inter, Roboto, or system fonts.** Syne, DM Sans, JetBrains Mono only.
3. **Never stack two Aceternity heavy effects** in the same viewport. One at a time.
4. **Framer Motion for React state-driven animations. GSAP for scroll-driven timelines.** Don't mix their scroll systems.
5. **Mobile-first HTML, desktop-enhanced.** Every section must work on 375px.
6. **All animations must have `prefers-reduced-motion` fallback.** Check with `useReducedMotion()` from `motion/react`.
7. **DottedSurface is always the global base layer.** Nothing sits below it. It is the universe of this site.
8. **Typography hierarchy must be dramatic.** Size jumps between levels must be noticeable (never subtle).
9. **Negative space is sacred.** Resist the urge to fill gaps. Dark void IS the design.
10. **Every interactive element must respond to cursor.** Nothing is passive. Everything is alive.
11. **NO TypeScript anywhere.** Pure JavaScript only. `.jsx` and `.js` extensions exclusively. No type annotations, no interfaces, no generics, no `as` casts, no `satisfies` keyword.

---

## 21. PLACEHOLDER CONTENT

```
Designer name:    "Aria Chen" (replace with real name)
Tagline:         "Creative Director & Visual Architect"
Location:         Mumbai, India
Email:            hello@ariachen.com
Projects:         24 total (use Unsplash dark/creative images as placeholders)
               Suggested queries: "brand design dark" / "product design dark" / "typography poster"
Years active:     Since 2017
Clients:          Replace logos with placeholder monochrome SVGs
Testimonials:     Generate 8 realistic testimonials from Art Directors / Founders
Awards:           Awwwards, CSS Design Awards, Behance, Communication Arts
```