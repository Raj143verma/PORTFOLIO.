export function renderSkillsSection(): HTMLElement {
  const section = document.createElement('div');
  section.className = 'container';

  const skillCategories = [
    {
      category: 'Backend & APIs',
      icon: '⚡',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'bcrypt', 'OAuth', 'Double-Entry Ledger', 'MVC Architecture'],
      level: 95
    },
    {
      category: 'Frontend Development',
      icon: '🖥️',
      skills: ['React.js', 'Tailwind CSS', 'React Router', 'HTML5 & CSS3', 'Axios', 'Bootstrap', 'EJS', 'Responsive UI'],
      level: 92
    },
    {
      category: 'Databases & ORM',
      icon: '🗄️',
      skills: ['MongoDB', 'Mongoose', 'MySQL', 'Prisma ORM', 'Schema Design', 'Data Aggregation'],
      level: 88
    },
    {
      category: 'Programming Languages',
      icon: '💻',
      skills: ['JavaScript (ES6+)', 'Java', 'Python', 'C', 'C++'],
      level: 90
    },
    {
      category: 'Tools, Cloud & DevOps',
      icon: '☁️',
      skills: ['Git & GitHub', 'Postman', 'Render', 'AWS (Basics)', 'Cloudinary', 'Nodemon', 'dotenv'],
      level: 86
    },
    {
      category: 'CS Fundamentals',
      icon: '🧠',
      skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Operating Systems', 'Computer Networks', 'Software Engineering'],
      level: 94
    }
  ];

  section.innerHTML = `
    <div class="section-header" data-aos="fade-up">
      <div class="section-tag">
        <span>Technical Arsenal</span>
      </div>
      <h2 class="section-title">Skills &amp; Capabilities</h2>
      <p class="section-subtitle">
        Battle-tested technologies employed across production full-stack systems, secure microservices, and AI pipelines.
      </p>
    </div>

    <div class="skills-grid">
      ${skillCategories
        .map(
          (cat, idx) => `
        <div class="cyber-card skill-group-card" data-aos="fade-up" data-aos-delay="${(idx % 3) * 100}">
          <div class="skill-group-header">
            <div class="skill-group-title">
              <span class="skill-icon" aria-hidden="true">${cat.icon}</span>
              <h3>${cat.category}</h3>
            </div>
            <span class="skill-group-pct font-mono text-cyber">${cat.level}%</span>
          </div>

          <div class="skill-progress-track">
            <div class="skill-progress-bar" style="width: ${cat.level}%;"></div>
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

  return section;
}
