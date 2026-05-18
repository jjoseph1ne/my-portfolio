import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import './SymphonyProject.css'
import { ArchiveProjectImageFigure, ArchiveProjectLightbox } from './ArchiveProjectMedia'

export default function SymphonyProject() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <PortfolioShell>
      <main className="archive-project-page archive-project-page-detail">
        <section className="archive-project-detail-layout symphony-layout">
          <div className="archive-project-detail-sidebar symphony-copy">
            <Link to="/photography/visual-works" className="archive-project-back">
              ← Back to Visual Works
            </Link>

            <div className="archive-project-meta">
              <span className="archive-project-title">Symphony</span>
              <span className="archive-project-subtitle">
                Spring 2024 | IRL/URL Performing Hybrid System
              </span>
            </div>

            <section className="archive-project-copy-block">
              <p className="archive-project-copy-label">
                Final Performance with Emma Grace Lehman, Harry Xue, Kally Hall
              </p>

              <p className="archive-project-copy-text">
                Our concept was to build a symphony from non-musical sounds that gradually connect
                into one composition. We staged the performance with one performer acting as a
                conductor who orchestrated the soundscape, while another performer delivered spoken
                text to connect the piece thematically.
              </p>

              <p className="archive-project-copy-text">
                One camera focused on the conductor. Behind them, a projection built the symphony
                visually through images, sounds, and light that ramped into one large collage. The
                text layer was designed to draw from audience prompts as well as responses we wrote
                beforehand, so the live performance could move between participation and authorship.
              </p>

              <p className="archive-project-copy-label">System</p>
              <p className="archive-project-copy-text">
                TouchDesigner detected the conductor&apos;s movement and generated corresponding
                particle effects in real time. p5.js responded to the same gestures with different
                sound tracks aligned with our original soundtrack built in Ableton Live.
              </p>
            </section>
          </div>

          <section className="archive-project-detail-content archive-project-stack symphony-stack">
            <section className="symphony-hero">
              <ArchiveProjectImageFigure
                src="/projects/symphony-assets/performance-02.JPG"
                alt="Symphony performance with projection reacting to the conductor"
                loading="eager"
                onOpen={setActiveImage}
              />
            </section>

            <section className="symphony-grid">
              <ArchiveProjectImageFigure
                src="/projects/symphony-assets/performance-01.JPG"
                alt="Symphony performance wide view with camera, projection, and stage setup"
                onOpen={setActiveImage}
              />

              <ArchiveProjectImageFigure
                src="/projects/symphony-assets/performance-03.JPG"
                alt="Symphony live reading and conductor interaction on stage"
                onOpen={setActiveImage}
              />
            </section>
          </section>
        </section>

        <ArchiveProjectLightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
      </main>
    </PortfolioShell>
  )
}
