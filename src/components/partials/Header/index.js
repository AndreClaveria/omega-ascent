import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import { useRouter } from 'next/router';

import Letters from 'p/img/letters.png';
import Logo_O from 'p/img/omega_logo.svg';
import Logo_A from 'p/img/ascent_logo.svg';

import Image from '@/components/UI/Logo';
import Button from '@/components/UI/Button';
import Bubble from '@/components/UI/Info_Bubble'
import Modal from '@/components/partials/Modal';

const Index = () => {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleOpenBuyWindow() {
    router.push("/buy")
  }
  function handleOpenAboutWindow() {
    router.push("/about")
  }
  function handleOpenHomeWindow() {
    router.push("/home")
  }
  return (
    <>
      <div className={style.navbar}>
        <div className={style.nav_cont}>
          <div className={style.nav_bar_logo}>
            <Image
              src={Letters}
              className={style.letters}
              width={240}
              alt="Letters"
            />
            <Image
              src={Logo_A}
              className={style.logo_a}
              width={60}
              alt="Logo_Ascent"
            />
            <Image
              src={Logo_O}
              className={style.logo_o}
              width={40}
              alt="Logo_Omega"
            />
          </div>
          <div className={style.nav_bar_link_cont}>
            <ul className={style.nav_bar_ul}>
              <li id={style.intro_link} className={style.nav_bar_li} onClick={handleOpenHomeWindow}>
                <div className={style.span_link}>
                  <span className="span span_light_small">01</span>
                  <div className={style.link}>
                    <p className="p">Intro</p>
                    <p className="p">Intro</p>
                  </div>
                </div>
              </li>
              <li id="idea_link" className={style.nav_bar_li}>
                <div className={style.span_link}>
                  <span className="span span_light_small">02</span>
                  <div className={style.link}>
                    <p className="p">Idea</p>
                    <p className="p">Idea</p>
                  </div>
                </div>
              </li>
              <li id="map_link" className={style.nav_bar_li}>
                <div className={style.span_link}>
                  <span className="span span_light_small">03</span>
                  <div className={style.link}>
                    <p className="p">Map</p>
                    <p className="p">Map</p>
                  </div>
                </div>
              </li>
              <li id="about_link" className={style.nav_bar_li} onClick={handleOpenAboutWindow}>
                <div className={style.span_link}>
                  <span className="span span_light_small">04</span>
                  <div className={style.link}>
                    <p className="p">About</p>
                    <p className="p">About</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={style.nav_bar_button}>
            <Button
              type="button"
              className="btn_primary"
              title="LAUNCH"
              handleClick=""
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
