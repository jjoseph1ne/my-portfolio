import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import './AgainstInterpretationProject.css'

export default function AgainstInterpretationProject() {
  return (
    <PortfolioShell>
      <main className="archive-project-page">
        <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

        <section className="archive-project-hero">
          <div className="archive-project-meta">
            <span className="archive-project-title">Collaborative Project: Against Interpretation</span>
            <span className="archive-project-subtitle">Spring 2024 | The World Through Art Writing</span>
          </div>
        </section>

        <section className="archive-project-stack against-interpretation-stack">
          <div className="against-interpretation-copy archive-project-copy-block">
            <p className="archive-project-copy-label">
              The final in class collaborative project made with Yilun Bi, Qinghua Wen, Ruby Lee,
              Junha Choi, Zihan Jiang
            </p>

            <p className="archive-project-copy-text">
              Visualizing / making a new art piece speaking the main points “Against
              Interpretation” is talking about.
            </p>
          </div>

          <section className="against-interpretation-video-block">
            <video
              className="against-interpretation-video"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/projects/against-interpretation-assets/collaborative-project.mp4" />
            </video>
          </section>
        </section>
      </main>
    </PortfolioShell>
  )
}
