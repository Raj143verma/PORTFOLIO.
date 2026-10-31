import { sound } from '../audio/soundManager';

export function renderNavbar(): HTMLElement {
  const header = document.createElement('header');
  header.className = 'hud-navbar';
  header.setAttribute('role', 'banner');

  header.innerHTML = `
    <div class="container hud-nav-inner">
      <a href="#hero" class="hud-logo" aria-label="Raj Kumar Verma">
        <span class="hud-logo-symbol" aria-hidden="true">RV</span>
        <span class="hud-logo-text">Raj Verma<span class="hud-logo-dot">.</span></span>
      </a>

      <nav aria-label="Main Navigation">
        <ul class="hud-links" id="hud-nav-links">
          <li><a href="#about" class="hud-link" data-section="about">About</a></li>
          <li><a href="#skills" class="hud-link" data-section="skills">Skills</a></li>
          <li><a href="#projects" class="hud-link" data-section="projects">Projects</a></li>
          <li><a href="#experience" class="hud-link" data-section="experience">Experience</a></li>
          <li><a href="#terminal" class="hud-link" data-section="terminal">Terminal</a></li>
          <li><a href="#contact" class="hud-link" data-section="contact">Contact</a></li>
        </ul>
      </nav>

      <div class="hud-nav-actions">
        <a href="/Raj_Kumar_Verma_Resume.pdf" target="_blank" rel="noopener noreferrer" class="btn-cyber-primary btn-nav-cta" aria-label="Open Resume in new tab">
          <span>Resume</span>
        </a>

        <button id="mobile-nav-toggle" class="hud-mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  `;

  // Mobile menu toggle
  const mobileToggle = header.querySelector<HTMLButtonElement>('#mobile-nav-toggle');
  const navLinks = header.querySelector<HTMLElement>('#hud-nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      sound.playClick();
      const isOpen = navLinks.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Hover sounds and active link handling
  const links = header.querySelectorAll<HTMLAnchorElement>('.hud-link');
  links.forEach((link) => {
    link.addEventListener('mouseenter', () => sound.playHover());
    link.addEventListener('click', () => {
      sound.playClick();
      if (navLinks && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        mobileToggle?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Scroll spy to highlight active section
  const sectionIds = ['about', 'skills', 'projects', 'experience', 'terminal', 'contact'];
  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach((link) => {
          if (link.getAttribute('data-section') === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  // Defer observing until DOM elements are mounted
  window.setTimeout(() => {
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }, 200);

  return header;
}
