export function renderExperienceSection(): HTMLElement {
  const section = document.createElement('div');
  section.className = 'container';

  section.innerHTML = `
    <div class="section-header" data-aos="fade-up">
      <div class="section-tag">
        <span>Career &amp; Education</span>
      </div>
      <h2 class="section-title">Career &amp; Education</h2>
      <p class="section-subtitle">
        Engineering roles, production impact metrics, and academic computer science foundation.
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
              <span class="timeline-role text-cyber font-mono">Full-Stack Development Intern</span>
              <h3 class="timeline-company">Vaidsys Technologies</h3>
            </div>
            <span class="timeline-date font-mono">Apr 2026 &mdash; May 2026</span>
          </div>

          <ul class="timeline-bullets">
            <li>
              <strong>Role-Based Access Control:</strong> Architected security middleware for 15+ protected routes, empowering 50+ concurrent users to safely manage 1,000+ assets.
            </li>
            <li>
              <strong>Pipeline Acceleration (93%):</strong> Collapsed draft-to-publish deployment cycles from 30 minutes down to under 2 minutes with automated validation.
            </li>
            <li>
              <strong>Operational Analytics:</strong> Built high-speed search and multi-facet filtering engine, enhancing administrative content discoverability by 40%.
            </li>
          </ul>

          <div class="timeline-tech-stack">
            <span class="timeline-tech-badge">Node.js</span>
            <span class="timeline-tech-badge">Express</span>
            <span class="timeline-tech-badge">React.js</span>
            <span class="timeline-tech-badge">RBAC &amp; JWT</span>
            <span class="timeline-tech-badge">MongoDB</span>
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
              <span class="timeline-role text-cyber font-mono">Bachelor of Engineering (B.E.), Computer Science</span>
              <h3 class="timeline-company">UIT, Burdwan University</h3>
            </div>
            <span class="timeline-date font-mono">Expected: Aug 2027</span>
          </div>

          <p class="timeline-summary-text">
            Specializing in Computer Science &amp; Engineering. Rigorous academic curriculum in distributed software architecture, data structures, algorithms, and system design.
          </p>

          <div class="coursework-box">
            <span class="coursework-title font-mono text-cyber">Key Coursework</span>
            <p class="coursework-list">
              Data Structures &amp; Algorithms, OOP, Database Management Systems (DBMS), Operating Systems, Computer Networks, and Software Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
