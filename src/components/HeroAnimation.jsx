import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function HeroAnimation() {
  const mountRef = useRef(null);

  useEffect(() => {
    const w = mountRef.current.clientWidth;
    const h = 350;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    mountRef.current.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(5, 10, 15);
    scene.add(pointLight);

    const material = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.6, roughness: 0.4 });
    const loader = new THREE.FontLoader();
    
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
      const geometry = new THREE.TextGeometry('§', { font: font, size: 2, height: 0.5 });
      geometry.center();
      for (let i = 0; i < 40; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        const phi = Math.acos(-1 + (2 * i) / 40);
        const theta = Math.sqrt(40 * Math.PI) * phi;
        const p = new THREE.Vector3();
        p.setFromSphericalCoords(8, phi, theta);
        mesh.position.copy(p);
        mesh.lookAt(new THREE.Vector3(0,0,0));
        group.add(mesh);
      }
    });

    let mouseX = 0, mouseY = 0;
    let targetRotationX = 0, targetRotationY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2);
      mouseY = (event.clientY - window.innerHeight / 2);
    };
    document.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      targetRotationY = mouseX * 0.001;
      targetRotationX = mouseY * 0.001;
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;
      group.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const newW = mountRef.current.clientWidth;
      renderer.setSize(newW, h);
      camera.aspect = newW / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ height: '350px', cursor: 'grab' }} />;
}
