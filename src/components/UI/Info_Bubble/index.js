import React, { useState, useEffect } from 'react';
import style from './index.module.scss';

import { useRouter } from 'next/router';

import ImageStyle from '@/components/UI/Logo';

import Arrow from 'p/img/arrow/arrow.svg';
import Arrow_White from 'p/img/arrow/arrow_white.svg';

const Index = (props) => {
  const router = useRouter();
  const [opa, setOpa] = useState(false);
  const isHome = router.pathname === '/home';
  const layoutBotClass = isHome ? style.layout_bot : style.layout_single_bot;

  useEffect(() => {
    if (isHome) {
      function handleScroll() {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop === 0) {
          setOpa(false);
        } else {
          setOpa(true);
        }
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isHome]);
  return (
    <div className={layoutBotClass}>
      {isHome && (
        <div className={style.down_cont}>
          <div className={style.down_left_cont}>
            <div className={style.down_left}>
              <ImageStyle
                src={Arrow}
                className={`${style.img_arrow}`}
                width={10}
                alt="Arrow Down"
              />
            </div>
          </div>
          <div className={style.down_right}>
            <p id="p" className={`p ${opa ? style.opa : ''}`}>
              Discover now
            </p>
          </div>
        </div>
      )}
      <button className={style.bubble_cont} onClick={props.handleClick}>
        <div className={style.bubble_top}>
          <p className="p">Omega Ascent</p>
          <div className={style.arrow_cont}>
            <ImageStyle
              src={Arrow_White}
              className={`${style.img_arrow_right_white}`}
              width={10}
              alt="Arrow Right"
            />
            <ImageStyle
              src={Arrow}
              className={`${style.img_arrow_right}`}
              width={10}
              alt="Arrow Right"
            />
          </div>
        </div>
        <div className={style.bubble_bot}>
          <p className="p p_small">$100</p>
          <span className="span span_light_small">(10%)</span>
        </div>
      </button>
    </div>
  );
};

export default Index;
