import * as THREE from "three";
import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
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
    const cursorMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cursor = new THREE.Mesh(cursorGeometry, cursorMaterial);
    scene.add(cursor);

    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0xdddddd,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });

    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(plane);

    camera.position.z = 5;

    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    window.addEventListener("mousemove", (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    function animate() {
      requestAnimationFrame(animate);
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(plane);

      if (intersects.length > 0) {
        cursor.position.copy(intersects[0].point);
      }

      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      // Cleanup: Remove the renderer's DOM element and event listeners
      document.body.removeChild(renderer.domElement);
      window.removeEventListener("mousemove", null);
      window.removeEventListener("resize", null);
    };
  }, []);

  return null; // React component doesn't render anything visually
};

export default Cursor;
