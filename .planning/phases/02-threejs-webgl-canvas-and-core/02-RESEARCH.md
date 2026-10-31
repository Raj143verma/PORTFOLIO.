# Phase 02: Three.js WebGL Canvas and Interactive Holographic Core - Research

**Researched:** 2026-10-31  
**Domain:** Three.js / WebGL / Procedural 3D Shaders / Hardware Lifecycle  
**Confidence:** HIGH

<user_constraints>
## User Constraints
- Professional, futuristic 3D portfolio for Raj Kumar Verma.
- High visual impact: Holographic 3D elements, cyber wireframes, dynamic particle fields, cursor reactivity, and scroll-linked camera movement.
- High performance: 60 FPS, pixelRatio <= 2, zero memory leaks, render loop pauses when tab is hidden or under reduced motion.
</user_constraints>

<research_summary>
## Summary

Three.js enables fluid 60 FPS WebGL rendering directly into HTML canvas. For a futuristic developer portfolio:
1. **Scene Setup & Canvas Layering**:
   - `WebGLRenderer` configured with `alpha: true`, `antialias: true`, `powerPreference: 'high-performance'`.
   - `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))` prevents mobile GPU throttling.
   - Canvas mounted in `#webgl-container` fixed behind HTML DOM with `pointer-events: none` on container, and pointer tracking via global window mouse listeners.
2. **Holographic Quantum Core Architecture**:
   - Multi-layer procedural geometry:
     - Outer Cage: `IcosahedronGeometry` with wireframe `MeshStandardMaterial` (emissive cyan `#00F0FF`, wireframe linewidth 1.5).
     - Inner Energy Core: `OctahedronGeometry` with pulsing scale and dual-tone specular shine.
     - Orbital Gyro Rings: Dual `TorusGeometry` meshes counter-rotating on X and Y axes.
3. **Interactive Particle Field**:
   - 1,200 points distributed in spherical and spatial cyber-matrix.
   - `BufferGeometry` with custom Float32Array coordinates for GPU acceleration.
   - Cursor attraction/repulsion: mouse coordinates normalized `(-1 to 1)`, damping vector interpolation (`lerp`) creates fluid organic motion without jarring stops.
4. **Scroll Parallax & Lifecycle**:
   - Scroll listener smoothly interpolates 3D camera position: as user scrolls down, camera shifts perspective, giving depth to subsequent sections.
   - Lifecycle guard: `visibilitychange` suspends `requestAnimationFrame` when tab is backgrounded.
</research_summary>

<verification_checklist>
## Verification Checklist
- [ ] Three.js WebGL scene renders without errors
- [ ] 3D Quantum Core rotates and responds to cursor movement
- [ ] Particle constellation drifts and shifts with mouse interaction
- [ ] Camera perspective responds smoothly to page scroll
- [ ] Render loop pauses when `document.hidden === true`
- [ ] `npm run build` succeeds
</verification_checklist>
