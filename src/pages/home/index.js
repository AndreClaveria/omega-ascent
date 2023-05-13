import React, { useState } from 'react';
import style from './index.module.scss';

import Loader from '@/components/partials/Loader';

import Section_Home from './section/section_home';
import Section_1 from './section/section_1';
import Section_2 from './section/section_2';

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
          <div id="section2" className={style.home_cont_third}>
            <Section_2 />
          </div>
        </>
      )}
    </>
  );
}
