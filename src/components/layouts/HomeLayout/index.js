import React, { useEffect, useState } from 'react';
import style from './index.module.scss';

import Header from '@/components/partials/Header';

import * as THREE from 'three';
import gsap from 'gsap';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

import Loader from '@/components/partials/Loader';

const Index = ({ children }) => {
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.height = '100vh';
    body.style.overflow = 'hidden';
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
    const handleScroll = () => {
      const section1bis = document.querySelector('#section1bis');
      const windowHeight = window.innerHeight;
      const sectionTop = section1bis.offsetTop;
      const sectionHeight = section1bis.offsetHeight;
      const scrollPosition = window.scrollY;

      // Calculate the middle position of section1bis
      const sectionMiddle = sectionTop + sectionHeight / 2;

      // Calculate the distance from the middle position of section1bis to the current scroll position
      const distanceToMiddle = Math.abs(
        scrollPosition + windowHeight / 2 - sectionMiddle
      );
      // Set the rangeX and rangeY values based on the distance to the middle position
      let rangeX = distanceToMiddle - 50;
      let rangeY = distanceToMiddle - 50;

      if (distanceToMiddle <= 60 && distanceToMiddle >= 0) {
        rangeX = 0;
        rangeY = 0;
      }

      // Update star geometries with new rangeX and rangeY values
      const starGeometry = createStarGeometry(1200, rangeX, rangeY, 1000);
      const starGeometry2 = createStarGeometry(1200, rangeX, rangeY, 1000);
      const starGeometry3 = createStarGeometry(1200, rangeX, rangeY, 1000);

      // Update star geometries
      stars.geometry = starGeometry;
      stars2.geometry = starGeometry2;
      stars3.geometry = starGeometry3;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

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

    setTimeout(() => {
      body.style.height = 'auto';
      body.style.overflowY = 'scroll';
      setLoader(false);
    }, 6000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className={style.global_cont}>
        <Header />
        <div className={style.canva_cont} id="canvasCont">
          <canvas></canvas>
        </div>
        {children}
      </div>
    </>
  );
};

export default Index;
