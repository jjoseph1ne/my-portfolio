import PortfolioShell from '../components/PortfolioShell'
import './PageLayout.css'

const education = [
  {
    period: 'Sep 2023 - May 2027',
    title: 'New York University',
    programs: [
      {
        school: 'Center for Data Science',
        degree: 'B.A. Data Science',
      },
      {
        school: 'Tisch School of the Arts',
        degree: 'B.F.A. Interactive Media Arts',
      },
    ],
    notes: [
      {
        label: 'Minor',
        value: 'Business of Entertainment Media Technology',
      },
      {
        label: 'Study Abroad',
        value: 'September - December 2025, New York University in Paris',
        spacious: true,
      },
      {
        label: 'Awards',
        value: "2023-2024, 2024-2025 Tisch School of the Arts Dean's List",
      },
    ],
  },
]

const experience = [
  {
    period: 'May 2025 - Jul 2025',
    company: 'Phoenix Digital Technology',
    role: 'Digital Marketing Intern',
    lines: [
      'Redesigned the information architecture of an interactive digital exhibition, translated research into content sequencing decisions, and produced 35+ visual and motion assets across the experience.',
    ],
  },
  {
    period: 'May 2025 - Jul 2025',
    company: 'Keyi Tech',
    role: 'Product Marketing Intern',
    lines: [
      'Built a creator ranking framework for Loona, analyzed audience and content performance data, and created weekly dashboards that informed influencer go-to-market decisions.',
    ],
  },
  {
    period: 'Feb 2025 - May 2025',
    company: 'The Style That Binds Us',
    role: 'Marketing Analyst Intern',
    lines: [
      'Maintained a segmented client database of 500+ records and conducted competitor and audience research that shaped ICP frameworks and founder-facing positioning.',
    ],
  },
  {
    period: 'Nov 2024 - Dec 2024',
    company: 'Finovax',
    role: 'UI/UX Design Intern',
    lines: [],
  },
  {
    period: 'May 2023 - Aug 2023',
    company: 'Visual China Group',
    role: 'Summer Intern',
    lines: [],
  },
]

const leadership = [
  {
    period: 'Apr 2026 - Present',
    company: 'Blockchain & Fintech Club, New York University',
    role: 'Marketing Lead',
    lines: [],
  },
  {
    period: 'Jan 2025 - Sep 2025',
    company: 'Tisch New Theatre, New York University',
    role: 'Social Media Manager',
    lines: [
      'Managed Instagram, TikTok, and Facebook for NYU Tisch productions, produced short-form content and poster assets, and supported audience development across three show cycles.',
    ],
  },
  {
    period: 'Nov 2024 - Mar 2025',
    company: 'Remorse, Chinese Opera Production',
    role: 'Marketing Lead',
    lines: [
      'Led a bilingual campaign across Instagram, RedNote, and WeChat, secured 8 KOL partnerships, and grew social presence from 0 to 200+ followers.',
    ],
  },
]

const skills = [
  {
    label: 'Programming',
    items: ['Python', 'SQL', 'Java', 'HTML/CSS'],
  },
  {
    label: 'Platforms',
    items: ['Excel', 'Figma', 'Adobe Creative Suite', 'Canva', 'Claude Code', 'Midjourney', 'Nano Banana 2', 'OpenAI Codex'],
  },
  {
    label: 'Languages',
    items: ['English (native)', 'Mandarin Chinese (native)', 'French (basic)'],
  },
]

export default function About() {
  return (
    <PortfolioShell>
      <div className="folio-page folio-page-about">
        <main className="folio-main">
          <section className="folio-section">
            <div className="folio-section-header">
              <h2>Education.</h2>
            </div>

            <div className="folio-list">
              {education.map((item) => (
                <article key={item.title} className="folio-list-row">
                  <time>{item.period}</time>
                  <div>
                    <h3>{item.title}</h3>
                    <div className="folio-education-lines">
                      {item.programs.map((program) => (
                        <p key={program.school} className="folio-education-program">
                          <strong className="folio-education-program-school">{program.school}</strong>
                          <span className="folio-education-divider">|</span>
                          <span className="folio-education-program-degree">{program.degree}</span>
                        </p>
                      ))}
                      {item.notes.map((note) => (
                        <div
                          key={note.label}
                          className={`folio-education-note${note.spacious ? ' folio-education-note-spacious' : ''}`}
                        >
                          <strong className="folio-education-note-label">{note.label}</strong>
                          <p className="folio-education-note-value">{note.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="folio-section">
            <div className="folio-section-header">
              <h2>Experience.</h2>
            </div>

            <div className="folio-list">
              {experience.map((item) => (
                <article key={item.company} className="folio-list-row">
                  <time>{item.period}</time>
                  <div>
                    <h3>{item.company}</h3>
                    <p className="folio-role-line">{item.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="folio-section">
            <div className="folio-section-header">
              <h2>Extracurricular.</h2>
            </div>

            <div className="folio-list">
              {leadership.map((item) => (
                <article key={item.company} className="folio-list-row">
                  <time>{item.period}</time>
                  <div>
                    <h3>{item.company}</h3>
                    <p className="folio-role-line">{item.role}</p>
                    {item.lines.length > 0 && (
                      <div className="folio-entry-lines">
                        {item.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="folio-section">
            <div className="folio-section-header">
              <h2>Skills.</h2>
            </div>

            <div className="folio-skill-stack">
              {skills.map((item) => (
                <div key={item.label} className="folio-skill-row">
                  <h3 className="folio-skill-label">{item.label}</h3>
                  <span className="folio-skill-line" aria-hidden="true" />
                  <div className="folio-skill-cloud">
                    {item.items.map((skill) => (
                      <span key={skill} className="folio-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="folio-contact-strip">
            <div className="folio-contact-card">
              <h2 className="folio-contact-title-single-line">Open to internships and creative opportunities.</h2>
              <p>
                If you are building something that needs both thoughtfulness and
                point of view, I would be glad to hear about it.
              </p>
              <div className="folio-contact-links">
                <a href="mailto:mw5333@nyu.edu" className="folio-link">Email</a>
                <a href="https://www.linkedin.com/in/josephine-wang-4a8b872b0/" target="_blank" rel="noreferrer" className="folio-link-secondary">
                  LinkedIn
                </a>
                <a href="mailto:mw5333@nyu.edu?subject=Resume%20Request" className="folio-link-secondary">
                  Resume
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PortfolioShell>
  )
}
