import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import { ArchiveProjectImageFigure, ArchiveProjectLightbox } from './ArchiveProjectMedia'

const panels = [
  {
    src: '/projects/plastic-assets/panel-01.jpg',
    alt: 'Plastic concept board about waste, city life, and environmental impact',
  },
  {
    src: '/projects/plastic-assets/panel-02.jpg',
    alt: 'Plastic research, poster reference, and physical collage process board',
  },
  {
    src: '/projects/plastic-assets/panel-03.jpg',
    alt: 'Plastic city collage and composition studies',
  },
  {
    src: '/projects/plastic-assets/panel-04.jpg',
    alt: 'Plastic bag collage experiments and visual studies',
  },
  {
    src: '/projects/plastic-assets/panel-05.jpg',
    alt: 'Plastic waste collage using facial fragments and translucent bags',
  },
]

export default function PlasticProject() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <PortfolioShell>
      <main className="archive-project-page">
        <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

        <section className="archive-project-hero">
          <div className="archive-project-meta">
            <span className="archive-project-title">Plastic</span>
            <span className="archive-project-subtitle">Physical Collage</span>
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
