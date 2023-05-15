import React, { useState } from 'react';

import style from './section_1.module.scss';

import ImageStyle from '@/components/UI/Logo';

import Logo_OA from 'p/img/white/logo_omega_ascent_white.svg';
import Logo_A from 'p/img/white/ascent_logo_white.svg';
import Logo_Everest from 'p/img/autre_page_home/everest.svg';
import Logo_Valo from 'p/img/autre_page_home/valo.svg';

const Section1 = () => {
  const [ascent, setAscent] = useState(true);
  const [vanish, setVanish] = useState(false);
  const [everest, setEverest] = useState(false);
  const [valo, setValo] = useState(false);
  const [date_Years, setDate_Years] = useState('22/05/2023');
  const [text_Info, setText_Info] = useState(
    "Omega Ascent is the perfect way to blast off your investment portfolio. Whether you're a seasoned crypto pro or a curious newcomer, Omega Ascent is the ticket to new heights of financial success. So what are you waiting for? Buckle up and join the ascent today!"
  );
  const [image_bubble_left, setImage_bubble_left] = useState(Logo_OA);

  function handleAscent() {
    setVanish(true);
    const timer = setTimeout(() => {
      setDate_Years('22/05/2023');
      setText_Info(
        "Omega Ascent is the perfect way to blast off your investment portfolio. Whether you're a seasoned crypto pro or a curious newcomer, Omega Ascent is the ticket to new heights of financial success. So what are you waiting for? Buckle up and join the ascent today!"
      );
      setImage_bubble_left(Logo_OA);
      setAscent(true);
      setEverest(false);
      setValo(false);
      setVanish(false);
    }, 400);

    return () => clearTimeout(timer);
  }

  function handleEverest() {
    setVanish(true);
    const timer = setTimeout(() => {
      setDate_Years('22/05/2023');
      setText_Info(
        "The first successful ascent of Everest was made by Sir Edmund Hillary and Tenzing Norgay, well play to them ! For those who don't know Everest is the highest mountain in the world with at 8 849m above sea level !"
      );
      setImage_bubble_left(Logo_Everest);
      setAscent(false);
      setEverest(true);
      setValo(false);
      setVanish(false);
    }, 400);

    return () => clearTimeout(timer);
  }

  function handleValo() {
    setVanish(true);
    const timer = setTimeout(() => {
      setDate_Years('02/06/2020');
      setText_Info(
        "Ascent is a map Valorant located in Italy, with areas for long-range combat and narrow corridors for close-range battles. She's one of the most appreciate and challenging map ! Ascent is considered a balanced map that gives both teams an equal chance to win !"
      );
      setImage_bubble_left(Logo_Valo);
      setAscent(false);
      setEverest(false);
      setValo(true);
      setVanish(false);
    }, 400);

    return () => clearTimeout(timer);
  }

  return (
    <div className={style.cont_section_1}>
      <div className={style.section_bubble_cont}>
        <div className={style.bubble_time}>
          <div className={style.bubble_time_top}>
            <p className="p p_small">Ascent Info</p>
            <p className={`p p_small_small ${style.year}`}>YEAR</p>
          </div>
          <div className={style.bubble_time_bot}>
            <div className={style.year_cont}>
              <ImageStyle
                src={image_bubble_left}
                className={vanish ? style.vanish : style.appear}
                width={100}
                alt="Logo Year"
              />
              <p
                className={`p ${style.date_p} ${
                  vanish ? style.vanish : style.appear
                }`}
              >
                {date_Years}
              </p>
            </div>
            <div className={style.timeline}>
              <div className={style.timeline_img}></div>
            </div>
          </div>
        </div>
        <div className={style.bubble_ascent}>
          <div className={style.bubble_ascent_top}>
            <div className={style.bubble_ascent_top_left}>
              <ImageStyle
                src={Logo_A}
                className=""
                width={24}
                alt="Logo Ascent"
              />
              <p className="p p_small">Ascent Meaning</p>
            </div>
            <div className={style.bubble_ascent_top_right}>
              <p
                className={`p p_small_small ${style.ascent_p} ${
                  ascent ? style.active : ''
                }`}
                onClick={handleAscent}
              >
                Ascension
              </p>
              <p
                className={`p p_small_small ${style.everest_p} ${
                  everest ? style.active : ''
                }`}
                onClick={handleEverest}
              >
                Everest
              </p>
              <p
                className={`p p_small_small ${style.valo_p} ${
                  valo ? style.active : ''
                }`}
                onClick={handleValo}
              >
                Valorant
              </p>
            </div>
          </div>
          <div className={style.bubble_ascent_bot}>
            <p className={`p ${vanish ? style.vanish : style.appear}`}>
              {text_Info}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
