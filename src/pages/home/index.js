import React, { useState } from 'react';
import style from './index.module.scss';

import Loader from '@/components/partials/Loader';
import Title from '@/components/UI/Title';

export default function Home() {
  const [isLoading, setLoader] = useState(false);
  return (
    <>
      {isLoading ? (
        <Loader setLoader={setLoader} isLoading={isLoading} />
      ) : (
        <>
          <div className={style.home_cont}>
            <Title
              level="h1"
              title="RISE TO THE TOP WITH OMEGA ASCENT"
              className="h1"
              size="title"
            />
          </div>
          <div id="section1" className={style.home_cont_secondary}>
            <Title
              level="h2"
              title="RISE TO THE TOP WITH OMEGA ASCENT SECTION 1"
              className="h2"
              size="big"
            />
          </div>
          <div id="section2" className={style.home_cont_third}>
            <Title
              level="h2"
              title="RISE TO THE TOP WITH OMEGA ASCENT SECTION 2"
              className="h2"
              size="big"
            />
          </div>
        </>
      )}
    </>
  );
}
