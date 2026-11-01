import { sound } from '../audio/soundManager';

export function renderProjectsSection(): HTMLElement {
  const section = document.createElement('div');
  section.className = 'container';

  const projects = [
    {
      id: 'ai-analyzer',
      title: 'AI Resume & Job Fit Analyzer',
      tagline: 'AI Skill Gap Detection & 7-Day Study Engine',
      category: 'AI & CLOUD PLATFORM',
      tech: ['React.js', 'Node.js', 'Express.js', 'Groq AI API', 'JWT'],
      description:
        'Enterprise AI platform evaluating candidate fit against real-world job specifications with semantic precision, featuring automated skill gap detection and an accelerated 7-day study roadmap.',
      highlights: [
        'Groq AI API integration generating instant fit match scores and personalized diagnostic feedback',
        'Dynamic technical interview simulation generating customized role-specific question banks'
      ],
      github: 'https://github.com/rajvermause',
      accent: 'var(--neon-cyan)',
      accentColor: '#00e5ff'
    },
    {
      id: 'stay-genie',
      title: 'StayGenie // Real Estate Platform',
      tagline: 'Full-Stack Property Booking & Geospatial Engine',
      category: 'FULL-STACK WEB & MAPS',
      tech: ['React.js', 'Node.js', 'Bootstrap', 'Map API', 'Render'],
      description:
        'Production-grade hospitality booking platform modeled on distributed workflows, featuring verified owner authorization, interactive geospatial map rendering, and secure Cloudinary media pipelines.',
      highlights: [
        'Real-time Map API integration for dynamic location search, clustering, and radius filtering',
        'Secured 10+ protected property management routes using JWT and strict owner authorization'
      ],
      github: 'https://github.com/rajvermause',
      accent: 'var(--neon-emerald)',
      accentColor: '#30d158'
    },
    {
      id: 'bank-core',
      title: 'BankCore API // Fintech Engine',
      tagline: 'Double-Entry Accounting & Atomic Ledger System',
      category: 'FINTECH & DISTRIBUTED SYSTEMS',
      tech: ['Node.js', 'Express.js', 'JWT', 'REST API', 'ACID'],
      description:
        'High-security fintech backend engine enforcing a strict double-entry ledger to guarantee zero balance discrepancies, atomic multi-account transfers, and tamper-evident audit trails.',
      highlights: [
        'Double-entry bookkeeping system guaranteeing atomic transactional consistency across debits and credits',
        'Layered middleware guards and data validation preventing race conditions and double-spending attempts'
      ],
      github: 'https://github.com/rajvermause',
      accent: 'var(--neon-blue)',
      accentColor: '#0a84ff'
    }
  ];

  section.innerHTML = `
    <div class="section-header" data-aos="fade-up">
      <div class="section-tag">
        <span>Featured Systems</span>
      </div>
      <h2 class="section-title">Production Systems</h2>
      <p class="section-subtitle">
        Production-grade full-stack applications engineered with Groq AI pipelines, double-entry financial ledgers, and geospatial systems.
      </p>
    </div>

    <div class="projects-grid">
      ${projects
        .map(
          (proj, idx) => `
        <article class="project-card cyber-card" 
                 data-aos="fade-up" 
                 data-aos-delay="${idx * 120}" 
                 id="card-${proj.id}"
                 style="--card-accent: ${proj.accentColor};">
          
          <div class="project-card-top">
            <span class="project-category font-mono" style="color: ${proj.accent};">${proj.category}</span>
            <span class="project-status-dot" style="background-color: ${proj.accentColor};" aria-hidden="true"></span>
          </div>

          <h3 class="project-title">${proj.title}</h3>
          <p class="project-tagline font-mono text-cyber">${proj.tagline}</p>
          <p class="project-desc">${proj.description}</p>

          <div class="project-highlights">
            <span class="highlights-heading font-mono">Architecture Highlights</span>
            <ul class="highlights-list">
              ${proj.highlights
                .map(
                  (h) => `
                <li>
                  <span class="hl-bullet" style="color: ${proj.accent};" aria-hidden="true">▹</span>
                  <span>${h}</span>
                </li>
              `
                )
                .join('')}
            </ul>
          </div>

          <div class="project-tech-pills">
            ${proj.tech.map((t) => `<span class="tech-pill">${t}</span>`).join('')}
          </div>

          <div class="project-actions">
            <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn-project-link btn-github" aria-label="View source code on GitHub">
              <span>View on GitHub</span>
              <span class="link-arrow" aria-hidden="true">↗</span>
            </a>
            <span class="project-badge-tag">Production Ready</span>
          </div>

          <!-- 3D Specular Glare Overlay -->
          <div class="card-glare" aria-hidden="true"></div>
        </article>
      `
        )
        .join('')}
    </div>
  `;

  // Attach 3D Tilt Effect
  setTimeout(() => {
    const cards = section.querySelectorAll<HTMLElement>('.project-card');

    cards.forEach((card, i) => {
      const proj = projects[i];
      const glare = card.querySelector<HTMLElement>('.card-glare');

      card.addEventListener('mouseenter', () => sound.playHover());

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        if (glare && proj) {
          glare.style.background = `radial-gradient(circle 350px at ${x}px ${y}px, rgba(0, 229, 255, 0.15) 0%, transparent 65%)`;
          glare.style.opacity = '1';
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        if (glare) {
          glare.style.opacity = '0';
        }
      });
    });
  }, 0);

  return section;
}
