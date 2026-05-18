import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import { ArchiveProjectImageFigure, ArchiveProjectLightbox } from './ArchiveProjectMedia'

const panels = [
  {
    src: '/projects/my-thoughts-assets/panel-01.jpg',
    alt: 'My Thoughts procreate illustration combining travel memories, sketches, and city imagery',
  },
]

export default function MyThoughtsProject() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <PortfolioShell>
      <main className="archive-project-page archive-project-page-single">
        <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

        <section className="archive-project-hero">
          <div className="archive-project-meta">
            <span className="archive-project-title">My Thoughts</span>
            <span className="archive-project-subtitle">Procreate</span>
          </div>
        </section>

        <section className="archive-project-stack archive-project-stack-full">
          {panels.map((panel) => (
            <ArchiveProjectImageFigure
              key={panel.src}
              src={panel.src}
              alt={panel.alt}
              figureClassName="archive-project-panel-cover"
              onOpen={setActiveImage}
            />
          ))}
        </section>

        <ArchiveProjectLightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
      </main>
    </PortfolioShell>
  )
}
