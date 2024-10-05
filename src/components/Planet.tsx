import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import * as THREE from 'three'
import { Text, Line } from '@react-three/drei'

interface PlanetProps {
  name: string
  distance: number
  size: number
  rotationSpeed: number
  orbitSpeed: number
  texturePath: string
  ringTexturePath?: string
  color: string
  isHovered: boolean
  onHover: (hovered: boolean) => void
  onClick: () => void
  position: [number, number, number]
  orbitPoints: THREE.Vector3[]
  currentDate: Date
}

export default function Planet({ 
  name, distance, size, rotationSpeed, orbitSpeed, texturePath, ringTexturePath, 
  color, isHovered, onHover, onClick, position, orbitPoints, currentDate 
}: PlanetProps) {
  const planetRef = useRef<THREE.Mesh>(null!)
  const textRef = useRef<THREE.Mesh>(null!)

  const planetTexture = useLoader(TextureLoader, texturePath)
  const ringTextureMap = ringTexturePath ? useLoader(TextureLoader, ringTexturePath) : null

  useFrame((state, delta) => {
    if (planetRef.current && textRef.current) {
      const timeSinceEpoch = (currentDate.getTime() - new Date('2000-01-01').getTime()) / (1000 * 60 * 60 * 24)
      planetRef.current.rotation.y = rotationSpeed * timeSinceEpoch
      textRef.current.lookAt(state.camera.position)
    }
  })

  const highlightColor = isHovered ? color : 'white'
  const planetEmissive = isHovered ? new THREE.Color(color).multiplyScalar(0.5) : new THREE.Color(0x000000)

  return (
    <>
      <Line points={orbitPoints} color={color} lineWidth={1} />
      <group 
        position={position}
        onPointerOver={() => onHover(true)} 
        onPointerOut={() => onHover(false)}
        onClick={onClick}
      >
        <mesh ref={planetRef} name={name}>
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial map={planetTexture} emissive={planetEmissive} emissiveIntensity={0.5} />
        </mesh>
        {ringTexturePath && (
          <mesh rotation-x={Math.PI / 2}>
            <ringGeometry args={[size * 1.4, size * 2, 64]} />
            <meshBasicMaterial map={ringTextureMap} transparent opacity={0.8} side={THREE.DoubleSide} />
          </mesh>
        )}
        <Text
          ref={textRef}
          position={[0, size + 3, 0]}
          fontSize={size * 0.8}
          color={highlightColor}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.1}
          outlineColor="black"
        >
          {name}
        </Text>
      </group>
    </>
  )
}