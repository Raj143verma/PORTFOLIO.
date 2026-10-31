export function renderAboutSection(): HTMLElement {
  const section = document.createElement('div');
  section.className = 'container';

  section.innerHTML = `
    <div class="section-header" data-aos="fade-up">
      <div class="section-tag">
        <span class="hud-badge-dot" aria-hidden="true"></span>
        <span>// 02 // DOSSIER &amp; IDENTITY</span>
      </div>
      <h2 class="section-title">ABOUT RAJ KUMAR VERMA</h2>
      <p class="section-subtitle">
        Full-Stack (MERN) Engineer architecting secure, scalable systems with Groq AI integration and fintech-grade transactional integrity.
      </p>
    </div>

    <div class="about-grid">
      <!-- Left Column: Terminal Bio -->
      <div class="cyber-card about-card" data-aos="fade-right" data-aos-delay="100">
        <div class="card-header-bar">
          <span class="hud-mono-label">RECON_FILE: RAJ_VERMA.TXT</span>
          <span class="hud-status-indicator">VERIFIED</span>
        </div>
        <p class="about-text">
          I am a <strong>Full-Stack Developer</strong> and Computer Science Engineer specializing in the <strong>MERN stack</strong> and modern AI pipeline integration. My engineering journey centers on building reliable web applications with production-grade security, from <strong>JWT &amp; RBAC authentication architectures</strong> to <strong>double-entry financial ledgers</strong> ensuring strict atomic transaction consistency.
        </p>
        <p class="about-text">
          During my internship at <strong>Vaidsys Technologies</strong>, I engineered role-based access control protecting 15+ sensitive routes for 50+ concurrent users, slashed publication pipelines from 30 minutes to under 2 minutes, and designed an analytics engine boosting content discoverability by 40%.
        </p>
        <div class="about-meta-row">
          <div class="meta-item">
            <span class="meta-label">DEGREE:</span>
            <span class="meta-val">B.E. Computer Science &amp; Engg</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">INSTITUTION:</span>
            <span class="meta-val">Burdwan University (2027)</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">LOCATION:</span>
            <span class="meta-val">Giridih, Jharkhand, India</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Tactical Key Metrics -->
      <div class="about-metrics-col" data-aos="fade-left" data-aos-delay="200">
        <div class="cyber-card metric-card">
          <div class="metric-num text-cyber">3+</div>
          <div class="metric-title">PRODUCTION APPS</div>
          <p class="metric-desc">Shipped full-stack AI, fintech, and real estate applications with complete test coverage.</p>
        </div>

        <div class="cyber-card metric-card">
          <div class="metric-num text-cyber">15+</div>
          <div class="metric-title">PROTECTED RBAC ROUTES</div>
          <p class="metric-desc">Engineered multi-tier authorization and JWT middleware for concurrent enterprise workloads.</p>
        </div>

        <div class="cyber-card metric-card">
          <div class="metric-num text-cyber">93%</div>
          <div class="metric-title">PUBLICATION PIPELINE ACCELERATION</div>
          <p class="metric-desc">Cut draft-to-publish workflows from 30 minutes to &lt;2 minutes at Vaidsys Technologies.</p>
        </div>

        <div class="cyber-card metric-card">
          <div class="metric-num text-cyber">100%</div>
          <div class="metric-title">LEDGER INTEGRITY</div>
          <p class="metric-desc">Double-entry accounting systems with atomic database commits and comprehensive audit trails.</p>
        </div>
      </div>
    </div>
  `;

  return section;
}
