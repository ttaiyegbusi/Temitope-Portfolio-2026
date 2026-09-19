# Portfolio Project Summary — Temitope Aiyegbusi

> Use this file to provide full context when starting a new Claude conversation about this project.

---

## Project Overview

A personal portfolio website for **Temitope Aiyegbusi** (Product Designer X Design Engineer). Live domain: **aiyegbusitope.com**

### Tech Stack

- **Framework**: Next.js 16.3.5 (App Router) with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (using `@theme` directive for design tokens)
- **React**: 19.2.8
- **No external UI libraries** — all animations and components are custom-built
- **No Framer Motion** — animations use CSS keyframes + requestAnimationFrame

### Run Commands

```bash
npm run dev     # starts dev server with --turbopack
npm run build   # production build
npm run start   # production server
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout (ThemeProvider > AppShell > children + Navigation + PullCord)
│   ├── page.tsx             # Home page (renders HomeContent)
│   ├── globals.css          # Global styles, design tokens, animations
│   ├── about/page.tsx       # About page
│   ├── contact/page.tsx     # Contact page
│   ├── work/
│   │   ├── page.tsx         # Work listing page
│   │   └── [slug]/page.tsx  # Individual case study pages
│
├── components/
│   ├── AppShell.tsx         # Loading state manager (Preloader → content reveal)
│   ├── CascadeReveal.tsx    # Staggered reveal animation wrapper
│   ├── CaseStudySidebar.tsx # Sticky TOC sidebar for case studies
│   ├── HomeContent.tsx      # Main homepage content (header, hero, social icons, projects)
│   ├── MobileScrollbar.tsx  # Mobile horizontal scrollbar for case study TOC
│   ├── Navigation.tsx       # Fixed bottom nav bar (Home, Work, About, Contact)
│   ├── Preloader.tsx        # Text scramble/decode loading animation with audio
│   ├── ProjectCard.tsx      # Project card with video/image + cursor tooltip
│   ├── PullCord.tsx         # Interactive pull cord theme toggle (light/dark)
│   ├── ThemeProvider.tsx    # Theme context (light/dark with localStorage persistence)
│   └── VideoPlayer.tsx      # Video player component for case studies
│
├── data/
│   └── projects.ts          # Project data (titles, descriptions, sections, TOC items)
│
public/
├── videos/                  # Project preview videos (chaincore.mp4, knit.mp4, etc.)
└── images/                  # Project images organized by slug
```

---

## Design Token System (globals.css)

Uses Tailwind CSS v4 `@theme` directive with CSS custom properties:

### Light Mode (default)
```css
--color-bg: #f7f7f7;
--color-bg-white: #ffffff;
--color-text-strong: #171717;
--color-text-sub: #5c5c5c;
--color-text-soft: #a3a3a3;
--color-stroke-soft: #ebebeb;
```

### Dark Mode (`[data-theme="dark"]`)
```css
--color-bg: #0a0a0a;
--color-bg-white: #1a1a1a;
--color-text-strong: #f5f5f5;
--color-text-sub: #a3a3a3;
--color-text-soft: #737373;
--color-stroke-soft: #2a2a2a;
```

### Dark Mode Overrides in globals.css
- `.text-black` → `#f5f5f5` in dark mode
- `.hover:text-black:hover` → `#f5f5f5`
- `.from-bg` gradient → `#0a0a0a`
- Theme transitions use `html[data-transitioning]` attribute for smooth color/bg transitions (0.3s)

### Fonts
- `--font-sans`: Inter (loaded as `--font-geist-sans`)
- `--font-mono`: Geist Mono

---

## Key Components — Detailed

### ThemeProvider (`src/components/ThemeProvider.tsx`)
- Context-based light/dark theme system
- Persists to `localStorage`
- Respects `prefers-color-scheme: dark` on first visit
- `toggle()` function sets `data-transitioning` attribute on `<html>` for smooth transitions, removes after 350ms
- Exports `useTheme()` hook returning `{ theme, toggle }`

