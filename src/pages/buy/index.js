import React, { useState } from 'react';
import style from './index.module.scss';

import ImageStyle from '@/components/UI/Logo';
import Button from '@/components/UI/Button';

import Logo_OA from 'p/img/white/logo_omega_ascent_white.svg';
import PokeTop from 'p/img/pokeball/poketop.svg';
import Arrow_White from 'p/img/arrow/arrow_white.svg';
import PokeDown from 'p/img/pokeball/pokedown.svg';

const Index = () => {
  const [captchaOpen, setCaptchaOpen] = useState(false);

  function handleOpenCaptcha() {
    setCaptchaOpen(true);
  }
  return (
    <div className={style.buy_page}>
      <div className={style.buy_card}>
        <div className={style.change_cont}>
          <p className={`p p_big ${style.p_change}`}>CHANGE</p>
        </div>
        <div className={style.poke_cont}>
          <div className={style.select}>
          <div className={style.image_cont}>
          <ImageStyle
                src={Logo_OA}
                className=""
                width={20}
                alt="Logo OA"
              />
          </div>
          <p className="p p_small">OA</p>
          <p className={`p p_big ${style.chevron}`}>&gt;</p>
        </div>
        <div className={style.select_2}>
          <div className={style.image_cont}>

          </div>
          <p className="p p_small">ETH</p>
          <p className={`p p_big ${style.chevron}`}>&gt;</p>
        </div>
          <div className={style.poke_top}>
            <ImageStyle
            src={PokeTop} 
            className="" 
            width={418} 
            alt="Top Ball" 
            />
          </div>
          <div className={style.poke_mid}>
            <div className={style.arrow_cont}>
              <ImageStyle
                src={Arrow_White}
                className=""
                width={20}
                alt="Logo Arrow"
              />
            </div>
          </div>
          <div className={style.poke_down}>
            <ImageStyle
              src={PokeDown}
              className=""
              width={418}
              alt="Down Ball"
            />
          </div>
        </div>
        <Button
          type="button"
          className="btn_secondary"
          title="BUY"
          handleClick={handleOpenCaptcha}
        />
      </div>
    </div>
  );
};

export default Index;
