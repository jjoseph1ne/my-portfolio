import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './PhotographyGallery.css'

const FEATURE_GAP = 16
const FEATURE_LEFT_TOP_ASPECT = 1443 / 1018
const FEATURE_LEFT_BOTTOM_ASPECT = 1523 / 1074
const FEATURE_RIGHT_ASPECT = 1074 / 1522
const BOTTOM_GAP = 16
const BOTTOM_ASPECTS = [1523 / 1074, 1074 / 1522, 734 / 1041, 1523 / 1074]
const FINAL_GAP = 16
const FINAL_ASPECTS = [2075 / 3130, 3246 / 2207]

function getFeaturedLayoutStyle(width) {
  if (!width) return undefined

  const leftWidth = (
    (width / FEATURE_RIGHT_ASPECT) - FEATURE_GAP * ((1 / FEATURE_RIGHT_ASPECT) + 1)
  ) / (
    (1 / FEATURE_LEFT_TOP_ASPECT) + (1 / FEATURE_LEFT_BOTTOM_ASPECT) + (1 / FEATURE_RIGHT_ASPECT)
  )

  const rightWidth = width - FEATURE_GAP - leftWidth
  const featuredHeight = rightWidth / FEATURE_RIGHT_ASPECT
  const topHeight = leftWidth / FEATURE_LEFT_TOP_ASPECT
  const bottomHeight = leftWidth / FEATURE_LEFT_BOTTOM_ASPECT

  return {
    '--photo-featured-gap': `${FEATURE_GAP}px`,
    '--photo-featured-left-width': `${leftWidth}px`,
    '--photo-featured-right-width': `${rightWidth}px`,
    '--photo-featured-height': `${featuredHeight}px`,
    '--photo-featured-top-height': `${topHeight}px`,
    '--photo-featured-bottom-height': `${bottomHeight}px`,
  }
}

function getBottomStripLayoutStyle(width) {
  if (!width) return undefined

  const totalAspect = BOTTOM_ASPECTS.reduce((sum, aspect) => sum + aspect, 0)
  const stripHeight = (width - BOTTOM_GAP * (BOTTOM_ASPECTS.length - 1)) / totalAspect

  return {
    '--photo-bottom-gap': `${BOTTOM_GAP}px`,
    '--photo-bottom-height': `${stripHeight}px`,
    '--photo-bottom-width-1': `${stripHeight * BOTTOM_ASPECTS[0]}px`,
    '--photo-bottom-width-2': `${stripHeight * BOTTOM_ASPECTS[1]}px`,
    '--photo-bottom-width-3': `${stripHeight * BOTTOM_ASPECTS[2]}px`,
    '--photo-bottom-width-4': `${stripHeight * BOTTOM_ASPECTS[3]}px`,
  }
}

function getFinalStripLayoutStyle(width) {
  if (!width) return undefined

  const totalAspect = FINAL_ASPECTS.reduce((sum, aspect) => sum + aspect, 0)
  const stripHeight = (width - FINAL_GAP * (FINAL_ASPECTS.length - 1)) / totalAspect

  return {
    '--photo-final-gap': `${FINAL_GAP}px`,
    '--photo-final-height': `${stripHeight}px`,
    '--photo-final-width-1': `${stripHeight * FINAL_ASPECTS[0]}px`,
    '--photo-final-width-2': `${stripHeight * FINAL_ASPECTS[1]}px`,
  }
}

