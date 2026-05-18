import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import './ShootProject.css'
import { ArchiveProjectImageFigure, ArchiveProjectLightbox } from './ArchiveProjectMedia'

export default function ShootProject() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <PortfolioShell>
      <main className="archive-project-page archive-project-page-single shoot-project-page">
        <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

        <section className="archive-project-stack shoot-project-stack">
          <section className="shoot-project-intro">
            <section className="shoot-project-text-block archive-project-copy-block">
              <div className="archive-project-meta shoot-project-meta">
                <span className="archive-project-title">Shoot?</span>
                <span className="archive-project-subtitle">
                  Spring 2024 | Experimental Photography, Spring Show ITP/IMA
                </span>
              </div>

              <p className="archive-project-copy-label">Final project with Harry Xue</p>

              <p className="archive-project-copy-text">
                People usually hesitate on whether to photograph or to look up at the prettiest
                thing ever when they are experiencing it. Some individuals tried to preserve it by
                cameras, leaving digital or physical records; but some tried to leave their own
                impressions by feeling, experiencing it. What is the decisive moment for them, for
                us, to press the shutter, or to put down cameras and just feel it?
              </p>

              <p className="archive-project-copy-label">- Storyline</p>
              <p className="archive-project-copy-text">
                Ending 1: Pressing the shutter + choose to start over
              </p>
              <p className="archive-project-copy-text">
                Introduction – wave video – pressing shutter – video vanishing – instax comes out
                showing the bad effect of the photograph – start over – enjoying fireworks with
                bare eyes – end.
              </p>
              <p className="archive-project-copy-text">
                Ending 2: Pressing the shutter + not choose to start over
              </p>
              <p className="archive-project-copy-text">
                Introduction – wave video – pressing shutter – video vanishing – instax comes out
                showing the bad effect of the photograph – 20s countdown over – end.
              </p>

              <p className="archive-project-copy-label">- Inspiration</p>
              <p className="archive-project-copy-text">
                Our inspiration first came from the book we’ve read in class, “Decisive Moment” by
                Henri Cartier Bresson. The concept in the book resonates with us a lot, since it
                is an everyday problem. The hesitation comes as soon as we pick the camera up, and
                the echo of “should I take this photograph or just enjoy this moment” revolved
                again and again.
              </p>
            </section>

            <section className="shoot-project-gallery">
              <div className="shoot-project-gallery-primary">
                <ArchiveProjectImageFigure
                  src="/projects/shoot-assets/shoot-hero.jpg"
                  alt="Shoot installation view with projection and camera setup"
                  figureClassName="archive-project-panel-cover"
                  onOpen={setActiveImage}
                />
              </div>

              <div className="shoot-project-gallery-secondary">
                <ArchiveProjectImageFigure
                  src="/projects/shoot-assets/shoot-detail.jpg"
                  alt="Shoot installation participant interaction view"
                  onOpen={setActiveImage}
                />
              </div>
            </section>
          </section>

          <section className="archive-project-video-block">
            <div className="archive-project-video-frame">
              <iframe
                title="Shoot Vimeo player"
                src="https://player.vimeo.com/video/1013022088?h=9ab3935e3a"
                width="640"
                height="360"
                frameBorder="0"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
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
