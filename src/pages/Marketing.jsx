import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Marketing.css'

const projects = [
  {
    id: '01',
    slug: 'phoenix',
    name: 'Phoenix Digital',
    title: 'Phoenix Digital — Campaign',
    desc: 'Managed 35+ campaign assets across video, motion graphics, and visual content for a cultural exhibition brand.',
    tags: 'Content Strategy | Motion Graphics | Market Research',
    imgClass: 'mkt-img-1',
  },
  {
    id: '02',
    slug: 'keyi',
    name: 'Keyi Tech',
    title: 'Keyi Tech — Growth',
    desc: 'Built a data-driven influencer evaluation framework and drove 1,000+ follower growth in 90 days.',
    tags: 'Growth Marketing | Data Analysis | Creator Partnerships',
    imgClass: 'mkt-img-2',
  },
  {
    id: '03',
    slug: 'style',
    name: 'The Style That Binds Us',
    title: 'The Style That Binds Us — Brand',
    desc: 'Managed a 500+ record client database and conducted competitive brand research for a digital fashion consultancy.',
    tags: 'Brand Strategy | Consumer Insight | Fashion',
    imgClass: 'mkt-img-3',
  },
  {
    id: '04',
    slug: 'memora-mkt',
    name: 'Memora',
    title: 'Memora — Product Marketing',
    desc: 'Translated AI model capabilities into user-facing product narratives for an early-stage travel photography platform.',
    tags: 'Product Marketing | AI | Storytelling',
    imgClass: 'mkt-img-4',
  },
]

const COLLAPSED_H = 72

export default function Marketing() {
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

  return (
    <div className="mkt-layout">

      {/* ── SIDEBAR ── */}
      <aside className="mkt-sidebar">
        <Link to="/" className="mkt-sidebar-brand">Portfolio · Wang</Link>
        <div className="mkt-sidebar-email">
          <span className="mkt-sidebar-sublabel">Email</span>
          <a href="mailto:mw5333@nyu.edu">mw5333@nyu.edu</a>
        </div>
        <div className="mkt-sidebar-projects">
          <span className="mkt-sidebar-label">Projects</span>
          {projects.map((p) => (
            <a key={p.id} href={`#${p.slug}`} className="mkt-sidebar-item">
              <span className="mkt-sidebar-num">{p.id}</span>
              {p.name}
            </a>
          ))}
        </div>
      </aside>

      {/* ── MAIN ── */}
      <main className="mkt-main">

        <header className="mkt-header">
          <nav className="mkt-header-nav">
            <Link to="/product"     className="mkt-nav-link">Product · UX</Link>
            <Link to="/marketing"   className="mkt-nav-link active">Marketing</Link>
            <Link to="/photography" className="mkt-nav-link">Visual</Link>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mkt-nav-icon">IG</a>
            <a href="https://linkedin.com/in/josephine-wang-4a8b872b0/" target="_blank" rel="noreferrer" className="mkt-nav-icon">LI</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="mkt-nav-icon">BE</a>
          </nav>
        </header>

        <div className="mkt-title-row">
          <h1 className="mkt-page-title">Marketing</h1>
          <span className="mkt-case-count">04 case studies</span>
        </div>

        <div className="mkt-rows">
          {projects.map((p, i) => {
            const isOpen = openIdx === i
            const panelH = isOpen ? (heights[i] || 300) : COLLAPSED_H

            return (
              <div key={p.id} className="mkt-row">

                <div
                  ref={(el) => (projectRefs.current[i] = el)}
                  id={p.slug}
                  className="mkt-project"
                >
                  <span className="mkt-project-num">{p.id}</span>
                  <h2 className="mkt-project-title">{p.title}</h2>
                  <p className="mkt-project-desc">{p.desc}</p>
                  <span className="mkt-project-tags">{p.tags}</span>
                  <a href="#" className="mkt-view-link">→ View</a>
                </div>

                <div
                  className={`mkt-img-panel ${p.imgClass} ${isOpen ? 'open' : 'closed'}`}
                  style={{ height: panelH }}
                  onMouseEnter={() => setOpenIdx(i)}
                  onMouseLeave={() => setOpenIdx(null)}
                >
                  <div className="mkt-fold-tab" />
                </div>

              </div>
            )
          })}
        </div>

        <footer className="mkt-footer">
          <Link to="/product"     className="mkt-footer-link">→ Product · UX</Link>
          <Link to="/marketing"   className="mkt-footer-link active">→ Marketing</Link>
          <Link to="/photography" className="mkt-footer-link">→ Photography</Link>
          <Link to="/about"       className="mkt-footer-link">→ About</Link>
        </footer>

      </main>
    </div>
  )
}
