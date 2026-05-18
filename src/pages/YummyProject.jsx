import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import { ArchiveProjectImageFigure, ArchiveProjectLightbox } from './ArchiveProjectMedia'

export default function YummyProject() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <PortfolioShell>
      <main className="archive-project-page">
        <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

        <section className="archive-project-hero">
          <div className="archive-project-meta">
            <span className="archive-project-title">Yummy</span>
            <span className="archive-project-subtitle">Font Design</span>
          </div>
        </section>

        <section className="archive-project-stack">
          <ArchiveProjectImageFigure
            src="/projects/yummy-assets/panel-01.jpg"
            alt="Yummy concept, sketches, and letterform board"
            figureClassName="archive-project-panel-cover"
            onOpen={setActiveImage}
          />

          <ArchiveProjectImageFigure
            src="/projects/yummy-assets/panel-02.jpg"
            alt="Yummy font design title and process board"
            onOpen={setActiveImage}
          />

          <section className="archive-project-video-block">
            <div className="archive-project-video-frame">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/aE-OPuWw9fo?si=R9HMz73s7KFpgGlT"
                title="Yummy YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
        </section>

        <ArchiveProjectLightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
      </main>
    </PortfolioShell>
  )
}
