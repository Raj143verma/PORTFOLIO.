import './styles/main.css';
import { renderNavbar } from './components/navbar';
import { sound } from './audio/soundManager';

const app = document.getElementById('app');

if (app) {
  // 1. Inject Navbar
  const navbar = renderNavbar();
  app.appendChild(navbar);

  // 2. Base Container for Content Sections
  const mainContent = document.createElement('main');
  mainContent.id = 'portfolio-content';
  mainContent.innerHTML = `
    <!-- Section 1: Hero -->
    <section id="hero" class="section-shell" aria-label="Hero Introduction">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hud-badge mb-4">
            <span class="hud-badge-dot"></span>
            <span>SYSTEM INTERFACE V2.4 // SDE RECON</span>
          </div>
          <h1 class="hero-title cyber-glitch" data-text="RAJ KUMAR VERMA">
            RAJ KUMAR VERMA
          </h1>
          <p class="hero-subtitle">
            <span class="text-cyber font-mono">&gt; FULL-STACK DEVELOPER (MERN) // AI SYSTEMS &amp; FINTECH ARCHITECT</span><br />
            Building secure, scalable distributed applications with Groq AI integration, double-entry financial ledgers, and reactive 3D WebGL interfaces.
          </p>
          <div class="hero-actions">
            <a href="#projects" class="btn-cyber-primary" id="btn-hero-projects">
              <span>EXPLORE PROJECTS</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a href="#contact" class="btn-cyber-secondary" id="btn-hero-contact">
              <span>INITIALIZE CONTACT</span>
              <span aria-hidden="true">&gt;&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Placeholder Section Containers for Phases 2 & 3 -->
    <section id="about" class="section-shell" aria-label="About Raj Kumar Verma"></section>
    <section id="skills" class="section-shell" aria-label="Technical Arsenal"></section>
    <section id="projects" class="section-shell" aria-label="Production Projects"></section>
    <section id="experience" class="section-shell" aria-label="Experience and Timeline"></section>
    <section id="contact" class="section-shell" aria-label="Communication HUD"></section>
  `;

  app.appendChild(mainContent);

  // Attach button click sounds
  app.querySelectorAll('.btn-cyber-primary, .btn-cyber-secondary').forEach((btn) => {
    btn.addEventListener('mouseenter', () => sound.playHover());
    btn.addEventListener('click', () => sound.playClick());
  });
}
