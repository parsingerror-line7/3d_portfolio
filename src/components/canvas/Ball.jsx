import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal, Float, OrbitControls, Preload, UseTexture 
} from '@react-three/drei'
 
import Canvasloader from '../Loader';
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float Speed={1.75} rotationIntensity={1}
      floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff83b"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

export default Ball