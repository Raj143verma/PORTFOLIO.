import { sound } from '../audio/soundManager';

export function renderTerminalSection(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'container';

  container.innerHTML = `
    <div class="section-header" data-aos="fade-up">
      <div class="section-tag">
        <span class="hud-badge-dot" aria-hidden="true"></span>
        <span>Interactive Shell</span>
      </div>
      <h2 class="section-title">Developer Terminal</h2>
      <p class="section-subtitle">
        Direct shell access into the portfolio engine. Type <code class="cyber-code">help</code> to list available commands.
      </p>
    </div>

    <div class="cyber-card terminal-card" data-aos="zoom-in">
      <div class="terminal-bar">
        <div class="terminal-dots">
          <span class="term-dot dot-red"></span>
          <span class="term-dot dot-yellow"></span>
          <span class="term-dot dot-green"></span>
        </div>
        <div class="terminal-title font-mono">Terminal &mdash; guest@rajveer-sys &mdash; 80&times;24</div>
        <div class="terminal-status font-mono text-cyber">Ready / Online</div>
      </div>

      <div class="terminal-body" id="terminal-body">
        <div class="terminal-line text-muted">
          Raj Kumar Verma [Kernel v5.19.0-MERN-AI] &mdash; Interactive Recon Shell
        </div>
        <div class="terminal-line text-muted">
          Type '<span class="text-cyber">help</span>' for authorized directives or '<span class="text-cyber">projects</span>' to inspect repositories.
        </div>
        <div id="terminal-history"></div>
        <div class="terminal-prompt-line">
          <span class="prompt-user font-mono text-cyber">guest@rajveer-sys:~$</span>
          <input type="text" id="terminal-input" class="terminal-input" autocomplete="off" spellcheck="false" aria-label="Terminal command input" />
        </div>
      </div>
    </div>
  `;

  // Attach interactive terminal logic
  setTimeout(() => {
    const input = container.querySelector<HTMLInputElement>('#terminal-input');
    const history = container.querySelector<HTMLDivElement>('#terminal-history');
    const body = container.querySelector<HTMLDivElement>('#terminal-body');

    if (!input || !history || !body) return;

    input.addEventListener('keydown', (e) => {
      sound.playKeystroke();

      if (e.key === 'Enter') {
        const cmd = input.value.trim().toLowerCase();
        input.value = '';

        if (!cmd) return;

        // Append Command Line
        const userLine = document.createElement('div');
        userLine.className = 'terminal-line';
        userLine.innerHTML = `<span class="prompt-user text-cyber">guest@rajveer-sys:~$</span> <span>${escapeHtml(cmd)}</span>`;
        history.appendChild(userLine);

        // Process Command
        const responseLine = document.createElement('div');
        responseLine.className = 'terminal-line-output';

        switch (cmd) {
          case 'help':
            sound.playConfirm();
            responseLine.innerHTML = `
              <div class="term-output-grid">
                <div><span class="text-cyber">help</span> &mdash; List available commands</div>
                <div><span class="text-cyber">about</span> &mdash; Print engineer overview &amp; bio</div>
                <div><span class="text-cyber">skills</span> &mdash; Display technical arsenal</div>
                <div><span class="text-cyber">projects</span> &mdash; Inspect production applications</div>
                <div><span class="text-cyber">exp</span> &mdash; View career history &amp; academics</div>
                <div><span class="text-cyber">contact</span> &mdash; Reach out to Raj Kumar Verma</div>
                <div><span class="text-cyber">whoami</span> &mdash; Show current operative session</div>
                <div><span class="text-cyber">matrix</span> &mdash; Activate cyber stream visualization</div>
                <div><span class="text-cyber">clear</span> &mdash; Clear terminal screen</div>
              </div>
            `;
            break;

          case 'about':
            sound.playConfirm();
            responseLine.innerHTML = `
              <p><strong>RAJ KUMAR VERMA</strong> &mdash; Full-Stack (MERN) Developer &amp; SDE</p>
              <p>Specializing in secure multi-tier architectures, Groq AI integrations, and double-entry ledger financial systems.</p>
              <p>Location: Giridih, Jharkhand, India | University: UIT, Burdwan University (B.E. CSE '27)</p>
            `;
            break;

          case 'skills':
            sound.playConfirm();
            responseLine.innerHTML = `
              <p><span class="text-cyber">[LANGUAGES]</span> JavaScript (ES6+), Java, Python, C, C++</p>
              <p><span class="text-cyber">[FRONTEND]</span> React.js, Tailwind CSS, React Router, Axios, HTML5, CSS3, Bootstrap</p>
              <p><span class="text-cyber">[BACKEND]</span> Node.js, Express.js, REST APIs, JWT, bcrypt, OAuth, Double-Entry Accounting</p>
              <p><span class="text-cyber">[DATABASES]</span> MongoDB, Mongoose, MySQL, Prisma ORM</p>
              <p><span class="text-cyber">[DEVOPS/TOOLS]</span> Git, GitHub, Render, AWS (Basics), Postman, Cloudinary, Nodemon</p>
            `;
            break;

          case 'projects':
            sound.playConfirm();
            responseLine.innerHTML = `
              <p>1. <span class="text-cyber">AI Resume &amp; Job Fit Analyzer</span> &mdash; Groq AI, React, Node, Express, JWT, Axios</p>
              <p>2. <span class="text-cyber">StayGenie Real Estate Platform</span> &mdash; Full-stack Airbnb architecture with Interactive Maps</p>
              <p>3. <span class="text-cyber">BankCore API</span> &mdash; Double-entry accounting system with atomic transaction integrity</p>
              <p class="text-muted">(Scroll down to Projects Section for interactive 3D cards &amp; source links)</p>
            `;
            break;

          case 'exp':
            sound.playConfirm();
            responseLine.innerHTML = `
              <p><span class="text-cyber">Full-Stack Development Intern</span> @ Vaidsys Technologies (Apr 2026 - May 2026)</p>
              <p>- 15+ RBAC routes for 50+ concurrent users managing 1,000+ content assets.</p>
              <p>- Reduced publication time from 30 minutes to &lt;2 minutes (93% reduction).</p>
            `;
            break;

          case 'contact':
            sound.playConfirm();
            responseLine.innerHTML = `
              <p>Email: <a href="mailto:rajvermause@gmail.com" class="text-cyber">rajvermause@gmail.com</a></p>
              <p>Phone: <span class="text-cyber">+91 7970908458</span></p>
              <p>Location: Giridih, Jharkhand, India</p>
              <p>GitHub: <a href="https://github.com" target="_blank" rel="noopener" class="text-cyber">github.com</a> | LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener" class="text-cyber">linkedin.com</a></p>
            `;
            break;

          case 'whoami':
            sound.playConfirm();
            responseLine.innerHTML = `<span class="text-cyber">Guest Operative // Cleared for Public Portfolios [AUTH: PASS]</span>`;
            break;

          case 'matrix':
            sound.playConfirm();
            responseLine.innerHTML = `
              <pre class="matrix-text font-mono text-cyber">
01010010 01000001 01001010 00100000 01010110 01000101 01010010 01001101 01000001
[QUANTUM_CORE_INITIALIZED] &gt;&gt;&gt; REALITY SIMULATION: NOMINAL
01000110 01010101 01010100 01010101 01010010 01001001 01010011 01010100 01001001 01000011
              </pre>
            `;
            break;

          case 'sudo':
            sound.playClick();
            responseLine.innerHTML = `<span style="color: var(--neon-pink);">sudo: guest is not in the sudoers file. This incident has been logged and transmitted to Raj Kumar Verma.</span>`;
            break;

          case 'clear':
            history.innerHTML = '';
            return;

          default:
            responseLine.innerHTML = `<span class="text-muted">Command not recognized: '${escapeHtml(cmd)}'. Type '<span class="text-cyber">help</span>' for available commands.</span>`;
            break;
        }

        history.appendChild(responseLine);
        body.scrollTop = body.scrollHeight;
      }
    });
  }, 0);

  return container;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
