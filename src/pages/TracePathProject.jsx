import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import { ArchiveProjectImageFigure, ArchiveProjectLightbox } from './ArchiveProjectMedia'

const panels = [
  {
    src: '/projects/trace-me-assets/panel-01.jpg',
    alt: 'Trace the Path of Me concept board about figure skating, movement, and memory',
  },
  {
    src: '/projects/trace-me-assets/panel-02.jpg',
    alt: 'Trace the Path of Me poster system, installation photos, and skating trace studies',
  },
]

export default function TracePathProject() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <PortfolioShell>
      <main className="archive-project-page">
        <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

        <section className="archive-project-hero">
          <div className="archive-project-meta">
            <span className="archive-project-title">Trace the Path of Me</span>
            <span className="archive-project-subtitle">Poster Design</span>
          </div>
        </section>

        <section className="archive-project-stack">
          {panels.map((panel, index) => (
            <ArchiveProjectImageFigure
              key={panel.src}
              src={panel.src}
              alt={panel.alt}
              figureClassName={index === 0 ? 'archive-project-panel-cover' : ''}
              onOpen={setActiveImage}
            />
          ))}
        </section>

        <ArchiveProjectLightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
      </main>
    </PortfolioShell>
  )
}
