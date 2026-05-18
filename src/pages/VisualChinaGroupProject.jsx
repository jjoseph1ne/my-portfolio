import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import './VisualChinaGroupProject.css'
import { ArchiveProjectLightbox } from './ArchiveProjectMedia'

const posters = [
  {
    src: '/projects/visual-china-assets/poster-03.png',
    alt: 'Fangshan District Cultural Creativity Competition vertical poster',
  },
  {
    src: '/projects/visual-china-assets/poster-02.png',
    alt: 'Fangshan District Cultural Creativity Competition banner design',
  },
  {
    src: '/projects/visual-china-assets/poster-01.png',
    alt: 'Logo and Poster Design Competition of MiYun campaign poster',
  },
  {
    src: '/projects/visual-china-assets/poster-04.png',
    alt: 'Poster board featuring selected entries and campaign key visual',
  },
]

const yearbookPages = [
  '/projects/visual-china-yearbook-pages/page-01.png',
  '/projects/visual-china-yearbook-pages/page-02.png',
  '/projects/visual-china-yearbook-pages/page-03.png',
  '/projects/visual-china-yearbook-pages/page-04.png',
  '/projects/visual-china-yearbook-pages/page-05.png',
  '/projects/visual-china-yearbook-pages/page-06.png',
  '/projects/visual-china-yearbook-pages/page-07.png',
  '/projects/visual-china-yearbook-pages/page-08.png',
]

export default function VisualChinaGroupProject() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <PortfolioShell>
      <main className="archive-project-page archive-project-page-detail">
        <section className="archive-project-detail-layout vcg-layout">
          <div className="archive-project-detail-sidebar vcg-copy">
            <Link to="/photography/visual-works" className="archive-project-back">
              ← Back to Visual Works
            </Link>

            <div className="archive-project-meta">
              <span className="archive-project-title">Internship at Visual China Group</span>
              <span className="archive-project-subtitle">Summer 2023</span>
            </div>
          </div>

          <section className="archive-project-detail-content archive-project-stack vcg-stack vcg-posters-section">
            <p className="vcg-section-title">Poster Designs</p>
            <p className="vcg-scroll-note">Scroll to view more</p>
            <div className="vcg-poster-rail" aria-label="Visual China Group internship posters">
              {posters.map((poster) => (
                <figure key={poster.src} className="vcg-poster-card">
                  <button
                    type="button"
                    className="vcg-poster-button"
                    onClick={() => setActiveImage(poster)}
                    aria-label={`Open ${poster.alt} full size`}
                  >
                    <img src={poster.src} alt={poster.alt} loading="lazy" className="vcg-poster-image" />
                  </button>
                </figure>
              ))}
            </div>
          </section>
        </section>

        <section className="archive-project-stack vcg-stack vcg-yearbook-section">
          <p className="vcg-section-title">
            Layout Design for &quot;Beijing Cultural Yearbook&quot;, published in 2024.
          </p>

          <div className="vcg-yearbook-pages">
            {yearbookPages.map((src, index) => {
              const image = {
                src,
                alt: `Beijing Cultural Yearbook layout page ${index + 1}`,
              }

              return (
                <figure key={src} className="vcg-yearbook-page">
                  <button
                    type="button"
                    className="vcg-yearbook-button"
                    onClick={() => setActiveImage(image)}
                    aria-label={`Open ${image.alt} full size`}
                  >
                    <img src={src} alt={image.alt} loading="lazy" className="vcg-yearbook-image" />
                  </button>
                </figure>
              )
            })}
          </div>
        </section>

        <ArchiveProjectLightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
      </main>
    </PortfolioShell>
  )
}
