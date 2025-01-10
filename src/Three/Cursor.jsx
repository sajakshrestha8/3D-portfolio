import React, { useEffect } from "react";
import * as THREE from "three";
import Index from "../pages/index.astro";

const Cursor = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const cursorGeometry = new THREE.CircleGeometry(0.15, 32);
    const cursorMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const cursor = new THREE.Mesh(cursorGeometry, cursorMaterial);
    scene.add(cursor);

    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(plane);

    camera.position.z = 5;

    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    const handleMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(plane);

      if (intersects.length > 0) {
        cursor.position.copy(intersects[0].point);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resizing the window
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(renderer.domElement);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null; // This component doesn't render anything directly
};

export default Cursor;
