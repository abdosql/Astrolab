import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useSpring } from '@react-spring/three'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import SolarSystem from './SolarSystem'
import ViewerMenu from './ViewerMenu'
import FocusButton from './FocusButton'
import SpeedControl from './SpeedControl'
import * as THREE from 'three'
import { useState, useCallback, useRef, useEffect } from 'react'
import { PostProcessing } from './PostProcessing'

function MilkyWaySkybox() {
  const texture = new THREE.TextureLoader().load('/8k_stars_milky_way.jpg')
  texture.mapping = THREE.EquirectangularReflectionMapping
  return <primitive object={texture} attach="background" />
}

interface CameraControllerProps {
  focusedPlanet: string | null;
  onFocusReset: () => void;
}

function CameraController({ focusedPlanet, onFocusReset }: CameraControllerProps) {
  const { camera, scene } = useThree();
  const controlsRef = useRef<OrbitControls>(null);

  const [spring, api] = useSpring(() => ({
    position: [0, 1000, 2000],
    target: [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 120 },
  }))

  const [isTransitioning, setIsTransitioning] = useState(false);

  const focusOnPlanet = useCallback((planetName: string) => {
    const planet = scene.getObjectByName(planetName);
    if (planet && planet instanceof THREE.Mesh && planet.geometry instanceof THREE.SphereGeometry) {
      const planetPosition = new THREE.Vector3();
      planet.getWorldPosition(planetPosition);
      const distance = planet.geometry.parameters.radius * 10;
      const newPosition = new THREE.Vector3().copy(planetPosition).add(new THREE.Vector3(distance, distance / 2, distance));
      
      setIsTransitioning(true);
      api.start({
        position: newPosition.toArray(),
        target: planetPosition.toArray(),
        from: {
          position: camera.position.toArray(),
          target: controlsRef.current?.target.toArray() || [0, 0, 0],
        },
        onRest: () => setIsTransitioning(false),
      })
    }
  }, [scene, api, camera]);

  const resetFocus = useCallback(() => {
    setIsTransitioning(true);
    api.start({
      position: [0, 1000, 2000],
      target: [0, 0, 0],
      from: {
        position: camera.position.toArray(),
        target: controlsRef.current?.target.toArray() || [0, 0, 0],
      },
      onRest: () => setIsTransitioning(false),
    })
    onFocusReset();
  }, [api, onFocusReset, camera]);

  useEffect(() => {
    if (focusedPlanet) {
      focusOnPlanet(focusedPlanet);
    } else {
      resetFocus();
    }
  }, [focusedPlanet, focusOnPlanet, resetFocus]);

  useFrame(() => {
    if (isTransitioning) {
      const [x, y, z] = spring.position.get();
      camera.position.set(x, y, z);
      
      if (controlsRef.current) {
        const [tx, ty, tz] = spring.target.get();
        controlsRef.current.target.set(tx, ty, tz);
      }
    }
    controlsRef.current?.update();
  });

  return (
    <OrbitControls 
      ref={controlsRef} 
      makeDefault 
      enableDamping={true}
      minDistance={20}
      maxDistance={585}
    />
  );
}

export default function NEOViewer() {
  const [speed, setSpeed] = useState(1);
  const [focusedPlanet, setFocusedPlanet] = useState<string | null>(null);
  const [bloomIntensity, setBloomIntensity] = useState(1.5);
  const [bloomThreshold, setBloomThreshold] = useState(0.1);

  const handlePlanetFocus = useCallback((planetName: string) => {
    setFocusedPlanet(planetName);
  }, []);

  const handleFocusReset = useCallback(() => {
    setFocusedPlanet(null);
  }, []);

  const handleZoomIn = useCallback(() => {
    // Implement zoom in logic
  }, []);

  const handleZoomOut = useCallback(() => {
    // Implement zoom out logic
  }, []);

  const handleToggleLight = useCallback(() => {
    // Implement light toggle logic
  }, []);

  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [0, 1000, 2000], fov: 90 }}>
        <MilkyWaySkybox />
        <ambientLight intensity={0.5} />
        <directionalLight position={[100, 100, 100]} intensity={1} />
        <pointLight position={[0, 0, 0]} intensity={1} />
        <CameraController focusedPlanet={focusedPlanet} onFocusReset={handleFocusReset} />
        <SolarSystem speed={speed} onPlanetFocus={handlePlanetFocus} />
        <PostProcessing bloomIntensity={bloomIntensity} bloomThreshold={bloomThreshold} />
      </Canvas>
      <FocusButton onClick={handleFocusReset} isVisible={!!focusedPlanet} />
      <ViewerMenu 
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onToggleLight={handleToggleLight}
        onToggleFullscreen={handleToggleFullscreen}
      />
      <SpeedControl speed={speed} setSpeed={setSpeed} />
    </div>
  )
}