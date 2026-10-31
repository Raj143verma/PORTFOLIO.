# Phase 03: Portfolio Content, Interactive Sections and Scroll Reveal - Research

**Researched:** 2026-10-31  
**Domain:** Content Orchestration / AOS Scroll Reveal / Interactive Hacker CLI / 3D Card Tilt  
**Confidence:** HIGH

<user_constraints>
## User Constraints
- Accurate representation of Raj Kumar Verma's resume:
  - Full-Stack Developer (MERN) / SDE
  - Intern at Vaidsys Technologies (RBAC 15+ routes, draft-to-publish workflow, analytics dashboard)
  - Projects: AI Resume & Job Fit Analyzer, StayGenie Real Estate Platform, BankCore API
  - Technical skills: MERN, Java, Python, C++, MongoDB, Prisma, MySQL, AWS, Docker/Render
  - Burdwan University B.E. CSE
- Scroll reveal using AOS library with staggered delay attributes
- Interactive Cyberpunk CLI / Terminal simulating an interactive shell (`help`, `projects`, `skills`, `contact`, `clear`, `matrix`)
- 3D card tilt effect for project cards with preserve-3d perspective
- Copy-to-clipboard actions with audio and tactile feedback
</user_constraints>

<research_summary>
## Summary

This phase unites the futuristic visual framework with Raj Kumar Verma's authentic profile:
1. **AOS Scroll Integration**:
   - `import AOS from 'aos'; import 'aos/dist/aos.css';`
   - `AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 80 })`
   - `data-aos="fade-up"`, `data-aos-delay="100"`, `200`, `300` for staggered reveals.
2. **Interactive Cyberpunk CLI Component**:
   - Realistic terminal prompt `guest@rajveer-sys:~$`
   - Command parser handling `help`, `about`, `skills`, `projects`, `exp`, `contact`, `clear`, `whoami`, `sudo`
   - Keypress audio feedback via `sound.playKeystroke()`
3. **Featured Projects with 3D Tilt**:
   - `transform-style: preserve-3d`, dynamic mouse-move calculating rotation X/Y angles (`rotX = (posY - 0.5) * -15`, `rotY = (posX - 0.5) * 15`)
   - High-contrast badges for Groq AI, JWT, REST APIs, MongoDB, MVC, etc.
4. **Skills Matrix & Experience Timeline**:
   - Segmented skill categories with progress bars and tech badges
   - Visual timeline with glowing status nodes for Vaidsys Technologies and Burdwan University
5. **Contact HUD**:
   - Contact form with validation
   - Quick copy buttons for email (`rajvermause@gmail.com`) and phone (`+91 7970908458`) with visual and audio confirmation.
</research_summary>
