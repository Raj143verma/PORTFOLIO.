# PROJECT: Futuristic 3D Developer Portfolio

## What This Is

A high-performance, visually striking 3D personal developer portfolio website featuring interactive WebGL/Three.js 3D elements, cybernetic HUD/glassmorphic aesthetics, and smooth scroll-triggered animations. It presents the developer's identity, technical arsenal, featured projects, and contact avenues with cutting-edge visual presentation and uncompromising engineering rigor.

## Core Value

Deliver an unforgettable, futuristic 3D visual experience that showcases elite engineering capabilities while maintaining ultra-fast load times, flawless 60fps rendering, and WCAG AA accessibility.

## Tech Stack & Architecture

- **Bundler & Build**: Vite (ultra-fast HMR, optimized production tree-shaking)
- **Core Language**: TypeScript / Modern ES Modules
- **3D Graphics Engine**: Three.js (`three`) WebGL rendering with custom shaders, geometric wireframes, glowing particle fields, and interactive camera/object parallax
- **Scroll Orchestration**: AOS (Animate On Scroll) + CSS hardware-accelerated transforms
- **Styling Architecture**: Futuristic Cyber-HUD Glassmorphism (CSS custom properties, Tailwind / modern responsive utility system)
- **Typography**: Space Grotesk (Hero & Headings) + JetBrains Mono (Tech labels & HUD readouts) + Inter/DM Sans (Body text)
- **Engineering Reliability**: GRAVITAS runtime (ground before mutating, evidence-backed verification, zero regression tolerance)

## Requirements

### Validated
(None yet — greenfield initialization)

### Active
- [ ] **PORT-01**: Ultra-modern responsive scaffold with dark cyberpunk/HUD theme and Space Grotesk typography
- [ ] **PORT-02**: Three.js WebGL canvas background with interactive 3D holographic core, floating particle constellation, and cursor-reactive parallax
- [ ] **PORT-03**: Scroll-reveal orchestration with AOS for section reveals, staggered project cards, and stats counters
- [ ] **PORT-04**: Interactive Cyberpunk Terminal / Command HUD allowing visitors to query commands (e.g. `help`, `skills`, `projects`, `contact`)
- [ ] **PORT-05**: Interactive Project Showcase with 3D tilt effects, tech stack tags, live preview modal/links, and GitHub repository integration
- [ ] **PORT-06**: Experience Timeline & Skills Matrix with interactive glowing level indicators
- [ ] **PORT-07**: Interactive Contact HUD with real-time field validation and copy-to-clipboard actions
- [ ] **PORT-08**: Accessibility & Performance compliance: WCAG 4.5:1 text contrast, `prefers-reduced-motion` fallbacks, mobile-first responsive layout (375px to 4K), 60 FPS WebGL rendering with throttled render loop when unfocused

### Out of Scope
- Heavy multi-megabyte uncompressed 3D models (glTF > 2MB) — using procedural geometries, shaders, and lightweight particle systems to maintain instantaneous load times
- Complex multiplayer WebSockets / backend databases — purely client-side static deployment (Netlify/Vercel/GitHub Pages ready)
