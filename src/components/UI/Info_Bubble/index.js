import React from 'react';
import style from './index.module.scss';

import { useRouter } from 'next/router';
const Index = (props) => {
  const router = useRouter();
  const isHome = router.pathname === '/home';
  const layoutBotClass = isHome ? style.layout_bot : style.layout_single_bot;
  return (
    <div className={layoutBotClass}>
      {isHome && (
        <div className={style.down_cont}>
          <div className={style.down_left}>
            <p className="p">D</p>
          </div>
          <div className={style.down_right}>
            <p className="p">Discover now</p>
          </div>
        </div>
      )}
      <div className={style.bubble_cont} onClick={props.handleClick}>
        <div className={style.bubble_top}>
          <p className="p">Omega Ascent</p>
          <p className="p">-</p>
        </div>
        <div className={style.bubble_bot}>
          <p className="p p_small">$100</p>
          <span className="span span_light_small">(10%)</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
