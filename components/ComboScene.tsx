"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ComboScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#09090b");

    const camera = new THREE.PerspectiveCamera(65, mount.clientWidth / 320, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, 320);
    mount.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0x8b5cf6, 20);
    light.position.set(2, 2, 4);
    scene.add(light);

    const geometry = new THREE.TorusKnotGeometry(0.8, 0.25, 100, 12);
    const material = new THREE.MeshStandardMaterial({ color: 0x60a5fa, metalness: 0.5, roughness: 0.2 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let raf = 0;
    const animate = () => {
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.015;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="mt-4 w-full overflow-hidden rounded-xl border border-zinc-800" />;
}