const rows = [
  [
    { src: '/projects/photography-scenery-assets/scene-17.jpg', className: 'photo-gallery-cell full' },
  ],
  [
    { src: '/projects/photography-scenery-assets/scene-18.jpg', className: 'photo-gallery-cell full' },
  ],
  [
    { src: '/projects/photography-scenery-assets/scene-01.jpg', className: 'photo-gallery-cell portrait' },
    { src: '/projects/photography-scenery-assets/scene-02.jpg', className: 'photo-gallery-cell wide' },
  ],
  [
    { src: '/projects/photography-scenery-assets/scene-03.jpg', className: 'photo-gallery-cell full' },
  ],
  [
    { src: '/projects/photography-scenery-assets/scene-04.jpg', className: 'photo-gallery-cell wide' },
    { src: '/projects/photography-scenery-assets/scene-05.jpg', className: 'photo-gallery-cell wide' },
  ],
  [
    { src: '/projects/photography-scenery-assets/scene-06.jpg', className: 'photo-gallery-cell full' },
  ],
  [
    { src: '/projects/photography-scenery-assets/scene-07.jpg', className: 'photo-gallery-cell trio' },
    { src: '/projects/photography-scenery-assets/scene-08.jpg', className: 'photo-gallery-cell trio' },
    { src: '/projects/photography-scenery-assets/scene-09.jpg', className: 'photo-gallery-cell trio' },
  ],
  [
    { src: '/projects/photography-scenery-assets/scene-10.png', className: 'photo-gallery-cell wide' },
    { src: '/projects/photography-scenery-assets/scene-11.png', className: 'photo-gallery-cell wide' },
  ],
  [
    { src: '/projects/photography-scenery-assets/scene-12.png', className: 'photo-gallery-cell wide' },
    { src: '/projects/photography-scenery-assets/scene-13.png', className: 'photo-gallery-cell wide' },
  ],
  [
    { src: '/projects/photography-scenery-assets/scene-14.jpg', className: 'photo-gallery-cell trio' },
    { src: '/projects/photography-scenery-assets/scene-15.jpg', className: 'photo-gallery-cell trio' },
    { src: '/projects/photography-scenery-assets/scene-16.jpg', className: 'photo-gallery-cell trio' },
  ],
  [
    { src: '/projects/photography-scenery-assets/scene-22.jpg', className: 'photo-gallery-cell photo-gallery-cell-uncropped' },
    { src: '/projects/photography-scenery-assets/scene-24.jpg', className: 'photo-gallery-cell photo-gallery-cell-uncropped' },
  ],
  [
    { src: '/projects/photography-scenery-assets/scene-25.jpg', className: 'photo-gallery-cell photo-gallery-cell-uncropped' },
    { src: '/projects/photography-scenery-assets/scene-23.jpeg', className: 'photo-gallery-cell photo-gallery-cell-uncropped' },
  ],
]

const featuredImages = [
  { src: '/projects/photography-scenery-assets/scene-19.jpg', className: 'photo-gallery-cell photo-gallery-cell-uncropped' },
  { src: '/projects/photography-scenery-assets/scene-21.jpg', className: 'photo-gallery-cell photo-gallery-cell-uncropped' },
  { src: '/projects/photography-scenery-assets/scene-20.jpg', className: 'photo-gallery-cell photo-gallery-cell-uncropped photo-gallery-featured-side' },
]

const bottomStripImages = [
  { src: '/projects/photography-scenery-assets/scene-24.jpg', className: 'photo-gallery-cell photo-gallery-cell-uncropped photo-gallery-bottom-cell photo-gallery-bottom-cell-1' },
  { src: '/projects/photography-scenery-assets/scene-22.jpg', className: 'photo-gallery-cell photo-gallery-cell-uncropped photo-gallery-bottom-cell photo-gallery-bottom-cell-2' },
  { src: '/projects/photography-scenery-assets/scene-25.jpg', className: 'photo-gallery-cell photo-gallery-cell-uncropped photo-gallery-bottom-cell photo-gallery-bottom-cell-3' },
  { src: '/projects/photography-scenery-assets/scene-23.jpeg', className: 'photo-gallery-cell photo-gallery-cell-uncropped photo-gallery-bottom-cell photo-gallery-bottom-cell-4' },
]

const closingImages = [
  { src: '/projects/photography-scenery-assets/scene-26.jpg', className: 'photo-gallery-cell photo-gallery-cell-uncropped photo-gallery-cell-landscape' },
  { src: '/projects/photography-scenery-assets/scene-27.jpg', className: 'photo-gallery-cell photo-gallery-cell-uncropped photo-gallery-cell-landscape' },
]

