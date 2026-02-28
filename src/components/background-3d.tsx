import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

const Shapes = () => {
  return (
    <>
      <Float floatIntensity={2} rotationIntensity={1.5} speed={1.5}>
        <mesh position={[-2, 1, -2]} scale={1.2}>
          <icosahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            clearcoat={1}
            clearcoatRoughness={0.1}
            color="#7c3aed"
            distort={0.4}
            envMapIntensity={1}
            metalness={0.5}
            roughness={0.2}
            speed={2}
          />
        </mesh>
      </Float>

      <Float floatIntensity={1.5} rotationIntensity={2} speed={2}>
        <mesh position={[2, -1, 1]} scale={0.8}>
          <torusKnotGeometry args={[0.8, 0.2, 128, 32]} />
          <MeshDistortMaterial
            clearcoat={1}
            color="#e879f9"
            distort={0.2}
            metalness={0.8}
            roughness={0.1}
            speed={3}
          />
        </mesh>
      </Float>

      <Float floatIntensity={1} rotationIntensity={1} speed={1}>
        <mesh position={[0, 2, -3]} scale={0.6}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            clearcoat={1}
            color="#f97316"
            distort={0.3}
            metalness={0.5}
            roughness={0.2}
            speed={1.5}
          />
        </mesh>
      </Float>
    </>
  );
};

export const Background3D = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight
            color="#ffffff"
            intensity={2}
            position={[10, 10, 10]}
          />
          <directionalLight
            color="#7c3aed"
            intensity={3}
            position={[-10, -10, -10]}
          />
          <pointLight color="#e879f9" intensity={2} position={[0, 5, 0]} />
          <Shapes />
        </Suspense>
      </Canvas>
    </div>
  );
};
