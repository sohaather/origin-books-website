import { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import coverImage from '@/assets/books/penny-front.png'

interface BookSceneProps {
  autoRotate?: boolean
}

/**
 * A stylised hardcover book featuring a real published book cover.
 * The book uses a cream page-block edge and subtle 3D lighting.
 */
export default function BookScene({ autoRotate = true }: BookSceneProps) {
  const group = useRef<THREE.Group>(null)
  const coverTexture = useTexture(coverImage)

  coverTexture.wrapS = THREE.ClampToEdgeWrapping
  coverTexture.wrapT = THREE.ClampToEdgeWrapping
  const pointer = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    if (!group.current) return

    // Smoothly track pointer position for a subtle parallax tilt.
    target.current.x = state.pointer.x
    target.current.y = state.pointer.y
    pointer.current.x += (target.current.x - pointer.current.x) * 0.04
    pointer.current.y += (target.current.y - pointer.current.y) * 0.04

    if (autoRotate) {
      group.current.rotation.y += delta * 0.18
    }

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointer.current.y * 0.18 - 0.08,
      0.06
    )
  })

  return (
    <group ref={group} rotation={[-0.08, 0.5, 0]} position={[0, 0, 0]}>
      {/* Main board — front + back covers + spine, treated as one closed volume */}
      <mesh castShadow receiveShadow position={[0.03, 0, 0]}>
        <boxGeometry args={[2.62, 3.58, 0.5]} />
        <meshPhysicalMaterial
          color="#F1E8D5"
          roughness={0.32}
          metalness={0.12}
          clearcoat={0.55}
          clearcoatRoughness={0.28}
        />
      </mesh>

      {/* Penny book cover */}
      <mesh position={[0.03, 0, 0.255]}>
        <planeGeometry args={[2.5, 3.42]} />
        <meshStandardMaterial
          map={coverTexture}
          roughness={0.5}
          metalness={0.05}
        />
      </mesh>

      {/* Page block sliver — fore-edge */}
      <mesh position={[1.34, 0, 0]}>
        <boxGeometry args={[0.06, 3.42, 0.4]} />
        <meshStandardMaterial color="#EFEBE1" roughness={0.95} />
      </mesh>

      {/* Page block sliver — top edge */}
      <mesh position={[0.02, 1.8, 0]}>
        <boxGeometry args={[2.5, 0.06, 0.4]} />
        <meshStandardMaterial color="#EFEBE1" roughness={0.95} />
      </mesh>

      {/* Page block sliver — bottom edge */}
      <mesh position={[0.02, -1.8, 0]}>
        <boxGeometry args={[2.5, 0.06, 0.4]} />
        <meshStandardMaterial color="#EFEBE1" roughness={0.95} />
      </mesh>
      </group>
  )
}
