import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import StaticBookFallback from '@/components/three/StaticBookFallback'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useIsMobile } from '@/hooks/useMediaQuery'

const Hero3DCanvas = lazy(() => import('@/components/three/Hero3DCanvas'))

export default function Hero3DBook() {
  const reducedMotion = useReducedMotion()
  const isMobile = useIsMobile()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [load3D, setLoad3D] = useState(false)

  useEffect(() => {
    if (isMobile || reducedMotion) return

    // Let the initial page render first.
    const load = () => setLoad3D(true)

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(load, { timeout: 1500 })

      return () => {
        window.cancelIdleCallback(idleId)
      }
    }

    const timeoutId = window.setTimeout(load, 500)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isMobile, reducedMotion])

  useEffect(() => {
    if (reducedMotion) return

    let frame = 0

    const onScroll = () => {
      cancelAnimationFrame(frame)

      frame = requestAnimationFrame(() => {
        const el = wrapperRef.current
        if (!el) return

        const progress = Math.min(
          Math.max(window.scrollY / (window.innerHeight * 0.9), 0),
          1
        )

        el.style.transform = `translateY(${progress * 40}px) scale(${1 - progress * 0.06})`
        el.style.opacity = `${1 - progress * 0.7}`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [reducedMotion])

  if (isMobile || reducedMotion) {
    return <StaticBookFallback />
  }

  return (
    <div
      ref={wrapperRef}
      className="relative h-full w-full"
      style={{ willChange: 'transform, opacity' }}
    >
      {!load3D ? (
        <StaticBookFallback />
      ) : (
        <Suspense fallback={<StaticBookFallback />}>
          <Hero3DCanvas />
        </Suspense>
      )}
    </div>
  )
}