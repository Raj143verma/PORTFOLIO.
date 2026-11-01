export function renderAboutSection(): HTMLElement {
  const section = document.createElement('div');
  section.className = 'container';

  section.innerHTML = `
    <div class="section-header" data-aos="fade-up">
      <div class="section-tag">
        <span>Identity &amp; Background</span>
      </div>
      <h2 class="section-title">About Raj Kumar Verma</h2>
      <p class="section-subtitle">
        Full-Stack (MERN) Engineer architecting secure systems with Groq AI integration and fintech-grade transactional integrity.
      </p>
    </div>

    <div class="about-grid">
      <!-- Left Column: Bio Card with Photo -->
      <div class="cyber-card about-card" data-aos="fade-right" data-aos-delay="100">
        <div class="about-card-top">
          <div class="about-photo-wrapper">
            <img src="/raj_verma.jpg" alt="Raj Kumar Verma" class="about-photo" width="100" height="100" loading="lazy" />
          </div>
          <div class="about-identity-meta">
            <div class="card-header-bar">
              <span class="hud-mono-label">Profile Overview</span>
              <span class="hud-status-indicator">Verified</span>
            </div>
            <h3 class="about-name">Raj Kumar Verma</h3>
            <span class="about-title font-mono text-cyber">Full-Stack Developer / SDE</span>
            <span class="about-org font-mono">B.E. Computer Science, Burdwan Univ ('27)</span>
          </div>
        </div>

        <p class="about-text">
          I am a Computer Science Engineer specializing in the MERN stack and modern AI integration. I focus on engineering robust web applications with production-grade security, from JWT and RBAC authorization architectures to double-entry financial ledgers guaranteeing atomic transaction consistency.
        </p>
        <p class="about-text">
          During my internship at <strong>Vaidsys Technologies</strong>, I built RBAC middleware safeguarding 15+ routes for 50+ concurrent users, accelerated publishing pipelines by 93% (30m &rarr; &lt;2m), and created analytics filters enhancing content discoverability.
        </p>

        <div class="about-meta-row">
          <div class="meta-item">
            <span class="meta-label">Degree</span>
            <span class="meta-val">B.E. Computer Science</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Institution</span>
            <span class="meta-val">Burdwan University ('27)</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Location</span>
            <span class="meta-val">Jharkhand, India</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Key Metrics -->
      <div class="about-metrics-col" data-aos="fade-left" data-aos-delay="200">
        <div class="cyber-card metric-card">
          <div class="metric-num text-cyber">3+</div>
          <div class="metric-title">Production Apps Shipped</div>
          <p class="metric-desc">Full-stack AI, fintech, and real estate applications with robust testing.</p>
        </div>

        <div class="cyber-card metric-card">
          <div class="metric-num text-cyber">15+</div>
          <div class="metric-title">Protected RBAC Routes</div>
          <p class="metric-desc">Multi-tier authorization and JWT middleware for concurrent workloads.</p>
        </div>

        <div class="cyber-card metric-card">
          <div class="metric-num text-cyber">93%</div>
          <div class="metric-title">Pipeline Acceleration</div>
          <p class="metric-desc">Cut draft-to-publish workflows from 30m to &lt;2m at Vaidsys Technologies.</p>
        </div>

        <div class="cyber-card metric-card">
          <div class="metric-num text-cyber">100%</div>
          <div class="metric-title">Ledger Integrity</div>
          <p class="metric-desc">Double-entry accounting with atomic commits and zero balance drift.</p>
        </div>
      </div>
    </div>
  `;

  return section;
}
