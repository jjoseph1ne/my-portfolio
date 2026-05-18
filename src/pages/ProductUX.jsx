import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import PortfolioShell from '../components/PortfolioShell'
import './PageLayout.css'
import './ProductUX.css'

const projects = [
  {
    id: 'p-01',
    number: '01',
    year: '2026',
    title: 'Soleluxe',
    type: 'Brand & experience redesign',
    blurb: 'A modular sneaker-accessory system centered on self-expression.',
    summary:
      'A recent design-a-thon project reframing Soleluxe from an accessory shop into a guided customization experience. The concept shifts the site away from item-by-item browsing and toward a modular styling system built around curated sets, DIY builds, mystery drops, and stronger visual identity.',
    tags: ['Brand strategy', 'E-commerce UX', 'Product system'],
    role: 'Research, repositioning, product system, and interface direction',
    outcome:
      'Defined a new positioning, built a tiered selling model, mapped the charm-builder flow, and translated the brand into a clearer UI system with custom typography, color, patterns, and component rules.',
    tone: 'folio-product-card-rose',
    cardClass: 'folio-product-panel-text-dark',
    cover: '/projects/soleluxe-previews/product-cover.png',
    to: '/product/soleluxe',
  },
  {
    id: 'p-02',
    number: '02',
    year: '2026',
    title: 'Fudget',
    type: 'Social budgeting app',
    blurb: 'Finance that feels lighter, more social, and less intimidating for Gen Z.',
    summary:
      'A UX design class project reframing budgeting for young adults who avoid traditional finance apps. Fudget combines wallet management, social money moments, and guided insights into a friendlier mobile experience.',
    tags: ['Fintech', 'Mobile UX', 'Social features'],
    role: 'Research synthesis, product framing, IA, flows, and UI direction',
    outcome:
      'Defined a calmer product architecture, developed wallet and social flows, and built a visual system that makes personal finance feel more approachable.',
    tone: 'folio-product-card-fudget',
    cover: '/projects/fudget-assets/product-cover.png',
    to: '/product/fudget',
  },
  {
    id: 'p-03',
    number: '03',
    year: '2026',
    title: 'Prisense',
    type: 'Speculative emotional sensing system',
    blurb: 'Emotional clarity through sensing, reflection, and real-time feedback.',
    summary:
      'A speculative hackathon project imagining a wearable and companion app that helps young adults perceive emotional signals that usually remain invisible, ambiguous, and hard to name in the moment.',
    tags: ['Speculative design', 'Wearable UX', 'Wellness systems'],
    role: 'Concept framing, product storytelling, sensing-system direction',
    outcome:
      'Framed a future-facing emotional awareness system across wearable feedback, reflective app modes, and safeguards for privacy and misuse.',
    tone: 'folio-product-card-mist',
    cardClass: 'folio-product-panel-text-forest',
    cover: '/projects/prisense-assets/cover-portrait.png',
    to: '/product/prisense',
  },
]

