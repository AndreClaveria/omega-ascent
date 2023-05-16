import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import Image from '@/components/UI/Logo';
import Button from '@/components/UI/Button';
import Logo from 'p/img/white/logo_omega_ascent_white.svg';
import Twitter from 'p/img/reseaux-icons/twitter.svg';
import Instagram from 'p/img/reseaux-icons/instagram.svg';
import Github from 'p/img/reseaux-icons/github.svg';
import Telegram from 'p/img/reseaux-icons/send.svg';
import Lol from 'p/img/reseaux-icons/Lol_Logo.svg';
import Market from '@/components/partials/Market';
import Chart from '@/components/partials/Chart';

const Index = (props) => {
  const [hasDelayPassed, setDelayPassed] = useState(false);
  const [showChart, setShowChart] = useState(false);

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
  //lorsque modal
  return (
    <div className={`${style.modal_page} ${hasDelayPassed ? style.open : ''}`}>
      <div
        className={`${style.modal_cont} ${hasDelayPassed ? style.open : ''}`}
      >
        <div
          className={`${style.left_modal} ${hasDelayPassed ? style.open : ''}`}
        >
          <div className={style.close_modal} onClick={handleCloseModal}>
            <p className="p p_medium">X</p>
          </div>

          <div className={style.social_network}>
            <div className={style.community}>
              <p className={style.vertical_text}>COMMUNITY</p>
            </div>

            <div className={style.social_blank}>
              <Image
                src={Logo}
                className={style.logo_a}
                width={40}
                alt="Logo_Ascent"
              />
              <Image
                src={Twitter}
                className={style.logo_a}
                width={24}
                alt="Twitter"
              />
              <Image
                src={Instagram}
                className={style.logo_a}
                width={24}
                alt="Instagram"
              />
              <Image
                src={Github}
                className={style.logo_a}
                width={24}
                alt="Github"
              />
              <Image
                src={Telegram}
                className={style.logo_a}
                width={24}
                alt="Telegram"
              />
              <a
                href="https://www.leagueofgraphs.com/summoner/euw/hikkary#championsData-all-queues"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Lol}
                  className={style.logo_a}
                  width={24}
                  alt="League"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className={`${style.right_modal} ${hasDelayPassed ? style.open : ''}`}
        >
          <div className={style.right_cont}>
            <div className={style.right_top}>
              <p className={style.crypto_title}>CRYPTO COURSE</p>
              <Button
                type="button"
                className="btn_primary"
                title="JOIN NOW"
                handleClick={() => navToHome()}
              />
            </div>
            <div className={style.right_middle}>
              <div className={style.onglet_title}>
                <p
                  className={`p p_medium ${style.title} ${
                    !showChart ? style.active : ''
                  }`}
                  onClick={() => setShowChart(false)}
                >
                  <span>CRYPTO COURSE BOARD </span>
                </p>
                <p
                  className={`p p_medium ${style.title} ${
                    showChart ? style.active : ''
                  }`}
                  onClick={() => setShowChart(true)}
                >
                  <span> CRYPTO COURSE CHART </span>
                </p>
              </div>
              {showChart ? <Chart /> : <Market />}
            </div>
            <div className={style.right_bottom}>
              <p className={`p p_small ${style.copy_title}`}>
                2023 - Crypto course in real time
              </p>
              <p className={`p p_small ${style.copy_title}`}>
                Copyright - © Omega Ascent
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
