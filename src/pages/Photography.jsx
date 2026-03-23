import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Photography.css'

export default function Visual() {
  const [active, setActive] = useState(null)

  return (
    <div className="vis-layout">

      {/* ── SIDEBAR ── */}
      <aside className="vis-sidebar">
        <Link to="/" className="vis-sidebar-brand">Portfolio · Wang</Link>
        <div className="vis-sidebar-email">
          <span className="vis-sidebar-sublabel">Email</span>
          <a href="mailto:mw5333@nyu.edu">mw5333@nyu.edu</a>
        </div>
        <div className="vis-sidebar-sections">
          <span className="vis-sidebar-label">Sections</span>
          <button
            className={`vis-sidebar-item ${active === 'design' ? 'active' : ''}`}
            onClick={() => setActive('design')}
          >
            <span className="vis-sidebar-num">01</span>
            Visual Design
          </button>
          <button
            className={`vis-sidebar-item ${active === 'photo' ? 'active' : ''}`}
            onClick={() => setActive('photo')}
          >
            <span className="vis-sidebar-num">02</span>
            Photography
          </button>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <main className="vis-main">

        <header className="vis-header">
          <nav className="vis-header-nav">
            <Link to="/product"     className="vis-nav-link">Product · UX</Link>
            <Link to="/marketing"   className="vis-nav-link">Marketing</Link>
            <Link to="/photography" className="vis-nav-link active">Visual</Link>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="vis-nav-icon">IG</a>
            <a href="https://linkedin.com/in/josephine-wang-4a8b872b0/" target="_blank" rel="noreferrer" className="vis-nav-icon">LI</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="vis-nav-icon">BE</a>
          </nav>
        </header>

        <div className="vis-title-row">
          <h1 className="vis-page-title">Visual</h1>
        </div>

        {/* ── SECTION PICKER ── */}
        {active === null && (
          <div className="vis-picker">
            <button
              className="vis-pick-card vis-pick-design"
              onClick={() => setActive('design')}
            >
              <span className="vis-pick-num">01</span>
              <span className="vis-pick-label">Visual Design</span>
              <span className="vis-pick-sub">Graphic · Brand · Motion</span>
              <span className="vis-pick-arrow">→</span>
            </button>
            <button
              className="vis-pick-card vis-pick-photo"
              onClick={() => setActive('photo')}
            >
              <span className="vis-pick-num">02</span>
              <span className="vis-pick-label">Photography</span>
              <span className="vis-pick-sub">Editorial · Portrait · Street</span>
              <span className="vis-pick-arrow">→</span>
            </button>
          </div>
        )}

        {/* ── VISUAL DESIGN CONTENT (placeholder) ── */}
        {active === 'design' && (
          <div className="vis-section">
            <div className="vis-section-header">
              <button className="vis-back" onClick={() => setActive(null)}>← Back</button>
              <span className="vis-section-title">Visual Design</span>
            </div>
            <div className="vis-empty">
              <span>Content coming soon</span>
            </div>
          </div>
        )}

        {/* ── PHOTOGRAPHY CONTENT (placeholder) ── */}
        {active === 'photo' && (
          <div className="vis-section">
            <div className="vis-section-header">
              <button className="vis-back" onClick={() => setActive(null)}>← Back</button>
              <span className="vis-section-title">Photography</span>
            </div>
            <div className="vis-empty">
              <span>Content coming soon</span>
            </div>
          </div>
        )}

        <footer className="vis-footer">
          <Link to="/product"     className="vis-footer-link">→ Product · UX</Link>
          <Link to="/marketing"   className="vis-footer-link">→ Marketing</Link>
          <Link to="/photography" className="vis-footer-link active">→ Visual</Link>
          <Link to="/about"       className="vis-footer-link">→ About</Link>
        </footer>

      </main>
    </div>
  )
}
