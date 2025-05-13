
function initializeThreeParticleSystem(containerId) {
  const sceneContainer = document.getElementById(containerId);
  if (!sceneContainer) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }

  if (typeof THREE === 'undefined') {
    console.error('THREE.js library is not loaded.');
    return;
  }
  
  let renderer, scene, camera, particlesGroup, points, animationFrameId;

  function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, sceneContainer.offsetWidth / sceneContainer.offsetHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(sceneContainer.offsetWidth, sceneContainer.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    sceneContainer.appendChild(renderer.domElement);

    particlesGroup = new THREE.Group();
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      const colorRandom = Math.random();
      const color = colorRandom > 0.66 ? [26/255, 35/255, 126/255] : ( colorRandom > 0.33 ? [0/255, 188/255, 212/255] : [76/255, 175/255, 80/255]);
      colors[i * 3] = color[0];
      colors[i * 3 + 1] = color[1];
      colors[i * 3 + 2] = color[2];
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({ size: 1.5, vertexColors: true, transparent: true, opacity: 0.8, sizeAttenuation: true });
    points = new THREE.Points(geometry, material);
    particlesGroup.add(points);

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const maxConnections = 500;
    let connectionCount = 0;

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        if (connectionCount >= maxConnections) break;
        const p1 = new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
        const p2 = new THREE.Vector3(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
        const dist = p1.distanceTo(p2);
        
        if (dist < 20) {
          linePositions.push(p1.x, p1.y, p1.z);
          linePositions.push(p2.x, p2.y, p2.z);
          connectionCount++;
        }
      }
      if (connectionCount >= maxConnections) break;
    }
    if (linePositions.length > 0) {
        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00BCD4, opacity: 0.15, transparent: true });
        const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        particlesGroup.add(lines);
    }
    
    scene.add(particlesGroup);
    camera.position.z = 60;

    animate();
    window.addEventListener('resize', handleResize);
  }

  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    if (particlesGroup && points) {
      particlesGroup.rotation.y += 0.0005;
      particlesGroup.rotation.x += 0.0002;

      const currentPositions = points.geometry.attributes.position.array;
      const particleCount = currentPositions.length / 3;
      const time = Date.now() * 0.0001;
      for (let i = 0; i < particleCount; i++) {
        currentPositions[i * 3 + 0] += Math.sin(i + time) * 0.02;
        currentPositions[i * 3 + 1] += Math.cos(i + time * 0.5) * 0.02;
         if (currentPositions[i * 3] > 50) currentPositions[i * 3] = -50;
         if (currentPositions[i * 3] < -50) currentPositions[i * 3] = 50;
         if (currentPositions[i * 3 + 1] > 50) currentPositions[i * 3 + 1] = -50;
         if (currentPositions[i * 3 + 1] < -50) currentPositions[i * 3 + 1] = 50;
         if (currentPositions[i * 3 + 2] > 50) currentPositions[i * 3 + 2] = -50;
         if (currentPositions[i * 3 + 2] < -50) currentPositions[i * 3 + 2] = 50;
      }
      points.geometry.attributes.position.needsUpdate = true;
    }
    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  }

  function handleResize() {
    if (sceneContainer && renderer && camera) {
      camera.aspect = sceneContainer.offsetWidth / sceneContainer.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(sceneContainer.offsetWidth, sceneContainer.offsetHeight);
    }
  }

  function cleanup() {
    window.removeEventListener('resize', handleResize);
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    if (renderer && sceneContainer && renderer.domElement) {
      if (sceneContainer.contains(renderer.domElement)) {
          sceneContainer.removeChild(renderer.domElement);
      }
    }
    if (renderer) {
      renderer.dispose();
    }
    if (points) {
      points.geometry.dispose();
      if (Array.isArray(points.material)) {
          points.material.forEach(mat => mat.dispose());
      } else {
          points.material.dispose();
      }
    }
    if (particlesGroup) {
      particlesGroup.children.forEach(child => {
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
    // Nullify to help GC, though direct impact might be limited
    renderer = null; scene = null; camera = null; particlesGroup = null; points = null; animationFrameId = null;
  }
  
  // If a previous instance exists on this container, clean it up first
  if (sceneContainer.threeInstance) {
      sceneContainer.threeInstance.cleanup();
  }

  init();
  
  // Store cleanup function on the container for potential future re-initialization or manual cleanup
  sceneContainer.threeInstance = { cleanup };
}

// Example of how to call it (would be in base.html or another JS file):
// document.addEventListener('DOMContentLoaded', () => {
//   initializeThreeParticleSystem('scene-container');
// });
