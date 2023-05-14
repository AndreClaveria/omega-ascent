import React, { useState, useEffect } from 'react';

import style from './section_1.module.scss';

const Section1Bis = () => {
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const targetPosition =
        document.getElementById('cont_section_1_bis').offsetTop;
      if (scrollPosition >= targetPosition) {
        const timer = setTimeout(() => {
          setAppear(true);
        }, 800);

        return () => clearTimeout(timer);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div id="cont_section_1_bis" className={style.cont_section_1_bis}>
      <div className={style.text_cont}>
        <div className={style.text_cont_left}>
          <div className={style.p_container}>
            <p className={`p ${appear ? style.appear : ''}`}>THE PASS</p>
          </div>
          <div className={style.p_container}>
            <p
              className={`p ${style.second_line} ${appear ? style.appear : ''}`}
            >
              IS PAVED WITH
            </p>
          </div>
          <div className={style.p_container}>
            <p
              className={`p ${style.third_line} ${appear ? style.appear : ''}`}
            >
              BUT ASCENT IS
            </p>
          </div>
          <div className={style.p_container}>
            <p className={`p ${appear ? style.appear : ''}`}>TO KEEP</p>
          </div>
        </div>
        <div className={style.text_cont_right}>
          <div className={style.p_container}>
            <p className={`p ${appear ? style.appear : ''}`}>TO SUCCESS</p>
          </div>
          <div className={style.p_container}>
            <p
              className={`p ${style.second_line} ${appear ? style.appear : ''}`}
            >
              CHALLENGES
            </p>
          </div>
          <div className={style.p_container}>
            <p
              className={`p ${style.third_line} ${appear ? style.appear : ''}`}
            >
              A REMINDER
            </p>
          </div>
          <div className={style.p_container}>
            <p className={`p ${appear ? style.appear : ''}`}>CLIMBING</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1Bis;
