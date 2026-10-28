import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './PhotographyLanding.css'

const landingSections = [
  {
    title: 'Photography',
    to: '/photography/photography',
    meta: 'Scenery, Portrait',
  },
  {
    title: 'Visual Works',
    to: '/photography/visual-works',
    meta: 'Interactive, Graphic, Motion',
  },
]

export default function Photography() {
  return (
    <PortfolioShell>
      <main className="archive-entry-page">
        <div className="archive-entry-heading">
          <span>Archive / Index</span>
          <span>Selected visual practice</span>
        </div>
        <section className="archive-entry-grid" aria-label="Archive sections">
          {landingSections.map((section, index) => (
            <Link
              key={section.title}
              to={section.to}
              className="archive-entry-option"
            >
              <span className="archive-entry-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="archive-entry-copy">
                <span className="archive-entry-title">{section.title}</span>
                <span className="archive-entry-meta">{section.meta}</span>
              </span>
              <span className="archive-entry-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </section>
      </main>
    </PortfolioShell>
  )
}
