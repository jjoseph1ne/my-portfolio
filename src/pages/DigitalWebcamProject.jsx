import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import './DigitalWebcamProject.css'
import { ArchiveProjectImageFigure, ArchiveProjectLightbox } from './ArchiveProjectMedia'

export default function DigitalWebcamProject() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <PortfolioShell>
      <main className="archive-project-page">
        <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

        <section className="archive-project-hero">
          <div className="archive-project-meta">
            <span className="archive-project-title">Digital Webcam</span>
            <span className="archive-project-subtitle">Fall 2023 | Creative Computing</span>
          </div>
        </section>

        <section className="archive-project-stack digital-webcam-stack">
          <section className="digital-webcam-copy archive-project-copy-block">
            <p className="archive-project-copy-text">
              Simple assignment for learning webcam, translating normal faces to ASCII code.
            </p>
          </section>

          <div className="digital-webcam-hero">
            <ArchiveProjectImageFigure
              src="/projects/freshman-year-assets/digital-webcam.png"
              alt="Digital Webcam ASCII portrait output"
              figureClassName="archive-project-panel-cover"
              onOpen={setActiveImage}
            />
          </div>

          <section className="digital-webcam-video-block">
            <video
              className="digital-webcam-video"
              controls
              playsInline
              preload="metadata"
              poster="/projects/freshman-year-assets/digital-webcam.png"
            >
              <source src="/projects/freshman-year-assets/digital-webcam-demo.mov" />
            </video>
          </section>
        </section>

        <ArchiveProjectLightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
      </main>
    </PortfolioShell>
  )
}
