import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './TNTProject.css'

export default function TNTProject() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    } else {
      const s = document.createElement('script')
      s.src = 'https://www.instagram.com/embed.js'
      s.async = true
      document.body.appendChild(s)
    }
  }, [])

  return (
    <PortfolioShell>
      <div className="tnt-page">

        <Link to="/marketing" className="tnt-back">← Back to Marketing</Link>

        <article className="tnt-card">

          {/* ── Header ── */}
          <div className="tnt-card-header">
            <div className="tnt-card-title-block">
              <span className="tnt-kicker">Tisch New Theatre · NYU · 2024–2025</span>
              <h1 className="tnt-title">Social Media Manager</h1>
              <p className="tnt-subtitle">
                Building the voice of a student theater company across Instagram —
                campaign assets, production promotion, and community engagement.
              </p>
            </div>
            <div className="tnt-card-meta">
              <div>
                <span className="tnt-meta-label">Role</span>
                <span className="tnt-meta-value">Social Media Manager</span>
              </div>
              <div>
                <span className="tnt-meta-label">Org</span>
                <span className="tnt-meta-value">@tischnewtheatre</span>
              </div>
              <div>
                <span className="tnt-meta-label">Focus</span>
                <span className="tnt-meta-value">Content strategy · Campaign design · Community</span>
              </div>
            </div>
          </div>

          <p className="tnt-body">
            Tisch New Theatre is NYU Tisch School of the Arts' student-run theater company,
            producing full-scale musicals and plays each season. I managed the Instagram presence
            end-to-end — graphic asset creation, production campaigns, recruitment drives,
            and reels — shaping how TNT communicates to audiences, prospective creatives,
            and the broader NYU community.
          </p>

          {/* ── Divider ── */}
          <div className="tnt-divider" />

          {/* ── Campaign assets ── */}
          <div className="tnt-section-label">Campaign assets</div>
          <div className="tnt-poster-grid">
            <div className="tnt-poster-wrap">
              <img
                src="/projects/tnt-assets/tnt-recruit.jpg"
                alt="TNT Second Wave Creative Team Applications — Join Our Team"
                className="tnt-poster-img"
              />
              <span className="tnt-img-cap">Recruitment campaign · Second Wave Creative Team</span>
            </div>
            <div className="tnt-poster-wrap">
              <img
                src="/projects/tnt-assets/fun-home.jpeg"
                alt="Fun Home — Tisch New Theatre production poster, April 26 to May 4"
                className="tnt-poster-img"
              />
              <span className="tnt-img-cap">Production poster · Fun Home, April–May 2025</span>
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="tnt-divider" />

          {/* ── Live posts ── */}
          <div className="tnt-section-label">Live posts · @tischnewtheatre</div>
          <div className="tnt-embed-grid">
            <div className="tnt-embed-wrap">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/p/DIKiAbAAqCK/?utm_source=ig_embed&utm_campaign=loading"
                data-instgrm-version="14"
                style={{ margin: 0, width: '100%', minWidth: 0, borderRadius: '12px' }}
              />
            </div>
            <div className="tnt-embed-wrap">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/reel/DISQ90lPI1_/?utm_source=ig_embed&utm_campaign=loading"
                data-instgrm-version="14"
                style={{ margin: 0, width: '100%', minWidth: 0, borderRadius: '12px' }}
              />
            </div>
          </div>

        </article>
      </div>
    </PortfolioShell>
  )
}