export default function ProductUX() {
  const navigate = useNavigate()
  const stripRef = useRef(null)
  const openTimeoutRef = useRef(null)
  const expandTimeoutRef = useRef(null)
  const dragRef = useRef({
    isDragging: false,
    pointerId: null,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
    suppressClickUntil: 0,
  })
  const [openingProjectId, setOpeningProjectId] = useState(null)
  const [openingOverlay, setOpeningOverlay] = useState(null)

  useEffect(() => () => {
    if (openTimeoutRef.current) {
      window.clearTimeout(openTimeoutRef.current)
    }
    if (expandTimeoutRef.current) {
      window.clearTimeout(expandTimeoutRef.current)
    }
  }, [])

  const handleStripWheel = (event) => {
    const strip = stripRef.current
    if (!strip) return

    const hasHorizontalOverflow = strip.scrollWidth > strip.clientWidth
    if (!hasHorizontalOverflow) return

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault()
      strip.scrollLeft += event.deltaY
    }
  }

  const handlePointerDown = (event) => {
    const strip = stripRef.current
    if (!strip || event.button !== 0) return

    dragRef.current = {
      isDragging: true,
      pointerId: null,
      startX: event.clientX,
      startScrollLeft: strip.scrollLeft,
      moved: false,
      suppressClickUntil: 0,
    }

    const handlePointerMove = (moveEvent) => {
      const currentStrip = stripRef.current
      const drag = dragRef.current
      if (!currentStrip || !drag.isDragging) return

      const deltaX = moveEvent.clientX - drag.startX
      if (Math.abs(deltaX) > 6) {
        drag.moved = true
        currentStrip.classList.add('is-dragging')
      }

      currentStrip.scrollLeft = drag.startScrollLeft - deltaX
    }

    const endDrag = (endEvent) => {
      const currentStrip = stripRef.current
      const drag = dragRef.current

      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', endDrag)
      window.removeEventListener('pointercancel', endDrag)

      if (currentStrip) {
        currentStrip.classList.remove('is-dragging')
      }

      dragRef.current = {
        isDragging: false,
        pointerId: null,
        startX: 0,
        startScrollLeft: currentStrip ? currentStrip.scrollLeft : 0,
        moved: false,
        suppressClickUntil: drag.moved ? endEvent.timeStamp + 180 : 0,
      }
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', endDrag)
    window.addEventListener('pointercancel', endDrag)
  }

  const handleProjectClick = (event, project) => {
    if (event.timeStamp < dragRef.current.suppressClickUntil) {
      event.preventDefault()
      return
    }

    if (!project?.to) return

    event.preventDefault()

    if (openingProjectId) return

    const rect = event.currentTarget.getBoundingClientRect()
    setOpeningOverlay({
      projectId: project.id,
      tone: project.tone,
      cardClass: project.cardClass ?? '',
      cover: project.cover ?? '',
      expanded: false,
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    })
    setOpeningProjectId(project.id)
    expandTimeoutRef.current = window.setTimeout(() => {
      setOpeningOverlay((current) =>
        current && current.projectId === project.id
          ? {
              ...current,
              expanded: true,
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            }
          : current,
      )
    }, 18)
    openTimeoutRef.current = window.setTimeout(() => {
      navigate(project.to)
    }, 430)
  }

  return (
    <PortfolioShell>
      <div className="folio-page folio-page-product">
        <main className="folio-main">
          <section className="folio-product-hero">
            <div className="folio-product-hero-bar">
              <span className="folio-kicker">Product / Design</span>
              <div className="folio-product-manifesto" aria-label="Product design introduction">
                <span>Product systems.</span>
                <span>Three selected studies.</span>
              </div>
            </div>
          </section>

          <section className="folio-section folio-product-gallery-section">
            <div className="folio-product-strip-shell">
              <div
                ref={stripRef}
                className="folio-product-strip"
                aria-label="Product gallery"
                onWheel={handleStripWheel}
                onPointerDown={handlePointerDown}
              >
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    to={project.to}
                    className={`folio-product-panel folio-product-panel-link ${project.tone}${project.cardClass ? ` ${project.cardClass}` : ''}${project.cover ? ' has-cover' : ''}${openingProjectId === project.id ? ' is-opening' : ''}`}
                    style={project.cover ? { '--folio-product-cover': `url('${project.cover}')` } : undefined}
                    onClick={(event) => handleProjectClick(event, project)}
                  >
                    <div className="folio-product-panel-top">
                      <span>{project.number}</span>
                      <span>{project.year}</span>
                    </div>
                    <div className="folio-product-panel-main">
                      <h3>{project.title}</h3>
                      <p>{project.type}</p>
                    </div>
                    <div className="folio-product-panel-bottom">
                      <span>{project.blurb}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>

        {openingOverlay ? (
          <div
            className={`folio-product-transition-overlay ${openingOverlay.tone}${openingOverlay.cardClass ? ` ${openingOverlay.cardClass}` : ''}${openingOverlay.cover ? ' has-cover' : ''}${openingOverlay.expanded ? ' is-expanded' : ''}`}
            style={{
              top: `${openingOverlay.top}px`,
              left: `${openingOverlay.left}px`,
              width: `${openingOverlay.width}px`,
              height: `${openingOverlay.height}px`,
              ...(openingOverlay.cover
                ? { '--folio-product-cover': `url('${openingOverlay.cover}')` }
                : undefined),
            }}
            aria-hidden="true"
          />
        ) : null}

      </div>
    </PortfolioShell>
  )
}
