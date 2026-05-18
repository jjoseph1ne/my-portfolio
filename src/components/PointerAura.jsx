import { useEffect, useRef } from 'react'

const INTERACTIVE_SELECTOR = [
  'a',
  'button',
  '[role="button"]',
  'input',
  'select',
  'textarea',
  'summary',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

export default function PointerAura() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    if (!finePointer.matches) return undefined

    const cursor = cursorRef.current
    if (!cursor) return undefined

    let frameId = 0
    let currentX = window.innerWidth / 2
    let currentY = window.innerHeight / 2
    let targetX = currentX
    let targetY = currentY

    document.documentElement.style.setProperty('--pointer-x', `${targetX}px`)
    document.documentElement.style.setProperty('--pointer-y', `${targetY}px`)

    const render = () => {
      currentX += (targetX - currentX) * 0.24
      currentY += (targetY - currentY) * 0.24
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      frameId = window.requestAnimationFrame(render)
    }

    const setInteractiveState = (target) => {
      const interactiveElement = target instanceof Element ? target.closest(INTERACTIVE_SELECTOR) : null
      cursor.classList.toggle('pointer-aura-active', Boolean(interactiveElement))
    }

    const handlePointerMove = (event) => {
      targetX = event.clientX
      targetY = event.clientY
      document.documentElement.style.setProperty('--pointer-x', `${targetX}px`)
      document.documentElement.style.setProperty('--pointer-y', `${targetY}px`)
      cursor.classList.add('pointer-aura-visible')
      setInteractiveState(event.target)
    }

    const handlePointerDown = () => {
      cursor.classList.add('pointer-aura-pressed')
    }

    const handlePointerUp = () => {
      cursor.classList.remove('pointer-aura-pressed')
    }

    const handlePointerLeave = () => {
      cursor.classList.remove('pointer-aura-visible')
      cursor.classList.remove('pointer-aura-active')
      cursor.classList.remove('pointer-aura-pressed')
    }

    const handlePointerOver = (event) => {
      setInteractiveState(event.target)
    }

    frameId = window.requestAnimationFrame(render)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    document.addEventListener('pointerover', handlePointerOver)
    document.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      document.removeEventListener('pointerover', handlePointerOver)
      document.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return (
    <div ref={cursorRef} className="pointer-aura" aria-hidden="true">
      <span className="pointer-aura-core" />
    </div>
  )
}
