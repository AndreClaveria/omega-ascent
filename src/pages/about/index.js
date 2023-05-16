import React from 'react';
import style from './index.module.scss';

import AvatarInfo from '@/components/UI/About_Scroll';
import Person from '@/components/UI/About_Person';
import ImageStyle from '@/components/UI/Logo';

import Avatar1 from 'p/img/about_page/blue_lion.png';
import Avatar2 from 'p/img/about_page/cat-1.jpg';
import Avatar3 from 'p/img/about_page/zwodash.png';
import Avatar4 from 'p/img/about_page/tsuya.jpg';
import Arrow from 'p/img/arrow/arrow.svg';

const Index = () => {
  return (
    <>
      <div className={style.about_page_intro}>
        <div className={style.about_page_intro_cont}>
          <div className={style.title}>
            <p className={`p ${style.p_title}`}>
              Meet the Omega Ascent Team: Introducing Our Experts
            </p>
          </div>
          <div className={style.team_info}>
            <Person title="Florian Moracchini" imagesrc={Avatar1} />

            <Person title="Yvan Daryl Nemeck" imagesrc={Avatar2} />

            <Person title="Ethan Canoine" imagesrc={Avatar3} />

            <Person title="André Claveria" imagesrc={Avatar4} />
          </div>
          <div className={style.arrow_cont}>
            <ImageStyle
              src={Arrow}
              className={`${style.img_arrow}`}
              width={10}
              alt="Arrow Down"
            />
          </div>
        </div>
      </div>
      <div className={style.about_page_scroll}>
        <AvatarInfo />
      </div>
    </>
  );
};

export default Index;
