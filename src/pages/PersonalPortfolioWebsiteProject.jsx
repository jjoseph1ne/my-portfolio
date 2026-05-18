import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ArchiveProject.css'

export default function PersonalPortfolioWebsiteProject() {
  return (
    <PortfolioShell>
      <main className="archive-project-page">
        <Link to="/photography/visual-works" className="archive-project-back">← Back to Visual Works</Link>

        <section className="archive-project-hero">
          <div className="archive-project-meta">
            <span className="archive-project-title">Personal Portfolio Website Building</span>
            <span className="archive-project-subtitle">
              Spring 2024 | Introduction to Web Design and Web Programming
            </span>
          </div>
        </section>
      </main>
    </PortfolioShell>
  )
}
