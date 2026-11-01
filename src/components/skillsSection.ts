import { sound } from '../audio/soundManager';

export function renderSkillsSection(): HTMLElement {
  const section = document.createElement('div');
  section.className = 'container';

  const skillCategories = [
    {
      category: 'Backend & APIs',
      icon: '⚡',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT & RBAC', 'bcrypt', 'MVC Pattern']
    },
    {
      category: 'Frontend Development',
      icon: '🖥️',
      skills: ['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'React Router', 'Responsive UI']
    },
    {
      category: 'Databases & Storage',
      icon: '🗄️',
      skills: ['MongoDB', 'Mongoose', 'MySQL', 'Prisma ORM', 'Schema Design']
    },
    {
      category: 'Core Languages',
      icon: '💻',
      skills: ['JavaScript (ES6+)', 'Java', 'Python', 'C', 'C++']
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['Git & GitHub', 'Postman', 'Render', 'AWS (Basics)', 'Cloudinary']
    },
    {
      category: 'CS Fundamentals',
      icon: '🧠',
      skills: ['DSA', 'OOP Concepts', 'System Architecture', 'Operating Systems', 'DBMS']
    }
  ];

  section.innerHTML = `
    <div class="section-header" data-aos="fade-up">
      <div class="section-tag">
        <span>Technical Arsenal</span>
      </div>
      <h2 class="section-title">Skills &amp; Capabilities</h2>
      <p class="section-subtitle">
        Core technologies employed across production full-stack systems, secure microservices, and AI pipelines.
      </p>
    </div>

    <div class="skills-grid">
      ${skillCategories
        .map(
          (cat, idx) => `
        <div class="cyber-card skill-group-card" data-aos="fade-up" data-aos-delay="${(idx % 3) * 100}">
          <div class="skill-group-header">
            <div class="skill-group-title">
              <span class="skill-icon-box" aria-hidden="true">${cat.icon}</span>
              <h3>${cat.category}</h3>
            </div>
          </div>

          <div class="skill-tags">
            ${cat.skills.map((s) => `<span class="skill-tag">${s}</span>`).join('')}
          </div>
        </div>
      `
        )
        .join('')}
    </div>
  `;

  // Attach hover sounds
  setTimeout(() => {
    const cards = section.querySelectorAll<HTMLElement>('.skill-group-card');
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => sound.playHover());
    });
  }, 0);

  return section;
}
