// src/components/OceanScene.jsx
import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { usePan } from '../../context/PanProvider';

extend({ Water });

export default function OceanScene() {
  const waterRef = useRef();
  const meshRef = useRef();
  const { camera, gl, scene } = useThree();
  const scrollYRef = useRef(0);
  const { panDeltaXRef } = usePan();

  const waterNormals = useTexture('/images/textures/waternormals.jpg');
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  const sun = new THREE.Vector3();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Sky setup
    const sky = new Sky();
    sky.scale.setScalar(10000);
    scene.add(sky);

    const skyUniforms = sky.material.uniforms;
    skyUniforms['turbidity'].value = 10;
    skyUniforms['rayleigh'].value = 2;
    skyUniforms['mieCoefficient'].value = 0.005;
    skyUniforms['mieDirectionalG'].value = 0.8;

    const phi = THREE.MathUtils.degToRad(90 - 2);
    const theta = THREE.MathUtils.degToRad(180);
    sun.setFromSphericalCoords(1, phi, theta);

    sky.material.uniforms['sunPosition'].value.copy(sun);
    scene.environment = new THREE.PMREMGenerator(gl).fromScene(sky).texture;
  }, []);

  // Initial camera setup - facing down
  useEffect(() => {
    camera.position.set(30, 30, 100);
  }, [camera]);

  useFrame((state, delta) => {
    if (waterRef.current) {
      waterRef.current.material.uniforms['time'].value += delta;
    }

    if (meshRef.current) {
      const t = state.clock.elapsedTime;
      meshRef.current.position.y = Math.sin(t) * 20 + 5;
      meshRef.current.rotation.x = t * 0.5;
      meshRef.current.rotation.z = t * 0.51;
    }

    // Camera animation based on scroll
    const maxScroll = window.innerHeight * 1.0; // Adjust this value to control scroll sensitivity
    const scrollProgress = Math.min(scrollYRef.current / maxScroll, 1);

    // Base camera positions for scroll animation
    const start = { x: 30, y: 30, z: 150 };
    const end = { x: 0, y: 100, z: 0 };
    const baseX = THREE.MathUtils.lerp(start.x, end.x, scrollProgress);
    const baseY = THREE.MathUtils.lerp(start.y, end.y, scrollProgress);
    const baseZ = THREE.MathUtils.lerp(start.z, end.z, scrollProgress);
    
    // Apply pan rotation to camera position around the center
    const panRotation = panDeltaXRef.current * 0.001;
    const radius = Math.sqrt(baseX * baseX + baseZ * baseZ);
    const baseAngle = Math.atan2(baseZ, baseX);
    
    const finalX = radius * Math.cos(baseAngle + panRotation);
    const finalZ = radius * Math.sin(baseAngle + panRotation);

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, finalX, 0.1);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, baseY, 0.1);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, finalZ, 0.1);

    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {/* Ocean */}
      <primitive
        ref={waterRef}
        object={
          new Water(new THREE.PlaneGeometry(10000, 10000), {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals,
            sunDirection: new THREE.Vector3(),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 3.7,
            fog: false,
          })
        }
        rotation-x={-Math.PI / 2}
      />

      {/* Lighting & Controls */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 50, 5]} intensity={1.5} />
      {/* Disable OrbitControls to let our custom camera control take over */}
      {/* <OrbitControls enableZoom={false} target={[0, 10, 0]} maxPolarAngle={Math.PI * 0.495} minDistance={40} maxDistance={200} /> */}
    </>
  );
}
