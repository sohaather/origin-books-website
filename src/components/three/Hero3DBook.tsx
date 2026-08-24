import { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import BookScene from '@/components/three/BookScene'
import StaticBookFallback from '@/components/three/StaticBookFallback'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useIsMobile } from '@/hooks/useMediaQuery'

export default function Hero3DBook() {
  const reducedMotion = useReducedMotion()
  const isMobile = useIsMobile()
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Lightweight scroll-linked fade/translate as the hero leaves the viewport.
  useEffect(() => {
    if (reducedMotion) return
    let frame = 0

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const el = wrapperRef.current
        if (!el) return
        const progress = Math.min(Math.max(window.scrollY / (window.innerHeight * 0.9), 0), 1)
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

  // Simplified, lightweight fallback for mobile or reduced-motion users:
  // a still, art-directed rendering instead of a live WebGL canvas.
  if (isMobile || reducedMotion) {
    return <StaticBookFallback />
  }

  return (
    <div ref={wrapperRef} className="relative h-full w-full" style={{ willChange: 'transform, opacity' }}>
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 7.2], fov: 34 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.55} color="#8CA0C4" />
          <directionalLight position={[4, 5, 6]} intensity={1.5} color="#FFF7E8" />
          <directionalLight position={[-5, -2, -3]} intensity={0.35} color="#B08D57" />
          <pointLight position={[-3, 3, 4]} intensity={0.4} color="#D4B483" />
          <BookScene />
        </Suspense>
      </Canvas>
    </div>
  )
}
