import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import { useRouter } from 'next/router';

import Letters from 'p/img/separate_logo/letters.png';
import Logo_O from 'p/img/separate_logo/omega_logo.svg';
import Logo_A from 'p/img/separate_logo/ascent_logo.svg';

import ImageStyle from '@/components/UI/Logo';
import Button from '@/components/UI/Button';
import Bubble from '@/components/UI/Info_Bubble';
import Modal from '@/components/partials/Modal';

const Index = () => {
  const router = useRouter();

  const [link, setLink] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (router.asPath == '/home') {
      setLink('/home');
    }
    if (router.asPath == '/home#section1') {
      setLink('/home#section1');
    }
    if (router.asPath == '/home#section2') {
      setLink('/home#section2');
    }
  }, [router]);

  function handleOpenModal() {
    setModalOpen(true);
  }
  function handleLaunch() {
    console.log('Launch button clicked!');
  }

  function handleOpenBuyWindow() {
    router.push('/buy');
  }
  function handleOpenAboutWindow() {
    router.push('/about');
  }
  function handleOpenHomeWindow() {
    router.push('/home');
  }
  function handleOpenHomeWindowSection1() {
    router.push('/home#section1');
  }
  function handleOpenHomeWindowSection2() {
    router.push('/home#section2');
  }
  return (
    <>
      <div className={style.navbar}>
        <div className={style.nav_cont}>
          <div className={style.nav_bar_logo}>
            <ImageStyle
              src={Letters}
              className={style.letters}
              width={240}
              alt="Letters"
            />
            <ImageStyle
              src={Logo_A}
              className={style.logo_a}
              width={60}
              alt="Logo_Ascent"
            />
            <ImageStyle
              src={Logo_O}
              className={style.logo_o}
              width={40}
              alt="Logo_Omega"
            />
          </div>
          <div className={style.nav_bar_link_cont}>
            <ul className={style.nav_bar_ul}>
              <button
                id="intro_link"
                className={style.nav_bar_li}
                onClick={() => handleOpenHomeWindow()}
              >
                <div
                  className={`${style.span_link} ${
                    link === '/home' ? style.active : ''
                  }`}
                >
                  <span className="span span_light_small">01</span>
                  <div className={style.link}>
                    <p className="p">Home</p>
                    <p className="p">Home</p>
                  </div>
                </div>
              </button>
              <button
                id="section1_link"
                className={style.nav_bar_li}
                onClick={() => handleOpenHomeWindowSection1()}
              >
                <div
                  className={`${style.span_link} ${
                    link === '/home#section1' ? style.active : ''
                  }`}
                >
                  <span className="span span_light_small">02</span>
                  <div className={style.link}>
                    <p className="p">Ascent</p>
                    <p className="p">Ascent</p>
                  </div>
                </div>
              </button>
              <button
                id="section2_link"
                className={style.nav_bar_li}
                onClick={() => handleOpenHomeWindowSection2()}
              >
                <div
                  className={`${style.span_link} ${
                    link === '/home#section2' ? style.active : ''
                  }`}
                >
                  <span className="span span_light_small">03</span>
                  <div className={style.link}>
                    <p className="p">Omega</p>
                    <p className="p">Omega</p>
                  </div>
                </div>
              </button>
              <button
                id="about_link"
                className={style.nav_bar_li}
                onClick={() => handleOpenAboutWindow()}
              >
                <div
                  className={`${style.span_link} ${
                    router.pathname === '/about' ? style.active : ''
                  }`}
                >
                  <span className="span span_light_small">04</span>
                  <div className={style.link}>
                    <p className="p">About</p>
                    <p className="p">About</p>
                  </div>
                </div>
              </button>
            </ul>
          </div>
          <div className={style.nav_bar_button}>
            <Button
              type="button"
              className="btn_primary"
              title="LAUNCH"
              handleClick={handleLaunch}
            />
            <Button
              type="button"
              className="btn_secondary"
              title="COURSE"
              handleClick={handleOpenModal}
            />
          </div>
        </div>
      </div>
      <Bubble handleClick={handleOpenBuyWindow} />
      {modalOpen && <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />}
    </>
  );
};

export default Index;
