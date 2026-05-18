import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'
import './CauseWebsiteProject.css'

export default function CauseWebsiteProject() {
  return (
    <PortfolioShell>
      <main className="archive-project-page">
        <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

        <section className="archive-project-hero">
          <div className="archive-project-meta">
            <span className="archive-project-title">Cause Website Building</span>
            <span className="archive-project-subtitle">
              Spring 2024 | Introduction to Web Design and Web Programming
            </span>
          </div>
        </section>

        <section className="archive-project-stack cause-website-stack">
          <section className="cause-website-copy archive-project-copy-block">
            <p className="archive-project-copy-text">
              Used: HTML, CSS, google fonts, google photos, bootstrap, jquery
            </p>
          </section>

          <figure className="archive-project-panel archive-project-panel-cover cause-website-cover">
            <img
              src="/projects/cause-website-assets-cover.png"
              alt="Cause website building homepage screenshot"
              loading="lazy"
            />
          </figure>

          <section className="archive-project-video-block">
            <div className="archive-project-video-frame">
              <iframe
                title="Cause Website Building Vimeo player"
                src="https://player.vimeo.com/video/1013029677?h=6da9cd9467"
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
      </main>
    </PortfolioShell>
  )
}
