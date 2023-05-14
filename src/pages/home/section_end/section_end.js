import React from 'react';

import style from './section_end.module.scss';

import ImageStyle from '@/components/UI/Logo';

import Sung from 'p/img/autre_page_home/Sung.gif';

const SectionEnd = () => {
  return (
    <div className={style.cont_end}>
      <div className={style.end_cont}>
        <div className={style.text_cont}>
          <p className={`p ${style.p_title}`}>Final Ascent Reached.</p>
          <p className={`p ${style.p_text}`}>
            We hope you enjoyed your time here.
          </p>
          <p className={`p ${style.p_text}`}>
            Thank you for visiting and goodbye!
          </p>
        </div>
        <ImageStyle
          src={Sung}
          className=""
          width={300}
          alt="Gif Solo Leveling"
        />
        <p className="p p_small_small">school project @ 2023 Omega Ascent</p>
      </div>
    </div>
  );
};

export default SectionEnd;