const finalImages = [
  { src: '/projects/photography-scenery-assets/scene-28.jpg', className: 'photo-gallery-cell photo-gallery-cell-uncropped photo-gallery-final-cell photo-gallery-final-cell-1' },
  { src: '/projects/photography-scenery-assets/scene-29.jpg', className: 'photo-gallery-cell photo-gallery-cell-uncropped photo-gallery-final-cell photo-gallery-final-cell-2' },
]

const tailImage = {
  src: '/projects/photography-scenery-assets/scene-30.jpg',
  className: 'photo-gallery-cell photo-gallery-cell-uncropped photo-gallery-cell-tail',
}

const allSceneryImages = [
  ...rows.flat(),
  ...featuredImages,
  ...bottomStripImages,
  ...closingImages,
  ...finalImages,
  tailImage,
].map((image) => ({ src: image.src, alt: '' }))

export default function PhotographyArchive() {
  const featuredRef = useRef(null)
  const bottomStripRef = useRef(null)
  const finalStripRef = useRef(null)
  const [featuredStyle, setFeaturedStyle] = useState()
  const [bottomStripStyle, setBottomStripStyle] = useState()
  const [finalStripStyle, setFinalStripStyle] = useState()
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const activeLightboxImage = lightboxIndex !== null ? allSceneryImages[lightboxIndex] : null

  const openLightbox = (src) => {
    const nextIndex = allSceneryImages.findIndex((image) => image.src === src)
    if (nextIndex === -1) return
    setLightboxIndex(nextIndex)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const showPrevious = () => {
    setLightboxIndex((current) => (current === null ? current : Math.max(current - 1, 0)))
  }

  const showNext = () => {
    setLightboxIndex((current) => (
      current === null ? current : Math.min(current + 1, allSceneryImages.length - 1)
    ))
  }

  useEffect(() => {
    const node = featuredRef.current
    if (!node) return undefined

    const updateLayout = () => {
      setFeaturedStyle(getFeaturedLayoutStyle(node.clientWidth))
    }

    updateLayout()

    const observer = new ResizeObserver(updateLayout)
    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const node = bottomStripRef.current
    if (!node) return undefined

    const updateLayout = () => {
      setBottomStripStyle(getBottomStripLayoutStyle(node.clientWidth))
    }

    updateLayout()

    const observer = new ResizeObserver(updateLayout)
    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const node = finalStripRef.current
    if (!node) return undefined

    const updateLayout = () => {
      setFinalStripStyle(getFinalStripLayoutStyle(node.clientWidth))
    }

    updateLayout()

    const observer = new ResizeObserver(updateLayout)
    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-photo-reveal]'))
    if (targets.length === 0) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <PortfolioShell>
      <main className="photo-gallery-page">
        <Link to="/photography/photography" className="photo-gallery-back">← Back to Photography</Link>

        <section className="photo-gallery-stream">
          {rows.slice(0, 10).map((row, rowIndex) => (
            <div
              key={`scenery-row-${rowIndex}`}
              className={`photo-gallery-row photo-gallery-row-${row.length} photo-reveal${rowIndex === 0 ? ' is-visible' : ''}`}
              data-photo-reveal
              style={{ '--photo-reveal-delay': `${Math.min(rowIndex * 36, 180)}ms` }}
            >
              {row.map((item, itemIndex) => (
                <figure key={`${rowIndex}-${itemIndex}`} className={item.className}>
                  <button
                    type="button"
                    className="photo-gallery-image-button"
                    onClick={() => openLightbox(item.src)}
                    aria-label="Open image"
                  >
                    <img src={item.src} alt="" loading="lazy" />
                  </button>
                </figure>
              ))}
            </div>
          ))}

          <section
            ref={featuredRef}
            style={featuredStyle}
            className="photo-gallery-featured-block photo-reveal"
            aria-label="Scenery feature composition"
            data-photo-reveal
          >
            <div className="photo-gallery-featured-stack">
              <figure className={featuredImages[0].className}>
                <button type="button" className="photo-gallery-image-button" onClick={() => openLightbox(featuredImages[0].src)} aria-label="Open image">
                  <img src={featuredImages[0].src} alt="" loading="lazy" />
                </button>
              </figure>
              <figure className={featuredImages[1].className}>
                <button type="button" className="photo-gallery-image-button" onClick={() => openLightbox(featuredImages[1].src)} aria-label="Open image">
                  <img src={featuredImages[1].src} alt="" loading="lazy" />
                </button>
              </figure>
            </div>

            <figure className={featuredImages[2].className}>
              <button type="button" className="photo-gallery-image-button" onClick={() => openLightbox(featuredImages[2].src)} aria-label="Open image">
                <img src={featuredImages[2].src} alt="" loading="lazy" />
              </button>
            </figure>
          </section>

          <section
            ref={bottomStripRef}
            style={bottomStripStyle}
            className="photo-gallery-bottom-strip photo-reveal"
            aria-label="Scenery closing images"
            data-photo-reveal
          >
            {bottomStripImages.map((image) => (
              <figure key={image.src} className={image.className}>
                <button type="button" className="photo-gallery-image-button" onClick={() => openLightbox(image.src)} aria-label="Open image">
                  <img src={image.src} alt="" loading="lazy" />
                </button>
              </figure>
            ))}
          </section>

          <div
            className="photo-gallery-row photo-gallery-row-closing photo-reveal"
            data-photo-reveal
          >
            {closingImages.map((image) => (
              <figure key={image.src} className={image.className}>
                <button type="button" className="photo-gallery-image-button" onClick={() => openLightbox(image.src)} aria-label="Open image">
                  <img src={image.src} alt="" loading="lazy" />
                </button>
              </figure>
            ))}
          </div>

          <section
            ref={finalStripRef}
            style={finalStripStyle}
            className="photo-gallery-final-strip photo-reveal"
            aria-label="Scenery final images"
            data-photo-reveal
          >
            {finalImages.map((image) => (
              <figure key={image.src} className={image.className}>
                <button type="button" className="photo-gallery-image-button" onClick={() => openLightbox(image.src)} aria-label="Open image">
                  <img src={image.src} alt="" loading="lazy" />
                </button>
              </figure>
            ))}
          </section>

          <div
            className="photo-gallery-row photo-gallery-row-single-tail photo-reveal"
            data-photo-reveal
          >
            <figure className={tailImage.className}>
              <button type="button" className="photo-gallery-image-button" onClick={() => openLightbox(tailImage.src)} aria-label="Open image">
                <img src={tailImage.src} alt="" loading="lazy" />
              </button>
            </figure>
          </div>
        </section>

        {activeLightboxImage ? (
          <div className="photo-gallery-lightbox" role="dialog" aria-modal="true" aria-label="Scenery image viewer">
            <button type="button" className="photo-gallery-lightbox-backdrop" onClick={closeLightbox} aria-label="Close image viewer" />

            <div className="photo-gallery-lightbox-dialog">
              <button type="button" className="photo-gallery-lightbox-close" onClick={closeLightbox} aria-label="Close image viewer">
                ×
              </button>

              <div className="photo-gallery-lightbox-stage-wrap">
                <button
                  type="button"
                  className="photo-gallery-lightbox-nav"
                  onClick={showPrevious}
                  disabled={lightboxIndex === 0}
                  aria-label="Previous image"
                >
                  ‹
                </button>

                <div className="photo-gallery-lightbox-stage">
                  <img src={activeLightboxImage.src} alt={activeLightboxImage.alt} className="photo-gallery-lightbox-image" />
                </div>

                <button
                  type="button"
                  className="photo-gallery-lightbox-nav"
                  onClick={showNext}
                  disabled={lightboxIndex === allSceneryImages.length - 1}
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </PortfolioShell>
  )
}
