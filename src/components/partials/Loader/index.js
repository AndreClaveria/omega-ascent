import React, { useState, useEffect } from 'react';
import style from './index.module.scss';

import ImageStyle from '@/components/UI/Logo';

import LogoFill from 'p/img/logo_omega_ascent_fill_line.svg';
import LogoNotFill from 'p/img/logo_omega_ascent_not_fill.svg';

const Index = (props) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < 97) {
        setPercentage(
          (prevPercentage) => prevPercentage + Math.floor(Math.random() * 3) + 1
        );
      }
      if (percentage >= 97) {
        setPercentage(100);
        setTimeout(() => {
            props.setLoader(false);
          }, 400);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [percentage, props]);

  return (
    <div className={style.section_loader_container}>
      <div className={style.section_loader}>
        <div className={style.loader}>
          <ImageStyle
            src={LogoNotFill}
            className={`${style.img_not_fill} ${style.img}`}
            width={600}
            alt="Logo Not Fill"
          />
          <div
            className={style.img_fill_cont}
            style={{ height: `${percentage}%` }}
          >
            <ImageStyle
              src={LogoFill}
              className={`${style.img_fill} ${style.img}`}
              width={600}
              alt="Logo Fill"
            />
          </div>
        </div>
        <span className="span span_light_big"> {percentage}%</span>
      </div>
    </div>
  );
};

export default Index;
