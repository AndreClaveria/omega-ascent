import React, { useEffect } from 'react';
import style from './index.module.scss';

import Header from '@/components/partials/Header';

import * as THREE from 'three';
import gsap from 'gsap';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

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
    const createStarGeometry = (count, rangeX, rangeY, rangeZ) => {
      const starGeometry = new THREE.BufferGeometry();
      const starVertices = [];

      for (let index = 0; index < count; index++) {
        const x = (Math.random() - 0.5) * rangeX;
        const y = (Math.random() - 0.5) * rangeY;
        const z = -Math.random() * rangeZ;
        starVertices.push(x, y, z);
      }

      starGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(starVertices, 3)
      );

      return starGeometry;
    };

    const createStarMaterial = (color) => {
      return new THREE.PointsMaterial({ color });
    };

    const createStars = (geometry, material) => {
      return new THREE.Points(geometry, material);
    };

    const starGeometry = createStarGeometry(1200, 1600, 1600, 1000);
    const starGeometry2 = createStarGeometry(1200, 1600, 1600, 1000);
    const starGeometry3 = createStarGeometry(1200, 1600, 1600, 1000);

    const starMaterial = createStarMaterial('ghostwhite');
    const starMaterial2 = createStarMaterial('#183d8a');
    const starMaterial3 = createStarMaterial('#9bb0da');

    const stars = createStars(starGeometry, starMaterial);
    const stars2 = createStars(starGeometry2, starMaterial2);
    const stars3 = createStars(starGeometry3, starMaterial3);

    const group = new THREE.Group();

    group.add(stars, stars2, stars3);
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

    // Post-processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass();
    bloomPass.strength = 20;
    bloomPass.radius = 1;
    bloomPass.threshold = 0.1;
    composer.addPass(bloomPass);

    // Render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      composer.render();
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
