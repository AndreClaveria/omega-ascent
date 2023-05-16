import React, { useEffect } from 'react';
import style from './index.module.scss';

import Header from '@/components/partials/Header';

import * as THREE from 'three';
import gsap from 'gsap';

const Index = ({ children }) => {
  useEffect(() => {
    const canvasCont = document.querySelector('#canvasCont');
    // Create the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      100,
      canvasCont.offsetWidth / canvasCont.offsetHeight,
      0.1,
      1000
    );
    // Position the camera
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: document.querySelector('canvas'),
    });
    // width / height
    renderer.setSize(canvasCont.offsetWidth, canvasCont.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x183d8a);
    // Stars
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
    });

    const starVertices = [];
    for (let index = 0; index < 2000; index++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starVertices, 3)
    );
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // HOVER get mouse position
    const mouse = {
      x: undefined,
      y: undefined,
    };
    window.addEventListener('mousemove', (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });
    // Render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      stars.rotation.y += 0.002;
      gsap.to(stars.rotation, {
        x: -mouse.y * 0.3,
        y: mouse.x * 0.5,
        duration: 1,
      });
    };
    animate();
  }, []);
  return (
    <div className={style.global_cont}>
      <Header />
      <div className={style.canva_cont} id="canvasCont">
        <canvas></canvas>
      </div>
      {children}
    </div>
  );
};

export default Index;
