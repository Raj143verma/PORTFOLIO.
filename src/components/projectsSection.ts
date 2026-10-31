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
      tech: ['React.js', 'Node.js', 'Express.js', 'Groq AI API', 'JWT', 'REST API', 'Axios'],
      description:
        'Engineered an enterprise AI platform evaluating candidate fit against real-world job specifications with semantic precision. Incorporates an intelligent multi-source parsing pipeline, automated weakness detection, and a dynamic 7-day accelerated study roadmap generator.',
      highlights: [
        'Groq AI API integration generating instant fit match scores and personalized diagnostic feedback',
        'Dynamic interview simulation module generating customized role-specific technical question banks',
        'Personalized 7-day study curriculum roadmap aligned with target job competencies',
        'Secured with JWT authentication and granular session state management'
      ],
      github: 'https://github.com/rajvermause',
      accent: 'var(--neon-cyan)'
    },
    {
      id: 'stay-genie',
      title: 'StayGenie // Real Estate Platform',
      tagline: 'Full-Stack Property Booking & Geospatial Engine',
      category: 'FULL-STACK WEB & MAPS',
      tech: ['React.js', 'Node.js', 'Bootstrap', 'EJS', 'JWT', 'MVC Architecture', 'Map API', 'Render'],
      description:
        'Architected a production-grade full-stack hospitality platform modeled on modern distributed booking workflows. Features end-to-end CRUD operations, verified owner authorization, interactive geospatial map rendering, and secure Cloudinary/Render media pipelines.',
      highlights: [
        'Secured 10+ protected property management routes using JWT and strict owner authorization middleware',
        'Real-time interactive Map API integration for dynamic location search, clustering, and radius filtering',
        'Bcrypt password hashing, image upload processing, and global error handling middleware',
        'Deployed on Render with 99.9% uptime architecture'
      ],
      github: 'https://github.com/rajvermause',
      accent: 'var(--neon-emerald)'
    },
    {
      id: 'bank-core',
      title: 'BankCore API // Fintech Engine',
      tagline: 'Double-Entry Accounting & Atomic Ledger System',
      category: 'FINTECH & DISTRIBUTED SYSTEMS',
      tech: ['Node.js', 'Express.js', 'JWT', 'bcrypt', 'REST API', 'MVC Architecture', 'ACID Transactions'],
      description:
        'High-security backend engine engineered with fintech-grade transaction guarantees. Enforces a strict double-entry ledger ensuring zero balance discrepancies, atomic multi-account transfers, and tamper-evident financial audit trails.',
      highlights: [
        'Double-entry bookkeeping system guaranteeing atomic transactional consistency across debits and credits',
        'Layered middleware guards and JWT authentication defending sensitive financial transfer endpoints',
        'Multi-account lifecycle management with encrypted balance history and comprehensive audit logging',
        'Fintech-grade data validation preventing race conditions and double-spending attempts'
      ],
      github: 'https://github.com/rajvermause',
      accent: 'var(--neon-blue)'
    }
  ];

  section.innerHTML = `
    <div class="section-header" data-aos="fade-up">
      <div class="section-tag">
        <span class="hud-badge-dot" aria-hidden="true"></span>
        <span>04 &bull; Featured Projects</span>
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
                 data-aos-delay="${idx * 150}" 
                 id="card-${proj.id}">
          <div class="project-header">
            <span class="project-category font-mono" style="color: ${proj.accent};">${proj.category}</span>
            <div class="project-status-dot" style="background-color: ${proj.accent}; box-shadow: 0 0 8px ${proj.accent};"></div>
          </div>

          <h3 class="project-title">${proj.title}</h3>
          <p class="project-tagline font-mono text-cyber">${proj.tagline}</p>
          <p class="project-desc">${proj.description}</p>

          <div class="project-highlights">
            <span class="highlights-heading font-mono">Architecture Highlights</span>
            <ul>
              ${proj.highlights.map((h) => `<li>${h}</li>`).join('')}
            </ul>
          </div>

          <div class="project-tech-pills">
            ${proj.tech.map((t) => `<span class="tech-pill">${t}</span>`).join('')}
          </div>

          <div class="project-actions">
            <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn-project-link btn-github" aria-label="View source code on GitHub">
              <span>View on GitHub</span>
              <span aria-hidden="true">&rarr;</span>
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

    cards.forEach((card) => {
      const glare = card.querySelector<HTMLElement>('.card-glare');

      card.addEventListener('mouseenter', () => sound.playHover());

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

        if (glare) {
          glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 240, 255, 0.15) 0%, transparent 60%)`;
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
