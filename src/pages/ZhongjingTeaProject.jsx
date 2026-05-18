import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import { ArchiveProjectImageFigure, ArchiveProjectLightbox } from './ArchiveProjectMedia'

const panels = [
  {
    src: '/projects/zhongjing-tea-assets/panel-01.jpg',
    alt: 'Zhongjing Tea concept board combining herbal materials, tea, and character design',
  },
  {
    src: '/projects/zhongjing-tea-assets/panel-02.jpg',
    alt: 'Zhongjing Tea packaging development, references, and visual exploration',
  },
  {
    src: '/projects/zhongjing-tea-assets/panel-03.jpg',
    alt: 'Zhongjing Tea package prototypes and clay badge character studies',
  },
]

export default function ZhongjingTeaProject() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <PortfolioShell>
      <main className="archive-project-page">
        <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

        <section className="archive-project-hero">
          <div className="archive-project-meta">
            <span className="archive-project-title">Zhongjing Tea</span>
            <span className="archive-project-subtitle">Package Design</span>
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
