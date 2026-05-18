import { Link, useLocation } from 'react-router-dom'
import './PortfolioShell.css'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/product', label: 'Product / Design' },
  { to: '/marketing', label: 'Marketing' },
  { to: '/photography', label: 'Archive' },
  { to: '/about', label: 'About' },
]

function isActive(pathname, to) {
  if (to === '/') return pathname === '/'
  return pathname.startsWith(to)
}

export default function PortfolioShell({ children, showFooter = true }) {
  const { pathname } = useLocation()
  const splitBackdrop =
    pathname === '/photography'
      ? {
          leftImage: '/projects/archive-landing-assets/photography-fire.jpeg',
          rightImage: '/projects/archive-landing-assets/visual-works-blue.jpeg',
        }
      : pathname === '/photography/photography'
        ? {
            leftImage: '/projects/photography-sections-assets/photography-scenery-cover-02.JPG',
            rightImage: '/projects/photography-sections-assets/photography-portrait-cover-02.png',
          }
        : null
  const routeClass =
    pathname === '/'
      ? 'shell-route-home'
      : splitBackdrop
        ? 'shell-route-split-landing'
        : 'shell-route-inner'

  return (
    <div className={`shell ${routeClass}`}>
      {splitBackdrop && (
        <div
          className="shell-archive-backdrop"
          aria-hidden="true"
          style={{
            '--shell-split-left-image': `url(${splitBackdrop.leftImage})`,
            '--shell-split-right-image': `url(${splitBackdrop.rightImage})`,
          }}
        >
          <div className="shell-archive-backdrop-half shell-archive-backdrop-left" />
          <div className="shell-archive-backdrop-half shell-archive-backdrop-right" />
          <div className="shell-archive-backdrop-overlay" />
        </div>
      )}

      <div className="shell-blob shell-blob-one" aria-hidden="true" />
      <div className="shell-blob shell-blob-two" aria-hidden="true" />
      <div className="shell-blob shell-blob-three" aria-hidden="true" />

      <aside className="shell-sidebar">
        <div className="shell-sidebar-card">
          <Link to="/" className="shell-brand">Josephine Wang</Link>

          <nav className="shell-side-nav" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`shell-side-link ${isActive(pathname, item.to) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="shell-side-meta">
            <span>New York / Beijing</span>
            <a href="mailto:mw5333@nyu.edu">mw5333@nyu.edu</a>
          </div>
        </div>
      </aside>

      <div className="shell-stage">
        <header className="shell-header">
          <div className="shell-header-glass">
            <span className="shell-header-label">Portfolio</span>
            <nav className="shell-top-nav" aria-label="Secondary">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`shell-top-link ${isActive(pathname, item.to) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <a href="mailto:mw5333@nyu.edu" className="shell-header-cta"><span>Get in touch</span></a>
        </header>

        <div className="shell-content">
          {children}
        </div>

        {showFooter && <footer className="shell-footer" aria-hidden="true" />}
      </div>
    </div>
  )
}
