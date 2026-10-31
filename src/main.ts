import './styles/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { renderNavbar } from './components/navbar';
import { sound } from './audio/soundManager';
import { SceneManager } from './three/sceneManager';
import { renderAboutSection } from './components/aboutSection';
import { renderSkillsSection } from './components/skillsSection';
import { renderProjectsSection } from './components/projectsSection';
import { renderTerminalSection } from './components/terminalSection';
import { renderExperienceSection } from './components/experienceSection';
import { renderContactSection } from './components/contactSection';

// Initialize Three.js WebGL 3D Engine
try {
  new SceneManager('webgl-container');
} catch (err) {
  console.warn('WebGL initialization warning:', err);
}

// Initialize AOS Scroll Reveal with reduced-motion awareness
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 70
  });
}

const app = document.getElementById('app');

if (app) {
  app.innerHTML = '';

  // 1. Inject Navbar
  const navbar = renderNavbar();
  app.appendChild(navbar);

  // 2. Base Container for Main Content
  const mainContent = document.createElement('main');
  mainContent.id = 'portfolio-content';

  // Section 1: Hero
  const heroSection = document.createElement('section');
  heroSection.id = 'hero';
  heroSection.className = 'section-shell hero-shell';
  heroSection.setAttribute('aria-label', 'Hero Section');
  heroSection.innerHTML = `
    <div class="container hero-container">
      <div class="hero-content">
        <div class="hud-badge mb-4" data-aos="fade-down">
          <span class="hud-badge-dot" aria-hidden="true"></span>
          <span>Full-Stack Engineer / Distributed Systems</span>
        </div>
        
        <h1 class="hero-title cyber-glitch" data-text="Raj Kumar Verma" data-aos="fade-right">
          Raj Kumar Verma
        </h1>

        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="100">
          <span class="text-cyber font-mono">Full-Stack Developer, AI Systems &amp; Fintech Architecture</span><br />
          Crafting secure, scalable distributed applications with Groq AI pipelines, double-entry financial ledgers, and reactive 3D WebGL user experiences.
        </p>

        <div class="hero-actions" data-aos="fade-up" data-aos-delay="200">
          <a href="#projects" class="btn-cyber-primary" id="btn-hero-projects">
            <span>Explore Projects</span>
          </a>
          <a href="/Raj_Kumar_Verma_Resume.pdf" target="_blank" rel="noopener noreferrer" class="btn-cyber-secondary" id="btn-hero-resume" aria-label="Open Resume in new tab">
            <span>Resume</span>
          </a>
          <a href="#terminal" class="btn-cyber-secondary" id="btn-hero-terminal">
            <span>Terminal CLI</span>
          </a>
        </div>

        <!-- Quick Telemetry Stats Strip -->
        <div class="hero-telemetry-strip" data-aos="fade-up" data-aos-delay="300">
          <div class="telemetry-stat">
            <span class="stat-value font-mono text-cyber">3+</span>
            <span class="stat-label">Production apps</span>
          </div>
          <div class="telemetry-divider" aria-hidden="true">/</div>
          <div class="telemetry-stat">
            <span class="stat-value font-mono text-cyber">15+</span>
            <span class="stat-label">RBAC API routes</span>
          </div>
          <div class="telemetry-divider" aria-hidden="true">/</div>
          <div class="telemetry-stat">
            <span class="stat-value font-mono text-cyber">B.E. CSE</span>
            <span class="stat-label">Burdwan Univ ('27)</span>
          </div>
        </div>
      </div>
    </div>
  `;
  mainContent.appendChild(heroSection);

  // Section 2: About Dossier
  const aboutSection = document.createElement('section');
  aboutSection.id = 'about';
  aboutSection.className = 'section-shell';
  aboutSection.setAttribute('aria-label', 'About Dossier');
  aboutSection.appendChild(renderAboutSection());
  mainContent.appendChild(aboutSection);

  // Section 3: Skills Arsenal
  const skillsSection = document.createElement('section');
  skillsSection.id = 'skills';
  skillsSection.className = 'section-shell';
  skillsSection.setAttribute('aria-label', 'Technical Arsenal');
  skillsSection.appendChild(renderSkillsSection());
  mainContent.appendChild(skillsSection);

  // Section 4: Featured Projects
  const projectsSection = document.createElement('section');
  projectsSection.id = 'projects';
  projectsSection.className = 'section-shell';
  projectsSection.setAttribute('aria-label', 'Featured Projects');
  projectsSection.appendChild(renderProjectsSection());
  mainContent.appendChild(projectsSection);

  // Section 5: Interactive Terminal CLI
  const terminalSection = document.createElement('section');
  terminalSection.id = 'terminal';
  terminalSection.className = 'section-shell';
  terminalSection.setAttribute('aria-label', 'Interactive Terminal Shell');
  terminalSection.appendChild(renderTerminalSection());
  mainContent.appendChild(terminalSection);

  // Section 6: Experience & Education Timeline
  const experienceSection = document.createElement('section');
  experienceSection.id = 'experience';
  experienceSection.className = 'section-shell';
  experienceSection.setAttribute('aria-label', 'Career Experience and Academics');
  experienceSection.appendChild(renderExperienceSection());
  mainContent.appendChild(experienceSection);

  // Section 7: Contact HUD
  const contactSection = document.createElement('section');
  contactSection.id = 'contact';
  contactSection.className = 'section-shell';
  contactSection.setAttribute('aria-label', 'Communication HUD');
  contactSection.appendChild(renderContactSection());
  mainContent.appendChild(contactSection);

  app.appendChild(mainContent);

  // Footer HUD
  const footer = document.createElement('footer');
  footer.className = 'hud-footer';
  footer.setAttribute('role', 'contentinfo');
  footer.innerHTML = `
    <div class="container footer-inner font-mono">
      <div class="footer-left">
        <span>&copy; ${new Date().getFullYear()} Raj Kumar Verma</span>
        <span class="footer-subtext">Crafted with Three.js, TypeScript and WebGL</span>
      </div>
      <div class="footer-right">
        <span class="footer-telemetry">Active 60 FPS WebGL</span>
        <a href="#hero" class="btn-back-to-top" id="btn-back-to-top" aria-label="Return to top of page">Top</a>
      </div>
    </div>
  `;
  app.appendChild(footer);

  // Attach button hover and click sounds
  app.querySelectorAll('.btn-cyber-primary, .btn-cyber-secondary, .social-pill, .btn-back-to-top').forEach((btn) => {
    btn.addEventListener('mouseenter', () => sound.playHover());
    btn.addEventListener('click', () => sound.playClick());
  });

  // Back to top smooth scroll
  const topBtn = footer.querySelector('#btn-back-to-top');
  topBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
