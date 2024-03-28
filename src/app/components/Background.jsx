"use client";
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Background = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0,0, Math.PI / 4]}>
        <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
        >
            <PointMaterial
                transparent
                color="$fff"
                size={0.002}
                sizeAttenuation={true}
                dethWrite={false}
            />
        </Points>
    </group>
  )
};

const StarsCanvas = () => (
    <div className="canvas-container w-full h-auto fixed inset-0 z-0">
        <Canvas className="w-full h-full" camera={{position: '', top:0, left:0, zIndex:-1}}>
        <Suspense fallback={null}>
            <Background />
        </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas;