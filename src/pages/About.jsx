import { Link } from 'react-router-dom'
import './About.css'
import headshot from '../assets/headshot.png'

export default function About() {
  return (
    <div className="ab-layout">

      {/* ── SIDEBAR ── */}
      <aside className="ab-sidebar">
        <div className="ab-sidebar-top">
          <span className="ab-sidebar-name">Josephine Wang</span>
        </div>
        <div className="ab-sidebar-bottom">
          <nav className="ab-sidebar-nav">
            <Link to="/product"     className="ab-sidebar-link">→ Product · UX</Link>
            <Link to="/marketing"   className="ab-sidebar-link">→ Marketing</Link>
            <Link to="/photography" className="ab-sidebar-link">→ Photography</Link>
            <Link to="/about"       className="ab-sidebar-link active">→ About</Link>
          </nav>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <main className="ab-main">

        {/* header */}
        <header className="ab-header">
          <nav className="ab-header-nav">
            <Link to="/product"     className="ab-nav-link">Product · UX</Link>
            <Link to="/marketing"   className="ab-nav-link">Marketing</Link>
            <Link to="/photography" className="ab-nav-link">Visual</Link>
            <a href="https://linkedin.com/in/josephine-wang-4a8b872b0/" target="_blank" rel="noreferrer" className="ab-nav-icon">LI</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="ab-nav-icon">BE</a>
          </nav>
        </header>

        {/* ── 3-COL CONTENT ── */}
        <div className="ab-columns">
          <img src={headshot} alt="" className="ab-bg-photo" aria-hidden="true" />

          {/* ── COL 1: INTRODUCTION ── */}
          <div className="ab-col">
            <h2 className="ab-col-heading"><span className="ab-col-num">01</span> Introduction</h2>

            <p className="ab-bio">
              Josephine Wang is a NYU student double majoring in Data Science & Interactive Media Arts.
              Multidisciplinary designer working across product, marketing, and visual communication.
            </p>
            <p className="ab-bio">
               
            </p>

            <div className="ab-links">
              <a href="/resume" className="ab-link" title="Resume">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                Resume
              </a>
              <a href="https://linkedin.com/in/josephine-wang-4a8b872b0/" target="_blank" rel="noreferrer" className="ab-link" title="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a href="mailto:mw5333@nyu.edu" className="ab-link" title="Email">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                E-mail
              </a>
            </div>
          </div>

          {/* ── COL 2: EDUCATION + EXPERIENCE ── */}
          <div className="ab-col ab-col--scroll">
            <h2 className="ab-col-heading"><span className="ab-col-num">02</span> Education</h2>
            <div className="ab-edu-list">
              <div className="ab-edu-row">
                <span className="ab-edu-period">Sep 2023 –<br/>May 2027</span>
                <div className="ab-edu-info">
                  <span className="ab-edu-school">New York University</span>
                  <span className="ab-edu-meta">Tisch Dean's List 2023–2025</span>
                  <div className="ab-edu-dual">
                    <div className="ab-edu-track">
                      <span className="ab-edu-degree">B.A. Data Science</span>
                      <span className="ab-edu-dept">Center for Data Science</span>
                    </div>
                    <div className="ab-edu-track">
                      <span className="ab-edu-degree">B.F.A. Interactive Media Arts</span>
                      <span className="ab-edu-dept">Tisch School of the Arts</span>
                      <br />
                      <span className="ab-edu-dept">Minor: Business of Entertainment, Media &amp; Technology</span>
                    </div>
                  </div>
                  <br />
                  <span className="ab-edu-coursework">Data Management &amp; Analysis · Probability &amp; Statistics · Linear Algebra · Data Structures · UX Design · Social Media Strategy · Business of Producing · Concert Management · Business Structure of Music Industry · Language of Film</span>
                </div>
              </div>
            </div>

            <h2 className="ab-col-heading ab-col-heading--mt"><span className="ab-col-num">03</span> Experiences</h2>
            <div className="ab-exp-list">
              {[
                { period: 'Nov 2025 –\nPresent', role: 'Product & UX',            org: 'Memora (startup)',                   tags: 'Product × AI × UX' },
                { period: 'May –\nJul 2025',     role: 'Digital Marketing Intern', org: 'Phoenix Digital Technology', tags: 'Content × User Insight × Experience Optimization' },
                { period: 'Apr –\nJun 2025',     role: 'Growth Marketing Intern',  org: 'Keyi Tech',                tags: 'Data-driven Marketing × Growth × ROI' },
                { period: 'Feb –\nMay 2025',     role: 'Marketing Analyst Intern', org: 'The Style That Binds Us',  tags: 'Fashion × Brand Strategy × Consumer Insight' },
              ].map((e) => (
                <div key={e.org} className="ab-exp-row">
                  <span className="ab-exp-period">{e.period.split('\n').map((l, i) => <span key={i}>{l}<br/></span>)}</span>
                  <div className="ab-exp-info">
                    <span className="ab-exp-role">{e.role}</span>
                    <span className="ab-exp-org">{e.org}</span>
                    <span className="ab-exp-tags">{e.tags}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── COL 3: SKILLS ── */}
          <div className="ab-col">
            <h2 className="ab-col-heading"><span className="ab-col-num">04</span> Skills</h2>
            <div className="ab-skills-list">
              {[
                { cat: 'Tools',              items: 'Excel (PivotTables, VLOOKUP, data modeling), SQL, Python, Google Analytics, Microsoft Office Suite' },
                { cat: 'Design & Production', items: 'Figma, Adobe Creative Suite (InDesign, Photoshop, Premiere Pro, After Effects), Canva, HTML/CSS' },
                { cat: 'Languages',          items: 'English (native), Mandarin Chinese (native), French (basic)' },
              ].map((s) => (
                <div key={s.cat} className="ab-skill-row">
                  <span className="ab-skill-cat">{s.cat}</span>
                  <span className="ab-skill-items">{s.items}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* footer */}
        <footer className="ab-footer">
          <span className="ab-footer-brand">Portfolio · Wang</span>
          <nav className="ab-footer-nav">
            <Link to="/product"     className="ab-footer-link">Product · UX</Link>
            <Link to="/marketing"   className="ab-footer-link">Marketing</Link>
            <Link to="/photography" className="ab-footer-link">Visual</Link>
            <Link to="/about"       className="ab-footer-link active">About</Link>
          </nav>
          <div className="ab-footer-icons">
            <a href="https://linkedin.com/in/josephine-wang-4a8b872b0/" target="_blank" rel="noreferrer" className="ab-footer-icon">LI</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="ab-footer-icon">BE</a>
          </div>
        </footer>

      </main>
    </div>
  )
}