### AppShell (`src/components/AppShell.tsx`)
- Wraps all content in `AppReadyContext`
- Shows `Preloader` component on initial load
- After preloader finishes, sets `ready = true` (with 50ms delay)
- Content fades in with `opacity` transition
- `useAppReady()` hook used by child components to trigger cascade animations

### Preloader (`src/components/Preloader.tsx`)
- Text scramble/decode animation that reveals "Temitope Aiyegbusi"
- Duration: 2800ms with `easeInOutCubic` timing
- Characters cycle through random chars (`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>{}[]~/\\|+=^`) then lock to final character
- Audio: sine wave ticks (4000-6000Hz) on each character lock using Web Audio API
- Blinking cursor follows decode position
- Progress bar in bottom-right corner (monospace font, tabular-nums)
- Film grain SVG overlay at 0.04 opacity
- Exit animation: fade + translateY(-3%) + scale(1.02) over 0.6s

### CascadeReveal (`src/components/CascadeReveal.tsx`)
- Wraps sections with staggered reveal animation
- Waits for `ready` prop (from AppShell) before starting
- Uses configurable `delay` prop (ms)
- CSS class: `.cascade-section` → `.cascade-section.revealed`
- Animation: `cascade-in` — `translateY(8px)` to `translateY(0)` + opacity, 0.8s

### HomeContent (`src/components/HomeContent.tsx`)
- Three CascadeReveal sections with staggered delays (0ms, 120ms, 240ms):
  1. **Header**: Name (h1) + job title (p)
  2. **Hero**: Greeting + two intro paragraphs + social icons
  3. **Work**: "My Work" heading + project cards in 2-column grid

- **Social icons** (after intro text, inside Hero section):
  - Dribbble, LinkedIn, GitHub, Layers
  - 20px SVG icons inside 36x36 (`w-9 h-9`) rounded-full containers
  - `gap-4` spacing between icons
  - Blue outline appear animation (`.social-icon-appear` class)
  - Staggered `animationDelay: i * 120ms` per icon
  - `opacity-80` default, `hover:opacity-100`

- **Projects array** (4 projects):
  - ChainCore — "Core Banking Application for the African Companies and Market."
  - Knit — "A Core Banking Application for the African Companies"
  - Reeple — "Remittances & Payments for Nigerians and African Freelancers"
  - DevFest 2025 — "Helping receive payments"

- Projects display in rows of 2 using `chunkArray()` helper

