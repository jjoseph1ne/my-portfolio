import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import './PhotographyPortrait.css'

const portraitSets = [
  {
    id: 'portrait-set-01',
    images: [
      { src: '/projects/photography-portrait-assets/group-01/portrait-set-01-02.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-01/portrait-set-01-01.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-01/portrait-set-01-03.jpeg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-01/portrait-set-01-04.jpeg', alt: '', frame: 'portrait' },
      { src: '/projects/photography-portrait-assets/group-01/portrait-set-01-05.jpeg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-01/portrait-set-01-06.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-01/portrait-set-01-07.jpg', alt: '', frame: 'portrait' },
      { src: '/projects/photography-portrait-assets/group-01/portrait-set-01-08.jpeg', alt: '', frame: 'landscape' },
    ],
  },
  {
    id: 'portrait-set-02',
    images: [
      { src: '/projects/photography-portrait-assets/group-02/portrait-set-02-01.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-02/portrait-set-02-02.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-02/portrait-set-02-03.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-02/portrait-set-02-04.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-02/portrait-set-02-05.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-02/portrait-set-02-06.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-02/portrait-set-02-07.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-02/portrait-set-02-08.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-02/portrait-set-02-10.jpg', alt: '', frame: 'portrait' },
    ],
  },
  {
    id: 'portrait-set-03',
    images: [
      { src: '/projects/photography-portrait-assets/group-03/portrait-set-03-01.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-03/portrait-set-03-02.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-03/portrait-set-03-03.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-03/portrait-set-03-04.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-03/portrait-set-03-05.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-03/portrait-set-03-06.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-03/portrait-set-03-07.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-03/portrait-set-03-08.jpg', alt: '', frame: 'landscape' },
    ],
  },
  {
    id: 'portrait-set-04',
    images: [
      { src: '/projects/photography-portrait-assets/group-04/portrait-set-04-02.jpeg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-04/portrait-set-04-01.png', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-04/portrait-set-04-03.jpeg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-04/portrait-set-04-04.jpeg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-04/portrait-set-04-05.jpeg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-04/portrait-set-04-06.jpeg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-04/portrait-set-04-07.jpeg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-04/portrait-set-04-08.jpeg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-04/portrait-set-04-09.jpeg', alt: '', frame: 'portrait' },
      { src: '/projects/photography-portrait-assets/group-04/portrait-set-04-10.jpeg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-04/portrait-set-04-11.jpeg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-04/portrait-set-04-12.jpg', alt: '', frame: 'landscape' },
    ],
  },
  {
    id: 'portrait-set-05',
    scrollSpan: 1.28,
    images: [
      { src: '/projects/photography-portrait-assets/group-05/portrait-set-05-01.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-05/portrait-set-05-02.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-05/portrait-set-05-03.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-05/portrait-set-05-04.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-05/portrait-set-05-05.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-05/portrait-set-05-06.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-05/portrait-set-05-07.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-05/portrait-set-05-08.jpg', alt: '', frame: 'landscape' },
    ],
  },
  {
    id: 'portrait-set-06',
    images: [
      { src: '/projects/photography-portrait-assets/group-06/portrait-set-06-01.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-06/portrait-set-06-02.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-06/portrait-set-06-03.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-06/portrait-set-06-04.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-06/portrait-set-06-05.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-06/portrait-set-06-06.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-06/portrait-set-06-07.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-06/portrait-set-06-08.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-06/portrait-set-06-09.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-06/portrait-set-06-10.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-06/portrait-set-06-11.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-06/portrait-set-06-12.jpg', alt: '', frame: 'portrait' },
    ],
  },
  {
    id: 'portrait-set-07',
    images: [
      { src: '/projects/photography-portrait-assets/group-07/portrait-set-07-01.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-07/portrait-set-07-02.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-07/portrait-set-07-03.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-07/portrait-set-07-04.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-07/portrait-set-07-05.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-07/portrait-set-07-06.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-07/portrait-set-07-07.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-07/portrait-set-07-08.JPG', alt: '', frame: 'portrait' },
      { src: '/projects/photography-portrait-assets/group-07/portrait-set-07-09.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-07/portrait-set-07-10.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-07/portrait-set-07-11.JPG', alt: '', frame: 'landscape' },
    ],
  },
  {
    id: 'portrait-set-08',
    images: [
      { src: '/projects/photography-portrait-assets/group-08/portrait-set-08-01.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-08/portrait-set-08-02.jpg', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-08/portrait-set-08-03.jpg', alt: '', frame: 'portrait' },
      { src: '/projects/photography-portrait-assets/group-08/portrait-set-08-04.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-08/portrait-set-08-05.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-08/portrait-set-08-06.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-08/portrait-set-08-07.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-08/portrait-set-08-08.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-08/portrait-set-08-09.JPG', alt: '', frame: 'portrait' },
      { src: '/projects/photography-portrait-assets/group-08/portrait-set-08-10.JPG', alt: '', frame: 'portrait' },
      { src: '/projects/photography-portrait-assets/group-08/portrait-set-08-11.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-08/portrait-set-08-12.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-08/portrait-set-08-13.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-08/portrait-set-08-14.JPG', alt: '', frame: 'landscape' },
      { src: '/projects/photography-portrait-assets/group-08/portrait-set-08-15.JPG', alt: '', frame: 'landscape' },
    ],
  },
]

function getInitialSelections() {
  return Object.fromEntries(
    portraitSets.map((set) => [
      set.id,
      0,
    ]),
  )
}

function getThumbnailDisplayOrder(images) {
  const landscapeIndexes = []
  const portraitIndexes = []

  images.forEach((image, index) => {
    if (image.frame === 'portrait') {
      portraitIndexes.push(index)
      return
    }

    landscapeIndexes.push(index)
  })

  if (portraitIndexes.length > 1 && landscapeIndexes.length % 2 === 1) {
    const trailingLandscape = landscapeIndexes.pop()
    return [...landscapeIndexes, ...portraitIndexes, trailingLandscape]
  }

  return [...landscapeIndexes, ...portraitIndexes]
}

export default function PhotographyPortrait() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0)
  const [selectedImages, setSelectedImages] = useState(getInitialSelections)
  const [lightboxState, setLightboxState] = useState(null)
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(0)
  const [activeMainHeight, setActiveMainHeight] = useState()
  const stageRef = useRef(null)
  const triggerRefs = useRef([])
  const activeMainRef = useRef(null)
  const activeGroupIndexRef = useRef(0)
  const wheelLockRef = useRef(false)
  const wheelUnlockTimerRef = useRef(null)

  const lightboxSet = lightboxState
    ? portraitSets.find((set) => set.id === lightboxState.setId) ?? null
    : null

  const totalLightboxImages = lightboxSet?.images.length ?? 0

  useEffect(() => {
    activeGroupIndexRef.current = activeGroupIndex
  }, [activeGroupIndex])

  const scrollToGroup = (nextIndex, behavior = 'smooth') => {
    const target = triggerRefs.current[nextIndex]
    if (!target) return

    setActiveGroupIndex(nextIndex)
    target.scrollIntoView({
      behavior,
      block: 'start',
    })
  }

  useEffect(() => {
    const triggers = triggerRefs.current.filter(Boolean)
    if (triggers.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const topEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!topEntry) return

        const nextIndex = Number(topEntry.target.getAttribute('data-index'))
        if (!Number.isNaN(nextIndex)) {
          setActiveGroupIndex(nextIndex)
        }
      },
      {
        threshold: [0.3, 0.45, 0.6, 0.75, 0.9],
        rootMargin: '-10% 0px -10% 0px',
      },
    )

    triggers.forEach((trigger) => observer.observe(trigger))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!lightboxSet) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightboxState(null)
        return
      }

      if (event.key === 'ArrowRight') {
        setActiveLightboxIndex((current) => Math.min(current + 1, totalLightboxImages - 1))
      }

      if (event.key === 'ArrowLeft') {
        setActiveLightboxIndex((current) => Math.max(current - 1, 0))
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxSet, totalLightboxImages])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    stage.scrollTo({
      left: stage.clientWidth * activeLightboxIndex,
      behavior: 'smooth',
    })
  }, [activeLightboxIndex])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return undefined

    const handleScroll = () => {
      if (stage.clientWidth === 0) return
      const nextIndex = Math.round(stage.scrollLeft / stage.clientWidth)
      setActiveLightboxIndex(nextIndex)
    }

    stage.addEventListener('scroll', handleScroll, { passive: true })
    return () => stage.removeEventListener('scroll', handleScroll)
  }, [lightboxState])

  useEffect(() => {
    const node = activeMainRef.current
    if (!node) return undefined

    const updateHeight = () => {
      setActiveMainHeight(node.getBoundingClientRect().height)
    }

    updateHeight()

    const observer = new ResizeObserver(updateHeight)
    observer.observe(node)

    return () => observer.disconnect()
  }, [activeGroupIndex, selectedImages])

  useEffect(() => {
    if (lightboxSet) return undefined

    const mediaQuery = window.matchMedia('(max-width: 900px)')
    if (mediaQuery.matches) return undefined

    const unlockWheelNavigation = () => {
      wheelLockRef.current = false
      if (wheelUnlockTimerRef.current) {
        window.clearTimeout(wheelUnlockTimerRef.current)
        wheelUnlockTimerRef.current = null
      }
    }

    const lockWheelNavigation = () => {
      unlockWheelNavigation()
      wheelLockRef.current = true
      wheelUnlockTimerRef.current = window.setTimeout(() => {
        wheelLockRef.current = false
        wheelUnlockTimerRef.current = null
      }, 720)
    }

    const stepToGroup = (direction) => {
      const nextIndex = Math.max(
        0,
        Math.min(activeGroupIndexRef.current + direction, portraitSets.length - 1),
      )

      if (nextIndex === activeGroupIndexRef.current) return

      lockWheelNavigation()
      scrollToGroup(nextIndex)
    }

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < 18) return

      event.preventDefault()

      if (wheelLockRef.current) return

      stepToGroup(event.deltaY > 0 ? 1 : -1)
    }

    const handleKeyDown = (event) => {
      const target = event.target
      if (
        target instanceof HTMLElement
        && (
          target.isContentEditable
          || ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(target.tagName)
        )
      ) {
        return
      }

      if (
        event.defaultPrevented
        || event.metaKey
        || event.ctrlKey
        || event.altKey
      ) {
        return
      }

      if (event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault()
        if (wheelLockRef.current) return
        stepToGroup(1)
      }

      if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault()
        if (wheelLockRef.current) return
        stepToGroup(-1)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      unlockWheelNavigation()
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxSet])

  const setSelectedImage = (setId, imageIndex) => {
    setSelectedImages((current) => ({
      ...current,
      [setId]: imageIndex,
    }))
  }

  const openLightbox = (setId, imageIndex) => {
    setLightboxState({ setId })
    setActiveLightboxIndex(imageIndex)
  }

  const closeLightbox = () => {
    setLightboxState(null)
    setActiveLightboxIndex(0)
  }

  const showPrevious = () => {
    setActiveLightboxIndex((current) => Math.max(current - 1, 0))
  }

  const showNext = () => {
    setActiveLightboxIndex((current) => Math.min(current + 1, totalLightboxImages - 1))
  }

  return (
    <PortfolioShell>
      <main className="portrait-scroll-page">
        <Link to="/photography/photography" className="portrait-scroll-back">← Back to Photography</Link>

        <section className="portrait-scroll-story" aria-label="Portrait sets">
          <div className="portrait-scroll-sticky">
            {portraitSets.map((set, setIndex) => {
              const selectedIndex = selectedImages[set.id] ?? 0
              const selectedImage = set.images[selectedIndex]
              const thumbnailOrder = getThumbnailDisplayOrder(set.images)

              return (
                <div
                  key={set.id}
                  className={`portrait-scroll-layer${setIndex === activeGroupIndex ? ' is-active' : ''}`}
                  aria-hidden={setIndex !== activeGroupIndex}
                >
                  <div
                    className="portrait-scroll-background"
                    aria-hidden="true"
                  >
                    <img
                      key={selectedImage.src}
                      className="portrait-scroll-background-image"
                      src={selectedImage.src}
                      alt=""
                      loading="lazy"
                    />
                  </div>

                  <div
                    className="portrait-scroll-composition"
                    style={{
                      '--portrait-main-height': setIndex === activeGroupIndex && activeMainHeight
                        ? `${activeMainHeight}px`
                        : undefined,
                    }}
                  >
                    <div className="portrait-scroll-gallery">
                      <div className="portrait-scroll-section-number" aria-hidden="true">
                        {String(setIndex + 1).padStart(2, '0')}
                      </div>

                      <div className="portrait-scroll-thumbnails" aria-label="Image thumbnails">
                        {thumbnailOrder.map((imageIndex) => {
                          const image = set.images[imageIndex]

                          return (
                            <button
                              key={`${set.id}-thumbnail-${imageIndex}`}
                              type="button"
                              className={`portrait-scroll-thumb portrait-scroll-thumb-${image.frame}${imageIndex === selectedIndex ? ' is-active' : ''}`}
                              onClick={() => setSelectedImage(set.id, imageIndex)}
                              onDoubleClick={() => openLightbox(set.id, imageIndex)}
                              aria-label={`Open image ${imageIndex + 1}`}
                            >
                              <img src={image.src} alt={image.alt} loading="lazy" />
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <button
                      type="button"
                      ref={setIndex === activeGroupIndex ? activeMainRef : null}
                      className={`portrait-scroll-main portrait-scroll-main-${selectedImage.frame}`}
                      onClick={() => openLightbox(set.id, selectedIndex)}
                      aria-label="Open image set"
                    >
                      <img src={selectedImage.src} alt={selectedImage.alt} loading="lazy" />
                    </button>
                  </div>
                </div>
              )
            })}

            <div className="portrait-scroll-hint" aria-hidden="true">
              <span className="portrait-scroll-note">Mostly by Film camera (Nikon F3) and Digital camera (Ricoh GR2)</span>
              <span>Scroll down for another set</span>
            </div>
          </div>

          <div className="portrait-scroll-triggers" aria-hidden="true">
            {portraitSets.map((set, setIndex) => (
              <section
                key={`${set.id}-trigger`}
                ref={(node) => {
                  triggerRefs.current[setIndex] = node
                }}
                data-index={setIndex}
                className="portrait-scroll-trigger"
                style={{
                  '--portrait-trigger-span': set.scrollSpan ?? 1,
                }}
              />
            ))}
          </div>
        </section>

        {lightboxSet ? (
          <div className="portrait-lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
            <button type="button" className="portrait-lightbox-backdrop" onClick={closeLightbox} aria-label="Close image viewer" />

            <div className="portrait-lightbox-dialog">
              <button type="button" className="portrait-lightbox-close" onClick={closeLightbox} aria-label="Close image viewer">
                ×
              </button>

              <div className="portrait-lightbox-stage-wrap">
                <button
                  type="button"
                  className="portrait-lightbox-nav portrait-lightbox-nav-prev"
                  onClick={showPrevious}
                  disabled={activeLightboxIndex === 0}
                  aria-label="Previous image"
                >
                  ‹
                </button>

                <div ref={stageRef} className="portrait-lightbox-stage">
                  {lightboxSet.images.map((image, imageIndex) => (
                    <figure
                      key={`${lightboxSet.id}-lightbox-${imageIndex}`}
                      className={`portrait-lightbox-slide portrait-lightbox-slide-${image.frame}`}
                    >
                      <div className="portrait-lightbox-slide-mat">
                        <img src={image.src} alt={image.alt} loading="lazy" />
                      </div>
                    </figure>
                  ))}
                </div>

                <button
                  type="button"
                  className="portrait-lightbox-nav portrait-lightbox-nav-next"
                  onClick={showNext}
                  disabled={activeLightboxIndex === totalLightboxImages - 1}
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>

              <div className="portrait-lightbox-strip" aria-label="Image thumbnails">
                {lightboxSet.images.map((image, imageIndex) => (
                  <button
                    key={`${lightboxSet.id}-thumb-${imageIndex}`}
                    type="button"
                    className={`portrait-lightbox-thumb${imageIndex === activeLightboxIndex ? ' is-active' : ''}`}
                    onClick={() => setActiveLightboxIndex(imageIndex)}
                    aria-label={`Open image ${imageIndex + 1}`}
                  >
                    <img src={image.src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </PortfolioShell>
  )
}
