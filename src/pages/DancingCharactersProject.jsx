import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import './DancingCharactersProject.css'

export default function DancingCharactersProject() {
  return (
    <PortfolioShell>
      <main className="archive-project-page">
        <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

        <section className="archive-project-hero">
          <div className="archive-project-meta">
            <span className="archive-project-title">Dancing Characters</span>
            <span className="archive-project-subtitle">Spring 2024 | IRL/URL Performing Hybrid System</span>
          </div>
        </section>

        <section className="archive-project-stack dancing-characters-stack">
          <section className="dancing-characters-copy archive-project-copy-block">
            <p className="archive-project-copy-text">
              Inspired by artist — Xu Bing, a Chinese artist who explores the integration of
              traditions and innovations by using multi-medias. One of his work was about
              creating his own writing system, which leads people to question their language
              system. Those characters were nonsensical, but challenged people&apos;s thoughts among
              linguistic traditions. We aimed to make a new form of characters that created by
              users, from different platforms, randomly generated.
            </p>
          </section>

          <div className="dancing-characters-hero">
            <figure className="archive-project-panel archive-project-panel-cover">
              <img
                src="/projects/dancing-characters-assets/cover.png"
                alt="Dancing Characters generated calligraphic composition"
                loading="lazy"
              />
            </figure>
          </div>

          <section className="dancing-characters-video-block">
            <video
              className="dancing-characters-video"
              controls
              playsInline
              preload="metadata"
              poster="/projects/dancing-characters-assets/cover.png"
            >
              <source src="/projects/dancing-characters-assets/dancing-characters.mov" />
            </video>
          </section>
        </section>
      </main>
    </PortfolioShell>
  )
}
