import { sound } from '../audio/soundManager';

export function renderNavbar(): HTMLElement {
  const header = document.createElement('header');
  header.className = 'hud-navbar';
  header.setAttribute('role', 'banner');

  const isMuted = sound.getMuted();

  header.innerHTML = `
    <div class="container hud-nav-inner">
      <a href="#hero" class="hud-logo" aria-label="Raj Kumar Verma Home">
        <span>Raj Kumar Verma</span>
        <span class="hud-logo-tag">SDE &bull; MERN</span>
      </a>

      <div class="hud-badge" title="Status">
        <span class="hud-badge-dot" aria-hidden="true"></span>
        <span>OPEN TO WORK [ONLINE]</span>
      </div>

      <nav aria-label="Main Navigation">
        <ul class="hud-links" id="hud-nav-links">
          <li><a href="#hero" class="hud-link"><span class="hud-link-idx">01</span> Hero</a></li>
          <li><a href="#about" class="hud-link"><span class="hud-link-idx">02</span> About</a></li>
          <li><a href="#skills" class="hud-link"><span class="hud-link-idx">03</span> Skills</a></li>
          <li><a href="#projects" class="hud-link"><span class="hud-link-idx">04</span> Projects</a></li>
          <li><a href="#experience" class="hud-link"><span class="hud-link-idx">05</span> Experience</a></li>
          <li><a href="#contact" class="hud-link"><span class="hud-link-idx">06</span> Contact</a></li>
        </ul>
      </nav>

      <div class="hud-nav-actions">
        <button id="sound-toggle" class="sound-toggle-btn ${isMuted ? 'muted' : ''}" 
                aria-label="Toggle Futuristic Audio Effects" 
                title="${isMuted ? 'Unmute Sci-Fi SFX' : 'Mute Sci-Fi SFX'}">
          <span id="sound-icon" aria-hidden="true">${isMuted ? '🔇' : '🔊'}</span>
        </button>

        <button id="mobile-nav-toggle" class="hud-mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  `;

  // Attach interactive events
  const soundBtn = header.querySelector<HTMLButtonElement>('#sound-toggle');
  const soundIcon = header.querySelector<HTMLSpanElement>('#sound-icon');
  if (soundBtn && soundIcon) {
    soundBtn.addEventListener('click', () => {
      const muted = sound.toggleMute();
      soundBtn.classList.toggle('muted', muted);
      soundBtn.title = muted ? 'Unmute Sci-Fi SFX' : 'Mute Sci-Fi SFX';
      soundIcon.textContent = muted ? '🔇' : '🔊';
    });
  }

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

  // Hover sounds on links
  header.querySelectorAll('.hud-link').forEach((link) => {
    link.addEventListener('mouseenter', () => sound.playHover());
    link.addEventListener('click', () => {
      sound.playClick();
      if (navLinks && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        mobileToggle?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  return header;
}
