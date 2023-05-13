import React from 'react';
import style from '../index.module.scss';

import Title from '@/components/UI/Title';
import ImageStyle from '@/components/UI/Logo';

import Logo_O from 'p/img/white/omega_logo_white.svg';
import Eye_Ext from 'p/img/eye/eye_ext.png';
import Eye_Int from 'p/img/eye/eye_int.png';
import Eye_Pup from 'p/img/eye/eye_pup.png';

const SectionHome = () => {
  return (
    <div className={style.home}>
      <div className={style.home_text}>
        <Title level="h1" title="RISE TO THE TOP" className="h1" size="title" />
        <div className={style.home_bot}>
          <div className={style.home_img_bot}>
            <ImageStyle
              src={Logo_O}
              className=""
              width={100}
              alt="Logo Omega Page Home"
            />
            <div className={style.eye_cont}>
              <ImageStyle
                src={Eye_Ext}
                className={style.eye_ext}
                width={48}
                alt="Eye Ext"
              />
              <ImageStyle
                src={Eye_Int}
                className={style.eye_int}
                width={32}
                alt="Eye Int"
              />
              <ImageStyle
                src={Eye_Pup}
                className={style.eye_pup}
                width={14}
                alt="Eye Pup"
              />
            </div>
          </div>
          <div className={style.home_text_bot}>
            <p className="p">
              Looking for a cryptocurrency that&apos;s out of this world ? Look
              no further than Omega Ascent !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHome;
