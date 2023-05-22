import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { useRouter } from 'next/router';
import Image from 'next/image';

import ImageStyle from '@/components/UI/Logo';

import Image_Captcha from 'p/img/captcha/troll.png';
import Piece_Vide from 'p/img/captcha/piece_vide.png';
import Piece from 'p/img/captcha/piece.png';
import Logo_OA from 'p/img/white/logo_omega_ascent_white.svg';

const Index = (props) => {
  const router = useRouter();
  const [hasDelayPassed, setDelayPassed] = useState(false);
  const [hasDelayPassed2, setDelayPassed2] = useState(false);

  const [piecePositionX, setPiecePositionX] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDelayPassed(true);
    }, 500);
    const timer2 = setTimeout(() => {
      setDelayPassed2(true);
    }, 1000);
    return () => clearTimeout(timerId, timer2);
  }, []);

  function handleCloseCaptcha() {
    const timer = setTimeout(() => {
      setDelayPassed2(false);
    }, 500);
    const timer2 = setTimeout(() => {
      setDelayPassed(false);
    }, 800);
    const timerId = setTimeout(() => {
      props.setCaptchaOpen(false);
    }, 1000);

    return () => clearTimeout(timerId, timer2, timer);
  }
  function handlePosition() {
    setPiecePositionX(true);
    const timerId = setTimeout(() => {
        router.push('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }, 4000);
    return () => clearTimeout(timerId);
  }
  return (
    <div
      className={`${style.captcha_page} ${hasDelayPassed ? style.open : ''}`}
    >
      <div
        className={`${style.captcha_cont} ${hasDelayPassed2 ? style.open : ''}`}
      >
        <div className={style.wrapper}>
          <div className={style.title_cont}>
            <p className="p p_big">VERIFICATION</p>
            <button className={style.close_modal} onClick={handleCloseCaptcha}>
              <p className="p p_medium">X</p>
            </button>
          </div>
          <div className={style.wanted_cont}>
            <p className="p p_big">WANTED</p>
            <div className={style.captcha_img_cont}>
              <ImageStyle
                src={Image_Captcha}
                className={style.img_troll}
                width=""
                alt="Image Troll"
              />
              <ImageStyle
                src={Piece_Vide}
                className={style.img_piece_vide}
                width=""
                alt="Piece_Vide"
              />
              <Image
                src={Piece}
                className={`${style.img_piece} ${
                  piecePositionX ? style.actif : ''
                }`}
                width=""
                alt="Piece"
                onClick={handlePosition}
              />
            </div>

            <div className={style.wanted_text_cont}>
              <p className={`p p_small`}>NOT DEAD ONLY ALIVE</p>
              <p className={`p`}>SENSEI FOR THE PROJECT</p>
              <p className={`p p_small`}>$FREE</p>
              <div className={style.little_text_cont}>
                <p className="p">
                  JE SAIS PAS VRAIMENT CE QUE Y&apos;A ECRIS EN BAS A GAUCHE DES
                  AVIS DE RECHERCHE DONC JE VAIS JUSTE RACONTER CA (42)
                </p>
              </div>
              <ImageStyle
                src={Logo_OA}
                className={style.img_oa}
                width={32}
                alt="Logo OA White"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
