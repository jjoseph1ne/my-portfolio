import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import './ScribeProject.css'
import { ArchiveProjectImageFigure, ArchiveProjectLightbox } from './ArchiveProjectMedia'

export default function ScribeProject() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <PortfolioShell>
      <main className="archive-project-page archive-project-page-detail">
        <section className="archive-project-detail-layout scribe-layout">
          <div className="archive-project-detail-sidebar">
            <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

            <div className="archive-project-meta">
              <span className="archive-project-title">Scribe</span>
              <span className="archive-project-subtitle">
                Spring 2025 | Designing Interface for Live Performance
              </span>
            </div>

            <section className="scribe-copy archive-project-copy-block">
              <p className="archive-project-copy-text">
                Tech Used: AbletonLive, Touch Designer, Arduino
              </p>

              <p className="archive-project-copy-label">Audio-Visual Performance.</p>
              <p className="archive-project-copy-text">
                Concept: Through real-time motion capture, the ‘vitality and vitality’ of Chinese
                calligraphy is transformed into a flowing landscape of light and sound – every
                stroke&apos;s force, speed and rhythm drives the breathing of the monochrome light array
                and the evolution of the electronic sound scene. This project aims to connect the
                intuitive perception of the body with the expression of sound, reconfiguring the
                significance of calligraphy in contemporary media: no longer relying on brushes and
                paper, but rather integrating digital trajectories with spatial sounds.
              </p>

              <p className="archive-project-copy-label">Cultural + Technological:</p>
              <p className="archive-project-copy-text">
                Oriental Aesthetics: blankness (the contrast between real and empty strokes) in
                calligraphy → Corresponding to the “particle dispersion” effect in light
                installations.
              </p>
              <p className="archive-project-copy-text">
                Interactional Metaphor: “lifting, pressing, lifting and pausing” of a brush → Maps
                onto the “attack-decay” of sounds (e.g. a sudden stroke of the brush = a low-pitched
                drum sound, a gentle lifting = a high-pitched electronic sound)
              </p>
              <p className="archive-project-copy-text">
                Monochrome Philosophy: The “White Space” in Black-and-White Ink Wash Painting →
                Constructing Visual Hierarchy with Negative Space (Darkness) and Light (White)
              </p>
            </section>
          </div>

          <section className="archive-project-detail-content archive-project-stack scribe-stack">
            <section className="scribe-feature">
              <ArchiveProjectImageFigure
                src="/projects/scribe-assets/performance.jpeg"
                alt="Scribe live performance scene with projection"
                onOpen={setActiveImage}
              />
            </section>

            <section className="archive-project-video-block">
              <video
                className="scribe-video"
                controls
                playsInline
                preload="metadata"
                poster="/projects/scribe-assets/cover.jpeg"
              >
                <source src="/projects/scribe-assets/demo.mov" />
              </video>
            </section>

            <ArchiveProjectImageFigure
              src="/projects/scribe-assets/detail.png"
              alt="Scribe hardware and controller wiring detail"
              onOpen={setActiveImage}
            />
          </section>
        </section>

        <ArchiveProjectLightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
      </main>
    </PortfolioShell>
  )
}
