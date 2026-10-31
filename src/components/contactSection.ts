import { sound } from '../audio/soundManager';

export function renderContactSection(): HTMLElement {
  const section = document.createElement('div');
  section.className = 'container';

  section.innerHTML = `
    <div class="section-header" data-aos="fade-up">
      <div class="section-tag">
        <span class="hud-badge-dot" aria-hidden="true"></span>
        <span>// 06 // TRANSMISSION &amp; CONTACT HUD</span>
      </div>
      <h2 class="section-title">INITIALIZE CONTACT</h2>
      <p class="section-subtitle">
        Open to full-stack, backend, and SDE engineering roles. Direct encrypted transmissions welcome.
      </p>
    </div>

    <div class="contact-grid">
      <!-- Left: Direct Communication Channels -->
      <div class="cyber-card contact-info-card" data-aos="fade-right">
        <div class="card-header-bar">
          <span class="hud-mono-label">TRANSMISSION_CHANNELS</span>
          <span class="hud-status-indicator">CHANNELS_OPEN</span>
        </div>

        <div class="contact-channels-list">
          <!-- Email Channel -->
          <div class="channel-item">
            <div class="channel-meta">
              <span class="channel-type font-mono text-cyber">DIRECT EMAIL:</span>
              <a href="mailto:rajvermause@gmail.com" class="channel-val font-mono" id="email-link">rajvermause@gmail.com</a>
            </div>
            <button class="btn-copy-hud" id="copy-email-btn" aria-label="Copy email address" title="Copy email address">
              <span class="copy-text">COPY</span>
            </button>
          </div>

          <!-- Phone Channel -->
          <div class="channel-item">
            <div class="channel-meta">
              <span class="channel-type font-mono text-cyber">SECURE LINE / PHONE:</span>
              <a href="tel:+917970908458" class="channel-val font-mono">+91 7970908458</a>
            </div>
            <button class="btn-copy-hud" id="copy-phone-btn" aria-label="Copy phone number" title="Copy phone number">
              <span class="copy-text">COPY</span>
            </button>
          </div>

          <!-- Location -->
          <div class="channel-item">
            <div class="channel-meta">
              <span class="channel-type font-mono text-cyber">OPERATIONAL BASE:</span>
              <span class="channel-val font-mono">Giridih, Jharkhand, India</span>
            </div>
            <span class="channel-status-pill font-mono">RELOCATION: OPEN</span>
          </div>
        </div>

        <!-- Social Channels -->
        <div class="social-channels-bar">
          <span class="social-heading font-mono">// EXTERNAL NETWORK PROFILES:</span>
          <div class="social-pills">
            <a href="https://github.com/rajvermause" target="_blank" rel="noopener noreferrer" class="social-pill" id="link-github">
              <span>GITHUB</span>
              <span aria-hidden="true">&nearr;</span>
            </a>
            <a href="https://linkedin.com/in/rajvermause" target="_blank" rel="noopener noreferrer" class="social-pill" id="link-linkedin">
              <span>LINKEDIN</span>
              <span aria-hidden="true">&nearr;</span>
            </a>
            <a href="mailto:rajvermause@gmail.com" class="social-pill">
              <span>SEND DISPATCH</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Right: Interactive Transmission Form -->
      <div class="cyber-card contact-form-card" data-aos="fade-left" data-aos-delay="150">
        <div class="card-header-bar">
          <span class="hud-mono-label">DISPATCH_MESSAGE</span>
          <span class="hud-status-indicator">ENCRYPTED_256BIT</span>
        </div>

        <form id="contact-form" class="cyber-form" novalidate>
          <div class="form-group">
            <label for="form-name" class="form-label font-mono">CALLSIGN / FULL NAME *</label>
            <input type="text" id="form-name" class="cyber-input" placeholder="e.g. Elena Rostova" required />
            <span class="form-error font-mono" id="name-error"></span>
          </div>

          <div class="form-group">
            <label for="form-email" class="form-label font-mono">RETURN TRANSMISSION (EMAIL) *</label>
            <input type="email" id="form-email" class="cyber-input" placeholder="e.g. elena@techcorp.io" required />
            <span class="form-error font-mono" id="email-error"></span>
          </div>

          <div class="form-group">
            <label for="form-message" class="form-label font-mono">MESSAGE PAYLOAD *</label>
            <textarea id="form-message" class="cyber-textarea" rows="4" placeholder="Brief project summary, interview inquiry, or collaborative opportunity..." required></textarea>
            <span class="form-error font-mono" id="message-error"></span>
          </div>

          <button type="submit" class="btn-cyber-primary w-full" id="btn-submit-form">
            <span>TRANSMIT DISPATCH</span>
            <span aria-hidden="true">&rarr;</span>
          </button>

          <div id="form-success-banner" class="hud-success-banner font-mono" style="display: none;" role="status">
            &check; TRANSMISSION DELIVERED &mdash; Thank you! I will respond promptly to your dispatch.
          </div>
        </form>
      </div>
    </div>

    <!-- Toast Notification Overlay for Clipboard -->
    <div id="hud-toast" class="hud-toast font-mono" aria-live="polite"></div>
  `;

  // Attach interactive copy-to-clipboard and form handlers
  setTimeout(() => {
    const toast = section.querySelector<HTMLDivElement>('#hud-toast');

    const showToast = (msg: string) => {
      sound.playConfirm();
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('visible');
      setTimeout(() => {
        toast.classList.remove('visible');
      }, 2400);
    };

    // Copy Email
    const copyEmailBtn = section.querySelector<HTMLButtonElement>('#copy-email-btn');
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('rajvermause@gmail.com').then(() => {
          showToast('✓ COPIED [rajvermause@gmail.com] TO CLIPBOARD');
        });
      });
    }

    // Copy Phone
    const copyPhoneBtn = section.querySelector<HTMLButtonElement>('#copy-phone-btn');
    if (copyPhoneBtn) {
      copyPhoneBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('+91 7970908458').then(() => {
          showToast('✓ COPIED [+91 7970908458] TO CLIPBOARD');
        });
      });
    }

    // Form Handling
    const form = section.querySelector<HTMLFormElement>('#contact-form');
    const nameInput = section.querySelector<HTMLInputElement>('#form-name');
    const emailInput = section.querySelector<HTMLInputElement>('#form-email');
    const messageInput = section.querySelector<HTMLTextAreaElement>('#form-message');
    const successBanner = section.querySelector<HTMLDivElement>('#form-success-banner');

    if (form && nameInput && emailInput && messageInput && successBanner) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        let valid = true;

        if (!nameInput.value.trim()) {
          nameInput.classList.add('error');
          valid = false;
        } else {
          nameInput.classList.remove('error');
        }

        if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
          emailInput.classList.add('error');
          valid = false;
        } else {
          emailInput.classList.remove('error');
        }

        if (!messageInput.value.trim()) {
          messageInput.classList.add('error');
          valid = false;
        } else {
          messageInput.classList.remove('error');
        }

        if (!valid) {
          sound.playClick();
          return;
        }

        // Simulate successful dispatch
        sound.playConfirm();
        successBanner.style.display = 'block';
        form.reset();
        setTimeout(() => {
          successBanner.style.display = 'none';
        }, 5000);
      });
    }
  }, 0);

  return section;
}
