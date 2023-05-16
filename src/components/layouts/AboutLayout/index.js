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

    // Stars
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
    });
    const starMaterial2 = new THREE.PointsMaterial({
      color: 0x183d8a,
    });
    const starMaterial3 = new THREE.PointsMaterial({
      color: 0x9bb0da,
    });

    const starVertices = [];
    for (let index = 0; index < 2000; index++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 1000;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starVertices, 3)
    );
    const stars = new THREE.Points(starGeometry, starMaterial);
    const stars2 = new THREE.Points(starGeometry, starMaterial2);
    const stars3 = new THREE.Points(starGeometry, starMaterial3);

    const group = new THREE.Group();
    group.add(stars);
    group.add(stars2);
    group.add(stars3);
    scene.add(group);

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
      group.rotation.y += 0.002;
      gsap.to(group.rotation, {
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
