import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './DataResearch.css'

export default function DataResearch() {
  return (
    <PortfolioShell>
      <main className="data-index">
        <Link to="/product" className="data-index-back">← Back to Projects</Link>
        <header className="data-index-heading">
          <span className="folio-kicker">02 / Projects</span>
          <h1>Data / Research</h1>
          <p>Investigating how technical systems behave, and who their errors affect.</p>
        </header>

        <Link to="/product/identity-bias-audit" className="data-index-project">
          <div className="data-index-project-top">
            <span>01 / Responsible Data Science</span>
            <span>2026</span>
          </div>
          <div className="data-index-project-center">
            <span className="data-index-project-label">Model audit / NLP / Fairness</span>
            <h2>Identity Bias<br />Audit</h2>
            <p>When a model flags toxicity, does it treat identity mentions fairly?</p>
          </div>
          <div className="data-index-project-bottom">
            <span>NYU · Group project</span>
            <span>Explore project ↗</span>
          </div>
        </Link>
      </main>
    </PortfolioShell>
  )
}
