import { useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import './MazeSoccerProject.css'
import { ArchiveProjectImageFigure, ArchiveProjectLightbox } from './ArchiveProjectMedia'

export default function MazeSoccerProject() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <PortfolioShell>
      <main className="archive-project-page">
        <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

        <section className="archive-project-hero">
          <div className="archive-project-meta">
            <span className="archive-project-title">Maze Soccer</span>
            <span className="archive-project-subtitle">Fall 2023 | Creative Computing</span>
          </div>
        </section>

        <section className="archive-project-stack maze-soccer-stack">
          <section className="maze-soccer-copy archive-project-copy-block">
            <p className="archive-project-copy-text">
              Midterm project made with Luka Luo, continued exploration of p5.js + arduino
              (digital + physical computing)
            </p>
          </section>

          <div className="maze-soccer-hero">
            <ArchiveProjectImageFigure
              src="/projects/maze-soccer-assets/maze-soccer-cover.png"
              alt="Maze Soccer physical controller and p5.js maze game setup"
              figureClassName="archive-project-panel-cover"
              onOpen={setActiveImage}
            />
          </div>

          <section className="maze-soccer-video-block">
            <video
              className="maze-soccer-video"
              controls
              playsInline
              preload="metadata"
              poster="/projects/maze-soccer-assets/maze-soccer-cover.png"
            >
              <source src="/projects/maze-soccer-assets/maze-soccer-demo.mp4" />
            </video>
          </section>

          <ArchiveProjectImageFigure
            src="/projects/maze-soccer-assets/maze-soccer-detail.png"
            alt="Maze Soccer arduino control detail"
            onOpen={setActiveImage}
          />
        </section>

        <ArchiveProjectLightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
      </main>
    </PortfolioShell>
  )
}
