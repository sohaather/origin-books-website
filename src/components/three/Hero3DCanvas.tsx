import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import BookScene from '@/components/three/BookScene'

export default function Hero3DCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
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
  )
}