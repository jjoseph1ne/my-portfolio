import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import { ArchiveProjectImageFigure, ArchiveProjectLightbox } from './ArchiveProjectMedia'

export default function IrrigationProject() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <PortfolioShell>
      <main className="archive-project-page">
        <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

        <section className="archive-project-hero">
          <div className="archive-project-meta">
            <span className="archive-project-title">Irrigation</span>
            <span className="archive-project-subtitle">Interactive Multimedia Book</span>
          </div>
        </section>

        <section className="archive-project-stack">
          <ArchiveProjectImageFigure
            src="/projects/irrigation-assets/panel-01.jpg"
            alt="Irrigation background and research board"
            figureClassName="archive-project-panel-cover"
            onOpen={setActiveImage}
          />

          <ArchiveProjectImageFigure
            src="/projects/irrigation-assets/panel-02.jpg"
            alt="Irrigation concept, storyboard, and final work board"
            onOpen={setActiveImage}
          />

          <section className="archive-project-video-block">
            <div className="archive-project-video-frame">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1tUonDBhpQA?si=HUdNmmwRWFtQC_IN"
                title="Irrigation YouTube video player"
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
