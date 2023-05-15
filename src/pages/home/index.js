import React, { useState } from 'react';
import style from './index.module.scss';

import Loader from '@/components/partials/Loader';

import Section_Home from './section_home/section_home';
import Section_1 from './section_1/section_1';
import Section_1_bis from './section_1/section_1_bis';
import Section_2 from './section_2/section_2';
import Section_End from './section_end/section_end'

export default function Home() {
  const [isLoading, setLoader] = useState(false);
  return (
    <>
      {isLoading ? (
        <Loader setLoader={setLoader} isLoading={isLoading} />
      ) : (
        <>
          <div className={style.home_cont}>
            <Section_Home />
          </div>
          <div id="section1" className={style.home_cont_secondary}>
            <Section_1 />
          </div>
          <div id="section1" className={style.home_cont_secondary}>
            <Section_1_bis />
          </div>
          <div id="section2" className={style.home_cont_third}>
            <Section_2 />
          </div>
          <div className={style.home_cont_end}>
            <Section_End />
          </div>
        </>
      )}
    </>
  );
}
