import { useEffect } from 'react'

export function ArchiveProjectImageFigure({
  src,
  alt,
  loading = 'lazy',
  onOpen,
  figureClassName = '',
}) {
  const classes = ['archive-project-panel', figureClassName].filter(Boolean).join(' ')

  return (
    <figure className={classes}>
      <button
        type="button"
        className="archive-project-image-button"
        onClick={() => onOpen({ src, alt })}
        aria-label={`Open ${alt} full size`}
      >
        <img src={src} alt={alt} loading={loading} />
      </button>
    </figure>
  )
}

export function ArchiveProjectLightbox({ activeImage, onClose }) {
  useEffect(() => {
    if (!activeImage) return undefined

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeImage, onClose])

  if (!activeImage) return null

  return (
    <div
      className="archive-project-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={activeImage.alt}
      onClick={onClose}
    >
      <div className="archive-project-lightbox-inner" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="archive-project-lightbox-close"
          onClick={onClose}
          aria-label="Close enlarged image"
        >
          Close
        </button>
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="archive-project-lightbox-image"
        />
      </div>
    </div>
  )
}
