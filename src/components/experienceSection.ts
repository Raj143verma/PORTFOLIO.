export function renderExperienceSection(): HTMLElement {
  const section = document.createElement('div');
  section.className = 'container';

  section.innerHTML = `
    <div class="section-header" data-aos="fade-up">
      <div class="section-tag">
        <span class="hud-badge-dot" aria-hidden="true"></span>
        <span>// 05 // CAREER TIMELINE &amp; EDUCATION</span>
      </div>
      <h2 class="section-title">EXPERIENCE &amp; ACADEMICS</h2>
      <p class="section-subtitle">
        Hands-on engineering roles, production impact metrics, and computer science foundations.
      </p>
    </div>

    <div class="timeline-container">
      <!-- Item 1: Vaidsys Technologies Internship -->
      <div class="timeline-item" data-aos="fade-up">
        <div class="timeline-marker">
          <div class="timeline-dot"></div>
          <div class="timeline-line"></div>
        </div>

        <div class="cyber-card timeline-card">
          <div class="timeline-card-header">
            <div>
              <span class="timeline-role text-cyber font-mono">FULL-STACK DEVELOPMENT INTERN</span>
              <h3 class="timeline-company">Vaidsys Technologies</h3>
            </div>
            <span class="timeline-date font-mono">APR 2026 &mdash; MAY 2026</span>
          </div>

          <ul class="timeline-bullets">
            <li>
              <strong>Role-Based Access Control (RBAC):</strong> Architected security middleware for 15+ protected routes, empowering 50+ concurrent users to safely publish and manage 1,000+ content pieces.
            </li>
            <li>
              <strong>Draft-to-Publish Workflow:</strong> Engineered an automated release pipeline that collapsed content publishing cycles from 30 minutes down to under 2 minutes (93% reduction).
            </li>
            <li>
              <strong>Rich Text Media Editor:</strong> Designed dynamic WYSIWYG editor featuring direct media uploads, automated processing, and publishing scheduling.
            </li>
            <li>
              <strong>Operational Analytics Dashboard:</strong> Built high-speed search and multi-facet filtering engine, enhancing administrative content discoverability by 40%.
            </li>
          </ul>

          <div class="timeline-tech-stack">
            <span class="timeline-tech-badge">Node.js</span>
            <span class="timeline-tech-badge">Express</span>
            <span class="timeline-tech-badge">React.js</span>
            <span class="timeline-tech-badge">RBAC &amp; JWT</span>
            <span class="timeline-tech-badge">MongoDB</span>
            <span class="timeline-tech-badge">REST APIs</span>
          </div>
        </div>
      </div>

      <!-- Item 2: Burdwan University CS Degree -->
      <div class="timeline-item" data-aos="fade-up" data-aos-delay="150">
        <div class="timeline-marker">
          <div class="timeline-dot"></div>
        </div>

        <div class="cyber-card timeline-card">
          <div class="timeline-card-header">
            <div>
              <span class="timeline-role text-cyber font-mono">BACHELOR OF ENGINEERING (B.E.) &bull; CSE</span>
              <h3 class="timeline-company">University Institute of Technology, Burdwan University</h3>
            </div>
            <span class="timeline-date font-mono">EXPECTED GRADUATION: AUG 2027</span>
          </div>

          <p class="timeline-summary-text">
            Specializing in Computer Science &amp; Engineering in West Bengal, India. Rigorous academic training in distributed software architecture, algorithmic complexity, and system design.
          </p>

          <div class="coursework-box">
            <span class="coursework-title font-mono text-cyber">RELEVANT COURSEWORK:</span>
            <p class="coursework-list">
              Data Structures &amp; Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Computer Networks, and Software Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
