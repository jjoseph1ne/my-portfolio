import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import './SketchProject.css'
import { ArchiveProjectImageFigure, ArchiveProjectLightbox } from './ArchiveProjectMedia'

const soloPanels = [
  '/projects/sketch-assets/panel-01.jpg',
  '/projects/sketch-assets/panel-02.jpg',
  '/projects/sketch-assets/panel-03.jpg',
]

const rowPanels = [
  '/projects/sketch-assets/panel-04.jpg',
  '/projects/sketch-assets/panel-05.jpg',
  '/projects/sketch-assets/panel-06.jpg',
]

export default function SketchProject() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <PortfolioShell>
      <main className="archive-project-page">
        <Link className="archive-project-back" to="/photography/visual-works">
          ← Back to Visual Works
        </Link>

        <section className="archive-project-hero">
          <div className="archive-project-meta">
            <span className="archive-project-title">Sketch</span>
            <span className="archive-project-subtitle">Study Drawings</span>
          </div>
        </section>

        <div className="archive-project-stack sketch-project-stack" aria-label="Sketch content">
          {soloPanels.map((src, index) => (
            <ArchiveProjectImageFigure
              key={src}
              src={src}
              alt={`Sketch study ${index + 1}`}
              loading="eager"
              figureClassName={index === 0 ? 'archive-project-panel-cover' : ''}
              onOpen={setActiveImage}
            />
          ))}

          <div className="sketch-project-row">
            {rowPanels.map((src, index) => (
              <ArchiveProjectImageFigure
                key={src}
                src={src}
                alt={`Sketch study ${index + 4}`}
                loading="eager"
                onOpen={setActiveImage}
              />
            ))}
          </div>
        </div>

        <ArchiveProjectLightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
      </main>
    </PortfolioShell>
  )
}
