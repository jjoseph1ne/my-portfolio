import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import './HighSchoolOfficialAccountProject.css'
import { ArchiveProjectImageFigure, ArchiveProjectLightbox } from './ArchiveProjectMedia'

const topRowPanels = [
  {
    src: '/projects/high-school-official-account-assets/example-05.jpg',
    alt: 'High School Official Account Wetell question box article page',
  },
  {
    src: '/projects/high-school-official-account-assets/example-04.jpg',
    alt: 'High School Official Account sports carnival article page',
  },
]

const bottomRowPanels = [
  {
    src: '/projects/high-school-official-account-assets/example-03.jpg',
    alt: 'High School Official Account canteen open day article page',
  },
  {
    src: '/projects/high-school-official-account-assets/example-02.jpg',
    alt: 'High School Official Account music festival guide article page',
  },
  {
    src: '/projects/high-school-official-account-assets/example-01.jpg',
    alt: 'High School Official Account Tink volunteer club article page',
  },
]

export default function HighSchoolOfficialAccountProject() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <PortfolioShell>
      <main className="archive-project-page">
        <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

        <section className="archive-project-hero">
          <div className="archive-project-meta">
            <span className="archive-project-title">High School Official Account</span>
            <span className="archive-project-subtitle">Some examples of the layout design</span>
          </div>
        </section>

        <section className="archive-project-stack high-school-official-account-stack">
          <div className="high-school-official-account-row high-school-official-account-row-top">
            {topRowPanels.map((panel) => (
              <ArchiveProjectImageFigure
                key={panel.src}
                src={panel.src}
                alt={panel.alt}
                onOpen={setActiveImage}
              />
            ))}
          </div>

          <div className="high-school-official-account-row high-school-official-account-row-bottom">
            {bottomRowPanels.map((panel) => (
              <ArchiveProjectImageFigure
                key={panel.src}
                src={panel.src}
                alt={panel.alt}
                onOpen={setActiveImage}
              />
            ))}
          </div>
        </section>

        <ArchiveProjectLightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
      </main>
    </PortfolioShell>
  )
}
