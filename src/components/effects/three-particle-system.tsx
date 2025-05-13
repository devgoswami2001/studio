
'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeParticleSystemProps {
  containerId: string;
}

const ThreeParticleSystem: FC<ThreeParticleSystemProps> = ({ containerId }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesGroupRef = useRef<THREE.Group | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const sceneContainer = document.getElementById(containerId);
    if (!sceneContainer) {
      console.error(`Container with id "${containerId}" not found.`);
      return;
    }
    mountRef.current = sceneContainer as HTMLDivElement;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, mountRef.current.offsetWidth / mountRef.current.offsetHeight, 0.1, 1000);
    cameraRef.current = camera;
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mountRef.current.offsetWidth, mountRef.current.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const particles = new THREE.Group();
    particlesGroupRef.current = particles;
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      const colorRandom = Math.random();
      // Adjusted colors to match theme palette better (Primary/Accent like)
      const color = colorRandom > 0.66 ? [26/255, 35/255, 126/255] : ( colorRandom > 0.33 ? [0/255, 188/255, 212/255] : [76/255, 175/255, 80/255]); // Deep Blue, Teal, Greenish
      colors[i * 3] = color[0];
      colors[i * 3 + 1] = color[1];
      colors[i * 3 + 2] = color[2];
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({ size: 1.5, vertexColors: true, transparent: true, opacity: 0.8, sizeAttenuation: true });
    const points = new THREE.Points(geometry, material);
    pointsRef.current = points;
    particles.add(points);

    // Add connections (optional, can be performance heavy)
    // Consider simplifying or removing if performance is an issue
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const maxConnections = 500; // Limit connections to avoid performance issues
    let connectionCount = 0;

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        if (connectionCount >= maxConnections) break;
        const p1 = new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
        const p2 = new THREE.Vector3(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
        const dist = p1.distanceTo(p2);
        
        if (dist < 20) { // Connection distance threshold
          linePositions.push(p1.x, p1.y, p1.z);
          linePositions.push(p2.x, p2.y, p2.z);
          connectionCount++;
        }
      }
      if (connectionCount >= maxConnections) break;
    }
    if (linePositions.length > 0) {
        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00BCD4, opacity: 0.15, transparent: true }); // Teal-like color
        const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        particles.add(lines);
    }
    

    scene.add(particles);
    camera.position.z = 60; // Adjusted camera position for better view

    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);
      if (particlesGroupRef.current && pointsRef.current) {
        particlesGroupRef.current.rotation.y += 0.0005;
        particlesGroupRef.current.rotation.x += 0.0002;

        const currentPositions = (pointsRef.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
        const time = Date.now() * 0.0001;
        for (let i = 0; i < particleCount; i++) {
          currentPositions[i * 3 + 0] += Math.sin(i + time) * 0.02;
          currentPositions[i * 3 + 1] += Math.cos(i + time * 0.5) * 0.02;
          // Keep particles within a certain boundary or make them wrap around
           if (currentPositions[i * 3] > 50) currentPositions[i * 3] = -50;
           if (currentPositions[i * 3] < -50) currentPositions[i * 3] = 50;
           if (currentPositions[i * 3 + 1] > 50) currentPositions[i * 3 + 1] = -50;
           if (currentPositions[i * 3 + 1] < -50) currentPositions[i * 3 + 1] = 50;
           if (currentPositions[i * 3 + 2] > 50) currentPositions[i * 3 + 2] = -50;
           if (currentPositions[i * 3 + 2] < -50) currentPositions[i * 3 + 2] = 50;
        }
        (pointsRef.current.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      }
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    const handleResize = () => {
      if (mountRef.current && rendererRef.current && cameraRef.current) {
        cameraRef.current.aspect = mountRef.current.offsetWidth / mountRef.current.offsetHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(mountRef.current.offsetWidth, mountRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      if (rendererRef.current && mountRef.current && rendererRef.current.domElement) {
         // Check if domElement exists and is a child of mountRef.current before trying to remove
        if (mountRef.current.contains(rendererRef.current.domElement)) {
            mountRef.current.removeChild(rendererRef.current.domElement);
        }
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      // Dispose geometries and materials
      if (pointsRef.current) {
        pointsRef.current.geometry.dispose();
        if (Array.isArray(pointsRef.current.material)) {
            pointsRef.current.material.forEach(mat => mat.dispose());
        } else {
            pointsRef.current.material.dispose();
        }
      }
      if (particlesGroupRef.current) {
        particlesGroupRef.current.children.forEach(child => {
            if (child instanceof THREE.LineSegments) {
                child.geometry.dispose();
                if(Array.isArray(child.material)){
                    child.material.forEach(mat => mat.dispose());
                } else {
                    child.material.dispose();
                }
            }
        });
      }
       // Nullify refs
      mountRef.current = null;
      rendererRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
      particlesGroupRef.current = null;
      pointsRef.current = null;
      animationFrameIdRef.current = null;
    };
  }, [containerId]);

  return null; // The component mounts the Three.js canvas directly to the containerId
};

export default ThreeParticleSystem;
