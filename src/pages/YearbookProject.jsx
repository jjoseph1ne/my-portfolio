import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import './YearbookProject.css'
import { ArchiveProjectImageFigure, ArchiveProjectLightbox } from './ArchiveProjectMedia'

const leftColumnPanels = [
  {
    src: '/projects/high-school-official-account-assets/yearbook-01-cover.png',
    alt: 'Yearbook campus cover spread with church tower and graduation booklet credits',
  },
  {
    src: '/projects/high-school-official-account-assets/yearbook-04-class-pages.png',
    alt: 'Yearbook class destination pages spread',
  },
]

const rightColumnPanels = [
  {
    src: '/projects/high-school-official-account-assets/yearbook-03-grade.png',
    alt: 'Yearbook grade team 2023 editorial spread',
  },
  {
    src: '/projects/high-school-official-account-assets/yearbook-05-art-festival.png',
    alt: 'Yearbook art festival and band spreads',
  },
]

export default function YearbookProject() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <PortfolioShell>
      <main className="archive-project-page">
        <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

        <section className="archive-project-hero">
          <div className="archive-project-meta">
            <span className="archive-project-title">Yearbook</span>
            <span className="archive-project-subtitle">Some pages of the graduation yearbook, layout design</span>
          </div>
        </section>

        <section className="archive-project-stack yearbook-project-stack">
          <div className="yearbook-project-columns">
            <div className="yearbook-project-column yearbook-project-column-left">
              {leftColumnPanels.map((panel) => (
                <ArchiveProjectImageFigure
                  key={panel.src}
                  src={panel.src}
                  alt={panel.alt}
                  onOpen={setActiveImage}
                />
              ))}
            </div>

            <div className="yearbook-project-column yearbook-project-column-right">
              {rightColumnPanels.map((panel) => (
                <ArchiveProjectImageFigure
                  key={panel.src}
                  src={panel.src}
                  alt={panel.alt}
                  onOpen={setActiveImage}
                />
              ))}
            </div>
          </div>
        </section>

        <ArchiveProjectLightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
      </main>
    </PortfolioShell>
  )
}
