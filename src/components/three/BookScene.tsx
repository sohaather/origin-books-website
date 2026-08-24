import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface BookSceneProps {
  autoRotate?: boolean
}

/**
 * A stylised hardcover book built from primitive geometries.
 * Deliberately editorial rather than photoreal: a navy board, a cream
 * page-block sliver, and a single brass foil detail on the cover.
 */
export default function BookScene({ autoRotate = true }: BookSceneProps) {
  const group = useRef<THREE.Group>(null)
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
          color="#101A2E"
          roughness={0.32}
          metalness={0.12}
          clearcoat={0.55}
          clearcoatRoughness={0.28}
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

      {/* Brass foil title plate on front cover */}
      <mesh position={[0.03, -0.45, 0.255]}>
        <boxGeometry args={[1.5, 0.03, 0.01]} />
        <meshStandardMaterial color="#B08D57" roughness={0.35} metalness={0.75} />
      </mesh>
      <mesh position={[0.03, -0.72, 0.255]}>
        <boxGeometry args={[0.9, 0.02, 0.01]} />
        <meshStandardMaterial color="#B08D57" roughness={0.35} metalness={0.75} />
      </mesh>

      {/* Thin brass border frame on the front cover */}
      <mesh position={[0.03, 1.5, 0.255]}>
        <boxGeometry args={[2.1, 0.015, 0.008]} />
        <meshStandardMaterial color="#B08D57" roughness={0.4} metalness={0.7} />
      </mesh>
      <mesh position={[0.03, -1.5, 0.255]}>
        <boxGeometry args={[2.1, 0.015, 0.008]} />
        <meshStandardMaterial color="#B08D57" roughness={0.4} metalness={0.7} />
      </mesh>
    </group>
  )
}
