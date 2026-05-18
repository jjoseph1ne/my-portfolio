import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './PhotographyLanding.css'

const landingSections = [
  {
    title: 'Photography',
    to: '/photography/photography',
    image: '/projects/archive-landing-assets/photography-fire.jpeg',
    tone: 'visual-landing-card-photo',
  },
  {
    title: 'Visual Works',
    to: '/photography/visual-works',
    image: '/projects/archive-landing-assets/visual-works-blue.jpeg',
    tone: 'visual-landing-card-works',
  },
]

export default function Photography() {
  const gridRef = useRef(null)
  const [gridStyle, setGridStyle] = useState()

  useEffect(() => {
    const node = gridRef.current
    if (!node) return undefined

    const updateSeam = () => {
      const rect = node.getBoundingClientRect()
      const seamX = Math.max(0, Math.min(rect.width, window.innerWidth / 2 - rect.left))
      setGridStyle({ '--landing-seam-x': `${seamX}px` })
    }

    updateSeam()

    const observer = new ResizeObserver(updateSeam)
    observer.observe(node)
    window.addEventListener('resize', updateSeam)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateSeam)
    }
  }, [])

  return (
    <PortfolioShell>
      <main className="visual-landing-page">
        <section ref={gridRef} className="visual-landing-grid" style={gridStyle}>
          {landingSections.map((section) => (
            <Link
              key={section.title}
              to={section.to}
              className={`visual-landing-card ${section.tone}`}
              style={{ '--panel-image': `url(${section.image})` }}
              aria-label={section.title}
            />
          ))}

          <div className="visual-landing-title-layer" aria-hidden="true">
            {landingSections.map((section) => (
              <span
                key={`${section.title}-title`}
                className={`visual-landing-title ${section.tone}`}
              >
                {section.title}
              </span>
            ))}
          </div>
        </section>
      </main>
    </PortfolioShell>
  )
}
