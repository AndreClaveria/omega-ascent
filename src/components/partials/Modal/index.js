import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import Image from '@/components/UI/Logo';
import Logo from 'p/img/logo_omega_ascent_white.svg';
import Twitter from 'p/img/twitter.svg';
import Instagram from 'p/img/instagram.svg';
import Github from 'p/img/github.svg';
import Telegram from 'p/img/send.svg';
import Lol from 'p/img/Lol_Logo.svg';

const Index = (props) => {
  const [hasDelayPassed, setDelayPassed] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDelayPassed(true);
    }, 500);
    return () => clearTimeout(timerId);
  }, []);

  function handleCloseModal() {
    setDelayPassed(false);
    const timerId = setTimeout(() => {
      props.setModalOpen(false);
    }, 500);
    return () => clearTimeout(timerId);
  }

  return (
    <div className={`${style.modal_page} ${hasDelayPassed ? style.open : ''}`}>
      <div
        className={`${style.modal_cont} ${hasDelayPassed ? style.open : ''}`}
      >
        <div className={style.left_modal}>
          <div className={style.close_modal} onClick={handleCloseModal}>
            <p className="p p_medium">X</p>
          </div>

          <div className={style.social_network}>
            <div className={style.community}>
              <p className={style.vertical_text}>COMMUNITY</p>
            </div>
            <div className={style.line}></div>
            <div className={style.social_blank}>
              <Image
                src={Logo}
                className={style.logo_a}
                width={60}
                alt="Logo_Ascent"
              />
            </div>
            <div className={style.social_blank}>
              <Image
                src={Twitter}
                className={style.logo_a}
                width={36}
                alt="Twitter"
              />
            </div>
            <div className={style.social_blank}>
              <Image
                src={Instagram}
                className={style.logo_a}
                width={36}
                alt="Instagram"
              />
            </div>
            <div className={style.social_blank}>
              <Image
                src={Github}
                className={style.logo_a}
                width={36}
                alt="Github"
              />
            </div>
            <div className={style.social_blank}>
              <Image
                src={Telegram}
                className={style.logo_a}
                width={36}
                alt="Telegram"
              />
            </div>
            <div className={style.social_blank}>
              <Image
                src={Lol}
                className={style.logo_a}
                width={36}
                alt="League"
              />
            </div>
          </div>
        </div>
        <div className={style.right_modal}></div>
      </div>
    </div>
  );
};

export default Index;
