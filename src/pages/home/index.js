import React, { useState } from 'react';
import style from './index.module.scss';

import Loader from '@/components/partials/Loader'
import Title from '@/components/UI/Title';

export default function Home() {
  const [isLoading, setLoader] = useState(true);
  return (
    <>
      {isLoading ? (
        <Loader setLoader={setLoader} isLoading={isLoading}/>
      ) : (
        <div className={style.home_cont}>
            {/* <Title level="h1" title="Don't be an Alpha or a Beta, BE A OMEGA" className="h1" size="title" /> */}
        </div>
      )}
    </>
  );
}
