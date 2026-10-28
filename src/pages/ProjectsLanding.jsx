import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './ProjectsLanding.css'

const categories = [
  {
    number: '01',
    title: 'Design / Product',
    description: 'Interfaces, experiences, and speculative systems',
    count: '03 projects',
    to: '/product/design',
  },
  {
    number: '02',
    title: 'Data / Research',
    description: 'Models, evidence, and responsible technology',
    count: '01 project',
    to: '/product/data-research',
  },
]

export default function ProjectsLanding() {
  return (
    <PortfolioShell>
      <main className="projects-index">
        <div className="projects-index-heading">
          <span>Design or Data</span>
          <span>Selected work / Index</span>
        </div>

        <div className="projects-index-list" aria-label="Project categories">
          {categories.map((category) => (
            <Link to={category.to} className="projects-index-link" key={category.number}>
              <span className="projects-index-number">{category.number}</span>
              <span className="projects-index-copy">
                <span className="projects-index-title">{category.title}<span aria-hidden="true">.</span></span>
                <span className="projects-index-description">{category.description}</span>
              </span>
              <span className="projects-index-count">{category.count}</span>
              <span className="projects-index-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </main>
    </PortfolioShell>
  )
}
