// import { useLoader } from '@react-three/fiber';
import React from 'react';
// import { TextureLoader } from 'three';
// import BrainTexturePic from './textures/brain.jpg'

import { OrbitControls, Stars } from "@react-three/drei";


function Brain(props) {

  // const [ brainTexture ] = useLoader(TextureLoader, [BrainTexturePic]);

  return <>
    <ambientLight intensity={0.2} />
    <Stars
      radius={300}
      depth={60}
      count={1000}
      factor={7}
      saturation={0}
      fade={true}
    />
    <mesh>
      {/* <sphereGeometry args={[1.7, 32, 32]} /> */}
      {/* <meshPhongMaterial  /> */}
      {/* <meshStandardMaterial map={brainTexture} opacity={0.1} /> */}
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.5}
        panSpeed={0.5}
        rotateSpeed={0.7}
        autoRotate={true}
        autoRotateSpeed={3}
      />
    </mesh>
  </>
}

export default Brain;