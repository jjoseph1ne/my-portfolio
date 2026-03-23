import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ProductUX.css'

const projects = [
  {
    id: '01',
    slug: 'kwantage',
    name: 'Kwantage',
    title: 'Kwantage — Onboarding',
    desc: 'Reduced drop-off by 40%, achieving 4.8/5 satisfaction across 500+ beta users.',
    tags: 'UX Design | User Research | Prototyping',
    imgClass: 'pux-img-1',
  },
  {
    id: '02',
    slug: 'toad',
    name: 'Toad + Alberta',
    title: 'Toad + Alberta — Commerce',
    desc: 'Streamlined checkout from 7 to 3 steps, boosting mobile conversion by 32%.',
    tags: 'Mobile UX | Interaction | A/B Testing',
    imgClass: 'pux-img-2',
  },
  {
    id: '03',
    slug: 'nyu',
    name: 'NYU Portal',
    title: 'NYU Student Portal',
    desc: 'Reduced task completion time by 55% through information architecture research with 120 students.',
    tags: 'Info Architecture | Research | Figma',
    imgClass: 'pux-img-3',
  },
  {
    id: '04',
    slug: 'wpp',
    name: 'WPP Group',
    title: 'WPP — Design System',
    desc: '200+ components, 40+ tokens — adopted by 3 product teams within 6 months.',
    tags: 'Design Systems | Figma | Tokens',
    imgClass: 'pux-img-4',
  },
]

const COLLAPSED_H = 72

export default function ProductUX() {
  const [openIdx, setOpenIdx] = useState(null)
  const projectRefs = useRef([])
  const [heights, setHeights] = useState([])

  useEffect(() => {
    const measure = () =>
      setHeights(projectRefs.current.map((r) => r?.offsetHeight ?? 0))

    measure()
    const ro = new ResizeObserver(measure)
    projectRefs.current.forEach((r) => r && ro.observe(r))
    return () => ro.disconnect()
  }, [])

  const open = (i) => setOpenIdx(i)
  const close = () => setOpenIdx(null)

  return (
    <div className="pux-layout">

      {/* ── SIDEBAR ── */}
      <aside className="pux-sidebar">
        <Link to="/" className="pux-sidebar-brand">Portfolio · Wang</Link>
        <div className="pux-sidebar-email">
          <span className="pux-sidebar-sublabel">Email</span>
          <a href="mailto:mw5333@nyu.edu">mw5333@nyu.edu</a>
        </div>
        <div className="pux-sidebar-projects">
          <span className="pux-sidebar-label">Projects</span>
          {projects.map((p) => (
            <a key={p.id} href={`#${p.slug}`} className="pux-sidebar-item">
              <span className="pux-sidebar-num">{p.id}</span>
              {p.name}
            </a>
          ))}
        </div>
      </aside>

      {/* ── MAIN ── */}
      <main className="pux-main">

        <header className="pux-header">
          <nav className="pux-header-nav">
            <Link to="/product" className="pux-nav-link active">Product · UX</Link>
            <Link to="/marketing" className="pux-nav-link">Marketing</Link>
            <Link to="/photography" className="pux-nav-link">Visual</Link>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="pux-nav-icon">IG</a>
            <a href="https://linkedin.com/in/josephine-wang-4a8b872b0/" target="_blank" rel="noreferrer" className="pux-nav-icon">LI</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="pux-nav-icon">BE</a>
          </nav>
        </header>

        <div className="pux-title-row">
          <h1 className="pux-page-title">Product · UX</h1>
          <span className="pux-case-count">04 case studies</span>
        </div>

        {/* rows: each project + its image side-by-side */}
        <div className="pux-rows">
          {projects.map((p, i) => {
            const isOpen = openIdx === i
            const panelH = isOpen ? (heights[i] || 300) : COLLAPSED_H

            return (
              <div key={p.id} className="pux-row">

                {/* LEFT: project text */}
                <div
                  ref={(el) => (projectRefs.current[i] = el)}
                  id={p.slug}
                  className="pux-project"
                >
                  <span className="pux-project-num">{p.id}</span>
                  <h2 className="pux-project-title">{p.title}</h2>
                  <p className="pux-project-desc">{p.desc}</p>
                  <span className="pux-project-tags">{p.tags}</span>
                  <a href="#" className="pux-view-link">→ View</a>
                </div>

                {/* RIGHT: accordion image panel */}
                <div
                  className={`pux-img-panel ${p.imgClass} ${isOpen ? 'open' : 'closed'}`}
                  style={{ height: panelH }}
                  onMouseEnter={() => open(i)}
                  onMouseLeave={close}
                >
                  <div className="pux-fold-tab" />
                </div>

              </div>
            )
          })}
        </div>

        <footer className="pux-footer">
          <Link to="/product" className="pux-footer-link active">→ Product · UX</Link>
          <Link to="/marketing" className="pux-footer-link">→ Marketing</Link>
          <Link to="/photography" className="pux-footer-link">→ Photography</Link>
          <Link to="/about" className="pux-footer-link">→ About</Link>
        </footer>

      </main>
    </div>
  )
}