### Navigation (`src/components/Navigation.tsx`)
- Fixed bottom nav bar, centered with pill shape
- 4 items: Home, Work, About, Contact
- Each has filled SVG icon, active state at full opacity, inactive at 0.4
- Hover raises inactive to 0.7
- Shadow: `-4px_4px_50px_rgba(0,0,0,0.15)`
- No theme toggle in nav (that's the PullCord)

### PullCord (`src/components/PullCord.tsx`)
- **Interactive theme toggle** — fixed position, top-right of viewport
- Pull it down/sideways to toggle light/dark mode

**Physics system:**
- Spring-based animation using `requestAnimationFrame`
- While dragging: lerp (0.35) toward pointer position for fluid tracking
- On release: spring physics (stiffness=0.08, damping=0.82) for elastic snap-back with overshoot
- Pull threshold: 65px from rest position to trigger toggle

**Visual:**
- SVG bezier curve cord from top of viewport to handle
- 28px circular handle with border, bg, and sun icon
- Handle changes appearance past threshold (brighter border, elevated shadow)
- Cord opacity changes past threshold (0.35 → 0.7)

**Interaction:**
- Pointer Events API (pointerdown/pointermove/pointerup) with pointer capture
- **Tap fallback**: if no movement detected between down/up, simulates a mini pull animation (`pos.y = CORD_REST_Y + 40`, `vel.y = -8`) and toggles theme
- 500ms cooldown after toggle to prevent rapid switching

**Sound effects (Web Audio API):**
- Pull sound: descending sine 800→400Hz, 0.08s
- Snap sound: ascending sine 300→900Hz + descending 1200→600Hz (dual oscillator), 0.12-0.15s
- `AudioContext.resume()` called for production domain compatibility (autoplay policy)

### ProjectCard (`src/components/ProjectCard.tsx`)
- Displays project thumbnail (video or image)
- Video: autoPlay, muted, loop, playsInline
- Custom cursor tooltip "View project" follows mouse position (desktop only, `hidden md:block`)
- Card height: 270px mobile, 300px desktop
- Links to `/work/[slug]`

### Case Study Page (`src/app/work/[slug]/page.tsx`)
- Static params generated from projects data
- Sticky top bar with back button + breadcrumb
- Two-column layout: TOC sidebar (desktop) + content
- Sections with paragraphs, bullet lists, images, videos
- Subsections with optional video player or images
- `image: true` renders placeholder gray box (several still have this)
- `MobileScrollbar` for horizontal TOC navigation on mobile

---

## CSS Animations (globals.css)

### Page Transitions
- `page-scale-in`: scale(0.96) → scale(1) + opacity, 0.5s
- Applied via `.page-transition-enter` class

### Lightbox
- `lightbox-in`: opacity fade, 0.25s
- `lightbox-scale`: opacity + scale(0.92→1), 0.3s

### Cascade Reveal
- `cascade-in`: translateY(8px→0) + opacity, 0.8s
- Classes: `.cascade-section` (opacity:0) → `.cascade-section.revealed`

### Social Icon Blue Outline
- `icon-outline-appear`: blue inset box-shadow appears → holds → fades
  - 0%: transparent
  - 10%: `inset 0 0 0 1.5px rgba(59, 130, 246, 0.8)` (blue)
  - 50%: holds blue outline
  - 100%: transparent
- Duration: 1.2s, cubic-bezier(0.25, 0.1, 0.25, 1)
- Applied via `.social-icon-appear` class
- Inspired by jaimec.co button entrance animation

### Cursor Blink
- `cursor-blink`: opacity 0.6 → 0 → 0.6, used in Preloader

### Mobile Scrollbar Hidden
- `@media (max-width: 767px)`: hides native scrollbar on html/body

---

## Known Issues & Pending Work

### Known Issues
1. **Hydration mismatch warnings** in console — from ThemeProvider's `data-theme` attribute differing between server and client render. Pre-existing, cosmetic only.
2. **Console errors** may accumulate across browser pane loads (stale from previous builds). Clearing `.next` cache and restarting dev server helps.

### Pending / Incomplete
1. **Case study placeholder images**: Several ChainCore subsections still have `image: true` (renders gray placeholder box instead of actual images)
2. **Case study pages**: Knit, Yaraa, DevFest 2025 case studies may have "Coming soon." placeholder content
3. **Deployment**: Latest changes (social icons position, blue outline animation, PullCord improvements) need to be deployed to aiyegbusitope.com

---

## Production Notes

- **Domain**: aiyegbusitope.com
- **Audio on production**: Web Audio API requires `AudioContext.resume()` due to browser autoplay policy on non-localhost origins. This is already implemented in both the Preloader and PullCord components.
- **Theme persistence**: Uses `localStorage` key `"theme"`. Falls back to `prefers-color-scheme: dark` media query.
- **No external dependencies** beyond Next.js, React, and Tailwind CSS v4.

---

## Design Decisions & Style Guide

- **Typography**: Inter font (loaded as Geist Sans variable), Geist Mono for monospace
- **Colors**: Neutral palette — off-white/near-black backgrounds, gray text hierarchy
- **Spacing**: Consistent use of Tailwind spacing scale, content max-width 800px
- **Animations**: Apple-like, buttery smooth — cubic-bezier easing, spring physics
- **Dark mode**: Full dark mode support via CSS custom properties + `data-theme` attribute
- **Mobile**: Responsive design with `md:` breakpoints, hidden scrollbars on mobile
- **Icons**: Custom SVG icons throughout (social icons are 20px, nav icons are 24px)
- **No emoji in code** unless explicitly requested
- **No comments in code** unless explaining a non-obvious "why"
