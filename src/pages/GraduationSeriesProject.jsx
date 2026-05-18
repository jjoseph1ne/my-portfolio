import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import './GraduationSeriesProject.css'
import { ArchiveProjectImageFigure, ArchiveProjectLightbox } from './ArchiveProjectMedia'

const logoRowPanels = [
  {
    src: '/projects/graduation-series-assets/logo-class-of-23.png',
    alt: 'Graduation series class of 23 logo graphic',
    className: 'graduation-series-panel graduation-series-panel-logo graduation-series-panel-logo-class',
  },
  {
    src: '/projects/graduation-series-assets/logo-graduation.png',
    alt: 'Graduation series graduation typography poster',
    className: 'graduation-series-panel graduation-series-panel-logo graduation-series-panel-logo-graduation',
  },
]

const stickerRowPanels = [
  {
    src: '/projects/graduation-series-assets/stickers-oval-set.png',
    alt: 'Graduation series oval sticker set',
    className: 'graduation-series-panel graduation-series-panel-sticker graduation-series-panel-sticker-oval',
  },
  {
    src: '/projects/graduation-series-assets/sticker-cap-badge.png',
    alt: 'Graduation series graduation cap badge sticker',
    className: 'graduation-series-panel graduation-series-panel-sticker graduation-series-panel-sticker-badge',
  },
  {
    src: '/projects/graduation-series-assets/stickers-class-labels.jpeg',
    alt: 'Graduation series class of 2023 label stickers',
    className: 'graduation-series-panel graduation-series-panel-sticker graduation-series-panel-sticker-labels',
  },
]

const posterRowPanels = [
  {
    src: '/projects/graduation-series-assets/poster-white.jpg',
    alt: 'Graduation series white ceremony poster',
    className: 'graduation-series-panel graduation-series-panel-poster graduation-series-panel-poster-white',
  },
  {
    src: '/projects/graduation-series-assets/poster-invitation.jpg',
    alt: 'Graduation series blue invitation poster',
    className: 'graduation-series-panel graduation-series-panel-poster graduation-series-panel-poster-invitation',
  },
]

const mainVisualPanel = {
  src: '/projects/graduation-series-assets/poster-main-visual.png',
  alt: 'Graduation series main visual hero poster',
}

export default function GraduationSeriesProject() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <PortfolioShell>
      <main className="archive-project-page">
        <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

        <section className="archive-project-hero">
          <div className="archive-project-meta">
            <span className="archive-project-title">Graduation Series</span>
            <span className="archive-project-subtitle">Stickers, posters</span>
          </div>
        </section>

        <section className="archive-project-stack graduation-series-stack">
          <div className="graduation-series-row graduation-series-row-logos">
            {logoRowPanels.map((panel) => (
              <div key={panel.src} className={panel.className}>
                <ArchiveProjectImageFigure
                  src={panel.src}
                  alt={panel.alt}
                  onOpen={setActiveImage}
                />
              </div>
            ))}
          </div>

          <div className="graduation-series-row graduation-series-row-stickers">
            {stickerRowPanels.map((panel) => (
              <div key={panel.src} className={panel.className}>
                <ArchiveProjectImageFigure
                  src={panel.src}
                  alt={panel.alt}
                  onOpen={setActiveImage}
                />
              </div>
            ))}
          </div>

          <div className="graduation-series-row graduation-series-row-posters">
            {posterRowPanels.map((panel) => (
              <div key={panel.src} className={panel.className}>
                <ArchiveProjectImageFigure
                  src={panel.src}
                  alt={panel.alt}
                  onOpen={setActiveImage}
                />
              </div>
            ))}
          </div>

          <div className="graduation-series-row graduation-series-row-main-visual">
            <ArchiveProjectImageFigure
              src={mainVisualPanel.src}
              alt={mainVisualPanel.alt}
              onOpen={setActiveImage}
            />
          </div>
        </section>

        <ArchiveProjectLightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
      </main>
    </PortfolioShell>
  )
}
